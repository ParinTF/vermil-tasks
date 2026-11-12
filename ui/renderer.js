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
const TABS = ['pending', 'today', 'week', 'history'];
let tab = 'pending';
let editingId = null;
let marqueeKey;
const openNotes = new Set(); // ids whose notes are expanded, so a re-render does not collapse them
let streaks = new Map(); // open task id -> current streak, refreshed on every render
let selectedId = null; // the row picked with the arrow keys
let selectedIndex = -1; // its position, so a deleted row hands the pick to its neighbour
const undoStack = []; // earlier states of `todos`, newest last
let statsAsTable = false; // History shows its chart as a table when true
let notes = []; // notes, kept apart from tasks; a task points at one with its noteId
const noteOf = (t) => (t.noteId ? notes.find((n) => n.id === t.noteId) : undefined);

const fmt = (d, opts) => new Date(d).toLocaleString('en-GB', opts);
const remindLabel = { 0: 'reminds at due time', 10: 'reminds 10 min before', 60: 'reminds 1 h before', 1440: 'reminds 1 day before' };
const calm = matchMedia('(prefers-reduced-motion: reduce)');
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
  const apply = () => { todos = next; render(); if (view !== 'tasks' && view !== 'home') registry[view]?.refresh?.(); };
  // a hidden window never gets the frame the transition waits for, so apply directly there
  if (document.startViewTransition && !document.hidden) document.startViewTransition(apply); else apply();
  return true;
}

// Marks a task done. A repeating task also leaves a fresh copy for its next day, so each occurrence gets its own history entry.
function complete(t) {
  const next = todos.map((x) => (x.id === t.id ? { ...x, done: true, completedAt: new Date().toISOString() } : x));
  const series = t.series || t.id;
  // a restored history entry shares the series, so only spawn when no open copy exists yet
  const hasOpenCopy = todos.some((x) => x.id !== t.id && !x.done && (x.series || x.id) === series);
  if (t.repeat && !hasOpenCopy) {
    const day = nextOccurrence(t.repeat, t.due, new Date());
    next.push({
      ...t, id: crypto.randomUUID(), series, done: false, completedAt: null,
      createdAt: new Date().toISOString(), hideUntil: day, snoozeUntil: null,
      due: t.due ? day + t.due.slice(10) : null, // same time of day
    });
  }
  return next;
}

function backLabel(day) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return 'Back ' + (day === localDay(tomorrow) ? 'tomorrow' : fmt(parseDay(day), { weekday: 'short', day: 'numeric', month: 'short' }));
}

function seriesStreaks() {
  const days = new Map(); // series -> days it was completed on
  for (const t of todos) {
    if (!t.done || !t.repeat || !t.completedAt) continue;
    const key = t.series || t.id;
    if (!days.has(key)) days.set(key, new Set());
    days.get(key).add(localDay(new Date(t.completedAt)));
  }
  const out = new Map();
  for (const t of todos) {
    if (!t.done && (t.repeat === 'daily' || t.repeat === 'weekdays')) out.set(t.id, streak(t.repeat, days.get(t.series || t.id) || new Set(), new Date()));
  }
  return out;
}

function resetForm() {
  editingId = null;
  $('form').reset();
  $('submit').textContent = 'Add task';
  $('cancel').hidden = true;
}

function notesBlock(t) {
  const note = noteOf(t);
  if (!note) return '';
  const copy = el('button', { type: 'button', textContent: 'Copy' });
  copy.onclick = () => navigator.clipboard.writeText(note.body).then(
    () => { copy.textContent = 'Copied'; setTimeout(() => { copy.textContent = 'Copy'; }, 1500); },
    () => { copy.textContent = 'Copy failed'; });
  const open = el('button', { type: 'button', className: 'act-open', textContent: 'Open' });
  open.onclick = async () => { await setView('notes'); await registry.notes.open(note.id, 'body'); };
  const box = el('details', { className: 'notes', open: openNotes.has(t.id) },
    el('summary', {}, note.title ? `Note: ${note.title}` : 'Note'), el('pre', {}, note.body || 'Nothing written yet.'), ...(note.body ? [copy] : []), ...(started.has('notes') ? [open] : [])); // Open needs the Notes module
  box.ontoggle = () => (box.open ? openNotes.add(t.id) : openNotes.delete(t.id));
  return box;
}

function removeButton(t) {
  const btn = el('button', { type: 'button', className: 'danger act-del', textContent: 'Delete' });
  btn.onclick = async () => {
    if (!(await ask(`Delete "${t.title}" permanently?`, 'Delete'))) return;
    if (editingId === t.id) resetForm();
    commit(todos.filter((x) => x.id !== t.id));
  };
  return btn;
}

// hooks for optional modules (see modules.js): extra row details, extra row buttons, extra palette commands
const rowInfo = [];
const rowTools = [];
const commandHooks = [];

function pendingItem(t) {
  const later = isLater(t);
  const overdue = !later && isOverdue(t);
  const parts = [
    later ? backLabel(t.hideUntil) : '',
    t.due ? (overdue ? 'Overdue ' : 'Due ') + fmt(t.due, { dateStyle: 'medium', timeStyle: 'short' }) : '',
    t.due && t.remindBefore != null ? remindLabel[t.remindBefore] : '',
    t.snoozeUntil > Date.now() ? 'snoozed to ' + fmt(t.snoozeUntil, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '',
    t.repeat || '',
    streaks.get(t.id) > 1 ? streaks.get(t.id) + '-day streak' : '',
    ...rowInfo.map((f) => f(t)),
  ].filter(Boolean);
  const meta = parts.length ? el('div', { className: 'meta' + (overdue ? ' overdue' : '') }, parts.join(' · ')) : '';
  const lead = later
    ? el('span', { className: 'tick', ariaHidden: 'true' }, '↻')
    : el('input', { type: 'checkbox', ariaLabel: 'Mark done: ' + t.title });
  const edit = el('button', { type: 'button', className: 'act-edit', textContent: 'Edit' });
  const pin = el('button', { type: 'button', className: 'act-pin', textContent: t.pinned ? 'Unpin' : 'Pin' });
  pin.onclick = () => commit(todos.map((x) => (x.id === t.id ? { ...x, pinned: !t.pinned } : x)));
  const title = el('span', { className: 'title' }, ...(t.pinned ? [el('i', { className: 'pin-dot', title: 'Pinned' })] : []), t.title);
  const li = el('li', { className: 'item' + (later ? ' later' : ''), id: 'r-' + t.id }, lead,
    el('div', {}, title, meta, notesBlock(t)),
    el('div', { className: 'tools' }, ...rowTools.map((f) => f(t)), pin, edit, removeButton(t)));
  lead.onchange = () => {
    lead.disabled = true;
    li.classList.add('done'); // let the strike-through land before the row leaves
    const done = () => commit(complete(t));
    if (calm.matches) done(); else setTimeout(done, 380);
  };
  edit.onclick = () => {
    editingId = t.id;
    $('title').value = t.title;
    $('due').value = t.due || '';
    $('remind').value = t.remindBefore == null ? '' : String(t.remindBefore);
    $('repeat').value = t.repeat || '';
    $('note-link').value = t.noteId || '';
    $('submit').textContent = 'Save';
    $('cancel').hidden = false;
    $('title').focus();
  };
  return li;
}

function historyItem(t) {
  const restore = el('button', { type: 'button', className: 'act-restore', textContent: 'Restore' });
  restore.onclick = () => commit(todos.map((x) => (x.id === t.id ? { ...x, done: false, completedAt: null, hideUntil: null } : x)));
  return el('li', { className: 'item', id: 'r-' + t.id },
    el('span', { className: 'tick', ariaHidden: 'true' }, '✓'),
    el('div', {}, el('span', { className: 'title' }, t.title),
      el('div', { className: 'meta' }, 'Done at ' + fmt(t.completedAt, { timeStyle: 'short' }) + (t.repeat ? ' · ' + t.repeat : '')), notesBlock(t)),
    el('div', { className: 'tools' }, restore, removeButton(t)));
}

// The History tab opens with a column chart of tasks done per day. One series, so no legend: the title names it.
// Values are on the axis, on today's and the best day's bar, in the tooltip and in the table view.
const STAT_DAYS = 14;

function statsChart(done) {
  const counts = dailyCounts(done.filter((t) => t.completedAt).map((t) => localDay(new Date(t.completedAt))), new Date(), STAT_DAYS);
  const total = counts.reduce((sum, c) => sum + c.count, 0);
  const best = Math.max(...counts.map((c) => c.count));
  const bestAt = counts.findIndex((c) => c.count === best);
  const top = niceMax(best);
  const when = (c) => fmt(parseDay(c.day), { weekday: 'short', day: 'numeric', month: 'short' });
  const tasks = (n) => `${n} ${n === 1 ? 'task' : 'tasks'}`;

  const toggle = el('button', { type: 'button', className: 'linkish', textContent: statsAsTable ? 'Show chart' : 'Show table' });
  toggle.onclick = () => { statsAsTable = !statsAsTable; render(); };
  const box = el('section', { className: 'chart', ariaLabel: 'Tasks done per day' },
    el('div', { className: 'chart-head' },
      el('h3', {}, 'Done per day', el('span', {}, ` · last ${STAT_DAYS} days · ${total} done`)),
      toggle));

  if (statsAsTable) { // the table twin of the chart: every value without hovering
    box.append(el('table', {},
      el('thead', {}, el('tr', {}, el('th', {}, 'Day'), el('th', {}, 'Done'))),
      el('tbody', {}, ...[...counts].reverse().map((c) => el('tr', {}, el('td', {}, when(c)), el('td', {}, String(c.count)))))));
    return box;
  }

  const plot = el('div', { className: 'plot', role: 'group', ariaLabel: `${tasks(total)} done in the last ${STAT_DAYS} days, best day ${best}` });
  for (const at of [0, 0.5, 1]) {
    const line = el('div', { className: 'gridline' }, el('span', {}, String(top * at)));
    line.style.bottom = `${at * 100}%`;
    plot.append(line);
  }
  const tip = el('div', { className: 'tip', hidden: true });
  const showTip = (col, c) => {
    tip.replaceChildren(el('b', {}, String(c.count)), `done · ${when(c)}`);
    tip.hidden = false;
    const at = box.getBoundingClientRect();
    const bar = col.querySelector('.bar').getBoundingClientRect();
    const half = tip.offsetWidth / 2;
    tip.style.left = `${Math.max(half, Math.min(at.width - half, bar.left - at.left + bar.width / 2))}px`; // kept inside the card at both ends
    tip.style.top = `${bar.top - at.top}px`;
  };
  const cols = el('div', { className: 'cols' });
  counts.forEach((c, i) => {
    const bar = el('span', { className: 'bar' + (c.count ? '' : ' zero') });
    bar.style.height = c.count ? `${(c.count / top) * 100}%` : '2px';
    bar.style.setProperty('--i', i);
    const isToday = i === STAT_DAYS - 1;
    const col = el('button', {
      type: 'button', className: 'col' + (isToday ? ' today' : ''), tabIndex: isToday ? 0 : -1, ariaLabel: `${when(c)}: ${tasks(c.count)} done`,
    }, ...(c.count && (isToday || i === bestAt) ? [el('span', { className: 'val' }, String(c.count))] : []), bar,
    el('span', { className: 'x' }, el('b', {}, fmt(parseDay(c.day), { weekday: 'narrow' })), el('small', {}, String(parseDay(c.day).getDate()))));
    col.onpointerenter = col.onfocus = () => showTip(col, c);
    col.onpointerleave = col.onblur = () => { tip.hidden = true; };
    cols.append(col);
  });
  // one tab stop for the whole chart; the arrow keys move along the days
  cols.onkeydown = (e) => {
    const all = [...cols.children];
    const from = all.indexOf(document.activeElement);
    const to = { ArrowLeft: from - 1, ArrowRight: from + 1, Home: 0, End: all.length - 1 }[e.key];
    if (from < 0 || to === undefined || to < 0 || to >= all.length) return;
    e.preventDefault();
    all[from].tabIndex = -1;
    all[to].tabIndex = 0;
    all[to].focus();
  };
  plot.append(cols);
  box.append(plot, tip);
  return box;
}

function renderHero(open, done) {
  const late = open.filter(isOverdue).length;
  const best = Math.max(0, ...streaks.values());
  const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
  $('today').textContent = fmt(new Date(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('h-top').textContent = open.length ? 'Still left' : 'All clear';
  $('count').textContent = String(open.length).padStart(2, '0');
  $('h-unit').textContent = open.length === 1 ? 'task' : 'tasks';
  $('stats').replaceChildren(
    ...(late ? [el('b', { className: 'late' }, `${late} overdue`), ' · '] : []),
    el('b', {}, plural(done.length, 'task')), ' done so far',
    ...(best > 1 ? [' · ', el('b', {}, best + '-day streak')] : []));
}

function renderMarquee(open) { // the banner runs the tasks still to do
  const words = open.length
    ? open.slice(0, 12).map((t) => (t.title.length > 40 ? t.title.slice(0, 40) + '…' : t.title))
    : ['One thing at a time', 'Done beats perfect', 'No rush', "Just don't forget"];
  const key = words.join('|');
  if (key === marqueeKey) return; // rebuilding would restart the animation on every render
  marqueeKey = key;
  const half = () => {
    const box = el('div');
    for (let n = 0; n < 12; n += words.length) for (const w of words) box.append(el('span', {}, w), el('i', {}, '✳'));
    return box;
  };
  const track = $('track');
  track.replaceChildren(half(), half()); // two identical halves make the -50% loop seamless
  track.style.setProperty('--dur', track.firstChild.childElementCount * 2.2 + 's');
}

function render(enter = false) {
  const byDue = (a, b) => (a.due || '9').localeCompare(b.due || '9'); // dated first, soonest on top
  const byPin = (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || byDue(a, b); // pinned first, then soonest due
  const open = todos.filter((t) => !t.done && !isLater(t)).sort(byPin);
  const later = todos.filter((t) => !t.done && isLater(t)).sort(byDue);
  // imported data may lack completedAt
  const done = todos.filter((t) => t.done).sort((a, b) => (b.completedAt || '').localeCompare(a.completedAt || ''));
  streaks = seriesStreaks();
  renderHero(open, done);
  fitSide(); // the headline text may have changed
  renderMarquee(open);

  const now = new Date();
  for (const name of TABS) $('tab-' + name).ariaSelected = String(tab === name);
  $('n-pending').textContent = open.length;
  $('n-today').textContent = open.filter((t) => inView('today', t.due, now)).length;
  $('n-week').textContent = open.filter((t) => inView('week', t.due, now)).length;
  $('n-history').textContent = done.length;

  const list = $('list');
  if (enter) { selectedId = null; selectedIndex = -1; } // a new tab starts without a pick
  list.classList.toggle('enter', enter);
  // rebuilding the rows resets the list's own scroll position: put it back unless the tab just changed
  const scrolled = list.scrollTop;
  if (!enter) queueMicrotask(() => { list.scrollTop = scrolled; });
  list.replaceChildren();
  const empty = (text) => list.append(el('div', { className: 'empty' }, text));

  const q = $('search').value.trim().toLowerCase();
  const match = (t) => { const note = noteOf(t); return (t.title + '\n' + (note ? note.title + '\n' + note.body : '')).toLowerCase().includes(q); };
  if (tab !== 'history') {
    const shown = (tab === 'pending' ? open : open.filter((t) => inView(tab, t.due, now))).filter(match);
    const shownLater = tab === 'pending' ? later.filter(match) : []; // waiting copies of finished repeating tasks live only in To do
    const none = { pending: 'Nothing left. Take a break.', today: 'Nothing due today.', week: 'Nothing due this week.' }[tab];
    if (!shown.length && !(q && shownLater.length)) empty(q ? 'No matches' : none);
    if (shown.length + shownLater.length) list.append(el('ul', {}, ...[...shown, ...shownLater].map(pendingItem)));
  } else {
    const items = done.filter(match);
    if (!items.length) { empty(q ? 'No matches' : 'No history yet'); return applySelection(); }
    if (!q) list.append(statsChart(done)); // hidden while searching, the results are what matters then
    let day, ul;
    for (const t of items) {
      const d = fmt(t.completedAt, { dateStyle: 'full' });
      if (d !== day) {
        day = d;
        ul = el('ul');
        list.append(el('h2', {}, d), ul);
      }
      ul.append(historyItem(t));
    }
  }

  // shortcut: only the first 40 rows get transition names, a snapshot per row gets slow on long histories
  list.querySelectorAll('.item, h2').forEach((node, i) => {
    node.style.setProperty('--i', Math.min(i, 12));
    if (i < 40 && node.id) node.style.viewTransitionName = node.id; // stable per task, so rows slide rather than cross-fade
  });
  applySelection();
}

$('form').onsubmit = async (e) => {
  e.preventDefault();
  const title = $('title').value.trim();
  if (!title) return;
  const choice = $('note-link').value;
  let created = null;
  if (choice === NEW_NOTE) { // "New note…": a note named like the task, written in the Notes page right after
    created = { id: newNoteId(), title, body: '', updatedAt: new Date().toISOString() };
    try {
      await invoke('save_notes', { notes: [created] });
    } catch (err) {
      return tell('Could not create the note: ' + err);
    }
    notes.push(created);
    fillNoteLinks();
  }
  // due stays in datetime-local form ("2026-11-12T09:00"): Date parses it as local time and it sorts as text
  const due = $('due').value || null;
  const fields = {
    title, due,
    remindBefore: due && $('remind').value !== '' ? Number($('remind').value) : null,
    repeat: $('repeat').value || null,
    noteId: !started.has('notes') ? (todos.find((t) => t.id === editingId)?.noteId ?? null) : created ? created.id : choice || null, // without Notes the menu is hidden and the link stays as it was
  };
  const next = editingId
    // a new due date cancels a pending snooze, so the reminder follows the new time
    ? todos.map((t) => (t.id === editingId ? { ...t, ...fields, snoozeUntil: t.due === due ? t.snoozeUntil : null } : t))
    : [...todos, { id: crypto.randomUUID(), ...fields, done: false, createdAt: new Date().toISOString(), completedAt: null }];
  resetForm();
  await commit(next);
  if (created) {
    await setView('notes');
    await registry.notes.open(created.id, 'body');
  }
};
$('cancel').onclick = resetForm;
for (const name of TABS) $('tab-' + name).onclick = () => { tab = name; render(true); };
$('search').oninput = () => render();

setInterval(() => { if (tab !== 'history') render(); if (view === 'calendar') renderCalendar(); }, 60000); // refresh overdue colouring and bring back repeating tasks after midnight

// ready to type on launch without the autofocus scroll jumping past the hero
$('title').focus({ preventScroll: true });
window.__TAURI__.app.getVersion().then((v) => { $('version').textContent = 'v' + v; });

invoke('get_autostart').then((on) => { $('autostart').checked = on; });
$('autostart').onchange = (e) => invoke('set_autostart', { on: e.target.checked }).catch((err) => {
  e.target.checked = !e.target.checked;
  tell('Could not change the startup setting: ' + err);
});

// Morning summary: one toast a day at this time (empty = off). Saved a second after typing stops, so
// editing the digits does not re-trigger it on every keystroke.
invoke('get_summary_time').then((t) => {
  $('summary-on').checked = t !== '';
  $('summary-time').value = t || '09:00';
  $('summary-time').disabled = t === '';
});
let summaryTimer;
const saveSummary = () => {
  clearTimeout(summaryTimer);
  const on = $('summary-on').checked && $('summary-time').value;
  invoke('set_summary_time', { time: on ? $('summary-time').value : '' }).catch((e) => tell('Could not save the summary time: ' + e));
};
$('summary-on').onchange = () => { $('summary-time').disabled = !$('summary-on').checked; saveSummary(); };
$('summary-time').oninput = () => { clearTimeout(summaryTimer); summaryTimer = setTimeout(saveSummary, 1000); };

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
    return tell('That file is not a Vermil Tasks backup.');
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
checkUpdate();
setInterval(checkUpdate, 6 * 3600000); // the app can sit in the tray for days
// Closing the window only hides it to the tray, so "reopening" never restarts the app: look again whenever the window comes back
addEventListener('focus', () => { if (Date.now() - lastUpdateCheck > 5 * 60000) checkUpdate(); });

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

// jump from a note to a task that links to it
async function showTask(id) {
  await setView('tasks');
  const t = todos.find((x) => x.id === id);
  if (!t) return;
  tab = t.done ? 'history' : 'pending';
  $('search').value = '';
  render(true);
  selectedId = id;
  applySelection();
  document.getElementById('r-' + id)?.scrollIntoView({ block: 'nearest' });
}

async function setView(next) {
  if (next === view || !VIEWS.includes(next)) return; // a view that is not switched on does not exist
  await registry.notes?.leave?.(); // typing in a note is saved before the view changes
  view = next;
  for (const n of document.querySelectorAll('main[id$="-view"]')) n.hidden = n.id !== view + '-view';
  for (const b of document.querySelectorAll('.views button')) b.ariaSelected = String(b.id === 'view-' + view);
  if (view === 'home') return renderHome();
  if (view === 'tasks') { render(); return fitSide(); } // a note may have changed while the task list was hidden
  return registry[view]?.show?.(); // any other view belongs to its module
}

// ── command palette: Ctrl+K searches tasks, notes and days, and runs commands ──
let palItems = [];
let palIndex = 0;

function paletteResults(q) {
  const go = (label, hint, run) => ({ label, hint, kind: 'Command', run });
  const has = (id) => started.has(id);
  const commands = [
    ...VIEWS.map((id, i) => go(id === 'home' ? 'Go to Home' : 'Go to ' + byId(id).view, 'Ctrl+' + i, () => setView(id))),
    ...(has('tasks') ? [go('New task', 'N', async () => { await setView('tasks'); $('title').focus(); })] : []),
    ...(has('notes') ? [go('New note', 'Ctrl+N', async () => { await setView('notes'); registry.notes.newNote(); })] : []),
    ...(has('calendar') ? [go('Calendar: today', 'T', async () => { await setView('calendar'); registry.calendar.today(); })] : []),
    ...commandHooks.flatMap((f) => f()),
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
  const when = parseQuick('go ' + q, new Date()); // a date or time typed as words opens that day
  const day = when.due && when.title === 'go' ? when.due.slice(0, 10) : null;
  return [
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
    [['Ctrl+0', 'Ctrl+,'], 'Home: add or remove modules'], ['Ctrl+1–9', 'Go to a tab, in the order shown'],
    ['Ctrl+K', 'Command palette: search, run a command'],
    ['Ctrl+Alt+T', 'Quick add a task, from any app'],
    ['Ctrl+Alt+N', 'Quick note or link, from any app'],
    ['?', 'This list'],
  ] },
  { module: 'tasks', title: 'Tasks', items: [
    [['↑', '↓'], 'Select a task'], ['Space', 'Mark done (in History: restore)'], ['E', 'Edit'], ['P', 'Pin or unpin'],
    ['O', "Open the task's note"], ['Delete', 'Delete'], ['N', 'New task'], ['1–4', 'To do, Today, Week, History'],
    ['Ctrl+F', 'Search'], ['Ctrl+Z', 'Undo'], ['T', 'Theme: auto, light, dark'], ['Esc', 'Leave a field, cancel editing'],
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
    ...(quickTaken ? [el('div', { className: 'keys-warn' }, 'Ctrl+Alt+T is taken by another app, so quick add from anywhere is off. Use "Quick add" in the tray menu.')] : []),
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
const rowEls = () => [...$('list').querySelectorAll('.item')];

function select(row, scroll) {
  rowEls().forEach((n) => n.classList.remove('sel'));
  row.classList.add('sel');
  selectedId = row.id.slice(2);
  selectedIndex = rowEls().indexOf(row);
  if (scroll) row.scrollIntoView({ block: 'nearest' });
}
// runs after every render: keep the pick on the same task, or hand it to the row that took its place
function applySelection() {
  const rows = rowEls();
  if (selectedId === null || !rows.length) { selectedId = null; selectedIndex = -1; return; }
  select(rows.find((n) => n.id === 'r-' + selectedId) || rows[Math.min(selectedIndex, rows.length - 1)], false);
}
function moveSelection(step) {
  const rows = rowEls();
  if (!rows.length) return;
  const from = selectedIndex < 0 ? (step > 0 ? -1 : rows.length) : selectedIndex;
  select(rows[Math.max(0, Math.min(rows.length - 1, from + step))], true);
}
async function undo() {
  const before = undoStack.pop();
  if (before && !(await commit(before, { undo: false }))) undoStack.push(before);
}

addEventListener('keydown', (e) => {
  if (document.querySelector('dialog[open]')) return; // a dialog handles Enter and Esc itself
  const t = e.target.matches ? e.target : document.body;
  const field = isField(t);
  const mod = e.ctrlKey || e.metaKey;
  if (mod && !e.altKey && e.code === 'KeyK') { e.preventDefault(); openPalette(); return; }
  if (mod && !e.altKey && e.code === 'Comma') { e.preventDefault(); setView('home'); return; }
  if (mod && !e.altKey && /^Digit[0-9]$/.test(e.code) && VIEWS[+e.code.slice(5)]) { e.preventDefault(); setView(VIEWS[+e.code.slice(5)]); return; } // Ctrl+0 is Home, then the tabs in order
  if (!mod && !e.altKey && !field && e.code === 'Slash' && e.shiftKey) { e.preventDefault(); openShortcuts(); return; } // ? lists the shortcuts in every view
  if (view !== 'tasks') return registry[view]?.keys?.(e);

  if (e.key === 'Escape') {
    if (t.id === 'search' && t.value) { t.value = ''; render(); }
    if (field) t.blur();
    if (editingId) resetForm();
    return;
  }
  // e.code is the physical key, so every shortcut also works with a Thai layout active
  if (mod && !e.altKey && e.code === 'KeyF') { e.preventDefault(); $('search').focus(); $('search').select(); return; }
  if (mod && !e.altKey && e.code === 'KeyZ' && !field) { e.preventDefault(); undo(); return; } // in a field Ctrl+Z undoes typing
  if (mod || e.altKey) return;

  // arrows also leave an empty title or the search box, so the list is one key away from where you start typing
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && (!field || t.id === 'search' || (t.id === 'title' && !t.value))) {
    e.preventDefault();
    if (field) t.blur();
    moveSelection(e.key === 'ArrowDown' ? 1 : -1);
    return;
  }
  if (field) return;
  const row = $('list').querySelector('.item.sel');
  const press = (selector) => { if (row) { e.preventDefault(); row.querySelector(selector)?.click(); } };
  if (e.code === 'Space' && !t.matches('button, summary, input, a')) press('input[type=checkbox], .act-restore');
  else if (e.code === 'KeyE') press('.act-edit');
  else if (e.code === 'KeyP') press('.act-pin');
  else if (e.code === 'KeyF') press('.act-focus'); // only there while the focus timer module is on
  else if (e.code === 'KeyO') press('.act-open');
  else if (/^Digit[1-4]$/.test(e.code)) { e.preventDefault(); $('tab-' + TABS[+e.code.slice(5) - 1]).click(); }
  else if (e.key === 'Delete') press('.act-del');
  else if (e.code === 'KeyT') $('theme').click();
  else if (e.code === 'KeyN') { e.preventDefault(); $('title').focus(); }
});
$('shortcuts').onclick = openShortcuts;

// If another program owns Ctrl+Alt+T, the Shortcuts button gets an accent dot and its list says so. A message in the
// footer would make it wrap. The backend retries for a few seconds after launch, so ask after that.
let quickTaken = false;
setTimeout(() => invoke('quick_shortcut').then((ok) => {
  quickTaken = !ok;
  $('shortcuts').classList.toggle('warn', quickTaken);
  $('shortcuts').title = quickTaken ? 'Ctrl+Alt+T is taken by another app' : '';
}), 5000);

// The left column (headline and form) must fit the window without scrolling, at any window height. Sizes in vh
// cannot promise that, because the inputs and buttons do not scale with the window. So shrink the headline and the
// spacing (--fit) until it fits. Below 0.55 the text would turn small, so the column scrolls instead.
const fitSide = () => {
  const side = document.querySelector('.side');
  const root = document.documentElement.style;
  const fits = () => side.scrollHeight <= side.clientHeight; // not even a 1px scrollbar
  root.setProperty('--fit', 1);
  if (!matchMedia('(min-width: 860px)').matches || fits()) return; // one scrolling column below 860px
  let lo = 0.55;
  let hi = 1;
  for (let i = 0; i < 7; i++) {
    const mid = (lo + hi) / 2;
    root.setProperty('--fit', mid);
    if (fits()) lo = mid; else hi = mid;
  }
  root.setProperty('--fit', lo);
};
new ResizeObserver(fitSide).observe(document.querySelector('.side')); // the window or the footer changed size
addEventListener('resize', fitSide);

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
window.__TAURI__.event.listen('todos-changed', () => { undoStack.length = 0; load(); });
load(true);
