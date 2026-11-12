//! The Assistant's connection to Google's Gemini API. The key lives in its own file (`assistant.json` in the app data
//! folder), never in the data file, so it is not in backups, exports or sync. The UI can only learn that a key exists.

use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use std::{fs, path::PathBuf, time::Duration};
use tauri::{AppHandle, Manager};

const API: &str = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL: &str = "gemini-2.5-flash";

#[derive(Serialize, Deserialize, Default, Clone)]
struct Config {
    #[serde(default)]
    key: String,
    #[serde(default)]
    model: String,
}

#[derive(Serialize)]
pub struct Info {
    has_key: bool,
    model: String,
}

#[derive(Deserialize)]
pub struct Turn {
    role: String,
    text: String,
}

fn file(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app.path().app_data_dir().map_err(|e| e.to_string())?.join("assistant.json"))
}

fn read(app: &AppHandle) -> Config {
    file(app).ok().and_then(|f| fs::read_to_string(f).ok()).and_then(|s| serde_json::from_str(&s).ok()).unwrap_or_default()
}

fn write(app: &AppHandle, cfg: &Config) -> Result<(), String> {
    let f = file(app)?;
    let tmp = f.with_extension("json.tmp");
    fs::write(&tmp, serde_json::to_vec(cfg).map_err(|e| e.to_string())?).map_err(|e| e.to_string())?;
    fs::rename(&tmp, &f).map_err(|e| e.to_string())
}

/// Letters, digits and . - _ only, so the name cannot change the request's path.
fn valid_model(m: &str) -> bool {
    !m.is_empty() && m.len() <= 60 && m.bytes().all(|b| b.is_ascii_alphanumeric() || b".-_".contains(&b))
}

/// What a Google AI Studio key looks like: printable ASCII with no spaces, of a sane length.
fn valid_key(k: &str) -> bool {
    (20..=200).contains(&k.len()) && k.bytes().all(|b| b.is_ascii_graphic())
}

fn build_request(system: &str, turns: &[Turn]) -> Value {
    json!({
        "systemInstruction": { "parts": [{ "text": system }] },
        "contents": turns.iter().map(|t| json!({ "role": if t.role == "model" { "model" } else { "user" }, "parts": [{ "text": t.text }] })).collect::<Vec<_>>(),
        "generationConfig": { "responseMimeType": "application/json", "temperature": 0.3 },
    })
}

/// The answer's text, or why there is none (a blocked request, or a stop before any text).
fn parse_reply(v: &Value) -> Result<String, String> {
    let first = &v["candidates"][0];
    if first.is_null() {
        let why = v["promptFeedback"]["blockReason"].as_str().unwrap_or("no answer");
        return Err(format!("the assistant did not answer ({why})"));
    }
    let text: String = first["content"]["parts"].as_array().map(|p| p.iter().filter_map(|x| x["text"].as_str()).collect()).unwrap_or_default();
    if text.trim().is_empty() {
        return Err(format!("the assistant sent no text (finish reason: {})", first["finishReason"].as_str().unwrap_or("unknown")));
    }
    Ok(text)
}

/// Names of the models that can generate text, without the "models/" prefix.
fn parse_models(v: &Value) -> Vec<String> {
    let mut names: Vec<String> = v["models"].as_array().map(|list| {
        list.iter()
            .filter(|m| m["supportedGenerationMethods"].as_array().is_some_and(|a| a.iter().any(|x| x == "generateContent")))
            .filter_map(|m| m["name"].as_str().map(|n| n.trim_start_matches("models/").to_string()))
            .filter(|n| valid_model(n))
            .collect()
    }).unwrap_or_default();
    names.sort();
    names
}

/// A short, readable error from the API's own message; the key is never part of it (it travels in a header).
fn api_error(status: u16, body: &Value) -> String {
    let msg: String = body["error"]["message"].as_str().unwrap_or("").chars().take(200).collect();
    let hint = match status {
        400 | 403 if msg.to_lowercase().contains("api key") => " Check the key in Settings.",
        403 => " The key may not be allowed to use this model.",
        404 => " Check the model name in Settings.",
        429 => " Too many requests, or the free quota is used up. Try again later.",
        _ => "",
    };
    format!("Gemini answered {status}: {msg}{hint}")
}

#[tauri::command]
pub fn get_assistant(app: AppHandle) -> Info {
    let c = read(&app);
    Info { has_key: !c.key.is_empty(), model: if c.model.is_empty() { DEFAULT_MODEL.into() } else { c.model } }
}

/// `key`: None keeps the saved key, an empty string removes it, anything else replaces it.
#[tauri::command]
pub fn set_assistant(app: AppHandle, key: Option<String>, model: String) -> Result<(), String> {
    let mut c = read(&app);
    let model = model.trim();
    if !model.is_empty() {
        if !valid_model(model) {
            return Err("the model name can only have letters, digits and . - _".into());
        }
        c.model = model.into();
    }
    if let Some(k) = key {
        let k = k.trim();
        if !k.is_empty() && !valid_key(k) {
            return Err("that does not look like an API key".into());
        }
        c.key = k.into();
    }
    write(&app, &c)
}

fn keyed(app: &AppHandle) -> Result<Config, String> {
    let c = read(app);
    if c.key.is_empty() { Err("no API key: add one in Settings".into()) } else { Ok(c) }
}

/// Lists the models this key can use, which also proves the key works.
#[tauri::command]
pub async fn assistant_models(app: AppHandle) -> Result<Vec<String>, String> {
    let c = keyed(&app)?;
    let r = super::http()?.get(format!("{API}/models?pageSize=200")).header("x-goog-api-key", &c.key).timeout(Duration::from_secs(15)).send().await.map_err(super::net_error)?;
    let status = r.status().as_u16();
    let body: Value = r.json().await.unwrap_or(Value::Null);
    if status != 200 {
        return Err(api_error(status, &body));
    }
    Ok(parse_models(&body))
}

/// One round of the conversation: the system text and the turns so far; returns the model's raw text (JSON, by request).
#[tauri::command]
pub async fn assistant_ask(app: AppHandle, system: String, turns: Vec<Turn>) -> Result<String, String> {
    let c = keyed(&app)?;
    let model = if c.model.is_empty() { DEFAULT_MODEL.to_string() } else { c.model.clone() };
    if system.chars().count() > 60_000 || turns.is_empty() || turns.len() > 40 || turns.iter().any(|t| t.text.chars().count() > 8_000) {
        return Err("that is too much text to send".into());
    }
    let mut url = reqwest::Url::parse(&format!("{API}/models/")).map_err(|e| e.to_string())?;
    url.path_segments_mut().map_err(|_| "bad url".to_string())?.pop_if_empty().push(&format!("{model}:generateContent"));
    let r = super::http()?.post(url).header("x-goog-api-key", &c.key).json(&build_request(&system, &turns)).timeout(Duration::from_secs(60)).send().await.map_err(super::net_error)?;
    let status = r.status().as_u16();
    let body: Value = r.json().await.unwrap_or(Value::Null);
    if status != 200 {
        return Err(api_error(status, &body));
    }
    parse_reply(&body)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn model_and_key_are_checked() {
        assert!(valid_model("gemini-2.5-flash") && valid_model("gemma_3.1"));
        assert!(!valid_model("") && !valid_model("a/b") && !valid_model("a:b") && !valid_model("a b") && !valid_model(&"x".repeat(61)));
        assert!(valid_key("AIzaSyA-abcdefghijklmnopqrstuvwxyz012345"));
        assert!(!valid_key("short") && !valid_key("has a space in it 1234567890") && !valid_key(&"k".repeat(201)));
    }

    #[test]
    fn request_has_system_turns_and_json_mode() {
        let turns = vec![Turn { role: "user".into(), text: "hi".into() }, Turn { role: "model".into(), text: "hello".into() }, Turn { role: "weird".into(), text: "x".into() }];
        let r = build_request("be brief", &turns);
        assert_eq!(r["systemInstruction"]["parts"][0]["text"], "be brief");
        assert_eq!(r["contents"][1]["role"], "model");
        assert_eq!(r["contents"][2]["role"], "user"); // an unknown role is sent as the user's
        assert_eq!(r["generationConfig"]["responseMimeType"], "application/json");
    }

    #[test]
    fn reply_text_or_the_reason_there_is_none() {
        let ok = json!({ "candidates": [{ "content": { "parts": [{ "text": "{\"reply\":" }, { "text": "\"ok\"}" }] } }] });
        assert_eq!(parse_reply(&ok).unwrap(), "{\"reply\":\"ok\"}");
        let blocked = json!({ "promptFeedback": { "blockReason": "SAFETY" } });
        assert!(parse_reply(&blocked).unwrap_err().contains("SAFETY"));
        let stopped = json!({ "candidates": [{ "finishReason": "MAX_TOKENS", "content": { "parts": [] } }] });
        assert!(parse_reply(&stopped).unwrap_err().contains("MAX_TOKENS"));
        assert!(parse_reply(&json!({})).is_err());
    }

    #[test]
    fn models_are_the_ones_that_generate_text() {
        let v = json!({ "models": [
            { "name": "models/gemini-b", "supportedGenerationMethods": ["generateContent", "countTokens"] },
            { "name": "models/embed-1", "supportedGenerationMethods": ["embedContent"] },
            { "name": "models/gemini-a", "supportedGenerationMethods": ["generateContent"] },
            { "name": "models/bad name", "supportedGenerationMethods": ["generateContent"] },
        ] });
        assert_eq!(parse_models(&v), vec!["gemini-a", "gemini-b"]);
        assert!(parse_models(&json!({})).is_empty());
    }

    #[test]
    fn errors_are_short_and_helpful() {
        let e = api_error(400, &json!({ "error": { "message": "API key not valid. Please pass a valid API key." } }));
        assert!(e.starts_with("Gemini answered 400") && e.contains("Check the key in Settings"));
        assert!(api_error(404, &json!({})).contains("model name"));
        assert!(api_error(429, &json!({})).contains("quota"));
        assert!(api_error(500, &json!({ "error": { "message": "x".repeat(500) } })).len() < 260);
    }
}
