# Assistant

Ask about your own week, or say what to add, and an AI answers. It uses **your own Google Gemini API key**: there is no Vermil account or server, and nothing happens until you add a key.

## Set up

1. Make an API key in Google AI Studio.
2. In [Settings](Settings.md) (`Ctrl+,`) open the **Assistant** section, paste the key and press **Save**.
3. **Check the key and list models** proves the key works and fills the Model box with the models you can use. The default is `gemini-2.5-flash`; model names change over time, so pick one from the list if that one stops working.

The key is kept in its own file in your user folder (`assistant.json` in `%APPDATA%\com.vermil.tasks`). It is **not** in the data file, so it is not in backups, exports or sync, and it is only ever sent to Google. **Remove the key** deletes it. The file is not encrypted, like most desktop apps' keys.

## Ask

Open the **Assistant** tab, type, and press `Ctrl+Enter` (or Ask). Key: `/` writes a message.

- On the right, **What it can see** lists what you may share: your open tasks and due dates, note **titles** (never the text), and a summary from any module that has one (Expenses, Habits, Health…). **Summaries cover** chooses the span: the last 7 days (the default), the last 30 days, this month, last month or this year, so you can ask "what did I spend most on last month?". The span is told to the model and shown in "Show exactly what is sent". **Nothing is ticked at first, and nothing is sent unless you tick it.**
- **Show exactly what is sent** shows the full text that goes out now: the instructions, the data you ticked, and your message.
- Only your message, the recent conversation and the ticked parts are sent, each time you ask.

## Actions

When you ask it to add something ("add a task to call the bank tomorrow at 9", "put milk on the list", "note down these ideas"), it suggests **actions** under its answer: add a task, add to the shopping list, record an expense, create a note, or open a tab. Only the kinds whose module is on are possible.

Each suggestion is a line you can untick. **Nothing runs until you press Do the ticked**; **Skip** drops them. Asking a new question skips whatever was still waiting. Anything the model writes that is not one of these actions is ignored.

## Good to know

- **Privacy:** what you send goes to Google. A free key may let Google use it to improve its products; read Google's current terms before sharing money or health details. Keep what you tick to what the question needs.
- The conversation (your messages and its answers, the last 40) is saved with your data, so it is in backups and sync. **Clear the conversation** empties it.
- It can be wrong. It only knows what you ticked, and it is told to say so when it cannot see something, but check anything that matters.
- Needs the internet; an error (no connection, a wrong key, the free quota used up) shows in the conversation and nothing else changes.
