// The Settings page (Ctrl+,). Sections are built by the functions in SETTINGS_SECTIONS; a module may add its own with
// settingsHooks.push(() => element) and take it out in stop(). The look is kept in localStorage ("look", applied by theme.js
// before first paint), other preferences in "prefs" (also theme.js); startup, quiet hours and the like live in the backend.
const ACCENTS = [['Vermilion', '#ff4a1c'], ['Orange', '#e8590c'], ['Amber', '#b97f00'], ['Green', '#1f9d55'], ['Teal', '#0e8f9c'], ['Blue', '#3b82f6'], ['Indigo', '#6366f1'], ['Violet', '#8b5cf6'], ['Pink', '#e5489b'], ['Graphite', '#6b7280']];
let lastView = 'home'; // where Esc and Back return to
let sizeNow = 1; // the window's zoom, kept by the backend
invoke('get_zoom').then((z) => { sizeNow = z; });

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
    stRow('Size', stPicker('Size', [['0.9', '90%'], ['1', '100%'], ['1.1', '110%'], ['1.25', '125%']], String(sizeNow), (v) => { sizeNow = Number(v); invoke('set_zoom', { factor: sizeNow }).then(renderSettings, (e) => tell('Could not change the size: ' + e)); })),
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

// ── Shortcuts that work from any app ──
const HOTKEY_NAMES = { quick: ['Quick add a task', 'Quick add a task, from any app'], note: ['Quick note', 'Quick note or link, from any app'], widget: ['Today widget', 'Show or hide the Today widget (when its module is on)'] };
// the shortcut list and the warning follow what was chosen
function setHotkeyLabels(list) {
  for (const h of list) {
    hotkeysNow[h.name] = h.keys;
    const item = shortcutGroups[0].items.find((i) => i[1] === HOTKEY_NAMES[h.name][1]);
    if (item) item[0] = h.keys;
  }
}
invoke('get_hotkeys').then(setHotkeyLabels).catch(() => {});

function shortcutsSection() {
  const box = el('div', { className: 'st-col' });
  const msg = el('span', { id: 'st-hotkey-msg', className: 'st-fine', role: 'status' });
  const draw = async () => {
    const list = await invoke('get_hotkeys');
    setHotkeyLabels(list);
    refreshQuickTaken();
    box.replaceChildren(
      ...list.map((h) => {
        const b = el('button', { type: 'button', className: 'st-opt st-key', id: 'st-hk-' + h.name, textContent: h.keys, title: h.ok ? '' : 'Another program already uses this', ariaLabel: `${HOTKEY_NAMES[h.name][0]}: ${h.keys}. Press to change.` });
        if (!h.ok) b.classList.add('warn');
        b.onclick = () => capture(h.name, b);
        return stRow(HOTKEY_NAMES[h.name][0], b, ...(h.ok ? [] : [el('span', { className: 'st-fine' }, 'Taken by another program')]));
      }),
      el('div', { className: 'st-line' }, el('button', { id: 'st-hk-reset', type: 'button', className: 'linkish', textContent: 'Back to the usual keys', onclick: async () => { await invoke('reset_hotkeys'); msg.textContent = 'Reset.'; draw(); } }), msg),
      stFine('Press a button, then the new keys: Ctrl, Alt or Shift with one key. Esc cancels. These work from any app while Vermil is running.'));
  };
  // listen for the next key combination instead of the usual shortcuts
  function capture(name, button) {
    button.textContent = 'Press the new keys…';
    msg.textContent = '';
    const done = () => removeEventListener('keydown', onKey, true);
    const onKey = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.key === 'Escape') { done(); return draw(); }
      const keys = hotkeyFromEvent(e);
      if (!keys) return; // only a modifier so far, or a key that cannot be used
      done();
      try { await invoke('set_hotkey', { name, keys }); msg.textContent = 'Saved.'; } catch (err) { msg.textContent = String(err); }
      draw();
    };
    addEventListener('keydown', onKey, true);
  }
  draw();
  return stSection('Shortcuts', box);
}

// ── Data: backup, sync, where it lives, deleting a module's data ──
const fileSize = (n) => (n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB');
function dataSection() {
  const info = el('p', { id: 'st-data-info', className: 'st-fine' });
  invoke('data_info').then((d) => { info.textContent = `Your data is one file, ${fileSize(d.bytes)}, in ${d.dir}`; });
  const open = el('button', { id: 'st-open-data', type: 'button', className: 'linkish', textContent: 'Open the data folder', onclick: () => invoke('open_data_folder').catch((e) => tell('Could not open it: ' + e)) });
  // a module's own data: switch it off or delete it (Tasks and Notes are core data and have their own screens)
  const own = MODULES.filter((m) => moduleData[m.id] != null && m.id !== '_on' && JSON.stringify(moduleData[m.id]) !== '{}' && JSON.stringify(moduleData[m.id]) !== '[]');
  const rows = own.map((m) => {
    const del = el('button', { type: 'button', className: 'linkish st-del', id: 'st-del-' + m.id, textContent: 'Delete', ariaLabel: `Delete the data of ${m.name}` });
    del.onclick = async () => {
      if (!(await ask(`Delete everything ${m.name} has saved (${fileSize(JSON.stringify(moduleData[m.id]).length)})? This cannot be undone. Your tasks and notes are not touched.`, 'Delete'))) return;
      const wasOn = started.has(m.id);
      if (wasOn) await stopModule(m);
      await saveModule(m.id, null);
      if (wasOn) await startModule(m);
      renderSettings();
    };
    return el('li', {}, el('span', {}, m.name), el('small', {}, fileSize(JSON.stringify(moduleData[m.id]).length)), del);
  });
  return stSection('Data',
    el('div', { className: 'st-block' }, el('h4', { className: 'st-sub' }, 'Backup'), el('div', { id: 'bk-body' })),
    el('div', { className: 'st-block' }, el('h4', { className: 'st-sub' }, 'Sync between computers'), el('div', { id: 'sy-body' })),
    info, el('div', { className: 'st-line' }, open),
    ...(rows.length ? [el('h4', { className: 'st-sub' }, 'What each module has saved'), el('ul', { id: 'st-own', className: 'st-own' }, ...rows)] : []));
}

// ── About: the version and updates ──
function aboutSection() {
  const msg = el('span', { id: 'st-update-msg', className: 'st-fine', role: 'status' });
  const check = el('button', { id: 'st-update-check', type: 'button', className: 'linkish', textContent: 'Check for updates now' });
  check.onclick = () => {
    msg.textContent = 'Checking…';
    invoke('check_update').then((v) => { msg.textContent = v ? `Version ${v} is ready: use the button in the top bar.` : 'You have the latest version.'; if (v) checkUpdate(); }, () => { msg.textContent = 'Could not reach the update server. Are you online?'; });
  };
  const auto = stCheck('st-update-auto', 'Look for updates by itself', readPrefs().updateCheck, (e) => setPrefs({ updateCheck: e.target.checked }));
  return stSection('About', el('p', { className: 'st-fine', id: 'st-version' }, `Vermil ${$('version').textContent}. Updates come from the project’s releases and are never forced.`), el('div', { className: 'st-line' }, auto), el('div', { className: 'st-line' }, check, msg));
}

const SETTINGS_SECTIONS = [appearanceSection, generalSection, notificationsSection, shortcutsSection, dataSection, aboutSection];

// one section is shown at a time, chosen from a row of tabs; a module's section (the Assistant's) gets its own tab
let settingsTab = 'Appearance';
function renderSettings() {
  const scroll = $('settings-view').scrollTop;
  const sections = [...SETTINGS_SECTIONS, ...settingsHooks].flatMap((f) => { try { return [f()]; } catch (e) { console.error('settings section', e); return []; } });
  const names = sections.map((s) => s.ariaLabel);
  if (!names.includes(settingsTab)) settingsTab = names[0];
  const pick = (name) => { settingsTab = name; renderSettings(); $('st-tab-' + name)?.focus(); };
  const tabs = names.map((name, i) => {
    const on = name === settingsTab;
    const b = el('button', { id: 'st-tab-' + name, type: 'button', role: 'tab', className: 'st-tab', textContent: name, ariaSelected: String(on), tabIndex: on ? 0 : -1 });
    b.setAttribute('aria-controls', 'st-panel-' + name);
    b.onclick = () => pick(name);
    b.onkeydown = (e) => {
      const to = { ArrowRight: (i + 1) % names.length, ArrowLeft: (i + names.length - 1) % names.length, Home: 0, End: names.length - 1 }[e.key];
      if (to !== undefined) { e.preventDefault(); e.stopPropagation(); pick(names[to]); }
    };
    return b;
  });
  sections.forEach((s) => { s.hidden = s.ariaLabel !== settingsTab; s.id = 'st-panel-' + s.ariaLabel; s.setAttribute('role', 'tabpanel'); });
  $('settings-view').replaceChildren(el('div', { className: 'st-wrap' },
    el('header', { className: 'st-head' }, el('h2', {}, 'Settings'), el('button', { type: 'button', className: 'linkish', id: 'st-back', textContent: 'Back', onclick: () => setView(lastView) })),
    el('div', { className: 'st-nav', role: 'tablist', ariaLabel: 'Settings sections' }, ...tabs),
    ...sections));
  if ($('bk-body')) { paintBackup(); paintSync(); } // the sections that need the page to exist first
  $('settings-view').scrollTop = scroll;
}

$('settings-btn').onclick = () => setView(view === 'settings' ? lastView : 'settings');
