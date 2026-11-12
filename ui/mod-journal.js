// Journal module: a few lines about the day and a mood from 1 to 5, a chart of the last two weeks, and a list to look back through.
// Data: { entries: { "YYYY-MM-DD": { mood, text } } }. Typing saves itself half a second after you stop and when you leave.
(() => {
  let data = { entries: {} };
  let day = localDay(new Date());
  let dirty = false;
  let timer = null;
  const today = () => localDay(new Date());
  const root = () => $('journal-view');
  const save = () => saveModule('journal', data).catch((e) => tell('Could not save: ' + (e.message || e)));

  function build() {
    root().replaceChildren(
      el('section', { className: 'jr-main', ariaLabel: 'Journal' },
        el('div', { className: 'jr-head' }, el('h2', { id: 'jr-title' }),
          el('div', { className: 'jr-nav' },
            el('button', { id: 'jr-prev', className: 'linkish', type: 'button', ariaLabel: 'Previous day', textContent: '‹', onclick: () => go(-1) }),
            el('button', { id: 'jr-today', className: 'linkish', type: 'button', textContent: 'Today', onclick: () => open(today()) }),
            el('button', { id: 'jr-next', className: 'linkish', type: 'button', ariaLabel: 'Next day', textContent: '›', onclick: () => go(1) }))),
        el('div', { className: 'jr-mood', role: 'group', ariaLabel: 'How was the day' }, ...[1, 2, 3, 4, 5].map((n) => el('button', { type: 'button', id: 'jr-m' + n, ariaPressed: 'false', onclick: () => setMood(n) }, el('b', {}, String(n)), el('small', {}, MOODS[n])))),
        el('textarea', { id: 'jr-text', className: 'jr-text', ariaLabel: 'What happened', placeholder: 'What happened today? What are you grateful for?', rows: 8 }),
        el('div', { id: 'jr-saved', className: 'jr-saved', role: 'status' }),
        el('div', { className: 'jr-chart-box' }, el('h3', { id: 'jr-avg' }), el('div', { id: 'jr-chart', className: 'jr-chart', role: 'img' }))),
      el('aside', { className: 'jr-side', ariaLabel: 'Earlier entries' },
        el('label', { className: 'jr-field' }, 'Look back', el('input', { id: 'jr-find', type: 'search', autocomplete: 'off', placeholder: 'Search entries' })),
        el('ul', { id: 'jr-list', className: 'jr-list' })));
    $('jr-text').oninput = () => { dirty = true; clearTimeout(timer); timer = setTimeout(flush, 500); $('jr-saved').textContent = ''; };
    $('jr-text').onblur = flush;
    $('jr-find').oninput = paintList;
  }

  function flush() {
    clearTimeout(timer);
    if (!dirty) return;
    dirty = false;
    const text = $('jr-text').value;
    const e = data.entries[day] || { mood: 0, text: '' };
    data.entries[day] = { ...e, text };
    if (!text.trim() && !data.entries[day].mood) delete data.entries[day];
    save();
    paintList();
    paintChart();
    $('jr-saved').textContent = 'Saved';
  }

  function open(d) {
    flush();
    day = d;
    paint();
  }

  function go(n) {
    const next = shiftDay(day, n);
    if (next > today()) return;
    open(next);
  }

  function setMood(n) {
    flush();
    const e = data.entries[day] || { mood: 0, text: $('jr-text').value };
    e.mood = e.mood === n ? 0 : n; // pressing it again clears it
    data.entries[day] = e;
    if (!e.mood && !e.text.trim()) delete data.entries[day];
    save();
    paint(true);
  }

  function paintList() {
    const q = $('jr-find').value.trim().toLowerCase();
    $('jr-list').replaceChildren(...Object.keys(data.entries).sort().reverse().filter((d) => !q || data.entries[d].text.toLowerCase().includes(q)).map((d) => {
      const e = data.entries[d];
      const b = el('button', { type: 'button', className: d === day ? 'sel' : '' }, el('b', {}, fmt(parseDay(d), { weekday: 'short', day: 'numeric', month: 'short' })), el('span', {}, e.mood ? `${e.mood} · ${MOODS[e.mood]}` : ''), el('small', {}, e.text.trim().split('\n')[0].slice(0, 60)));
      b.onclick = () => open(d);
      return el('li', {}, b);
    }));
  }

  // the last 14 days: a column per day, as tall as the mood; today in the accent
  function paintChart() {
    const t = today();
    const days = Array.from({ length: 14 }, (_, i) => shiftDay(t, i - 13));
    $('jr-chart').replaceChildren(...days.map((d) => {
      const mood = data.entries[d]?.mood || 0;
      const bar = el('i', { title: `${fmt(parseDay(d), { day: 'numeric', month: 'short' })}: ${mood ? MOODS[mood] : 'no mood'}` });
      bar.style.height = mood ? mood * 20 + '%' : '3px';
      return el('span', { className: 'jr-col' + (d === t ? ' today' : '') + (mood ? '' : ' none') }, bar, el('small', {}, fmt(parseDay(d), { weekday: 'narrow' })));
    }));
    const avg = moodAverage(data.entries, t, 7);
    $('jr-avg').textContent = avg === null ? 'Mood, last 14 days' : `Mood, last 14 days · ${avg} on average this week`;
    $('jr-chart').ariaLabel = $('jr-avg').textContent;
  }

  function paint(keepText) {
    const e = data.entries[day] || { mood: 0, text: '' };
    $('jr-title').textContent = day === today() ? 'Today' : fmt(parseDay(day), { weekday: 'long', day: 'numeric', month: 'long' });
    $('jr-next').disabled = day >= today();
    for (let n = 1; n <= 5; n++) $('jr-m' + n).ariaPressed = String(e.mood === n);
    if (!keepText) { $('jr-text').value = e.text; $('jr-saved').textContent = ''; }
    paintList();
    paintChart();
  }

  const metricsFn = () => [{ id: 'journal.month', label: 'Days written this month', unit: 'days', get: () => Object.keys(data.entries).filter((d) => d.startsWith(today().slice(0, 7)) && data.entries[d].text.trim()).length }];
  const group = { module: 'journal', title: 'Journal', items: [[['←', '→'], 'Previous or next day'], ['T', 'Today'], ['N', 'Write'], [['1', '…', '5'], 'Set the mood']] };
  const commandFn = () => [{ label: 'Write in the journal', hint: 'Journal', kind: 'Command', run: async () => { await setView('journal'); open(today()); $('jr-text').focus(); } }];

  defineModule('journal', {
    weekly(since, until) {
      const days = Object.keys(data.entries).filter((d) => d >= since && d <= until);
      const written = days.filter((d) => data.entries[d].text.trim()).length;
      const moods = days.map((d) => data.entries[d].mood).filter(Boolean);
      return { title: 'Journal', lines: [`${written} day${written === 1 ? '' : 's'} written`, moods.length ? `Mood ${Math.round(moods.reduce((a, b) => a + b, 0) / moods.length * 10) / 10} on average (${MOODS[Math.round(moods.reduce((a, b) => a + b, 0) / moods.length)]})` : 'No mood noted'] };
    },
    summary() {
      const e = data.entries[today()];
      const avg = moodAverage(data.entries, today(), 7);
      if (!e && avg === null) return { label: 'Journal', value: 'Not written', unit: '', sub: 'How was today?' };
      return { label: 'Journal', value: e && e.mood ? MOODS[e.mood] : e ? 'Written' : 'Not written', unit: '', sub: avg === null ? 'Today' : `${avg} mood on average this week` };
    },
    start() {
      data = { entries: {}, ...(moduleData.journal || {}) };
      day = today();
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
    },
    stop() {
      flush();
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      metricHooks.splice(metricHooks.indexOf(metricsFn), 1);
    },
    show() { if (day > today()) day = today(); paint(); },
    flush,
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('jr-text').focus(); }
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.code === 'KeyT') open(today());
      else if (/^Digit[1-5]$/.test(e.code)) setMood(+e.code.slice(5));
    },
  });
  addEventListener('blur', () => { if (started.has('journal')) flush(); }); // the window lost focus: do not leave typing unsaved
})();
