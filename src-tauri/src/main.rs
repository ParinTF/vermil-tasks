#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod assistant;

use chrono::{DateTime, Local, NaiveDateTime, NaiveTime, TimeZone};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, fs, path::PathBuf, sync::Mutex, time::Duration};
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    AppHandle, Emitter, Manager, State, WindowEvent,
};
use tauri_plugin_autostart::ManagerExt as _;
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Shortcut, ShortcutState};
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
    // notifications: quiet hours "HH:MM-HH:MM" (nothing is shown inside them; reminders wait), and the sources switched off
    #[serde(default)]
    quiet: Option<String>,
    // shortcuts the user changed, by name (quick, note, widget)
    #[serde(default)]
    hotkeys: HashMap<String, String>,
    // how big everything is drawn (1.0 = 100%), from Settings
    #[serde(default)]
    zoom: Option<f64>,
    #[serde(default)]
    mute: Vec<String>,
    #[serde(default)]
    notes: Vec<Note>,
    // true once the notes that tasks used to carry as text were turned into notes of their own
    #[serde(default)]
    notes_migrated: bool,
    // automatic backups: on unless switched off; the folder is "<product name> Backups" in Documents unless one is chosen
    #[serde(default)]
    backup_off: bool,
    #[serde(default)]
    backup_dir: Option<String>,
    // the day the last automatic or manual backup was written
    #[serde(default)]
    backup_day: Option<String>,
    // optional modules keep their data here, one JSON value per module id; "_on" lists the ones switched on
    #[serde(default)]
    modules: serde_json::Map<String, serde_json::Value>,
    // sync through a shared folder: where, which computer this is, the revision last pulled or pushed, and what the data looked like then
    #[serde(default)]
    sync_dir: Option<String>,
    #[serde(default)]
    sync_device: Option<String>,
    #[serde(default)]
    sync_rev: u64,
    #[serde(default)]
    sync_hash: Option<String>,
}

const YAHOO: &str = "https://query1.finance.yahoo.com";
const BACKUP_EVERY_DAYS: i64 = 7;
const BACKUP_KEEP: usize = 8; // the newest eight automatic backups stay
// the three shortcuts that work from any app, and their defaults: quick add, the same bar in note mode, and the Today widget
const HOTKEYS: [(&str, &str); 3] = [("quick", "Ctrl+Alt+T"), ("note", "Ctrl+Alt+N"), ("widget", "Ctrl+Alt+W")];

// ── the Today widget: a small always-on-top window the Today module fills with tiles ──

#[derive(Default)]
struct Widget {
    tiles: Mutex<String>, // the latest tiles as JSON, so the widget has something to show the moment it opens
    enabled: Mutex<bool>, // the Today widget module is on
    placed: Mutex<bool>,  // put in the corner once, then left where the user drags it
}

/// Tiles are a JSON array, not too large to be a mistake.
fn valid_tiles(s: &str) -> bool {
    s.len() <= 20_000 && serde_json::from_str::<serde_json::Value>(s).map_or(false, |v| v.is_array())
}

fn show_widget(app: &AppHandle) {
    let state = app.state::<Widget>();
    if !*state.enabled.lock().unwrap() {
        return;
    }
    if let Some(win) = app.get_webview_window("widget") {
        let mut placed = state.placed.lock().unwrap();
        if !*placed {
            *placed = true;
            if let (Ok(Some(mon)), Ok(size)) = (win.current_monitor(), win.outer_size()) {
                let margin = (24.0 * mon.scale_factor()) as i32;
                let x = mon.position().x + mon.size().width as i32 - size.width as i32 - margin;
                let _ = win.set_position(tauri::PhysicalPosition::new(x, mon.position().y + margin));
            }
        }
        let _ = app.emit_to("widget", "widget-update", state.tiles.lock().unwrap().clone());
        let _ = win.show();
    }
}

fn toggle_widget(app: &AppHandle) {
    if let Some(win) = app.get_webview_window("widget") {
        if win.is_visible().unwrap_or(false) { let _ = win.hide(); } else { show_widget(app); }
    }
}

#[tauri::command]
fn widget_enable(app: AppHandle, state: State<Widget>, on: bool) {
    *state.enabled.lock().unwrap() = on;
    if on {
        show_widget(&app);
    } else if let Some(win) = app.get_webview_window("widget") {
        let _ = win.hide();
    }
}

#[tauri::command]
fn widget_set(app: AppHandle, state: State<Widget>, tiles: String) -> Result<(), String> {
    if !valid_tiles(&tiles) {
        return Err("bad tiles".into());
    }
    *state.tiles.lock().unwrap() = tiles.clone();
    let _ = app.emit_to("widget", "widget-update", tiles);
    Ok(())
}

#[tauri::command]
fn widget_get(state: State<Widget>) -> String {
    state.tiles.lock().unwrap().clone()
}

/// A tile was clicked in the widget: bring the main window up on that view.
#[tauri::command]
fn widget_click(app: AppHandle, view: String) {
    if view.len() <= 24 && view.bytes().all(|b| b.is_ascii_lowercase()) {
        show(&app);
        let _ = app.emit_to("main", "open-view", view);
    }
}

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
fn toast(app: AppHandle, store: State<Store>, title: String, text: String, module: Option<String>, test: Option<bool>) {
    if test != Some(true) {
        let data = store.data.lock().unwrap();
        let muted = module.as_deref().is_some_and(|m| data.mute.iter().any(|x| x == m));
        if muted || data.quiet.as_deref().is_some_and(|q| in_quiet(q, &Local::now().format("%H:%M").to_string())) {
            return;
        }
    }
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
    let quiet = data.quiet.as_deref().is_some_and(|q| in_quiet(q, &now.format("%H:%M").to_string())); // a reminder not shown now is not marked, so it shows when the quiet hours end
    let tasks_muted = data.mute.iter().any(|m| m == "tasks");
    if !quiet {
        for (todo, at) in due_reminders(&data.todos, &data.notified, now.timestamp_millis()) {
            if !tasks_muted {
                notify(app, &todo);
            }
            data.notified.insert(todo.id, at);
            changed = true;
        }
    }
    let today = now.format("%Y-%m-%d").to_string();
    let setting = data.summary_time.clone().unwrap_or_else(|| DEFAULT_SUMMARY_TIME.to_string());
    if !quiet && summary_due(&setting, data.summary_day.as_deref(), &today, &now.format("%H:%M").to_string()) {
        // the day is recorded even with nothing to show, so adding a task at 14:00 does not trigger a "morning" summary
        data.summary_day = Some(today.clone());
        changed = true;
        let (due_today, overdue, open) = summary_counts(&data.todos, now);
        if open > 0 {
            notify_summary(app, due_today, overdue, open);
        }
    }
    // the weekly backup (a failure is retried at the next pass, so a missing drive does not lose the week)
    if !data.backup_off && backup_due(data.backup_day.as_deref(), &today) && write_backup(app, &mut data, &today).is_ok() {
        changed = true;
    }
    if changed {
        let _ = save(&store.file, &data);
    }
}

/// True when `now` ("HH:MM") is inside "HH:MM-HH:MM"; a range that ends before it starts runs over midnight (22:00-07:00).
fn in_quiet(spec: &str, now: &str) -> bool {
    let Some((from, to)) = spec.split_once('-') else { return false };
    if NaiveTime::parse_from_str(from, "%H:%M").is_err() || NaiveTime::parse_from_str(to, "%H:%M").is_err() || from == to {
        return false;
    }
    if from < to { from <= now && now < to } else { now >= from || now < to }
}

/// The sizes Settings offers, kept within what the layout is built for.
fn valid_zoom(z: f64) -> bool {
    z.is_finite() && (0.8..=1.3).contains(&z)
}

#[tauri::command]
fn get_zoom(store: State<Store>) -> f64 {
    store.data.lock().unwrap().zoom.unwrap_or(1.0)
}

#[tauri::command]
fn set_zoom(app: AppHandle, store: State<Store>, factor: f64) -> Result<(), String> {
    if !valid_zoom(factor) {
        return Err("that size is not available".into());
    }
    let mut data = store.data.lock().unwrap();
    data.zoom = Some(factor);
    save(&store.file, &data)?;
    if let Some(win) = app.get_webview_window("main") {
        win.set_zoom(factor).map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[derive(Serialize)]
struct NotifyInfo {
    quiet: String,
    mute: Vec<String>,
}

#[tauri::command]
fn get_notify(store: State<Store>) -> NotifyInfo {
    let data = store.data.lock().unwrap();
    NotifyInfo { quiet: data.quiet.clone().unwrap_or_default(), mute: data.mute.clone() }
}

/// `quiet` is "HH:MM-HH:MM" or "" for none; `mute` lists module ids whose notifications are off.
#[tauri::command]
fn set_notify(store: State<Store>, quiet: String, mute: Vec<String>) -> Result<(), String> {
    if !quiet.is_empty() && !quiet.split_once('-').is_some_and(|(a, b)| a != b && NaiveTime::parse_from_str(a, "%H:%M").is_ok() && NaiveTime::parse_from_str(b, "%H:%M").is_ok()) {
        return Err("quiet hours must look like 22:00-07:00".into());
    }
    if mute.len() > 40 || !mute.iter().all(|m| valid_module_id(m)) {
        return Err("bad module id".into());
    }
    let mut data = store.data.lock().unwrap();
    data.quiet = if quiet.is_empty() { None } else { Some(quiet) };
    data.mute = mute;
    save(&store.file, &data)
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

// ── automatic backups ──

/// True when a week has passed since the last backup (or there never was one).
fn backup_due(last: Option<&str>, today: &str) -> bool {
    let parse = |s: &str| chrono::NaiveDate::parse_from_str(s, "%Y-%m-%d").ok();
    match (last.and_then(parse), parse(today)) {
        (Some(l), Some(t)) => (t - l).num_days() >= BACKUP_EVERY_DAYS,
        (None, Some(_)) => true,
        _ => false,
    }
}

fn backup_name(day: &str) -> String {
    format!("vermil-backup-{day}.json")
}

/// Which automatic backups to delete so only the newest `keep` remain. Files that are not ours are never listed.
fn backups_to_delete(names: &[String], keep: usize) -> Vec<String> {
    let mut ours: Vec<&String> = names.iter().filter(|n| {
        n.strip_prefix("vermil-backup-").and_then(|r| r.strip_suffix(".json")).map_or(false, |d| chrono::NaiveDate::parse_from_str(d, "%Y-%m-%d").is_ok())
    }).collect();
    ours.sort();
    let extra = ours.len().saturating_sub(keep);
    ours.into_iter().take(extra).cloned().collect()
}

fn backup_value(version: &str, data: &Data) -> serde_json::Value {
    serde_json::json!({ "app": "vermil-tasks", "version": version, "todos": data.todos, "notes": data.notes, "modules": data.modules })
}

fn backup_folder(app: &AppHandle, data: &Data) -> PathBuf {
    match data.backup_dir.as_deref().map(str::trim).filter(|d| !d.is_empty()) {
        Some(d) => PathBuf::from(d),
        // named after the product, so a test copy ("Vermil Tasks Test") never writes into the real app's folder
        None => {
            let docs = app.path().document_dir().unwrap_or_else(|_| PathBuf::from("."));
            let name = app.config().product_name.clone().unwrap_or_else(|| "Vermil".into());
            let dir = docs.join(format!("{name} Backups"));
            let before_the_rename = docs.join("Vermil Tasks Backups"); // 2.0.0 wrote here; keep using it if that is where the backups are
            if !dir.exists() && name == "Vermil" && before_the_rename.exists() { before_the_rename } else { dir }
        }
    }
}

/// Writes today's backup and trims old ones; returns the file written.
fn write_backup(app: &AppHandle, data: &mut Data, today: &str) -> Result<PathBuf, String> {
    let dir = backup_folder(app, data);
    fs::create_dir_all(&dir).map_err(|e| format!("cannot use {}: {e}", dir.display()))?;
    let file = dir.join(backup_name(today));
    let text = serde_json::to_string_pretty(&backup_value(&app.package_info().version.to_string(), data)).map_err(|e| e.to_string())?;
    fs::write(&file, text).map_err(|e| e.to_string())?;
    data.backup_day = Some(today.to_string());
    if let Ok(entries) = fs::read_dir(&dir) {
        let names: Vec<String> = entries.flatten().filter_map(|e| e.file_name().into_string().ok()).collect();
        for old in backups_to_delete(&names, BACKUP_KEEP) {
            let _ = fs::remove_file(dir.join(old));
        }
    }
    Ok(file)
}

// ── sync through a shared folder (OneDrive, Dropbox, a USB drive) ──
// One file, Vermil-sync.json, holds everything plus a revision and the computer that wrote it. A computer pushes when its
// data changed, pulls when the other one wrote a newer revision and this one has no changes of its own, and when both
// changed it stops and asks (the data it would replace is first copied to todos.pre-sync.json).

const SYNC_FILE: &str = "Vermil-sync.json";

/// A hash that is the same in every build (the standard one is not promised to be).
fn fnv1a(s: &str) -> String {
    let mut h: u64 = 0xcbf29ce484222325;
    for b in s.bytes() {
        h ^= b as u64;
        h = h.wrapping_mul(0x100000001b3);
    }
    format!("{h:016x}")
}

fn content_hash(data: &Data) -> String {
    fnv1a(&serde_json::json!({ "todos": data.todos, "notes": data.notes, "modules": data.modules }).to_string())
}

#[derive(Debug, PartialEq)]
enum SyncAction {
    Nothing,
    Push,
    Pull,
    Conflict,
}

/// `remote` is the (computer, revision) in the folder, `seen` the revision this computer last pulled or pushed.
fn sync_decision(remote: Option<(&str, u64)>, me: &str, seen: u64, changed: bool) -> SyncAction {
    match remote {
        None => SyncAction::Push, // nothing there yet, or it was deleted: put ours back
        Some((dev, _)) if dev == me => if changed { SyncAction::Push } else { SyncAction::Nothing },
        Some((_, rev)) if rev > seen => if changed { SyncAction::Conflict } else { SyncAction::Pull },
        Some(_) => if changed { SyncAction::Push } else { SyncAction::Nothing },
    }
}

#[derive(Default)]
struct SyncState {
    last: Mutex<(String, String)>, // the state and message of the last run, for the screen
}

#[derive(Serialize)]
struct SyncInfo {
    dir: String,
    on: bool,
    state: String,
    message: String,
    rev: u64,
    pending: bool,
}

fn new_device_id() -> String {
    format!("{:x}-{:x}", chrono::Utc::now().timestamp_micros(), std::process::id())
}

fn data_is_empty(data: &Data) -> bool {
    // nothing worth keeping: no tasks, no notes, and every module value is cleared or an empty list ("_on": [] is a fresh start)
    data.todos.is_empty() && data.notes.is_empty() && data.modules.values().all(|v| v.is_null() || v.as_array().map_or(false, |a| a.is_empty()))
}

fn read_remote(dir: &std::path::Path) -> Result<Option<serde_json::Value>, String> {
    let file = dir.join(SYNC_FILE);
    if !file.exists() {
        return Ok(None);
    }
    let text = fs::read_to_string(&file).map_err(|e| e.to_string())?;
    let v: serde_json::Value = serde_json::from_str(&text).map_err(|_| "the sync file cannot be read (is it still syncing?)".to_string())?;
    if !v["todos"].is_array() || v["sync"]["rev"].as_u64().is_none() {
        return Err("that file in the folder is not a Vermil sync file".into());
    }
    Ok(Some(v))
}

/// One pass. Returns the state ("synced", "pulled", "conflict") and a message; `resolve` is "mine" or "theirs" after a conflict.
fn run_sync(app: &AppHandle, file: &std::path::Path, data: &mut Data, resolve: Option<&str>) -> Result<(String, String), String> {
    let dir = PathBuf::from(data.sync_dir.clone().ok_or("sync is off")?);
    fs::create_dir_all(&dir).map_err(|e| format!("cannot use {}: {e}", dir.display()))?;
    let me = data.sync_device.get_or_insert_with(new_device_id).clone();
    let remote = read_remote(&dir)?;
    let meta = remote.as_ref().map(|v| (v["sync"]["device"].as_str().unwrap_or("").to_string(), v["sync"]["rev"].as_u64().unwrap_or(0)));
    let changed = !data_is_empty(data) && data.sync_hash.as_deref() != Some(content_hash(data).as_str()); // a fresh computer has nothing to lose
    let action = match resolve {
        Some("mine") => SyncAction::Push,
        Some("theirs") if remote.is_some() => SyncAction::Pull,
        _ => sync_decision(meta.as_ref().map(|(d, r)| (d.as_str(), *r)), &me, data.sync_rev, changed),
    };
    match action {
        SyncAction::Nothing => Ok(("synced".into(), "Up to date".into())),
        SyncAction::Conflict => Ok(("conflict".into(), "This computer and another both changed things since they last matched.".into())),
        SyncAction::Push => {
            let rev = meta.as_ref().map_or(0, |m| m.1).max(data.sync_rev) + 1;
            let mut v = backup_value(&app.package_info().version.to_string(), data);
            v["sync"] = serde_json::json!({ "device": me, "rev": rev, "savedAt": chrono::Utc::now().to_rfc3339() });
            let tmp = dir.join("Vermil-sync.json.tmp");
            fs::write(&tmp, serde_json::to_string_pretty(&v).map_err(|e| e.to_string())?).map_err(|e| e.to_string())?;
            fs::rename(&tmp, dir.join(SYNC_FILE)).map_err(|e| e.to_string())?;
            data.sync_rev = rev;
            data.sync_hash = Some(content_hash(data));
            Ok(("synced".into(), format!("Saved to the folder (revision {rev})")))
        }
        SyncAction::Pull => {
            let v = remote.ok_or("nothing to pull")?;
            let todos: Vec<Todo> = serde_json::from_value(v["todos"].clone()).map_err(|e| format!("cannot read the tasks in the folder: {e}"))?;
            let notes: Vec<Note> = serde_json::from_value(v.get("notes").cloned().unwrap_or_else(|| serde_json::json!([]))).map_err(|e| format!("cannot read the notes in the folder: {e}"))?;
            let modules = v["modules"].as_object().cloned().unwrap_or_default();
            let _ = fs::copy(file, file.with_file_name("todos.pre-sync.json")); // the data about to be replaced, once
            data.todos = todos;
            data.notes = notes;
            data.modules = modules;
            data.notes_migrated = true;
            data.sync_rev = meta.map_or(0, |m| m.1);
            data.sync_hash = Some(content_hash(data));
            Ok(("pulled".into(), format!("Took the changes from the other computer (revision {})", data.sync_rev)))
        }
    }
}

fn sync_info(data: &Data, state: &SyncState) -> SyncInfo {
    let (st, msg) = state.last.lock().unwrap().clone();
    SyncInfo {
        dir: data.sync_dir.clone().unwrap_or_default(),
        on: data.sync_dir.is_some(),
        state: if data.sync_dir.is_none() { "off".into() } else if st.is_empty() { "waiting".into() } else { st },
        message: msg,
        rev: data.sync_rev,
        pending: data.sync_dir.is_some() && !data_is_empty(data) && data.sync_hash.as_deref() != Some(content_hash(data).as_str()),
    }
}

/// Runs a pass, keeps the result for the screen, saves, and tells the window when it took new data.
fn sync_pass(app: &AppHandle, resolve: Option<&str>) -> Option<SyncInfo> {
    let store = app.state::<Store>();
    let state = app.state::<SyncState>();
    let mut data = store.data.lock().unwrap();
    data.sync_dir.as_ref()?;
    let result = run_sync(app, &store.file, &mut data, resolve);
    let pulled = matches!(&result, Ok((s, _)) if s == "pulled");
    *state.last.lock().unwrap() = match result { Ok(r) => r, Err(e) => ("error".into(), e) };
    let _ = save(&store.file, &data);
    let info = sync_info(&data, &state);
    drop(data);
    if pulled {
        let _ = app.emit("synced", ());
    }
    Some(info)
}

#[tauri::command]
fn get_sync(store: State<Store>, state: State<SyncState>) -> SyncInfo {
    sync_info(&store.data.lock().unwrap(), &state)
}

/// `dir` is a folder, or "" to switch sync off.
#[tauri::command]
fn set_sync(store: State<Store>, state: State<SyncState>, dir: String) -> Result<(), String> {
    let dir = dir.trim();
    if dir.chars().count() > 260 {
        return Err("that folder path is too long".into());
    }
    let mut data = store.data.lock().unwrap();
    data.sync_dir = if dir.is_empty() { None } else { Some(dir.to_string()) };
    *state.last.lock().unwrap() = (String::new(), String::new());
    save(&store.file, &data)
}

#[tauri::command]
fn sync_now(app: AppHandle, resolve: Option<String>) -> Result<SyncInfo, String> {
    sync_pass(&app, resolve.as_deref()).ok_or_else(|| "sync is off".to_string())
}

fn safe_file_name(s: &str) -> String {
    let cleaned: String = s.chars().map(|c| if c.is_ascii_alphanumeric() || c == ' ' || c == '-' || c == '_' { c } else { '-' }).collect();
    cleaned.trim().chars().take(60).collect()
}

/// Saves a report as a text (Markdown) file in Downloads and returns its path.
#[tauri::command]
fn export_text(app: AppHandle, name: String, text: String) -> Result<String, String> {
    if text.len() > 400_000 {
        return Err("that report is too large".into());
    }
    let dir = app.path().download_dir().map_err(|e| e.to_string())?;
    let base = safe_file_name(&name);
    let file = dir.join(format!("{}-{}.md", if base.is_empty() { "Vermil" } else { &base }, Local::now().format("%Y-%m-%d-%H%M%S")));
    fs::write(&file, text).map_err(|e| e.to_string())?;
    Ok(file.display().to_string())
}

/// Plain base64 (the engine hands the PDF over this way); anything that is not base64 is an error.
fn base64_decode(text: &str) -> Result<Vec<u8>, String> {
    let mut out = Vec::with_capacity(text.len() / 4 * 3);
    let (mut acc, mut bits) = (0u32, 0u32);
    for b in text.bytes().filter(|b| !b.is_ascii_whitespace()) {
        let v = match b {
            b'A'..=b'Z' => b - b'A',
            b'a'..=b'z' => b - b'a' + 26,
            b'0'..=b'9' => b - b'0' + 52,
            b'+' => 62,
            b'/' => 63,
            b'=' => break,
            _ => return Err("the PDF data was not valid".into()),
        };
        acc = (acc << 6) | v as u32;
        bits += 6;
        if bits >= 8 {
            bits -= 8;
            out.push((acc >> bits) as u8);
            acc &= (1 << bits) - 1;
        }
    }
    Ok(out)
}

/// Saves the page on screen (the Review) as a PDF in Downloads, printed by the web engine itself so there is no print dialog
/// and no browser date line: `header` and `footer` are the HTML of the running header and footer of every page.
#[tauri::command]
async fn save_page_pdf(app: AppHandle, name: String, header: String, footer: String) -> Result<String, String> {
    use webview2_com::{CallDevToolsProtocolMethodCompletedHandler, Microsoft::Web::WebView2::Win32::ICoreWebView2};
    if header.len() > 200_000 || footer.len() > 20_000 {
        return Err("the header is too large".into());
    }
    let win = app.get_webview_window("main").ok_or("no window")?;
    let params = serde_json::json!({ "printBackground": true, "preferCSSPageSize": true, "displayHeaderFooter": true, "headerTemplate": header, "footerTemplate": footer }).to_string();
    let (tx, rx) = std::sync::mpsc::channel::<Result<String, String>>();
    win.with_webview(move |wv| unsafe {
        let tx_done = tx.clone();
        let started = (|| -> Result<(), String> {
            let core: ICoreWebView2 = wv.controller().CoreWebView2().map_err(|e| e.to_string())?;
            let handler = CallDevToolsProtocolMethodCompletedHandler::create(Box::new(move |err, json| {
                let _ = tx_done.send(if err.is_ok() { Ok(json) } else { Err(format!("{err:?}")) });
                Ok(())
            }));
            core.CallDevToolsProtocolMethod(&windows::core::HSTRING::from("Page.printToPDF"), &windows::core::HSTRING::from(params), &handler).map_err(|e| e.to_string())
        })();
        if let Err(e) = started {
            let _ = tx.send(Err(e));
        }
    }).map_err(|e| e.to_string())?;
    let json = tauri::async_runtime::spawn_blocking(move || rx.recv_timeout(Duration::from_secs(40)))
        .await.map_err(|e| e.to_string())?.map_err(|_| "printing took too long".to_string())??;
    let data = serde_json::from_str::<serde_json::Value>(&json).ok().and_then(|v| v["data"].as_str().map(String::from)).ok_or("the engine returned no PDF")?;
    let bytes = base64_decode(&data)?;
    if !bytes.starts_with(b"%PDF") {
        return Err("the engine returned something that is not a PDF".into());
    }
    let dir = app.path().download_dir().map_err(|e| e.to_string())?;
    let base = safe_file_name(&name);
    let file = dir.join(format!("{}-{}.pdf", if base.is_empty() { "Vermil" } else { &base }, Local::now().format("%Y-%m-%d-%H%M%S")));
    fs::write(&file, bytes).map_err(|e| e.to_string())?;
    Ok(file.display().to_string())
}

#[derive(Serialize)]
struct BackupInfo {
    on: bool,
    dir: String,
    custom: bool,
    last: Option<String>,
}

#[tauri::command]
fn get_backup(app: AppHandle, store: State<Store>) -> BackupInfo {
    let data = store.data.lock().unwrap();
    BackupInfo { on: !data.backup_off, dir: backup_folder(&app, &data).display().to_string(), custom: data.backup_dir.as_deref().map_or(false, |d| !d.trim().is_empty()), last: data.backup_day.clone() }
}

/// `dir` is a folder, or "" for the default one.
#[tauri::command]
fn set_backup(store: State<Store>, on: bool, dir: String) -> Result<(), String> {
    let dir = dir.trim();
    if dir.chars().count() > 260 {
        return Err("that folder path is too long".into());
    }
    let mut data = store.data.lock().unwrap();
    data.backup_off = !on;
    data.backup_dir = if dir.is_empty() { None } else { Some(dir.to_string()) };
    save(&store.file, &data)
}

/// Backs up now (whatever the schedule says) and returns the file.
#[tauri::command]
fn backup_now(app: AppHandle, store: State<Store>) -> Result<String, String> {
    let mut data = store.data.lock().unwrap();
    let today = Local::now().format("%Y-%m-%d").to_string();
    let file = write_backup(&app, &mut data, &today)?;
    save(&store.file, &data)?;
    Ok(file.display().to_string())
}

/// Writes a backup of all tasks to the Downloads folder and returns its path.
#[tauri::command]
fn export_todos(app: AppHandle, store: State<Store>) -> Result<String, String> {
    let dir = app.path().download_dir().map_err(|e| e.to_string())?;
    let file = dir.join(format!("vermil-tasks-backup-{}.json", Local::now().format("%Y-%m-%d-%H%M%S")));
    let data = store.data.lock().unwrap();
    let text = serde_json::to_string_pretty(&backup_value(&app.package_info().version.to_string(), &data)).map_err(|e| e.to_string())?;
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

// ── Stocks module: quotes from Yahoo Finance's public chart and search endpoints (no key, may be delayed or change) ──

#[derive(Serialize, Debug, PartialEq)]
#[serde(rename_all = "camelCase")]
struct Quote {
    symbol: String,
    name: String,
    currency: String,
    price: f64,
    prev_close: f64,
    change: f64,
    change_pct: f64,
    pre_price: Option<f64>,
    pre_pct: Option<f64>,
    post_price: Option<f64>,
    post_pct: Option<f64>,
    state: String, // PRE, REGULAR, POST or CLOSED
    time: i64,
    // the newest trade of all, even before the open or after the close, and the session it fell in (PRE, POST, or "" for the regular one)
    last_price: f64,
    last_time: i64,
    last_in: String,
}

#[derive(Serialize, Debug, PartialEq)]
struct Found {
    symbol: String,
    name: String,
    exchange: String,
    kind: String,
}

#[derive(Serialize)]
struct Quotes {
    quotes: Vec<Quote>,
    failed: Vec<String>,
}

/// Percent change to two decimals.
fn pct(value: f64, base: f64) -> f64 {
    if base == 0.0 { 0.0 } else { ((value - base) / base * 10000.0).round() / 100.0 }
}

/// A quote from Yahoo's chart JSON (5-minute candles with pre and post market). Pre-market moves are against the
/// previous close, after-hours moves against today's regular close. `now` is unix seconds, for the market state.
fn parse_chart(v: &serde_json::Value, now: i64) -> Result<Quote, String> {
    let res = v["chart"]["result"].get(0).ok_or("no data for that symbol")?;
    let meta = &res["meta"];
    let price = meta["regularMarketPrice"].as_f64().ok_or("no price for that symbol")?;
    let prev = meta["chartPreviousClose"].as_f64().or(meta["previousClose"].as_f64()).unwrap_or(price);
    let window = |k: &str| (meta["currentTradingPeriod"][k]["start"].as_i64().unwrap_or(0), meta["currentTradingPeriod"][k]["end"].as_i64().unwrap_or(0));
    let (pre, regular, post) = (window("pre"), window("regular"), window("post"));
    let inside = |w: (i64, i64), t: i64| t >= w.0 && t < w.1;
    // the last real price inside a window
    let last_in = |w: (i64, i64)| -> Option<f64> {
        let times = res["timestamp"].as_array()?;
        let closes = res["indicators"]["quote"].get(0)?["close"].as_array()?;
        times.iter().zip(closes).filter_map(|(t, c)| Some((t.as_i64()?, c.as_f64()?))).filter(|(t, _)| inside(w, *t)).last().map(|(_, c)| c)
    };
    let (pre_price, post_price) = (last_in(pre), last_in(post));
    let newest: Option<(i64, f64)> = (|| {
        let times = res["timestamp"].as_array()?;
        let closes = res["indicators"]["quote"].get(0)?["close"].as_array()?;
        times.iter().zip(closes).filter_map(|(t, c)| Some((t.as_i64()?, c.as_f64()?))).last()
    })();
    let state = if inside(pre, now) { "PRE" } else if inside(regular, now) { "REGULAR" } else if inside(post, now) { "POST" } else { "CLOSED" };
    let symbol = meta["symbol"].as_str().unwrap_or("").to_string();
    let name = meta["longName"].as_str().or(meta["shortName"].as_str()).unwrap_or(&symbol).to_string();
    Ok(Quote {
        name,
        currency: meta["currency"].as_str().unwrap_or("").to_string(),
        price,
        prev_close: prev,
        change: ((price - prev) * 10000.0).round() / 10000.0,
        change_pct: pct(price, prev),
        pre_price,
        pre_pct: pre_price.map(|p| pct(p, prev)),
        post_price,
        post_pct: post_price.map(|p| pct(p, price)),
        state: state.to_string(),
        time: meta["regularMarketTime"].as_i64().unwrap_or(0),
        last_price: newest.map_or(price, |n| n.1),
        last_time: newest.map_or(meta["regularMarketTime"].as_i64().unwrap_or(0), |n| n.0),
        last_in: match newest { Some((t, _)) if inside(pre, t) => "PRE", Some((t, _)) if inside(post, t) => "POST", _ => "" }.to_string(),
        symbol,
    })
}

fn parse_search(v: &serde_json::Value) -> Vec<Found> {
    v["quotes"].as_array().map(|list| {
        list.iter().filter_map(|q| {
            let kind = q["quoteType"].as_str()?;
            if !["EQUITY", "ETF", "CRYPTOCURRENCY", "INDEX", "MUTUALFUND"].contains(&kind) { return None; }
            let symbol = q["symbol"].as_str()?.to_string();
            Some(Found {
                name: q["longname"].as_str().or(q["shortname"].as_str()).unwrap_or(&symbol).to_string(),
                exchange: q["exchDisp"].as_str().unwrap_or("").to_string(),
                kind: kind.to_string(),
                symbol,
            })
        }).collect()
    }).unwrap_or_default()
}

/// Letters, digits and . - ^ = only (BRK-B, PTT.BK, ^GSPC, EURUSD=X): nothing that can change the request's path.
fn valid_symbol(s: &str) -> bool {
    !s.is_empty() && s.len() <= 20 && s.bytes().all(|b| b.is_ascii_alphanumeric() || b".-^=".contains(&b))
}

fn http() -> Result<reqwest::Client, String> {
    reqwest::Client::builder()
        .user_agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) Vermil")
        .timeout(Duration::from_secs(8))
        .build()
        .map_err(|e| e.to_string())
}

fn net_error(e: reqwest::Error) -> String {
    if e.is_connect() || e.is_timeout() { "no internet connection".into() } else { e.to_string() }
}

/// True when the quote service can be reached at all (any answer counts, even an error status).
#[tauri::command]
async fn net_online() -> bool {
    match http() {
        Ok(c) => c.get(format!("{YAHOO}/v1/finance/search?q=a&quotesCount=0&newsCount=0")).timeout(Duration::from_secs(5)).send().await.is_ok(),
        Err(_) => false,
    }
}

#[tauri::command]
async fn stock_search(q: String) -> Result<Vec<Found>, String> {
    let q = q.trim();
    if q.is_empty() || q.chars().count() > 40 {
        return Ok(vec![]);
    }
    let mut url = reqwest::Url::parse(&format!("{YAHOO}/v1/finance/search")).map_err(|e| e.to_string())?;
    url.query_pairs_mut().append_pair("q", q).append_pair("quotesCount", "8").append_pair("newsCount", "0"); // encodes what was typed
    let r = http()?.get(url).send().await.map_err(net_error)?;
    if !r.status().is_success() {
        return Err(format!("the quote service answered {}", r.status()));
    }
    Ok(parse_search(&r.json().await.map_err(|e| e.to_string())?))
}

#[tauri::command]
async fn stock_quotes(symbols: Vec<String>) -> Result<Quotes, String> {
    if symbols.len() > 60 || !symbols.iter().all(|s| valid_symbol(s)) {
        return Err("bad symbol".into());
    }
    let client = http()?;
    let now = chrono::Utc::now().timestamp();
    let jobs: Vec<_> = symbols.into_iter().map(|symbol| {
        let client = client.clone();
        tauri::async_runtime::spawn(async move {
            let mut url = reqwest::Url::parse(YAHOO).map_err(|e| e.to_string())?;
            url.path_segments_mut().map_err(|_| "bad url".to_string())?.extend(["v8", "finance", "chart", symbol.as_str()]);
            url.query_pairs_mut().append_pair("interval", "5m").append_pair("range", "1d").append_pair("includePrePost", "true");
            let r = client.get(url).send().await.map_err(net_error)?;
            if r.status().as_u16() == 404 { return Err("unknown symbol".to_string()); }
            if !r.status().is_success() { return Err(format!("the quote service answered {}", r.status())); }
            parse_chart(&r.json().await.map_err(|e| e.to_string())?, now)
        })
    }).collect();
    let mut out = Quotes { quotes: vec![], failed: vec![] };
    let mut offline = false;
    for job in jobs {
        match job.await {
            Ok(Ok(q)) => out.quotes.push(q),
            Ok(Err(e)) => { offline |= e == "no internet connection"; out.failed.push(e); }
            Err(e) => out.failed.push(e.to_string()),
        }
    }
    if out.quotes.is_empty() && offline {
        return Err("no internet connection".into());
    }
    Ok(out)
}

/// A quick note from one line of text: the first line is the title (a link is titled by its site), and the body is
/// the whole text unless the title already is all of it.
fn note_from_text(text: &str) -> Option<(String, String)> {
    let text = text.trim();
    let first = text.lines().map(str::trim).find(|l| !l.is_empty())?;
    let is_link = (first.starts_with("http://") || first.starts_with("https://")) && !first.contains(char::is_whitespace);
    let title: String = if is_link {
        let host = first.split("://").nth(1).unwrap_or("").split(['/', '?', '#']).next().unwrap_or("");
        let host = host.strip_prefix("www.").unwrap_or(host);
        if host.is_empty() { first.to_string() } else { host.to_string() }
    } else {
        first.to_string()
    };
    let title: String = title.chars().take(80).collect();
    let body = if title == text { String::new() } else { text.to_string() };
    Some((title, body))
}

#[tauri::command]
fn quick_note(app: AppHandle, store: State<Store>, text: String) -> Result<(), String> {
    let text: String = text.chars().take(5000).collect();
    let Some((title, body)) = note_from_text(&text) else { return Ok(()) };
    let now = chrono::Utc::now();
    let mut extra = serde_json::Map::new();
    extra.insert("updatedAt".into(), now.to_rfc3339_opts(chrono::SecondsFormat::Millis, true).into());
    {
        let mut data = store.data.lock().unwrap();
        data.notes.push(Note { id: format!("q{}", now.timestamp_micros()), title, body, extra });
        save(&store.file, &data)?;
    }
    let _ = app.emit("todos-changed", ()); // the window reloads tasks and notes
    Ok(())
}

/// The shortcut text for a name: what the user chose, else the default.
fn hotkey_text(data: &Data, name: &str) -> String {
    data.hotkeys.get(name).cloned().unwrap_or_else(|| HOTKEYS.iter().find(|(n, _)| *n == name).map(|(_, d)| d.to_string()).unwrap_or_default())
}

/// A global shortcut needs a modifier (Ctrl, Alt or Shift), or it would take a plain key away from every program.
fn parse_hotkey(text: &str) -> Result<Shortcut, String> {
    let sc: Shortcut = text.parse().map_err(|_| "that is not a key combination".to_string())?;
    if sc.mods.is_empty() {
        return Err("use Ctrl, Alt or Shift with the key".into());
    }
    Ok(sc)
}

#[derive(Serialize)]
struct DataInfo {
    dir: String,
    bytes: u64,
}

/// Where the data file is and how big it is.
#[tauri::command]
fn data_info(store: State<Store>) -> DataInfo {
    DataInfo { dir: store.file.parent().map(|p| p.to_string_lossy().to_string()).unwrap_or_default(), bytes: fs::metadata(&store.file).map(|m| m.len()).unwrap_or(0) }
}

/// Shows the data folder in Explorer.
#[tauri::command]
fn open_data_folder(store: State<Store>) -> Result<(), String> {
    let dir = store.file.parent().ok_or("no folder")?;
    std::process::Command::new("explorer").arg(dir).spawn().map(|_| ()).map_err(|e| e.to_string())
}

#[derive(Serialize)]
struct HotkeyInfo {
    name: String,
    keys: String,
    ok: bool,
}

#[tauri::command]
fn get_hotkeys(app: AppHandle, store: State<Store>) -> Vec<HotkeyInfo> {
    let data = store.data.lock().unwrap();
    HOTKEYS.iter().map(|(name, _)| {
        let keys = hotkey_text(&data, name);
        let ok = parse_hotkey(&keys).is_ok_and(|s| app.global_shortcut().is_registered(s));
        HotkeyInfo { name: name.to_string(), keys, ok }
    }).collect()
}

/// Changes one shortcut. If another program owns the new one, the old one stays and the error says why.
#[tauri::command]
fn set_hotkey(app: AppHandle, store: State<Store>, name: String, keys: String) -> Result<(), String> {
    if !HOTKEYS.iter().any(|(n, _)| *n == name) {
        return Err("unknown shortcut".into());
    }
    let new = parse_hotkey(&keys)?;
    let mut data = store.data.lock().unwrap();
    for (other, _) in HOTKEYS.iter().filter(|(n, _)| *n != name) {
        if parse_hotkey(&hotkey_text(&data, other)).is_ok_and(|s| s == new) {
            return Err("another Vermil shortcut already uses that".into());
        }
    }
    let old = parse_hotkey(&hotkey_text(&data, &name)).ok();
    if old == Some(new) {
        return Ok(());
    }
    if let Some(o) = old {
        let _ = app.global_shortcut().unregister(o);
    }
    if app.global_shortcut().register(new).is_err() {
        if let Some(o) = old {
            let _ = app.global_shortcut().register(o);
        }
        return Err("another program already uses that combination".into());
    }
    data.hotkeys.insert(name, keys);
    save(&store.file, &data)
}

/// Back to Ctrl+Alt+T, N and W.
#[tauri::command]
fn reset_hotkeys(app: AppHandle, store: State<Store>) -> Result<(), String> {
    let mut data = store.data.lock().unwrap();
    for (name, _) in HOTKEYS {
        if let Ok(s) = parse_hotkey(&hotkey_text(&data, name)) {
            let _ = app.global_shortcut().unregister(s);
        }
    }
    data.hotkeys.clear();
    save(&store.file, &data)?;
    drop(data);
    register_hotkeys(&app);
    Ok(())
}

/// Registers whatever is not registered yet; true when all three are.
fn register_hotkeys(app: &AppHandle) -> bool {
    let store = app.state::<Store>();
    let texts: Vec<String> = { let data = store.data.lock().unwrap(); HOTKEYS.iter().map(|(n, _)| hotkey_text(&data, n)).collect() };
    texts.iter().all(|t| parse_hotkey(t).is_ok_and(|s| app.global_shortcut().is_registered(s) || app.global_shortcut().register(s).is_ok()))
}

/// False when another program already owns the quick-add shortcut.
#[tauri::command]
fn quick_shortcut(app: AppHandle, store: State<Store>) -> bool {
    let keys = hotkey_text(&store.data.lock().unwrap(), "quick");
    parse_hotkey(&keys).is_ok_and(|s| app.global_shortcut().is_registered(s))
}

fn show_quick(app: &AppHandle) {
    show_quick_as(app, "task")
}

/// Opens the quick bar in "task" or "note" mode.
fn show_quick_as(app: &AppHandle, mode: &str) {
    if let Some(win) = app.get_webview_window("quick") {
        let _ = app.emit_to("quick", "quick-mode", mode);
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
            } else if args.iter().any(|a| a == "--note") {
                show_quick_as(app, "note")
            } else {
                show(app)
            }
        }))
        .plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler(|app, shortcut, event| {
                    if event.state() == ShortcutState::Pressed {
                        let data = app.state::<Store>();
                        let is = |name: &str| parse_hotkey(&hotkey_text(&data.data.lock().unwrap(), name)).is_ok_and(|s| s == *shortcut);
                        if is("widget") {
                            toggle_widget(app);
                        } else {
                            show_quick_as(app, if is("note") { "note" } else { "task" });
                        }
                    }
                })
                .build(),
        )
        // launched at sign-in with --hidden, so it starts in the tray
        .plugin(tauri_plugin_autostart::init(tauri_plugin_autostart::MacosLauncher::LaunchAgent, Some(vec!["--hidden"])))
        .plugin(tauri_plugin_updater::Builder::new().build())
        .invoke_handler(tauri::generate_handler![get_todos, save_todos, check_update, install_update, get_autostart, set_autostart, quick_add, quick_shortcut, export_todos, get_summary_time, set_summary_time, get_notes, save_notes, delete_note, convert_legacy_notes, get_modules, save_module, toast, quick_note, net_online, stock_search, stock_quotes, get_backup, set_backup, backup_now, widget_enable, widget_set, widget_get, widget_click, get_sync, set_sync, sync_now, export_text, get_notify, set_notify, get_zoom, set_zoom, get_hotkeys, set_hotkey, reset_hotkeys, data_info, open_data_folder, save_page_pdf, assistant::get_assistant, assistant::set_assistant, assistant::assistant_models, assistant::assistant_ask])
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
            if let (Some(z), Some(win)) = (app.state::<Store>().data.lock().unwrap().zoom.filter(|z| valid_zoom(*z)), app.get_webview_window("main")) {
                let _ = win.set_zoom(z);
            }
            app.manage(Widget::default());
            app.manage(SyncState::default());

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
                    if register_hotkeys(&shortcuts) {
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
            let quick_note = MenuItem::with_id(app, "quick-note", "Quick note", true, None::<&str>)?;
            let widget_item = MenuItem::with_id(app, "widget", "Today widget", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
            TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .tooltip("Vermil")
                .menu(&Menu::with_items(app, &[&open, &quick, &quick_note, &widget_item, &quit])?)
                .show_menu_on_left_click(false)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "open" => show(app),
                    "quick" => show_quick(app),
                    "quick-note" => show_quick_as(app, "note"),
                    "widget" => toggle_widget(app),
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
                sync_pass(&handle, None); // with a sync folder set: push our changes, pull theirs (a conflict waits for the user)
                std::thread::sleep(Duration::from_secs(30));
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Vermil");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn shortcuts_need_a_modifier_and_a_real_key() {
        for ok in ["Ctrl+Alt+T", "Ctrl+Shift+F5", "Alt+Space", "ctrl+alt+9", "Shift+Alt+Left"] {
            assert!(parse_hotkey(ok).is_ok(), "{ok}");
        }
        for bad in ["T", "F5", "", "Ctrl+", "Ctrl+Alt+Banana", "Ctrl+Alt"] {
            assert!(parse_hotkey(bad).is_err(), "{bad}");
        }
        for key in ["Up", "Down", "Left", "Right", "Home", "End", "PageUp", "PageDown", "Insert", "Delete", "F1", "F12", "F24", "Space", "9", "Z"] {
            assert!(parse_hotkey(&format!("Ctrl+Alt+{key}")).is_ok(), "{key}");
        }
        assert_eq!(parse_hotkey("Ctrl+Alt+T"), parse_hotkey("alt+ctrl+t"));
        let mut d = Data::default();
        assert_eq!(hotkey_text(&d, "widget"), "Ctrl+Alt+W");
        d.hotkeys.insert("widget".into(), "Ctrl+Shift+W".into());
        assert_eq!(hotkey_text(&d, "widget"), "Ctrl+Shift+W");
        assert_eq!(hotkey_text(&d, "nope"), "");
    }

    #[test]
    fn base64_decodes_what_the_engine_sends() {
        assert_eq!(base64_decode("JVBERi0xLjQ=").unwrap(), b"%PDF-1.4");
        assert_eq!(base64_decode("TWFu\nTWE=").unwrap(), b"ManMa");
        assert_eq!(base64_decode("").unwrap(), b"");
        assert!(base64_decode("@@@@").is_err());
    }

    #[test]
    fn only_sensible_sizes_are_accepted() {
        assert!(valid_zoom(1.0) && valid_zoom(0.9) && valid_zoom(1.25));
        assert!(!valid_zoom(0.5) && !valid_zoom(3.0) && !valid_zoom(f64::NAN) && !valid_zoom(f64::INFINITY));
    }

    #[test]
    fn quiet_hours_run_over_midnight_too() {
        assert!(in_quiet("22:00-07:00", "23:30") && in_quiet("22:00-07:00", "03:00") && in_quiet("22:00-07:00", "22:00"));
        assert!(!in_quiet("22:00-07:00", "07:00") && !in_quiet("22:00-07:00", "12:00"));
        assert!(in_quiet("13:00-14:00", "13:30") && !in_quiet("13:00-14:00", "14:00") && !in_quiet("13:00-14:00", "12:59"));
        assert!(!in_quiet("", "10:00") && !in_quiet("nonsense", "10:00") && !in_quiet("10:00-10:00", "10:00") && !in_quiet("25:00-07:00", "03:00"));
    }

    #[test]
    fn backups_run_weekly() {
        assert!(backup_due(None, "2026-11-12"));
        assert!(!backup_due(Some("2026-11-06"), "2026-11-12")); // 6 days
        assert!(backup_due(Some("2026-11-05"), "2026-11-12")); // 7 days
        assert!(!backup_due(Some("garbage"), "2026-11-12") || backup_due(None, "2026-11-12"));
        assert_eq!(backup_name("2026-11-12"), "vermil-backup-2026-11-12.json");
    }

    #[test]
    fn only_the_oldest_backups_go_and_only_ours() {
        let names: Vec<String> = ["vermil-backup-2026-10-01.json", "vermil-backup-2026-10-15.json", "vermil-backup-2026-11-01.json", "notes.txt", "vermil-backup-oops.json", "vermil-tasks-backup-2026-01-01.json"].iter().map(|s| s.to_string()).collect();
        assert_eq!(backups_to_delete(&names, 2), ["vermil-backup-2026-10-01.json"]);
        assert!(backups_to_delete(&names, 8).is_empty());
        assert_eq!(backups_to_delete(&names, 0).len(), 3);
    }

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

    fn chart_fixture() -> serde_json::Value {
        serde_json::json!({ "chart": { "result": [{
            "meta": { "symbol": "AAPL", "longName": "Apple Inc.", "currency": "USD", "regularMarketPrice": 110.0, "chartPreviousClose": 100.0, "regularMarketTime": 2900,
                "currentTradingPeriod": { "pre": { "start": 1000, "end": 2000 }, "regular": { "start": 2000, "end": 3000 }, "post": { "start": 3000, "end": 4000 } } },
            "timestamp": [900, 1100, 1500, 2500, 3100, 3500, 4100],
            "indicators": { "quote": [{ "close": [99.0, 101.0, 102.0, 110.0, 111.1, null, 120.0] }] }
        }], "error": null } })
    }

    #[test]
    fn chart_gives_day_pre_and_post_moves() {
        let q = parse_chart(&chart_fixture(), 3500).unwrap();
        assert_eq!((q.symbol.as_str(), q.name.as_str(), q.currency.as_str()), ("AAPL", "Apple Inc.", "USD"));
        assert_eq!((q.price, q.prev_close, q.change, q.change_pct), (110.0, 100.0, 10.0, 10.0));
        assert_eq!((q.pre_price, q.pre_pct), (Some(102.0), Some(2.0))); // last pre-market price, against the previous close
        assert_eq!((q.post_price, q.post_pct), (Some(111.1), Some(1.0))); // the empty candle is skipped; against the regular close
        assert_eq!(q.state, "POST");
        assert_eq!(parse_chart(&chart_fixture(), 1500).unwrap().state, "PRE");
        assert_eq!(parse_chart(&chart_fixture(), 2500).unwrap().state, "REGULAR");
        assert_eq!(parse_chart(&chart_fixture(), 9000).unwrap().state, "CLOSED");
    }

    #[test]
    fn chart_has_the_newest_trade_and_its_session() {
        let after = |times: serde_json::Value, closes: serde_json::Value| serde_json::json!({ "chart": { "result": [{
            "meta": { "symbol": "A", "currency": "USD", "regularMarketPrice": 110.0, "chartPreviousClose": 100.0, "regularMarketTime": 2900,
                "currentTradingPeriod": { "pre": { "start": 1000, "end": 2000 }, "regular": { "start": 2000, "end": 3000 }, "post": { "start": 3000, "end": 4000 } } },
            "timestamp": times, "indicators": { "quote": [{ "close": closes }] } }] } });
        let q = parse_chart(&after(serde_json::json!([1500, 2500, 3100]), serde_json::json!([102.0, 110.0, 111.1])), 3500).unwrap();
        assert_eq!((q.last_price, q.last_time, q.last_in.as_str()), (111.1, 3100, "POST"));
        let q = parse_chart(&after(serde_json::json!([1500, 1900]), serde_json::json!([102.0, 150.0])), 1950).unwrap();
        assert_eq!((q.last_price, q.last_in.as_str()), (150.0, "PRE"));
        let q = parse_chart(&after(serde_json::json!([2100, 2500]), serde_json::json!([105.0, 110.0])), 2600).unwrap();
        assert_eq!((q.last_price, q.last_in.as_str()), (110.0, "")); // the regular session
        let q = parse_chart(&after(serde_json::json!([]), serde_json::json!([])), 2600).unwrap();
        assert_eq!((q.last_price, q.last_time), (110.0, 2900)); // no candles: the regular price
    }

    #[test]
    fn chart_without_extended_hours_or_data() {
        let v = serde_json::json!({ "chart": { "result": [{ "meta": { "symbol": "X", "regularMarketPrice": 5.0, "chartPreviousClose": 4.0 } }] } });
        let q = parse_chart(&v, 0).unwrap();
        assert_eq!((q.pre_price, q.post_price, q.change_pct, q.name.as_str()), (None, None, 25.0, "X"));
        assert!(parse_chart(&serde_json::json!({ "chart": { "result": null, "error": { "code": "Not Found" } } }), 0).is_err());
    }

    #[test]
    fn search_keeps_real_instruments_only() {
        let v = serde_json::json!({ "quotes": [
            { "symbol": "AAPL", "quoteType": "EQUITY", "longname": "Apple Inc.", "exchDisp": "NASDAQ" },
            { "symbol": "SAAPL=F", "quoteType": "FUTURE", "shortname": "Apple futures" },
            { "symbol": "SPY", "quoteType": "ETF", "shortname": "SPDR S&P 500", "exchDisp": "NYSEArca" } ] });
        let found = parse_search(&v);
        assert_eq!(found.iter().map(|f| f.symbol.as_str()).collect::<Vec<_>>(), ["AAPL", "SPY"]);
        assert_eq!(found[1].name, "SPDR S&P 500");
        assert!(parse_search(&serde_json::json!({})).is_empty());
    }

    #[test]
    fn symbols_cannot_change_the_request() {
        for ok in ["AAPL", "BRK-B", "PTT.BK", "^GSPC", "EURUSD=X"] { assert!(valid_symbol(ok), "{ok}"); }
        for bad in ["", "a/b", "A B", "A?x=1", "..\\x", "WAYTOOLONGSYMBOLNAME12345"] { assert!(!valid_symbol(bad), "{bad}"); }
    }

    #[test]
    fn the_hash_is_the_same_everywhere() {
        assert_eq!(fnv1a(""), "cbf29ce484222325");
        assert_eq!(fnv1a("a"), "af63dc4c8601ec8c");
        assert_ne!(fnv1a("ab"), fnv1a("ba"));
    }

    #[test]
    fn sync_decides_push_pull_or_ask() {
        use SyncAction::*;
        assert_eq!(sync_decision(None, "me", 0, true), Push); // nothing in the folder yet
        assert_eq!(sync_decision(None, "me", 5, false), Push); // it was deleted: put ours back
        assert_eq!(sync_decision(Some(("me", 3)), "me", 3, false), Nothing); // our own write is there
        assert_eq!(sync_decision(Some(("me", 3)), "me", 3, true), Push);
        assert_eq!(sync_decision(Some(("other", 4)), "me", 3, false), Pull); // newer from the other, nothing of ours
        assert_eq!(sync_decision(Some(("other", 4)), "me", 3, true), Conflict); // both changed
        assert_eq!(sync_decision(Some(("other", 3)), "me", 3, true), Push); // we pulled this one, then changed
        assert_eq!(sync_decision(Some(("other", 3)), "me", 3, false), Nothing);
        assert_eq!(sync_decision(Some(("other", 2)), "me", 3, false), Nothing); // an older file: ignore it
    }

    #[test]
    fn report_file_names_are_safe() {
        assert_eq!(safe_file_name("Vermil review"), "Vermil review");
        assert_eq!(safe_file_name("..\\..\\evil/name"), "------evil-name");
        assert_eq!(safe_file_name("").len(), 0);
        assert_eq!(safe_file_name(&"x".repeat(100)).len(), 60);
    }

    #[test]
    fn widget_tiles_must_be_a_small_json_array() {
        assert!(valid_tiles("[]"));
        assert!(valid_tiles(r#"[{"label":"Tasks","value":"3"}]"#));
        assert!(!valid_tiles("{}"));
        assert!(!valid_tiles("not json"));
        assert!(!valid_tiles(&format!("[\"{}\"]", "x".repeat(20_001))));
    }

    #[test]
    fn quick_note_titles() {
        assert_eq!(note_from_text("  buy stamps  "), Some(("buy stamps".into(), String::new()))); // the title is all of it
        assert_eq!(note_from_text("   "), None);
        let (t, b) = note_from_text("https://www.example.com/a/b?x=1#top").unwrap();
        assert_eq!((t.as_str(), b.as_str()), ("example.com", "https://www.example.com/a/b?x=1#top")); // a link is titled by its site
        let (t, b) = note_from_text("read this https://example.com").unwrap();
        assert_eq!((t.as_str(), b.as_str()), ("read this https://example.com", "")); // not a bare link
        let (t, b) = note_from_text("first line\nsecond").unwrap();
        assert_eq!((t.as_str(), b.as_str()), ("first line", "first line\nsecond"));
        assert_eq!(note_from_text(&"x".repeat(200)).unwrap().0.chars().count(), 80);
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
