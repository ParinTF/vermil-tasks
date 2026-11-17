//! Offline media packs (`toeic-listen-vol{1..6}.vpack`) for TOEIC Listening mock exams.
//! Each `.vpack` stores MP3 audio tracks and WebP photographs for 5 sets in one file outside `todos.json`,
//! downloaded on demand from GitHub Releases so the app installer remains small.

use serde::Serialize;
use std::{
    collections::HashMap,
    fs::{self, File},
    io::{Read, Seek, SeekFrom, Write},
    path::{Path, PathBuf},
    time::Duration,
};
use tauri::{AppHandle, Emitter, Manager};

const MAGIC: &[u8; 8] = b"VPACK1\0\0";
const MAX_INDEX_BYTES: usize = 2 * 1024 * 1024;
const MAX_ITEM_BYTES: usize = 10 * 1024 * 1024;
const MEDIA_BASE: &str = "https://github.com/ParinTF/vermil-tasks/releases/download/toeic-media-v1";

#[derive(Serialize)]
pub struct PackStatus {
    vol: u8,
    installed: bool,
    bytes: u64,
}

fn valid_vol(vol: u8) -> bool {
    (1..=6).contains(&vol)
}

fn valid_key(key: &str) -> bool {
    !key.is_empty()
        && key.len() <= 48
        && !key.contains("..")
        && key.bytes().all(|b| b.is_ascii_alphanumeric() || b"._-".contains(&b))
        && (key.ends_with(".mp3") || key.ends_with(".webp"))
}

fn pack_dir(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(app.path().app_data_dir().map_err(|e| e.to_string())?.join("listening"))
}

fn pack_path(app: &AppHandle, vol: u8) -> Result<PathBuf, String> {
    if !valid_vol(vol) {
        return Err("volume must be 1..6".into());
    }
    Ok(pack_dir(app)?.join(format!("toeic-listen-vol{vol}.vpack")))
}

fn read_index<R: Read + Seek>(r: &mut R) -> Result<(u64, HashMap<String, (u64, u32)>), String> {
    r.seek(SeekFrom::Start(0)).map_err(|e| e.to_string())?;
    let mut magic = [0u8; 8];
    r.read_exact(&mut magic).map_err(|_| "invalid listening pack header".to_string())?;
    if &magic != MAGIC {
        return Err("bad listening pack magic".into());
    }
    let mut len_buf = [0u8; 4];
    r.read_exact(&mut len_buf).map_err(|_| "missing pack index length".to_string())?;
    let idx_len = u32::from_le_bytes(len_buf) as usize;
    if idx_len == 0 || idx_len > MAX_INDEX_BYTES {
        return Err("invalid listening pack index size".into());
    }
    let mut idx_bytes = vec![0u8; idx_len];
    r.read_exact(&mut idx_bytes).map_err(|_| "truncated listening pack index".to_string())?;
    let index: HashMap<String, (u64, u32)> =
        serde_json::from_slice(&idx_bytes).map_err(|_| "corrupt listening pack index".to_string())?;
    let payload_start = 12u64 + idx_len as u64;
    Ok((payload_start, index))
}

fn extract_slice(path: &Path, key: &str) -> Result<Vec<u8>, String> {
    let mut f = File::open(path).map_err(|_| "listening pack not downloaded yet".to_string())?;
    let file_len = f.metadata().map_err(|e| e.to_string())?.len();
    let (payload_start, index) = read_index(&mut f)?;
    let &(rel_off, len) = index.get(key).ok_or_else(|| format!("missing media asset: {key}"))?;
    let len_usize = len as usize;
    if len_usize == 0 || len_usize > MAX_ITEM_BYTES {
        return Err("invalid media asset size".into());
    }
    let abs_off = payload_start.checked_add(rel_off).ok_or("offset overflow")?;
    let abs_end = abs_off.checked_add(len as u64).ok_or("end overflow")?;
    if abs_end > file_len {
        return Err("corrupt pack bounds".into());
    }
    f.seek(SeekFrom::Start(abs_off)).map_err(|e| e.to_string())?;
    let mut buf = vec![0u8; len_usize];
    f.read_exact(&mut buf).map_err(|e| e.to_string())?;
    Ok(buf)
}

pub fn base64_encode(bytes: &[u8]) -> String {
    const TABLE: &[u8; 64] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let mut out = String::with_capacity(bytes.len().div_ceil(3) * 4);
    for chunk in bytes.chunks(3) {
        let b0 = chunk[0] as usize;
        let b1 = *chunk.get(1).unwrap_or(&0) as usize;
        let b2 = *chunk.get(2).unwrap_or(&0) as usize;
        out.push(TABLE[b0 >> 2] as char);
        out.push(TABLE[((b0 & 0x03) << 4) | (b1 >> 4)] as char);
        out.push(if chunk.len() > 1 { TABLE[((b1 & 0x0f) << 2) | (b2 >> 6)] as char } else { '=' });
        out.push(if chunk.len() > 2 { TABLE[b2 & 0x3f] as char } else { '=' });
    }
    out
}

#[tauri::command]
pub fn listening_pack_status(app: AppHandle) -> Result<Vec<PackStatus>, String> {
    let mut out = Vec::with_capacity(6);
    for vol in 1..=6u8 {
        let p = pack_path(&app, vol)?;
        match fs::metadata(&p) {
            Ok(meta) => out.push(PackStatus { vol, installed: meta.len() > 16, bytes: meta.len() }),
            Err(_) => out.push(PackStatus { vol, installed: false, bytes: 0 }),
        }
    }
    Ok(out)
}

#[tauri::command]
pub async fn download_listening_pack(app: AppHandle, vol: u8) -> Result<PackStatus, String> {
    let dest = pack_path(&app, vol)?;
    let dir = dest.parent().ok_or("bad pack directory")?;
    fs::create_dir_all(dir).map_err(|e| e.to_string())?;

    let client = reqwest::Client::builder()
        .user_agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) Vermil")
        .timeout(Duration::from_secs(180))
        .build()
        .map_err(|e| e.to_string())?;

    let url = format!("{MEDIA_BASE}/toeic-listen-vol{vol}.vpack");
    let mut resp = client.get(&url).send().await.map_err(|e| {
        if e.is_connect() || e.is_timeout() { "no internet connection".into() } else { e.to_string() }
    })?;
    if !resp.status().is_success() {
        return Err(format!("could not download volume {vol} (HTTP {})", resp.status()));
    }

    let total = resp.content_length().unwrap_or(0);
    let tmp = dest.with_extension("vpack.tmp");
    let mut loaded: u64 = 0;
    let mut last_emit: u64 = 0;

    let write_res: Result<(), String> = async {
        let mut f = File::create(&tmp).map_err(|e| e.to_string())?;
        while let Some(chunk) = resp.chunk().await.map_err(|e| e.to_string())? {
            f.write_all(&chunk).map_err(|e| e.to_string())?;
            loaded += chunk.len() as u64;
            if loaded - last_emit >= 65_536 || (total > 0 && loaded >= total) {
                last_emit = loaded;
                let _ = app.emit("listening-progress", serde_json::json!({ "vol": vol, "loaded": loaded, "total": total }));
            }
        }
        f.flush().map_err(|e| e.to_string())?;
        Ok(())
    }
    .await;

    if let Err(e) = write_res {
        let _ = fs::remove_file(&tmp);
        return Err(e);
    }

    // Validate header + index before publishing the cache file.
    if let Err(e) = File::open(&tmp).map_err(|e| e.to_string()).and_then(|mut f| read_index(&mut f).map(|_| ())) {
        let _ = fs::remove_file(&tmp);
        return Err(e);
    }

    fs::rename(&tmp, &dest).map_err(|e| e.to_string())?;
    let _ = app.emit("listening-progress", serde_json::json!({ "vol": vol, "loaded": loaded, "total": loaded }));
    Ok(PackStatus { vol, installed: true, bytes: loaded })
}

#[tauri::command]
pub fn delete_listening_pack(app: AppHandle, vol: u8) -> Result<(), String> {
    let p = pack_path(&app, vol)?;
    if p.exists() {
        fs::remove_file(&p).map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
pub fn read_listening_asset(app: AppHandle, vol: u8, key: String) -> Result<String, String> {
    if !valid_key(&key) {
        return Err("invalid asset key".into());
    }
    let p = pack_path(&app, vol)?;
    let bytes = extract_slice(&p, &key)?;
    let mime = if key.ends_with(".webp") { "image/webp" } else { "audio/mpeg" };
    Ok(format!("data:{mime};base64,{}", base64_encode(&bytes)))
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::io::Cursor;

    fn make_pack(items: &[(&str, &[u8])]) -> Vec<u8> {
        let mut idx = serde_json::Map::new();
        let mut payload = Vec::new();
        for (k, bytes) in items {
            let off = payload.len() as u64;
            let len = bytes.len() as u32;
            idx.insert((*k).into(), serde_json::json!([off, len]));
            payload.extend_from_slice(bytes);
        }
        let idx_bytes = serde_json::to_vec(&idx).unwrap();
        let mut out = Vec::new();
        out.extend_from_slice(MAGIC);
        out.extend_from_slice(&(idx_bytes.len() as u32).to_le_bytes());
        out.extend_from_slice(&idx_bytes);
        out.extend_from_slice(&payload);
        out
    }

    #[test]
    fn key_and_vol_checks_block_paths() {
        assert!(valid_vol(1) && valid_vol(6) && !valid_vol(0) && !valid_vol(7));
        assert!(valid_key("l1-p1-1.webp") && valid_key("l30-p4-10.mp3"));
        for bad in ["", "../x.mp3", "a/b.mp3", "foo.exe", "a\\b.webp"] {
            assert!(!valid_key(bad), "{bad}");
        }
    }

    #[test]
    fn vpack_parses_and_extracts_exact_slices() {
        let pack = make_pack(&[("a.webp", b"WEBPBYTES"), ("b.mp3", b"ID3AUDIO")]);
        let (_start, idx) = read_index(&mut Cursor::new(&pack)).unwrap();
        assert_eq!(idx.get("a.webp"), Some(&(0, 9)));
        assert_eq!(idx.get("b.mp3"), Some(&(9, 8)));

        let tmp = std::env::temp_dir().join(format!("vermil-pack-test-{}.vpack", std::process::id()));
        fs::write(&tmp, &pack).unwrap();
        assert_eq!(extract_slice(&tmp, "a.webp").unwrap(), b"WEBPBYTES");
        assert_eq!(extract_slice(&tmp, "b.mp3").unwrap(), b"ID3AUDIO");
        assert!(extract_slice(&tmp, "missing.mp3").is_err());
        let _ = fs::remove_file(&tmp);
    }

    #[test]
    fn base64_encode_matches_decode() {
        for raw in [b"".as_slice(), b"a", b"ab", b"abc", b"ManMa", &[0, 255, 128, 42]] {
            let enc = base64_encode(raw);
            let dec = crate::base64_decode(&enc).unwrap();
            assert_eq!(dec, raw);
        }
    }
}
