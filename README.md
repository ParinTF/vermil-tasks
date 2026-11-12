# Vermil

One light Windows app for the small things of daily life. It starts empty and you switch on only the tools you want, so the rest are never even loaded. The installer is about 2 MB, no account, no server, everything stays on your computer.

![Windows](https://img.shields.io/badge/Windows-10%2F11-lightgrey)

## What it is

The app opens on **Home**: a strip of today's numbers and one card per module. Add a module with its card; remove it and your data stays. The first time you start, nothing is on. Pick what you need.

| Module | What it does |
|---|---|
| [Tasks](docs/Tasks.md) | To-do list with due dates, reminders, repeats, history and stats |
| [Notes](docs/Notes.md) | Quick notes with sizes, colours, bold and checklists, linkable to tasks |
| [Calendar](docs/Calendar.md) | Month and hour-by-hour views of your tasks; drag to reschedule |
| [Focus timer](docs/Focus-timer.md) | Pomodoro timer tied to a task, time focused per task |
| [Expenses](docs/Expenses.md) | Spending and income by category, monthly budgets |
| [Habits](docs/Habits.md) | Daily habits, streaks and a 26-week heatmap |
| [Subscriptions](docs/Subscriptions.md) | What renews and when, with a reminder |
| [Shopping & Meals](docs/Shopping-and-Meals.md) | Shopping list and a weekly meal plan |
| [Health](docs/Health.md) | Water, sleep, weight, workouts and medicine reminders |
| [Library](docs/Library.md) | Books, films, series and games with ratings |
| [People](docs/People.md) | Birthdays, gift ideas and staying in touch |
| [Home & Bills](docs/Home-and-Bills.md) | Household bills, what you paid, where the paperwork is |
| [Travel](docs/Travel.md) | Trips with packing list, daily plan and costs against a budget |
| [Time Tracker](docs/Time-Tracker.md) | Time by project, hours and earnings for an invoice |
| [Today widget](docs/Today-widget.md) | A small always-on-top window with today's numbers |
| [Countdown](docs/Countdown.md) | Days until what matters, yearly events too |
| [Journal](docs/Journal.md) | A few lines a day and a mood, with a two-week chart |
| [Goals](docs/Goals.md) | Targets that watch numbers from your other modules |
| [Stocks](docs/Stocks.md) | Look up a stock, pre-market moves, portfolio profit and loss (needs the internet) |
| [Weekly Review](docs/Weekly-Review.md) | One page summing up your week from every module |

Everything else is in [Home, backup and sync](docs/Home.md), the [command palette](docs/Command-palette.md), the [quick bar](docs/Quick-bar.md) and the [keyboard shortcuts](docs/Shortcuts.md).

## Install

1. Download `Vermil_<version>_x64-setup.exe` from the [latest release](https://github.com/ParinTF/vermil-tasks/releases/latest) and run it. It installs for your user only.
2. Vermil lives in the tray. Closing the window hides it there; **Quit** is in the tray menu.
3. It starts with Windows (the first time; there is a checkbox at the bottom to turn it off) and looks for updates by itself. An update is offered as a button in the top bar and never forced.

Needs Windows 10 or 11 with WebView2 (already part of Windows 11).

## Good to know

- **Fast to use without a mouse.** `Ctrl+K` is a command palette that searches everything and runs commands; `?` lists every shortcut. Shortcuts work with a Thai keyboard layout too.
- **From anywhere in Windows:** `Ctrl+Alt+T` adds a task, `Ctrl+Alt+N` jots a note or a link, `Ctrl+Alt+W` shows the Today widget.
- **Light and dark** follow Windows; the button in the top bar forces one.
- **Your data** is one JSON file in `%APPDATA%\com.vermil.tasks`, written safely (a crash cannot half-write it). A weekly backup goes to `Documents\Vermil Backups` (or a folder you choose), and Home can keep two computers in step through a shared folder such as OneDrive.
- **Privacy:** nothing leaves your computer except the update check and, only when you use the Stocks module or a currency conversion, a price lookup. There is no account and no analytics.

## Build and test

Windows, [Rust](https://rustup.rs) and Node.js.

```bash
npm install
npm test            # cargo tests (backend logic) and node tests (the pure UI logic)
npx tauri dev       # run it
npx tauri build     # build the installer
```

The UI in `ui/` is plain HTML, CSS and JavaScript with no framework or build step. The backend is Rust ([Tauri 2](https://tauri.app)) in `src-tauri/`. How the code is organised, the module contract and the conventions are in [AGENTS.md](AGENTS.md).

Releases are made with `npm run release` (builds, signs, tags and publishes the GitHub release; the update feed is `latest.json` on the release).

## Licence

No licence has been chosen yet, so all rights are reserved by the author.
