// People module: birthdays, gift ideas and staying in touch. Loaded only while it is switched on.
// Data: { people: [{ id, name, birthday, showAge, note, gifts, every, last }], alerted: { "<id>@<days>": "YYYY-MM-DD" } }.
(() => {
  let data = { people: [], alerted: {} };
  let filter = 'all'; // all | birthdays | touch
  let editing = null; // the person being edited, or null when adding
  let timer = null;
  const EVERY = [[0, 'Never'], [7, 'Every week'], [14, 'Every 2 weeks'], [30, 'Every month'], [60, 'Every 2 months'], [90, 'Every 3 months']];
  const save = () => saveModule('people', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('people-view');
  const today = () => localDay(new Date());

  function build() {
    root().replaceChildren(
      el('section', { className: 'pp-main', ariaLabel: 'People' },
        el('div', { className: 'pp-head' }, el('h2', {}, 'People')),
        el('div', { className: 'pp-tabs', role: 'tablist', ariaLabel: 'Show' }, ...[['all', 'Everyone'], ['birthdays', 'Birthdays soon'], ['touch', 'Reach out']].map(([k, l]) => el('button', { id: 'pp-t-' + k, role: 'tab', type: 'button', onclick: () => { filter = k; paint(); } }, l))),
        el('ul', { id: 'pp-list', className: 'pp-list', ariaLabel: 'People' }),
        el('div', { id: 'pp-none', className: 'empty', hidden: true })),
      el('aside', { className: 'pp-side', ariaLabel: 'Add or edit a person' },
        el('form', { id: 'pp-form', onsubmit: submit },
          el('div', { id: 'pp-form-title', className: 'pp-form-title' }, 'Add a person'),
          field('Name', el('input', { id: 'pp-name', maxLength: 60, autocomplete: 'off', placeholder: 'Mali' })),
          field('Birthday', el('input', { id: 'pp-bday', type: 'date' })),
          el('label', { className: 'check pp-check' }, el('input', { id: 'pp-age', type: 'checkbox' }), ' Show their age'),
          field('Stay in touch', el('select', { id: 'pp-every' }, ...EVERY.map(([v, l]) => el('option', { value: String(v) }, l)))),
          field('Note', el('input', { id: 'pp-note', maxLength: 120, autocomplete: 'off', placeholder: 'Likes hiking' })),
          field('Gift ideas, one per line', el('textarea', { id: 'pp-gifts', rows: 3, maxLength: 600 })),
          el('div', { className: 'actions' },
            el('button', { id: 'pp-save', className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('button', { id: 'pp-cancel', className: 'ghost', type: 'button', hidden: true, textContent: 'Cancel', onclick: () => edit(null) })),
          el('div', { id: 'pp-msg', className: 'pp-msg', role: 'status' }))));
  }

  const field = (label, ctl) => el('label', { className: 'pp-field' }, label, ctl);

  function edit(p) {
    editing = p;
    $('pp-form-title').textContent = p ? `Edit ${p.name}` : 'Add a person';
    $('pp-name').value = p ? p.name : '';
    $('pp-bday').value = p ? p.birthday : '';
    $('pp-age').checked = !!(p && p.showAge);
    $('pp-every').value = String(p ? p.every : 0);
    $('pp-note').value = p ? p.note : '';
    $('pp-gifts').value = p ? p.gifts : '';
    $('pp-save').firstChild.textContent = p ? 'Save' : 'Add';
    $('pp-cancel').hidden = !p;
    if (p) $('pp-name').focus();
  }

  function submit(e) {
    e.preventDefault();
    const name = $('pp-name').value.trim();
    if (!name) { $('pp-msg').textContent = 'A name.'; return; }
    const fields = { name, birthday: $('pp-bday').value, showAge: $('pp-age').checked, every: Number($('pp-every').value), note: $('pp-note').value.trim(), gifts: $('pp-gifts').value.trim() };
    if (editing) Object.assign(editing, fields);
    else data.people.push({ id: crypto.randomUUID(), ...fields, last: today() }); // adding someone counts as being in touch today
    save();
    $('pp-msg').textContent = editing ? `Saved ${name}.` : `Added ${name}.`;
    edit(null);
    paint();
    checkBirthdays(); // a birthday that is today or in three days is announced now, not at the next hourly check
  }

  async function remove(p) {
    if (!(await ask(`Remove ${p.name}?`, 'Remove'))) return;
    data.people = data.people.filter((x) => x.id !== p.id);
    if (editing === p) edit(null);
    save();
    paint();
  }

  function contacted(p) { p.last = today(); save(); paint(); }

  // a task in Tasks to get in touch, when Tasks is on
  function plan(p) {
    const day = shiftDay(today(), 3);
    commit([...todos, { id: crypto.randomUUID(), title: `Catch up with ${p.name}`, due: day + 'T18:00', remindBefore: 0, done: false, createdAt: new Date().toISOString(), completedAt: null }]);
    $('pp-msg').textContent = `Added a task to catch up with ${p.name} on ${fmt(parseDay(day), { weekday: 'long', day: 'numeric', month: 'short' })}.`;
  }

  const sorted = () => [...data.people].sort((a, b) => (birthdayInfo(a, today())?.days ?? 9999) - (birthdayInfo(b, today())?.days ?? 9999) || a.name.localeCompare(b.name));

  function paint() {
    const t = today();
    const reach = data.people.filter((p) => touchState(p, t).due).length;
    const soon = data.people.filter((p) => { const b = birthdayInfo(p, t); return b && b.days <= 30; }).length;
    for (const [k, n] of [['all', data.people.length], ['birthdays', soon], ['touch', reach]]) { const b = $('pp-t-' + k); b.textContent = `${{ all: 'Everyone', birthdays: 'Birthdays soon', touch: 'Reach out' }[k]} ${n}`; b.ariaSelected = String(k === filter); }
    let list = sorted();
    if (filter === 'birthdays') list = list.filter((p) => { const b = birthdayInfo(p, t); return b && b.days <= 30; });
    if (filter === 'touch') list = list.filter((p) => touchState(p, t).due);
    $('pp-list').replaceChildren(...list.map((p) => {
      const b = birthdayInfo(p, t);
      const ts = touchState(p, t);
      const lines = [
        b ? `Birthday ${fmt(parseDay(b.next), { day: 'numeric', month: 'short' })} · ${b.days === 0 ? 'today' : b.days === 1 ? 'tomorrow' : `in ${b.days} days`}${b.turning ? ` · turns ${b.turning}` : ''}` : '',
        ts.since !== null ? `Last in touch ${ts.since === 0 ? 'today' : ts.since + ' days ago'}` : '',
        p.note, p.gifts ? 'Gift ideas: ' + p.gifts.split('\n').filter(Boolean).join(', ') : '',
      ].filter(Boolean);
      const acts = [['In touch today', () => contacted(p)], ['Edit', () => edit(p)], ...(started.has('tasks') ? [['Plan a catch-up', () => plan(p)]] : [])];
      const del = el('button', { type: 'button', className: 'pp-del', ariaLabel: 'Remove ' + p.name, textContent: '✕' });
      del.onclick = () => remove(p);
      return el('li', { className: (b && b.days <= 7 ? 'soon ' : '') + (ts.due ? 'reach' : '') },
        el('span', { className: 'pp-who' }, el('b', {}, p.name), ...lines.map((l) => el('small', {}, l))),
        el('span', { className: 'pp-acts' }, ...acts.map(([tx, fn]) => { const x = el('button', { type: 'button', className: 'linkish', textContent: tx }); x.onclick = fn; return x; })), del);
    }));
    $('pp-none').hidden = list.length > 0;
    $('pp-none').textContent = data.people.length ? 'Nobody here right now.' : 'No one yet. Add a friend or a relative on the right.';
  }

  // a notification on the day, and again three days before, once each
  function checkBirthdays() {
    const t = today();
    let changed = false;
    for (const p of data.people) {
      const b = birthdayInfo(p, t);
      if (!b || (b.days !== 0 && b.days !== 3)) continue;
      const key = `${p.id}@${b.days}`;
      if (data.alerted[key] === t) continue;
      data.alerted[key] = t;
      changed = true;
      invoke('toast', { title: b.days === 0 ? `${p.name}'s birthday is today` : `${p.name}'s birthday is in 3 days`, text: b.turning ? `Turning ${b.turning}` : '', module: 'people' }).catch(() => {});
    }
    if (changed) save();
  }

  const group = { module: 'people', title: 'People', items: [['N', 'Add a person']] };
  const commandFn = () => [{ label: 'Add a person', hint: 'People', kind: 'Command', run: async () => { await setView('people'); edit(null); $('pp-name').focus(); } }];

  defineModule('people', {
    summary() {
      if (!data.people.length) return null;
      const t = today();
      const next = sorted().find((p) => birthdayInfo(p, t));
      const reach = data.people.filter((p) => touchState(p, t).due).length;
      const b = next && birthdayInfo(next, t);
      return { label: 'People', value: b ? `${next.name} ${b.days === 0 ? 'today' : `in ${b.days}d`}` : String(data.people.length), unit: '', warn: reach > 0, sub: [b ? 'Next birthday' : '', reach ? `${reach} to reach out to` : ''].filter(Boolean).join(' · ') || 'In touch with everyone' };
    },
    weekly(since, until) {
      if (!data.people.length) return null;
      const t = today();
      const soon = sorted().filter((p) => { const b = birthdayInfo(p, until); return b && b.days <= 14; });
      const reach = data.people.filter((p) => touchState(p, t).due);
      return { title: 'People', lines: [soon.length ? 'Birthdays in the next 14 days: ' + soon.map((p) => p.name).join(', ') : 'No birthdays in the next 14 days', reach.length ? 'Reach out to: ' + reach.map((p) => p.name).join(', ') : 'In touch with everyone'] };
    },
    start() {
      data = { people: [], alerted: {}, ...(moduleData.people || {}) };
      build();
      edit(null);
      paint();
      checkBirthdays();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      timer = setInterval(() => { checkBirthdays(); if (view === 'people') paint(); }, 3600000);
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
      if (e.code === 'KeyN') { e.preventDefault(); edit(null); $('pp-name').focus(); }
    },
  });
})();
