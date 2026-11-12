// Health module: water, sleep, weight, workouts and medicine, for any day. Loaded only while it is switched on.
// Data: { water: { day: glasses }, sleep: { day: hours }, weight: { day: kg }, workouts: [{ id, day, kind, minutes }],
//         meds: [{ id, name, times, days }], taken: { day: { "<id>@<time>": true } }, announced: { day: { key: true } }, waterGoal, sleepGoal }.
(() => {
  let data = { water: {}, sleep: {}, weight: {}, workouts: [], meds: [], taken: {}, announced: {}, waterGoal: 8, sleepGoal: 7 };
  let day = localDay(new Date());
  let timer = null;
  const KINDS = ['Walk', 'Run', 'Gym', 'Yoga', 'Cycle', 'Swim', 'Other'];
  const DAY_LETTERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let medDays = [0, 1, 2, 3, 4, 5, 6];
  const save = () => saveModule('health', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('health-view');
  const today = () => localDay(new Date());
  const num = (v) => (Math.round(v * 10) / 10).toLocaleString('en-US');

  function card(title, ...children) { return el('section', { className: 'hl-card' }, el('h3', {}, title), ...children); }

  function build() {
    root().replaceChildren(
      el('section', { className: 'hl-main', ariaLabel: 'Health' },
        el('div', { className: 'hl-head' }, el('h2', { id: 'hl-title' }),
          el('div', { className: 'hl-nav' },
            el('button', { id: 'hl-prev', className: 'linkish', type: 'button', ariaLabel: 'Previous day', textContent: '‹', onclick: () => go(-1) }),
            el('button', { id: 'hl-today', className: 'linkish', type: 'button', textContent: 'Today', onclick: () => { day = today(); paint(); } }),
            el('button', { id: 'hl-next', className: 'linkish', type: 'button', ariaLabel: 'Next day', textContent: '›', onclick: () => go(1) }))),
        el('div', { className: 'hl-grid' },
          card('Water', el('div', { id: 'hl-water', className: 'hl-big' }), el('span', { className: 'hl-track', ariaHidden: 'true' }, el('i', { id: 'hl-water-bar' })),
            el('div', { className: 'hl-row' }, el('button', { id: 'hl-w-minus', type: 'button', className: 'hl-round', textContent: '−', ariaLabel: 'One glass less', onclick: () => water(-1) }), el('button', { id: 'hl-w-plus', type: 'button', className: 'hl-round', textContent: '+', ariaLabel: 'One glass more', onclick: () => water(1) }), el('small', {}, 'glasses of about 250 ml'))),
          card('Sleep', el('div', { id: 'hl-sleep', className: 'hl-big' }), el('span', { className: 'hl-track', ariaHidden: 'true' }, el('i', { id: 'hl-sleep-bar' })),
            el('label', { className: 'hl-field' }, 'Hours slept the night before', el('input', { id: 'hl-sleep-in', inputMode: 'decimal', autocomplete: 'off', placeholder: '7.5', onchange: () => setSimple('sleep', 'hl-sleep-in', 24) }))),
          card('Weight', el('div', { id: 'hl-weight', className: 'hl-big' }), el('div', { id: 'hl-wchart', className: 'hl-wchart', role: 'img' }), el('small', { id: 'hl-wnote', className: 'hl-note' }),
            el('label', { className: 'hl-field' }, 'Weight today, kg', el('input', { id: 'hl-weight-in', inputMode: 'decimal', autocomplete: 'off', placeholder: '70.5', onchange: () => setSimple('weight', 'hl-weight-in', 500) }))),
          card('Workouts', el('div', { id: 'hl-wo-sum', className: 'hl-big' }),
            el('form', { id: 'hl-wo-form', className: 'hl-inline', onsubmit: addWorkout },
              el('select', { id: 'hl-wo-kind', ariaLabel: 'Kind' }, ...KINDS.map((k) => el('option', { value: k }, k))),
              el('input', { id: 'hl-wo-min', inputMode: 'numeric', autocomplete: 'off', placeholder: 'min', ariaLabel: 'Minutes' }),
              el('button', { className: 'linkish', type: 'submit', textContent: 'Add' })),
            el('ul', { id: 'hl-wo-list', className: 'hl-list' })),
          card('Medicine', el('ul', { id: 'hl-med-today', className: 'hl-list', ariaLabel: 'Doses today' }),
            el('form', { id: 'hl-med-form', className: 'hl-medform', onsubmit: addMed },
              el('div', { className: 'hl-inline' }, el('input', { id: 'hl-med-name', maxLength: 60, autocomplete: 'off', placeholder: 'Medicine or vitamin', ariaLabel: 'Medicine' }), el('input', { id: 'hl-med-times', autocomplete: 'off', placeholder: '08:00, 20:00', ariaLabel: 'Times' })),
              el('div', { id: 'hl-med-days', className: 'hl-days', role: 'group', ariaLabel: 'Days' }),
              el('div', { className: 'hl-inline' }, el('button', { className: 'linkish', type: 'submit', textContent: 'Add medicine' }), el('span', { id: 'hl-med-msg', className: 'hl-note', role: 'status' }))),
            el('ul', { id: 'hl-med-list', className: 'hl-list hl-meds' })))),
      el('aside', { className: 'hl-side', ariaLabel: 'Targets' },
        el('h3', {}, 'Daily targets'),
        el('label', { className: 'hl-field' }, 'Water, glasses', el('input', { id: 'hl-goal-w', inputMode: 'numeric', value: String(data.waterGoal), onchange: () => setGoal('waterGoal', 'hl-goal-w', 30) })),
        el('label', { className: 'hl-field' }, 'Sleep, hours', el('input', { id: 'hl-goal-s', inputMode: 'decimal', value: String(data.sleepGoal), onchange: () => setGoal('sleepGoal', 'hl-goal-s', 24) })),
        el('p', { className: 'hl-fine' }, 'This is a log for you, not medical advice. Medicine reminders appear as a notification at each time while Vermil is running.')));
    paintMedDays();
  }

  function go(n) { const next = shiftDay(day, n); if (next > today()) return; day = next; paint(); }

  function water(n) {
    data.water[day] = Math.max(0, (data.water[day] || 0) + n);
    if (!data.water[day]) delete data.water[day];
    save();
    paint();
  }

  function setSimple(key, id, max) {
    const v = $(id).value.trim() === '' ? 0 : Number($(id).value.replace(',', '.'));
    if (!Number.isFinite(v) || v < 0 || v > max) { paint(); return; }
    if (v) data[key][day] = v; else delete data[key][day];
    save();
    paint();
  }

  function setGoal(key, id, max) {
    const v = Number($(id).value.replace(',', '.'));
    if (Number.isFinite(v) && v > 0 && v <= max) { data[key] = v; save(); }
    $(id).value = String(data[key]);
    paint();
  }

  function addWorkout(e) {
    e.preventDefault();
    const minutes = Math.round(Number($('hl-wo-min').value));
    if (!Number.isFinite(minutes) || minutes < 1 || minutes > 1440) return;
    data.workouts.push({ id: crypto.randomUUID(), day, kind: $('hl-wo-kind').value, minutes });
    save();
    $('hl-wo-min').value = '';
    paint();
  }

  function paintMedDays() {
    $('hl-med-days').replaceChildren(...DAY_LETTERS.map((d, i) => {
      const b = el('button', { type: 'button', textContent: d, ariaPressed: String(medDays.includes(i)), ariaLabel: DAY_NAMES[i] });
      b.onclick = () => { medDays = medDays.includes(i) ? medDays.filter((x) => x !== i) : [...medDays, i]; paintMedDays(); };
      return b;
    }));
  }

  function addMed(e) {
    e.preventDefault();
    const name = $('hl-med-name').value.trim();
    const times = [...new Set($('hl-med-times').value.split(/[,\s]+/).filter(Boolean))].sort();
    if (!name || !times.length || times.some((t) => !/^([01]\d|2[0-3]):[0-5]\d$/.test(t)) || !medDays.length) { $('hl-med-msg').textContent = 'A name, times like 08:00, and at least one day.'; return; }
    data.meds.push({ id: crypto.randomUUID(), name, times, days: [...medDays].sort() });
    save();
    $('hl-med-name').value = '';
    $('hl-med-times').value = '';
    $('hl-med-msg').textContent = `Added ${name}.`;
    paint();
  }

  function paint() {
    const t = today();
    $('hl-title').textContent = day === t ? 'Today' : fmt(parseDay(day), { weekday: 'long', day: 'numeric', month: 'long' });
    $('hl-next').disabled = day >= t;
    const w = data.water[day] || 0;
    $('hl-water').textContent = `${w} / ${data.waterGoal}`;
    $('hl-water-bar').style.width = Math.min(100, w / data.waterGoal * 100) + '%';
    const s = data.sleep[day] || 0;
    $('hl-sleep').textContent = s ? `${num(s)} h` : '—';
    $('hl-sleep-bar').style.width = Math.min(100, s / data.sleepGoal * 100) + '%';
    if (document.activeElement !== $('hl-sleep-in')) $('hl-sleep-in').value = s || '';
    const kg = data.weight[day] || 0;
    $('hl-weight').textContent = kg ? `${num(kg)} kg` : '—';
    if (document.activeElement !== $('hl-weight-in')) $('hl-weight-in').value = kg || '';
    const trend = weightTrend(data.weight, day, 30);
    const kgs = trend.points.map((p) => p.kg);
    const lo = Math.min(...kgs), hi = Math.max(...kgs);
    $('hl-wchart').replaceChildren(...trend.points.map((p) => { const i = el('i', { title: `${fmt(parseDay(p.day), { day: 'numeric', month: 'short' })}: ${num(p.kg)} kg` }); i.style.height = (hi === lo ? 60 : 20 + (p.kg - lo) / (hi - lo) * 80) + '%'; return i; }));
    $('hl-wnote').textContent = trend.change === null ? 'Two weights show a trend.' : `${trend.change > 0 ? '+' : trend.change < 0 ? '−' : ''}${Math.abs(trend.change)} kg over the last 30 days`;
    $('hl-wchart').ariaLabel = $('hl-wnote').textContent;

    const week = weekDays(day);
    const wk = data.workouts.filter((x) => x.day >= week[0] && x.day <= week[6]);
    $('hl-wo-sum').textContent = `${wk.reduce((n, x) => n + x.minutes, 0)} min this week`;
    $('hl-wo-list').replaceChildren(...data.workouts.filter((x) => x.day === day).map((x) => {
      const del = el('button', { type: 'button', className: 'hl-del', ariaLabel: `Remove ${x.kind}`, textContent: '✕' });
      del.onclick = () => { data.workouts = data.workouts.filter((y) => y.id !== x.id); save(); paint(); };
      return el('li', {}, el('span', {}, x.kind), el('time', {}, `${x.minutes} min`), del);
    }));

    const takenToday = data.taken[day] || {};
    const doses = data.meds.filter((m) => medDue(m, day)).flatMap((m) => m.times.map((tm) => ({ m, tm, key: `${m.id}@${tm}` }))).sort((a, b) => a.tm.localeCompare(b.tm));
    $('hl-med-today').replaceChildren(...(doses.length ? doses.map(({ m, tm, key }) => {
      const box = el('input', { type: 'checkbox', checked: !!takenToday[key], ariaLabel: `${m.name} at ${tm}` });
      box.onchange = () => { const d = (data.taken[day] ||= {}); if (box.checked) d[key] = true; else delete d[key]; if (!Object.keys(d).length) delete data.taken[day]; save(); paint(); };
      return el('li', { className: takenToday[key] ? 'done' : '' }, box, el('span', {}, m.name), el('time', {}, tm));
    }) : [el('li', { className: 'hl-none' }, data.meds.length ? 'Nothing due this day.' : 'No medicine added.')]));
    $('hl-med-list').replaceChildren(...data.meds.map((m) => {
      const del = el('button', { type: 'button', className: 'hl-del', ariaLabel: 'Remove ' + m.name, textContent: '✕' });
      del.onclick = async () => { if (!(await ask(`Remove ${m.name}?`, 'Remove'))) return; data.meds = data.meds.filter((x) => x.id !== m.id); save(); paint(); };
      return el('li', {}, el('span', {}, m.name), el('time', {}, m.times.join(' ') + (m.days.length === 7 ? '' : ' · ' + m.days.map((d) => DAY_NAMES[d].slice(0, 3)).join(' '))), del);
    }));
  }

  // a notification for each dose whose time has come and that is not ticked, once
  function checkMeds() {
    const now = new Date();
    const d = localDay(now);
    const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const due = dosesDue(data.meds, d, hhmm, data.taken[d] || {}, data.announced[d] || {});
    if (!due.length) return;
    const seen = (data.announced[d] ||= {});
    for (const x of due) { seen[x.key] = true; invoke('toast', { title: `Time for ${x.med.name}`, text: x.time }).catch(() => {}); }
    for (const k of Object.keys(data.announced)) if (k < shiftDay(d, -7)) delete data.announced[k]; // keep a week of notes, not all of history
    save();
  }

  const avg = (map, since, until) => { const v = []; for (let d = since; d <= until; d = shiftDay(d, 1)) if (map[d] > 0) v.push(map[d]); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
  const metricsFn = () => [
    { id: 'health.workout', label: 'Workout minutes in the last 7 days', unit: 'min', get: () => data.workouts.filter((x) => x.day > shiftDay(today(), -7)).reduce((n, x) => n + x.minutes, 0) },
    { id: 'health.water', label: 'Glasses of water per day, last 7 days', unit: 'glasses', get: () => Math.round((avg(data.water, shiftDay(today(), -6), today()) || 0) * 10) / 10 },
    { id: 'health.sleep', label: 'Hours slept per night, last 7 days', unit: 'h', get: () => Math.round((avg(data.sleep, shiftDay(today(), -6), today()) || 0) * 10) / 10 },
  ];
  const group = { module: 'health', title: 'Health', items: [[['←', '→'], 'Previous or next day'], ['T', 'Today'], ['W', 'One more glass of water']] };
  const commandFn = () => [{ label: 'Drink a glass of water', hint: 'Health', kind: 'Command', run: () => { const d = day; day = today(); water(1); day = d; } }];

  defineModule('health', {
    summary() {
      const t = today();
      const doses = data.meds.filter((m) => medDue(m, t)).flatMap((m) => m.times.map((tm) => `${m.id}@${tm}`));
      const left = doses.filter((k) => !(data.taken[t] || {})[k]).length;
      const w = data.water[t] || 0;
      if (!w && !data.sleep[t] && !doses.length && !data.workouts.length) return null;
      return { label: 'Health', value: `${w}/${data.waterGoal}`, unit: 'water', warn: left > 0, sub: [left ? `${left} dose${left === 1 ? '' : 's'} to take` : doses.length ? 'Medicine taken' : '', data.sleep[t] ? `${num(data.sleep[t])} h sleep` : ''].filter(Boolean).join(' · ') || 'Glasses today' };
    },
    weekly(since, until) {
      const lines = [];
      const w = avg(data.water, since, until), s = avg(data.sleep, since, until);
      lines.push(w === null ? 'No water logged' : `Water ${num(w)} glasses a day on average`);
      lines.push(s === null ? 'No sleep logged' : `Sleep ${num(s)} h a night on average`);
      const min = data.workouts.filter((x) => x.day >= since && x.day <= until).reduce((n, x) => n + x.minutes, 0);
      lines.push(min ? `Workouts: ${min} min` : 'No workouts');
      const tr = weightTrend(data.weight, until, 7);
      if (tr.change !== null) lines.push(`Weight ${tr.change > 0 ? '+' : tr.change < 0 ? '−' : ''}${Math.abs(tr.change)} kg`);
      return { title: 'Health', lines };
    },
    start() {
      data = { water: {}, sleep: {}, weight: {}, workouts: [], meds: [], taken: {}, announced: {}, waterGoal: 8, sleepGoal: 7, ...(moduleData.health || {}) };
      day = today();
      build();
      paint();
      checkMeds();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
      timer = setInterval(checkMeds, 30000);
    },
    stop() {
      clearInterval(timer);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      metricHooks.splice(metricHooks.indexOf(metricsFn), 1);
    },
    show() { paint(); },
    refresh: undefined,
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.code === 'KeyT') { day = today(); paint(); }
      else if (e.code === 'KeyW') water(1);
    },
  });
})();
