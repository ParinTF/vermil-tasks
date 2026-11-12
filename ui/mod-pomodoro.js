// Focus timer module (Pomodoro): work and break countdowns tied to a task, and the focused time added up per task.
// Loaded only while the module is switched on (see modules.js). Data: { work, rest, sessions: [{ task, title, day, min }], run }.
(() => {
  let data = { work: 25, rest: 5, sessions: [], run: null };
  let ticker = null;
  let chip = null;
  let dlg = null;
  let totals = {}; // task id -> minutes focused, all time

  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, Math.round(Number(n)) || lo));
  const save = () => saveModule('pomodoro', data).catch((e) => console.error('pomodoro save', e));
  const taskTitle = (id) => todos.find((t) => t.id === id)?.title || '';
  const left = (r) => (r.end ? r.end - Date.now() : r.left);
  const refresh = () => { totals = focusSummary(data.sessions, localDay(new Date())).total; if (view === 'tasks') render(); };

  function log(task, min) {
    if (min < 1) return;
    data.sessions.push({ task: task || null, title: taskTitle(task), day: localDay(new Date()), min });
    if (data.sessions.length > 2000) data.sessions.splice(0, data.sessions.length - 2000);
    refresh();
  }

  const toast = (title, text) => invoke('toast', { title, text }).catch(() => {});

  function begin(task) {
    data.work = clamp($('fo-work')?.value ?? data.work, 1, 180);
    data.rest = clamp($('fo-rest')?.value ?? data.rest, 1, 60);
    data.run = { phase: 'work', task: task || null, end: Date.now() + data.work * 60000, left: null, planned: data.work };
    save();
    paint();
  }

  function pauseOrResume() {
    const r = data.run;
    if (!r) return;
    if (r.end) { r.left = r.end - Date.now(); r.end = null; } else { r.end = Date.now() + r.left; r.left = null; }
    save();
    paint();
  }

  function stop() {
    const r = data.run;
    if (r && r.phase === 'work') log(r.task, Math.round((r.planned * 60000 - Math.max(0, left(r))) / 60000)); // the minutes actually spent
    data.run = null;
    save();
    paint();
  }

  function finish() {
    const r = data.run;
    if (r.phase === 'work') {
      log(r.task, r.planned);
      toast('Focus done', `${taskTitle(r.task) || 'Nice work'}. Take ${data.rest} minutes.`);
      data.run = { phase: 'rest', task: r.task, end: Date.now() + data.rest * 60000, left: null, planned: data.rest };
    } else {
      toast('Break over', 'Ready for the next round?');
      data.run = null;
    }
    save();
    paint();
  }

  // once a second: repaint the clock, and end the phase when its time is up (timestamps, so a throttled timer cannot drift)
  function tick() {
    const r = data.run;
    if (r && r.end && r.end <= Date.now()) finish(); else paint();
  }

  function paint() {
    const r = data.run;
    chip.hidden = !r;
    if (r) {
      chip.textContent = `${r.phase === 'work' ? '●' : '☕'} ${clock(left(r))}${r.end ? '' : ' paused'}${r.task && r.phase === 'work' ? ' · ' + taskTitle(r.task) : ''}`;
      chip.title = (r.phase === 'work' ? 'Focus' : 'Break') + ' timer';
    }
    if (dlg?.open) paintDialog();
  }

  function paintDialog() {
    const r = data.run;
    $('fo-clock').textContent = r ? clock(left(r)) : clock(data.work * 60000);
    $('fo-phase').textContent = r ? (r.phase === 'work' ? 'Focus' : 'Break') + (r.end ? '' : ' · paused') : 'Ready';
    $('fo-start').hidden = !!r;
    $('fo-pause').hidden = !r;
    $('fo-pause').textContent = r && !r.end ? 'Resume' : 'Pause';
    $('fo-stop').hidden = !r;
    for (const id of ['fo-task', 'fo-work', 'fo-rest']) $(id).disabled = !!r;
    const s = focusSummary(data.sessions, localDay(new Date()));
    $('fo-sum').textContent = `Today ${minutesLabel(s.todayMin)} · ${s.todayCount} ${s.todayCount === 1 ? 'session' : 'sessions'} · last 7 days ${minutesLabel(s.weekMin)}`;
    $('fo-by').replaceChildren(...s.byTask.map((x) => el('li', {}, el('span', {}, x.title || 'No task'), el('time', {}, minutesLabel(x.min)))));
  }

  function openFocus(taskId) {
    if (document.querySelector('dialog[open]')) return;
    const select = $('fo-task');
    select.replaceChildren(el('option', { value: '' }, 'No task'), ...todos.filter((t) => !t.done).map((t) => el('option', { value: t.id }, t.title.slice(0, 60))));
    select.value = data.run ? data.run.task || '' : taskId || '';
    $('fo-work').value = data.work;
    $('fo-rest').value = data.rest;
    paintDialog();
    dlg.showModal();
  }

  function build() {
    chip = el('button', { id: 'focus-chip', className: 'focus-chip', type: 'button', hidden: true });
    chip.onclick = () => openFocus();
    $('theme').before(chip);
    const num = (id, label, v) => el('label', { className: 'fo-num' }, label, el('input', { id, type: 'number', min: 1, max: 180, value: v }), 'min');
    dlg = el('dialog', { id: 'focus-dlg', className: 'focus', ariaLabel: 'Focus timer' },
      el('h2', {}, 'Focus'),
      el('label', { className: 'fo-field' }, 'Task', el('select', { id: 'fo-task' })),
      el('div', { className: 'fo-row' }, num('fo-work', 'Work', data.work), num('fo-rest', 'Break', data.rest)),
      el('div', { id: 'fo-clock', className: 'fo-clock', role: 'timer' }),
      el('div', { id: 'fo-phase', className: 'fo-phase' }),
      el('div', { className: 'actions' },
        el('button', { id: 'fo-start', className: 'primary', type: 'button', onclick: () => begin($('fo-task').value) }, 'Start'),
        el('button', { id: 'fo-pause', className: 'ghost', type: 'button', onclick: pauseOrResume }, 'Pause'),
        el('button', { id: 'fo-stop', className: 'ghost', type: 'button', onclick: stop }, 'Stop'),
        el('button', { className: 'ghost', type: 'button', onclick: () => dlg.close() }, 'Close')),
      el('div', { id: 'fo-sum', className: 'fo-sum' }),
      el('ul', { id: 'fo-by', className: 'fo-by' }));
    dlg.onclick = (e) => { if (e.target === dlg) dlg.close(); };
    document.body.append(dlg);
  }

  const rowInfoFn = (t) => (totals[t.id] ? minutesLabel(totals[t.id]) + ' focused' : '');
  const rowToolFn = (t) => {
    const b = el('button', { type: 'button', className: 'act-focus', textContent: 'Focus' });
    b.onclick = () => openFocus(t.id);
    return b;
  };
  const sumMin = (since) => data.sessions.filter((s) => s.day >= since).reduce((n, s) => n + s.min, 0);
  const metricsFn = () => [
    { id: 'focus.week', label: 'Focus minutes in the last 7 days', unit: 'min', get: () => sumMin(shiftDay(localDay(new Date()), -6)) },
    { id: 'focus.month', label: 'Focus minutes this month', unit: 'min', get: () => sumMin(localDay(new Date()).slice(0, 8) + '01') },
  ];
  const group = { module: 'pomodoro', title: 'Focus timer', items: [['F', 'Focus timer on the selected task (in Tasks)']] };
  const commandFn = () => [{ label: 'Focus timer…', hint: 'F on a task', kind: 'Command', run: () => openFocus(selectedId || '') }];

  defineModule('pomodoro', {
    weekly(since, until) {
      const list = data.sessions.filter((s) => s.day >= since && s.day <= until);
      if (!list.length) return { title: 'Focus', lines: ['No focus sessions'] };
      const by = {};
      for (const s of list) by[s.title || 'No task'] = (by[s.title || 'No task'] || 0) + s.min;
      const top = Object.entries(by).sort((a, b) => b[1] - a[1])[0];
      return { title: 'Focus', lines: [`${minutesLabel(list.reduce((n, s) => n + s.min, 0))} in ${list.length} session${list.length === 1 ? '' : 's'}`, `Most on: ${top[0]} (${minutesLabel(top[1])})`] };
    },
    summary() {
      const s = focusSummary(data.sessions, localDay(new Date()));
      return { label: 'Focus', value: minutesLabel(s.todayMin), unit: 'today', sub: `${s.todayCount} ${s.todayCount === 1 ? 'session' : 'sessions'} · ${minutesLabel(s.weekMin)} in 7 days` };
    },
    async start() {
      data = { ...data, ...(moduleData.pomodoro || {}) };
      build();
      rowInfo.push(rowInfoFn);
      rowTools.push(rowToolFn);
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
      const r = data.run;
      if (r && r.end && r.end <= Date.now()) data.run = null; // it ended while the app was closed
      ticker = setInterval(tick, 1000);
      refresh();
      paint();
    },
    stop() {
      clearInterval(ticker);
      for (const [list, fn] of [[rowInfo, rowInfoFn], [rowTools, rowToolFn], [commandHooks, commandFn], [shortcutGroups, group], [metricHooks, metricsFn]]) list.splice(list.indexOf(fn), 1);
      chip?.remove();
      dlg?.remove();
      if (view === 'tasks') render();
    },
  });
})();
