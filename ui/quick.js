// The small always-on-top bar opened by the global shortcut. Everything here works from the keyboard.
const { invoke } = window.__TAURI__.core;
const win = window.__TAURI__.window.getCurrentWindow();
const input = document.getElementById('t');
const due = document.getElementById('d');
const hint = document.getElementById('hint');
const HINT = 'Ctrl+Alt+J due · Enter';
const pad = (n) => String(n).padStart(2, '0');

// While typing, show the due date the words will become ("Call supplier tomorrow 9am" → Fri 13 Nov, 09:00)
function updateHint() {
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
const hide = () => { reset(); win.hide(); };

// Ctrl+Alt+J: show the due field, prefilled with the next full hour so it only needs adjusting; again to drop it
function toggleDue() {
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
  // a date field does not submit its form on Enter by itself
  if (e.key === 'Enter' && e.target === due) { e.preventDefault(); document.getElementById('q').requestSubmit(); }
});
// clicking anywhere else dismisses the bar
win.onFocusChanged(({ payload: focused }) => (focused ? input.focus() : hide()));
