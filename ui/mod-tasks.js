// Tasks module: the list with its tabs (To do, Today, Week, History), the add and edit form, the headline and stats,
// the scrolling banner, row selection and the Tasks keys. Loaded only while Tasks is switched on.
// Task data and saving (todos, commit) live in the core so every module can use them.
const TABS = ['pending', 'today', 'week', 'history'];
let tab = 'pending';
let editingId = null;
let marqueeKey;
const openNotes = new Set(); // ids whose notes are expanded, so a re-render does not collapse them
let streaks = new Map(); // open task id -> current streak, refreshed on every render
let selectedId = null; // the row picked with the arrow keys
let selectedIndex = -1; // its position, so a deleted row hands the pick to its neighbour
let statsAsTable = false; // History shows its chart as a table when true
const tasksGroup = { module: 'tasks', title: 'Tasks', items: [
    [['↑', '↓'], 'Select a task'], ['Space', 'Mark done (in History: restore)'], ['E', 'Edit'], ['P', 'Pin or unpin'],
    ['O', "Open the task's note"], ['Delete', 'Delete'], ['N', 'New task'], ['1–4', 'To do, Today, Week, History'],
    ['Ctrl+F', 'Search'], ['Ctrl+Z', 'Undo'], ['T', 'Theme: auto, light, dark'], ['Esc', 'Leave a field, cancel editing'],
  ] };

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
  $('remind').value = prefsNow.defaultRemind;
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

function renderTasks(enter = false) {
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

const refreshTick = () => { if (tab !== 'history') renderTasks(); if (view !== 'tasks' && view !== 'home') registry[view]?.refresh?.(); };
let refreshTimer;
// // refresh overdue colouring and bring back repeating tasks after midnight

// bring a task into view: its tab, selected
function revealTask(id) {
  const t = todos.find((x) => x.id === id);
  if (!t) return;
  tab = t.done ? 'history' : 'pending';
  $('search').value = '';
  renderTasks(true);
  selectedId = id;
  applySelection();
  document.getElementById('r-' + id)?.scrollIntoView({ block: 'nearest' });
}

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

function taskKeys(e) {
  const t = e.target.matches ? e.target : document.body;
  const field = isField(t);
  const mod = e.ctrlKey || e.metaKey;

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
}

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


// numbers Goals can watch: tasks finished this week (last 7 days) and this calendar month
const doneSince = (day) => todos.filter((t) => t.done && t.completedAt && localDay(new Date(t.completedAt)) >= day).length;
const tasksMetrics = () => [
  { id: 'tasks.week', label: 'Tasks done in the last 7 days', unit: 'tasks', get: () => doneSince(shiftDay(localDay(new Date()), -6)) },
  { id: 'tasks.month', label: 'Tasks done this month', unit: 'tasks', get: () => doneSince(localDay(new Date()).slice(0, 8) + '01') },
];

defineModule('tasks', {
  daily() { // for Insights
    const byDay = {};
    for (const t of todos) if (t.done && t.completedAt) { const d = localDay(new Date(t.completedAt)); byDay[d] = (byDay[d] || 0) + 1; }
    return [{ id: 'tasks.done', label: 'tasks done', byDay, zero: true }];
  },
  weekly(since, until) {
    const inRange = (t) => t.done && t.completedAt && localDay(new Date(t.completedAt)) >= since && localDay(new Date(t.completedAt)) <= until;
    const done = todos.filter(inRange);
    const overdue = todos.filter((t) => !t.done && !isLater(t) && t.due && new Date(t.due) < new Date()).length;
    const made = todos.filter((t) => t.createdAt && localDay(new Date(t.createdAt)) >= since && localDay(new Date(t.createdAt)) <= until).length;
    return { title: 'Tasks', lines: [`${done.length} done, ${made} added`, ...(overdue ? [`${overdue} overdue right now`] : ['Nothing overdue']), ...(done.length ? ['Finished: ' + done.slice(0, 5).map((t) => t.title).join(', ') + (done.length > 5 ? ` and ${done.length - 5} more` : '')] : [])] };
  },
  summary() {
    const now = new Date();
    const today = localDay(now);
    const open = todos.filter((t) => !t.done && !isLater(t));
    const overdue = open.filter((t) => t.due && new Date(t.due) < now).length;
    const dueToday = open.filter((t) => t.due && t.due.slice(0, 10) === today && new Date(t.due) >= now).length;
    return { label: 'Tasks', value: String(open.length), unit: open.length === 1 ? 'open task' : 'open tasks', warn: overdue > 0,
      sub: [dueToday && `${dueToday} due today`, overdue && `${overdue} overdue`].filter(Boolean).join(' · ') || 'Nothing due today' };
  },
  start() {
    $('remind').value = prefsNow.defaultRemind;
    shortcutGroups.push(tasksGroup);
    metricHooks.push(tasksMetrics);
    document.querySelector('.marquee').hidden = false;
    refreshTimer = setInterval(refreshTick, 60000); // overdue colouring, and repeating tasks coming back after their wait
    renderTasks(true);
    fitSide();
  },
  stop() {
    clearInterval(refreshTimer);
    shortcutGroups.splice(shortcutGroups.indexOf(tasksGroup), 1);
    metricHooks.splice(metricHooks.indexOf(tasksMetrics), 1);
    document.querySelector('.marquee').hidden = true;
  },
  show() { renderTasks(); fitSide(); }, // a note may have changed while the list was hidden
  render: renderTasks,
  keys: taskKeys,
  reveal: revealTask,
});
