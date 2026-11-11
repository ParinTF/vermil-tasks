// The small always-on-top bar opened by the global shortcut.
const { invoke } = window.__TAURI__.core;
const win = window.__TAURI__.window.getCurrentWindow();
const input = document.getElementById('t');
const hide = () => { input.value = ''; win.hide(); };

document.getElementById('q').onsubmit = async (e) => {
  e.preventDefault();
  try {
    await invoke('quick_add', { title: input.value });
    hide();
  } catch (err) {
    alert('Could not save: ' + err);
  }
};
addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
// clicking anywhere else dismisses the bar
win.onFocusChanged(({ payload: focused }) => (focused ? input.focus() : hide()));
