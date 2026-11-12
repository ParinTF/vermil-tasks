// Shopping & Meals module: a shopping list that remembers what you usually buy, and a meal plan for the week.
// Data: { items: [{ id, name, done }], history: { name: times added }, bought: { "YYYY-MM-DD": count }, meals: { "YYYY-MM-DD": { b, l, d } } }.
(() => {
  let data = { items: [], history: {}, bought: {}, meals: {} };
  let day = localDay(new Date()); // the day whose meals are shown
  const SLOTS = [['b', 'Breakfast'], ['l', 'Lunch'], ['d', 'Dinner']];
  const save = () => saveModule('shopping', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('shopping-view');
  const today = () => localDay(new Date());
  const money = () => started.has('money') && registry.money?.addEntry;

  function build() {
    root().replaceChildren(
      el('section', { className: 'sh-main', ariaLabel: 'Shopping list' },
        el('div', { className: 'sh-head' }, el('h2', {}, 'Shopping'), el('span', { id: 'sh-count', className: 'sh-count', role: 'status' })),
        el('form', { id: 'sh-form', className: 'sh-form', onsubmit: addFromForm },
          el('input', { id: 'sh-name', maxLength: 60, autocomplete: 'off', placeholder: 'Add an item, e.g. milk', ariaLabel: 'Item' }),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))),
        el('div', { id: 'sh-chips', className: 'sh-chips', role: 'group', ariaLabel: 'Usual items' }),
        el('ul', { id: 'sh-list', className: 'sh-list', ariaLabel: 'To buy' }),
        el('div', { id: 'sh-none', className: 'empty', hidden: true }, 'Nothing to buy. Add an item, or plan a meal and send its ingredients here.'),
        el('div', { id: 'sh-foot', className: 'sh-foot' },
          el('button', { id: 'sh-clear', className: 'linkish', type: 'button', textContent: 'Clear bought items', onclick: clearBought }),
          el('form', { id: 'sh-log', className: 'sh-log', onsubmit: logSpend },
            el('input', { id: 'sh-total', inputMode: 'decimal', autocomplete: 'off', placeholder: 'Total spent', ariaLabel: 'Total spent' }),
            el('button', { className: 'linkish', type: 'submit', textContent: 'Log to Expenses' })),
          el('span', { id: 'sh-msg', className: 'sh-msg', role: 'status' }))),
      el('aside', { className: 'sh-side', ariaLabel: 'Meal plan' },
        el('h3', {}, 'Meals this week'),
        el('div', { className: 'sh-week' },
          el('button', { id: 'sh-wprev', className: 'linkish', type: 'button', ariaLabel: 'Previous week', textContent: '‹', onclick: () => { day = shiftDay(day, -7); paintMeals(); } }),
          el('div', { id: 'sh-days', className: 'sh-days', role: 'group', ariaLabel: 'Days' }),
          el('button', { id: 'sh-wnext', className: 'linkish', type: 'button', ariaLabel: 'Next week', textContent: '›', onclick: () => { day = shiftDay(day, 7); paintMeals(); } })),
        el('div', { id: 'sh-day-title', className: 'sh-day-title' }),
        el('div', { id: 'sh-slots', className: 'sh-slots' }),
        el('p', { className: 'sh-fine' }, 'Write "Pad thai: noodles, shrimp, egg" and press → to add the ingredients to the list.')));
    paint();
  }

  function addItem(name) {
    name = name.trim();
    if (!name) return false;
    if (data.items.some((i) => !i.done && i.name.toLowerCase() === name.toLowerCase())) return false; // already there
    data.items.push({ id: crypto.randomUUID(), name, done: false });
    data.history[name] = (data.history[name] || 0) + 1;
    return true;
  }

  function addFromForm(e) {
    e.preventDefault();
    const added = addItem($('sh-name').value);
    $('sh-name').value = '';
    if (added) save();
    paint();
    $('sh-name').focus();
  }

  function toggle(it) {
    it.done = !it.done;
    const d = today();
    data.bought[d] = Math.max(0, (data.bought[d] || 0) + (it.done ? 1 : -1));
    if (!data.bought[d]) delete data.bought[d];
    save();
    paint();
  }

  function clearBought() {
    data.items = data.items.filter((i) => !i.done);
    save();
    paint();
  }

  function logSpend(e) {
    e.preventDefault();
    const amount = parseAmount($('sh-total').value);
    if (amount === null) { $('sh-msg').textContent = 'Type the total above 0.'; return; }
    if (!money()) { $('sh-msg').textContent = 'Switch on Expenses to log it.'; return; }
    registry.money.addEntry({ day: today(), kind: 'out', amount, cat: 'Food', note: 'Shopping' });
    $('sh-total').value = '';
    $('sh-msg').textContent = 'Logged to Expenses under Food.';
  }

  function paint() {
    const open = data.items.filter((i) => !i.done);
    $('sh-count').textContent = open.length ? `${open.length} to buy` : '';
    $('sh-chips').replaceChildren(...topItems(data.history, 8, data.items.filter((i) => !i.done).map((i) => i.name)).map((n) => {
      const b = el('button', { type: 'button', textContent: '+ ' + n });
      b.onclick = () => { if (addItem(n)) save(); paint(); };
      return b;
    }));
    $('sh-list').replaceChildren(...[...open, ...data.items.filter((i) => i.done)].map((it) => {
      const box = el('input', { type: 'checkbox', checked: it.done, ariaLabel: (it.done ? 'Not bought: ' : 'Bought: ') + it.name });
      box.onchange = () => toggle(it);
      const del = el('button', { type: 'button', className: 'sh-del', ariaLabel: 'Remove ' + it.name, textContent: '✕' });
      del.onclick = () => { data.items = data.items.filter((x) => x.id !== it.id); save(); paint(); };
      return el('li', { className: it.done ? 'done' : '' }, box, el('span', {}, it.name), del);
    }));
    $('sh-none').hidden = data.items.length > 0;
    const anyDone = data.items.some((i) => i.done);
    $('sh-clear').hidden = !anyDone;
    $('sh-log').hidden = !anyDone;
    paintMeals();
  }

  function paintMeals() {
    const week = weekDays(day);
    $('sh-days').replaceChildren(...week.map((d) => {
      const planned = Object.values(data.meals[d] || {}).some((v) => v.trim());
      const b = el('button', { type: 'button', ariaPressed: String(d === day), className: (d === today() ? 'today ' : '') + (planned ? 'planned' : ''), ariaLabel: fmt(parseDay(d), { weekday: 'long', day: 'numeric', month: 'long' }) + (planned ? ', planned' : '') },
        fmt(parseDay(d), { weekday: 'narrow' }), el('small', {}, String(parseDay(d).getDate())));
      b.onclick = () => { day = d; paintMeals(); };
      return b;
    }));
    $('sh-day-title').textContent = day === today() ? 'Today' : fmt(parseDay(day), { weekday: 'long', day: 'numeric', month: 'long' });
    $('sh-slots').replaceChildren(...SLOTS.map(([k, label]) => {
      const input = el('input', { id: 'sh-meal-' + k, value: (data.meals[day] || {})[k] || '', maxLength: 120, autocomplete: 'off', placeholder: label, ariaLabel: label });
      input.onchange = () => setMeal(k, input.value);
      const send = el('button', { type: 'button', className: 'sh-send', textContent: '→', ariaLabel: `Add the ingredients of ${label.toLowerCase()} to the list`, title: 'Add its ingredients to the list' });
      send.onclick = () => {
        setMeal(k, input.value);
        const list = parseIngredients(input.value);
        const added = list.filter(addItem).length;
        save();
        paint();
        $('sh-msg').textContent = !list.length ? 'No ingredients found: write "Dish: a, b, c".' : added ? `Added ${added} to the list.` : 'Already on the list.';
      };
      return el('label', { className: 'sh-slot' }, el('small', {}, label), el('span', {}, input, send));
    }));
  }

  function setMeal(k, v) {
    const m = data.meals[day] || {};
    m[k] = v.trim();
    if (Object.values(m).every((x) => !x)) delete data.meals[day]; else data.meals[day] = m;
    save();
    paintMeals();
  }

  const group = { module: 'shopping', title: 'Shopping & Meals', items: [['N', 'Add an item']] };
  const commandFn = () => [{ label: 'Add to the shopping list', hint: 'Shopping', kind: 'Command', run: async () => { await setView('shopping'); $('sh-name').focus(); } }];

  defineModule('shopping', {
    summary() {
      const dinner = (data.meals[today()] || {}).d;
      const open = data.items.filter((i) => !i.done).length;
      if (!dinner && !open) return null;
      return dinner ? { label: 'Dinner tonight', value: dinner.split(/[:(]/)[0].trim(), unit: '', sub: open ? `${open} on the shopping list` : 'Nothing to buy' } : { label: 'Shopping', value: String(open), unit: open === 1 ? 'item to buy' : 'items to buy', sub: 'No dinner planned for tonight' };
    },
    weekly(since, until) {
      let bought = 0, planned = 0;
      for (let d = since; d <= until; d = shiftDay(d, 1)) { bought += data.bought[d] || 0; planned += Object.values(data.meals[d] || {}).filter((v) => v.trim()).length; }
      return { title: 'Shopping & Meals', lines: [`${bought} item${bought === 1 ? '' : 's'} bought, ${planned} meal${planned === 1 ? '' : 's'} planned`, `${data.items.filter((i) => !i.done).length} still to buy`] };
    },
    start() {
      data = { items: [], history: {}, bought: {}, meals: {}, ...(moduleData.shopping || {}) };
      day = today();
      build();
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
      if (e.code === 'KeyN') { e.preventDefault(); $('sh-name').focus(); }
    },
  });
})();
