const $ = (id) => document.getElementById(id);
const { invoke } = window.__TAURI__.core;
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
  const apply = () => { todos = next; render(); if (view === 'calendar') renderCalendar(); };
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
  open.onclick = async () => { await setView('notes'); await openNote(note.id, 'body'); };
  const box = el('details', { className: 'notes', open: openNotes.has(t.id) },
    el('summary', {}, note.title ? `Note: ${note.title}` : 'Note'), el('pre', {}, note.body || 'Nothing written yet.'), ...(note.body ? [copy] : []), open);
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
    el('div', { className: 'tools' }, pin, edit, removeButton(t)));
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
    noteId: created ? created.id : choice || null,
  };
  const next = editingId
    // a new due date cancels a pending snooze, so the reminder follows the new time
    ? todos.map((t) => (t.id === editingId ? { ...t, ...fields, snoozeUntil: t.due === due ? t.snoozeUntil : null } : t))
    : [...todos, { id: crypto.randomUUID(), ...fields, done: false, createdAt: new Date().toISOString(), completedAt: null }];
  resetForm();
  await commit(next);
  if (created) {
    await setView('notes');
    await openNote(created.id, 'body');
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
  try {
    const data = JSON.parse(await file.text());
    incoming = Array.isArray(data) ? data : data.todos;
    if (!Array.isArray(incoming)) throw new Error('no task list');
    if (Array.isArray(data.notes)) incomingNotes = data.notes;
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
$('win-close').onclick = () => { flushNote(); win.close(); }; // the backend turns this into "hide to tray"

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
const VIEWS = ['tasks', 'notes', 'calendar'];
let view = 'tasks';
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

function renderNoteList() {
  const items = visibleNotes();
  const uses = new Map();
  for (const t of todos) if (t.noteId) uses.set(t.noteId, (uses.get(t.noteId) || 0) + 1);
  $('note-items').replaceChildren(...items.map((n) => {
    const count = uses.get(n.id);
    const progress = checkProgress(n.body);
    const row = el('button', { type: 'button', className: 'note' + (n.id === selectedNoteId ? ' sel' : ''), id: 'note-' + n.id },
      el('b', {}, n.title || 'Untitled'), el('span', {}, noteLine(n) + (progress.total ? ` · ${progress.done}/${progress.total} done` : '') + (count ? ` · ${count} ${count === 1 ? 'task' : 'tasks'}` : '')));
    row.onclick = () => openNote(n.id, 'body');
    return el('li', {}, row);
  }));
  $('note-none').hidden = items.length > 0 || !notes.length;
  const cur = currentNote();
  $('note-editor').hidden = !cur;
  $('note-hint').hidden = !!cur;
  $('note-hint').textContent = notes.length ? 'Pick a note.' : 'No notes yet. Press Ctrl+N to write one.';
  if (cur) {
    const when = cur.updatedAt ? fmt(cur.updatedAt, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
    $('note-meta').textContent = (when ? `Edited ${when} · ` : '') + `${cur.body.length} characters`;
  }
  const linked = cur ? todos.filter((t) => t.noteId === cur.id) : [];
  $('note-links').hidden = !linked.length;
  $('note-link-list').replaceChildren(...linked.slice(0, 6).map((t) => {
    const chip = el('button', { type: 'button', className: 'chip' + (t.done ? ' done' : '') }, t.title);
    chip.onclick = () => showTask(t.id);
    return chip;
  }), ...(linked.length > 6 ? [el('span', {}, `+${linked.length - 6} more`)] : []));
  fillNoteLinks();
}

// ── rich text: a note keeps a few formats (bold, four sizes, six colours) and nothing else ──
const SIZE_TAG = { small: 'h4', normal: 'p', large: 'h2', title: 'h1' };
// block elements the editor knows how to keep, and what they become: a div, a list item or a quote is a paragraph
const NOTE_BLOCKS = { P: 'p', DIV: 'p', LI: 'p', PRE: 'p', BLOCKQUOTE: 'p', H1: 'h1', H2: 'h2', H3: 'h2', H4: 'h4', H5: 'h4', H6: 'h4' };
const editor = () => $('note-body');

// Rebuilds untrusted HTML (typed, pasted, loaded from a backup) out of the few elements and attributes the editor
// knows. Anything else is unwrapped and keeps its text; scripts and the like go with their content.
function cleanInto(source, target) {
  for (const node of [...source.childNodes]) {
    if (node.nodeType === Node.TEXT_NODE) { target.append(node.textContent); continue; }
    if (node.nodeType !== Node.ELEMENT_NODE) continue;
    const tag = node.tagName;
    if (['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'TEMPLATE', 'NOSCRIPT'].includes(tag)) continue;
    if (tag === 'BR') { target.append(document.createElement('br')); continue; }
    let out = target;
    const inBlock = /^(P|H1|H2|H4|LI)$/.test(target.tagName);
    if (tag === 'UL' && node.classList.contains('check') && !inBlock && target.tagName !== 'UL') { // a checklist
      out = document.createElement('ul');
      out.className = 'check';
      target.append(out);
    } else if (tag === 'LI' && target.tagName === 'UL' && target.className === 'check') {
      out = document.createElement('li');
      if (node.getAttribute('data-done') === '1') out.setAttribute('data-done', '1');
      target.append(out);
    } else if (NOTE_BLOCKS[tag]) {
      if (inBlock) { // a block inside a block cannot nest: it continues on a new line
        if (target.lastChild) target.append(document.createElement('br'));
      } else {
        out = document.createElement(NOTE_BLOCKS[tag]);
        target.append(out);
      }
    } else if (tag === 'B' || tag === 'STRONG') {
      out = document.createElement('b');
      target.append(out);
    } else if (tag === 'FONT') {
      const key = colorKey(node.getAttribute('color'));
      if (NOTE_COLORS[key] && key !== DEFAULT_COLOR) { // the plain colour is no format at all
        out = document.createElement('font');
        out.setAttribute('color', key);
        target.append(out);
      }
    }
    cleanInto(node, out);
  }
}

// → a detached <div> holding clean blocks only: loose text and inline runs at the top become paragraphs
function cleaned(html) {
  const inert = new DOMParser().parseFromString(html || '', 'text/html'); // nothing in it runs
  const flat = document.createElement('div');
  cleanInto(inert.body, flat);
  const root = document.createElement('div');
  let run = null;
  for (const node of [...flat.childNodes]) {
    if (node.nodeType === Node.ELEMENT_NODE && /^(P|H1|H2|H4|UL)$/.test(node.tagName)) { // UL here is a checklist, the only list cleanInto keeps
      run = null;
      if (node.tagName !== 'UL' || node.firstChild) root.append(node);
      continue;
    }
    if (!run) { run = document.createElement('p'); root.append(run); }
    run.append(node);
  }
  if (!root.firstChild) root.innerHTML = '<p><br></p>';
  return root;
}

// The plain text of the blocks, one line per block: what search, the list and Copy use.
function plainFromContainer(root) {
  const blockText = (block) => {
    let s = '';
    (function walk(n) {
      for (const c of n.childNodes) {
        if (c.nodeType === Node.TEXT_NODE) s += c.textContent;
        else if (c.tagName === 'BR') s += '\n';
        else walk(c);
      }
    })(block);
    return s.replace(/\n$/, ''); // the <br> that keeps an empty paragraph open is not a line
  };
  const lines = [...root.children].flatMap((block) => (block.tagName === 'UL'
    ? [...block.children].map((li) => (li.getAttribute('data-done') === '1' ? '[x] ' : '[ ] ') + blockText(li)) // a checklist item is a line with its box
    : [blockText(block)]));
  return lines.join('\n').replace(/\s+$/, '');
}

function setEditor(n) {
  editor().innerHTML = n ? cleaned(n.html ?? plainToHtml(n.body)).innerHTML : '<p><br></p>';
  editor().dataset.empty = n && n.body.trim() ? '' : '1';
}

function caretToEnd(node) {
  const range = document.createRange();
  range.selectNodeContents(node);
  range.collapse(false);
  const sel = getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function caretElement() {
  const anchor = getSelection().anchorNode;
  const at = anchor && (anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor);
  return at && editor().contains(at) ? at : null;
}

function applyFormat(command, value) {
  if (!currentNote()) return;
  editor().focus();
  if (command === 'formatBlock' && caretElement()?.closest('ul.check')) return; // a list item has no size of its own
  document.execCommand('styleWithCSS', false, false); // <b> and <font color>, not inline styles
  document.execCommand(command, false, value);
  touchNote();
  syncFormat();
}

// the toolbar shows the format at the caret
function syncFormat() {
  if (document.activeElement !== editor()) return;
  const anchor = getSelection().anchorNode;
  const at = anchor && (anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor);
  if (!at || !editor().contains(at)) return;
  $('fmt-bold').setAttribute('aria-pressed', String(!!at.closest('b'))); // not queryCommandState: a heading is bold by its style and would light the button
  $('fmt-check').setAttribute('aria-pressed', String(!!at.closest('ul.check')));
  const block = (at.closest('h1, h2, h4, p') || { localName: 'p' }).localName;
  for (const b of document.querySelectorAll('#note-fmt [data-size]')) b.setAttribute('aria-pressed', String(SIZE_TAG[b.dataset.size] === block));
  const key = colorKey(at.closest('font[color]')?.getAttribute('color')) || DEFAULT_COLOR;
  for (const b of document.querySelectorAll('#note-fmt [data-color]')) b.setAttribute('aria-pressed', String(b.dataset.color === key));
}

$('fmt-colors').replaceChildren(...Object.entries(NOTE_COLORS).map(([hex, name]) => {
  const b = el('button', { type: 'button', className: 'sw', ariaLabel: 'Colour: ' + name, title: name });
  b.dataset.color = hex;
  b.setAttribute('aria-pressed', 'false');
  return b;
}));
$('note-fmt').addEventListener('mousedown', (e) => e.preventDefault()); // clicking a button must not move the selection out of the text
$('note-fmt').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.id === 'fmt-bold') applyFormat('bold');
  else if (b.id === 'fmt-check') toggleChecklist();
  else if (b.dataset.size) applyFormat('formatBlock', `<${SIZE_TAG[b.dataset.size]}>`);
  else if (b.dataset.color) applyFormat('foreColor', b.dataset.color);
});
document.addEventListener('selectionchange', syncFormat);
document.execCommand('defaultParagraphSeparator', false, 'p');
// only plain text goes in from outside, so no foreign markup ever reaches a note
editor().addEventListener('paste', (e) => { e.preventDefault(); document.execCommand('insertText', false, e.clipboardData.getData('text/plain')); });
editor().addEventListener('drop', (e) => { e.preventDefault(); const text = e.dataTransfer.getData('text/plain'); if (text) document.execCommand('insertText', false, text); });

// checklists: a list whose items carry a circle; ticking sets data-done on the item
function toggleChecklist() {
  if (!currentNote()) return;
  editor().focus();
  const sel = getSelection();
  if (!sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  const keep = [sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset];
  const blocks = [...editor().children].filter((b) => range.intersectsNode(b));
  if (!blocks.length) return;
  const convert = (from, tag) => { const to = document.createElement(tag); to.append(...from.childNodes); return to; }; // moves the text, so the caret survives
  if (blocks.every((b) => b.matches('ul.check'))) {
    for (const ul of blocks) ul.replaceWith(...[...ul.children].map((li) => convert(li, 'p')));
  } else {
    let list = null;
    for (const b of blocks) {
      if (b.matches('ul.check')) { list = null; continue; }
      if (!list) { list = document.createElement('ul'); list.className = 'check'; b.before(list); }
      list.append(convert(b, 'li'));
      b.remove();
    }
  }
  if (editor().contains(keep[0]) && editor().contains(keep[2])) sel.setBaseAndExtent(...keep); else caretToEnd(editor());
  touchNote();
  syncFormat();
}
function toggleItem(li) {
  if (li.getAttribute('data-done') === '1') li.removeAttribute('data-done'); else li.setAttribute('data-done', '1');
  touchNote();
}
const inGutter = (e, li) => e.clientX - li.getBoundingClientRect().left < 32; // the column the circle sits in
editor().addEventListener('mousedown', (e) => { const li = e.target.closest?.('ul.check > li'); if (li && inGutter(e, li)) e.preventDefault(); }); // the click ticks, it does not move the caret
editor().addEventListener('click', (e) => { const li = e.target.closest?.('ul.check > li'); if (li && inGutter(e, li)) toggleItem(li); });
editor().addEventListener('input', (e) => { // a new line after a ticked item starts unticked
  if (e.inputType === 'insertParagraph') caretElement()?.closest('ul.check > li')?.removeAttribute('data-done');
});
editor().addEventListener('keydown', (e) => {
  const mod = e.ctrlKey || e.metaKey;
  if (mod && ['KeyI', 'KeyU'].includes(e.code)) e.preventDefault(); // italic and underline are not kept
  if (mod && e.key === 'Enter') { const li = caretElement()?.closest('ul.check > li'); if (li) { e.preventDefault(); toggleItem(li); } }
  if (mod && e.shiftKey && e.code === 'KeyL') { e.preventDefault(); toggleChecklist(); }
});

function showNote(id) {
  selectedNoteId = id;
  const n = currentNote();
  $('note-title').value = n ? n.title : '';
  setEditor(n);
  renderNoteList();
}

async function flushNote() {
  clearTimeout(noteTimer);
  const n = currentNote();
  if (!noteDirty || !n) return;
  noteDirty = false;
  try {
    await invoke('save_notes', { notes: [n] });
    if (draftNote && draftNote.id === n.id) draftNote = null; // now it is a real note
  } catch (e) {
    noteDirty = true;
    tell('Could not save the note: ' + e);
  }
}

// leaving a note saves what was typed, and drops a new note that nobody wrote in
async function leaveNote() {
  await flushNote();
  const n = currentNote();
  if (n && draftNote && n.id === draftNote.id && !n.title.trim() && !n.body.trim()) {
    notes = notes.filter((x) => x.id !== n.id);
    draftNote = null;
    selectedNoteId = null;
  }
}

async function openNote(id, focus) {
  if (id !== selectedNoteId) {
    await leaveNote();
    showNote(id);
  }
  if (focus) {
    $('note-' + focus).focus();
    if (focus === 'body') caretToEnd($('note-body'));
  }
}

async function newNote() {
  await leaveNote();
  draftNote = { id: newNoteId(), title: '', body: '', updatedAt: new Date().toISOString() };
  notes.push(draftNote);
  $('note-search').value = '';
  showNote(draftNote.id);
  $('note-title').focus();
}

async function deleteNote(id = selectedNoteId) {
  const n = notes.find((x) => x.id === id); // the Delete key on a list row means that row, even when it is not the open note
  if (!n) return;
  if (!(await ask(`Delete "${n.title || 'Untitled'}"?\nTasks that link to it keep going without it.`, 'Delete'))) return;
  clearTimeout(noteTimer);
  noteDirty = false;
  const list = visibleNotes();
  const i = list.findIndex((x) => x.id === n.id);
  const next = list[i + 1] || list[i - 1];
  try {
    if (!(draftNote && draftNote.id === n.id)) await invoke('delete_note', { id: n.id });
  } catch (e) {
    return tell('Could not delete the note: ' + e);
  }
  if (draftNote && draftNote.id === n.id) draftNote = null;
  notes = notes.filter((x) => x.id !== n.id);
  if (n.id === selectedNoteId) showNote(next ? next.id : null); else renderNoteList();
}

// every keystroke updates the note in memory and the list; the file is written half a second after typing stops
function touchNote() {
  const n = currentNote();
  if (!n) return;
  const root = cleaned(editor().innerHTML); // what is stored is rebuilt from the known formats, never the raw editor markup
  n.title = $('note-title').value;
  n.html = root.innerHTML;
  n.body = plainFromContainer(root);
  editor().dataset.empty = n.body.trim() ? '' : '1';
  n.updatedAt = new Date().toISOString();
  noteDirty = true;
  renderNoteList();
  clearTimeout(noteTimer);
  noteTimer = setTimeout(flushNote, 500);
}

async function setView(next) {
  if (next === view) return;
  await leaveNote();
  view = next;
  $('tasks-view').hidden = view !== 'tasks';
  $('notes-view').hidden = view !== 'notes';
  $('calendar-view').hidden = view !== 'calendar';
  for (const v of VIEWS) $('view-' + v).ariaSelected = String(view === v);
  if (view === 'tasks') { render(); return fitSide(); } // a note may have changed while the task list was hidden
  if (view === 'calendar') return renderCalendar();
  if (!currentNote() && notes.length) showNote((visibleNotes()[0] || notes[0]).id); else renderNoteList();
}

// keys while the Notes view is showing: the Tasks shortcuts stay out of the way
function notesKeys(e) {
  const t = e.target.matches ? e.target : document.body;
  const ctrl = (e.ctrlKey || e.metaKey) && !e.altKey;
  if (ctrl && e.code === 'KeyN') { e.preventDefault(); newNote(); return; }
  if (ctrl && e.code === 'KeyF') { e.preventDefault(); $('note-search').focus(); $('note-search').select(); return; }
  if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && (t.id === 'note-search' || t.classList.contains('note'))) {
    e.preventDefault();
    const list = visibleNotes();
    const i = list.findIndex((x) => x.id === selectedNoteId);
    const next = list[Math.max(0, Math.min(list.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1)))];
    if (next) openNote(next.id).then(() => { if (t.classList.contains('note')) $('note-' + next.id)?.focus(); });
    return;
  }
  if (e.key === 'Delete' && t.classList.contains('note')) { e.preventDefault(); deleteNote(t.id.slice('note-'.length)); }
}

for (const v of VIEWS) $('view-' + v).onclick = () => setView(v); // every switch button, Calendar included
$('note-new').onclick = newNote;
$('note-delete').onclick = () => deleteNote();
$('note-search').oninput = renderNoteList;
$('note-title').oninput = $('note-body').oninput = touchNote;
addEventListener('blur', flushNote); // the window lost focus: do not leave typing unsaved

// ── calendar view: a month of tasks by due date, and the selected day beside it ──
let calDay = localDay(new Date()); // the selected day
let calMonth = calDay.slice(0, 7); // the month on show, "2026-11"
const taskCount = (n) => `${n} ${n === 1 ? 'task' : 'tasks'}`;

function dayCell(cell, list, cap, today) {
  const date = parseDay(cell.day);
  const lines = list.length > cap ? list.slice(0, Math.max(0, cap - 1)) : list; // the last line becomes "+N more"
  const more = list.length - lines.length;
  const now = new Date();
  const btn = el('button', {
    type: 'button', role: 'gridcell', tabIndex: cell.day === calDay ? 0 : -1,
    className: 'cal-cell' + (cell.inMonth ? '' : ' out') + (cell.day === today ? ' today' : '') + (cell.day === calDay ? ' sel' : ''),
    ariaLabel: `${fmt(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}, ${taskCount(list.length)}`,
  }, el('span', { className: 'cal-d' }, String(date.getDate())),
  ...lines.map((t) => {
    const line = el('span', { className: 'cal-line' + (t.done ? ' done' : new Date(t.due) < now ? ' late' : '') }, `${t.due.slice(11, 16)} ${t.title}`);
    if (!t.done) line.dataset.id = t.id; // an open task can be dragged to another day
    return line;
  }),
  ...(more ? [el('span', { className: 'cal-more' }, `+${more} more`)] : []));
  btn.ariaSelected = String(cell.day === calDay);
  btn.dataset.day = cell.day;
  btn.onclick = () => selectDay(cell.day);
  return btn;
}

function renderDayPanel(list) {
  $('cal-day-title').textContent = fmt(parseDay(calDay), { weekday: 'long', day: 'numeric', month: 'long' });
  $('cal-day-count').textContent = list.length ? taskCount(list.length) : 'Nothing due';
  $('cal-day-list').replaceChildren(...list.map((t) => {
    const box = el('input', { type: 'checkbox', checked: t.done, ariaLabel: (t.done ? 'Mark not done: ' : 'Mark done: ') + t.title });
    box.onchange = () => commit(t.done ? todos.map((x) => (x.id === t.id ? { ...x, done: false, completedAt: null, hideUntil: null } : x)) : complete(t));
    const open = el('button', { type: 'button', className: 'cal-open' + (t.done ? ' done' : '') }, t.title);
    open.onclick = () => showTask(t.id);
    if (!t.done) open.dataset.id = t.id;
    return el('li', {}, box, open, el('time', {}, t.due.slice(11, 16)));
  }));
}

function renderCalendar() {
  const [y, m] = calMonth.split('-').map(Number);
  const grid = $('cal-grid');
  const byDay = groupByDay(todos);
  const today = localDay(new Date());
  const title = fmt(new Date(y, m - 1, 1), { month: 'long', year: 'numeric' });
  $('cal-title').textContent = title;
  grid.ariaLabel = title;
  // how many task lines a cell has room for: its padding and border take 13px, the day number 28px, each line 18px
  const cap = grid.clientHeight > 0 ? Math.max(1, Math.floor((grid.clientHeight / 6 - 41) / 18)) : 3;
  const days = monthGrid(y, m - 1);
  grid.replaceChildren(...Array.from({ length: 6 }, (_, w) =>
    el('div', { className: 'cal-row', role: 'row' }, ...days.slice(w * 7, w * 7 + 7).map((cell) => dayCell(cell, byDay[cell.day] || [], cap, today)))));
  renderDayPanel(byDay[calDay] || []);
}

function selectDay(day, focus) {
  calDay = day;
  calMonth = day.slice(0, 7);
  renderCalendar();
  if (focus) document.querySelector(`#cal-grid [data-day="${day}"]`)?.focus();
}

// moving a task keeps its time of day, and its reminder starts over for the new day
async function moveTask(id, day) {
  const t = todos.find((x) => x.id === id);
  if (!t || !t.due || t.due.slice(0, 10) === day) return;
  calDay = day;
  calMonth = day.slice(0, 7);
  await commit(todos.map((x) => (x.id === id ? { ...x, due: day + x.due.slice(10), snoozeUntil: null } : x)));
}

// drag with pointer events: HTML5 drag and drop is unreliable in the WebView, and this also gives a ghost and an Esc to cancel
let drag = null;
let dragged = false; // swallows the click that ends a drag
const dayUnder = (e) => document.elementFromPoint(e.clientX, e.clientY)?.closest('.cal-cell');
function endDrag() {
  drag?.ghost?.remove();
  document.querySelector('.cal-cell.drop')?.classList.remove('drop');
  document.body.classList.remove('dragging');
  drag = null;
}
$('calendar-view').addEventListener('pointerdown', (e) => {
  const src = e.button === 0 && e.target.closest('.cal-line[data-id], .cal-open[data-id]');
  if (src) drag = { id: src.dataset.id, x: e.clientX, y: e.clientY, text: src.textContent, ghost: null };
});
addEventListener('pointermove', (e) => {
  if (!drag) return;
  if (!drag.ghost) {
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return; // a click is not a drag
    drag.ghost = el('div', { className: 'cal-ghost' }, drag.text);
    document.body.append(drag.ghost);
    document.body.classList.add('dragging');
  }
  drag.ghost.style.transform = `translate(${e.clientX + 12}px, ${e.clientY + 12}px)`;
  const cell = dayUnder(e);
  document.querySelector('.cal-cell.drop')?.classList.remove('drop');
  cell?.classList.add('drop');
});
addEventListener('pointerup', (e) => {
  if (!drag) return;
  const { id, ghost } = drag;
  const cell = ghost ? dayUnder(e) : null;
  endDrag();
  if (!ghost) return;
  dragged = true;
  setTimeout(() => { dragged = false; });
  if (cell) moveTask(id, cell.dataset.day);
});
addEventListener('pointercancel', endDrag);
addEventListener('keydown', (e) => { if (e.key === 'Escape' && drag?.ghost) { e.stopPropagation(); endDrag(); } }, true);
$('calendar-view').addEventListener('click', (e) => { if (dragged) { e.stopPropagation(); e.preventDefault(); } }, true);

function calendarKeys(e) {
  const t = e.target.matches ? e.target : document.body;
  if (e.altKey && !e.ctrlKey && t.dataset?.id && t.classList.contains('cal-open')) { // Alt+arrows: the keyboard way to drag
    const by = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
    if (by) {
      e.preventDefault();
      const due = todos.find((x) => x.id === t.dataset.id)?.due;
      if (due) moveTask(t.dataset.id, shiftDay(due.slice(0, 10), by)).then(() => setTimeout(() => document.querySelector(`#cal-day-list [data-id="${t.dataset.id}"]`)?.focus(), 80)); // after the view transition has swapped the list
      return;
    }
  }
  if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
  if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
  if (isField(t)) return;
  const step = { ArrowLeft: () => shiftDay(calDay, -1), ArrowRight: () => shiftDay(calDay, 1), ArrowUp: () => shiftDay(calDay, -7), ArrowDown: () => shiftDay(calDay, 7), PageUp: () => shiftMonth(calDay, -1), PageDown: () => shiftMonth(calDay, 1) }[e.key];
  if (step) { e.preventDefault(); selectDay(step(), true); return; }
  if (e.code === 'KeyT') selectDay(localDay(new Date()), true);
  else if (e.key === 'Enter' || e.code === 'KeyN') { e.preventDefault(); $('cal-new').focus(); } // Enter would also click the focused day
}

$('cal-week').replaceChildren(...Array.from({ length: 7 }, (_, i) => el('span', {}, fmt(new Date(2024, 0, 1 + i), { weekday: 'short' })))); // 1 Jan 2024 is a Monday
$('cal-prev').onclick = () => selectDay(shiftMonth(calDay, -1));
$('cal-next').onclick = () => selectDay(shiftMonth(calDay, 1));
$('cal-today').onclick = () => selectDay(localDay(new Date()));
$('cal-add').onsubmit = async (e) => {
  e.preventDefault();
  const title = $('cal-new').value.trim();
  if (!title) return;
  const task = { id: crypto.randomUUID(), title, due: `${calDay}T${$('cal-time').value || '09:00'}`, remindBefore: 0, done: false, createdAt: new Date().toISOString(), completedAt: null };
  $('cal-new').value = '';
  await commit([...todos, task]);
  $('cal-new').focus(); // ready for the next one
};
new ResizeObserver(() => { if (view === 'calendar') renderCalendar(); }).observe($('cal-grid')); // more or fewer lines fit now

// ── keyboard ──
const SHORTCUTS = [
  '↑ ↓: select a task',
  'Space: mark done (in History: restore)',
  'E: edit the selected task',
  'P: pin or unpin the selected task',
  "O: open the selected task's note",
  'Delete: delete the selected task',
  'N: new task',
  'T: switch theme (auto, light, dark)',
  'Ctrl+1, 2, 3: Tasks, Notes, Calendar',
  'Ctrl+N (in Notes): new note',
  'In a note: Ctrl+B bold, Ctrl+Shift+L checklist, Ctrl+Enter tick an item',
  'In Calendar: arrows move a day, PageUp and PageDown a month, T today, Enter adds a task',
  'In Calendar: drag a task to another day, or Alt+arrows on it',
  '1 2 3 4: To do, Today, Week, History',
  'Ctrl+Alt+T (from anywhere): quick add',
  'Ctrl+Alt+J (in quick add): due date',
  'Ctrl+F: search',
  'Ctrl+Z: undo',
  'Esc: leave a field, cancel editing',
  '?: show this list',
].join('\n');
const shortcutText = () => (quickTaken ? 'Ctrl+Alt+T is taken by another app, so quick add from anywhere is off. Use "Quick add" in the tray menu.\n\n' : '') + SHORTCUTS;
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
  if ($('dlg').open) return; // the dialog handles Enter and Esc itself
  const t = e.target.matches ? e.target : document.body;
  const field = isField(t);
  const mod = e.ctrlKey || e.metaKey;
  if (mod && !e.altKey && /^Digit[1-3]$/.test(e.code)) { e.preventDefault(); setView(VIEWS[+e.code.slice(5) - 1]); return; }
  if (view !== 'tasks') return view === 'notes' ? notesKeys(e) : calendarKeys(e);

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
  else if (e.code === 'KeyO') press('.act-open');
  else if (/^Digit[1-4]$/.test(e.code)) { e.preventDefault(); $('tab-' + TABS[+e.code.slice(5) - 1]).click(); }
  else if (e.key === 'Delete') press('.act-del');
  else if (e.code === 'KeyT') $('theme').click();
  else if (e.code === 'KeyN') { e.preventDefault(); $('title').focus(); }
  else if (e.code === 'Slash' && e.shiftKey) { e.preventDefault(); tell(shortcutText()); }
});
$('shortcuts').onclick = () => tell(shortcutText());

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
  if (view === 'notes') renderNoteList();
  if (view === 'calendar') renderCalendar();
});
// the backend changed tasks (quick add, snooze): older states would overwrite that change, so undo starts over
window.__TAURI__.event.listen('todos-changed', () => { undoStack.length = 0; load(); });
load(true);
