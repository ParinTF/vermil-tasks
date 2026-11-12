// The Settings page (Ctrl+,): how Vermil looks. A module may add a section with settingsHooks.push(() => element); take it out in stop().
// The look is kept in localStorage ("look") and applied by theme.js before first paint, in every window.
const ACCENTS = [['Vermilion', '#ff4a1c'], ['Orange', '#e8590c'], ['Amber', '#b97f00'], ['Green', '#1f9d55'], ['Teal', '#0e8f9c'], ['Blue', '#3b82f6'], ['Indigo', '#6366f1'], ['Violet', '#8b5cf6'], ['Pink', '#e5489b'], ['Graphite', '#6b7280']];
let lastView = 'home'; // where Esc and Back return to

function setLook(change) {
  const look = normalLook({ ...storedLook(), ...change });
  try { localStorage.setItem('look', JSON.stringify(look)); } catch {}
  applyLook(look);
  return look;
}

function renderSettings() {
  const root = $('settings-view');
  const look = storedLook();
  const press = (b, on) => { b.ariaPressed = String(on); return b; };

  // theme
  const themes = [['', 'Auto'], ['light', 'Light'], ['dark', 'Dark']].map(([v, label]) => {
    const b = press(el('button', { type: 'button', className: 'st-opt', textContent: label }), (document.documentElement.dataset.theme || '') === v);
    b.onclick = () => { theme = v; if (v) document.documentElement.dataset.theme = v; else delete document.documentElement.dataset.theme; try { localStorage.setItem('theme', v); } catch {} showTheme(); renderSettings(); };
    return b;
  });

  // accent
  const accentMsg = el('p', { className: 'st-note', role: 'status' });
  const swatches = ACCENTS.map(([name, hex]) => {
    const b = press(el('button', { type: 'button', className: 'st-swatch', ariaLabel: name, title: name }), look.accent === hex);
    b.style.background = hex;
    b.onclick = () => { setLook({ accent: hex }); renderSettings(); };
    return b;
  });
  const custom = el('input', { type: 'color', id: 'st-accent', className: 'st-color', value: look.accent, ariaLabel: 'Custom accent colour' });
  custom.onchange = () => {
    const fitted = fitAccent(custom.value);
    setLook({ accent: fitted });
    renderSettings();
    if (fitted !== custom.value.toLowerCase()) $('st-accent-msg').textContent = 'Adjusted a little so it stays readable on both light and dark paper.';
  };
  accentMsg.id = 'st-accent-msg';

  // font
  const fontOpts = [...Object.entries(FONTS).map(([k, f]) => [k, f.name]), ['custom', 'Other']].map(([k, label]) => {
    const b = press(el('button', { type: 'button', className: 'st-opt', textContent: label }), look.font === k);
    if (k !== 'custom') b.style.fontFamily = FONTS[k].stack;
    b.onclick = () => { setLook({ font: k }); renderSettings(); if (k === 'custom') $('st-font').focus(); };
    return b;
  });
  const fontName = el('input', { id: 'st-font', type: 'text', value: look.custom, maxLength: 40, autocomplete: 'off', placeholder: 'A font installed on your computer, e.g. Tahoma', ariaLabel: 'Font name', hidden: look.font !== 'custom' });
  let t;
  fontName.oninput = () => { clearTimeout(t); t = setTimeout(() => setLook({ custom: fontName.value }), 400); };

  const reset = el('button', { type: 'button', className: 'linkish', id: 'st-reset', textContent: 'Reset the look' });
  reset.onclick = () => { setLook({ accent: DEFAULT_ACCENT, font: 'anuphan', custom: '' }); renderSettings(); };

  root.replaceChildren(
    el('div', { className: 'st-wrap' },
      el('header', { className: 'st-head' }, el('h2', {}, 'Settings'), el('button', { type: 'button', className: 'linkish', id: 'st-back', textContent: 'Back', onclick: () => setView(lastView) })),
      el('section', { className: 'st-sec', ariaLabel: 'Appearance' },
        el('h3', {}, 'Appearance'),
        el('div', { className: 'st-row' }, el('span', { className: 'st-label' }, 'Theme'), el('div', { className: 'st-opts', role: 'group', ariaLabel: 'Theme' }, ...themes)),
        el('div', { className: 'st-row' }, el('span', { className: 'st-label' }, 'Accent colour'), el('div', { className: 'st-opts', role: 'group', ariaLabel: 'Accent colour' }, ...swatches, el('label', { className: 'st-custom' }, 'Custom', custom))),
        accentMsg,
        el('div', { className: 'st-row' }, el('span', { className: 'st-label' }, 'Font'), el('div', { className: 'st-opts', role: 'group', ariaLabel: 'Font' }, ...fontOpts)),
        fontName,
        el('p', { className: 'st-preview' }, el('b', {}, 'Your day, in one place'), ' The quick brown fox jumps over the lazy dog. ', el('span', {}, 'ตัวอย่างข้อความภาษาไทย 0123456789')),
        reset),
      ...settingsHooks.flatMap((f) => { try { return [f()]; } catch (e) { console.error('settings section', e); return []; } })));
}

$('settings-btn').onclick = () => setView(view === 'settings' ? lastView : 'settings');
