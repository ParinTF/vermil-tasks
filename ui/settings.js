// The Settings page (Ctrl+,). Sections are built by the functions in SETTINGS_SECTIONS; a module may add its own with
// settingsHooks.push(() => element) and take it out in stop(). The look is kept in localStorage ("look", applied by theme.js
// before first paint), other preferences in "prefs" (also theme.js); startup, quiet hours and the like live in the backend.
const ACCENTS = [['Vermilion', '#ff4a1c'], ['Orange', '#e8590c'], ['Amber', '#b97f00'], ['Green', '#1f9d55'], ['Teal', '#0e8f9c'], ['Blue', '#3b82f6'], ['Indigo', '#6366f1'], ['Violet', '#8b5cf6'], ['Pink', '#e5489b'], ['Graphite', '#6b7280']];
let lastView = 'home'; // where Esc and Back return to

function setLook(change) {
  const look = normalLook({ ...storedLook(), ...change });
  try { localStorage.setItem('look', JSON.stringify(look)); } catch {}
  applyLook(look);
  return look;
}

// a change that is read while drawing (the clock, the first day of the week) takes effect by reloading, then Settings opens again
function reloadToApply() {
  try { sessionStorage.setItem('reopen-settings', '1'); } catch {}
  registry.notes?.flush?.();
  setTimeout(() => location.reload(), 150);
}

const stSection = (title, ...children) => el('section', { className: 'st-sec', ariaLabel: title }, el('h3', {}, title), ...children);
const stRow = (label, ...controls) => el('div', { className: 'st-row' }, el('span', { className: 'st-label' }, label), el('div', { className: 'st-opts' }, ...controls));
const stFine = (text) => el('p', { className: 'st-fine' }, text);
// one choice out of a few, as pills: items [[value, label]], the current value, and what to do when one is picked
function stPicker(label, items, current, pick) {
  return el('div', { className: 'st-opts', role: 'group', ariaLabel: label }, ...items.map(([v, l]) => {
    const b = el('button', { type: 'button', className: 'st-opt', textContent: l, ariaPressed: String(v === current) });
    b.onclick = () => pick(v);
    return b;
  }));
}
const stCheck = (id, label, checked, onchange) => el('label', { className: 'check' }, el('input', { id, type: 'checkbox', checked, onchange }), ' ' + label);

// ── Appearance ──
function appearanceSection() {
  const look = storedLook();
  const themes = stPicker('Theme', [['', 'Auto'], ['light', 'Light'], ['dark', 'Dark']], document.documentElement.dataset.theme || '', (v) => {
    theme = v;
    if (v) document.documentElement.dataset.theme = v; else delete document.documentElement.dataset.theme;
    try { localStorage.setItem('theme', v); } catch {}
    showTheme();
    renderSettings();
  });
  const accentMsg = el('p', { className: 'st-note', role: 'status', id: 'st-accent-msg' });
  const swatches = ACCENTS.map(([name, hex]) => {
    const b = el('button', { type: 'button', className: 'st-swatch', ariaLabel: name, title: name, ariaPressed: String(look.accent === hex) });
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
  const fontOpts = [...Object.entries(FONTS).map(([k, f]) => [k, f.name]), ['custom', 'Other']].map(([k, label]) => {
    const b = el('button', { type: 'button', className: 'st-opt', textContent: label, ariaPressed: String(look.font === k) });
    if (k !== 'custom') b.style.fontFamily = FONTS[k].stack;
    b.onclick = () => { setLook({ font: k }); renderSettings(); if (k === 'custom') $('st-font').focus(); };
    return b;
  });
  const fontName = el('input', { id: 'st-font', type: 'text', value: look.custom, maxLength: 40, autocomplete: 'off', placeholder: 'A font installed on your computer, e.g. Tahoma', ariaLabel: 'Font name', hidden: look.font !== 'custom' });
  let t;
  fontName.oninput = () => { clearTimeout(t); t = setTimeout(() => setLook({ custom: fontName.value }), 400); };
  const reset = el('button', { type: 'button', className: 'linkish', id: 'st-reset', textContent: 'Reset the look' });
  reset.onclick = () => { setLook({ accent: DEFAULT_ACCENT, font: 'anuphan', custom: '' }); renderSettings(); };
  const p = readPrefs();
  return stSection('Appearance',
    stRow('Theme', themes),
    stRow('Accent colour', ...swatches, el('label', { className: 'st-custom' }, 'Custom', custom)),
    accentMsg,
    stRow('Font', ...fontOpts),
    fontName,
    el('p', { className: 'st-preview' }, el('b', {}, 'Your day, in one place'), ' The quick brown fox jumps over the lazy dog. ', el('span', {}, 'ตัวอย่างข้อความภาษาไทย 0123456789')),
    stRow('Motion', stPicker('Motion', [['', 'Follow Windows'], ['off', 'Off']], p.motion, (v) => { setPrefs({ motion: v }); renderSettings(); })),
    stRow('Top ticker', stPicker('Top ticker', [['on', 'Show'], ['off', 'Hide']], p.ticker ? 'on' : 'off', (v) => { setPrefs({ ticker: v === 'on' }); renderSettings(); })),
    reset);
}

// ── General: startup, the morning summary, the calendar and clock, where to start ──
function generalSection() {
  const p = readPrefs();
  const auto = stCheck('autostart', 'Start with Windows', false, (e) => invoke('set_autostart', { on: e.target.checked }).catch((err) => { e.target.checked = !e.target.checked; tell('Could not change the startup setting: ' + err); }));
  invoke('get_autostart').then((on) => { auto.querySelector('input').checked = on; });
  // the summary time is saved a second after typing stops, so editing the digits does not re-trigger it on every keystroke
  const time = el('input', { id: 'summary-time', type: 'time', value: '09:00', ariaLabel: 'Morning summary time' });
  const on = stCheck('summary-on', 'Morning summary at', true, () => { time.disabled = !on.querySelector('input').checked; save(); });
  let timer;
  const save = () => {
    clearTimeout(timer);
    const live = on.querySelector('input').checked && time.value;
    invoke('set_summary_time', { time: live ? time.value : '' }).catch((e) => tell('Could not save the summary time: ' + e));
  };
  time.oninput = () => { clearTimeout(timer); timer = setTimeout(save, 1000); };
  invoke('get_summary_time').then((t) => { on.querySelector('input').checked = t !== ''; time.value = t || '09:00'; time.disabled = t === ''; });

  const remind = el('select', { id: 'st-remind', ariaLabel: 'Default reminder', onchange: () => { setPrefs({ defaultRemind: remind.value }); if (typeof editingId !== 'undefined' && !editingId) $('remind').value = remind.value; } },
    ...[['0', 'At due time'], ['10', '10 minutes before'], ['60', '1 hour before'], ['1440', '1 day before'], ['', 'No reminder']].map(([v, l]) => el('option', { value: v, selected: v === p.defaultRemind }, l)));

  const views = MODULES.filter((m) => m.view && started.has(m.id));
  const ordered = orderTabs(views.map((m) => m.id), p.tabOrder);
  const tabRows = ordered.map((id, i) => {
    const up = el('button', { type: 'button', className: 'linkish st-mv', ariaLabel: `Move ${byId(id).view} left`, textContent: '←', disabled: i === 0 });
    const down = el('button', { type: 'button', className: 'linkish st-mv', ariaLabel: `Move ${byId(id).view} right`, textContent: '→', disabled: i === ordered.length - 1 });
    const move = (d) => () => { const next = [...ordered]; [next[i], next[i + d]] = [next[i + d], next[i]]; setPrefs({ tabOrder: next }); syncViews(); renderSettings(); };
    up.onclick = move(-1);
    down.onclick = move(1);
    return el('li', {}, el('span', {}, byId(id).view), up, down);
  });
  return stSection('General',
    el('div', { className: 'st-line' }, auto),
    el('div', { className: 'st-line' }, on, time),
    stRow('Week starts on', stPicker('Week starts on', [['1', 'Monday'], ['0', 'Sunday']], String(p.weekStart), (v) => { setPrefs({ weekStart: Number(v) }); reloadToApply(); })),
    stRow('Clock', stPicker('Clock', [['24', '24-hour'], ['12', '12-hour']], p.h12 ? '12' : '24', (v) => { setPrefs({ h12: v === '12' }); reloadToApply(); })),
    stRow('Open on', stPicker('Open on', [['home', 'Home'], ['last', 'Where I left off']], p.startPage, (v) => { setPrefs({ startPage: v }); renderSettings(); })),
    stRow('New task reminder', remind),
    ...(tabRows.length > 1 ? [el('div', { className: 'st-row' }, el('span', { className: 'st-label' }, 'Tab order'), el('ol', { id: 'st-tabs', className: 'st-tabs' }, ...tabRows))] : []));
}

// ── Notifications: quiet hours, what may notify, a test ──
const NOTIFY_SOURCES = [['tasks', 'Task reminders', true], ['pomodoro', 'Focus timer', false], ['health', 'Medicine reminders', false], ['bills', 'Bills', false], ['subs', 'Subscriptions', false], ['people', 'Birthdays and touch-ups', false], ['countdown', 'Countdown', false], ['money', 'Budget warnings', false]];
function notificationsSection() {
  const box = el('div', { className: 'st-col' });
  const msg = el('span', { id: 'st-notify-msg', className: 'st-fine', role: 'status' });
  const sec = stSection('Notifications', box);
  invoke('get_notify').then(({ quiet, mute }) => {
    let muted = [...mute];
    const [from, to] = quiet ? quiet.split('-') : ['22:00', '07:00'];
    const qOn = stCheck('st-quiet-on', 'Quiet hours from', !!quiet, () => save());
    const qFrom = el('input', { id: 'st-quiet-from', type: 'time', value: from, ariaLabel: 'Quiet from', oninput: () => save() });
    const qTo = el('input', { id: 'st-quiet-to', type: 'time', value: to, ariaLabel: 'Quiet until', oninput: () => save() });
    const save = () => {
      const q = qOn.querySelector('input').checked && qFrom.value && qTo.value && qFrom.value !== qTo.value ? `${qFrom.value}-${qTo.value}` : '';
      invoke('set_notify', { quiet: q, mute: muted }).then(() => { msg.textContent = 'Saved.'; }, (e) => { msg.textContent = String(e); });
    };
    const sources = NOTIFY_SOURCES.filter(([id, , always]) => always || started.has(id)).map(([id, label]) => {
      const c = stCheck('st-n-' + id, label, !muted.includes(id), (e) => { muted = e.target.checked ? muted.filter((x) => x !== id) : [...muted, id]; save(); });
      return el('div', { className: 'st-line' }, c);
    });
    const test = el('button', { id: 'st-notify-test', type: 'button', className: 'linkish', textContent: 'Send a test notification', onclick: () => { invoke('toast', { title: 'Vermil', text: 'Notifications work.', test: true }); msg.textContent = 'Sent.'; } });
    box.replaceChildren(
      el('div', { className: 'st-line' }, qOn, qFrom, el('span', {}, 'until'), qTo),
      stFine('Nothing is shown during quiet hours. A task reminder that comes due then is shown when they end.'),
      el('h4', { className: 'st-sub' }, 'Notify me about'), ...sources,
      el('div', { className: 'st-line' }, test, msg));
  });
  return sec;
}

const SETTINGS_SECTIONS = [appearanceSection, generalSection, notificationsSection];

function renderSettings() {
  const scroll = $('settings-view').scrollTop;
  $('settings-view').replaceChildren(el('div', { className: 'st-wrap' },
    el('header', { className: 'st-head' }, el('h2', {}, 'Settings'), el('button', { type: 'button', className: 'linkish', id: 'st-back', textContent: 'Back', onclick: () => setView(lastView) })),
    ...[...SETTINGS_SECTIONS, ...settingsHooks].flatMap((f) => { try { return [f()]; } catch (e) { console.error('settings section', e); return []; } })));
  $('settings-view').scrollTop = scroll;
}

$('settings-btn').onclick = () => setView(view === 'settings' ? lastView : 'settings');
