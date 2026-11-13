// Projects module: one page per project that gathers its tasks and its time. Loaded only while it is on.
// It keeps no list of its own: a project is a Time Tracker project ({ id, name, client, rate }), and a task joins one with `projectId`.
(() => {
  let selected = '';
  const root = () => $('projects-view');
  const time = () => registry.time;
  const list = () => time()?.projects?.() || [];
  const cur = () => moduleData.money?.cur || '฿';
  const nameOf = (id) => list().find((p) => p.id === id)?.name || '';
  const weekStart = () => timeRange('week', localDay(new Date())).since;
  const summaryOf = (p) => projectSummary(todos, time()?.entries?.() || [], p, weekStart());

  function build() {
    root().replaceChildren(
      el('section', { className: 'pj-main', ariaLabel: 'Project' }, el('div', { id: 'pj-detail' })),
      el('aside', { className: 'pj-side', ariaLabel: 'Projects' },
        el('h3', {}, 'Projects'),
        el('ul', { id: 'pj-list', className: 'pj-list' }),
        el('form', { id: 'pj-form', onsubmit: addProject },
          el('label', { className: 'pj-field' }, 'New project', el('input', { id: 'pj-name', maxLength: 60, autocomplete: 'off', placeholder: 'Website for Acme' })),
          el('label', { className: 'pj-field' }, 'Client', el('input', { id: 'pj-client', maxLength: 60, autocomplete: 'off', placeholder: 'Optional' })),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'pj-msg', className: 'pj-msg', role: 'status' }))));
  }

  function addProject(e) {
    e.preventDefault();
    const name = $('pj-name').value.trim();
    if (!name) { $('pj-msg').textContent = 'Give the project a name.'; return; }
    const p = time().addProject(name, $('pj-client').value.trim());
    $('pj-name').value = '';
    $('pj-client').value = '';
    selected = p.id;
    paint();
  }

  const timeText = (sec) => (sec ? hoursLabel(sec) : '0 min');

  async function addTask(e, p) {
    e.preventDefault();
    const input = $('pj-task');
    const title = input.value.trim();
    if (!title) return;
    input.value = '';
    await commit([...todos, { id: crypto.randomUUID(), title: title.slice(0, 200), due: null, remindBefore: null, repeat: null, noteId: null, projectId: p.id, done: false, createdAt: new Date().toISOString(), completedAt: null }]);
    paint();
    $('pj-task')?.focus();
  }

  function taskRow(t) {
    const box = el('input', { type: 'checkbox', ariaLabel: 'Mark done: ' + t.title });
    box.onchange = async () => { box.disabled = true; await commit(complete(t)); paint(); };
    return el('li', {}, el('label', { className: 'pj-task-row' }, box, el('span', {}, t.title)),
      ...(t.due ? [el('time', {}, fmt(t.due, { day: 'numeric', month: 'short' }))] : []));
  }

  function paintDetail() {
    const p = list().find((x) => x.id === selected);
    const box = $('pj-detail');
    if (!p) {
      box.replaceChildren(el('div', { className: 'pj-head' }, el('h2', {}, 'Projects')), el('p', { className: 'pj-empty' }, list().length ? 'Pick a project on the right.' : 'Add your first project on the right. Its tasks and its time will gather here.'));
      return;
    }
    const s = summaryOf(p);
    const open = todos.filter((t) => t.projectId === p.id && !t.done);
    const done = todos.filter((t) => t.projectId === p.id && t.done);
    const running = time().running?.();
    const here = running && running.project === p.id;
    const track = el('button', { id: 'pj-track', type: 'button', className: 'primary' + (here ? ' running' : '') }, el('span', {}, here ? 'Stop timer' : 'Track time'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'));
    track.onclick = () => { if (here) time().stopTimer(); else time().trackOn(p.id); paint(); };
    const stat = (label, value) => el('div', { className: 'pj-stat' }, el('small', {}, label), el('b', {}, value));
    const entries = (time().entries?.() || []).filter((e) => e.project === p.id).sort((a, b) => b.start.localeCompare(a.start)).slice(0, 5);
    box.replaceChildren(
      el('div', { className: 'pj-head' }, el('h2', {}, p.name), ...(p.client ? [el('p', {}, p.client)] : [])),
      el('div', { className: 'pj-progress', role: 'progressbar', ariaValueNow: String(s.pct), ariaValueMin: '0', ariaValueMax: '100', ariaLabel: 'Tasks done' }, el('i', { style: `width:${s.pct}%` })),
      el('p', { id: 'pj-count', className: 'pj-count' }, s.total ? `${s.done} of ${s.total} tasks done` : 'No tasks yet'),
      el('div', { className: 'pj-stats' }, stat('This week', timeText(s.week)), stat('In total', timeText(s.seconds)), ...(p.rate ? [stat('Earned', moneyLabel(s.amount, cur()))] : [])),
      track,
      el('h3', {}, 'Tasks'),
      el('form', { id: 'pj-taskform', className: 'pj-taskform', onsubmit: (e) => addTask(e, p) },
        el('input', { id: 'pj-task', maxLength: 200, autocomplete: 'off', placeholder: 'Add a task to this project', ariaLabel: 'Add a task to this project' }),
        el('button', { className: 'linkish', type: 'submit' }, 'Add')),
      el('ul', { id: 'pj-open', className: 'pj-tasks' }, ...open.map(taskRow)),
      ...(done.length ? [el('details', { className: 'pj-done' }, el('summary', {}, `${done.length} done`), el('ul', { className: 'pj-tasks' }, ...done.map((t) => el('li', { className: 'done' }, el('span', {}, '✓ ' + t.title)))))] : []),
      ...(entries.length ? [el('h3', {}, 'Recent time'), el('ul', { id: 'pj-time', className: 'pj-tasks' }, ...entries.map((e) => el('li', {}, el('span', {}, e.desc || 'No description'), el('time', {}, `${fmt(e.start, { day: 'numeric', month: 'short' })} · ${hoursLabel(secondsBetween(e.start, e.end))}`))))] : []));
  }

  function paint() {
    if (!list().some((p) => p.id === selected)) selected = list()[0]?.id || '';
    $('pj-list').replaceChildren(...list().map((p) => {
      const s = summaryOf(p);
      const b = el('button', { type: 'button', className: 'pj-pick', ariaPressed: String(p.id === selected) }, el('b', {}, p.name), el('small', {}, `${s.open} open · ${timeText(s.seconds)}`));
      b.onclick = () => { selected = p.id; paint(); };
      return el('li', {}, b);
    }));
    fillMenu();
    paintDetail();
  }

  // the task form's Project menu, and "◆ Project" on a task row
  const field = { fill: (t) => { fillMenu(); if ($('project-link')) $('project-link').value = nameOf(t.projectId) ? t.projectId : ''; }, read: (old) => ({ projectId: $('project-link') ? $('project-link').value || null : old?.projectId ?? null }) };
  const rowInfoFn = (t) => (t.projectId && nameOf(t.projectId) ? '◆ ' + nameOf(t.projectId) : '');
  const fillMenu = () => {
    const sel = $('project-link');
    if (!sel) return;
    const keep = sel.value;
    sel.replaceChildren(el('option', { value: '' }, 'None'), ...list().map((p) => el('option', { value: p.id }, p.name)));
    sel.value = list().some((p) => p.id === keep) ? keep : '';
  };
  const group = { module: 'projects', title: 'Projects', items: [['N', 'Add a task to the open project']] };
  const commandFn = () => list().map((p) => ({ label: 'Project: ' + p.name, hint: 'Projects', kind: 'Command', run: async () => { selected = p.id; await setView('projects'); } }));

  defineModule('projects', {
    summary() {
      const n = list().length;
      if (!n) return null;
      const open = todos.filter((t) => !t.done && nameOf(t.projectId)).length;
      return { label: 'Projects', value: String(n), unit: n === 1 ? 'project' : 'projects', sub: `${open} open task${open === 1 ? '' : 's'} in them` };
    },
    start() {
      build();
      const row = el('div', { className: 'row', id: 'project-row' }, el('label', { className: 'field' }, 'Project', el('select', { id: 'project-link' })));
      $('note-link').closest('.row').after(row);
      fillMenu();
      $('project-link').onpointerdown = fillMenu; // a project added in Time since the last look
      taskFields.push(field);
      rowInfo.push(rowInfoFn);
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      if (view === 'tasks') render();
    },
    stop() {
      $('project-row')?.remove();
      taskFields.splice(taskFields.indexOf(field), 1);
      rowInfo.splice(rowInfo.indexOf(rowInfoFn), 1);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      if (view === 'tasks') render();
    },
    show() { fillMenu(); paint(); },
    refresh() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN' && $('pj-task')) { e.preventDefault(); $('pj-task').focus(); }
    },
  });
})();
