// Weekly Review module: one page that sums up the last 7 days (or the 7 before) from every switched-on module,
// each through its weekly(since, until). Nothing is stored here; the page is built fresh every time.
(() => {
  let back = 0; // 0 = the last 7 days up to today, 1 = the 7 days before that
  const root = () => $('review-view');
  const today = () => localDay(new Date());
  const range = () => { const until = shiftDay(today(), -7 * back); return { since: shiftDay(until, -6), until }; };
  const fmtDay = (d) => fmt(parseDay(d), { day: 'numeric', month: 'short' });
  const rangeLabel = () => { const { since, until } = range(); return `${fmtDay(since)} to ${fmtDay(until)}`; };

  function sections() {
    const { since, until } = range();
    return MODULES.filter((m) => started.has(m.id) && m.id !== 'review').flatMap((m) => {
      try { const s = registry[m.id]?.weekly?.(since, until); return s ? [s] : []; } catch (e) { console.error(m.id, 'weekly', e); return []; }
    });
  }

  function build() {
    root().replaceChildren(
      el('section', { className: 'rv-main', ariaLabel: 'Weekly review' },
        el('div', { className: 'rv-head' }, el('h2', {}, 'Weekly review'),
          el('div', { className: 'rv-pick', role: 'group', ariaLabel: 'Which week' },
            el('button', { id: 'rv-now', type: 'button', ariaPressed: 'true', textContent: 'Last 7 days', onclick: () => { back = 0; paint(); } }),
            el('button', { id: 'rv-before', type: 'button', ariaPressed: 'false', textContent: 'The 7 before', onclick: () => { back = 1; paint(); } }))),
        el('p', { id: 'rv-range', className: 'rv-range' }),
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
    $('rv-now').ariaPressed = String(back === 0);
    $('rv-before').ariaPressed = String(back === 1);
    $('rv-range').textContent = rangeLabel();
    $('rv-msg').textContent = '';
    const list = sections();
    $('rv-body').replaceChildren(...(list.length
      ? list.map((s) => el('section', {}, el('h3', {}, s.title), el('ul', {}, ...s.lines.map((l) => el('li', {}, l)))))
      : [el('div', { className: 'empty' }, 'Nothing to sum up yet. The review reads from the modules you switch on.')]));
    $('rv-copy').hidden = $('rv-save').hidden = $('rv-print').hidden = !list.length;
  }

  defineModule('review', {
    start() { back = 0; build(); paint(); },
    stop() {},
    show() { paint(); },
    refresh: paint,
    keys(e) {
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'ArrowLeft') { back = 1; paint(); }
      else if (e.key === 'ArrowRight') { back = 0; paint(); }
      else if (e.code === 'KeyC') copy();
    },
  });
})();
