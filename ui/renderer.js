const $ = (id) => document.getElementById(id);
const { invoke } = window.__TAURI__.core;
let todos = [];
let tab = 'pending';
let editingId = null;
let marqueeKey;
const openNotes = new Set(); // ids whose notes are expanded, so a re-render does not collapse them
let streaks = new Map(); // open task id -> current streak, refreshed on every render

const fmt = (d, opts) => new Date(d).toLocaleString('en-GB', opts);
const remindLabel = { 0: 'reminds at due time', 10: 'reminds 10 min before', 60: 'reminds 1 h before', 1440: 'reminds 1 day before' };
const calm = matchMedia('(prefers-reduced-motion: reduce)');
const isOverdue = (t) => t.due && new Date(t.due) < new Date();
// a repeating task that was finished waits here until its hideUntil day arrives
const isLater = (t) => t.hideUntil && t.hideUntil > localDay(new Date());

function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

async function commit(next) {
  try {
    await invoke('save_todos', { todos: next });
  } catch (e) {
    alert('Could not save: ' + e);
    render();
    return false;
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
  const btn = el('button', { type: 'button', className: 'danger', textContent: 'Delete' });
  btn.onclick = () => {
    if (!confirm(`Delete "${t.title}" permanently?`)) return;
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
  const edit = el('button', { type: 'button', textContent: 'Edit' });
  const li = el('li', { className: 'item' + (later ? ' later' : ''), id: 'r-' + t.id }, lead,
    el('div', {}, el('span', { className: 'title' }, t.title), meta, notesBlock(t)),
    el('div', { className: 'tools' }, edit, removeButton(t)));
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
  const restore = el('button', { type: 'button', textContent: 'Restore' });
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
  const open = todos.filter((t) => !t.done && !isLater(t)).sort(byDue);
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
  $('search').hidden = tab !== 'history';

  const list = $('list');
  list.classList.toggle('enter', enter);
  list.replaceChildren();
  const empty = (text) => list.append(el('div', { className: 'empty' }, text));

  if (tab === 'pending') {
    if (!open.length) empty('Nothing left. Take a break.');
    if (open.length + later.length) list.append(el('ul', {}, ...[...open, ...later].map(pendingItem)));
  } else {
    const q = $('search').value.trim().toLowerCase();
    const items = done.filter((t) => (t.title + '\n' + (t.notes || '')).toLowerCase().includes(q));
    if (!items.length) return empty(q ? 'No matches' : 'No history yet');
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
  alert('Could not change the startup setting: ' + err);
});

$('export').onclick = () => invoke('export_todos').then(
  (path) => { $('backup-msg').textContent = 'Backup saved to ' + path; },
  (e) => alert('Export failed: ' + e));
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
    return alert('That file is not a Vermil Tasks backup.');
  }
  // merge by id so an import never deletes anything; the backup wins for tasks both sides have
  const ids = new Set(incoming.map((t) => t && t.id));
  const replacing = todos.filter((t) => ids.has(t.id)).length;
  if (!confirm(`Import ${incoming.length} tasks from this backup?\nNew: ${incoming.length - replacing}\nReplacing tasks you already have: ${replacing}`)) return;
  if (await commit([...todos.filter((t) => !ids.has(t.id)), ...incoming])) $('backup-msg').textContent = `Imported ${incoming.length} tasks`;
};

// The left column stays pinned while the list scrolls. When it is taller than the window it is pinned
// by its bottom edge instead, otherwise the Add button could never be scrolled into view.
const side = document.querySelector('.side');
const pinSide = () => side.style.setProperty('--side-top', Math.min(56, innerHeight - side.offsetHeight) + 'px');
new ResizeObserver(pinSide).observe(side);
addEventListener('resize', pinSide);

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
    alert('Update failed: ' + e);
    $('update').disabled = false;
    $('update').textContent = label;
  });
};
checkUpdate();
setInterval(checkUpdate, 6 * 3600000); // the app can sit in the tray for days

invoke('quick_shortcut').then((ok) => {
  $('quick-hint').textContent = ok ? 'Quick add from anywhere: Ctrl+Alt+T' : 'Quick add shortcut Ctrl+Alt+T is in use by another app';
});

const load = (enter) => invoke('get_todos').then((t) => { todos = t; render(enter); });
window.__TAURI__.event.listen('todos-changed', () => load()); // the backend changed tasks (quick add, snooze)
load(true);
