#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use chrono::{Local, NaiveDateTime, TimeZone};
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

#[derive(Serialize, Deserialize, Default)]
struct Data {
    todos: Vec<Todo>,
    // todo id -> the remind time already fired, so editing a due date re-arms the reminder
    #[serde(default)]
    notified: HashMap<String, i64>,
    // true once "start with Windows" has been switched on for the first time
    #[serde(default)]
    autostart_set: bool,
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

fn load(file: &PathBuf) -> Data {
    let Ok(text) = fs::read_to_string(file) else {
        return Data::default();
    };
    serde_json::from_str(&text).unwrap_or_else(|_| {
        // unreadable file: keep a copy so the next save does not destroy it
        let _ = fs::copy(file, file.with_extension("json.corrupt"));
        Data::default()
    })
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

/// Shows a reminder that stays on screen until answered, with snooze buttons.
fn notify(app: &AppHandle, todo: &Todo) {
    // toasts need a registered app id: the installer registers ours, a build run from target/ borrows PowerShell's
    let dev = std::env::current_exe().map(|p| p.to_string_lossy().contains(r"\target\")).unwrap_or(false);
    let app_id = if dev { Toast::POWERSHELL_APP_ID.to_string() } else { app.config().identifier.clone() };
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
    let hits = due_reminders(&data.todos, &data.notified, Local::now().timestamp_millis());
    if hits.is_empty() {
        return;
    }
    for (todo, at) in hits {
        notify(app, &todo);
        data.notified.insert(todo.id, at);
    }
    let _ = save(&store.file, &data);
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
    let backup = serde_json::json!({
        "app": "vermil-tasks",
        "version": app.package_info().version.to_string(),
        "todos": store.data.lock().unwrap().todos,
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
fn quick_add(app: AppHandle, store: State<Store>, title: String) -> Result<(), String> {
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
        data.todos.push(Todo { id: format!("q{}", now.timestamp_micros()), title, due: None, remind_before: None, done: false, snooze_until: None, extra });
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
        .invoke_handler(tauri::generate_handler![get_todos, save_todos, check_update, install_update, get_autostart, set_autostart, quick_add, quick_shortcut, export_todos])
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
            let _ = app.global_shortcut().register(QUICK_SHORTCUT); // fails harmlessly if the keys are taken
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
