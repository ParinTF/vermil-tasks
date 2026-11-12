const $ = (id) => document.getElementById(id);
const { invoke } = window.__TAURI__.core;
let todos = [];
let tab = 'pending';
let editingId = null;
let marqueeKey;
const openNotes = new Set(); // ids whose notes are expanded, so a re-render does not collapse them
let streaks = new Map(); // open task id -> current streak, refreshed on every render
let selectedId = null; // the row picked with the arrow keys
let selectedIndex = -1; // its position, so a deleted row hands the pick to its neighbour
const undoStack = []; // earlier states of `todos`, newest last

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
  const apply = () => { todos = next; render(); };
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
  if (!t.notes) return '';
  const copy = el('button', { type: 'button', textContent: 'Copy' });
  copy.onclick = () => navigator.clipboard.writeText(t.notes).then(
    () => { copy.textContent = 'Copied'; setTimeout(() => { copy.textContent = 'Copy'; }, 1500); },
    () => { copy.textContent = 'Copy failed'; });
  const box = el('details', { className: 'notes', open: openNotes.has(t.id) }, el('summary', {}, 'Notes'), el('pre', {}, t.notes), copy);
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
    $('notes').value = t.notes || '';
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

function renderMarquee(done) {
  const words = done.length
    ? done.slice(0, 12).map((t) => (t.title.length > 40 ? t.title.slice(0, 40) + '…' : t.title))
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
  renderMarquee(done);

  $('tab-pending').ariaSelected = String(tab === 'pending');
  $('tab-history').ariaSelected = String(tab === 'history');
  $('n-pending').textContent = open.length;
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
  const match = (t) => (t.title + '\n' + (t.notes || '')).toLowerCase().includes(q);
  if (tab === 'pending') {
    const shown = open.filter(match);
    const shownLater = later.filter(match);
    if (!shown.length && !(q && shownLater.length)) empty(q ? 'No matches' : 'Nothing left. Take a break.');
    if (shown.length + shownLater.length) list.append(el('ul', {}, ...[...shown, ...shownLater].map(pendingItem)));
  } else {
    const items = done.filter(match);
    if (!items.length) { empty(q ? 'No matches' : 'No history yet'); return applySelection(); }
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

$('form').onsubmit = (e) => {
  e.preventDefault();
  const title = $('title').value.trim();
  if (!title) return;
  // due stays in datetime-local form ("2026-11-12T09:00"): Date parses it as local time and it sorts as text
  const due = $('due').value || null;
  const fields = {
    title, due,
    remindBefore: due && $('remind').value !== '' ? Number($('remind').value) : null,
    repeat: $('repeat').value || null,
    notes: $('notes').value.trim() || null,
  };
  const next = editingId
    // a new due date cancels a pending snooze, so the reminder follows the new time
    ? todos.map((t) => (t.id === editingId ? { ...t, ...fields, snoozeUntil: t.due === due ? t.snoozeUntil : null } : t))
    : [...todos, { id: crypto.randomUUID(), ...fields, done: false, createdAt: new Date().toISOString(), completedAt: null }];
  resetForm();
  commit(next);
};
$('cancel').onclick = resetForm;
$('tab-pending').onclick = () => { tab = 'pending'; render(true); };
$('tab-history').onclick = () => { tab = 'history'; render(true); };
$('search').oninput = () => render();

setInterval(() => { if (tab === 'pending') render(); }, 60000); // refresh overdue colouring and bring back repeating tasks after midnight

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
  (path) => { $('backup-msg').textContent = 'Backup saved to ' + path; },
  (e) => tell('Export failed: ' + e));
$('import-btn').onclick = () => $('import').click();
$('import').onchange = async (e) => {
  const file = e.target.files[0];
  e.target.value = ''; // so picking the same file again fires change
  if (!file) return;
  let incoming;
  try {
    const data = JSON.parse(await file.text());
    incoming = Array.isArray(data) ? data : data.todos;
    if (!Array.isArray(incoming)) throw new Error('no task list');
  } catch {
    return tell('That file is not a Vermil Tasks backup.');
  }
  // merge by id so an import never deletes anything; the backup wins for tasks both sides have
  const ids = new Set(incoming.map((t) => t && t.id));
  const replacing = todos.filter((t) => ids.has(t.id)).length;
  if (!(await ask(`Import ${incoming.length} tasks from this backup?\nNew: ${incoming.length - replacing}\nReplacing tasks you already have: ${replacing}`, 'Import'))) return;
  if (await commit([...todos.filter((t) => !ids.has(t.id)), ...incoming])) $('backup-msg').textContent = `Imported ${incoming.length} tasks`;
};

const win = window.__TAURI__.window.getCurrentWindow();
$('win-min').onclick = () => win.minimize();
$('win-max').onclick = () => win.toggleMaximize();
$('win-close').onclick = () => win.close(); // the backend turns this into "hide to tray"

// Offer new versions without interrupting: the button appears only when the release feed has one.
const checkUpdate = () => invoke('check_update').then((v) => {
  if (!v) return;
  $('update').textContent = `Update to v${v} →`;
  $('update').hidden = false;
}).catch(() => {}); // offline or feed unreachable: try again later
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

// ── keyboard ──
const SHORTCUTS = [
  '↑ ↓: select a task',
  'Space: mark done (in History: restore)',
  'E: edit the selected task',
  'P: pin or unpin the selected task',
  'Delete: delete the selected task',
  'N: new task',
  'Ctrl+F: search',
  'Ctrl+Z: undo',
  'Esc: leave a field, cancel editing',
  '?: show this list',
].join('\n');
const isField = (n) => n.matches('textarea, select, input:not([type=checkbox]):not([type=button])');
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
  else if (e.key === 'Delete') press('.act-del');
  else if (e.code === 'KeyN') { e.preventDefault(); $('title').focus(); }
  else if (e.code === 'Slash' && e.shiftKey) { e.preventDefault(); tell(SHORTCUTS); }
});
$('shortcuts').onclick = () => tell(SHORTCUTS);

const quickHint = () => invoke('quick_shortcut').then((ok) => {
  $('quick-hint').textContent = ok ? 'Quick add from anywhere: Ctrl+Alt+T' : 'Quick add shortcut Ctrl+Alt+T is in use by another app';
});
quickHint();
setTimeout(quickHint, 5000); // the backend keeps retrying for a few seconds after launch

const load = (enter) => invoke('get_todos').then((t) => { todos = t; render(enter); });
// the backend changed tasks (quick add, snooze): older states would overwrite that change, so undo starts over
window.__TAURI__.event.listen('todos-changed', () => { undoStack.length = 0; load(); });
load(true);
