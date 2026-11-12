# Vermil

Vermil is a family of small Windows desktop apps under one brand, the way Adobe names its products. This repo is the first one, **Vermil Tasks**. Every later app (Vermil Notes, Vermil Focus, ...) follows this file so the family looks, behaves and ships the same way.

The owner writes in Thai: reply in Thai. All in-app text, code, comments and commit messages are English.

## Naming

| Thing | Pattern | This repo |
|---|---|---|
| Product name | `Vermil <Product>` | Vermil Tasks |
| Identifier | `com.vermil.<product>` | `com.vermil.tasks` |
| GitHub repo, npm and Cargo name | `vermil-<product>` | `vermil-tasks` |
| Signing key | `~/.tauri/vermil-<product>.key` | `vermil-tasks.key` |

The identifier decides the data folder and the installed app's identity. Changing it orphans the user's data, so it is fixed once a version has shipped.

## Stack

- **Tauri 2**: Rust backend in `src-tauri/`, UI in `ui/`. Chosen because the owner wants light apps: the same app was 107 MB as Electron and is under 2 MB here.
- **UI is plain HTML, CSS and JS** loaded as classic scripts. No framework, bundler or build step: `ui/` is shipped as it is. Reach for the platform first (`<dialog>`, `<details>`, View Transitions, `datetime-local`).
- **Dependencies are earned.** Add a crate or package only when the platform and the standard library cannot do it in a few lines.
- **Windows only.** WebView2 is the runtime.

## Architecture

- The **backend owns the data**: one JSON file in the app data folder, written to a temp file and renamed so a crash cannot truncate it. An unreadable file is copied to `*.corrupt` before anything overwrites it.
- The UI holds a copy of the state and calls `invoke` commands. When the backend changes data on its own (quick add, snooze), it emits `todos-changed` and the UI reloads.
- Rust structs validate every command payload. Fields only the UI uses ride through `#[serde(flatten)] extra`.
- **Pure logic is separated and tested**: date and streak rules live in `ui/logic.js` (node tests in `tests/`), reminder rules in `main.rs` (`cargo test`). `npm test` runs both. New non-trivial logic arrives with a test.
- Dates stay in `datetime-local` form (`2026-11-12T09:00`): they parse as local time and sort as text.

## Every Vermil app has

- A tray icon; closing the window hides to the tray, Quit lives in the tray menu.
- Single instance: a second launch shows the running window.
- Start with Windows, enabled once on first run, launched with `--hidden`, with a checkbox to turn it off.
- In-app updates from the repo's GitHub Releases (`latest.json`), signed, offered as a button in the top bar and never forced.
- A frameless window whose top bar is the drag region and holds the window controls.

## Design system

- **Tokens** (`ui/style.css` `:root`): paper `#f4f1ea`, ink `#12110f`, mute `#6f6b63`, accent vermilion `#ff4a1c`. The accent is the only colour and marks one thing per view.
- **Type**: Anuphan variable font, bundled in `ui/fonts/` so the app works offline. Oversized bold headline as the main visual; small uppercase letter-spaced labels.
- **Editorial, quiet components**: hairline rules instead of boxes, underlined fields, one pill-shaped primary button, generous space, asymmetric two-column layout.
- **Fixed shell**: on wide windows the window itself never scrolls; only the main list does. Sizes follow `vh` so the primary action is always on screen. Below 860px it becomes one scrolling column.
- **Motion** is short and purposeful, uses `--ease`, and is switched off under `prefers-reduced-motion`.
- **Dialogs** use the in-app `ask()` and `tell()` helpers in `renderer.js`; the native `confirm` and `alert` show a "tauri.localhost says" box.
- **Keyboard first**: every flow the owner uses daily works without the mouse.
- User text enters the DOM through `textContent`.

## Versions and releases

- The version lives only in `package.json`; `tauri.conf.json` reads it.
- **One feature, one patch version**: implement, test, then commit as `Vermil <Product> X.Y.Z: <feature>` with an annotated tag `vX.Y.Z`. A finished set of features is rolled up as the next minor version.
- **Publishing is the owner's call.** Commit and tag locally, then ask. On a yes, run `npm run release none` to publish the version already committed (`patch`, `minor` and `major` bump first). It builds, signs, pushes and creates the GitHub release.
- The signing key stays outside the repo. If it is lost, installed copies can no longer be updated, so remind the owner to back it up when you create one.

## Testing against the real app

The owner's installed app and its data folder are live. Test in a separate copy:

- Build with `npx tauri build --debug --no-bundle --config <test config>`, where the test config overrides `identifier` (`com.vermil.<product>.test`) and `productName`, giving the copy its own data folder and autostart entry. Config arrays are replaced whole, so repeat every window in the override.
- Add `additionalBrowserArgs: "--remote-debugging-port=<port>"` to the windows to drive the UI over the DevTools protocol.
- Have every test script abort if its data folder is not empty, and clear it when done.
- Say plainly what was only simulated: toast buttons, the tray menu, file pickers, real key presses and a real reboot cannot be driven from a script.

## Gotchas

- **Edit files with the Edit tool or Python (`encoding='utf-8'`).** Windows PowerShell 5.1 `Get-Content`/`Set-Content` re-encodes UTF-8 and corrupted `✳ → ·` in `renderer.js` once.
- **CSS order**: the fixed-shell media block is last in `style.css` because it overrides base rules of equal specificity.
- **Toasts** go through `tauri-winrt-notification` directly; the notification plugin has no action buttons on desktop. A build run from `target/` borrows PowerShell's app id, an installed build uses the identifier.
- **Global shortcuts** are registered with retries: right after an update the outgoing process still holds them for a moment.
- **Autostart** writes to HKLM when the process is elevated and HKCU otherwise.
- **Clipboard** writes need a focused window, so they fail in scripted tests.
- The owner's network blocks some sites (HTTP 403 from a web filter). When a reference site is unreachable, design from the brief and say so.

## Starting a new Vermil app

1. Create `vermil-<product>` beside this repo and copy this file into it.
2. Copy the shell from Vermil Tasks: `ui/style.css` tokens and fonts, the top bar, footer and dialog markup, and from `main.rs` the store, tray, single-instance, autostart and updater code. `release.mjs` is copied unchanged.
3. Set the names from the table above and generate a signing key with `npx tauri signer generate -w ~/.tauri/vermil-<product>.key`; put its public key in `tauri.conf.json`.
4. Derive the icon from `icon.png` (ink square, paper mark, vermilion dot) with a mark of its own, then run `npx tauri icon icon.png`.
5. Build the smallest version that does the core job, then grow it one patch version per feature.
