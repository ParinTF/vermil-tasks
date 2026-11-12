# Focus timer

A Pomodoro timer for a task, and a record of the time you really spent. Needs [Tasks](Tasks.md).

## Use it

1. In Tasks, select a task and press `F` (or its **Focus** button, or "Focus timer…" in the [palette](Command-palette.md)).
2. Choose the task (or none), set **Work** and **Break** minutes (25 and 5 to start) and press **Start**.
3. A chip in the top bar counts down with the task's name; click it to reopen the timer. **Pause**, **Resume** and **Stop** are in the dialog.
4. When work ends a notification says so and the **break** starts by itself; when the break ends you get another one and the timer rests.

Stopping early records the minutes you actually spent (under a minute records nothing).

## What it keeps

Every finished session is logged with its task. The task row then shows **"50 min focused"**, the dialog lists today and the last 7 days, and the top five tasks of the week.

- Home tile: minutes focused today.
- [Goals](Goals.md) can watch focus minutes; [Weekly Review](Weekly-Review.md) sums them.
- Switching the module off keeps the log.
