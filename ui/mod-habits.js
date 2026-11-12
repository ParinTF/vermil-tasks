// Habits module: tick what you did, keep streaks, see the year in a heatmap. Loaded only while it is switched on.
// Data: { habits: [{ id, name, days: [0..6], created }], log: { "YYYY-MM-DD": [habit ids] } }.
(() => {
  let data = { habits: [], log: {} };
  let day = localDay(new Date()); // the day being ticked
  const WEEKS = 26;
  const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Sunday first, like Date.getDay()
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let picked = [0, 1, 2, 3, 4, 5, 6];
  const save = () => saveModule('habits', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('habits-view');
  const today = () => localDay(new Date());

  function build() {
    root().replaceChildren(
      el('section', { className: 'hb-main', ariaLabel: 'Habits' },
        el('div', { className: 'hb-head' }, el('h2', { id: 'hb-title' }),
          el('div', { className: 'hb-nav' },
            el('button', { id: 'hb-prev', className: 'linkish', type: 'button', ariaLabel: 'Previous day', textContent: '‹', onclick: () => go(-1) }),
            el('button', { id: 'hb-today', className: 'linkish', type: 'button', textContent: 'Today', onclick: () => { day = today(); paint(); } }),
            el('button', { id: 'hb-next', className: 'linkish', type: 'button', ariaLabel: 'Next day', textContent: '›', onclick: () => go(1) }))),
        el('ul', { id: 'hb-list', className: 'hb-list', ariaLabel: 'Habits for the day' }),
        el('div', { id: 'hb-none', className: 'empty', hidden: true }, 'No habits yet. Add one on the right, for example "Read 20 minutes".'),
        el('div', { id: 'hb-heat-box', className: 'hb-heat-box' }, el('h3', {}, 'The last 26 weeks'), el('div', { id: 'hb-heat', className: 'hb-heat', role: 'img' }), el('div', { id: 'hb-legend', className: 'hb-legend' })),
        el('ul', { id: 'hb-stats', className: 'hb-stats', ariaLabel: 'Habit statistics' })),
      el('aside', { className: 'hb-side', ariaLabel: 'Add a habit' },
        el('form', { id: 'hb-form', onsubmit: add },
          el('label', { className: 'hb-field' }, 'New habit', el('input', { id: 'hb-name', maxLength: 60, autocomplete: 'off', placeholder: 'Read 20 minutes' })),
          el('div', { className: 'hb-field' }, 'On these days', el('div', { id: 'hb-days', className: 'hb-days', role: 'group', ariaLabel: 'Days' })),
          el('div', { className: 'hb-presets' },
            ...[['Every day', [0, 1, 2, 3, 4, 5, 6]], ['Weekdays', [1, 2, 3, 4, 5]], ['Weekends', [0, 6]]].map(([label, set]) => el('button', { type: 'button', className: 'linkish', textContent: label, onclick: () => { picked = [...set]; paintDays(); } }))),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'hb-msg', className: 'hb-msg', role: 'status' }))));
    paintDays();
  }

  function paintDays() {
    $('hb-days').replaceChildren(...DAYS.map((d, i) => {
      const b = el('button', { type: 'button', textContent: d, ariaPressed: String(picked.includes(i)), ariaLabel: DAY_NAMES[i] });
      b.onclick = () => { picked = picked.includes(i) ? picked.filter((x) => x !== i) : [...picked, i]; paintDays(); };
      return b;
    }));
  }

  function go(n) {
    const next = shiftDay(day, n);
    if (next > today()) return; // no ticking the future
    day = next;
    paint();
  }

  function add(e) {
    e.preventDefault();
    const name = $('hb-name').value.trim();
    if (!name) return;
    if (!picked.length) { $('hb-msg').textContent = 'Pick at least one day.'; return; }
    data.habits.push({ id: crypto.randomUUID(), name, days: [...picked].sort(), created: today() });
    save();
    $('hb-name').value = '';
    $('hb-msg').textContent = `Added "${name}".`;
    paint();
    $('hb-name').focus();
  }

  function toggle(h) {
    const list = data.log[day] || [];
    data.log[day] = list.includes(h.id) ? list.filter((x) => x !== h.id) : [...list, h.id];
    if (!data.log[day].length) delete data.log[day];
    save();
    paint();
  }

  async function remove(h) {
    if (!(await ask(`Delete "${h.name}" and its history?`, 'Delete'))) return;
    data.habits = data.habits.filter((x) => x.id !== h.id);
    for (const d of Object.keys(data.log)) { data.log[d] = data.log[d].filter((x) => x !== h.id); if (!data.log[d].length) delete data.log[d]; }
    save();
    paint();
  }

  function paint() {
    const t = today();
    $('hb-title').textContent = day === t ? 'Today' : fmt(parseDay(day), { weekday: 'long', day: 'numeric', month: 'long' });
    $('hb-next').disabled = day >= t;
    const due = data.habits.filter((h) => habitDue(h, day));
    const sum = habitDay(data.habits, data.log, day);
    $('hb-list').replaceChildren(...due.map((h, i) => {
      const done = (data.log[day] || []).includes(h.id);
      const box = el('input', { type: 'checkbox', checked: done, ariaLabel: (done ? 'Mark not done: ' : 'Mark done: ') + h.name });
      box.onchange = () => toggle(h);
      const streak = habitStreak(h, data.log, t);
      return el('li', { className: done ? 'done' : '' }, box, el('span', { className: 'hb-name' }, h.name, el('small', {}, `${i + 1}`)), el('span', { className: 'hb-streak', title: 'Days in a row' }, streak ? `${streak} day${streak === 1 ? '' : 's'}` : ''));
    }));
    $('hb-none').hidden = data.habits.length > 0;
    $('hb-none').textContent = data.habits.length ? '' : $('hb-none').textContent;
    $('hb-list').ariaLabel = `Habits for the day, ${sum.done} of ${sum.total} done`;

    // the heatmap: weeks as columns, Sunday on top, the last column ends this week
    const lastSunday = shiftDay(t, -parseDay(t).getDay());
    const first = shiftDay(lastSunday, -(WEEKS - 1) * 7);
    const cells = [];
    for (let d = first; d <= shiftDay(lastSunday, 6); d = shiftDay(d, 1)) {
      const r = d > t ? null : habitDay(data.habits, data.log, d);
      const cell = el('i', { className: 'hb-cell' + (d === t ? ' today' : '') + (d === day ? ' sel' : ''), title: r ? `${fmt(parseDay(d), { day: 'numeric', month: 'short' })}: ${r.total ? `${r.done} of ${r.total}` : 'nothing due'}` : '' });
      if (r) cell.dataset.level = String(heatLevel(r)); else cell.style.visibility = 'hidden';
      if (r) cell.onclick = () => { day = d; paint(); };
      cells.push(cell);
    }
    $('hb-heat').replaceChildren(...cells);
    $('hb-heat').ariaLabel = `Habit completion for the last ${WEEKS} weeks`;
    $('hb-legend').replaceChildren('Less ', ...[0, 1, 2, 3, 4].map((l) => { const c = el('i', { className: 'hb-cell' }); c.dataset.level = String(l); return c; }), ' More');
    $('hb-heat-box').hidden = !data.habits.length;

    $('hb-stats').replaceChildren(...data.habits.map((h) => {
      const rate = habitRate(h, data.log, t, 30);
      const del = el('button', { type: 'button', className: 'hb-del', ariaLabel: 'Delete ' + h.name, textContent: '✕' });
      del.onclick = () => remove(h);
      return el('li', {}, el('b', {}, h.name), el('span', {}, `${habitStreak(h, data.log, t)} now · ${habitBest(h, data.log, t)} best · ${rate === null ? '—' : rate + '%'} of the last 30 days`), el('small', {}, h.days.length === 7 ? 'Every day' : h.days.map((d) => DAY_NAMES[d].slice(0, 3)).join(' ')), del);
    }));
  }

  const metricsFn = () => [{
    id: 'habits.week', label: 'Habits done in the last 7 days', unit: '%',
    get: () => { let done = 0, total = 0; for (let i = 0, d = today(); i < 7; i++, d = shiftDay(d, -1)) { const r = habitDay(data.habits, data.log, d); done += r.done; total += r.total; } return total ? Math.round(done / total * 100) : 0; },
  }];
  const group = { module: 'habits', title: 'Habits', items: [[['←', '→'], 'Previous or next day'], ['T', 'Today'], ['N', 'New habit'], [['1', '2', '…'], 'Tick the numbered habit']] };
  const commandFn = () => [{ label: 'Add a habit', hint: 'Habits', kind: 'Command', run: async () => { await setView('habits'); $('hb-name').focus(); } }];

  defineModule('habits', {
    summary() {
      if (!data.habits.length) return null;
      const t = today();
      const r = habitDay(data.habits, data.log, t);
      const best = Math.max(0, ...data.habits.map((h) => habitStreak(h, data.log, t)));
      return { label: 'Habits', value: `${r.done}/${r.total}`, unit: 'today', sub: best > 1 ? `Best streak ${best} days` : r.total === r.done && r.total ? 'All done' : 'Tick them off' };
    },
    start() {
      data = { habits: [], log: {}, ...(moduleData.habits || {}) };
      day = today();
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
    },
    stop() {
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      metricHooks.splice(metricHooks.indexOf(metricsFn), 1);
    },
    show() { if (day > today()) day = today(); paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('hb-name').focus(); }
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.code === 'KeyT') { day = today(); paint(); }
      else if (/^Digit[1-9]$/.test(e.code)) { document.querySelectorAll('#hb-list input')[+e.code.slice(5) - 1]?.click(); }
    },
  });
})();
