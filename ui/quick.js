// The small always-on-top bar opened by the global shortcut. Everything here works from the keyboard.
const { invoke } = window.__TAURI__.core;
const win = window.__TAURI__.window.getCurrentWindow();
const input = document.getElementById('t');
const due = document.getElementById('d');
const pad = (n) => String(n).padStart(2, '0');

function reset() {
  input.value = '';
  due.value = '';
  due.hidden = true;
}
const hide = () => { reset(); win.hide(); };

// Ctrl+Alt+J: show the due field, prefilled with the next full hour so it only needs adjusting; again to drop it
function toggleDue() {
  if (!due.hidden) {
    due.value = '';
    due.hidden = true;
    return input.focus();
  }
  const d = new Date(Date.now() + 3600000);
  due.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`;
  due.hidden = false;
  due.focus();
}

document.getElementById('q').onsubmit = async (e) => {
  e.preventDefault();
  try {
    await invoke('quick_add', { title: input.value, due: due.value || null });
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
