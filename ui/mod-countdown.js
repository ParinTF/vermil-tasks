// Countdown module: the days left until what matters. Data: { events: [{ id, title, day, yearly }], alerted: { id: day } }.
(() => {
  let data = { events: [], alerted: {} };
  let timer = null;
  const save = () => saveModule('countdown', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('countdown-view');
  const today = () => localDay(new Date());
  const target = (ev) => nextEventDay(ev, today());
  const left = (ev) => daysUntil(target(ev), today());

  function build() {
    root().replaceChildren(
      el('section', { className: 'cd-main', ariaLabel: 'Countdown' },
        el('div', { className: 'cd-head' }, el('h2', {}, 'Countdown')),
        el('ul', { id: 'cd-list', className: 'cd-list', ariaLabel: 'Events, soonest first' }),
        el('div', { id: 'cd-none', className: 'empty', hidden: true }, 'No events yet. Add a trip, an exam or a birthday.')),
      el('aside', { className: 'cd-side', ariaLabel: 'Add an event' },
        el('form', { id: 'cd-form', onsubmit: add },
          el('label', { className: 'cd-field' }, 'Event', el('input', { id: 'cd-title', maxLength: 80, autocomplete: 'off', placeholder: 'Trip to Chiang Mai' })),
          el('label', { className: 'cd-field' }, 'Date', el('input', { id: 'cd-day', type: 'date' })),
          el('label', { className: 'check' }, el('input', { id: 'cd-yearly', type: 'checkbox' }), ' Every year (a birthday)'),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'cd-msg', className: 'cd-msg', role: 'status' }))));
    $('cd-day').value = today();
  }

  const calendarFn = (from, to) => data.events.flatMap((ev) => eventDaysIn(ev, from, to).map((day) => ({ day, title: ev.title, kind: ev.yearly ? 'Every year' : 'Countdown', view: 'countdown' })));

  function add(e) {
    e.preventDefault();
    const title = $('cd-title').value.trim();
    const day = $('cd-day').value;
    if (!title || !day) { $('cd-msg').textContent = 'A name and a date.'; return; }
    data.events.push({ id: crypto.randomUUID(), title, day, yearly: $('cd-yearly').checked });
    save();
    $('cd-title').value = '';
    $('cd-yearly').checked = false;
    $('cd-msg').textContent = `Added ${title}.`;
    paint();
    checkToday();
    $('cd-title').focus();
  }

  async function remove(ev) {
    if (!(await ask(`Remove "${ev.title}"?`, 'Remove'))) return;
    data.events = data.events.filter((x) => x.id !== ev.id);
    delete data.alerted[ev.id];
    save();
    paint();
  }

  // upcoming first (soonest on top); one-off events that have passed go last, most recent first
  const sorted = () => [...data.events].sort((a, b) => { const x = left(a), y = left(b); return (x < 0) - (y < 0) || (x < 0 ? y - x : x - y); });

  function paint() {
    $('cd-list').replaceChildren(...sorted().map((ev) => {
      const n = left(ev);
      const del = el('button', { type: 'button', className: 'cd-del', ariaLabel: 'Remove ' + ev.title, textContent: '✕' });
      del.onclick = () => remove(ev);
      return el('li', { className: (n < 0 ? 'past ' : '') + (n >= 0 && n <= 7 ? 'soon' : '') },
        el('span', { className: 'cd-days' }, countdownLabel(n)),
        el('span', { className: 'cd-what' }, el('b', {}, ev.title), el('small', {}, fmt(parseDay(target(ev)), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + (ev.yearly ? ' · every year' : ''))), del);
    }));
    $('cd-none').hidden = data.events.length > 0;
  }

  // a toast on the day itself, once
  function checkToday() {
    let changed = false;
    for (const ev of data.events) {
      if (left(ev) !== 0 || data.alerted[ev.id] === today()) continue;
      data.alerted[ev.id] = today();
      changed = true;
      invoke('toast', { title: `${ev.title} is today`, text: '', module: 'countdown' }).catch(() => {});
    }
    if (changed) save();
  }

  const group = { module: 'countdown', title: 'Countdown', items: [['N', 'New event']] };
  const commandFn = () => [{ label: 'Add a countdown', hint: 'Countdown', kind: 'Command', run: async () => { await setView('countdown'); $('cd-title').focus(); } }];

  defineModule('countdown', {
    weekly() {
      const soon = sorted().filter((ev) => left(ev) >= 0 && left(ev) <= 14);
      return soon.length ? { title: 'Coming up', lines: soon.map((ev) => `${ev.title}: ${countdownLabel(left(ev)).toLowerCase()}`) } : null;
    },
    summary() {
      const next = sorted().find((ev) => left(ev) >= 0);
      if (!next) return null;
      const n = left(next);
      return { label: 'Countdown', value: countdownLabel(n), unit: n > 1 ? '' : '', warn: false, sub: next.title };
    },
    start() {
      data = { events: [], alerted: {}, ...(moduleData.countdown || {}) };
      build();
      paint();
      checkToday();
      commandHooks.push(commandFn);
      calendarHooks.push(calendarFn);
      shortcutGroups.push(group);
      timer = setInterval(() => { checkToday(); if (view === 'countdown') paint(); }, 3600000);
    },
    stop() {
      clearInterval(timer);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      calendarHooks.splice(calendarHooks.indexOf(calendarFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('cd-title').focus(); }
    },
  });
})();
