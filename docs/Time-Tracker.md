# Time Tracker

Time your work by project, add time by hand, and get hours and earnings for an invoice. Adds a **Time** tab.

## Set up

On the right, add a **project**: a name, an optional **client** and an optional **rate per hour**. ✕ removes a project; its entries stay in the history as "Deleted project".

## Track

1. Choose the project from the drop-down (click it, or focus it and press `Enter`, `↓` or `Space`; `↑` `↓` move, `Enter` chooses, `Esc` closes, a letter jumps to a project; it says "Add a project first" until you have one), type what you are working on (open tasks from [Tasks](Tasks.md) are suggested) and press **Start**.
2. A chip in the top bar and the big clock show the running time; click the chip to come back. The timer **keeps running** if you close the window, switch the module off or restart Vermil.
3. Press **Stop**. The entry lands in **Today** with its length.

## Track a task

With Time on, every open task row in [Tasks](Tasks.md) has a **Track** button (key `K` on the selected row). It starts the timer with the task's title as the description, on the project you used last (or the first one; it asks you to add a project if there is none). The row then shows "● tracking" and its button reads **Stop timer**. Tracking another task stops the running one and saves it as an entry first. Entries keep the task they came from.

With [Projects](Projects.md) on, a task that belongs to a project is tracked on that project.

## What you did

Next to the timer there is a **Details** box: write what you did, in as many lines as you like (up to 2,000 characters). You can type in it, and in the description box, **while the timer runs**; it is saved as you type and goes with the entry when you stop. Every entry has a **✎** pencil (orange when it has details): press it to write or change the details afterwards; it saves as you type, and `Esc` or leaving the box closes it. Emptying the box removes the details.

Under the report there is a **Work log**: the period's entries, newest first, with the day, the time, how long, the description and the details, which you can edit there too. **Copy summary** and **Save as file** include the Work log after the totals, one line per entry ("13 Nov 07:40-09:00 · Website · 1 h 20 min · Fix bug — what you did"), ready to paste into an invoice.

Forgot to start? **Add time by hand** takes its own **project** (choose it in the form; it starts on the one above and can differ), a day, a from and a to time (the end must be after the start) and a note. If something is missing it says exactly what: add a project first, pick the day, fill in the times, or the end must be after the start.

## Report

Choose **This week**, **This month** or **Last month**: hours per project with the client, the earnings at each project's rate, and a total. **Copy summary** puts it on the clipboard for an invoice; **Save as file** writes a `.md` file in Downloads.

The command palette has "Start the time tracker" / "Stop the time tracker".

Works with: Home tile (tracking now, or time today), [Goals](Goals.md) (hours tracked this week), [Weekly Review](Weekly-Review.md).
