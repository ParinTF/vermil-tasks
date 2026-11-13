// Expenses module: a month of spending and income by category, in its own view. Loaded only while the module is on.
// Data: { cur: '฿', entries: [{ id, day, kind: 'out' | 'in', amount, cat, note }], budgets, chips: { out: [cat], in: [cat] } (categories kept as buttons) }.
(() => {
  let data = { cur: '฿', entries: [], budgets: {}, alerted: {} }; // budgets: { category: monthly limit }, alerted: { month: { category: 80 or 100 } }
  let month = localDay(new Date()).slice(0, 7);
  let kind = 'out';
  // one tap fills the category; what you used before joins these, most used first
  const QUICK = { out: ['Food', 'Transport', 'Bills', 'Shopping', 'Health', 'Fun', 'Invest', 'Savings', 'Other'], in: ['Salary', 'Dividends', 'Gift', 'Refund', 'Other'] };
  const save = () => saveModule('money', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('money-view');
  const money = (n) => moneyLabel(n, data.cur);

  function build() {
    const num = (id, label, props) => el('label', { className: 'mo-field' }, label, el('input', { id, ...props }));
    root().replaceChildren(
      el('section', { className: 'mo-main', ariaLabel: 'Money' },
        el('div', { className: 'mo-head' }, el('h2', { id: 'mo-title' }),
          el('div', { className: 'mo-nav' },
            el('button', { id: 'mo-prev', className: 'linkish', type: 'button', ariaLabel: 'Previous month', textContent: '‹', onclick: () => shiftMonthBy(-1) }),
            el('button', { id: 'mo-now', className: 'linkish', type: 'button', textContent: 'This month', onclick: () => { month = localDay(new Date()).slice(0, 7); paint(); } }),
            el('button', { id: 'mo-next', className: 'linkish', type: 'button', ariaLabel: 'Next month', textContent: '›', onclick: () => shiftMonthBy(1) }))),
        el('div', { id: 'mo-sum', className: 'mo-sum' }),
        el('ul', { id: 'mo-budget', className: 'mo-budget', ariaLabel: 'Budgets this month' }),
        el('ul', { id: 'mo-bars', className: 'mo-bars', ariaLabel: 'Spending by category' }),
        el('ul', { id: 'mo-list', className: 'mo-list', ariaLabel: 'Entries' }),
        el('div', { id: 'mo-none', className: 'empty', hidden: true }, 'Nothing recorded this month. Press N to add something.')),
      el('aside', { className: 'mo-side', ariaLabel: 'Add an entry' },
        el('form', { id: 'mo-form', onsubmit: add },
          el('div', { className: 'mo-kind', role: 'group', ariaLabel: 'Type' },
            el('button', { id: 'mo-out', type: 'button', ariaPressed: 'true', textContent: 'Spent', onclick: () => setKind('out') }),
            el('button', { id: 'mo-in', type: 'button', ariaPressed: 'false', textContent: 'Income', onclick: () => setKind('in') })),
          num('mo-amount', 'Amount', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0', ariaLabel: 'Amount' }),
          el('label', { className: 'mo-field' }, 'Category', el('div', { className: 'mo-catrow' },
            el('input', { id: 'mo-cat', autocomplete: 'off', maxLength: 30, placeholder: 'Food' }),
            el('button', { id: 'mo-addcat', type: 'button', className: 'mo-plus', textContent: '+', title: 'Keep this category as a button below', ariaLabel: 'Keep this category as a button below', onclick: keepCategory }))),
          el('div', { id: 'mo-chips', className: 'mo-chips', role: 'group', ariaLabel: 'Categories' }),
          num('mo-day', 'Date', { type: 'date' }),
          num('mo-note', 'Note', { maxLength: 120, autocomplete: 'off', placeholder: 'Optional' }),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'mo-msg', className: 'mo-msg', role: 'status' })),
        num('mo-cur', 'Currency symbol', { maxLength: 4, autocomplete: 'off' }),
        el('form', { id: 'mo-bform', className: 'mo-bform', onsubmit: setBudget },
          el('div', { className: 'mo-bhead' }, 'Monthly budget'),
          el('div', { className: 'mo-brow' }, el('input', { id: 'mo-bcat', maxLength: 30, autocomplete: 'off', placeholder: 'Category', ariaLabel: 'Budget category' }), el('input', { id: 'mo-blimit', inputMode: 'decimal', autocomplete: 'off', placeholder: 'Limit', ariaLabel: 'Monthly limit' }), el('button', { className: 'linkish', type: 'submit', textContent: 'Set' })),
          el('div', { id: 'mo-bmsg', className: 'mo-msg', role: 'status' }),
          el('ul', { id: 'mo-bedit', className: 'mo-bedit' }))));
    $('mo-cat').oninput = paintChips;
    paintChips();
    $('mo-cur').value = data.cur;
    $('mo-cur').oninput = () => { data.cur = $('mo-cur').value.trim() || '฿'; save(); paint(); };
    $('mo-day').value = localDay(new Date());
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
      // a category you kept: a small x takes it off again
      const x = el('button', { type: 'button', className: 'mo-chip-x', textContent: '✕', ariaLabel: `Remove the button ${c}`, title: 'Remove this button' });
      x.onclick = () => { data.chips[kind] = mine2.filter((n) => n !== c); save(); paintChips(); };
      return el('span', { className: 'mo-chipgroup' }, b, x);
    }));
  }

  // the + beside the Category box: keep what is typed as a button below, so next time it is one tap
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
    paintChips();
  }

  function add(e) {
    e.preventDefault();
    const amount = parseAmount($('mo-amount').value);
    if (amount === null) { $('mo-msg').textContent = 'Type an amount above 0.'; $('mo-amount').focus(); return; }
    const entry = {
      id: crypto.randomUUID(), day: $('mo-day').value || localDay(new Date()), kind, amount,
      cat: $('mo-cat').value.trim() || (kind === 'out' ? 'Other' : 'Income'), note: $('mo-note').value.trim(),
    };
    data.entries.push(entry);
    checkBudget(entry);
    save();
    month = entry.day.slice(0, 7); // show where it went
    $('mo-amount').value = '';
    $('mo-note').value = '';
    $('mo-cat').value = '';
    $('mo-msg').textContent = `Added ${money(amount)} to ${entry.cat}.`;
    paintChips();
    paint();
    $('mo-amount').focus();
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

  // a toast the first time a category reaches 80% and again at 100% of its budget in a month
  function checkBudget(entry) {
    const limit = data.budgets[entry.cat];
    if (entry.kind !== 'out' || !limit) return;
    const month = entry.day.slice(0, 7);
    const spent = moneyMonth(data.entries, month).byCat.find((c) => c.cat === entry.cat)?.amount || 0;
    const st = budgetStatus(spent, limit);
    const level = st.level === 'over' ? 100 : st.level === 'near' ? 80 : 0;
    const seen = (data.alerted[month] ||= {});
    if (level <= (seen[entry.cat] || 0)) return;
    seen[entry.cat] = level;
    invoke('toast', { title: level === 100 ? `${entry.cat}: over budget` : `${entry.cat}: ${st.pct}% of budget`, text: `${money(spent)} of ${money(limit)} this month`, module: 'money' }).catch(() => {});
    if (level === 100) emit('over-budget', { cat: entry.cat, amount: spent });
  }

  async function remove(entry) {
    if (!(await ask(`Delete ${money(entry.amount)} ${entry.cat}${entry.note ? ' (' + entry.note + ')' : ''}?`, 'Delete'))) return;
    data.entries = data.entries.filter((x) => x.id !== entry.id);
    save();
    paint();
  }

  function paint() {
    const [y, m] = month.split('-').map(Number);
    const s = moneyMonth(data.entries, month);
    $('mo-title').textContent = fmt(new Date(y, m - 1, 1), { month: 'long', year: 'numeric' });
    const fig = (label, value, cls = '') => el('div', { className: cls }, el('small', {}, label), el('b', {}, value));
    $('mo-sum').replaceChildren(fig('Spent', money(s.out)), fig('Income', money(s.in)), fig('Balance', (s.balance < 0 ? '−' : '') + money(Math.abs(s.balance)), s.balance < 0 ? 'neg' : ''));
    const top = s.byCat.slice(0, 6);
    const max = top[0]?.amount || 1;
    $('mo-bars').replaceChildren(...top.map((c) => {
      const fill = el('i', {});
      fill.style.width = Math.max(2, c.amount / max * 100) + '%';
      return el('li', {}, el('span', { className: 'mo-cat' }, c.cat), el('span', { className: 'mo-track', ariaHidden: 'true' }, fill), el('span', { className: 'mo-val' }, money(c.amount)));
    }));
    $('mo-list').replaceChildren(...s.list.map((en) => {
      const del = el('button', { type: 'button', className: 'mo-del', ariaLabel: 'Delete ' + en.cat + ' ' + money(en.amount), textContent: '✕' });
      del.onclick = () => remove(en);
      return el('li', {}, el('time', {}, fmt(parseDay(en.day), { day: 'numeric', month: 'short' })),
        el('span', { className: 'mo-what' }, el('b', {}, en.cat), en.note ? ' · ' + en.note : ''),
        el('span', { className: 'mo-amt' + (en.kind === 'in' ? ' in' : '') }, (en.kind === 'in' ? '+' : '−') + money(en.amount)), del);
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
    $('mo-none').hidden = s.list.length > 0;
  }

  const metricsFn = () => {
    const m = () => moneyMonth(data.entries, localDay(new Date()).slice(0, 7));
    return [
      { id: 'money.saved', label: 'Saved this month (income minus spending)', unit: data.cur, get: () => m().balance },
      { id: 'money.spent', label: 'Spent this month', unit: data.cur, get: () => m().out },
    ];
  };
  const group = { module: 'money', title: 'Money', items: [['N', 'New entry'], [['←', '→'], 'Previous or next month'], ['T', 'This month']] };
  const commandFn = () => [{ label: 'Add expense', hint: 'Money', kind: 'Command', run: async () => { await setView('money'); $('mo-amount').focus(); } }];

  // other modules (Shopping) record a spend through here, so this module's copy stays the one that is saved
  function addEntry({ day, kind, amount, cat, note }) {
    const entry = { id: crypto.randomUUID(), day, kind, amount, cat, note: note || '' };
    data.entries.push(entry);
    checkBudget(entry);
    save();
    if ($('mo-title')) paint();
  }

  defineModule('money', {
    addEntry,
    daily() { // for Insights
      const byDay = {};
      for (const e of data.entries) if (e.kind === 'out') byDay[e.day] = (byDay[e.day] || 0) + e.amount;
      return [{ id: 'money.spent', label: 'spending', byDay, zero: true }];
    },
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
      const today = localDay(new Date());
      const spent = data.entries.filter((e) => e.day === today && e.kind === 'out').reduce((n, e) => n + Math.round(e.amount * 100), 0) / 100;
      const month = moneyMonth(data.entries, today.slice(0, 7));
      const over = Object.entries(data.budgets).filter(([cat, limit]) => budgetStatus(month.byCat.find((c) => c.cat === cat)?.amount || 0, limit).level === 'over').map(([cat]) => cat);
      return { label: 'Spent today', value: money(spent), unit: '', warn: over.length > 0, sub: over.length ? `Over budget: ${over.join(', ')}` : `${money(month.out)} this month` };
    },
    start() {
      data = { ...data, ...(moduleData.money || {}) };
      data.budgets = data.budgets || {};
      data.chips = { out: [], in: [], ...(data.chips || {}) }; // categories you kept as buttons
      data.alerted = data.alerted || {};
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
    show() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('mo-amount').focus(); }
      else if (e.key === 'ArrowLeft') shiftMonthBy(-1);
      else if (e.key === 'ArrowRight') shiftMonthBy(1);
      else if (e.code === 'KeyT') { month = localDay(new Date()).slice(0, 7); paint(); }
    },
  });
})();
