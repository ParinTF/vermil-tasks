// Automations module: rules of the form "when X happens, do Y", run while the app is open (it lives in the tray).
// Data: { rules: [{ id, on, when, do, last, runs, at, err }] } (shapes in logic.js: autoDaily, autoMatches, autoMetric).
// Events come from the core's emit() (task done, bill paid, budget over); times, overdue tasks and numbers are checked every 30 s.
(() => {
  let data = { rules: [] };
  let timer = null;
  let busy = false; // while an action runs, events it causes are ignored, so a rule cannot trigger itself
  let overdueSeen = null; // ids of tasks already seen overdue; the first look only remembers them
  const stamps = {}; // rule id -> recent run times, for the runaway guard
  const save = () => saveModule('auto', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('auto-view');
  const today = () => localDay(new Date());
  const DAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

  const field = (label, ctl, id) => el('label', { className: 'au-field', id }, label, ctl);
  const opts = (list) => list.map(([v, l]) => el('option', { value: v }, l));

  function build() {
    root().replaceChildren(
      el('section', { className: 'au-main', ariaLabel: 'Automations' },
        el('div', { className: 'au-head' }, el('h2', {}, 'Automations')),
        el('ul', { id: 'au-list', className: 'au-list', ariaLabel: 'Rules' }),
        el('div', { id: 'au-none', className: 'empty', hidden: true }, 'No rules yet. Pick something that happens, then what Vermil should do about it.')),
      el('aside', { className: 'au-side', ariaLabel: 'Add a rule' },
        el('form', { id: 'au-form', onsubmit: add },
          field('When', el('select', { id: 'au-when', onchange: sync })),
          field('Time', el('input', { id: 'au-time', type: 'time', value: '08:00' }), 'au-f-time'),
          el('div', { id: 'au-f-days', className: 'au-days', role: 'group', ariaLabel: 'Days' }, ...DAY_ORDER.map((d) => el('label', { className: 'au-day' }, el('input', { type: 'checkbox', className: 'au-dayc', value: String(d), checked: true }), AUTO_WEEK[d]))),
          field('Only if it mentions (optional)', el('input', { id: 'au-wtext', maxLength: 60, autocomplete: 'off', placeholder: 'rent' }), 'au-f-wtext'),
          field('Number', el('select', { id: 'au-metric' }), 'au-f-metric'),
          el('div', { id: 'au-f-cmp', className: 'au-two' },
            field('Goes', el('select', { id: 'au-op' }, ...opts([['above', 'above'], ['below', 'below']]))),
            field('Value', el('input', { id: 'au-value', inputMode: 'decimal', autocomplete: 'off', placeholder: '0' }))),
          field('Then', el('select', { id: 'au-do', onchange: sync })),
          field('Text', el('input', { id: 'au-dtext', maxLength: 120, autocomplete: 'off', placeholder: 'Review {title}' }), 'au-f-dtext'),
          el('div', { id: 'au-f-due', className: 'au-two' },
            field('Due', el('select', { id: 'au-due' }, ...opts([['', 'No date'], ['today', 'Today'], ['tomorrow', 'Tomorrow']]))),
            field('At', el('input', { id: 'au-dtime', type: 'time', value: '09:00' }))),
          el('div', { id: 'au-f-money', className: 'au-two' },
            field('Amount', el('input', { id: 'au-amount', inputMode: 'decimal', autocomplete: 'off', placeholder: '0' })),
            field('Category', el('input', { id: 'au-cat', maxLength: 30, autocomplete: 'off', placeholder: 'Other' }))),
          field('Open', el('select', { id: 'au-view' }), 'au-f-view'),
          el('p', { id: 'au-fine', className: 'au-fine' }, 'In the text, {title} is the task, bill or category that triggered the rule.'),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add rule'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'au-msg', className: 'au-msg', role: 'status' }))));
    fillSelects();
    sync();
    mobileSheet(root(), root().querySelector('.au-side'), 'New rule');
  }

  const metrics = () => metricHooks.flatMap((f) => f());
  // only offer what works right now: an action needs its module on, a number needs the module that keeps it
  function fillSelects() {
    const keep = [$('au-when').value, $('au-do').value, $('au-metric').value, $('au-view').value];
    const have = { task: started.has('tasks'), shop: started.has('shopping'), expense: started.has('money'), toast: true, open: true };
    const events = { daily: true, 'task-done': started.has('tasks'), overdue: started.has('tasks'), 'bill-paid': started.has('bills'), 'over-budget': started.has('money'), metric: metrics().length > 0 };
    $('au-when').replaceChildren(...opts(Object.entries(AUTO_WHEN).filter(([k]) => events[k])));
    $('au-do').replaceChildren(...opts(Object.entries(AUTO_DO).filter(([k]) => have[k])));
    $('au-metric').replaceChildren(...metrics().map((m) => el('option', { value: m.id }, m.label)));
    $('au-view').replaceChildren(...MODULES.filter((m) => m.view && started.has(m.id)).map((m) => el('option', { value: m.id }, m.view)));
    [$('au-when'), $('au-do'), $('au-metric'), $('au-view')].forEach((s, i) => { if ([...s.options].some((o) => o.value === keep[i])) s.value = keep[i]; });
    sync();
  }

  // show only the fields the chosen "When" and "Then" need
  function sync() {
    const w = $('au-when').value, d = $('au-do').value;
    const show = { 'au-f-time': w === 'daily', 'au-f-days': w === 'daily', 'au-f-wtext': ['task-done', 'bill-paid', 'over-budget', 'overdue'].includes(w), 'au-f-metric': w === 'metric', 'au-f-cmp': w === 'metric',
      'au-f-dtext': ['task', 'shop', 'expense', 'toast'].includes(d), 'au-f-due': d === 'task', 'au-f-money': d === 'expense', 'au-f-view': d === 'open', 'au-fine': w !== 'daily' && w !== 'metric' };
    for (const [id, on] of Object.entries(show)) $(id).hidden = !on;
  }

  function add(e) {
    e.preventDefault();
    const msg = (t) => { $('au-msg').textContent = t; };
    const w = { type: $('au-when').value };
    if (!w.type || !$('au-do').value) return msg('Switch on a module this rule can use first.');
    if (w.type === 'daily') {
      w.time = $('au-time').value;
      w.days = [...document.querySelectorAll('.au-dayc')].filter((c) => c.checked).map((c) => Number(c.value));
      if (!w.time || !w.days.length) return msg('Pick a time and at least one day.');
    } else if (w.type === 'metric') {
      const m = metrics().find((x) => x.id === $('au-metric').value);
      const v = Number($('au-value').value.replace(/,/g, ''));
      if (!m || !$('au-value').value.trim() || !Number.isFinite(v)) return msg('Pick a number and type a value.');
      Object.assign(w, { metric: m.id, label: m.label, op: $('au-op').value, value: v });
    } else w.text = $('au-wtext').value.trim();
    const d = { type: $('au-do').value };
    if (['task', 'shop', 'expense', 'toast'].includes(d.type)) {
      d.text = $('au-dtext').value.trim();
      if (!d.text && d.type !== 'expense') return msg('Type the text to use.');
    }
    if (d.type === 'task') { d.due = $('au-due').value; d.time = $('au-dtime').value; }
    if (d.type === 'expense') {
      d.amount = parseAmount($('au-amount').value);
      d.cat = $('au-cat').value.trim() || 'Other';
      if (d.amount === null) return msg('An amount above 0.');
    }
    if (d.type === 'open') d.view = $('au-view').value;
    data.rules.push({ id: crypto.randomUUID(), on: true, when: w, do: d, last: '', runs: 0, at: '', err: '' });
    save();
    for (const id of ['au-wtext', 'au-value', 'au-dtext', 'au-amount', 'au-cat']) $(id).value = '';
    msg('Rule added.');
    paint();
    tick();
  }

  async function remove(r) {
    if (!(await ask(`Remove this rule?\n${autoSummary(r)}`, 'Remove'))) return;
    data.rules = data.rules.filter((x) => x.id !== r.id);
    save();
    paint();
  }

  // do what the rule says; ctx fills {title}, {name}, {amount}, {cat}
  async function run(r, ctx = {}) {
    if (!autoAllowed((stamps[r.id] ||= []), Date.now())) { r.err = 'Paused: it ran too often in a minute.'; save(); return paint(); }
    const d = r.do, text = autoFill(d.text, ctx);
    busy = true;
    r.err = '';
    try {
      await doAction({ task: { type: 'task', title: text, due: autoDue(d.due, d.time, new Date()) }, shop: { type: 'shop', name: text }, expense: { type: 'expense', amount: d.amount, cat: d.cat, note: text }, toast: { type: 'toast', title: text }, open: { type: 'open', view: d.view } }[d.type] || { type: '?' });
      r.runs = (r.runs || 0) + 1;
      r.at = new Date().toISOString();
    } catch (e) {
      r.err = String(e.message || e);
    } finally {
      busy = false;
    }
    save();
    paint();
  }

  function onEvent(type, ctx) {
    if (busy) return;
    for (const r of data.rules) if (r.on && autoMatches(r, type, ctx)) run(r, ctx);
  }

  // every 30 s: rules for a time of day or a number, and tasks that have just become overdue
  function tick() {
    const now = new Date();
    for (const r of data.rules) {
      if (!r.on) continue;
      if (autoDaily(r, now)) { r.last = today(); run(r); }
      else if (r.when.type === 'metric') {
        const m = metrics().find((x) => x.id === r.when.metric);
        if (m && autoMetric(r, m.get(), today())) { r.last = today(); run(r, { amount: m.get() }); }
      }
    }
    if (started.has('tasks')) {
      const late = todos.filter((t) => !t.done && !isLater(t) && t.due && new Date(t.due) < now);
      const fresh = late.filter((t) => overdueSeen && !overdueSeen.has(t.id));
      overdueSeen = new Set(late.map((t) => t.id)); // shortcut: not kept across restarts, so tasks that went overdue while the app was closed do not fire
      for (const t of fresh) onEvent('overdue', { title: t.title });
    }
  }

  function paint() {
    if (!$('au-list')) return;
    fillSelects();
    $('au-list').replaceChildren(...data.rules.map((r) => {
      const on = el('input', { type: 'checkbox', checked: r.on, ariaLabel: 'Rule on or off' });
      on.onchange = () => { r.on = on.checked; save(); paint(); };
      const now = el('button', { type: 'button', className: 'linkish au-now', textContent: 'Run now', ariaLabel: 'Run this rule now' });
      now.onclick = () => run(r, { title: 'Example', name: 'Example', cat: 'Example', amount: 0 });
      const del = el('button', { type: 'button', className: 'au-del', ariaLabel: 'Remove this rule', textContent: '✕' });
      del.onclick = () => remove(r);
      const last = r.at ? `Ran ${r.runs} time${r.runs === 1 ? '' : 's'}, last ${fmt(r.at, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}` : 'Has not run yet';
      return el('li', { className: (r.on ? '' : 'off ') + (r.err ? 'bad' : '') },
        el('label', { className: 'au-on' }, on, el('span', {}, autoSummary(r))),
        el('div', { className: 'au-meta' }, el('small', {}, r.err ? 'Problem: ' + r.err : last), now, del));
    }));
    $('au-none').hidden = data.rules.length > 0;
  }

  const group = { module: 'auto', title: 'Automations', items: [['N', 'New rule']] };
  const commandFn = () => [{ label: 'Add an automation', hint: 'Automations', kind: 'Command', run: async () => { await setView('auto'); $('au-when').focus(); } }];

  defineModule('auto', {
    tick, // also called by the test
    start() {
      data = { rules: [], ...(moduleData.auto || {}) };
      build();
      paint();
      eventHooks.push(onEvent);
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      overdueSeen = null;
      timer = setInterval(tick, 30000);
      setTimeout(tick, 2000); // a rule whose time passed while the app was closed runs once at start
    },
    stop() {
      clearInterval(timer);
      eventHooks.splice(eventHooks.indexOf(onEvent), 1);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { paint(); },
    refresh: paint,
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('au-when').focus(); }
    },
  });
})();
