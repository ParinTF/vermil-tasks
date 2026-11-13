// Calendar module: a month of tasks by due date, an hour-by-hour day view, and drag to reschedule.
// Loaded only while Calendar is switched on (it needs Tasks).
const calGroup = { module: 'calendar', title: 'Calendar', items: [
    [['←', '→'], 'Previous or next day'], [['↑', '↓'], 'Previous or next week'], [['PageUp', 'PageDown'], 'Previous or next month'],
    ['T', 'Today'], [['Enter', 'N'], 'Add a task on this day'], ['D', 'Hour-by-hour day view'], ['M', 'Month view'],
    ['Alt+←/→/↑/↓', 'Move the focused task a day or a week'], ['Alt+↑/↓', 'In day view: move a block 15 min (with Shift: resize)'],
  ] };

// ── calendar view: a month of tasks by due date, and the selected day beside it ──
let calDay = localDay(new Date()); // the selected day
let calMonth = calDay.slice(0, 7); // the month on show, "2026-11"
let calMode = 'month'; // or 'day': the selected day hour by hour
let tlDay = null; // the day the timeline was last scrolled for
const HOUR_PX = 48; // keep in step with --hour in style.css
const taskCount = (n) => `${n} ${n === 1 ? 'task' : 'tasks'}`;

// the dated things other modules show in the month (calendarHooks), by day, each marked so the calendar never treats one as a task
function calendarMarks(from, to) {
  const byDay = {};
  for (const f of calendarHooks) {
    try { for (const m of f(from, to)) (byDay[m.day] ||= []).push({ ...m, mark: true, due: m.day + 'T00:00' }); } catch (e) { console.error('calendar hook', e); }
  }
  return byDay;
}
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
const dayCount = (list) => [list.some((t) => !t.mark) && taskCount(list.filter((t) => !t.mark).length), list.some((t) => t.mark) && plural(list.filter((t) => t.mark).length, 'reminder')].filter(Boolean).join(', ');

function dayCell(cell, list, cap, today) {
  const date = parseDay(cell.day);
  const lines = list.length > cap ? list.slice(0, Math.max(0, cap - 1)) : list; // the last line becomes "+N more"
  const more = list.length - lines.length;
  const now = new Date();
  const btn = el('button', {
    type: 'button', role: 'gridcell', tabIndex: cell.day === calDay ? 0 : -1,
    className: 'cal-cell' + (cell.inMonth ? '' : ' out') + (cell.day === today ? ' today' : '') + (cell.day === calDay ? ' sel' : ''),
    ariaLabel: `${fmt(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}, ${dayCount(list) || 'nothing'}`,
  }, el('span', { className: 'cal-d' }, String(date.getDate())),
  ...lines.map((t) => {
    if (t.mark) return el('span', { className: 'cal-line mark' }, `◆ ${t.title}`);
    const line = el('span', { className: 'cal-line' + (t.done ? ' done' : new Date(t.due) < now ? ' late' : '') + (t.ghost ? ' ghost' : '') }, `${t.due.slice(11, 16)} ${t.title}`);
    if (!t.done && !t.ghost) line.dataset.id = t.id; // an open task can be dragged to another day
    return line;
  }),
  ...(more ? [el('span', { className: 'cal-more' }, `+${more} more`)] : []));
  btn.ariaSelected = String(cell.day === calDay);
  btn.dataset.day = cell.day;
  btn.onclick = () => selectDay(cell.day);
  btn.ondblclick = () => setCalMode('day');
  return btn;
}

function renderDayPanel(list) {
  $('cal-day-title').textContent = fmt(parseDay(calDay), { weekday: 'long', day: 'numeric', month: 'long' });
  $('cal-day-count').textContent = dayCount(list) || 'Nothing due';
  $('cal-day-list').replaceChildren(...list.map((t) => {
    if (t.mark) {
      const go = el('button', { type: 'button', className: 'cal-open' }, t.title);
      go.onclick = () => setView(t.view);
      return el('li', { className: 'cal-mark' }, el('span', { className: 'cal-markdot', ariaHidden: 'true' }, '◆'), go, el('time', {}, t.kind));
    }
    const box = el('input', { type: 'checkbox', checked: t.done, disabled: !!t.ghost, ariaLabel: (t.done ? 'Mark not done: ' : 'Mark done: ') + t.title });
    box.onchange = () => commit(t.done ? todos.map((x) => (x.id === t.id ? { ...x, done: false, completedAt: null, hideUntil: null } : x)) : complete(t));
    const open = el('button', { type: 'button', className: 'cal-open' + (t.done ? ' done' : '') }, t.title);
    open.onclick = () => showTask(t.ghostOf || t.id);
    if (!t.done && !t.ghost) open.dataset.id = t.id;
    return el('li', {}, box, open, el('time', {}, t.due.slice(11, 16)));
  }));
}

// the day as a timeline: one block per task, placed by its time and sized by its length
function renderTimeline(list) {
  const tl = $('tl');
  const blocks = list.map((t) => ({ t, start: minutesOf(t.due), len: taskMinutes(t) })).map((b) => ({ ...b, end: Math.min(1440, b.start + b.len) }));
  const lanes = layoutDay(blocks.map((b) => ({ id: b.t.id, start: b.start, end: b.end })));
  const now = new Date();
  tl.replaceChildren(
    ...Array.from({ length: 24 }, (_, h) => el('div', { className: 'tl-hour', style: `top:${h * HOUR_PX}px` }, el('span', {}, String(h).padStart(2, '0') + ':00'))),
    ...blocks.map(({ t, start, end }) => {
      const { lane, lanes: n } = lanes[t.id];
      const late = !t.done && new Date(t.due) < now;
      const box = el('button', {
        type: 'button', className: 'tl-block' + (t.done ? ' done' : late ? ' late' : '') + (t.ghost ? ' ghost' : ''),
        style: `top:${start / 60 * HOUR_PX}px;height:${Math.max(22, (end - start) / 60 * HOUR_PX - 1)}px;left:calc(52px + (100% - 52px) * ${lane / n});width:calc((100% - 52px) / ${n} - 3px)`,
      }, el('b', {}, t.title), el('time', {}, `${withTime('', start).slice(1)} – ${withTime('', end % 1440 || 1440 - 1).slice(1)}`));
      box.ariaLabel = `${t.title}, ${t.due.slice(11, 16)}, ${end - start} minutes`;
      box.onclick = () => showTask(t.ghostOf || t.id);
      if (!t.done && !t.ghost) {
        box.dataset.id = t.id;
        box.append(el('span', { className: 'tl-grip', ariaHidden: 'true' }));
      }
      return box;
    }),
    ...(calDay === localDay(now) ? [el('div', { className: 'tl-now', style: `top:${(now.getHours() * 60 + now.getMinutes()) / 60 * HOUR_PX}px` })] : []),
    el('div', { className: 'tl-drop', id: 'tl-drop' }));
  if (tlDay !== calDay) { // a new day: bring its first task into view, or the morning
    tlDay = calDay;
    const first = Math.min(...blocks.map((b) => b.start), 8 * 60);
    $('tl-scroll').scrollTop = Math.max(0, first / 60 * HOUR_PX - HOUR_PX);
  }
}

function renderNoDate() {
  const open = todos.filter((t) => !t.done && !t.due);
  $('cal-nodate-box').hidden = calMode !== 'day';
  $('cal-nodate').replaceChildren(...open.map((t) => {
    const b = el('button', { type: 'button', className: 'cal-open' }, t.title);
    b.dataset.id = t.id; // drag it onto the timeline to give it a time
    b.onclick = () => showTask(t.id);
    return el('li', {}, b);
  }));
}

function setCalMode(mode) {
  calMode = mode;
  tlDay = null;
  renderCalendar();
}

function renderCalendar() {
  const [y, m] = calMonth.split('-').map(Number);
  const grid = $('cal-grid');
  const today = localDay(new Date());
  const span = monthGrid(y, m - 1);
  const tasksByDay = groupByDay(withRepeats(todos, span[0].day, span[41].day, today)); // repeating tasks show on each day they come back
  const marks = calendarMarks(span[0].day, span[41].day);
  const byDay = { ...tasksByDay };
  for (const [d, list] of Object.entries(marks)) byDay[d] = [...list, ...(byDay[d] || [])]; // the reminders first, then the tasks
  const title = fmt(new Date(y, m - 1, 1), { month: 'long', year: 'numeric' });
  const day = calMode === 'day';
  $('cal-mode').textContent = day ? 'Month' : 'Day';
  $('cal-prev').ariaLabel = day ? 'Previous day' : 'Previous month';
  $('cal-next').ariaLabel = day ? 'Next day' : 'Next month';
  $('cal-week').hidden = $('cal-grid').hidden = day;
  $('tl-scroll').hidden = !day;
  renderNoDate();
  if (day) {
    $('cal-title').textContent = fmt(parseDay(calDay), { weekday: 'long', day: 'numeric', month: 'long' });
    renderTimeline(tasksByDay[calDay] || []); // the timeline is for tasks with a time; the reminders are in the list beside it
    renderDayPanel(byDay[calDay] || []);
    return;
  }
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
const slotUnder = (e) => (calMode === 'day' && document.elementFromPoint(e.clientX, e.clientY)?.closest('#tl-scroll') ? snapMinutes((e.clientY - $('tl').getBoundingClientRect().top) / HOUR_PX * 60) : null);
let bdrag = null; // a block being moved or resized on the timeline

// one write for a task's time slot: its due moves, its length may change, and a snooze would no longer match
const setSlot = (id, patch) => commit(todos.map((x) => (x.id === id ? { ...x, snoozeUntil: null, ...patch } : x)));

function endDrag() {
  document.querySelector('.tl-scroll.drop')?.classList.remove('drop');
  drag?.ghost?.remove();
  document.querySelector('.cal-cell.drop')?.classList.remove('drop');
  document.body.classList.remove('dragging');
  drag = null;
}
$('calendar-view').addEventListener('pointerdown', (e) => {
  const blk = e.button === 0 && e.target.closest('.tl-block[data-id]');
  if (blk) {
    const t = todos.find((x) => x.id === blk.dataset.id);
    if (t) bdrag = { id: t.id, el: blk, resize: !!e.target.closest('.tl-grip'), x: e.clientX, y: e.clientY, start: minutesOf(t.due), len: taskMinutes(t), moved: false };
    return;
  }
  const src = e.button === 0 && e.target.closest('.cal-line[data-id], .cal-open[data-id]');
  if (src) drag = { id: src.dataset.id, x: e.clientX, y: e.clientY, text: src.textContent, ghost: null };
});
addEventListener('pointermove', (e) => {
  if (bdrag) {
    const dy = e.clientY - bdrag.y;
    if (!bdrag.moved && Math.hypot(dy, e.clientX - bdrag.x) < 5) return; // a click is not a drag, in any direction
    bdrag.moved = true;
    document.body.classList.add('dragging');
    bdrag.off = !bdrag.resize && !!document.elementFromPoint(e.clientX, e.clientY)?.closest('.cal-day'); // over the right column: let go to unschedule
    document.querySelector('.cal-day').classList.toggle('unschedule', bdrag.off);
    bdrag.el.classList.toggle('lifting', bdrag.off);
    const d = Math.round(dy / HOUR_PX * 4) * 15; // quarter hours
    if (bdrag.resize) {
      bdrag.newLen = Math.max(15, Math.min(1440 - bdrag.start, bdrag.len + d));
      bdrag.el.style.height = Math.max(22, bdrag.newLen / 60 * HOUR_PX - 1) + 'px';
    } else {
      bdrag.newStart = Math.max(0, Math.min(1440 - bdrag.len, bdrag.start + d));
      bdrag.el.style.top = bdrag.newStart / 60 * HOUR_PX + 'px';
    }
    return;
  }
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
  const slot = slotUnder(e); // over the timeline: a line shows where the task will start
  $('tl-scroll').classList.toggle('drop', slot !== null);
  if (slot !== null) $('tl-drop').style.top = slot / 60 * HOUR_PX + 'px';
});
addEventListener('pointerup', (e) => {
  if (bdrag) {
    const { id, moved, newStart, newLen, off } = bdrag;
    bdrag = null;
    document.body.classList.remove('dragging');
    document.querySelector('.cal-day')?.classList.remove('unschedule');
    if (!moved) return;
    dragged = true;
    setTimeout(() => { dragged = false; });
    const t = todos.find((x) => x.id === id);
    if (off) setSlot(id, { due: null }); // dropped on the list at the right: no day, no time
    else if (newStart !== undefined && t) setSlot(id, { due: withTime(t.due.slice(0, 10), newStart) });
    else if (newLen !== undefined) setSlot(id, { minutes: newLen });
    else renderCalendar();
    return;
  }
  if (!drag) return;
  const { id, ghost } = drag;
  const cell = ghost ? dayUnder(e) : null;
  const slot = ghost ? slotUnder(e) : null;
  endDrag();
  if (!ghost) return;
  dragged = true;
  setTimeout(() => { dragged = false; });
  if (slot !== null) setSlot(id, { due: withTime(calDay, slot) });
  else if (cell) moveTask(id, cell.dataset.day);
});
addEventListener('pointercancel', () => { endDrag(); if (bdrag) { bdrag = null; document.body.classList.remove('dragging'); document.querySelector('.cal-day')?.classList.remove('unschedule'); renderCalendar(); } });
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (drag?.ghost) { e.stopPropagation(); endDrag(); }
  else if (bdrag?.moved) { e.stopPropagation(); bdrag = null; document.body.classList.remove('dragging'); document.querySelector('.cal-day')?.classList.remove('unschedule'); renderCalendar(); }
}, true);
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
  if (e.altKey && !e.ctrlKey && t.classList?.contains('tl-block') && t.dataset.id && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { // a block by keyboard: Alt+arrows move it a quarter hour, with Shift they resize it
    e.preventDefault();
    const task = todos.find((x) => x.id === t.dataset.id);
    const d = e.key === 'ArrowUp' ? -15 : 15;
    if (task) {
      const patch = e.shiftKey ? { minutes: Math.max(15, taskMinutes(task) + d) } : { due: withTime(task.due.slice(0, 10), snapMinutes(minutesOf(task.due) + d)) };
      setSlot(task.id, patch).then(() => setTimeout(() => document.querySelector(`#tl [data-id="${task.id}"]`)?.focus(), 80));
    }
    return;
  }
  if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
  if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
  if (isField(t)) return;
  if (e.code === 'KeyD' || e.code === 'KeyM') { setCalMode(e.code === 'KeyD' ? 'day' : 'month'); return; }
  const step = { ArrowLeft: () => shiftDay(calDay, -1), ArrowRight: () => shiftDay(calDay, 1), ArrowUp: () => shiftDay(calDay, -7), ArrowDown: () => shiftDay(calDay, 7), PageUp: () => shiftMonth(calDay, -1), PageDown: () => shiftMonth(calDay, 1) }[e.key];
  if (step) { e.preventDefault(); selectDay(step(), true); return; }
  if (e.code === 'KeyT') selectDay(localDay(new Date()), true);
  else if (e.key === 'Enter' || e.code === 'KeyN') { e.preventDefault(); $('cal-new').focus(); } // Enter would also click the focused day
}

$('cal-week').replaceChildren(...Array.from({ length: 7 }, (_, i) => el('span', {}, fmt(new Date(2024, 0, 1 + i - (weekStartDay === 0 ? 1 : 0)), { weekday: 'short' })))); // 1 Jan 2024 is a Monday
$('cal-prev').onclick = () => selectDay(calMode === 'day' ? shiftDay(calDay, -1) : shiftMonth(calDay, -1));
$('cal-next').onclick = () => selectDay(calMode === 'day' ? shiftDay(calDay, 1) : shiftMonth(calDay, 1));
$('cal-mode').onclick = () => setCalMode(calMode === 'day' ? 'month' : 'day');
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


defineModule('calendar', {
  summary() {
    const now = new Date();
    const next = todos.filter((t) => !t.done && t.due && new Date(t.due) >= now).sort((a, b) => a.due.localeCompare(b.due))[0];
    if (!next) return null;
    const day = next.due.slice(0, 10) === localDay(now) ? 'Today' : fmt(parseDay(next.due.slice(0, 10)), { weekday: 'short', day: 'numeric', month: 'short' });
    return { label: 'Next up', value: next.title.length > 28 ? next.title.slice(0, 27) + '…' : next.title, unit: '', sub: `${day}, ${next.due.slice(11, 16)}` };
  },
  start() { shortcutGroups.push(calGroup); },
  stop() { shortcutGroups.splice(shortcutGroups.indexOf(calGroup), 1); },
  show: renderCalendar,
  refresh: renderCalendar,
  keys: calendarKeys,
  today() { selectDay(localDay(new Date()), true); },
  goto(day) { selectDay(day, true); },
});
