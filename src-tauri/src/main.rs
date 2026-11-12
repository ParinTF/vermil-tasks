#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use chrono::{DateTime, Local, NaiveDateTime, NaiveTime, TimeZone};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, fs, path::PathBuf, sync::Mutex, time::Duration};
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    AppHandle, Emitter, Manager, State, WindowEvent,
};
use tauri_plugin_autostart::ManagerExt as _;
use tauri_plugin_global_shortcut::{GlobalShortcutExt, ShortcutState};
use tauri_plugin_updater::UpdaterExt;
use tauri_winrt_notification::{Scenario, Toast};

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
struct Todo {
    id: String,
    title: String,
    #[serde(default)]
    due: Option<String>, // datetime-local form, e.g. "2026-11-12T09:00"
    #[serde(default)]
    remind_before: Option<i64>, // minutes; None = no reminder
    #[serde(default)]
    done: bool,
    #[serde(default)]
    snooze_until: Option<i64>, // epoch ms; set by the snooze buttons on a reminder, replaces the normal remind time
    #[serde(flatten)]
    extra: serde_json::Map<String, serde_json::Value>, // fields only the UI uses (createdAt, completedAt)
}

/// A note: free text kept in its own right, linked from tasks through the task's `noteId`.
#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
struct Note {
    id: String,
    #[serde(default)]
    title: String,
    #[serde(default)]
    body: String,
    #[serde(flatten)]
    extra: serde_json::Map<String, serde_json::Value>, // updatedAt
}

#[derive(Serialize, Deserialize, Default)]
struct Data {
    todos: Vec<Todo>,
    // todo id -> the remind time already fired, so editing a due date re-arms the reminder
    #[serde(default)]
    notified: HashMap<String, i64>,
    // true once "start with Windows" has been switched on for the first time
    #[serde(default)]
    autostart_set: bool,
    // local time of day (HH:MM) for the morning summary: None means the default 09:00, "" means off
    #[serde(default)]
    summary_time: Option<String>,
    // the day (YYYY-MM-DD) the summary last fired, so it shows once a day
    #[serde(default)]
    summary_day: Option<String>,
    #[serde(default)]
    notes: Vec<Note>,
    // true once the notes that tasks used to carry as text were turned into notes of their own
    #[serde(default)]
    notes_migrated: bool,
    // optional modules keep their data here, one JSON value per module id; "_on" lists the ones switched on
    #[serde(default)]
    modules: serde_json::Map<String, serde_json::Value>,
}

const QUICK_SHORTCUT: &str = "Ctrl+Alt+T";

struct Store {
    file: PathBuf,
    data: Mutex<Data>,
}

fn parse_due(due: &str) -> Option<chrono::DateTime<Local>> {
    let naive = NaiveDateTime::parse_from_str(due, "%Y-%m-%dT%H:%M")
        .or_else(|_| NaiveDateTime::parse_from_str(due, "%Y-%m-%dT%H:%M:%S"))
        .ok()?;
    Local.from_local_datetime(&naive).earliest()
}

fn remind_at(todo: &Todo) -> Option<i64> {
    if todo.done {
        return None;
    }
    if let Some(at) = todo.snooze_until {
        return Some(at);
    }
    let due = parse_due(todo.due.as_deref()?)?;
    Some(due.timestamp_millis() - todo.remind_before? * 60_000)
}

fn due_reminders(todos: &[Todo], notified: &HashMap<String, i64>, now: i64) -> Vec<(Todo, i64)> {
    todos
        .iter()
        .filter_map(|t| Some((t, remind_at(t)?)))
        .filter(|(t, at)| *at <= now && notified.get(&t.id) != Some(at))
        .map(|(t, at)| (t.clone(), at))
        .collect()
}

const DEFAULT_SUMMARY_TIME: &str = "09:00";

/// The morning summary shows once a day, from its set time onward, so a launch after that time still gets it.
/// `setting` is "" when switched off; times are zero-padded "HH:MM" so they compare as text.
fn summary_due(setting: &str, last_day: Option<&str>, today: &str, now_time: &str) -> bool {
    !setting.is_empty() && now_time >= setting && last_day != Some(today)
}

/// (due later today, overdue, open) over the tasks that are not done. A finished repeating task's next copy
/// stays hidden in the UI until its day (`hideUntil`), so it is left out of the counts too.
fn summary_counts(todos: &[Todo], now: DateTime<Local>) -> (usize, usize, usize) {
    let today = now.format("%Y-%m-%d").to_string();
    let (mut due_today, mut overdue, mut open) = (0, 0, 0);
    for t in todos.iter().filter(|t| !t.done) {
        if t.extra.get("hideUntil").and_then(|v| v.as_str()).map_or(false, |day| day > today.as_str()) {
            continue;
        }
        open += 1;
        if let Some(due) = t.due.as_deref().and_then(parse_due) {
            if due < now {
                overdue += 1;
            } else if due.date_naive() == now.date_naive() {
                due_today += 1;
            }
        }
    }
    (due_today, overdue, open)
}

fn summary_text(due_today: usize, overdue: usize, open: usize) -> (String, String) {
    let title = match (due_today, overdue) {
        (0, 0) => "Nothing due today".to_string(),
        (d, 0) => format!("Today: {d} due"),
        (0, o) => format!("{o} overdue"),
        (d, o) => format!("Today: {d} due · {o} overdue"),
    };
    (title, format!("{open} open {}", if open == 1 { "task" } else { "tasks" }))
}

/// Task notes became standalone notes in 1.4.1: each distinct note text becomes a Note titled like its task, and the
/// task keeps a `noteId` link. The copies of a repeating task share one note while their text is the same.
fn migrate_notes(data: &mut Data) {
    let mut made: HashMap<(String, String), String> = HashMap::new(); // (series or task id, text) -> note id
    let stamp = chrono::Utc::now().to_rfc3339_opts(chrono::SecondsFormat::Millis, true);
    for todo in data.todos.iter_mut() {
        let Some(text) = todo.extra.remove("notes").and_then(|v| v.as_str().map(str::to_string)) else {
            continue; // no notes, or a null left behind: the key is gone either way
        };
        if text.trim().is_empty() {
            continue;
        }
        let group = todo.extra.get("series").and_then(|v| v.as_str()).unwrap_or(todo.id.as_str()).to_string();
        let id = match made.get(&(group.clone(), text.clone())) {
            Some(id) => id.clone(),
            None => {
                let id = format!("n{}-{}", chrono::Utc::now().timestamp_micros(), data.notes.len());
                let mut extra = serde_json::Map::new();
                extra.insert("updatedAt".into(), stamp.clone().into());
                data.notes.push(Note { id: id.clone(), title: todo.title.clone(), body: text.clone(), extra });
                made.insert((group, text), id.clone());
                id
            }
        };
        todo.extra.insert("noteId".into(), id.into());
    }
}

/// Removes the link from every task that points at this note; returns how many there were.
fn unlink_note(todos: &mut [Todo], id: &str) -> usize {
    let mut n = 0;
    for todo in todos.iter_mut() {
        if todo.extra.get("noteId").and_then(|v| v.as_str()) == Some(id) {
            todo.extra.remove("noteId");
            n += 1;
        }
    }
    n
}

fn load(file: &PathBuf) -> Data {
    let existed = file.exists();
    let mut data = match fs::read_to_string(file) {
        Ok(text) => serde_json::from_str(&text).unwrap_or_else(|_| {
            // unreadable file: keep a copy so the next save does not destroy it
            let _ = fs::copy(file, file.with_extension("json.corrupt"));
            Data::default()
        }),
        Err(_) => Data::default(),
    };
    if !data.notes_migrated {
        if existed {
            let _ = fs::copy(file, file.with_file_name("todos.pre-notes.json")); // the file as it was, once
        }
        migrate_notes(&mut data);
        data.notes_migrated = true;
        let _ = save(file, &data);
    }
    data
}

fn save(file: &PathBuf, data: &Data) -> Result<(), String> {
    let tmp = file.with_extension("json.tmp");
    let text = serde_json::to_string_pretty(data).map_err(|e| e.to_string())?;
    fs::write(&tmp, text).map_err(|e| e.to_string())?;
    fs::rename(&tmp, file).map_err(|e| e.to_string()) // atomic: a crash mid-write cannot truncate the real file
}

/// When a snooze button's action should fire again; None for anything that is not a snooze action.
fn snooze_time(action: &str, now: chrono::DateTime<Local>) -> Option<i64> {
    let at = match action {
        "10" => now + chrono::Duration::minutes(10),
        "60" => now + chrono::Duration::hours(1),
        "tomorrow" => {
            let nine = (now.date_naive() + chrono::Days::new(1)).and_hms_opt(9, 0, 0)?;
            Local.from_local_datetime(&nine).earliest()?
        }
        _ => return None,
    };
    Some(at.timestamp_millis())
}

fn snooze(app: &AppHandle, id: &str, until: i64) {
    let store = app.state::<Store>();
    {
        let mut data = store.data.lock().unwrap();
        if let Some(todo) = data.todos.iter_mut().find(|t| t.id == id) {
            todo.snooze_until = Some(until);
        }
        let _ = save(&store.file, &data);
    }
    let _ = app.emit("todos-changed", ());
}

/// Toasts need a registered app id: the installer registers ours, a build run from target/ borrows PowerShell's.
fn toast_app_id(app: &AppHandle) -> String {
    let dev = std::env::current_exe().map(|p| p.to_string_lossy().contains(r"\target\")).unwrap_or(false);
    if dev { Toast::POWERSHELL_APP_ID.to_string() } else { app.config().identifier.clone() }
}

/// One quiet toast a day: what is due, what is overdue, how much is open. Clicking it opens the app.
fn notify_summary(app: &AppHandle, due_today: usize, overdue: usize, open: usize) {
    let (title, text) = summary_text(due_today, overdue, open);
    let handle = app.clone();
    let _ = Toast::new(&toast_app_id(app))
        .title(&title)
        .text1(&text)
        .on_activated(move |_| {
            show(&handle);
            Ok(())
        })
        .show();
}

/// A plain toast for a module (the focus timer): clicking it brings the window up.
#[tauri::command]
fn toast(app: AppHandle, title: String, text: String) {
    let handle = app.clone();
    let _ = Toast::new(&toast_app_id(&app))
        .title(&title.chars().take(100).collect::<String>())
        .text1(&text.chars().take(200).collect::<String>())
        .on_activated(move |_| {
            show(&handle);
            Ok(())
        })
        .show();
}

/// Shows a reminder that stays on screen until answered, with snooze buttons.
fn notify(app: &AppHandle, todo: &Todo) {
    let app_id = toast_app_id(app);
    let due = todo.due.as_deref().and_then(parse_due).map(|d| d.format("%d/%m/%Y %H:%M").to_string());
    let (handle, id) = (app.clone(), todo.id.clone());
    let _ = Toast::new(&app_id)
        .title(&format!("Reminder: {}", todo.title))
        .text1(&format!("Due {}", due.unwrap_or_default()))
        .scenario(Scenario::Reminder)
        .add_button("10 min", "10")
        .add_button("1 hour", "60")
        .add_button("Tomorrow", "tomorrow")
        .on_activated(move |action| {
            match action.as_deref().and_then(|a| snooze_time(a, Local::now())) {
                Some(until) => snooze(&handle, &id, until),
                None => show(&handle), // clicked the reminder itself
            }
            Ok(())
        })
        .show();
}

fn check_reminders(app: &AppHandle) {
    let store = app.state::<Store>();
    let mut data = store.data.lock().unwrap();
    let now = Local::now();
    let mut changed = false;
    for (todo, at) in due_reminders(&data.todos, &data.notified, now.timestamp_millis()) {
        notify(app, &todo);
        data.notified.insert(todo.id, at);
        changed = true;
    }
    let today = now.format("%Y-%m-%d").to_string();
    let setting = data.summary_time.clone().unwrap_or_else(|| DEFAULT_SUMMARY_TIME.to_string());
    if summary_due(&setting, data.summary_day.as_deref(), &today, &now.format("%H:%M").to_string()) {
        // the day is recorded even with nothing to show, so adding a task at 14:00 does not trigger a "morning" summary
        data.summary_day = Some(today);
        changed = true;
        let (due_today, overdue, open) = summary_counts(&data.todos, now);
        if open > 0 {
            notify_summary(app, due_today, overdue, open);
        }
    }
    if changed {
        let _ = save(&store.file, &data);
    }
}

#[tauri::command]
fn get_todos(store: State<Store>) -> Vec<Todo> {
    store.data.lock().unwrap().todos.clone()
}

#[tauri::command]
fn save_todos(app: AppHandle, store: State<Store>, todos: Vec<Todo>) -> Result<(), String> {
    {
        let mut data = store.data.lock().unwrap();
        data.notified.retain(|id, _| todos.iter().any(|t| &t.id == id));
        data.todos = todos;
        save(&store.file, &data)?;
    }
    check_reminders(&app);
    Ok(())
}

#[tauri::command]
fn get_summary_time(store: State<Store>) -> String {
    store.data.lock().unwrap().summary_time.clone().unwrap_or_else(|| DEFAULT_SUMMARY_TIME.to_string())
}

/// `time` is "HH:MM", or "" to switch the summary off. A changed time applies today: it shows now if that time has passed.
#[tauri::command]
fn set_summary_time(app: AppHandle, store: State<Store>, time: String) -> Result<(), String> {
    if !time.is_empty() && NaiveTime::parse_from_str(&time, "%H:%M").is_err() {
        return Err("the time must look like 09:00".into());
    }
    {
        let mut data = store.data.lock().unwrap();
        if data.summary_time.clone().unwrap_or_else(|| DEFAULT_SUMMARY_TIME.to_string()) == time {
            return Ok(());
        }
        data.summary_time = Some(time);
        data.summary_day = None;
        save(&store.file, &data)?;
    }
    check_reminders(&app);
    Ok(())
}

#[tauri::command]
fn get_notes(store: State<Store>) -> Vec<Note> {
    store.data.lock().unwrap().notes.clone()
}

/// A module id is a short lowercase word (the UI also uses "_on" for the enabled list), so it can never be a path or a clash with a field.
fn valid_module_id(id: &str) -> bool {
    !id.is_empty() && id.len() <= 24 && id.bytes().all(|b| b.is_ascii_lowercase() || b == b'_')
}

#[tauri::command]
fn get_modules(store: State<Store>) -> serde_json::Map<String, serde_json::Value> {
    store.data.lock().unwrap().modules.clone()
}

#[tauri::command]
fn save_module(store: State<Store>, id: String, value: serde_json::Value) -> Result<(), String> {
    if !valid_module_id(&id) {
        return Err("bad module id".into());
    }
    if value.to_string().len() > 8 * 1024 * 1024 {
        return Err("module data is too large".into());
    }
    let mut data = store.data.lock().unwrap();
    data.modules.insert(id, value);
    save(&store.file, &data)
}

/// Adds or replaces notes by id (one at a time from the editor, many at once from an import).
#[tauri::command]
fn save_notes(store: State<Store>, notes: Vec<Note>) -> Result<(), String> {
    if notes.iter().any(|n| n.id.is_empty()) {
        return Err("every note needs an id".into());
    }
    let mut data = store.data.lock().unwrap();
    for note in notes {
        match data.notes.iter_mut().find(|n| n.id == note.id) {
            Some(existing) => *existing = note,
            None => data.notes.push(note),
        }
    }
    save(&store.file, &data)
}

/// Deletes a note and unlinks the tasks that pointed at it; the tasks stay.
#[tauri::command]
fn delete_note(app: AppHandle, store: State<Store>, id: String) -> Result<(), String> {
    {
        let mut data = store.data.lock().unwrap();
        data.notes.retain(|n| n.id != id);
        unlink_note(&mut data.todos, &id);
        save(&store.file, &data)?;
    }
    let _ = app.emit("todos-changed", ());
    Ok(())
}

#[derive(Serialize)]
struct Converted {
    todos: Vec<Todo>,
    notes: Vec<Note>,
}

/// Backups from before notes existed keep a task's notes as text on the task: this turns them into notes the same
/// way the first-run migration does, so an old backup imports without losing them.
#[tauri::command]
fn convert_legacy_notes(todos: Vec<Todo>) -> Converted {
    let mut data = Data { todos, ..Data::default() };
    migrate_notes(&mut data);
    Converted { todos: data.todos, notes: data.notes }
}

/// Returns the newer version number when the release feed has one.
#[tauri::command]
async fn check_update(app: AppHandle) -> Result<Option<String>, String> {
    let update = app.updater().map_err(|e| e.to_string())?.check().await.map_err(|e| e.to_string())?;
    Ok(update.map(|u| u.version))
}

/// Downloads the signed installer, runs it, and restarts into the new version.
#[tauri::command]
async fn install_update(app: AppHandle) -> Result<(), String> {
    let update = app.updater().map_err(|e| e.to_string())?.check().await.map_err(|e| e.to_string())?;
    if let Some(update) = update {
        update.download_and_install(|_, _| {}, || {}).await.map_err(|e| e.to_string())?;
        app.restart();
    }
    Ok(())
}

/// Writes a backup of all tasks to the Downloads folder and returns its path.
#[tauri::command]
fn export_todos(app: AppHandle, store: State<Store>) -> Result<String, String> {
    let dir = app.path().download_dir().map_err(|e| e.to_string())?;
    let file = dir.join(format!("vermil-tasks-backup-{}.json", Local::now().format("%Y-%m-%d-%H%M%S")));
    let data = store.data.lock().unwrap();
    let backup = serde_json::json!({
        "app": "vermil-tasks",
        "version": app.package_info().version.to_string(),
        "todos": data.todos,
        "notes": data.notes,
        "modules": data.modules,
    });
    let text = serde_json::to_string_pretty(&backup).map_err(|e| e.to_string())?;
    fs::write(&file, text).map_err(|e| e.to_string())?;
    Ok(file.display().to_string())
}

#[tauri::command]
fn get_autostart(app: AppHandle) -> bool {
    app.autolaunch().is_enabled().unwrap_or(false)
}

#[tauri::command]
fn set_autostart(app: AppHandle, on: bool) -> Result<(), String> {
    let launcher = app.autolaunch();
    (if on { launcher.enable() } else { launcher.disable() }).map_err(|e| e.to_string())
}

/// Adds a task typed into the quick-add bar and tells the main window to reload.
#[tauri::command]
fn quick_add(app: AppHandle, store: State<Store>, title: String, due: Option<String>) -> Result<(), String> {
    let due = due.filter(|d| parse_due(d).is_some());
    let remind_before = due.as_ref().map(|_| 0); // a due date set from the bar reminds at that time
    let title: String = title.trim().chars().take(200).collect();
    if title.is_empty() {
        return Ok(());
    }
    let now = chrono::Utc::now();
    let mut extra = serde_json::Map::new();
    extra.insert("createdAt".into(), now.to_rfc3339_opts(chrono::SecondsFormat::Millis, true).into());
    extra.insert("completedAt".into(), serde_json::Value::Null);
    {
        let mut data = store.data.lock().unwrap();
        data.todos.push(Todo { id: format!("q{}", now.timestamp_micros()), title, due, remind_before, done: false, snooze_until: None, extra });
        save(&store.file, &data)?;
    }
    let _ = app.emit("todos-changed", ());
    Ok(())
}

/// False when another program already owns the shortcut.
#[tauri::command]
fn quick_shortcut(app: AppHandle) -> bool {
    app.global_shortcut().is_registered(QUICK_SHORTCUT)
}

fn show_quick(app: &AppHandle) {
    if let Some(win) = app.get_webview_window("quick") {
        let _ = win.center();
        let _ = win.show();
        let _ = win.set_focus();
    }
}

fn show(app: &AppHandle) {
    if let Some(win) = app.get_webview_window("main") {
        let _ = win.show();
        let _ = win.unminimize();
        let _ = win.set_focus();
    }
}

fn main() {
    tauri::Builder::default()
        // a second instance would fire every reminder twice
        .plugin(tauri_plugin_single_instance::init(|app, args, _cwd| {
            // `vermil-tasks.exe --quick` opens the quick-add bar of the running app
            if args.iter().any(|a| a == "--quick") {
                show_quick(app)
            } else {
                show(app)
            }
        }))
        .plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler(|app, _shortcut, event| {
                    if event.state() == ShortcutState::Pressed {
                        show_quick(app);
                    }
                })
                .build(),
        )
        // launched at sign-in with --hidden, so it starts in the tray
        .plugin(tauri_plugin_autostart::init(tauri_plugin_autostart::MacosLauncher::LaunchAgent, Some(vec!["--hidden"])))
        .plugin(tauri_plugin_updater::Builder::new().build())
        .invoke_handler(tauri::generate_handler![get_todos, save_todos, check_update, install_update, get_autostart, set_autostart, quick_add, quick_shortcut, export_todos, get_summary_time, set_summary_time, get_notes, save_notes, delete_note, convert_legacy_notes, get_modules, save_module, toast])
        .on_window_event(|window, event| {
            if let WindowEvent::CloseRequested { api, .. } = event {
                api.prevent_close();
                let _ = window.hide(); // stay in the tray so reminders keep firing
            }
        })
        .setup(|app| {
            let dir = app.path().app_data_dir()?;
            fs::create_dir_all(&dir)?;
            let file = dir.join("todos.json");
            // carry data over from the app's previous identifier (it was "Todolist" before the rename)
            let old = app.path().data_dir()?.join("com.todolist.app").join("todos.json");
            if !file.exists() && old.exists() {
                fs::copy(&old, &file)?;
            }
            app.manage(Store { data: Mutex::new(load(&file)), file });

            // reminders only fire while the app runs, so start with Windows by default;
            // done once, after that the checkbox in the footer decides
            if !cfg!(debug_assertions) {
                let store = app.state::<Store>();
                let mut data = store.data.lock().unwrap();
                if !data.autostart_set {
                    let _ = app.autolaunch().enable();
                    data.autostart_set = true;
                    let _ = save(&store.file, &data);
                }
            }
            // Right after an update the outgoing process can still hold the shortcut for a moment,
            // so retry for a few seconds before giving up (it stays off if another program owns the keys).
            let shortcuts = app.handle().clone();
            std::thread::spawn(move || {
                for _ in 0..8 {
                    if shortcuts.global_shortcut().register(QUICK_SHORTCUT).is_ok() {
                        break;
                    }
                    std::thread::sleep(Duration::from_millis(500));
                }
            });
            if !std::env::args().any(|a| a == "--hidden") {
                show(app.handle());
            }

            let open = MenuItem::with_id(app, "open", "Open", true, None::<&str>)?;
            let quick = MenuItem::with_id(app, "quick", "Quick add", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
            TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .tooltip("Vermil Tasks")
                .menu(&Menu::with_items(app, &[&open, &quick, &quit])?)
                .show_menu_on_left_click(false)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "open" => show(app),
                    "quick" => show_quick(app),
                    "quit" => app.exit(0),
                    _ => {}
                })
                .on_tray_icon_event(|tray, event| {
                    if let TrayIconEvent::Click { button: MouseButton::Left, button_state: MouseButtonState::Up, .. } = event {
                        show(tray.app_handle());
                    }
                })
                .build(app)?;

            let handle = app.handle().clone();
            std::thread::spawn(move || loop {
                check_reminders(&handle); // first pass also catches reminders missed while the app was closed
                std::thread::sleep(Duration::from_secs(30));
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Vermil Tasks");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn module_ids_are_short_lowercase_words() {
        assert!(valid_module_id("pomodoro") && valid_module_id("_on"));
        for bad in ["", "Money", "a/b", "..", "has space", "x1", "waytoolongamoduleidentifierhere"] {
            assert!(!valid_module_id(bad), "{bad}");
        }
    }

    #[test]
    fn data_without_modules_still_loads() {
        let d: Data = serde_json::from_str(r#"{"todos":[]}"#).unwrap();
        assert!(d.modules.is_empty());
    }

    const NOW: &str = "2026-11-11T10:00";
    fn ms(s: &str) -> i64 {
        parse_due(s).unwrap().timestamp_millis()
    }
    fn todo(due: Option<&str>, remind_before: Option<i64>, done: bool) -> Todo {
        Todo { id: "a".into(), title: "t".into(), due: due.map(Into::into), remind_before, done, snooze_until: None, extra: Default::default() }
    }
    fn fires(t: Todo, notified: &[(&str, i64)]) -> bool {
        let notified = notified.iter().map(|(id, at)| (id.to_string(), *at)).collect();
        !due_reminders(&[t], &notified, ms(NOW)).is_empty()
    }

    #[test]
    fn not_yet_due() {
        assert!(!fires(todo(Some("2026-11-11T10:30"), Some(0), false), &[]));
    }
    #[test]
    fn due_now() {
        assert!(fires(todo(Some(NOW), Some(0), false), &[]));
    }
    #[test]
    fn remind_before_shifts_earlier() {
        assert!(fires(todo(Some("2026-11-11T10:30"), Some(60), false), &[]));
    }
    #[test]
    fn missed_while_closed_still_fires() {
        assert!(fires(todo(Some("2026-11-01T00:00"), Some(0), false), &[]));
    }
    #[test]
    fn already_notified_does_not_repeat() {
        assert!(!fires(todo(Some("2026-11-11T09:00"), Some(0), false), &[("a", ms("2026-11-11T09:00"))]));
    }
    #[test]
    fn changed_due_date_fires_again() {
        assert!(fires(todo(Some("2026-11-11T09:30"), Some(0), false), &[("a", ms("2026-11-11T09:00"))]));
    }
    #[test]
    fn done_no_due_or_reminder_off_never_fire() {
        assert!(!fires(todo(Some("2026-11-11T09:00"), Some(0), true), &[]));
        assert!(!fires(todo(None, Some(0), false), &[]));
        assert!(!fires(todo(Some("2026-11-11T09:00"), None, false), &[]));
    }
    fn at(s: &str) -> DateTime<Local> {
        parse_due(s).unwrap()
    }
    fn open_todo(due: Option<&str>, done: bool, hide_until: Option<&str>) -> Todo {
        let mut t = todo(due, None, done);
        if let Some(day) = hide_until {
            t.extra.insert("hideUntil".into(), day.into());
        }
        t
    }

    #[test]
    fn summary_shows_once_a_day_from_its_time_onward() {
        assert!(!summary_due("09:00", None, "2026-11-11", "08:59")); // not yet
        assert!(summary_due("09:00", None, "2026-11-11", "09:00"));
        assert!(summary_due("09:00", None, "2026-11-11", "20:15")); // a launch late in the day still gets it
        assert!(!summary_due("09:00", Some("2026-11-11"), "2026-11-11", "10:00")); // already shown today
        assert!(summary_due("09:00", Some("2026-11-10"), "2026-11-11", "09:00")); // yesterday's does not count
        assert!(!summary_due("", None, "2026-11-11", "10:00")); // switched off
    }
    #[test]
    fn summary_counts_what_is_due_overdue_and_open() {
        let now = at("2026-11-11T10:00");
        let todos = vec![
            open_todo(Some("2026-11-11T08:00"), false, None), // overdue
            open_todo(Some("2026-11-10T09:00"), false, None), // overdue
            open_todo(Some("2026-11-11T15:00"), false, None), // due later today
            open_todo(Some("2026-11-12T09:00"), false, None), // tomorrow: open only
            open_todo(None, false, None),                     // no date: open only
            open_todo(Some("2026-11-11T09:00"), true, None),  // done: ignored
            open_todo(Some("2026-11-12T09:00"), false, Some("2026-11-12")), // next copy of a finished repeating task: hidden
        ];
        assert_eq!(summary_counts(&todos, now), (1, 2, 5));
        assert_eq!(summary_counts(&[], now), (0, 0, 0));
    }
    #[test]
    fn summary_text_reads_naturally() {
        assert_eq!(summary_text(2, 1, 5), ("Today: 2 due · 1 overdue".to_string(), "5 open tasks".to_string()));
        assert_eq!(summary_text(3, 0, 3), ("Today: 3 due".to_string(), "3 open tasks".to_string()));
        assert_eq!(summary_text(0, 2, 4), ("2 overdue".to_string(), "4 open tasks".to_string()));
        assert_eq!(summary_text(0, 0, 1), ("Nothing due today".to_string(), "1 open task".to_string()));
    }

    fn task(id: &str, title: &str, fields: &[(&str, &str)]) -> Todo {
        let mut t = todo(None, None, false);
        t.id = id.into();
        t.title = title.into();
        for (k, v) in fields {
            t.extra.insert((*k).into(), (*v).into());
        }
        t
    }
    fn migrated(todos: Vec<Todo>) -> Data {
        let mut data = Data { todos, ..Data::default() };
        migrate_notes(&mut data);
        data
    }
    fn link(t: &Todo) -> Option<&str> {
        t.extra.get("noteId").and_then(|v| v.as_str())
    }

    #[test]
    fn migration_turns_task_notes_into_linked_notes() {
        let data = migrated(vec![task("a", "Send the report", &[("notes", "SELECT 1;")]), task("b", "No notes here", &[])]);
        assert_eq!(data.notes.len(), 1);
        let note = &data.notes[0];
        assert_eq!((note.title.as_str(), note.body.as_str()), ("Send the report", "SELECT 1;"));
        assert!(note.extra.get("updatedAt").is_some());
        assert_eq!(link(&data.todos[0]), Some(note.id.as_str()));
        assert!(!data.todos[0].extra.contains_key("notes"), "the old text field is gone");
        assert_eq!(link(&data.todos[1]), None);
    }
    #[test]
    fn migration_shares_one_note_across_a_repeating_series_with_the_same_text() {
        let data = migrated(vec![
            task("a", "Stretch", &[("series", "S"), ("notes", "10 minutes")]),
            task("b", "Stretch", &[("series", "S"), ("notes", "10 minutes")]), // a later copy
            task("c", "Stretch", &[("series", "S"), ("notes", "15 minutes")]), // the text changed
            task("d", "Other", &[("notes", "10 minutes")]),                    // same text, another task
            task("e", "Other too", &[("notes", "10 minutes")]),                // and without a series, tasks stay apart
        ]);
        assert_eq!(data.notes.len(), 4);
        assert_eq!(link(&data.todos[0]), link(&data.todos[1]));
        assert_ne!(link(&data.todos[0]), link(&data.todos[2]));
        assert_ne!(link(&data.todos[0]), link(&data.todos[3]));
        assert_ne!(link(&data.todos[3]), link(&data.todos[4]));
        let ids: std::collections::HashSet<_> = data.notes.iter().map(|n| n.id.clone()).collect();
        assert_eq!(ids.len(), 4, "note ids are unique");
    }
    #[test]
    fn migration_ignores_blank_and_null_notes_and_can_run_twice() {
        let mut blank = task("a", "t", &[("notes", "   \n ")]);
        blank.extra.insert("noteId".into(), "stale".into()); // not touched by a blank note
        let mut null = task("b", "t", &[]);
        null.extra.insert("notes".into(), serde_json::Value::Null);
        let mut data = migrated(vec![blank, null, task("c", "t", &[("notes", "x")])]);
        assert_eq!(data.notes.len(), 1);
        assert!(!data.todos[0].extra.contains_key("notes") && !data.todos[1].extra.contains_key("notes"));
        let before = data.notes[0].id.clone();
        migrate_notes(&mut data); // nothing left to convert
        assert_eq!(data.notes.len(), 1);
        assert_eq!(data.notes[0].id, before);
    }
    #[test]
    fn unlinking_a_note_leaves_the_tasks() {
        let mut todos = vec![task("a", "x", &[("noteId", "n1")]), task("b", "y", &[("noteId", "n2")]), task("c", "z", &[("noteId", "n1")])];
        assert_eq!(unlink_note(&mut todos, "n1"), 2);
        assert_eq!(todos.iter().map(|t| link(t).map(str::to_string)).collect::<Vec<_>>(), vec![None, Some("n2".to_string()), None]);
        assert_eq!(todos.len(), 3);
    }
    #[test]
    fn notes_round_trip_through_json_with_their_timestamp() {
        let note: Note = serde_json::from_str(r#"{"id":"n1","title":"T","body":"B","updatedAt":"2026-11-12T10:00:00.000Z"}"#).unwrap();
        let back = serde_json::to_value(&note).unwrap();
        assert_eq!(back["updatedAt"], "2026-11-12T10:00:00.000Z");
        assert_eq!((back["title"].as_str(), back["body"].as_str()), (Some("T"), Some("B")));
        let sparse: Note = serde_json::from_str(r#"{"id":"n2"}"#).unwrap(); // title and body are optional
        assert_eq!((sparse.title.as_str(), sparse.body.as_str()), ("", ""));
    }

    #[test]
    fn snooze_replaces_the_remind_time() {
        let mut t = todo(Some("2026-11-11T09:00"), Some(0), false);
        t.snooze_until = Some(ms("2026-11-11T10:30"));
        // the original 09:00 reminder already fired; the snoozed one is not due until 10:30
        assert!(due_reminders(&[t.clone()], &HashMap::from([("a".to_string(), ms("2026-11-11T09:00"))]), ms(NOW)).is_empty());
        assert_eq!(due_reminders(&[t], &HashMap::new(), ms("2026-11-11T10:30")).len(), 1);
    }
    #[test]
    fn snooze_buttons_map_to_times() {
        let now = parse_due(NOW).unwrap();
        assert_eq!(snooze_time("10", now), Some(ms("2026-11-11T10:10")));
        assert_eq!(snooze_time("60", now), Some(ms("2026-11-11T11:00")));
        assert_eq!(snooze_time("tomorrow", now), Some(ms("2026-11-12T09:00")));
        assert_eq!(snooze_time("", now), None);
    }
    #[test]
    fn ui_only_fields_survive_a_round_trip() {
        let json = r#"{"id":"a","title":"t","due":null,"remindBefore":10,"done":true,"completedAt":"x"}"#;
        let back = serde_json::to_value(serde_json::from_str::<Todo>(json).unwrap()).unwrap();
        assert_eq!(back["completedAt"], "x");
        assert_eq!(back["remindBefore"], 10);
    }
}
