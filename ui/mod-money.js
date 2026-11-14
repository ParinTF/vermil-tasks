// Unified Money hub: Expenses (with Online & Cash accounts), PayLater (BNPL), Subscriptions and Bills in one view.
// Buying with PayLater records the purchase and creates a PayLater obligation without deducting from Online or Cash
// until the user settles the PayLater item from Online or Cash.
(() => {
  let data = { cur: '฿', entries: [], paylater: [], budgets: {}, alerted: {} };
  let subsData = { subs: [], alerted: {} };
  let billsData = { bills: [], history: [], alerted: {} };
  let subTab = 'expenses'; // 'expenses' | 'paylater' | 'subs' | 'bills'
  let month = localDay(new Date()).slice(0, 7);
  let kind = 'out';
  let account = 'online'; // 'online' | 'cash' | 'paylater'
  let accFilter = 'all'; // 'all' | 'online' | 'cash' | 'paylater'
  let plTab = 'unpaid'; // 'unpaid' | 'paid'
  let billTab = 'due'; // 'due' | 'paid'
  let payingBill = null;
  let timer = null;
  const REMIND_DAYS = 3;
  const QUICK = { out: ['Food', 'Transport', 'Bills', 'Shopping', 'Health', 'Fun', 'Invest', 'Savings', 'Other'], in: ['Salary', 'Dividends', 'Gift', 'Refund', 'Other'] };
  const SUB_CYCLES = { week: 'week', month: 'month', year: 'year' };
  const BILL_CYCLES = [['month', 'Every month'], ['quarter', 'Every 3 months'], ['year', 'Every year'], ['once', 'Once']];
  const ACC_LABEL = { online: 'Online', cash: 'Cash', paylater: 'PayLater' };

  const save = () => saveModule('money', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const saveSubs = () => saveModule('subs', subsData).catch((e) => tell('Could not save: ' + (e.message || e)));
  const saveBills = () => saveModule('bills', billsData).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('money-view');
  const today = () => localDay(new Date());
  const money = (n) => moneyLabel(n, data.cur);

  function build() {
    const num = (id, label, props) => el('label', { className: 'mo-field' }, label, el('input', { id, ...props }));
    root().replaceChildren(
      el('section', { className: 'mo-main', ariaLabel: 'Money' },
        el('div', { id: 'mo-subtabs', className: 'mo-subtabs', role: 'tablist', ariaLabel: 'Money sections' }),
        // 1. Expenses section
        el('div', { id: 'mo-sec-expenses' },
          el('div', { className: 'mo-head' }, el('h2', { id: 'mo-title' }),
            el('div', { className: 'mo-nav' },
              el('button', { id: 'mo-prev', className: 'linkish', type: 'button', ariaLabel: 'Previous month', textContent: '‹', onclick: () => shiftMonthBy(-1) }),
              el('button', { id: 'mo-now', className: 'linkish', type: 'button', textContent: 'This month', onclick: () => { month = today().slice(0, 7); paint(); } }),
              el('button', { id: 'mo-next', className: 'linkish', type: 'button', ariaLabel: 'Next month', textContent: '›', onclick: () => shiftMonthBy(1) }))),
          el('div', { id: 'mo-wallets', className: 'mo-wallets', ariaLabel: 'Account balances' }),
          el('div', { id: 'mo-sum', className: 'mo-sum' }),
          el('div', { id: 'mo-acc-filter', className: 'mo-acc-filter', role: 'group', ariaLabel: 'Filter by account' }),
          el('ul', { id: 'mo-budget', className: 'mo-budget', ariaLabel: 'Budgets this month' }),
          el('ul', { id: 'mo-bars', className: 'mo-bars', ariaLabel: 'Spending by category' }),
          el('ul', { id: 'mo-list', className: 'mo-list', ariaLabel: 'Entries' }),
          el('div', { id: 'mo-none', className: 'empty', hidden: true }, 'Nothing recorded this month. Press N to add something.')),
        // 2. PayLater section
        el('div', { id: 'mo-sec-paylater', hidden: true },
          el('div', { className: 'mo-head' }, el('h2', {}, 'PayLater'),
            el('div', { className: 'mo-sub-pills', role: 'tablist' },
              el('button', { id: 'pl-t-unpaid', type: 'button', role: 'tab', onclick: () => { plTab = 'unpaid'; paint(); } }, 'Unpaid'),
              el('button', { id: 'pl-t-paid', type: 'button', role: 'tab', onclick: () => { plTab = 'paid'; paint(); } }, 'Settled'))),
          el('p', { className: 'mo-sub-lead' }, 'Purchases paid with PayLater do not deduct from your Online or Cash balance until you settle them here.'),
          el('div', { id: 'pl-sum', className: 'mo-sum' }),
          el('ul', { id: 'pl-list', className: 'mo-list pl-list', ariaLabel: 'PayLater items' }),
          el('div', { id: 'pl-none', className: 'empty', hidden: true })),
        // 3. Subscriptions section
        el('div', { id: 'mo-sec-subs', hidden: true },
          el('div', { className: 'mo-head' }, el('h2', {}, 'Subscriptions')),
          el('div', { id: 'sb-sum', className: 'mo-sum' }),
          el('ul', { id: 'sb-list', className: 'mo-list sb-list', ariaLabel: 'Subscriptions' }),
          el('div', { id: 'sb-none', className: 'empty', hidden: true }, 'Nothing renewing yet. Add Netflix, your phone plan, the gym.')),
        // 4. Bills section
        el('div', { id: 'mo-sec-bills', hidden: true },
          el('div', { className: 'mo-head' }, el('h2', {}, 'Bills'),
            el('div', { className: 'mo-sub-pills', role: 'tablist' },
              el('button', { id: 'bl-t-due', type: 'button', role: 'tab', onclick: () => { billTab = 'due'; payingBill = null; paint(); } }, 'Due'),
              el('button', { id: 'bl-t-paid', type: 'button', role: 'tab', onclick: () => { billTab = 'paid'; payingBill = null; paint(); } }, 'Paid'))),
          el('div', { id: 'bl-sum', className: 'mo-sum' }),
          el('ul', { id: 'bl-list', className: 'mo-list bl-list', ariaLabel: 'Bills' }),
          el('div', { id: 'bl-none', className: 'empty', hidden: true }))),
      el('aside', { className: 'mo-side', ariaLabel: 'Add entry' },
        // Pane 1: Expenses form
        el('div', { id: 'mo-pane-expenses' },
          el('form', { id: 'mo-form', onsubmit: add },
            el('div', { className: 'mo-kind', role: 'group', ariaLabel: 'Type' },
              el('button', { id: 'mo-out', type: 'button', ariaPressed: 'true', textContent: 'Spent', onclick: () => setKind('out') }),
              el('button', { id: 'mo-in', type: 'button', ariaPressed: 'false', textContent: 'Income', onclick: () => setKind('in') })),
            el('div', { className: 'mo-field' }, 'Account',
              el('div', { id: 'mo-acc-btns', className: 'mo-acc-btns', role: 'group', ariaLabel: 'Account' })),
            num('mo-amount', 'Amount', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0', ariaLabel: 'Amount' }),
            el('label', { className: 'mo-field' }, 'Category', el('div', { className: 'mo-catrow' },
              el('input', { id: 'mo-cat', autocomplete: 'off', maxLength: 30, placeholder: 'Food' }),
              el('button', { id: 'mo-addcat', type: 'button', className: 'mo-plus', textContent: '+', title: 'Keep this category as a button below', ariaLabel: 'Keep this category as a button below', onclick: keepCategory }))),
            el('div', { id: 'mo-chips', className: 'mo-chips', role: 'group', ariaLabel: 'Categories' }),
            num('mo-day', 'Date', { type: 'date' }),
            el('label', { id: 'mo-pl-due-wrap', className: 'mo-field', hidden: true }, 'PayLater due date',
              el('input', { id: 'mo-pl-due', type: 'date' })),
            num('mo-note', 'Note', { maxLength: 120, autocomplete: 'off', placeholder: 'Optional' }),
            el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('div', { id: 'mo-msg', className: 'mo-msg', role: 'status' })),
          num('mo-cur', 'Currency symbol', { maxLength: 4, autocomplete: 'off' }),
          el('form', { id: 'mo-bform', className: 'mo-bform', onsubmit: setBudget },
            el('div', { className: 'mo-bhead' }, 'Monthly budget'),
            el('div', { className: 'mo-brow' }, el('input', { id: 'mo-bcat', maxLength: 30, autocomplete: 'off', placeholder: 'Category', ariaLabel: 'Budget category' }), el('input', { id: 'mo-blimit', inputMode: 'decimal', autocomplete: 'off', placeholder: 'Limit', ariaLabel: 'Monthly limit' }), el('button', { className: 'linkish', type: 'submit', textContent: 'Set' })),
            el('div', { id: 'mo-bmsg', className: 'mo-msg', role: 'status' }),
            el('ul', { id: 'mo-bedit', className: 'mo-bedit' }))),
        // Pane 2: PayLater form
        el('div', { id: 'mo-pane-paylater', hidden: true },
          el('form', { id: 'pl-form', onsubmit: addPayLater },
            el('div', { className: 'mo-bhead' }, 'New PayLater purchase'),
            num('pl-title', 'Item or store', { maxLength: 80, autocomplete: 'off', placeholder: 'Headphones (SPayLater)' }),
            num('pl-amount', 'Amount', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0' }),
            num('pl-cat', 'Category', { maxLength: 30, autocomplete: 'off', placeholder: 'Shopping' }),
            num('pl-due', 'Due date', { type: 'date' }),
            el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add PayLater'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('div', { id: 'pl-msg', className: 'mo-msg', role: 'status' }))),
        // Pane 3: Subscriptions form
        el('div', { id: 'mo-pane-subs', hidden: true },
          el('form', { id: 'sb-form', onsubmit: addSub },
            el('div', { className: 'mo-bhead' }, 'New subscription'),
            num('sb-name', 'Name', { maxLength: 60, autocomplete: 'off', placeholder: 'Netflix' }),
            el('div', { className: 'mo-two' },
              num('sb-amount', 'Price', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0' }),
              el('label', { className: 'mo-field' }, 'Every', el('select', { id: 'sb-cycle' }, ...Object.entries(SUB_CYCLES).map(([v, l]) => el('option', { value: v, selected: v === 'month' }, l))))),
            num('sb-next', 'Next charge', { type: 'date' }),
            el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add subscription'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('div', { id: 'sb-msg', className: 'mo-msg', role: 'status' }))),
        // Pane 4: Bills form
        el('div', { id: 'mo-pane-bills', hidden: true },
          el('form', { id: 'bl-form', onsubmit: addBill },
            el('div', { className: 'mo-bhead' }, 'New bill'),
            num('bl-name', 'Bill', { maxLength: 60, autocomplete: 'off', placeholder: 'Electricity' }),
            el('div', { className: 'mo-two' },
              num('bl-amount', 'Usual amount', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0' }),
              el('label', { className: 'mo-field' }, 'Repeats', el('select', { id: 'bl-cycle' }, ...BILL_CYCLES.map(([v, l]) => el('option', { value: v }, l))))),
            num('bl-next', 'Next due', { type: 'date' }),
            num('bl-note', 'Account or note', { maxLength: 120, autocomplete: 'off', placeholder: 'Optional' }),
            el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add bill'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('div', { id: 'bl-msg', className: 'mo-msg', role: 'status' })))));

    $('mo-cat').oninput = paintChips;
    paintAccountButtons();
    paintChips();
    $('mo-cur').value = data.cur;
    $('mo-cur').oninput = () => { data.cur = $('mo-cur').value.trim() || '฿'; save(); paint(); };
    const t = today();
    const nextMo = addCycle(t, 'month', parseDay(t).getDate());
    $('mo-day').value = t;
    $('mo-pl-due').value = nextMo;
    $('pl-due').value = nextMo;
    $('sb-next').value = t;
    $('bl-next').value = t;
    mobileSheet(root(), root().querySelector('.mo-side'), 'Add');
  }

  function setSubTab(next) {
    subTab = next;
    for (const id of ['expenses', 'paylater', 'subs', 'bills']) {
      $('mo-sec-' + id).hidden = id !== subTab;
      $('mo-pane-' + id).hidden = id !== subTab;
    }
    const fabTitle = { expenses: 'Add entry', paylater: 'Add PayLater', subs: 'New subscription', bills: 'New bill' }[subTab] || 'Add';
    const sheetTitle = root()?.querySelector('.mob-sheet-title');
    if (sheetTitle) sheetTitle.textContent = fabTitle;
    const fabBtn = root()?.querySelector('.mob-fab span');
    if (fabBtn) fabBtn.textContent = '+ ' + fabTitle;
    paint();
  }

  function paintAccountButtons() {
    const opts = kind === 'in' ? [['online', 'Online'], ['cash', 'Cash']] : [['online', 'Online'], ['cash', 'Cash'], ['paylater', 'PayLater']];
    if (kind === 'in' && account === 'paylater') account = 'online';
    $('mo-acc-btns')?.replaceChildren(...opts.map(([id, label]) => {
      const b = el('button', { type: 'button', className: 'mo-acc-btn', ariaPressed: String(account === id) }, label);
      b.onclick = () => {
        account = id;
        paintAccountButtons();
        if ($('mo-pl-due-wrap')) $('mo-pl-due-wrap').hidden = !(kind === 'out' && account === 'paylater');
      };
      return b;
    }));
    if ($('mo-pl-due-wrap')) $('mo-pl-due-wrap').hidden = !(kind === 'out' && account === 'paylater');
  }

  function shiftMonthBy(n) {
    month = shiftMonth(month + '-15', n).slice(0, 7);
    paint();
  }

  function paintChips() {
    const mine = {};
    for (const e of data.entries) if (e.kind === kind) mine[e.cat] = (mine[e.cat] || 0) + 1;
    const mine2 = data.chips[kind];
    const extra = Object.keys(mine).filter((c) => !QUICK[kind].includes(c) && !mine2.includes(c)).sort((a, b) => mine[b] - mine[a]).slice(0, 4);
    $('mo-chips').replaceChildren(...[...QUICK[kind], ...mine2, ...extra].map((c) => {
      const b = el('button', { type: 'button', textContent: c, ariaPressed: String($('mo-cat').value.trim().toLowerCase() === c.toLowerCase()) });
      b.onclick = () => { $('mo-cat').value = c; paintChips(); $('mo-amount').focus(); };
      if (!mine2.includes(c)) return b;
      const x = el('button', { type: 'button', className: 'mo-chip-x', textContent: '✕', ariaLabel: `Remove the button ${c}`, title: 'Remove this button' });
      x.onclick = () => { data.chips[kind] = mine2.filter((n) => n !== c); save(); paintChips(); };
      return el('span', { className: 'mo-chipgroup' }, b, x);
    }));
  }

  function keepCategory() {
    const name = $('mo-cat').value.trim();
    if (!name) { $('mo-msg').textContent = 'Type a category first, then press +.'; $('mo-cat').focus(); return; }
    const have = [...QUICK[kind], ...data.chips[kind]].some((c) => c.toLowerCase() === name.toLowerCase());
    if (have) { $('mo-msg').textContent = `${name} is already a button.`; return; }
    if (data.chips[kind].length >= 12) { $('mo-msg').textContent = 'That is 12 buttons already. Remove one first.'; return; }
    data.chips[kind].push(name);
    save();
    $('mo-msg').textContent = `${name} is now a button.`;
    paintChips();
  }

  function setKind(k) {
    kind = k;
    $('mo-out').ariaPressed = String(k === 'out');
    $('mo-in').ariaPressed = String(k === 'in');
    $('mo-cat').placeholder = k === 'out' ? 'Food' : 'Salary';
    paintAccountButtons();
    paintChips();
  }

  function add(e) {
    e.preventDefault();
    const amount = parseAmount($('mo-amount').value);
    if (amount === null) { $('mo-msg').textContent = 'Type an amount above 0.'; $('mo-amount').focus(); return; }
    const day = $('mo-day').value || today();
    const cat = $('mo-cat').value.trim() || (kind === 'out' ? 'Other' : 'Income');
    const note = $('mo-note').value.trim();
    const acc = kind === 'in' && account === 'paylater' ? 'online' : account;
    const entry = { id: crypto.randomUUID(), day, kind, amount, cat, note, account: acc };
    data.entries.push(entry);
    if (kind === 'out' && acc === 'paylater') {
      const due = $('mo-pl-due')?.value || addCycle(day, 'month', parseDay(day).getDate());
      data.paylater.push({
        id: crypto.randomUUID(),
        entryId: entry.id,
        title: note ? `${cat} · ${note}` : cat,
        amount,
        cat,
        day,
        due,
        paid: false,
        paidWith: null,
        paidDay: null,
      });
    }
    checkBudget(entry);
    emit('expense-added', { key: 'expense:' + entry.id });
    save();
    month = entry.day.slice(0, 7);
    $('mo-amount').value = '';
    $('mo-note').value = '';
    $('mo-cat').value = '';
    $('mo-msg').textContent = acc === 'paylater'
      ? `Added ${money(amount)} (${ACC_LABEL[acc]} — Online/Cash not deducted yet).`
      : `Added ${money(amount)} (${ACC_LABEL[acc]}) to ${entry.cat}.`;
    paintChips();
    paint();
    $('mo-amount').focus();
  }

  function addPayLater(e) {
    e.preventDefault();
    const title = $('pl-title').value.trim();
    const amount = parseAmount($('pl-amount').value);
    const cat = $('pl-cat').value.trim() || 'Shopping';
    const due = $('pl-due').value || addCycle(today(), 'month', 1);
    if (!title || amount === null) { $('pl-msg').textContent = 'Type an item name and an amount above 0.'; return; }
    const d = today();
    const entry = { id: crypto.randomUUID(), day: d, kind: 'out', amount, cat, note: title, account: 'paylater' };
    data.entries.push(entry);
    data.paylater.push({ id: crypto.randomUUID(), entryId: entry.id, title, amount, cat, day: d, due, paid: false, paidWith: null, paidDay: null });
    checkBudget(entry);
    save();
    $('pl-title').value = '';
    $('pl-amount').value = '';
    $('pl-msg').textContent = `Added ${title} (${money(amount)}) to PayLater.`;
    paint();
  }

  function settlePayLater(item, via) {
    item.paid = true;
    item.paidWith = via; // 'online' | 'cash'
    item.paidDay = today();
    save();
    paint();
  }

  async function removePayLater(item) {
    if (!(await ask(`Delete PayLater item "${item.title}" (${money(item.amount)})?`, 'Delete'))) return;
    data.paylater = data.paylater.filter((x) => x.id !== item.id);
    if (item.entryId) data.entries = data.entries.filter((x) => x.id !== item.entryId);
    save();
    paint();
  }

  function addSub(e) {
    e.preventDefault();
    const name = $('sb-name').value.trim();
    const amount = parseAmount($('sb-amount').value);
    const next = $('sb-next').value;
    if (!name || amount === null || !next) { $('sb-msg').textContent = 'Name, a price above 0 and the next charge date.'; return; }
    subsData.subs.push({ id: crypto.randomUUID(), name, amount, cycle: $('sb-cycle').value, next, anchor: parseDay(next).getDate() });
    saveSubs();
    $('sb-name').value = '';
    $('sb-amount').value = '';
    $('sb-msg').textContent = `Added ${name}.`;
    paint();
    checkDue();
  }

  function paySub(s, via = 'online') {
    const d = today();
    s.next = rollForward(addCycle(s.next, s.cycle, s.anchor), s.cycle, s.anchor, d);
    saveSubs();
    addEntry({ day: d, kind: 'out', amount: s.amount, cat: 'Subscriptions', note: s.name, account: via });
  }

  async function removeSub(s) {
    if (!(await ask(`Remove ${s.name}?`, 'Remove'))) return;
    subsData.subs = subsData.subs.filter((x) => x.id !== s.id);
    delete subsData.alerted[s.id];
    saveSubs();
    paint();
  }

  function addBill(e) {
    e.preventDefault();
    const name = $('bl-name').value.trim();
    const amount = $('bl-amount').value.trim() ? parseAmount($('bl-amount').value) : 0;
    const next = $('bl-next').value;
    if (!name || amount === null || !next) { $('bl-msg').textContent = 'A name, an amount above 0 (or empty) and the next due date.'; return; }
    billsData.bills.push({ id: crypto.randomUUID(), name, cycle: $('bl-cycle').value, next, amount: amount || 0, note: $('bl-note').value.trim(), paid: [] });
    saveBills();
    $('bl-name').value = '';
    $('bl-amount').value = '';
    $('bl-note').value = '';
    $('bl-msg').textContent = `Added ${name}.`;
    paint();
    checkDue();
  }

  function payBill(b, amount, via = 'online') {
    const d = today();
    b.paid.push({ day: d, amount, account: via });
    if (b.cycle === 'once') {
      billsData.bills = billsData.bills.filter((x) => x !== b);
      billsData.history = [...(billsData.history || []), { name: b.name, paid: b.paid }];
    } else {
      b.next = addCycle(b.next, b.cycle, parseDay(b.next).getDate());
    }
    payingBill = null;
    saveBills();
    if (amount > 0) addEntry({ day: d, kind: 'out', amount, cat: 'Bills', note: b.name, account: via });
    else paint();
    emit('bill-paid', { name: b.name, amount, key: `bill:${b.id}:${d}` });
  }

  async function removeBill(b) {
    if (!(await ask(`Remove ${b.name}? Its payment history goes too.`, 'Remove'))) return;
    billsData.bills = billsData.bills.filter((x) => x.id !== b.id);
    saveBills();
    paint();
  }

  function setBudget(e) {
    e.preventDefault();
    const cat = $('mo-bcat').value.trim();
    const limit = parseAmount($('mo-blimit').value);
    if (!cat || limit === null) { $('mo-bmsg').textContent = 'Type a category and a limit above 0.'; return; }
    data.budgets[cat] = limit;
    save();
    $('mo-bcat').value = '';
    $('mo-blimit').value = '';
    $('mo-bmsg').textContent = `${cat}: ${money(limit)} a month.`;
    paint();
  }

  function checkBudget(entry) {
    const limit = data.budgets[entry.cat];
    if (entry.kind !== 'out' || !limit) return;
    const m = entry.day.slice(0, 7);
    const spent = moneyMonth(data.entries, m).byCat.find((c) => c.cat === entry.cat)?.amount || 0;
    const st = budgetStatus(spent, limit);
    const level = st.level === 'over' ? 100 : st.level === 'near' ? 80 : 0;
    const seen = (data.alerted[m] ||= {});
    if (level <= (seen[entry.cat] || 0)) return;
    seen[entry.cat] = level;
    invoke('toast', { title: level === 100 ? `${entry.cat}: over budget` : `${entry.cat}: ${st.pct}% of budget`, text: `${money(spent)} of ${money(limit)} this month`, module: 'money' }).catch(() => {});
    if (level === 100) emit('over-budget', { cat: entry.cat, amount: spent });
  }

  async function remove(entry) {
    if (!(await ask(`Delete ${money(entry.amount)} ${entry.cat}${entry.note ? ' (' + entry.note + ')' : ''}?`, 'Delete'))) return;
    data.entries = data.entries.filter((x) => x.id !== entry.id);
    data.paylater = (data.paylater || []).filter((p) => p.entryId !== entry.id);
    save();
    paint();
  }

  function checkDue() {
    const t = today();
    let subChanged = false;
    for (const s of subsData.subs) {
      const n = daysUntil(s.next, t);
      if (n > REMIND_DAYS || subsData.alerted[s.id] === s.next) continue;
      subsData.alerted[s.id] = s.next;
      subChanged = true;
      invoke('toast', { title: `${s.name} ${n < 0 ? 'was due' : n === 0 ? 'renews today' : `renews in ${n} day${n === 1 ? '' : 's'}`}`, text: `${money(s.amount)} every ${SUB_CYCLES[s.cycle]}`, module: 'subs' }).catch(() => {});
    }
    if (subChanged) saveSubs();

    let billChanged = false;
    for (const b of billsData.bills) {
      const st = billState(b, t);
      const stage = st.kind === 'overdue' ? 'late' : st.days <= REMIND_DAYS ? 'soon' : '';
      if (!stage) continue;
      const key = `${b.id}@${b.next}@${stage}`;
      if (billsData.alerted[key]) continue;
      billsData.alerted[key] = t;
      billChanged = true;
      invoke('toast', { title: `${b.name}: ${billStateText(st)}`, text: b.amount ? money(b.amount) : '', module: 'bills' }).catch(() => {});
    }
    if (billChanged) saveBills();
  }

  const subWhen = (s) => {
    const n = daysUntil(s.next, today());
    return n < 0 ? `${-n} day${n === -1 ? '' : 's'} ago` : n === 0 ? 'today' : n === 1 ? 'tomorrow' : `in ${n} days`;
  };
  const billStateText = (st) => (st.kind === 'overdue' ? `overdue by ${st.days} day${st.days === 1 ? '' : 's'}` : st.kind === 'today' ? 'due today' : st.days === 1 ? 'due tomorrow' : `due in ${st.days} days`);

  function paintSubTabs() {
    const unpaidPl = (data.paylater || []).filter((p) => !p.paid).length;
    const subsCount = (subsData.subs || []).length;
    const dueBills = (billsData.bills || []).length;
    const tabs = [
      ['expenses', 'Expenses', ''],
      ['paylater', 'PayLater', unpaidPl ? String(unpaidPl) : ''],
      ['subs', 'Subscriptions', subsCount ? String(subsCount) : ''],
      ['bills', 'Bills', dueBills ? String(dueBills) : ''],
    ];
    $('mo-subtabs')?.replaceChildren(...tabs.map(([id, label, badge]) => {
      const b = el('button', { type: 'button', role: 'tab', className: 'mo-subtab', ariaSelected: String(subTab === id) },
        el('span', {}, label),
        ...(badge ? [el('small', { className: 'mo-subtab-badge' }, badge)] : []));
      b.onclick = () => setSubTab(id);
      return b;
    }));
  }

  function paintExpenses() {
    const [y, m] = month.split('-').map(Number);
    const s = moneyMonth(data.entries, month);
    const accs = moneyAccounts(data.entries, data.paylater || [], month);
    $('mo-title').textContent = fmt(new Date(y, m - 1, 1), { month: 'long', year: 'numeric' });
    const fig = (label, value, cls = '') => el('div', { className: cls }, el('small', {}, label), el('b', {}, value));

    // Wallet / Account cards strip
    const plCard = el('button', { type: 'button', className: 'mo-wallet-card pl' + (accs.paylaterUnpaid > 0 ? ' warn' : ''), onclick: () => setSubTab('paylater') },
      el('small', {}, 'PayLater unpaid →'),
      el('b', {}, money(accs.paylaterUnpaid)),
      el('span', {}, accs.paylaterSpent > 0 ? `${money(accs.paylaterSpent)} bought this month` : 'Tap to manage & settle'));
    $('mo-wallets').replaceChildren(
      el('div', { className: 'mo-wallet-card' + (accs.online < 0 ? ' neg' : '') },
        el('small', {}, 'Online account'),
        el('b', {}, (accs.online < 0 ? '−' : '') + money(Math.abs(accs.online))),
        el('span', {}, 'Net this month')),
      el('div', { className: 'mo-wallet-card' + (accs.cash < 0 ? ' neg' : '') },
        el('small', {}, 'Cash account'),
        el('b', {}, (accs.cash < 0 ? '−' : '') + money(Math.abs(accs.cash))),
        el('span', {}, 'Net this month')),
      plCard);

    $('mo-sum').replaceChildren(
      fig('Total spent', money(s.out)),
      fig('Income', money(s.in)),
      fig('Account balance (Online + Cash)', (accs.walletBalance < 0 ? '−' : '') + money(Math.abs(accs.walletBalance)), accs.walletBalance < 0 ? 'neg' : ''));

    // Account filter pills
    $('mo-acc-filter').replaceChildren(...[['all', 'All accounts'], ['online', 'Online'], ['cash', 'Cash'], ['paylater', 'PayLater']].map(([id, label]) => {
      const b = el('button', { type: 'button', className: 'mo-filter-pill' + (accFilter === id ? ' active' : ''), ariaPressed: String(accFilter === id) }, label);
      b.onclick = () => { accFilter = id; paintExpenses(); };
      return b;
    }));

    const top = s.byCat.slice(0, 6);
    const max = top[0]?.amount || 1;
    $('mo-bars').replaceChildren(...top.map((c) => {
      const fill = el('i', {});
      fill.style.width = Math.max(2, c.amount / max * 100) + '%';
      return el('li', {}, el('span', { className: 'mo-cat' }, c.cat), el('span', { className: 'mo-track', ariaHidden: 'true' }, fill), el('span', { className: 'mo-val' }, money(c.amount)));
    }));

    const visibleEntries = accFilter === 'all' ? s.list : s.list.filter((en) => (en.account || 'online') === accFilter);
    $('mo-list').replaceChildren(...visibleEntries.map((en) => {
      const acc = en.account || 'online';
      const badge = el('span', { className: 'mo-acc-badge ' + acc }, ACC_LABEL[acc] || 'Online');
      const del = el('button', { type: 'button', className: 'mo-del', ariaLabel: 'Delete ' + en.cat + ' ' + money(en.amount), textContent: '✕' });
      del.onclick = () => remove(en);
      return el('li', {}, el('time', {}, fmt(parseDay(en.day), { day: 'numeric', month: 'short' })),
        el('span', { className: 'mo-what' }, el('b', {}, en.cat), badge, en.note ? ' · ' + en.note : ''),
        el('span', { className: 'mo-amt' + (en.kind === 'in' ? ' in' : acc === 'paylater' ? ' pl' : '') }, (en.kind === 'in' ? '+' : '−') + money(en.amount)), del);
    }));
    const spentBy = Object.fromEntries(s.byCat.map((c) => [c.cat, c.amount]));
    $('mo-budget').replaceChildren(...Object.entries(data.budgets).map(([cat, limit]) => {
      const st = budgetStatus(spentBy[cat] || 0, limit);
      const fill = el('i', {});
      fill.style.width = Math.min(100, st.pct) + '%';
      const track = el('span', { className: 'mo-track' + (st.level === 'ok' ? '' : ' ' + st.level), ariaHidden: 'true' }, fill);
      return el('li', { className: st.level }, el('span', { className: 'mo-cat' }, cat), track,
        el('span', { className: 'mo-val' }, st.level === 'over' ? `over by ${money(-st.left)}` : `${money(spentBy[cat] || 0)} of ${money(limit)}${st.level === 'near' ? ' · almost' : ''}`));
    }));
    $('mo-bedit').replaceChildren(...Object.entries(data.budgets).map(([cat, limit]) => {
      const del = el('button', { type: 'button', ariaLabel: 'Remove budget ' + cat, textContent: '✕' });
      del.onclick = () => { delete data.budgets[cat]; save(); paint(); };
      return el('li', {}, el('span', {}, cat), el('time', {}, money(limit)), del);
    }));
    $('mo-none').hidden = visibleEntries.length > 0;
  }

  function paintPayLater() {
    $('pl-t-unpaid').ariaSelected = String(plTab === 'unpaid');
    $('pl-t-paid').ariaSelected = String(plTab === 'paid');
    const accs = moneyAccounts(data.entries, data.paylater || [], today().slice(0, 7));
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    $('pl-sum').replaceChildren(
      fig('Unpaid total', money(accs.paylaterUnpaid)),
      fig('Due this month', money(accs.paylaterDueMonth)),
      fig('Settled this month', money(accs.paylaterSettled)));
    const items = (data.paylater || []).filter((p) => (plTab === 'unpaid' ? !p.paid : !!p.paid))
      .sort((a, b) => (a.due || '').localeCompare(b.due || ''));
    $('pl-list').replaceChildren(...items.map((it) => {
      const del = el('button', { type: 'button', className: 'mo-del', ariaLabel: 'Delete ' + it.title, textContent: '✕', onclick: () => removePayLater(it) });
      if (!it.paid) {
        const dLeft = daysUntil(it.due || today(), today());
        const dueTxt = dLeft < 0 ? `Overdue ${-dLeft}d` : dLeft === 0 ? 'Due today' : `Due in ${dLeft}d`;
        const payOnline = el('button', { type: 'button', className: 'mo-pay-btn', onclick: () => settlePayLater(it, 'online') }, 'Pay · Online');
        const payCash = el('button', { type: 'button', className: 'mo-pay-btn', onclick: () => settlePayLater(it, 'cash') }, 'Pay · Cash');
        return el('li', { className: 'pl-row' },
          el('div', { className: 'pl-info' },
            el('b', {}, it.title),
            el('small', {}, `${it.cat || 'Shopping'} · ${dueTxt} (${fmt(parseDay(it.due || today()), { day: 'numeric', month: 'short' })})`)),
          el('span', { className: 'mo-amt pl' }, money(it.amount)),
          el('div', { className: 'pl-acts' }, payOnline, payCash, del));
      }
      return el('li', { className: 'pl-row paid' },
        el('div', { className: 'pl-info' },
          el('b', {}, '✓ ' + it.title),
          el('small', {}, `Settled via ${ACC_LABEL[it.paidWith] || 'Online'} on ${fmt(parseDay(it.paidDay || today()), { day: 'numeric', month: 'short' })}`)),
        el('span', { className: 'mo-amt' }, money(it.amount)),
        del);
    }));
    $('pl-none').hidden = items.length > 0;
    $('pl-none').textContent = plTab === 'unpaid'
      ? 'No unpaid PayLater bills. When you record an expense with Account = PayLater, it appears here until you settle it.'
      : 'No settled PayLater items yet.';
  }

  function paintSubs() {
    const list = [...(subsData.subs || [])].sort((a, b) => a.next.localeCompare(b.next) || a.name.localeCompare(b.name));
    const monthly = Math.round(list.reduce((n, s) => n + monthlyCost(s.amount, s.cycle) * 100, 0)) / 100;
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    $('sb-sum').replaceChildren(fig('Per month', money(monthly)), fig('Per year', money(Math.round(monthly * 12 * 100) / 100)), fig('Subscriptions', String(list.length)));
    $('sb-list').replaceChildren(...list.map((s) => {
      const n = daysUntil(s.next, today());
      const payOnline = el('button', { type: 'button', className: 'mo-pay-btn', onclick: () => paySub(s, 'online') }, 'Paid · Online');
      const payPl = el('button', { type: 'button', className: 'mo-pay-btn', onclick: () => paySub(s, 'paylater') }, 'Paid · PayLater');
      const del = el('button', { type: 'button', className: 'mo-del', ariaLabel: 'Remove ' + s.name, textContent: '✕', onclick: () => removeSub(s) });
      return el('li', { className: 'pl-row' + (n <= REMIND_DAYS ? ' soon' : '') },
        el('div', { className: 'pl-info' },
          el('b', {}, s.name),
          el('small', {}, `${money(s.amount)} every ${SUB_CYCLES[s.cycle]} · Renews ${subWhen(s)} (${fmt(parseDay(s.next), { day: 'numeric', month: 'short' })})`)),
        el('div', { className: 'pl-acts' }, payOnline, payPl, del));
    }));
    $('sb-none').hidden = list.length > 0;
  }

  function paintBills() {
    const t = today();
    $('bl-t-due').ariaSelected = String(billTab === 'due');
    $('bl-t-paid').ariaSelected = String(billTab === 'paid');
    const allBills = [...(billsData.bills || []), ...(billsData.history || []).map((h) => ({ ...h, paid: h.paid }))];
    const yr = paidTotals(allBills, new Date().getFullYear());
    const lateCount = (billsData.bills || []).filter((b) => billState(b, t).kind === 'overdue').length;
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    $('bl-sum').replaceChildren(
      fig('Due bills', String((billsData.bills || []).length)),
      fig('Overdue', String(lateCount)),
      fig(`Paid in ${new Date().getFullYear()}`, money(yr.total || 0)));

    if (billTab === 'due') {
      const sorted = [...(billsData.bills || [])].sort((a, b) => a.next.localeCompare(b.next) || a.name.localeCompare(b.name));
      $('bl-list').replaceChildren(...sorted.map((b) => {
        const st = billState(b, t);
        const del = el('button', { type: 'button', className: 'mo-del', ariaLabel: 'Remove ' + b.name, textContent: '✕', onclick: () => removeBill(b) });
        const acts = payingBill === b
          ? el('form', {
              className: 'bl-payform',
              onsubmit: (e) => {
                e.preventDefault();
                const n = parseAmount($('bl-pay-amt').value);
                const via = $('bl-pay-acc')?.value || 'online';
                if (n === null && $('bl-pay-amt').value.trim() !== '0') { $('bl-pay-amt').focus(); return; }
                payBill(b, n || 0, via);
              },
            },
              el('input', { id: 'bl-pay-amt', inputMode: 'decimal', autocomplete: 'off', value: b.amount ? String(b.amount) : '', ariaLabel: 'Amount paid' }),
              el('select', { id: 'bl-pay-acc', ariaLabel: 'Paid with account' },
                el('option', { value: 'online' }, 'Online'),
                el('option', { value: 'cash' }, 'Cash'),
                el('option', { value: 'paylater' }, 'PayLater')),
              el('button', { className: 'mo-pay-btn', type: 'submit' }, 'Confirm'),
              el('button', { className: 'linkish', type: 'button', onclick: () => { payingBill = null; paintBills(); } }, 'Cancel'))
          : el('div', { className: 'pl-acts' },
              el('button', { type: 'button', className: 'mo-pay-btn', onclick: () => { payingBill = b; paintBills(); $('bl-pay-amt')?.select(); } }, 'Paid…'),
              del);
        return el('li', { className: 'pl-row' + (st.kind === 'later' && st.days > REMIND_DAYS ? '' : ' soon') },
          el('div', { className: 'pl-info' },
            el('b', {}, b.name),
            el('small', {}, `${b.amount ? money(b.amount) + ' · ' : ''}${BILL_CYCLES.find(([v]) => v === b.cycle)?.[1]?.toLowerCase() || b.cycle} · ${billStateText(st)} (${fmt(parseDay(b.next), { day: 'numeric', month: 'short' })})${b.note ? ' · ' + b.note : ''}`)),
          acts);
      }));
      $('bl-none').hidden = sorted.length > 0;
      $('bl-none').textContent = 'No bills yet. Add electricity, water, internet or rent.';
    } else {
      const rows = allBills.flatMap((b) => (b.paid || []).map((p) => ({ name: b.name, ...p }))).sort((a, b) => b.day.localeCompare(a.day));
      $('bl-list').replaceChildren(...rows.map((r) => el('li', { className: 'pl-row paid' },
        el('div', { className: 'pl-info' },
          el('b', {}, '✓ ' + r.name),
          el('small', {}, `${fmt(parseDay(r.day), { day: 'numeric', month: 'short', year: 'numeric' })}${r.account ? ' · ' + (ACC_LABEL[r.account] || r.account) : ''}`)),
        el('span', { className: 'mo-amt' }, r.amount ? money(r.amount) : 'paid'))));
      $('bl-none').hidden = rows.length > 0;
      $('bl-none').textContent = 'Nothing paid yet.';
    }
  }

  function paint() {
    paintSubTabs();
    if (subTab === 'expenses') paintExpenses();
    else if (subTab === 'paylater') paintPayLater();
    else if (subTab === 'subs') paintSubs();
    else if (subTab === 'bills') paintBills();
  }

  const calendarFn = (from, to) => [
    ...(subsData.subs || []).flatMap((s) => renewalsIn(s, from, to).map((day) => ({ day, title: `${s.name} ${money(s.amount)}`, kind: 'Renews', view: 'money' }))),
    ...(data.paylater || []).filter((p) => !p.paid && p.due >= from && p.due <= to).map((p) => ({ day: p.due, title: `PayLater: ${p.title} ${money(p.amount)}`, kind: 'PayLater', view: 'money' })),
  ];

  const metricsFn = () => {
    const m = () => moneyMonth(data.entries, today().slice(0, 7));
    return [
      { id: 'money.saved', label: 'Saved this month (income minus spending)', unit: data.cur, get: () => m().balance },
      { id: 'money.spent', label: 'Spent this month', unit: data.cur, get: () => m().out },
    ];
  };
  const group = { module: 'money', title: 'Money', items: [['N', 'New entry'], [['←', '→'], 'Previous or next month'], ['T', 'This month']] };
  const commandFn = () => [
    { label: 'Add expense', hint: 'Money', kind: 'Command', run: async () => { await setView('money'); setSubTab('expenses'); $('mo-amount').focus(); } },
    { label: 'Open PayLater', hint: 'Money', kind: 'Command', run: async () => { await setView('money'); setSubTab('paylater'); } },
    { label: 'Open Subscriptions', hint: 'Money', kind: 'Command', run: async () => { await setView('money'); setSubTab('subs'); } },
    { label: 'Open Bills', hint: 'Money', kind: 'Command', run: async () => { await setView('money'); setSubTab('bills'); } },
  ];

  function addEntry({ day, kind: k, amount, cat, note, account: acc = 'online' }) {
    const entry = { id: crypto.randomUUID(), day, kind: k, amount, cat, note: note || '', account: acc };
    data.entries.push(entry);
    if (k === 'out' && acc === 'paylater') {
      const due = addCycle(day, 'month', parseDay(day).getDate());
      data.paylater.push({ id: crypto.randomUUID(), entryId: entry.id, title: note ? `${cat} · ${note}` : cat, amount, cat, day, due, paid: false, paidWith: null, paidDay: null });
    }
    checkBudget(entry);
    emit('expense-added', { key: 'expense:' + entry.id });
    save();
    if ($('mo-title')) paint();
  }

  defineModule('money', {
    addEntry,
    daily() {
      const byDay = {};
      for (const e of data.entries) if (e.kind === 'out') byDay[e.day] = (byDay[e.day] || 0) + e.amount;
      return [{ id: 'money.spent', label: 'spending', byDay, zero: true }];
    },
    details: (since, until) => ({ title: 'Expenses, entry by entry', lines: moneyDetail(data.entries, since, until) }),
    weekly(since, until) {
      const list = data.entries.filter((e) => e.day >= since && e.day <= until);
      if (!list.length) return { title: 'Money', lines: ['Nothing recorded'] };
      const sum = (k) => list.filter((e) => e.kind === k).reduce((n, e) => n + Math.round(e.amount * 100), 0) / 100;
      const cats = {};
      for (const e of list.filter((x) => x.kind === 'out')) cats[e.cat] = (cats[e.cat] || 0) + Math.round(e.amount * 100) / 100;
      const top = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c, v]) => `${c} ${money(v)}`);
      return { title: 'Money', lines: [`Spent ${money(sum('out'))}, earned ${money(sum('in'))}`, ...(top.length ? ['Most spent on: ' + top.join(', ')] : [])] };
    },
    summary() {
      const t = today();
      const spent = data.entries.filter((e) => e.day === t && e.kind === 'out').reduce((n, e) => n + Math.round(e.amount * 100), 0) / 100;
      const m = moneyMonth(data.entries, t.slice(0, 7));
      const accs = moneyAccounts(data.entries, data.paylater || [], t.slice(0, 7));
      const over = Object.entries(data.budgets).filter(([cat, limit]) => budgetStatus(m.byCat.find((c) => c.cat === cat)?.amount || 0, limit).level === 'over').map(([cat]) => cat);
      const subParts = [`${money(m.out)} this month`];
      if (accs.paylaterUnpaid > 0) subParts.push(`PayLater ${money(accs.paylaterUnpaid)}`);
      return { label: 'Spent today', value: money(spent), unit: '', warn: over.length > 0, sub: over.length ? `Over budget: ${over.join(', ')}` : subParts.join(' · ') };
    },
    start() {
      data = { ...data, ...(moduleData.money || {}) };
      data.budgets = data.budgets || {};
      data.paylater = Array.isArray(data.paylater) ? data.paylater : [];
      data.chips = { out: [], in: [], ...(data.chips || {}) };
      data.alerted = data.alerted || {};
      subsData = { subs: [], alerted: {}, ...(moduleData.subs || {}) };
      billsData = { bills: [], history: [], alerted: {}, ...(moduleData.bills || {}) };
      build();
      paint();
      checkDue();
      commandHooks.push(commandFn);
      calendarHooks.push(calendarFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
      timer = setInterval(() => { checkDue(); if (view === 'money') paint(); }, 3600000);
    },
    stop() {
      clearInterval(timer);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      calendarHooks.splice(calendarHooks.indexOf(calendarFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      metricHooks.splice(metricHooks.indexOf(metricsFn), 1);
    },
    show() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape') { if (payingBill) { payingBill = null; paint(); } else if (isField(t)) t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') {
        e.preventDefault();
        const target = { expenses: 'mo-amount', paylater: 'pl-title', subs: 'sb-name', bills: 'bl-name' }[subTab];
        $(target)?.focus();
      } else if (subTab === 'expenses' && e.key === 'ArrowLeft') shiftMonthBy(-1);
      else if (subTab === 'expenses' && e.key === 'ArrowRight') shiftMonthBy(1);
      else if (subTab === 'expenses' && e.code === 'KeyT') { month = today().slice(0, 7); paint(); }
    },
  });
})();
