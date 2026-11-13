// Time Tracker module: time your work by project, add it by hand, and report hours and earnings. Loaded only while it is on.
// Data: { projects: [{ id, name, client, rate }], entries: [{ id, project, desc, notes (what you did, up to 2000 characters), start, end }], running: { project, desc, notes, start } | null }.
(() => {
  let data = { projects: [], entries: [], running: null };
  let range = 'week';
  let ticker = null;
  let chip = null;
  const save = () => saveModule('time', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('time-view');
  const today = () => localDay(new Date());
  const cur = () => moduleData.money?.cur || '฿';
  const money = (n) => moneyLabel(n, cur());
  const iso = (d) => `${localDay(d)}T${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
  const nameOf = (id) => data.projects.find((p) => p.id === id)?.name || 'Deleted project';
  const elapsed = () => (data.running ? Math.max(0, Math.round((Date.now() - new Date(data.running.start).getTime()) / 1000)) : 0);

  function build() {
    chip = el('button', { id: 'time-chip', className: 'time-chip', type: 'button', hidden: true, onclick: () => setView('time') });
    $('theme').before(chip);
    root().replaceChildren(
      el('section', { className: 'tt-main', ariaLabel: 'Time' },
        el('div', { className: 'tt-head' }, el('h2', {}, 'Time')),
        el('div', { className: 'tt-timer' },
          el('div', { id: 'tt-clock', className: 'tt-clock', role: 'timer' }, '0:00:00'),
          el('form', { id: 'tt-form', className: 'tt-form', onsubmit: startStop },
            el('select', { id: 'tt-project', ariaLabel: 'Project' }),
            el('input', { id: 'tt-desc', maxLength: 120, autocomplete: 'off', placeholder: 'What are you working on?', ariaLabel: 'What you are working on', oninput: typing }),
            el('button', { id: 'tt-go', className: 'primary', type: 'submit' }, el('span', { id: 'tt-go-text' }, 'Start'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))),
          el('textarea', { id: 'tt-notes', className: 'tt-notes-in', rows: 2, maxLength: 2000, placeholder: 'Details: what you did (optional). You can write while the timer runs.', ariaLabel: 'Details of what you did', oninput: typing })),
        el('details', { className: 'tt-manual' }, el('summary', {}, 'Add time by hand'),
          el('form', { id: 'tt-add', className: 'tt-add', onsubmit: addManual },
            el('select', { id: 'tt-m-project', ariaLabel: 'Project' }),
            el('input', { id: 'tt-m-day', type: 'date', ariaLabel: 'Day' }), el('input', { id: 'tt-m-from', type: 'time', ariaLabel: 'From' }), el('input', { id: 'tt-m-to', type: 'time', ariaLabel: 'To' }), el('input', { id: 'tt-m-desc', maxLength: 120, placeholder: 'What', ariaLabel: 'What' }),
            el('button', { className: 'linkish', type: 'submit', textContent: 'Add' }), el('span', { id: 'tt-m-msg', className: 'tt-msg', role: 'status' }))),
        el('h3', {}, 'Today'),
        el('ul', { id: 'tt-today', className: 'tt-list', ariaLabel: 'Today' }),
        el('h3', {}, 'Report'),
        el('div', { className: 'tt-range', role: 'group', ariaLabel: 'Period' }, ...[['week', 'This week'], ['month', 'This month'], ['lastmonth', 'Last month']].map(([k, l]) => el('button', { id: 'tt-r-' + k, type: 'button', textContent: l, onclick: () => { range = k; paintReport(); } }))),
        el('div', { id: 'tt-report', className: 'tt-report' }),
        el('h3', { id: 'tt-log-h' }, 'Work log'),
        el('ul', { id: 'tt-log', className: 'tt-list', ariaLabel: 'Work log' }),
        el('div', { className: 'tt-foot' }, el('button', { id: 'tt-copy', type: 'button', className: 'linkish', textContent: 'Copy summary', onclick: copy }), el('button', { id: 'tt-save', type: 'button', className: 'linkish', textContent: 'Save as file', onclick: saveSummary }), el('span', { id: 'tt-copy-msg', className: 'tt-msg', role: 'status' }))),
      el('aside', { className: 'tt-side', ariaLabel: 'Projects' },
        el('h3', {}, 'Projects'),
        el('ul', { id: 'tt-projects', className: 'tt-plist' }),
        el('form', { id: 'tt-pform', onsubmit: addProject },
          field('New project', el('input', { id: 'tt-p-name', maxLength: 60, autocomplete: 'off', placeholder: 'Website for Acme' })),
          el('div', { className: 'tt-two' }, field('Client', el('input', { id: 'tt-p-client', maxLength: 60, autocomplete: 'off' })), field('Rate per hour', el('input', { id: 'tt-p-rate', inputMode: 'decimal', autocomplete: 'off', placeholder: 'Optional' }))),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'tt-p-msg', className: 'tt-msg', role: 'status' }))));
    $('tt-m-day').value = today();
    enhanceSelect($('tt-project'), { empty: 'Add a project first' }); // the app's own drop-down, not the native popup
    enhanceSelect($('tt-m-project'), { empty: 'Add a project first' });
  }
  const field = (label, ctl) => el('label', { className: 'tt-field' }, label, ctl);

  function addProject(e) {
    e.preventDefault();
    const name = $('tt-p-name').value.trim();
    const rate = $('tt-p-rate').value.trim() ? parseAmount($('tt-p-rate').value) : 0;
    if (!name || rate === null) { $('tt-p-msg').textContent = 'A name, and a rate above 0 or empty.'; return; }
    data.projects.push({ id: crypto.randomUUID(), name, client: $('tt-p-client').value.trim(), rate: rate || 0 });
    save();
    $('tt-p-name').value = '';
    $('tt-p-client').value = '';
    $('tt-p-rate').value = '';
    $('tt-p-msg').textContent = `Added ${name}.`;
    paint();
  }

  async function removeProject(p) {
    const n = data.entries.filter((e) => e.project === p.id).length;
    if (!(await ask(`Remove ${p.name}?${n ? ` Its ${n} time entr${n === 1 ? 'y stays' : 'ies stay'} in the history as "Deleted project".` : ''}`, 'Remove'))) return;
    if (data.running && data.running.project === p.id) data.running = null;
    data.projects = data.projects.filter((x) => x.id !== p.id);
    save();
    paint();
  }

  // while the timer runs, what is typed in the two boxes goes into the running entry (saved a moment after typing stops)
  let typeTimer;
  function typing() {
    if (!data.running) return;
    clearTimeout(typeTimer);
    typeTimer = setTimeout(() => { data.running.desc = $('tt-desc').value.trim(); data.running.notes = $('tt-notes').value.trim(); save(); }, 500);
  }

  function startStop(e) {
    e.preventDefault();
    if (data.running) {
      const r = data.running;
      data.entries.push({ id: crypto.randomUUID(), project: r.project, desc: r.desc, notes: r.notes || '', start: r.start, end: iso(new Date()), ...(r.task ? { task: r.task } : {}) });
      data.running = null;
      $('tt-notes').value = ''; // the next one starts with an empty box
    } else {
      const project = $('tt-project').value;
      if (!project) { $('tt-m-msg').textContent = 'Add a project first (right).'; return; }
      data.running = { project, desc: $('tt-desc').value.trim(), notes: $('tt-notes').value.trim(), start: iso(new Date()) };
    }
    save();
    paint();
  }

  function addManual(e) {
    e.preventDefault();
    const project = $('tt-m-project').value;
    const day = $('tt-m-day').value, from = $('tt-m-from').value, to = $('tt-m-to').value;
    const why = !project ? 'Add a project first (right), then choose it here.' : !day ? 'Pick the day.' : !from || !to ? 'Fill in the start and the end.' : to <= from ? 'The end must be after the start.' : '';
    if (why) { $('tt-m-msg').textContent = why; return; }
    data.entries.push({ id: crypto.randomUUID(), project, desc: $('tt-m-desc').value.trim(), start: `${day}T${from}:00`, end: `${day}T${to}:00` });
    save();
    $('tt-m-desc').value = '';
    $('tt-m-msg').textContent = 'Added.';
    paint();
  }

  // One entry, in Today and in the Work log: its project, what it was, when, how long, and the details of what you did.
  // The pencil opens a box for the details (saved as you type; Esc or leaving it closes it).
  const editing = new Set();
  function entryRow(e, dayLabel, list) {
    const key = list + e.id; // the same entry can be open in Today and in the log at once, so each list has its own state
    const del = el('button', { type: 'button', className: 'tt-x', ariaLabel: 'Remove this entry', textContent: '✕' });
    del.onclick = () => { data.entries = data.entries.filter((x) => x.id !== e.id); save(); paint(); };
    const open = editing.has(key);
    const pen = el('button', { type: 'button', className: 'tt-pen' + (e.notes ? ' has' : ''), ariaLabel: e.notes ? 'Edit the details of this entry' : 'Write what you did in this entry', ariaExpanded: String(open), title: e.notes ? 'Edit the details' : 'Write what you did', textContent: '✎' });
    pen.onclick = () => { if (open) editing.delete(key); else editing.add(key); paint(); if (!open) document.querySelector(`#${list} [data-entry="${e.id}"] textarea`)?.focus(); };
    const line = el('div', { className: 'tt-line' }, el('span', {}, el('b', {}, nameOf(e.project)), el('small', {}, e.desc || 'No description')), el('time', {}, `${dayLabel ? dayLabel + ' ' : ''}${e.start.slice(11, 16)}–${e.end.slice(11, 16)}`), el('b', { className: 'tt-dur' }, hoursLabel(secondsBetween(e.start, e.end))), pen, del);
    let more = [];
    if (open) {
      const box = el('textarea', { className: 'tt-notes-in', rows: 3, maxLength: 2000, value: e.notes || '', placeholder: 'What did you do?', ariaLabel: 'Details of this entry' });
      let t;
      box.oninput = () => { e.notes = box.value.trim(); clearTimeout(t); t = setTimeout(save, 500); };
      box.onblur = () => { clearTimeout(t); save(); editing.delete(key); paint(); };
      box.onkeydown = (k) => { if (k.key === 'Escape') { k.preventDefault(); k.stopPropagation(); box.blur(); } };
      more = [box];
    } else if (e.notes) more = [el('p', { className: 'tt-notes' }, e.notes)];
    const li = el('li', {}, line, ...more);
    li.dataset.entry = e.id;
    return li;
  }

  function paint() {
    const keep = $('tt-project').value;
    $('tt-project').replaceChildren(...data.projects.map((p) => el('option', { value: p.id }, p.name + (p.client ? ' · ' + p.client : ''))));
    $('tt-project').value = data.running ? data.running.project : data.projects.some((p) => p.id === keep) ? keep : data.projects[0]?.id || '';
    $('tt-project').disabled = !!data.running;
    // the form for time by hand has its own project, starting on the one chosen above
    const keepManual = $('tt-m-project').value;
    $('tt-m-project').replaceChildren(...data.projects.map((p) => el('option', { value: p.id }, p.name + (p.client ? ' · ' + p.client : ''))));
    $('tt-m-project').value = data.projects.some((p) => p.id === keepManual) ? keepManual : $('tt-project').value;
    $('tt-go-text').textContent = data.running ? 'Stop' : 'Start';
    $('tt-go').classList.toggle('running', !!data.running);
    if (data.running && document.activeElement !== $('tt-desc') && document.activeElement !== $('tt-notes')) { $('tt-desc').value = data.running.desc; $('tt-notes').value = data.running.notes || ''; }
    // open tasks to pick from, when Tasks is on
    let list = $('tt-tasks');
    if (!list) { list = el('datalist', { id: 'tt-tasks' }); root().append(list); $('tt-desc').setAttribute('list', 'tt-tasks'); }
    list.replaceChildren(...(started.has('tasks') ? todos.filter((t) => !t.done).slice(0, 20).map((t) => el('option', { value: t.title })) : []));
    $('tt-projects').replaceChildren(...data.projects.map((p) => {
      const del = el('button', { type: 'button', className: 'tt-x', ariaLabel: 'Remove ' + p.name, textContent: '✕' });
      del.onclick = () => removeProject(p);
      return el('li', {}, el('span', {}, el('b', {}, p.name), el('small', {}, [p.client, p.rate ? money(p.rate) + ' an hour' : ''].filter(Boolean).join(' · '))), del);
    }));
    const t = today();
    const mine = data.entries.filter((e) => localDay(new Date(e.start)) === t).sort((a, b) => b.start.localeCompare(a.start));
    $('tt-today').replaceChildren(...mine.map((e) => entryRow(e, '', 'tt-today')));
    paintClock();
    paintReport();
  }

  function paintClock() {
    const s = elapsed();
    $('tt-clock').textContent = clockHMS(s);
    chip.hidden = !data.running;
    if (data.running) chip.textContent = `● ${clockHMS(s)} ${nameOf(data.running.project)}`;
  }

  const report = () => { const r = timeRange(range, today()); return { ...r, ...timeReport(data.entries, data.projects, r.since, r.until) }; };

  function paintReport() {
    for (const k of ['week', 'month', 'lastmonth']) $('tt-r-' + k).ariaPressed = String(k === range);
    const r = report();
    const showAmount = r.rows.some((x) => x.amount > 0);
    $('tt-report').replaceChildren(...(r.rows.length
      ? [...r.rows.map((x) => el('div', { className: 'tt-row' }, el('span', {}, el('b', {}, x.name), x.client ? el('small', {}, x.client) : ''), el('span', {}, hoursLabel(x.seconds)), el('span', {}, x.amount ? money(x.amount) : '—'))),
        el('div', { className: 'tt-row tt-total' }, el('span', {}, 'Total'), el('span', {}, hoursLabel(r.seconds)), el('span', {}, showAmount ? money(r.amount) : ''))]
      : [el('div', { className: 'empty' }, 'No time recorded in this period.')]));
    $('tt-copy').hidden = $('tt-save').hidden = !r.rows.length;
    const log = timeLog(data.entries, data.projects, r.since, r.until);
    $('tt-log-h').hidden = !log.length;
    $('tt-log').replaceChildren(...log.map((x) => entryRow(data.entries.find((e) => e.id === x.id), fmt(parseDay(x.day), { day: 'numeric', month: 'short' }), 'tt-log')));
  }

  const summaryText = () => {
    const r = report();
    const label = `${fmt(parseDay(r.since), { day: 'numeric', month: 'short' })} to ${fmt(parseDay(r.until), { day: 'numeric', month: 'short', year: 'numeric' })}`;
    return reviewText(label, [{ title: 'Time', lines: [...r.rows.map((x) => `${x.name}${x.client ? ' (' + x.client + ')' : ''}: ${hoursLabel(x.seconds)}${x.amount ? ', ' + money(x.amount) : ''}`), `Total: ${hoursLabel(r.seconds)}${r.amount ? ', ' + money(r.amount) : ''}`] },
      { title: 'Work log', lines: timeLog(data.entries, data.projects, r.since, r.until).map((x) => timeLogLine(x, fmt(parseDay(x.day), { day: 'numeric', month: 'short' }))) }]);
  };

  function saveSummary() {
    invoke('export_text', { name: 'Vermil time', text: summaryText() }).then((p) => { $('tt-copy-msg').textContent = 'Saved ' + p; }, (e) => { $('tt-copy-msg').textContent = 'Could not save: ' + e; });
  }

  function copy() {
    const text = summaryText();
    Promise.race([navigator.clipboard.writeText(text), new Promise((_, no) => setTimeout(() => no(new Error('timeout')), 1500))]).then(() => { $('tt-copy-msg').textContent = 'Copied'; }, () => { $('tt-copy-msg').textContent = 'Could not copy'; });
  }

  // Track / Stop on a task row: the task's title becomes the description; the project is the last one used (or the first).
  const trackingTask = (t) => data.running && data.running.task === t.id;
  function stopRunning() {
    const r = data.running;
    data.entries.push({ id: crypto.randomUUID(), project: r.project, desc: r.desc, notes: r.notes || '', start: r.start, end: iso(new Date()), ...(r.task ? { task: r.task } : {}) });
    data.running = null;
    $('tt-notes').value = '';
  }
  // the task's own project when it has one, else the one in use, else the last one used, else the first
  function trackTask(t) {
    const stopping = trackingTask(t);
    const has = (id) => id && data.projects.some((p) => p.id === id);
    const project = [t.projectId, data.running?.project, data.entries.at(-1)?.project, data.projects[0]?.id].find(has);
    if (!project) { tell('Add a project in Time first, then you can track a task.'); return; }
    if (data.running) stopRunning();
    if (!stopping) data.running = { project, desc: t.title.slice(0, 120), notes: '', start: iso(new Date()), task: t.id };
    $('tt-desc').value = data.running ? data.running.desc : '';
    save();
    paint();
    if (view === 'tasks') render();
  }
  // for Projects: the same project list, and start or stop the timer on a project
  function trackOn(id) {
    if (!data.projects.some((p) => p.id === id)) return;
    if (data.running) stopRunning();
    data.running = { project: id, desc: '', notes: '', start: iso(new Date()) };
    $('tt-desc').value = '';
    save();
    paint();
  }
  function stopTimer() {
    if (!data.running) return;
    stopRunning();
    save();
    paint();
  }
  const rowToolFn = (t) => {
    const b = el('button', { type: 'button', className: 'act-track', textContent: trackingTask(t) ? 'Stop timer' : 'Track' });
    b.onclick = () => trackTask(t);
    return b;
  };
  const rowInfoFn = (t) => (trackingTask(t) ? '● tracking' : '');

  const weekSeconds = () => { const w = timeRange('week', today()); return timeReport(data.entries, data.projects, w.since, w.until).seconds; };
  const metricsFn = () => [{ id: 'time.week', label: 'Hours tracked this week', unit: 'h', get: () => Math.round(weekSeconds() / 360) / 10 }];
  const group = { module: 'time', title: 'Time Tracker', items: [['Enter', 'Start or stop the timer (in the field)'], ['N', 'Focus the description'], ['K', 'Track time on the selected task (in Tasks)']] };
  const commandFn = () => [{ label: data.running ? 'Stop the time tracker' : 'Start the time tracker', hint: 'Time', kind: 'Command', run: async () => { await setView('time'); if (data.running || data.projects.length) $('tt-form').requestSubmit(); } }];

  defineModule('time', {
    projects: () => data.projects,
    entries: () => data.entries,
    running: () => data.running,
    addProject(name, client) {
      const p = { id: crypto.randomUUID(), name, client: client || '', rate: 0 };
      data.projects.push(p);
      save();
      paint();
      return p;
    },
    trackOn,
    stopTimer,
    summary() {
      if (data.running) return { label: 'Tracking', value: clockHMS(elapsed()), unit: '', sub: `${nameOf(data.running.project)}${data.running.desc ? ' · ' + data.running.desc : ''}` };
      const secs = data.entries.filter((e) => localDay(new Date(e.start)) === today()).reduce((n, e) => n + secondsBetween(e.start, e.end), 0);
      return data.projects.length ? { label: 'Time today', value: hoursLabel(secs), unit: '', sub: `${hoursLabel(weekSeconds())} this week` } : null;
    },
    daily() { // for Insights
      const byDay = {};
      for (const e of data.entries) { const d = localDay(new Date(e.start)); byDay[d] = (byDay[d] || 0) + secondsBetween(e.start, e.end) / 3600; }
      return [{ id: 'time.hours', label: 'tracked work', byDay, zero: true }];
    },
    weekly(since, until) {
      const r = timeReport(data.entries, data.projects, since, until);
      return { title: 'Time', lines: r.rows.length ? [...r.rows.slice(0, 4).map((x) => `${x.name}: ${hoursLabel(x.seconds)}${x.amount ? ' (' + money(x.amount) + ')' : ''}`), `Total ${hoursLabel(r.seconds)}`] : ['No time tracked'] };
    },
    start() {
      data = { projects: [], entries: [], running: null, ...(moduleData.time || {}) };
      range = 'week';
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
      rowTools.push(rowToolFn);
      rowInfo.push(rowInfoFn);
      ticker = setInterval(paintClock, 1000);
    },
    stop() {
      clearInterval(ticker);
      chip?.remove();
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      metricHooks.splice(metricHooks.indexOf(metricsFn), 1);
      rowTools.splice(rowTools.indexOf(rowToolFn), 1);
      rowInfo.splice(rowInfo.indexOf(rowInfoFn), 1);
      if (view === 'tasks') render();
    },
    show() { paint(); },
    refresh: undefined,
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('tt-desc').focus(); }
    },
  });
})();
