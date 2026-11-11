const $ = (id) => document.getElementById(id);
const { invoke } = window.__TAURI__.core;
let todos = [];
let tab = 'pending';
let editingId = null;
let marqueeKey;

const fmt = (d, opts) => new Date(d).toLocaleString('en-GB', opts);
const remindLabel = { 0: 'reminds at due time', 10: 'reminds 10 min before', 60: 'reminds 1 h before', 1440: 'reminds 1 day before' };
const calm = matchMedia('(prefers-reduced-motion: reduce)');
const isOverdue = (t) => t.due && new Date(t.due) < new Date();
// local calendar day as "2026-11-12", the same shape datetime-local uses, so the two compare and splice as text
const localDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
// a daily task finished today waits here until its hideUntil day arrives
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
    return render();
  }
  const apply = () => { todos = next; render(); };
  // a hidden window never gets the frame the transition waits for, so apply directly there
  if (document.startViewTransition && !document.hidden) document.startViewTransition(apply); else apply();
}

// Marks a task done. A daily task also leaves a fresh copy for tomorrow, so each day gets its own history entry.
function complete(t) {
  const next = todos.map((x) => (x.id === t.id ? { ...x, done: true, completedAt: new Date().toISOString() } : x));
  const series = t.series || t.id;
  // a restored history entry shares the series, so only spawn when no open copy exists yet
  const hasOpenCopy = todos.some((x) => x.id !== t.id && !x.done && (x.series || x.id) === series);
  if (t.repeat === 'daily' && !hasOpenCopy) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = localDay(tomorrow);
    next.push({
      ...t, id: crypto.randomUUID(), series, done: false, completedAt: null,
      createdAt: new Date().toISOString(), hideUntil: day,
      due: t.due ? day + t.due.slice(10) : null, // same time of day, tomorrow
    });
  }
  return next;
}

function resetForm() {
  editingId = null;
  $('form').reset();
  $('submit').textContent = 'Add task';
  $('cancel').hidden = true;
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
    later ? 'Back tomorrow' : '',
    t.due ? (overdue ? 'Overdue ' : 'Due ') + fmt(t.due, { dateStyle: 'medium', timeStyle: 'short' }) : '',
    t.due && t.remindBefore != null ? remindLabel[t.remindBefore] : '',
    t.repeat === 'daily' ? 'daily' : '',
  ].filter(Boolean);
  const meta = parts.length ? el('div', { className: 'meta' + (overdue ? ' overdue' : '') }, parts.join(' · ')) : '';
  const lead = later
    ? el('span', { className: 'tick', ariaHidden: 'true' }, '↻')
    : el('input', { type: 'checkbox', ariaLabel: 'Mark done: ' + t.title });
  const edit = el('button', { type: 'button', textContent: 'Edit' });
  const li = el('li', { className: 'item' + (later ? ' later' : ''), id: 'r-' + t.id }, lead,
    el('div', {}, el('span', { className: 'title' }, t.title), meta),
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
    $('repeat').checked = t.repeat === 'daily';
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
      el('div', { className: 'meta' }, 'Done at ' + fmt(t.completedAt, { timeStyle: 'short' }) + (t.repeat === 'daily' ? ' · daily' : ''))),
    el('div', { className: 'tools' }, restore, removeButton(t)));
}

function renderHero(open, done) {
  const late = open.filter(isOverdue).length;
  const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
  $('today').textContent = fmt(new Date(), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('h-top').textContent = open.length ? 'Still left' : 'All clear';
  $('count').textContent = String(open.length).padStart(2, '0');
  $('h-unit').textContent = open.length === 1 ? 'task' : 'tasks';
  $('stats').replaceChildren(
    ...(late ? [el('b', { className: 'late' }, `${late} overdue`), ' · '] : []),
    el('b', {}, plural(done.length, 'task')), ' done so far');
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
  const done = todos.filter((t) => t.done).sort((a, b) => b.completedAt.localeCompare(a.completedAt));
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
    const items = done.filter((t) => t.title.toLowerCase().includes(q));
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
    repeat: $('repeat').checked ? 'daily' : null,
  };
  const next = editingId
    ? todos.map((t) => (t.id === editingId ? { ...t, ...fields } : t))
    : [...todos, { id: crypto.randomUUID(), ...fields, done: false, createdAt: new Date().toISOString(), completedAt: null }];
  resetForm();
  commit(next);
};
$('cancel').onclick = resetForm;
$('tab-pending').onclick = () => { tab = 'pending'; render(true); };
$('tab-history').onclick = () => { tab = 'history'; render(true); };
$('search').oninput = () => render();

setInterval(() => { if (tab === 'pending') render(); }, 60000); // refresh overdue colouring and bring back daily tasks after midnight

// ready to type on launch without the autofocus scroll jumping past the hero
$('title').focus({ preventScroll: true });
window.__TAURI__.app.getVersion().then((v) => { $('version').textContent = 'v' + v; });
invoke('get_todos').then((t) => { todos = t; render(true); });
