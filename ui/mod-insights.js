// Insights module: patterns across your modules ("on days you sleep more, your mood is higher"). Nothing is stored and nothing
// leaves the computer: every switched-on module offers one number per day through daily(), and logic.js looks for links.
// These are patterns in your own days, not causes, and a pair is shown only with enough days (see insightFindings).
(() => {
  let days = 90;
  const root = () => $('insights-view');
  const today = () => localDay(new Date());

  function collect() {
    return MODULES.filter((m) => started.has(m.id) && m.id !== 'insights').flatMap((m) => {
      try { return registry[m.id]?.daily?.() ?? []; } catch (e) { console.error(m.id, 'daily', e); return []; }
    }).map((s) => ({ ...s, byDay: s.zero ? zeroFill(s.byDay, today(), days) : s.byDay }));
  }

  function build() {
    root().replaceChildren(el('section', { className: 'in-main', ariaLabel: 'Insights' },
      el('div', { className: 'in-head' }, el('h2', {}, 'Insights'), el('div', { className: 'in-range', role: 'group', ariaLabel: 'Look back' }, ...[[30, '30 days'], [90, '90 days'], [365, 'A year']].map(([n, l]) => el('button', { type: 'button', id: 'in-r-' + n, className: 'st-opt', textContent: l, ariaPressed: String(n === days), onclick: () => { days = n; paint(); } })))),
      el('div', { id: 'in-body', className: 'in-body' })));
  }

  function paint() {
    if (!$('in-body')) return;
    for (const n of [30, 90, 365]) $('in-r-' + n).ariaPressed = String(n === days);
    const series = collect();
    const modules = new Set(series.map((s) => s.id.split('.')[0]));
    const note = (text) => el('p', { className: 'in-note' }, text);
    if (modules.size < 2) {
      $('in-body').replaceChildren(note('Insights compares numbers from different modules, so it needs at least two that keep daily numbers: Tasks, Focus timer, Expenses, Habits, Health, Journal or Time Tracker. Switch on another and use them for a few weeks.'));
      return;
    }
    const found = insightFindings(series, today(), days);
    const byId = Object.fromEntries(series.map((s) => [s.id, s]));
    const cards = found.map((f) => {
      const A = byId[f.a], B = byId[f.b];
      const top = Math.max(f.hi, f.lo, 0.0001);
      const bar = (label, v, cls) => { const i = el('i', {}); i.style.width = Math.max(3, Math.abs(v) / top * 100) + '%'; return el('div', { className: 'in-bar ' + cls }, el('span', {}, label), el('span', { className: 'in-track', ariaHidden: 'true' }, i), el('b', {}, String(Math.round(v * 10) / 10))); };
      return el('li', { className: 'in-card' },
        el('p', { className: 'in-sentence' }, insightSentence(f, A, B)),
        el('div', { className: 'in-bars' }, bar(`More ${A.label}`, f.hi, 'hi'), bar(`Less ${A.label}`, f.lo, 'lo')),
        el('small', {}, `${f.strength} pattern · ${f.n} days with both numbers`));
    });
    const counted = Math.max(...series.map((s) => Object.keys(s.byDay).length));
    $('in-body').replaceChildren(
      note(`Looked at ${series.length} daily numbers from ${modules.size} modules over the last ${days} days (up to ${counted} days of data).`),
      cards.length ? el('ul', { id: 'in-list', className: 'in-list' }, ...cards) : note('No clear pattern yet. That is normal early on: it needs about three weeks of both numbers, and some things simply are not linked.'),
      el('p', { className: 'in-fine' }, 'These are patterns in your own days, not proof that one thing causes another. Sleeping more may go with a better mood without being the reason, and a pattern can be chance.'));
  }

  defineModule('insights', {
    start() { build(); paint(); },
    stop() {},
    show() { paint(); },
    refresh: paint,
    keys(e) {
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(e.target)) e.target.blur();
    },
  });
})();
