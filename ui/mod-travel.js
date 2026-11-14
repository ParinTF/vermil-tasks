// Travel module: trips with a packing list, a plan for each day, and what it costs against a budget. Loaded only while it is on.
// Data: { trips: [{ id, name, from, to, budget, packing: [{ id, text, done }], plan: { day: text }, costs: [{ id, label, amount }] }] }.
(() => {
  let data = { trips: [] };
  let sel = null; // id of the trip on show
  const save = () => saveModule('travel', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('travel-view');
  const today = () => localDay(new Date());
  const cur = () => moduleData.money?.cur || '฿';
  const money = (n) => moneyLabel(n, cur());
  const trip = () => data.trips.find((t) => t.id === sel) || null;
  const ordered = () => [...data.trips].sort((a, b) => (tripState(a, today()).kind === 'after') - (tripState(b, today()).kind === 'after') || a.from.localeCompare(b.from));

  function build() {
    root().replaceChildren(
      el('section', { className: 'tv-main', ariaLabel: 'Trip' }, el('div', { id: 'tv-detail' })),
      el('aside', { className: 'tv-side', ariaLabel: 'Trips' },
        el('ul', { id: 'tv-list', className: 'tv-list', ariaLabel: 'Trips' }),
        el('form', { id: 'tv-form', onsubmit: addTrip },
          el('div', { className: 'tv-form-title' }, 'New trip'),
          field('Where to', el('input', { id: 'tv-name', maxLength: 60, autocomplete: 'off', placeholder: 'Chiang Mai' })),
          el('div', { className: 'tv-two' }, field('From', el('input', { id: 'tv-from', type: 'date' })), field('To', el('input', { id: 'tv-to', type: 'date' }))),
          field('Budget', el('input', { id: 'tv-budget', inputMode: 'decimal', autocomplete: 'off', placeholder: 'Optional' })),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'tv-msg', className: 'tv-msg', role: 'status' }))));
    $('tv-from').value = shiftDay(today(), 14);
    $('tv-to').value = shiftDay(today(), 18);
    mobileSheet(root(), $('tv-form'), 'New trip');
  }
  const field = (label, ctl) => el('label', { className: 'tv-field' }, label, ctl);

  function addTrip(e) {
    e.preventDefault();
    const name = $('tv-name').value.trim();
    const from = $('tv-from').value, to = $('tv-to').value;
    const budget = $('tv-budget').value.trim() ? parseAmount($('tv-budget').value) : 0;
    if (!name || !from || !to || to < from || budget === null) { $('tv-msg').textContent = 'A place, dates (the end not before the start) and a budget above 0, or empty.'; return; }
    const t = { id: crypto.randomUUID(), name, from, to, budget: budget || 0, packing: [], plan: {}, costs: [] };
    data.trips.push(t);
    sel = t.id;
    save();
    $('tv-name').value = '';
    $('tv-budget').value = '';
    $('tv-msg').textContent = `Added ${name}.`;
    paint();
  }

  function stateText(t) {
    const s = tripState(t, today());
    return s.kind === 'before' ? (s.days === 1 ? 'tomorrow' : `in ${s.days} days`) : s.kind === 'during' ? `day ${s.day} of ${s.of}` : `${s.days} day${s.days === 1 ? '' : 's'} ago`;
  }

  function addPacking(t, texts) {
    const have = new Set(t.packing.map((p) => p.text.toLowerCase()));
    let added = 0;
    for (const text of texts.map((x) => x.trim()).filter(Boolean)) if (!have.has(text.toLowerCase())) { t.packing.push({ id: crypto.randomUUID(), text, done: false }); have.add(text.toLowerCase()); added++; }
    if (added) save();
    return added;
  }

  function paint() {
    $('tv-list').replaceChildren(...ordered().map((t) => {
      const b = el('button', { type: 'button', className: t.id === sel ? 'sel' : '', ariaPressed: String(t.id === sel) }, el('b', {}, t.name), el('small', {}, `${fmt(parseDay(t.from), { day: 'numeric', month: 'short' })} to ${fmt(parseDay(t.to), { day: 'numeric', month: 'short' })} · ${stateText(t)}`));
      b.onclick = () => { sel = t.id; paint(); };
      return el('li', { className: tripState(t, today()).kind }, b);
    }));
    const t = trip();
    const box = $('tv-detail');
    if (!t) { box.replaceChildren(el('h2', {}, 'Travel'), el('div', { className: 'empty' }, data.trips.length ? 'Pick a trip on the right.' : 'No trips yet. Add one on the right and pack for it here.')); return; }
    const prog = packingProgress(t.packing);
    const spent = Math.round(t.costs.reduce((n, c) => n + c.amount * 100, 0)) / 100;
    const left = t.budget ? Math.round((t.budget - spent) * 100) / 100 : null;
    const del = el('button', { type: 'button', className: 'linkish', textContent: 'Delete trip', onclick: async () => { if (!(await ask(`Delete the trip to ${t.name}?`, 'Delete'))) return; data.trips = data.trips.filter((x) => x.id !== t.id); sel = ordered()[0]?.id || null; save(); paint(); } });
    box.replaceChildren(
      el('div', { className: 'tv-head' }, el('h2', {}, t.name), el('span', { className: 'tv-state' }, `${fmt(parseDay(t.from), { weekday: 'short', day: 'numeric', month: 'short' })} to ${fmt(parseDay(t.to), { weekday: 'short', day: 'numeric', month: 'short' })} · ${stateText(t)}`)),
      // packing
      el('section', { className: 'tv-sec' },
        el('h3', {}, 'Packing', el('span', { id: 'tv-pack-count' }, prog.total ? ` ${prog.done} of ${prog.total}` : '')),
        el('div', { className: 'tv-templates', role: 'group', ariaLabel: 'Starter lists' }, ...Object.keys(PACKING_TEMPLATES).map((k) => el('button', { type: 'button', textContent: '+ ' + k, onclick: () => { const n = addPacking(t, PACKING_TEMPLATES[k]); $('tv-pack-msg').textContent = n ? `Added ${n} items.` : 'Already on the list.'; paintDetailOnly(); } }))),
        el('form', { className: 'tv-inline', onsubmit: (e) => { e.preventDefault(); const v = $('tv-pack-in').value; if (addPacking(t, [v])) { paint(); $('tv-pack-in').focus(); } } }, el('input', { id: 'tv-pack-in', maxLength: 80, autocomplete: 'off', placeholder: 'Add an item', ariaLabel: 'Packing item' }), el('button', { className: 'linkish', type: 'submit', textContent: 'Add' })),
        el('span', { id: 'tv-pack-msg', className: 'tv-msg', role: 'status' }),
        el('ul', { id: 'tv-pack', className: 'tv-checks' }, ...t.packing.map((p) => {
          const box = el('input', { type: 'checkbox', checked: p.done, ariaLabel: p.text });
          box.onchange = () => { p.done = box.checked; save(); paintDetailOnly(); };
          const x = el('button', { type: 'button', className: 'tv-x', ariaLabel: 'Remove ' + p.text, textContent: '✕' });
          x.onclick = () => { t.packing = t.packing.filter((y) => y.id !== p.id); save(); paintDetailOnly(); };
          return el('li', { className: p.done ? 'done' : '' }, box, el('span', {}, p.text), x);
        })),
        ...(started.has('tasks') && tripState(t, today()).kind === 'before' ? [el('button', { id: 'tv-remind', type: 'button', className: 'linkish', textContent: 'Add a "Pack" task two days before', onclick: () => {
          const due = (shiftDay(t.from, -2) < today() ? today() : shiftDay(t.from, -2)) + 'T18:00';
          commit([...todos, { id: crypto.randomUUID(), title: `Pack for ${t.name}`, due, remindBefore: 0, done: false, createdAt: new Date().toISOString(), completedAt: null }]);
          $('tv-pack-msg').textContent = 'Added a task to pack.';
        } })] : [])),
      // plan
      el('section', { className: 'tv-sec' }, el('h3', {}, 'Plan'),
        el('div', { id: 'tv-plan', className: 'tv-plan' }, ...tripDays(t.from, t.to).map((d, i) => {
          const input = el('input', { value: t.plan[d] || '', maxLength: 200, autocomplete: 'off', placeholder: 'What is the plan?', ariaLabel: `Plan for day ${i + 1}` });
          input.onchange = () => { if (input.value.trim()) t.plan[d] = input.value.trim(); else delete t.plan[d]; save(); };
          return el('label', { className: 'tv-day' }, el('small', {}, `Day ${i + 1} · ${fmt(parseDay(d), { weekday: 'short', day: 'numeric', month: 'short' })}`), input);
        }))),
      // costs
      el('section', { className: 'tv-sec' }, el('h3', {}, 'Costs'),
        el('div', { id: 'tv-cost-sum', className: 'tv-cost-sum' }, el('b', {}, money(spent)), t.budget ? el('span', { className: left < 0 ? 'over' : '' }, left < 0 ? `${money(-left)} over a budget of ${money(t.budget)}` : `${money(left)} left of ${money(t.budget)}`) : el('span', {}, 'No budget set')),
        t.budget ? el('span', { className: 'tv-track' + (left < 0 ? ' over' : ''), ariaHidden: 'true' }, ((i) => { i.style.width = Math.min(100, spent / t.budget * 100) + '%'; return i; })(el('i', {}))) : '',
        el('form', { className: 'tv-inline', onsubmit: (e) => { e.preventDefault(); const a = parseAmount($('tv-cost-amt').value); const l = $('tv-cost-label').value.trim(); if (!l || a === null) return; t.costs.push({ id: crypto.randomUUID(), label: l, amount: a }); save(); paint(); } },
          el('input', { id: 'tv-cost-label', maxLength: 60, autocomplete: 'off', placeholder: 'Flights, hotel…', ariaLabel: 'What it cost' }), el('input', { id: 'tv-cost-amt', inputMode: 'decimal', autocomplete: 'off', placeholder: 'Amount', ariaLabel: 'Amount' }), el('button', { className: 'linkish', type: 'submit', textContent: 'Add' })),
        el('ul', { id: 'tv-costs', className: 'tv-checks' }, ...t.costs.map((c) => { const x = el('button', { type: 'button', className: 'tv-x', ariaLabel: 'Remove ' + c.label, textContent: '✕' }); x.onclick = () => { t.costs = t.costs.filter((y) => y.id !== c.id); save(); paint(); }; return el('li', {}, el('span', {}, c.label), el('time', {}, money(c.amount)), x); }))),
      el('div', { className: 'tv-foot' }, del));
  }

  // after a tick or a template: redraw the detail without losing focus in the add box
  function paintDetailOnly() { const keep = $('tv-pack-msg')?.textContent; paint(); if (keep && $('tv-pack-msg')) $('tv-pack-msg').textContent = keep; }

  const group = { module: 'travel', title: 'Travel', items: [['N', 'New trip']] };
  const commandFn = () => [{ label: 'Plan a trip', hint: 'Travel', kind: 'Command', run: async () => { await setView('travel'); $('tv-name').focus(); } }];

  defineModule('travel', {
    summary() {
      const next = ordered().find((t) => tripState(t, today()).kind !== 'after');
      if (!next) return null;
      const prog = packingProgress(next.packing);
      return { label: 'Trip', value: next.name, unit: '', sub: `${stateText(next)}${prog.total ? ` · packed ${prog.done}/${prog.total}` : ''}` };
    },
    weekly(since, until) {
      const near = ordered().filter((t) => { const s = tripState(t, until); return s.kind === 'during' || (s.kind === 'before' && s.days <= 30); });
      if (!near.length) return null;
      return { title: 'Travel', lines: near.map((t) => { const p = packingProgress(t.packing); return `${t.name}: ${stateText(t)}${p.total ? `, packed ${p.done} of ${p.total}` : ''}`; }) };
    },
    start() {
      data = { trips: [], ...(moduleData.travel || {}) };
      sel = ordered()[0]?.id || null;
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
    },
    stop() {
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('tv-name').focus(); }
    },
  });
})();
