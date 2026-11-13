// Review module: a dashboard of a day, a week, a month or a year, from every switched-on module. Each module adds a card:
// its weekly(since, until) gives the lines, its daily() gives numbers and a chart. Nothing is stored here; the page is built fresh every time.
(() => {
  let kind = 'week'; // day | week | month | year
  let back = 0; // how many periods before the current one
  const root = () => $('review-view');
  const today = () => localDay(new Date());
  const range = () => reviewRange(kind, back, today());
  const fmtDay = (d) => fmt(parseDay(d), { day: 'numeric', month: 'short' });
  const KINDS = [['day', 'Day'], ['week', 'Week'], ['month', 'Month'], ['year', 'Year']];
  const rangeLabel = () => {
    const { since, until } = range();
    if (kind === 'day') return back === 0 ? 'Today' : back === 1 ? 'Yesterday' : fmt(parseDay(since), { weekday: 'long', day: 'numeric', month: 'long' });
    if (kind === 'week') return back === 0 ? 'Last 7 days' : `${fmtDay(since)} to ${fmtDay(until)}`;
    if (kind === 'month') return fmt(parseDay(since), { month: 'long', year: 'numeric' });
    return since.slice(0, 4);
  };
  const fig = (v) => (v == null ? '—' : (Math.abs(v) >= 100 ? Math.round(v) : Math.round(v * 10) / 10).toLocaleString('en-US'));

  // one card per module: its lines (weekly) and its numbers (daily); a module that fails to report is skipped
  function cards() {
    const { since, until } = range();
    return MODULES.filter((m) => started.has(m.id) && m.id !== 'review').flatMap((m) => {
      try {
        const lines = registry[m.id]?.weekly?.(since, until) || null;
        const series = (registry[m.id]?.daily?.() || []).map((s) => ({ s, b: reviewBuckets(s, since, until) }));
        return lines || series.length ? [{ title: lines?.title || m.name, lines: lines?.lines || [], series, view: m.view ? m.id : '' }] : [];
      } catch (e) { console.error(m.id, 'review', e); return []; }
    });
  }
  const sections = () => cards().filter((c) => c.lines.length).map((c) => ({ title: c.title, lines: c.lines }));

  function chart({ s, b }, until) {
    const max = Math.max(...b.buckets.map((x) => x.value ?? 0), 0.0001);
    const label = (x) => (b.monthly ? fmt(parseDay(x.key + '-01'), { month: 'short', year: 'numeric' }) : fmtDay(x.key));
    const bars = b.buckets.map((x, i) => {
      const bar = el('i', { className: i === b.buckets.length - 1 && until === today() ? 'now' : '' });
      bar.style.height = x.value == null ? '0' : Math.max(x.value > 0 ? 4 : 2, x.value / max * 100) + '%';
      const col = el('span', { className: 'rv-col', title: `${label(x)}: ${fig(x.value)}` }, bar);
      return col;
    });
    const first = b.buckets[0], last = b.buckets[b.buckets.length - 1];
    return el('div', { className: 'rv-chart' },
      el('div', { className: 'rv-bars', role: 'img', ariaLabel: `${s.label}, ${s.zero ? 'total' : 'average'} ${fig(b.total)}, ${b.buckets.length} ${b.monthly ? 'months' : 'days'}` }, ...bars),
      el('div', { className: 'rv-axis', ariaHidden: 'true' }, el('span', {}, label(first)), el('span', {}, label(last))));
  }

  function card(c, until) {
    const shown = c.series.filter((x) => x.b.has).slice(0, 3);
    return el('section', { className: 'rv-card' },
      el('h3', {}, c.title),
      ...shown.map((x) => el('div', { className: 'rv-stat' },
        el('div', { className: 'rv-big' }, el('b', {}, fig(x.b.total)), el('small', {}, `${x.s.label} · ${x.s.zero ? 'total' : 'average'}`)),
        ...(kind === 'day' ? [] : [chart(x, until)]))),
      ...(c.lines.length ? [el('ul', {}, ...c.lines.map((l) => el('li', {}, l)))] : []));
  }

  function build() {
    root().replaceChildren(
      el('section', { className: 'rv-main', ariaLabel: 'Review' },
        el('div', { className: 'rv-head' }, el('h2', {}, 'Review'),
          el('div', { className: 'rv-pick', role: 'group', ariaLabel: 'Period' },
            ...KINDS.map(([k, l]) => el('button', { id: 'rv-k-' + k, type: 'button', ariaPressed: String(k === kind), textContent: l, onclick: () => { kind = k; back = 0; paint(); } })))),
        el('div', { className: 'rv-nav' },
          el('button', { id: 'rv-prev', type: 'button', className: 'linkish', ariaLabel: 'Earlier', textContent: '‹', onclick: () => { back++; paint(); } }),
          el('p', { id: 'rv-range', className: 'rv-range' }),
          el('button', { id: 'rv-next', type: 'button', className: 'linkish', ariaLabel: 'Later', textContent: '›', onclick: () => { back = Math.max(0, back - 1); paint(); } })),
        el('div', { id: 'rv-body', className: 'rv-body' }),
        el('div', { className: 'rv-foot' }, el('button', { id: 'rv-copy', type: 'button', className: 'linkish', textContent: 'Copy as text', onclick: copy }), el('button', { id: 'rv-save', type: 'button', className: 'linkish', textContent: 'Save as file', onclick: saveFile }), el('button', { id: 'rv-print', type: 'button', className: 'linkish', textContent: 'Print or PDF', onclick: () => window.print() }), el('span', { id: 'rv-msg', className: 'rv-msg', role: 'status' }))));
  }

  function copy() {
    // the clipboard only answers a focused window, so do not wait for it forever
    const gave = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), 1500));
    Promise.race([navigator.clipboard.writeText(reviewText(rangeLabel(), sections())), gave]).then(() => { $('rv-msg').textContent = 'Copied'; }, () => { $('rv-msg').textContent = 'Could not copy'; });
  }

  function saveFile() {
    invoke('export_text', { name: 'Vermil review', text: reviewText(rangeLabel(), sections()) }).then((p) => { $('rv-msg').textContent = 'Saved ' + p; }, (e) => { $('rv-msg').textContent = 'Could not save: ' + e; });
  }

  function paint() {
    for (const [k] of KINDS) $('rv-k-' + k).ariaPressed = String(k === kind);
    $('rv-range').textContent = rangeLabel();
    $('rv-next').disabled = back === 0;
    $('rv-msg').textContent = '';
    const list = cards();
    const { until } = range();
    $('rv-body').replaceChildren(...(list.length
      ? list.map((c) => card(c, until))
      : [el('div', { className: 'empty' }, 'Nothing to sum up yet. The review reads from the modules you switch on.')]));
    $('rv-copy').hidden = $('rv-save').hidden = $('rv-print').hidden = !list.length;
  }

  defineModule('review', {
    start() { kind = 'week'; back = 0; build(); paint(); },
    stop() {},
    show() { paint(); },
    refresh: paint,
    keys(e) {
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (isField(e.target.matches ? e.target : document.body)) return;
      const k = { KeyD: 'day', KeyW: 'week', KeyM: 'month', KeyY: 'year' }[e.code];
      if (k) { kind = k; back = 0; paint(); }
      else if (e.key === 'ArrowLeft') { back++; paint(); }
      else if (e.key === 'ArrowRight') { back = Math.max(0, back - 1); paint(); }
      else if (e.code === 'KeyC') copy();
    },
  });
})();
