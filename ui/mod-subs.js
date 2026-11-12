// Subscriptions module: what renews and when, the monthly total, and a reminder a few days before each charge.
// Data: { subs: [{ id, name, amount, cycle: 'week' | 'month' | 'year', next: "YYYY-MM-DD", anchor }], alerted: { id: next } }.
(() => {
  let data = { subs: [], alerted: {} };
  let timer = null;
  const REMIND_DAYS = 3;
  const save = () => saveModule('subs', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('subs-view');
  const today = () => localDay(new Date());
  const cur = () => moduleData.money?.cur || '฿'; // the same symbol as Expenses when that is in use
  const money = (n) => moneyLabel(n, cur());
  const CYCLES = { week: 'week', month: 'month', year: 'year' };

  function build() {
    const field = (id, label, ctl) => el('label', { className: 'sb-field' }, label, ctl);
    root().replaceChildren(
      el('section', { className: 'sb-main', ariaLabel: 'Subscriptions' },
        el('div', { className: 'sb-head' }, el('h2', {}, 'Subscriptions')),
        el('div', { id: 'sb-sum', className: 'sb-sum' }),
        el('ul', { id: 'sb-list', className: 'sb-list', ariaLabel: 'Subscriptions, next charge first' }),
        el('div', { id: 'sb-none', className: 'empty', hidden: true }, 'Nothing renewing yet. Add Netflix, your phone plan, the gym.')),
      el('aside', { className: 'sb-side', ariaLabel: 'Add a subscription' },
        el('form', { id: 'sb-form', onsubmit: add },
          field('sb-name', 'Name', el('input', { id: 'sb-name', maxLength: 60, autocomplete: 'off', placeholder: 'Netflix' })),
          el('div', { className: 'sb-two' },
            field('sb-amount', 'Price', el('input', { id: 'sb-amount', inputMode: 'decimal', autocomplete: 'off', placeholder: '0' })),
            field('sb-cycle', 'Every', el('select', { id: 'sb-cycle' }, ...Object.entries(CYCLES).map(([v, l]) => el('option', { value: v, selected: v === 'month' }, l))))),
          field('sb-next', 'Next charge', el('input', { id: 'sb-next', type: 'date' })),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'sb-msg', className: 'sb-msg', role: 'status' }))));
    $('sb-next').value = today();
  }

  function add(e) {
    e.preventDefault();
    const name = $('sb-name').value.trim();
    const amount = parseAmount($('sb-amount').value);
    const next = $('sb-next').value;
    if (!name || amount === null || !next) { $('sb-msg').textContent = 'Name, a price above 0 and the next charge date.'; return; }
    data.subs.push({ id: crypto.randomUUID(), name, amount, cycle: $('sb-cycle').value, next, anchor: parseDay(next).getDate() });
    save();
    $('sb-name').value = '';
    $('sb-amount').value = '';
    $('sb-msg').textContent = `Added ${name}.`;
    paint();
    checkDue();
    $('sb-name').focus();
  }

  // paid: the charge happened, so the next one is a cycle later (and not in the past)
  function paid(s) {
    s.next = rollForward(addCycle(s.next, s.cycle, s.anchor), s.cycle, s.anchor, today());
    save();
    paint();
  }

  async function remove(s) {
    if (!(await ask(`Remove ${s.name}?`, 'Remove'))) return;
    data.subs = data.subs.filter((x) => x.id !== s.id);
    delete data.alerted[s.id];
    save();
    paint();
  }

  const sorted = () => [...data.subs].sort((a, b) => a.next.localeCompare(b.next) || a.name.localeCompare(b.name));
  const when = (s) => {
    const n = daysUntil(s.next, today());
    return n < 0 ? `${-n} day${n === -1 ? '' : 's'} ago` : n === 0 ? 'today' : n === 1 ? 'tomorrow' : `in ${n} days`;
  };

  function paint() {
    const list = sorted();
    const monthly = Math.round(data.subs.reduce((n, s) => n + monthlyCost(s.amount, s.cycle) * 100, 0)) / 100;
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    $('sb-sum').replaceChildren(fig('Per month', money(monthly)), fig('Per year', money(Math.round(monthly * 12 * 100) / 100)), fig('Subscriptions', String(list.length)));
    $('sb-sum').hidden = !list.length;
    $('sb-list').replaceChildren(...list.map((s) => {
      const n = daysUntil(s.next, today());
      const pay = el('button', { type: 'button', className: 'linkish', textContent: 'Paid', ariaLabel: `Mark ${s.name} paid`, title: 'The charge happened: move to the next one' });
      pay.onclick = () => paid(s);
      const del = el('button', { type: 'button', className: 'sb-del', ariaLabel: 'Remove ' + s.name, textContent: '✕' });
      del.onclick = () => remove(s);
      return el('li', { className: n <= REMIND_DAYS ? 'soon' : '' },
        el('span', { className: 'sb-name' }, el('b', {}, s.name), el('small', {}, `${money(s.amount)} every ${CYCLES[s.cycle]}${s.cycle === 'month' ? '' : ' · ' + money(monthlyCost(s.amount, s.cycle)) + '/month'}`)),
        el('span', { className: 'sb-when' }, el('b', {}, when(s)), el('small', {}, fmt(parseDay(s.next), { weekday: 'short', day: 'numeric', month: 'short' }))), pay, del);
    }));
    $('sb-none').hidden = list.length > 0;
  }

  // a toast once per charge, REMIND_DAYS before (and on the day if it was missed until then)
  function checkDue() {
    let changed = false;
    for (const s of data.subs) {
      const n = daysUntil(s.next, today());
      if (n > REMIND_DAYS || data.alerted[s.id] === s.next) continue;
      data.alerted[s.id] = s.next;
      changed = true;
      invoke('toast', { title: `${s.name} ${n < 0 ? 'was due' : n === 0 ? 'renews today' : `renews in ${n} day${n === 1 ? '' : 's'}`}`, text: `${money(s.amount)} every ${CYCLES[s.cycle]}` }).catch(() => {});
    }
    if (changed) save();
  }

  const group = { module: 'subs', title: 'Subscriptions', items: [['N', 'New subscription']] };
  const commandFn = () => [{ label: 'Add a subscription', hint: 'Subscriptions', kind: 'Command', run: async () => { await setView('subs'); $('sb-name').focus(); } }];

  defineModule('subs', {
    summary() {
      if (!data.subs.length) return null;
      const next = sorted()[0];
      const monthly = Math.round(data.subs.reduce((n, s) => n + monthlyCost(s.amount, s.cycle) * 100, 0)) / 100;
      return { label: 'Renewals', value: `${next.name} ${when(next)}`, unit: '', warn: daysUntil(next.next, today()) <= REMIND_DAYS, sub: `${money(monthly)} a month in total` };
    },
    start() {
      data = { subs: [], alerted: {}, ...(moduleData.subs || {}) };
      build();
      paint();
      checkDue();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      timer = setInterval(() => { checkDue(); if (view === 'subs') paint(); }, 3600000);
    },
    stop() {
      clearInterval(timer);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('sb-name').focus(); }
    },
  });
})();
