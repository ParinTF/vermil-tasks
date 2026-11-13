# Time Tracker

Time your work by project, add time by hand, and get hours and earnings for an invoice. Adds a **Time** tab.

## Set up

On the right, add a **project**: a name, an optional **client** and an optional **rate per hour**. ✕ removes a project; its entries stay in the history as "Deleted project".

## Track

1. Choose the project from the drop-down (click it, or focus it and press `Enter`, `↓` or `Space`; `↑` `↓` move, `Enter` chooses, `Esc` closes, a letter jumps to a project; it says "Add a project first" until you have one), type what you are working on (open tasks from [Tasks](Tasks.md) are suggested) and press **Start**.
2. A chip in the top bar and the big clock show the running time; click the chip to come back. The timer **keeps running** if you close the window, switch the module off or restart Vermil.
3. Press **Stop**. The entry lands in **Today** with its length.

Forgot to start? **Add time by hand** takes its own **project** (choose it in the form; it starts on the one above and can differ), a day, a from and a to time (the end must be after the start) and a note. If something is missing it says exactly what: add a project first, pick the day, fill in the times, or the end must be after the start.

## Report

Choose **This week**, **This month** or **Last month**: hours per project with the client, the earnings at each project's rate, and a total. **Copy summary** puts it on the clipboard for an invoice; **Save as file** writes a `.md` file in Downloads.

The command palette has "Start the time tracker" / "Stop the time tracker".

Works with: Home tile (tracking now, or time today), [Goals](Goals.md) (hours tracked this week), [Weekly Review](Weekly-Review.md).
