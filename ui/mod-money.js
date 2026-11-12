// Expenses module: a month of spending and income by category, in its own view. Loaded only while the module is on.
// Data: { cur: '฿', entries: [{ id, day, kind: 'out' | 'in', amount, cat, note }] }.
(() => {
  let data = { cur: '฿', entries: [] };
  let month = localDay(new Date()).slice(0, 7);
  let kind = 'out';
  // one tap fills the category; what you used before joins these, most used first
  const QUICK = { out: ['Food', 'Transport', 'Bills', 'Shopping', 'Health', 'Fun', 'Invest', 'Savings', 'Other'], in: ['Salary', 'Dividends', 'Gift', 'Refund', 'Other'] };
  const DEFAULT_CATS = [...new Set([...QUICK.out, ...QUICK.in])];
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
        el('ul', { id: 'mo-bars', className: 'mo-bars', ariaLabel: 'Spending by category' }),
        el('ul', { id: 'mo-list', className: 'mo-list', ariaLabel: 'Entries' }),
        el('div', { id: 'mo-none', className: 'empty', hidden: true }, 'Nothing recorded this month. Press N to add something.')),
      el('aside', { className: 'mo-side', ariaLabel: 'Add an entry' },
        el('form', { id: 'mo-form', onsubmit: add },
          el('div', { className: 'mo-kind', role: 'group', ariaLabel: 'Type' },
            el('button', { id: 'mo-out', type: 'button', ariaPressed: 'true', textContent: 'Spent', onclick: () => setKind('out') }),
            el('button', { id: 'mo-in', type: 'button', ariaPressed: 'false', textContent: 'Income', onclick: () => setKind('in') })),
          num('mo-amount', 'Amount', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0', ariaLabel: 'Amount' }),
          num('mo-cat', 'Category', { autocomplete: 'off', maxLength: 30, placeholder: 'Food' }),
          el('div', { id: 'mo-chips', className: 'mo-chips', role: 'group', ariaLabel: 'Quick categories' }),
          el('datalist', { id: 'mo-cats' }),
          num('mo-day', 'Date', { type: 'date' }),
          num('mo-note', 'Note', { maxLength: 120, autocomplete: 'off', placeholder: 'Optional' }),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'mo-msg', className: 'mo-msg', role: 'status' })),
        num('mo-cur', 'Currency symbol', { maxLength: 4, autocomplete: 'off' })));
    $('mo-cat').setAttribute('list', 'mo-cats');
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
    const extra = Object.keys(mine).filter((c) => !QUICK[kind].includes(c)).sort((a, b) => mine[b] - mine[a]).slice(0, 4);
    $('mo-chips').replaceChildren(...[...QUICK[kind], ...extra].map((c) => {
      const b = el('button', { type: 'button', textContent: c, ariaPressed: String($('mo-cat').value.trim().toLowerCase() === c.toLowerCase()) });
      b.onclick = () => { $('mo-cat').value = c; paintChips(); $('mo-amount').focus(); };
      return b;
    }));
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
    $('mo-none').hidden = s.list.length > 0;
    const used = [...new Set([...data.entries.map((e) => e.cat), ...DEFAULT_CATS])];
    $('mo-cats').replaceChildren(...used.map((c) => el('option', { value: c })));
  }

  const group = { module: 'money', title: 'Money', items: [['N', 'New entry'], [['←', '→'], 'Previous or next month'], ['T', 'This month']] };
  const commandFn = () => [{ label: 'Add expense', hint: 'Money', kind: 'Command', run: async () => { await setView('money'); $('mo-amount').focus(); } }];

  defineModule('money', {
    start() {
      data = { ...data, ...(moduleData.money || {}) };
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
      if (e.code === 'KeyN') { e.preventDefault(); $('mo-amount').focus(); }
      else if (e.key === 'ArrowLeft') shiftMonthBy(-1);
      else if (e.key === 'ArrowRight') shiftMonthBy(1);
      else if (e.code === 'KeyT') { month = localDay(new Date()).slice(0, 7); paint(); }
    },
  });
})();
