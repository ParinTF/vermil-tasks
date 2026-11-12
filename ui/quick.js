// The small always-on-top bar opened by the global shortcut. Everything here works from the keyboard.
const { invoke } = window.__TAURI__.core;
const win = window.__TAURI__.window.getCurrentWindow();
const input = document.getElementById('t');
const due = document.getElementById('d');
const hint = document.getElementById('hint');
const HINT = 'Ctrl+Alt+J due · Ctrl+Alt+N note · Enter';
const NOTE_HINT = 'Link or text, saved to Notes · Ctrl+Alt+N task · Enter';
let mode = 'task'; // or 'note': the same bar jots a note instead
const pad = (n) => String(n).padStart(2, '0');

// While typing, show the due date the words will become ("Call supplier tomorrow 9am" → Fri 13 Nov, 09:00)
function updateHint() {
  if (mode === 'note') { hint.textContent = NOTE_HINT; return; }
  const hit = due.hidden ? parseQuick(input.value, new Date()) : null;
  hint.textContent = hit && hit.due
    ? '→ ' + new Date(hit.due).toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) + ' · Enter'
    : HINT;
}
input.addEventListener('input', updateHint);

function reset() {
  input.value = '';
  due.value = '';
  due.hidden = true;
  updateHint();
}
function setMode(next) {
  mode = next;
  const note = mode === 'note';
  input.placeholder = note ? 'Jot a note or paste a link' : 'Add a task';
  input.setAttribute('aria-label', note ? 'New note' : 'New task');
  input.maxLength = note ? 2000 : 200;
  if (note) { due.value = ''; due.hidden = true; }
  updateHint();
  input.focus();
}
const hide = () => { reset(); setMode('task'); win.hide(); };

// Ctrl+Alt+J: show the due field, prefilled with the next full hour so it only needs adjusting; again to drop it
function toggleDue() {
  if (mode === 'note') return; // a note has no due date
  if (!due.hidden) {
    due.value = '';
    due.hidden = true;
    updateHint();
    return input.focus();
  }
  const d = new Date(Date.now() + 3600000);
  due.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`;
  due.hidden = false;
  updateHint();
  due.focus();
}

document.getElementById('q').onsubmit = async (e) => {
  e.preventDefault();
  try {
    if (mode === 'note') {
      await invoke('quick_note', { text: input.value });
      return hide();
    }
    // an explicit due field wins and the title is sent as typed; otherwise the words are read for a day and time
    const entry = due.hidden ? parseQuick(input.value, new Date()) : { title: input.value, due: due.value || null };
    await invoke('quick_add', { title: entry.title, due: entry.due });
    hide();
  } catch (err) {
    input.value = '';
    input.placeholder = 'Could not save: ' + err;
  }
};
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hide();
  // e.code, not e.key: with a Thai layout the J key types a Thai letter
  if (e.ctrlKey && e.altKey && e.code === 'KeyJ') { e.preventDefault(); toggleDue(); }
  if (e.ctrlKey && e.altKey && e.code === 'KeyN') { e.preventDefault(); setMode(mode === 'note' ? 'task' : 'note'); }
  // a date field does not submit its form on Enter by itself
  if (e.key === 'Enter' && e.target === due) { e.preventDefault(); document.getElementById('q').requestSubmit(); }
});
// the shortcut or tray item that opened the bar says which mode to show
window.__TAURI__.event.listen('quick-mode', (e) => setMode(e.payload === 'note' ? 'note' : 'task'));
// clicking anywhere else dismisses the bar
win.onFocusChanged(({ payload: focused }) => (focused ? input.focus() : hide()));
