// Home & Bills module: what is due and when, what you paid, and where the paperwork is. Loaded only while it is switched on.
// Data: { bills: [{ id, name, cycle, next, amount, note, docs, paid: [{ day, amount }] }], alerted: { "<id>@<next>": day } }.
(() => {
  let data = { bills: [], alerted: {} };
  let tab = 'due'; // due | paid
  let paying = null; // the bill whose "Paid" amount is being typed
  let timer = null;
  const REMIND_DAYS = 3;
  const CYCLES = [['month', 'Every month'], ['quarter', 'Every 3 months'], ['year', 'Every year'], ['once', 'Once']];
  const save = () => saveModule('bills', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('bills-view');
  const today = () => localDay(new Date());
  const cur = () => moduleData.money?.cur || '฿';
  const money = (n) => moneyLabel(n, cur());

  function build() {
    root().replaceChildren(
      el('section', { className: 'bl-main', ariaLabel: 'Bills' },
        el('div', { className: 'bl-head' }, el('h2', {}, 'Bills'), el('span', { id: 'bl-year', className: 'bl-year' })),
        el('div', { className: 'bl-tabs', role: 'tablist', ariaLabel: 'Show' }, ...[['due', 'Due'], ['paid', 'Paid']].map(([k, l]) => el('button', { id: 'bl-t-' + k, role: 'tab', type: 'button', textContent: l, onclick: () => { tab = k; paying = null; paint(); } }))),
        el('ul', { id: 'bl-list', className: 'bl-list', ariaLabel: 'Bills' }),
        el('div', { id: 'bl-none', className: 'empty', hidden: true })),
      el('aside', { className: 'bl-side', ariaLabel: 'Add a bill' },
        el('form', { id: 'bl-form', onsubmit: add },
          field('Bill', el('input', { id: 'bl-name', maxLength: 60, autocomplete: 'off', placeholder: 'Electricity' })),
          el('div', { className: 'bl-two' },
            field('Usual amount', el('input', { id: 'bl-amount', inputMode: 'decimal', autocomplete: 'off', placeholder: '0' })),
            field('Repeats', el('select', { id: 'bl-cycle' }, ...CYCLES.map(([v, l]) => el('option', { value: v }, l))))),
          field('Next due', el('input', { id: 'bl-next', type: 'date' })),
          field('Account number or where the paperwork is', el('input', { id: 'bl-note', maxLength: 120, autocomplete: 'off', placeholder: 'Account 123-4-56789-0, blue folder' })),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'bl-msg', className: 'bl-msg', role: 'status' }))));
    $('bl-next').value = today();
    mobileSheet(root(), root().querySelector('.bl-side'), 'New bill');
  }
  const field = (label, ctl) => el('label', { className: 'bl-field' }, label, ctl);

  function add(e) {
    e.preventDefault();
    const name = $('bl-name').value.trim();
    const amount = $('bl-amount').value.trim() ? parseAmount($('bl-amount').value) : 0;
    const next = $('bl-next').value;
    if (!name || amount === null || !next) { $('bl-msg').textContent = 'A name, an amount above 0 (or empty) and the next due date.'; return; }
    data.bills.push({ id: crypto.randomUUID(), name, cycle: $('bl-cycle').value, next, amount: amount || 0, note: $('bl-note').value.trim(), paid: [] });
    save();
    $('bl-name').value = '';
    $('bl-amount').value = '';
    $('bl-note').value = '';
    $('bl-msg').textContent = `Added ${name}.`;
    paint();
    checkDue();
    $('bl-name').focus();
  }

  // the bill was paid: record it, move to the next due date (a one-off stays as history only), and tell Expenses
  function pay(b, amount) {
    b.paid.push({ day: today(), amount });
    if (b.cycle === 'once') data.bills = data.bills.filter((x) => x !== b), (data.history = [...(data.history || []), { name: b.name, paid: b.paid }]);
    else b.next = addCycle(b.next, b.cycle, parseDay(b.next).getDate());
    if (amount > 0 && started.has('money') && registry.money?.addEntry) registry.money.addEntry({ day: today(), kind: 'out', amount, cat: 'Bills', note: b.name });
    paying = null;
    save();
    paint();
    emit('bill-paid', { name: b.name, amount, key: `bill:${b.id}:${today()}` });
  }

  async function remove(b) {
    if (!(await ask(`Remove ${b.name}? Its payment history goes too.`, 'Remove'))) return;
    data.bills = data.bills.filter((x) => x.id !== b.id);
    save();
    paint();
  }

  const all = () => [...data.bills, ...(data.history || []).map((h) => ({ ...h, paid: h.paid }))]; // finished one-offs still count in totals
  const sorted = () => [...data.bills].sort((a, b) => a.next.localeCompare(b.next) || a.name.localeCompare(b.name));
  const stateText = (st) => (st.kind === 'overdue' ? `overdue by ${st.days} day${st.days === 1 ? '' : 's'}` : st.kind === 'today' ? 'due today' : st.days === 1 ? 'due tomorrow' : `due in ${st.days} days`);

  function paint() {
    const t = today();
    $('bl-t-due').ariaSelected = String(tab === 'due');
    $('bl-t-paid').ariaSelected = String(tab === 'paid');
    const yr = paidTotals(all(), new Date().getFullYear());
    $('bl-year').textContent = yr.total ? `${money(yr.total)} paid in ${new Date().getFullYear()}` : '';
    if (tab === 'due') {
      $('bl-list').replaceChildren(...sorted().map((b) => {
        const st = billState(b, t);
        const doc = b.note ? el('small', {}, b.note) : '';
        const body = paying === b
          ? el('form', { className: 'bl-payform', onsubmit: (e) => { e.preventDefault(); const n = parseAmount($('bl-pay-amt').value); if (n === null && $('bl-pay-amt').value.trim() !== '0') { $('bl-pay-amt').focus(); return; } pay(b, n || 0); } },
            el('input', { id: 'bl-pay-amt', inputMode: 'decimal', autocomplete: 'off', value: b.amount ? String(b.amount) : '', ariaLabel: 'Amount paid' }), el('button', { className: 'linkish', type: 'submit', textContent: 'Confirm' }), el('button', { className: 'linkish', type: 'button', textContent: 'Cancel', onclick: () => { paying = null; paint(); } }))
          : el('button', { type: 'button', className: 'linkish bl-pay', textContent: 'Paid…', onclick: () => { paying = b; paint(); $('bl-pay-amt')?.select(); } });
        const del = el('button', { type: 'button', className: 'bl-del', ariaLabel: 'Remove ' + b.name, textContent: '✕' });
        del.onclick = () => remove(b);
        return el('li', { className: st.kind === 'later' && st.days > REMIND_DAYS ? '' : 'soon' },
          el('span', { className: 'bl-name' }, el('b', {}, b.name), el('small', {}, `${b.amount ? money(b.amount) + ' · ' : ''}${CYCLES.find(([v]) => v === b.cycle)[1].toLowerCase()}`), doc),
          el('span', { className: 'bl-when' }, el('b', {}, stateText(st)), el('small', {}, fmt(parseDay(b.next), { weekday: 'short', day: 'numeric', month: 'short' }))), body, del);
      }));
      $('bl-none').hidden = data.bills.length > 0;
      $('bl-none').textContent = 'No bills yet. Add the electricity, the water, the rent.';
    } else {
      const rows = all().flatMap((b) => b.paid.map((p) => ({ name: b.name, ...p }))).sort((a, b) => b.day.localeCompare(a.day));
      $('bl-list').replaceChildren(...rows.map((r) => el('li', { className: 'bl-hist' }, el('span', { className: 'bl-name' }, el('b', {}, r.name)), el('span', { className: 'bl-when' }, el('b', {}, r.amount ? money(r.amount) : 'paid'), el('small', {}, fmt(parseDay(r.day), { day: 'numeric', month: 'short', year: 'numeric' }))))));
      $('bl-none').hidden = rows.length > 0;
      $('bl-none').textContent = 'Nothing paid yet. Press "Paid…" on a bill when you settle it.';
    }
  }

  // a notification three days before, and again when overdue: once per due date each
  function checkDue() {
    const t = today();
    let changed = false;
    for (const b of data.bills) {
      const st = billState(b, t);
      const stage = st.kind === 'overdue' ? 'late' : st.days <= REMIND_DAYS ? 'soon' : '';
      if (!stage) continue;
      const key = `${b.id}@${b.next}@${stage}`;
      if (data.alerted[key]) continue;
      data.alerted[key] = t;
      changed = true;
      invoke('toast', { title: `${b.name}: ${stateText(st)}`, text: b.amount ? money(b.amount) : '', module: 'bills' }).catch(() => {});
    }
    for (const k of Object.keys(data.alerted)) if (data.alerted[k] < shiftDay(t, -90)) delete data.alerted[k];
    if (changed) save();
  }

  const group = { module: 'bills', title: 'Home & Bills', items: [['N', 'Add a bill']] };
  const commandFn = () => [{ label: 'Add a bill', hint: 'Bills', kind: 'Command', run: async () => { await setView('bills'); $('bl-name').focus(); } }];

  defineModule('bills', {
    summary() {
      if (!data.bills.length) return null;
      const t = today();
      const list = sorted();
      const late = list.filter((b) => billState(b, t).kind === 'overdue');
      const next = list[0];
      return { label: 'Bills', value: late.length ? `${late.length} overdue` : `${next.name} ${stateText(billState(next, t))}`.replace('due ', ''), unit: '', warn: late.length > 0 || billState(next, t).days <= REMIND_DAYS, sub: late.length ? late.map((b) => b.name).join(', ') : `${money(data.bills.reduce((n, b) => n + b.amount, 0))} in all, next ${next.name}` };
    },
    weekly(since, until) {
      const paid = all().flatMap((b) => b.paid.map((p) => ({ name: b.name, ...p }))).filter((p) => p.day >= since && p.day <= until);
      const t = today();
      const soon = sorted().filter((b) => billState(b, t).days <= 7 || billState(b, t).kind === 'overdue');
      return { title: 'Bills', lines: [paid.length ? `Paid: ${paid.map((p) => `${p.name}${p.amount ? ' ' + money(p.amount) : ''}`).join(', ')}` : 'Nothing paid', soon.length ? 'Due or overdue now: ' + soon.map((b) => b.name).join(', ') : 'Nothing due in the next 7 days'] };
    },
    start() {
      data = { bills: [], alerted: {}, ...(moduleData.bills || {}) };
      tab = 'due';
      paying = null;
      build();
      paint();
      checkDue();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      timer = setInterval(() => { checkDue(); if (view === 'bills') paint(); }, 3600000);
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
      if (e.key === 'Escape') { if (paying) { paying = null; paint(); } else if (isField(t)) t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('bl-name').focus(); }
    },
  });
})();
