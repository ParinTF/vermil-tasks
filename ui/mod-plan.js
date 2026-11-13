// Week plan module: plan the week on one page. Seven days with what is already on them, and on the right the open tasks that
// still have no day. Select a task, then press 1-7 (or click a day) to put it there. Loaded only while it is on.
(() => {
  let weekOf = ''; // any day of the week on show
  let sel = ''; // the selected task
  const root = () => $('plan-view');
  const today = () => localDay(new Date());
  const remind = () => prefsNow.defaultRemind;

  const model = () => {
    const days = weekDays(weekOf || today());
    const marks = typeof calendarMarks === 'function' ? calendarMarks(days[0], days[6]) : {}; // the Calendar's reading of the other modules' dates, when it is loaded
    return { days, ...planWeek(todos, marks, days, today()) };
  };

  function build() {
    root().replaceChildren(
      el('section', { className: 'pl-main', ariaLabel: 'Week' },
        el('div', { className: 'pl-head' },
          el('h2', {}, 'Plan'),
          el('div', { className: 'pl-nav' },
            el('button', { id: 'pl-prev', type: 'button', className: 'linkish', ariaLabel: 'Previous week', textContent: '‹ Previous', onclick: () => go(-7) }),
            el('span', { id: 'pl-range', className: 'pl-range' }),
            el('button', { id: 'pl-next', type: 'button', className: 'linkish', ariaLabel: 'Next week', textContent: 'Next ›', onclick: () => go(7) }),
            el('button', { id: 'pl-now', type: 'button', className: 'linkish', textContent: 'This week', onclick: () => { weekOf = ''; paint(); } }))),
        el('div', { id: 'pl-days', className: 'pl-days' })),
      el('aside', { className: 'pl-side', ariaLabel: 'To place' },
        el('h3', { id: 'pl-pool-h' }, 'To place'),
        el('p', { className: 'pl-fine' }, 'Open tasks with no day, or whose day has gone. Pick one, then press 1 to 7 or click a day. U takes a task off the plan.'),
        el('ul', { id: 'pl-pool', className: 'pl-list' })));
  }

  function go(n) {
    weekOf = shiftDay(weekOf || today(), n);
    paint();
  }

  async function place(day) {
    const t = todos.find((x) => x.id === sel);
    if (!t || t.repeat) return;
    if (t.due && t.due.slice(0, 10) === day) return;
    await commit(todos.map((x) => (x.id === t.id ? { ...x, ...placeDue(t, day, remind()) } : x))); // commit calls refresh(), which redraws
  }
  async function unplace() {
    const t = todos.find((x) => x.id === sel);
    if (!t || !t.due || t.repeat) return;
    await commit(todos.map((x) => (x.id === t.id ? { ...x, due: null, remindBefore: null, snoozeUntil: null } : x)));
  }

  function taskButton(t, when) {
    const real = !t.ghost;
    const b = el('button', { type: 'button', className: 'pl-task' + (t.id === sel ? ' sel' : '') + (t.done ? ' done' : '') + (t.ghost ? ' pl-ghost' : ''), disabled: !real || t.done },
      ...(when ? [el('small', {}, when)] : []), el('span', {}, t.title));
    if (real) {
      b.dataset.id = t.id;
      b.onclick = (e) => { e.stopPropagation(); selectTask(t.id); };
      b.onfocus = () => { if (sel !== t.id) selectTask(t.id, false); };
    }
    return b;
  }

  function selectTask(id, focus = true) {
    sel = id;
    for (const b of root().querySelectorAll('.pl-task')) b.classList.toggle('sel', b.dataset.id === id);
    if (focus) root().querySelector(`.pl-task[data-id="${id}"]`)?.focus();
  }

  const loadText = (c) => [c.tasks.filter((t) => !t.done).length ? `${c.tasks.filter((t) => !t.done).length} ${c.tasks.filter((t) => !t.done).length === 1 ? 'task' : 'tasks'}` : '', c.minutes ? minutesLabel(c.minutes) : ''].filter(Boolean).join(' · ') || 'Free';

  function paint() {
    if (!$('pl-days')) return;
    const keep = root().contains(document.activeElement) ? document.activeElement.dataset?.id : ''; // a redraw keeps the focus on the same task
    const m = model();
    $('pl-range').textContent = `${fmt(parseDay(m.days[0]), { day: 'numeric', month: 'short' })} – ${fmt(parseDay(m.days[6]), { day: 'numeric', month: 'short' })}`;
    $('pl-now').hidden = m.days.includes(today());
    $('pl-days').replaceChildren(...m.cols.map((c, i) => {
      const date = parseDay(c.day);
      const sec = el('section', { className: 'pl-day' + (c.day === today() ? ' today' : '') + (c.day < today() ? ' past' : ''), id: 'pl-day-' + c.day, ariaLabel: fmt(date, { weekday: 'long', day: 'numeric', month: 'long' }) },
        el('div', { className: 'pl-dayh' }, el('b', {}, fmt(date, { weekday: 'short' })), el('span', { className: 'pl-dn' }, String(date.getDate())), el('small', { className: 'pl-key' }, String(i + 1)), el('span', { className: 'pl-load' }, loadText(c))),
        el('ul', { className: 'pl-list' },
          ...c.marks.map((k) => el('li', { className: 'pl-mark' }, '◆ ' + k.title)),
          ...c.tasks.map((t) => el('li', {}, taskButton(t, t.due.slice(11, 16) !== '00:00' ? t.due.slice(11, 16) : '')))));
      sec.onclick = () => place(c.day);
      return sec;
    }));
    $('pl-pool-h').textContent = `To place · ${m.pool.length}`;
    $('pl-pool').replaceChildren(...(m.pool.length
      ? m.pool.map((t) => el('li', {}, taskButton(t, t.due ? 'late ' + fmt(parseDay(t.due.slice(0, 10)), { day: 'numeric', month: 'short' }) : '')))
      : [el('li', { className: 'pl-empty' }, todos.some((t) => !t.done) ? 'Everything has a day.' : 'No open tasks.')]));
    if (keep) root().querySelector(`.pl-task[data-id="${keep}"]`)?.focus();
  }

  const group = { module: 'plan', title: 'Week plan', items: [['1–7', 'Put the selected task on that day'], ['U', 'Take the task off the plan'], [['↑', '↓'], 'Walk the tasks'], ['PageUp / PageDown', 'Previous or next week'], ['T', 'This week']] };
  const commandFn = () => [{ label: 'Plan the week', hint: 'Plan', kind: 'Command', run: async () => { weekOf = ''; await setView('plan'); } }];

  defineModule('plan', {
    summary() {
      const n = planWeek(todos, {}, weekDays(today()), today()).pool.length;
      return n ? { label: 'To place', value: String(n), unit: n === 1 ? 'task' : 'tasks', sub: 'open, with no day yet' } : null;
    },
    start() { build(); paint(); commandHooks.push(commandFn); shortcutGroups.push(group); },
    stop() {
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { paint(); },
    refresh() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      const digit = /^Digit([1-7])$/.exec(e.code);
      if (digit) { e.preventDefault(); place(model().days[Number(digit[1]) - 1]); return; }
      if (e.code === 'KeyU') { e.preventDefault(); unplace(); return; }
      if (e.key === 'PageDown') { e.preventDefault(); go(7); return; }
      if (e.key === 'PageUp') { e.preventDefault(); go(-7); return; }
      if (e.code === 'KeyT') { e.preventDefault(); weekOf = ''; paint(); return; }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const all = [...root().querySelectorAll('.pl-task[data-id]:not(:disabled)')];
        if (!all.length) return;
        e.preventDefault();
        const i = all.findIndex((b) => b.dataset.id === sel);
        const next = all[Math.max(0, Math.min(all.length - 1, i < 0 ? 0 : i + (e.key === 'ArrowDown' ? 1 : -1)))];
        selectTask(next.dataset.id);
      }
    },
  });
})();
