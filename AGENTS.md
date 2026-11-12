# Vermil

Vermil is one light Windows desktop app that holds many small tools as optional modules (Tasks, Notes, Calendar and more), so the owner does not run several apps. It began as "Vermil Tasks" and was renamed **Vermil** in 2.0.1; the repo, package and identifier keep `vermil-tasks` / `com.vermil.tasks`. A second app of the family would follow this file so it looks, behaves and ships the same way.

The owner writes in Thai: reply in Thai. All in-app text, code, comments and commit messages are English.

## Naming

| Thing | Pattern | This repo |
|---|---|---|
| Product name | `Vermil` (a separate app would be `Vermil <Product>`) | Vermil |
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
- **The app opens on Home; every feature is a module.** The shell (`ui/renderer.js`) holds data and saving (`todos`, `notes`, `commit`), dialogs, theme, update, footer, command palette, shortcut list and `setView()`. Tasks, Notes, Calendar, Focus timer, Expenses (with budgets), Habits, Subscriptions, Countdown, Journal, Goals, Stocks, Automations, Insights, Assistant and Weekly Review are all modules (`ui/modules.js`): an entry in `MODULES` plus `mod-<id>.js` (and `.css`), fetched only while it is switched on from a Home card, so an off module costs nothing at start-up. A fresh install starts with nothing on; whoever already has tasks or notes keeps Tasks, Notes and Calendar on (one-time rule at first start with modules). `requires` links modules (adding Calendar brings Tasks; removing Tasks asks, then takes its dependents).
  A module script calls `defineModule(id, { start, stop, show, keys, refresh, render… })`. A module with `view` gets a tab (Ctrl+1..9 in tab order, Ctrl+0 is Home) and a `<main id="<id>-view">` (`static: true` when that markup already sits in `index.html`). The core calls into it only through `registry[id]` (`registry.tasks.render`, `registry.notes.open`, `registry.calendar.goto`…), so it works when the module is off; shared helpers stay in the core. Hooks the core offers: `rowInfo`, `rowTools`, `commandHooks`, `shortcutGroups`, `metricHooks` (numbers Goals can watch); `stop()` removes what `start()` added. A module that keeps one number per day may add `daily()` returning `[{ id: 'module.name', label, byDay: { 'YYYY-MM-DD': n }, zero? }]` (`zero: true` for counts, 0 on quiet days) for Insights, which finds cross-module patterns in `logic.js` (`insightFindings`, never claims causes). Two optional methods feed the rest of the app: `summary()` (a tile for the Today strip on Home, or null) and `weekly(since, until)` (a section for Weekly Review, or null); both run inside a try/catch, so a module that throws is skipped. Settings (Data) holds Backup (a weekly copy of all data, newest eight kept) and Sync (the same data on two computers through a shared folder: one `Vermil-sync.json` with a revision and the computer that wrote it; a change is pushed, the other computer's newer file is pulled when this one has no changes, and when both changed it stops and asks; data about to be replaced is copied to `todos.pre-sync.json`) because they cover every module. The Today widget is a third window (`widget.html`) the Today widget module feeds with the same tiles as Home. Module data goes through `saveModule` into `data.modules[<id>]` (one JSON value per id, in backups, kept when the module is off). A module's CSS has its own fixed-shell `@media (min-width: 860px)` block. A module that needs the internet (Stocks) checks the connection before every use, shows the last saved data offline, and keeps its network calls in one object (`stocksApi`) so a test can replace them; the backend does the fetching (`reqwest` is already in the build through the updater), and the live endpoint is only smoke-tested. The core's `emit(type, data)` tells `eventHooks` listeners what happened (`task-done` from `commit`, `bill-paid`, `over-budget`); Automations listens, and a module that has something others may react to emits it. `doAction(a)` (core) is the one place that does something on the user's behalf (add a task, shopping item, expense or note, notify, open a tab); Automations and the Assistant both use it. **The Assistant** talks to Gemini through `src-tauri/src/assistant.rs`: the API key sits in its own `assistant.json` (never in the data file, so never in a backup, export or sync, and the UI can only learn that a key exists), it sends only the question and the parts the user ticked, shows that text before it goes, and its suggested actions are validated (`parseAssistantReply`) and run only after the user confirms. Keep any future AI feature opt-in with the same rules. Modules may also offer `addEntry`-style methods to each other through `registry` (Expenses takes spending from Shopping and Bills). A new module comes with a test script: off means nothing loaded, on means the feature, off again means nothing left behind and the data kept. Test harness: seed the data file with `modules._on` (otherwise a fresh folder opens on an empty Home), and wait for the modules to start before driving a view.
- **Notes are records of their own** (`Note { id, title, body, updatedAt }`, same data file). A task points at one with `noteId`; `delete_note` unlinks its tasks and keeps them; a note can serve many tasks. The Notes editor saves itself half a second after typing stops and on every way out (switching notes or views, window blur, close).
- **The note body is a small rich editor** (`contenteditable`, `execCommand`): four block sizes (`h4 p h2 h1`), bold, five palette colours (`<font color>` mapped to theme tokens) and checklists (`ul.check > li[data-done]`). Everything that enters the editor or is read out of it goes through the sanitizer `cleaned()` in `renderer.js`, which keeps only those blocks; pasted and dropped content is plain text. `html` is stored in the note's `extra`, and `body` stays derived plain text (`[ ] ` and `[x] ` mark checklist items) so search, task rows and old backups keep working.
- **A data-format change migrates once at load and keeps the old file first** (`todos.pre-notes.json` is the example; a `notes_migrated`-style flag in the data says it ran). Old backups go through `convert_legacy_notes` on import, so nothing in an old file is lost.
- Rust structs validate every command payload. Fields only the UI uses ride through `#[serde(flatten)] extra`.
- **Pure logic is separated and tested**: dates, repeats, streaks, the quick-add text parser, the Today/Week views and the chart maths live in `ui/logic.js` (node tests in `tests/`); reminder, snooze and morning-summary rules live in `main.rs` (`cargo test`). `npm test` runs both. New non-trivial logic arrives with a test.
- Dates stay in `datetime-local` form (`2026-11-12T09:00`): they parse as local time and sort as text.

## Every Vermil app has

- A tray icon; closing the window hides to the tray, Quit lives in the tray menu.
- Single instance: a second launch shows the running window.
- Start with Windows, enabled once on first run, launched with `--hidden`, with a checkbox to turn it off.
- In-app updates from the repo's GitHub Releases (`latest.json`), signed, offered as a button in the top bar and never forced.
- A frameless window whose top bar is the drag region and holds the window controls.

## Design system

- **Tokens** (`ui/style.css` `:root`): paper, ink and mute switch with `light-dark()` (light `#f4f1ea` `#12110f` `#6f6b63`, dark `#141311` `#f1ede4` `#9a958b`); accent vermilion `#ff4a1c`, plus `--accent-text` (`#c93410` on light paper) for small accent text. The accent is the only colour and marks one thing per view.
- **Light and dark**: the app follows Windows; `data-theme="light|dark"` on `<html>` forces one (`ui/theme.js` applies the stored choice before first paint). Never hard-code an ink-with-alpha hex: tints are `color-mix(in srgb, var(--ink) N%, transparent)`. Text on the accent is `#12110f`. Body text, small accent text and chart bars must keep WCAG contrast (4.5:1 text, 3:1 graphics) in both themes. The quick bar is dark in every theme.
- **Settings** (`ui/settings.js`, `Ctrl+,`) lets the owner change theme, accent colour and font; modules add sections with `settingsHooks`. The look is in `localStorage` (`look`) and `ui/theme.js` applies it before first paint in every window by overriding `--accent`, `--accent-text`, `--on-accent` and `--font`; the colour maths (`accentTokens`) is there and tested. Text on the accent uses `var(--on-accent)`, never a hex. Other preferences are in `localStorage` `prefs` (`normalPrefs`/`setPrefs` in `theme.js`); the week start is `weekStartDay` in `logic.js`, and one that is read while drawing reloads the window (`reloadToApply`). Quiet hours and per-module muting live in the backend (`in_quiet`, `toast(module)`), so a module's `invoke('toast', ...)` passes its `module` id.
- **Type**: Anuphan variable font, bundled in `ui/fonts/` so the app works offline; the font setting can swap the stack, and Thai always falls back to Anuphan. Oversized bold headline as the main visual; small uppercase letter-spaced labels.
- **Editorial, quiet components**: hairline rules instead of boxes, underlined fields, one pill-shaped primary button, generous space, asymmetric two-column layout.
- **Fixed shell**: on wide windows the window itself never scrolls; only the main list does. `fitSide()` measures the left column and shrinks the headline and spacing (`--fit`) until it fits at any window height, so the primary action is always on screen; only a window under about 620px tall falls back to scrolling the column. Below 860px it becomes one scrolling column.
- **Motion** is short and purposeful, uses `--ease`, and is switched off under `prefers-reduced-motion`.
- **Dialogs** use the in-app `ask()` and `tell()` helpers in `renderer.js`; the native `confirm` and `alert` show a "tauri.localhost says" box.
- **Charts** are plain elements, no library: one series and no legend (the title names it), thin columns with 4px rounded tops, hairline grid, today in the accent, values on the axis and on the notable bars only, a tooltip on hover and on focus, one tab stop with arrow keys, and a table view of the same numbers. Follow the `dataviz` skill when adding one.
- **Keyboard first**: every flow works without the mouse. Main window: Up/Down select, Space done, E edit, P pin, O open the task's note, Delete delete, N new task, 1-4 tabs, Ctrl+F search, Ctrl+Z undo, T theme, ? lists them. Ctrl+0 goes Home, Ctrl+, opens Settings, Ctrl+1..9 go to the tabs in order. Ctrl+K opens the command palette (search tasks, notes and days, run commands). Typing a conversion in the palette ("5 km to mi", "100 usd to thb") answers it, Enter copies the result; units work offline, currencies check the connection first. `?` opens the shortcut table, a data-driven list of groups (`shortcutGroups`) that shows only what is switched on. Notes: Ctrl+N new, Ctrl+F search, Up/Down walk the list, Delete on a row. Calendar: arrows move a day or week, PageUp/PageDown a month, T today, Enter adds a task, drag a task to another day (or Alt+arrows on it), D hour-by-hour day view where blocks move and resize by drag or Alt+arrows (a task's length is the UI-only `minutes`), M month. In a note: Ctrl+B bold, Ctrl+Shift+L checklist, Ctrl+Enter tick an item. Quick bar: Ctrl+Alt+T from anywhere, Ctrl+Alt+J adds a due date, or type the date as words; Ctrl+Alt+N opens it in note mode (a line or a link saved to Notes). Shortcuts match `e.code` (the physical key) so they work on a Thai layout. A new shortcut goes in the `SHORTCUTS` list in `renderer.js`.
- User text enters the DOM through `textContent`.

## Versions and releases

- The version lives only in `package.json`; `tauri.conf.json` reads it.
- **One feature, one patch version**: implement, test, then commit as `Vermil X.Y.Z: <feature>` with an annotated tag `vX.Y.Z`. A finished set of features is rolled up as the next minor version.
- **Publishing is the owner's call.** Commit and tag locally, then ask. On a yes, run `npm run release none` to publish the version already committed (`patch`, `minor` and `major` bump first). It builds, signs, pushes and creates the GitHub release.
- The signing key stays outside the repo. If it is lost, installed copies can no longer be updated, so remind the owner to back it up when you create one.

## Testing against the real app

The owner's installed app and its data folder are live. Test in a separate copy:

- Build with `npx tauri build --debug --no-bundle --config <test config>`, where the test config overrides `identifier` (`com.vermil.<product>.test`) and `productName`, giving the copy its own data folder and autostart entry. Config arrays are replaced whole, so repeat every window in the override.
- Add `additionalBrowserArgs: "--remote-debugging-port=<port>"` to the windows to drive the UI over the DevTools protocol.
- Have every test script abort if its data folder is not empty, and clear it when done.
- Dark mode is tested with `Emulation.setEmulatedMedia` (`prefers-color-scheme`); a narrow window with `Emulation.setDeviceMetricsOverride`.
- Test copies share a WebView profile between runs: reset `localStorage` and any module-level state (a `let` such as `theme` survives a reload of the test, not of the page) at the start of a script, and turn on `Emulation.setFocusEmulationEnabled`, otherwise focus and blur events stop firing whenever another window is in front.
- Give every test script a timeout (a loop in the page freezes it, and the script waits forever), and have it refuse to run when the test data is not empty.
- Say plainly what was only simulated: toast buttons, the tray menu, file pickers, real key presses and a real reboot cannot be driven from a script.

## Gotchas

- **Edit files with the Edit tool or Python (`encoding='utf-8'`).** Windows PowerShell 5.1 `Get-Content`/`Set-Content` re-encodes UTF-8 and corrupted `✳ → ·` in `renderer.js` once.
- **CSS order**: the fixed-shell media block is last in `style.css` because it overrides base rules of equal specificity.
- **The footer must stay one row** at 1120x800 (every wide-window state): a second row squeezes the left column and clips Add task. Keep new footer items short, and put a conditional warning on an existing control (the Shortcuts button gets a dot when Ctrl+Alt+T is taken) instead of adding text.
- **Class names are global.** `.notes` styles the note under a task row, so the Notes page is `.notes-page`; `.line`, `.more`, `.col`, `.bar` are taken too (the calendar uses `cal-` prefixes). Grep the stylesheet before naming a class. `[hidden]` is `display: none !important` because grid and flex rules would otherwise beat the attribute.
- **Line endings**: files in `ui/` are LF. After a `git stash` or checkout they can come back CRLF (`core.autocrlf`), which breaks multi-line search-and-replace edits; normalise with `sed -i 's/$//'` first.
- **Toasts** go through `tauri-winrt-notification` directly; the notification plugin has no action buttons on desktop. A build run from `target/` borrows PowerShell's app id, an installed build uses the identifier.
- **Global shortcuts** are registered with retries: right after an update the outgoing process still holds them for a moment.
- **Autostart** writes to HKLM when the process is elevated and HKCU otherwise.
- **Clipboard** writes need a focused window, so they fail in scripted tests.
- **Drag is pointer events**, not HTML5 drag and drop (unreliable in the WebView). Test it with real `Input.dispatchMouseEvent` moves; a synthetic `click()` proved a dead button once (the Calendar switch had no handler), so click-test every new control with real mouse events.
- The owner's network blocks some sites (HTTP 403 from a web filter). When a reference site is unreachable, design from the brief and say so.

## Starting a new Vermil app

1. Create `vermil-<product>` beside this repo and copy this file into it.
2. Copy the shell from Vermil Tasks: `ui/style.css` tokens and fonts, `ui/theme.js`, the top bar, footer and dialog markup, the `ask()`/`tell()` and keyboard helpers from `renderer.js`, and from `main.rs` the store, tray, single-instance, autostart and updater code. `release.mjs` is copied unchanged.
3. Set the names from the table above and generate a signing key with `npx tauri signer generate -w ~/.tauri/vermil-<product>.key`; put its public key in `tauri.conf.json`.
4. Derive the icon from `icon.png` (ink square, paper mark, vermilion dot) with a mark of its own, then run `npx tauri icon icon.png`.
5. Build the smallest version that does the core job, then grow it one patch version per feature.
