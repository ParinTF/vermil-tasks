const $ = (id) => document.getElementById(id);
// The window can start a moment before the backend has loaded its data ("state not managed"): ask again for a few seconds.
const invoke = async (cmd, args) => {
  for (let i = 0; ; i++) {
    try {
      return await window.__TAURI__.core.invoke(cmd, args);
    } catch (e) {
      if (i >= 50 || !String(e).includes('not managed')) throw e;
      await new Promise((r) => setTimeout(r, 100));
    }
  }
};
let todos = [];
const undoStack = []; // earlier states of `todos`, newest last
let notes = []; // notes, kept apart from tasks; a task points at one with its noteId
const noteOf = (t) => (t.noteId ? notes.find((n) => n.id === t.noteId) : undefined);

const fmt = (d, opts) => new Date(d).toLocaleString('en-GB', prefsNow.h12 ? { ...opts, hour12: true } : opts);
const remindLabel = { 0: 'reminds at due time', 10: 'reminds 10 min before', 60: 'reminds 1 h before', 1440: 'reminds 1 day before' };
const calm = { get matches() { return matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'off'; } }; // Windows asks for less motion, or Settings does
const isOverdue = (t) => t.due && new Date(t.due) < new Date();
// a repeating task that was finished waits here until its hideUntil day arrives
const isLater = (t) => t.hideUntil && t.hideUntil > localDay(new Date());

// In-app replacement for confirm(): resolves true when the action button is pressed, false on Cancel or Esc.
function ask(text, ok = 'OK', cancel = 'Cancel') {
  const dlg = $('dlg');
  if (dlg.open) dlg.close();
  $('dlg-text').textContent = text;
  $('dlg-ok').textContent = ok;
  $('dlg-cancel').textContent = cancel;
  $('dlg-cancel').hidden = !cancel;
  dlg.returnValue = '';
  dlg.showModal();
  return new Promise((resolve) => { dlg.onclose = () => resolve(dlg.returnValue === 'ok'); });
}
const tell = (text) => ask(text, 'OK', ''); // replacement for tell()
$('dlg-ok').onclick = () => $('dlg').close('ok');
$('dlg-cancel').onclick = () => $('dlg').close();

function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

// the Tasks module draws the list; without it there is nothing to draw
const render = (enter) => registry.tasks?.render?.(enter);

async function commit(next, { undo = true } = {}) {
  const before = todos;
  try {
    await invoke('save_todos', { todos: next });
  } catch (e) {
    tell('Could not save: ' + e);
    render();
    return false;
  }
  if (undo) {
    undoStack.push(before);
    if (undoStack.length > 20) undoStack.shift();
  }
  for (const t of next) if (t.done && !before.some((b) => b.id === t.id && b.done)) emit('task-done', { title: t.title, key: 'task:' + t.id });
  const apply = () => { todos = next; render(); if (view !== 'tasks' && view !== 'home') registry[view]?.refresh?.(); registry.widget?.publishSoon?.(); };
  // a hidden window never gets the frame the transition waits for, so apply directly there
  if (document.startViewTransition && !document.hidden && !calm.matches) document.startViewTransition(apply); else apply();
  return true;
}

// One thing done on the user's behalf, for Automations and the Assistant. Throws when the module it needs is off.
// a: { type: 'task', title, due } | { type: 'shop', name } | { type: 'expense', amount, cat, note } | { type: 'note', title, body } | { type: 'toast', title } | { type: 'open', view }
async function doAction(a) {
  const need = (id, name) => { if (!started.has(id)) throw new Error(name + ' is off'); };
  if (a.type === 'task') {
    need('tasks', 'Tasks');
    await commit([...todos, { id: crypto.randomUUID(), title: a.title.slice(0, 200), due: a.due || null, remindBefore: a.due ? 0 : null, repeat: null, noteId: null, done: false, createdAt: new Date().toISOString(), completedAt: null }], { undo: false });
  } else if (a.type === 'shop') {
    need('shopping', 'Shopping');
    registry.shopping.add(a.name);
  } else if (a.type === 'expense') {
    need('money', 'Expenses');
    registry.money.addEntry({ day: localDay(new Date()), kind: 'out', amount: a.amount, cat: a.cat || 'Other', note: a.note || '' });
  } else if (a.type === 'note') {
    need('notes', 'Notes');
    await invoke('save_notes', { notes: [{ id: newNoteId(), title: a.title, body: a.body || '', updatedAt: new Date().toISOString() }] });
    await load();
  } else if (a.type === 'toast') {
    await invoke('toast', { title: a.title, text: 'Vermil' });
  } else if (a.type === 'open') {
    need(a.view, 'That tab');
    await setView(a.view);
  } else throw new Error('unknown action');
}

// hooks for optional modules (see modules.js): extra row details, extra row buttons, extra palette commands
const rowInfo = [];
const rowTools = [];
const taskFields = []; // a module that adds a field to the task form pushes { fill(task), read(oldTask) -> fields }
const commandHooks = [];
const metricHooks = []; // () => [{ id, label, unit, get() }]: numbers a module offers to Goals
const calendarHooks = []; // (from, to) => [{ day, title, kind, view }]: dated things a module shows in the Calendar (countdown events, renewals)
const settingsHooks = []; // () => element: a section a module adds to the Settings page
const homeHooks = []; // () => element: a band a module shows on Home between the heading and the Today strip (Levels)
const eventHooks = []; // (type, data) => void: what happened ('task-done', 'bill-paid', 'over-budget'); Automations listens
const emit = (type, data = {}) => { for (const f of [...eventHooks]) try { f(type, data); } catch (e) { console.error('event', type, e); } };

window.__TAURI__.app.getVersion().then((v) => { $('version').textContent = 'v' + v; });

$('export').onclick = () => invoke('export_todos').then(
  (path) => { $('backup-msg').textContent = 'Saved to Downloads'; $('backup-msg').title = path; },
  (e) => tell('Export failed: ' + e));
$('import-btn').onclick = () => $('import').click();
$('import').onchange = async (e) => {
  const file = e.target.files[0];
  e.target.value = ''; // so picking the same file again fires change
  if (!file) return;
  let incoming;
  let incomingNotes = [];
  let incomingModules = {};
  try {
    const data = JSON.parse(await file.text());
    incoming = Array.isArray(data) ? data : data.todos;
    if (!Array.isArray(incoming)) throw new Error('no task list');
    if (Array.isArray(data.notes)) incomingNotes = data.notes;
    if (data.modules && typeof data.modules === 'object') incomingModules = data.modules;
  } catch {
    return tell('That file is not a Vermil backup.');
  }
  // an older backup keeps a task's notes as text on the task: turn that text into notes first
  try {
    const converted = await invoke('convert_legacy_notes', { todos: incoming });
    incoming = converted.todos;
    incomingNotes = [...incomingNotes, ...converted.notes];
  } catch (err) {
    return tell('That backup could not be read: ' + err);
  }
  // merge by id so an import never deletes anything; the backup wins for tasks and notes both sides have
  const ids = new Set(incoming.map((t) => t && t.id));
  const replacing = todos.filter((t) => ids.has(t.id)).length;
  const what = `${incoming.length} tasks` + (incomingNotes.length ? ` and ${incomingNotes.length} notes` : '');
  if (!(await ask(`Import ${what} from this backup?\nNew: ${incoming.length - replacing}\nReplacing tasks you already have: ${replacing}`, 'Import'))) return;
  try {
    if (incomingNotes.length) await invoke('save_notes', { notes: incomingNotes });
    notes = await invoke('get_notes');
    fillNoteLinks();
    for (const [id, value] of Object.entries(incomingModules)) if (!(id in moduleData)) await saveModule(id, value); // a module you already use keeps its own data; the rest come back after a restart
  } catch (err) {
    return tell('Could not save the notes: ' + err);
  }
  if (await commit([...todos.filter((t) => !ids.has(t.id)), ...incoming])) $('backup-msg').textContent = `Imported ${incoming.length} tasks`;
};

// Theme: auto follows Windows, light and dark force one. theme.js applies the stored choice before first paint.
const THEMES = ['', 'light', 'dark'];
let theme = document.documentElement.dataset.theme || '';
const showTheme = () => { $('theme').textContent = '◐ ' + (theme || 'auto'); $('theme').title = 'Theme: ' + (theme || 'auto'); };
showTheme();
$('theme').onclick = () => {
  theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  if (theme) document.documentElement.dataset.theme = theme; else delete document.documentElement.dataset.theme;
  try { localStorage.setItem('theme', theme); } catch {}
  showTheme();
};

const win = window.__TAURI__.window.getCurrentWindow();
$('win-min').onclick = () => win.minimize();
$('win-max').onclick = () => win.toggleMaximize();
$('win-close').onclick = () => { registry.notes?.flush?.(); win.close(); }; // the backend turns this into "hide to tray"

// Offer new versions without interrupting: the button appears only when the release feed has one.
let lastUpdateCheck = 0;
const checkUpdate = () => { lastUpdateCheck = Date.now(); return invoke('check_update').then((v) => {
  if (!v) return;
  $('update').textContent = `Update to v${v} →`;
  $('update').hidden = false;
}).catch(() => {}); }; // offline or feed unreachable: try again later
$('update').onclick = () => {
  const label = $('update').textContent;
  $('update').disabled = true;
  $('update').textContent = 'Updating…';
  invoke('install_update').catch((e) => {
    tell('Update failed: ' + e);
    $('update').disabled = false;
    $('update').textContent = label;
  });
};
if (prefsNow.updateCheck) checkUpdate();
setInterval(() => { if (prefsNow.updateCheck) checkUpdate(); }, 6 * 3600000); // the app can sit in the tray for days
// Closing the window only hides it to the tray, so "reopening" never restarts the app: look again whenever the window comes back
addEventListener('focus', () => { if (prefsNow.updateCheck && Date.now() - lastUpdateCheck > 5 * 60000) checkUpdate(); });

// ── notes view: a list of notes and a plain-text editor that saves itself ──
const VIEWS = ['home']; // kept in step with what is switched on by syncViews() in modules.js
let view = 'home'; // the app always opens on Home
let selectedNoteId = null;
let draftNote = null; // a new note nothing has been typed into yet: not saved, and dropped when left empty
let noteDirty = false; // typed since the last save
let noteTimer;
const newNoteId = () => 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const currentNote = () => notes.find((n) => n.id === selectedNoteId);
const noteLine = (n) => (n.body || '').split('\n').map((l) => l.replace(/^\[[ x]\] /, '').trim()).find(Boolean) || 'No text'; // a checklist line without its box
const visibleNotes = () => {
  const q = $('note-search').value.trim().toLowerCase();
  return [...notes].sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || '')) // newest edit first
    .filter((n) => (n.title + '\n' + n.body).toLowerCase().includes(q));
};

const NEW_NOTE = '__new'; // the form's "New note…" choice
// the form's Linked note menu: None, a new note, then every note, newest edit first
function fillNoteLinks() {
  const menu = $('note-link');
  menu.closest('label').hidden = !started.has('notes'); // without the Notes module there is nothing to link to
  const keep = menu.value;
  menu.replaceChildren(el('option', { value: '' }, 'None'), el('option', { value: NEW_NOTE }, 'New note…'),
    ...[...notes].sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || '')).map((n) => el('option', { value: n.id }, (n.title || 'Untitled').slice(0, 48))));
  menu.value = [...menu.options].some((o) => o.value === keep) ? keep : '';
}

// jump to a task in the Tasks view (from a note, the calendar or the palette)
async function showTask(id) {
  await setView('tasks');
  registry.tasks?.reveal?.(id);
}

async function setView(next) {
  if (next === view || !(VIEWS.includes(next) || next === 'settings')) return; // a view that is not switched on does not exist
  if (next === 'settings') lastView = view;
  else try { localStorage.setItem('last-view', next); } catch {}
  await registry.notes?.leave?.(); // typing in a note is saved before the view changes
  view = next;
  for (const n of document.querySelectorAll('main[id$="-view"]')) n.hidden = n.id !== view + '-view';
  for (const b of document.querySelectorAll('.views button[role=tab]')) b.ariaSelected = String(b.id === 'view-' + view);
  if (typeof layoutTabs === 'function') layoutTabs(); // the tab you are on is always in the bar
  if (view === 'home') return renderHome();
  if (view === 'settings') return renderSettings();
  return registry[view]?.show?.(); // any other view belongs to its module
}

// ── command palette: Ctrl+K searches tasks, notes and days, and runs commands ──
let palItems = [];
let palIndex = 0;

// Converter: typed "5 km to mi" answers at once; a currency pair asks the quote service (checking the connection first).
const rates = new Map(); // "USDTHB" -> { rate, at } | { offline: true, at } | { pending: true }
const copyText = (t) => navigator.clipboard.writeText(t).catch(() => {});
function convertItems(q) {
  const c = parseConvert(q);
  if (!c) return [];
  const shown = (n) => `${convertLabel(c.amount)} ${c.currency ? c.from : c.from.toUpperCase()} = ${convertLabel(n)} ${c.currency ? c.to : c.to.toUpperCase()}`;
  if (!c.currency) {
    const text = shown(convertUnit(c.amount, c.from, c.to));
    return [{ label: text, hint: 'Enter copies', kind: 'Convert', run: () => copyText(text.split(' = ')[1]) }];
  }
  const key = c.from + c.to;
  const hit = rates.get(key);
  if (hit && !hit.pending && Date.now() - hit.at < 10 * 60000) {
    if (hit.offline) return [{ label: 'Currencies need the internet', hint: '', kind: 'Convert', run: () => {} }];
    if (hit.unknown) return [{ label: `No rate for ${c.from} to ${c.to}`, hint: '', kind: 'Convert', run: () => {} }];
    const text = shown(c.amount * hit.rate);
    return [{ label: text, hint: 'Enter copies', kind: 'Convert', run: () => copyText(text.split(' = ')[1]) }];
  }
  if (!hit || !hit.pending) {
    rates.set(key, { pending: true });
    (async () => {
      try {
        if (!(await invoke('net_online'))) throw new Error('offline');
        const r = await invoke('stock_quotes', { symbols: [key + '=X'] });
        rates.set(key, r.quotes[0] ? { rate: r.quotes[0].price, at: Date.now() } : { unknown: true, at: Date.now() });
      } catch { rates.set(key, { offline: true, at: Date.now() - 9 * 60000 }); } // asked again soon
      if ($('pal').open) paletteRender();
    })();
  }
  return [{ label: `Converting ${convertLabel(c.amount)} ${c.from} to ${c.to}…`, hint: '', kind: 'Convert', run: () => {} }];
}

function paletteResults(q) {
  const go = (label, hint, run) => ({ label, hint, kind: 'Command', run });
  const has = (id) => started.has(id);
  const commands = [
    ...VIEWS.map((id, i) => go(id === 'home' ? 'Go to Home' : 'Go to ' + byId(id).view, 'Ctrl+' + i, () => setView(id))),
    ...(has('tasks') ? [go('New task', 'N', async () => { await setView('tasks'); $('title').focus(); })] : []),
    ...(has('notes') ? [go('New note', 'Ctrl+N', async () => { await setView('notes'); registry.notes.newNote(); })] : []),
    ...(has('calendar') ? [go('Calendar: today', 'T', async () => { await setView('calendar'); registry.calendar.today(); })] : []),
    ...commandHooks.flatMap((f) => f()),
    go('Open settings', 'Ctrl+,', () => setView('settings')),
    go('Switch theme', 'T', () => $('theme').click()),
    go('Keyboard shortcuts', '?', openShortcuts),
  ];
  if (!q.trim()) return commands;
  const found = [
    ...commands,
    ...(has('tasks') ? todos : []).map((t) => ({
      label: t.title, kind: 'Task', run: () => showTask(t.id),
      hint: t.done ? 'Done' : t.due ? fmt(t.due, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'No date',
    })),
    ...(has('notes') ? notes : []).map((n) => ({
      label: n.title || 'Untitled', kind: 'Note', text: n.body, hint: noteLine(n),
      run: async () => { await setView('notes'); await registry.notes.open(n.id, 'body'); },
    })),
  ];
  const conv = convertItems(q); // a typed conversion comes first
  const when = parseQuick('go ' + q, new Date()); // a date or time typed as words opens that day
  const day = when.due && when.title === 'go' ? when.due.slice(0, 10) : null;
  return [
    ...conv,
    ...(day && has('calendar') ? [{ label: 'Open calendar on ' + fmt(parseDay(day), { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }), hint: '', kind: 'Day', run: async () => { await setView('calendar'); registry.calendar.goto(day); } }] : []),
    ...rankItems(found, q),
  ];
}

function paletteRender() {
  palItems = paletteResults($('pal-q').value);
  palIndex = Math.min(palIndex, Math.max(0, palItems.length - 1));
  $('pal-list').replaceChildren(...(palItems.length ? palItems.map((it, i) => {
    const row = el('li', { role: 'option', id: 'pal-' + i, ariaSelected: String(i === palIndex) },
      el('span', { className: 'pal-kind' }, it.kind), el('span', { className: 'pal-label' }, it.label), el('span', { className: 'pal-hint' }, it.hint || ''));
    row.onclick = () => runPalette(i);
    return row;
  }) : [el('li', { className: 'pal-none' }, 'Nothing found')]));
  $('pal-q').setAttribute('aria-activedescendant', palItems.length ? 'pal-' + palIndex : '');
  document.getElementById('pal-' + palIndex)?.scrollIntoView({ block: 'nearest' });
}

function runPalette(i) {
  const it = palItems[i];
  if (!it) return;
  $('pal').close();
  it.run();
}

function openPalette() {
  if ($('dlg').open) return;
  $('pal-q').value = '';
  palIndex = 0;
  paletteRender();
  $('pal').showModal();
}

$('pal-q').oninput = () => { palIndex = 0; paletteRender(); };
$('pal-q').onkeydown = (e) => {
  const step = { ArrowDown: 1, ArrowUp: -1 }[e.key];
  if (step) { e.preventDefault(); palIndex = (palIndex + step + palItems.length) % Math.max(1, palItems.length); paletteRender(); }
  else if (e.key === 'Enter') { e.preventDefault(); runPalette(palIndex); }
};
$('pal').onclick = (e) => { if (e.target === $('pal')) $('pal').close(); }; // the backdrop

// ── keyboard ──
// The shortcut list: groups of [keys, what]. keys is one combo ("Ctrl+K") or alternatives (["↑", "↓"]).
// A module adds its own group in start() and takes it out in stop().
const shortcutGroups = [
  { title: 'Everywhere', items: [
    ['Ctrl+0', 'Home: add or remove modules'], ['Ctrl+,', 'Settings: theme, accent colour, font'], ['Ctrl+1–9', 'Go to a tab, in the order shown'],
    ['Ctrl+K', 'Command palette: search, run a command'],
    ['Ctrl+Alt+T', 'Quick add a task, from any app'],
    ['Ctrl+Alt+N', 'Quick note or link, from any app'],
    ['Ctrl+Alt+W', 'Show or hide the Today widget (when its module is on)'],
    ['?', 'This list'],
  ] },
  { title: 'Quick bar', items: [
    ['Ctrl+Alt+J', 'Add a due date (or type it: "tomorrow 9am")'], ['Ctrl+Alt+N', 'Switch between task and note'],
    ['Enter', 'Save'], ['Esc', 'Close'],
  ] },
];

const groupRank = (g) => (g.title === 'Quick bar' ? 99 : ['Everywhere', 'Tasks', 'Notes', 'Calendar'].indexOf(g.title) + 1 || 50); // the core first, modules after, the quick bar last
const keyChips = (combo) => el('span', { className: 'sk' }, ...combo.split('+').flatMap((k, i) => [...(i ? [el('i', { className: 'sk-plus' }, '+')] : []), el('kbd', { className: 'k' }, k)]));

function openShortcuts() {
  if (document.querySelector('dialog[open]')) return;
  let dlg = $('keys');
  if (!dlg) {
    dlg = el('dialog', { id: 'keys', className: 'keys', ariaLabel: 'Keyboard shortcuts' });
    dlg.onclick = (e) => { if (e.target === dlg) dlg.close(); };
    document.body.append(dlg);
  }
  dlg.replaceChildren(
    el('h2', {}, 'Keyboard shortcuts'),
    ...(quickTaken ? [el('div', { className: 'keys-warn' }, `${hotkeysNow.quick} is taken by another app, so quick add from anywhere is off. Use "Quick add" in the tray menu.`)] : []),
    el('div', { className: 'keys-grid' }, ...[...shortcutGroups].filter((g) => !g.module || started.has(g.module)).sort((a, b) => groupRank(a) - groupRank(b)).map((g) => el('section', {}, el('h3', {}, g.title),
      el('ul', {}, ...g.items.map(([keys, what]) => el('li', {},
        el('span', { className: 'sk-keys' }, ...[].concat(keys).flatMap((k, i) => [...(i ? [el('i', { className: 'sk-or' }, 'or')] : []), keyChips(k)])),
        el('span', {}, what))))))),
    el('div', { className: 'actions' }, el('button', { type: 'button', className: 'ghost', onclick: () => dlg.close() }, 'Close')));
  dlg.tabIndex = -1;
  dlg.showModal();
  dlg.focus(); // the focus would otherwise jump to Close at the bottom and scroll there
  dlg.scrollTop = 0;
}
const isField = (n) => n.isContentEditable || n.matches('textarea, select, input:not([type=checkbox]):not([type=button])');
addEventListener('keydown', (e) => {
  if (document.querySelector('dialog[open]')) return; // a dialog handles Enter and Esc itself
  const t = e.target.matches ? e.target : document.body;
  const field = isField(t);
  const mod = e.ctrlKey || e.metaKey;
  if (mod && !e.altKey && e.code === 'KeyK') { e.preventDefault(); openPalette(); return; }
  if (mod && !e.altKey && e.code === 'Comma') { e.preventDefault(); setView(view === 'settings' ? lastView : 'settings'); return; }
  if (view === 'settings' && e.key === 'Escape' && !field) { setView(lastView); return; }
  if (mod && !e.altKey && /^Digit[0-9]$/.test(e.code) && VIEWS[+e.code.slice(5)]) { e.preventDefault(); setView(VIEWS[+e.code.slice(5)]); return; } // Ctrl+0 is Home, then the tabs in order
  if (!mod && !e.altKey && !field && e.code === 'Slash' && e.shiftKey) { e.preventDefault(); openShortcuts(); return; } // ? lists the shortcuts in every view
  return registry[view]?.keys?.(e); // each module handles its own keys
});
$('shortcuts').onclick = openShortcuts;

// If another program owns Ctrl+Alt+T, the Shortcuts button gets an accent dot and its list says so. A message in the
// footer would make it wrap. The backend retries for a few seconds after launch, so ask after that.
let quickTaken = false;
const hotkeysNow = { quick: 'Ctrl+Alt+T', note: 'Ctrl+Alt+N', widget: 'Ctrl+Alt+W' }; // the global shortcuts, which Settings can change
const refreshQuickTaken = () => invoke('quick_shortcut').then((ok) => {
  quickTaken = !ok;
  $('shortcuts').classList.toggle('warn', quickTaken);
  $('shortcuts').title = quickTaken ? `${hotkeysNow.quick} is taken by another app` : '';
});
setTimeout(refreshQuickTaken, 5000);

const load = (enter) => Promise.all([invoke('get_todos'), invoke('get_notes')]).then(([t, n]) => {
  // typing that has not been saved yet, and a new empty note, must survive the reload
  const typing = noteDirty ? currentNote() : null;
  todos = t;
  notes = n.map((x) => (typing && x.id === typing.id ? typing : x));
  if (typing && !notes.includes(typing)) notes.push(typing);
  if (draftNote && !notes.some((x) => x.id === draftNote.id)) notes.push(draftNote);
  render(enter);
  fillNoteLinks();
  if (view !== 'tasks' && view !== 'home') registry[view]?.refresh?.(); // the view on show redraws from the new data
});
// the backend changed tasks (quick add, snooze): older states would overwrite that change, so undo starts over
window.__TAURI__.event.listen('todos-changed', () => { undoStack.length = 0; load().then(() => registry.widget?.publishSoon?.()); });
load(true);
