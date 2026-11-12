# Automations

Rules that do things for you: **when** something happens, **then** Vermil does something. They run while Vermil is open, which it is whenever it sits in the tray.

## Add a rule

On the right, choose a **When** and a **Then**, fill what appears, and press **Add rule**.

**When**
- **At a time**: at a time of day, on the days you tick. If the time passed while Vermil was closed, it runs once at start. Once a day at most.
- **A task is done**, **A task becomes overdue**: optionally only when the title mentions a word you type.
- **A bill is paid** (Home & Bills on): optionally only for a bill whose name mentions a word.
- **A budget runs out** (Expenses on): a category went over its monthly budget.
- **A number passes a value**: any number another module keeps (the same list [Goals](Goals.md) uses, such as money spent this month). Once a day at most.

**Then**
- **Add a task** (Tasks on), with an optional due day and time.
- **Add to the shopping list** (Shopping & Meals on).
- **Record an expense** (Expenses on): an amount and a category.
- **Show a notification**.
- **Open a tab**.

Only what works right now is offered: a trigger or an action whose module is off is not in the list.

In the text, `{title}` is the task or bill that triggered the rule, `{name}` a bill, `{cat}` a budget category and `{amount}` a number's value. Example: *When a task is done ("rent"), add a task: Follow up {title}*.

## Manage

The checkbox switches a rule off without deleting it, **Run now** tests it with example words, ✕ removes it (it asks). Each rule shows how often it ran and when. A rule that cannot run says why, for example that the module it needs is off.

## Safety

- A rule that runs more than five times in a minute is paused with a message.
- Something a rule does never starts another rule, so rules cannot chain into a loop.
- A task that went overdue while Vermil was closed does not start an "overdue" rule when it opens again.

Key: `N` new rule. The rules stay when the module is removed.
