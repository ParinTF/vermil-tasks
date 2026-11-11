#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use chrono::{Local, NaiveDateTime, TimeZone};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, fs, path::PathBuf, sync::Mutex, time::Duration};
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    AppHandle, Manager, State, WindowEvent,
};
use tauri_plugin_notification::NotificationExt;
use tauri_plugin_updater::UpdaterExt;

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
    #[serde(flatten)]
    extra: serde_json::Map<String, serde_json::Value>, // fields only the UI uses (createdAt, completedAt)
}

#[derive(Serialize, Deserialize, Default)]
struct Data {
    todos: Vec<Todo>,
    // todo id -> the remind time already fired, so editing a due date re-arms the reminder
    #[serde(default)]
    notified: HashMap<String, i64>,
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

fn check_reminders(app: &AppHandle) {
    let store = app.state::<Store>();
    let mut data = store.data.lock().unwrap();
    let hits = due_reminders(&data.todos, &data.notified, Local::now().timestamp_millis());
    if hits.is_empty() {
        return;
    }
    for (todo, at) in hits {
        let due = todo.due.as_deref().and_then(parse_due).map(|d| d.format("%d/%m/%Y %H:%M").to_string());
        let _ = app
            .notification()
            .builder()
            .title(format!("Reminder: {}", todo.title))
            .body(format!("Due {}", due.unwrap_or_default()))
            .show();
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
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| show(app)))
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .invoke_handler(tauri::generate_handler![get_todos, save_todos, check_update, install_update])
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

            let open = MenuItem::with_id(app, "open", "Open", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
            TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .tooltip("Vermil Tasks")
                .menu(&Menu::with_items(app, &[&open, &quit])?)
                .show_menu_on_left_click(false)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "open" => show(app),
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
        Todo { id: "a".into(), title: "t".into(), due: due.map(Into::into), remind_before, done, extra: Default::default() }
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
    fn ui_only_fields_survive_a_round_trip() {
        let json = r#"{"id":"a","title":"t","due":null,"remindBefore":10,"done":true,"completedAt":"x"}"#;
        let back = serde_json::to_value(serde_json::from_str::<Todo>(json).unwrap()).unwrap();
        assert_eq!(back["completedAt"], "x");
        assert_eq!(back["remindBefore"], 10);
    }
}
