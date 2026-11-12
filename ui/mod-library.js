// Library module: what you want to read or watch, what you are in the middle of, and what you finished with a rating.
// Data: { items: [{ id, title, kind, status: 'want' | 'now' | 'done', note, rating, finished }] }.
(() => {
  let data = { items: [] };
  let status = 'now';
  let kind = ''; // '' = every kind
  const KINDS = ['Book', 'Film', 'Series', 'Game'];
  const STATUS = [['want', 'Want'], ['now', 'Now'], ['done', 'Done']];
  const save = () => saveModule('library', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('library-view');
  const today = () => localDay(new Date());

  function build() {
    root().replaceChildren(
      el('section', { className: 'lb-main', ariaLabel: 'Library' },
        el('div', { className: 'lb-head' }, el('h2', {}, 'Library'), el('span', { id: 'lb-year', className: 'lb-year' })),
        el('div', { className: 'lb-tabs', role: 'tablist', ariaLabel: 'Status' }, ...STATUS.map(([k, l]) => el('button', { id: 'lb-t-' + k, role: 'tab', type: 'button', onclick: () => { status = k; paint(); } }, l))),
        el('div', { className: 'lb-filters' },
          el('div', { id: 'lb-kinds', className: 'lb-kinds', role: 'group', ariaLabel: 'Kind' }),
          el('input', { id: 'lb-find', type: 'search', autocomplete: 'off', placeholder: 'Search', ariaLabel: 'Search the library', oninput: paintList })),
        el('ul', { id: 'lb-list', className: 'lb-list' }),
        el('div', { id: 'lb-none', className: 'empty', hidden: true })),
      el('aside', { className: 'lb-side', ariaLabel: 'Add to the library' },
        el('form', { id: 'lb-form', onsubmit: add },
          el('label', { className: 'lb-field' }, 'Title', el('input', { id: 'lb-title', maxLength: 100, autocomplete: 'off', placeholder: 'Dune' })),
          el('label', { className: 'lb-field' }, 'Author, director or a note', el('input', { id: 'lb-note', maxLength: 120, autocomplete: 'off', placeholder: 'Frank Herbert' })),
          el('div', { className: 'lb-two' },
            el('label', { className: 'lb-field' }, 'Kind', el('select', { id: 'lb-kind' }, ...KINDS.map((k) => el('option', { value: k }, k)))),
            el('label', { className: 'lb-field' }, 'Put it in', el('select', { id: 'lb-status' }, ...STATUS.map(([k, l]) => el('option', { value: k }, l))))),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'lb-msg', className: 'lb-msg', role: 'status' }))));
    $('lb-status').value = 'want';
  }

  function add(e) {
    e.preventDefault();
    const title = $('lb-title').value.trim();
    if (!title) { $('lb-msg').textContent = 'A title.'; return; }
    const st = $('lb-status').value;
    data.items.push({ id: crypto.randomUUID(), title, kind: $('lb-kind').value, status: st, note: $('lb-note').value.trim(), rating: 0, finished: st === 'done' ? today() : '' });
    save();
    $('lb-title').value = '';
    $('lb-note').value = '';
    $('lb-msg').textContent = `Added "${title}" to ${STATUS.find(([k]) => k === st)[1]}.`;
    paint();
    $('lb-title').focus();
  }

  function move(it, to) {
    it.status = to;
    it.finished = to === 'done' ? today() : '';
    if (to !== 'done') it.rating = 0;
    save();
    paint();
  }

  async function remove(it) {
    if (!(await ask(`Remove "${it.title}"?`, 'Remove'))) return;
    data.items = data.items.filter((x) => x.id !== it.id);
    save();
    paint();
  }

  function paintList() {
    const list = filterLibrary(data.items, status, kind, $('lb-find').value).sort((a, b) => (b.finished || '').localeCompare(a.finished || '') || a.title.localeCompare(b.title));
    $('lb-list').replaceChildren(...list.map((it) => {
      const acts = [];
      if (it.status === 'want') acts.push(['Start', () => move(it, 'now')]);
      if (it.status === 'now') acts.push(['Finished', () => move(it, 'done')], ['Back to want', () => move(it, 'want')]);
      if (it.status === 'done') acts.push(['Read again', () => move(it, 'now')]);
      const stars = it.status === 'done'
        ? el('span', { className: 'lb-stars', role: 'group', ariaLabel: 'Rating' }, ...[1, 2, 3, 4, 5].map((n) => { const b = el('button', { type: 'button', textContent: '★', ariaLabel: `${n} of 5`, ariaPressed: String(it.rating >= n) }); b.onclick = () => { it.rating = it.rating === n ? 0 : n; save(); paint(); }; return b; }))
        : '';
      const del = el('button', { type: 'button', className: 'lb-del', ariaLabel: 'Remove ' + it.title, textContent: '✕' });
      del.onclick = () => remove(it);
      return el('li', {}, el('span', { className: 'lb-title' }, el('b', {}, it.title), el('small', {}, [it.kind, it.note, it.finished && `finished ${fmt(parseDay(it.finished), { day: 'numeric', month: 'short', year: 'numeric' })}`].filter(Boolean).join(' · '))),
        stars, el('span', { className: 'lb-acts' }, ...acts.map(([t, fn]) => { const b = el('button', { type: 'button', className: 'linkish', textContent: t }); b.onclick = fn; return b; })), del);
    }));
    const label = STATUS.find(([k]) => k === status)[1].toLowerCase();
    $('lb-none').hidden = list.length > 0;
    $('lb-none').textContent = data.items.length ? `Nothing in "${label}" here.` : 'Your library is empty. Add a book, a film, a series or a game on the right.';
  }

  function paint() {
    for (const [k] of STATUS) { const n = data.items.filter((i) => i.status === k).length; const b = $('lb-t-' + k); b.textContent = `${STATUS.find(([x]) => x === k)[1]} ${n}`; b.ariaSelected = String(k === status); }
    $('lb-kinds').replaceChildren(...['', ...KINDS].map((k) => { const b = el('button', { type: 'button', textContent: k || 'All', ariaPressed: String(kind === k) }); b.onclick = () => { kind = k; paint(); }; return b; }));
    const y = libraryYear(data.items, new Date().getFullYear());
    $('lb-year').textContent = y.total ? `${y.total} finished in ${new Date().getFullYear()}${y.average ? ` · ${y.average} average rating` : ''}` : '';
    paintList();
  }

  const metricsFn = () => [
    { id: 'library.year', label: 'Books, films, series and games finished this year', unit: 'finished', get: () => libraryYear(data.items, new Date().getFullYear()).total },
    { id: 'library.books', label: 'Books finished this year', unit: 'books', get: () => libraryYear(data.items, new Date().getFullYear()).byKind.Book || 0 },
  ];
  const group = { module: 'library', title: 'Library', items: [['N', 'Add a title']] };
  const commandFn = () => [{ label: 'Add to the library', hint: 'Library', kind: 'Command', run: async () => { await setView('library'); $('lb-title').focus(); } }];

  defineModule('library', {
    summary() {
      const now = data.items.filter((i) => i.status === 'now');
      if (!data.items.length) return null;
      return now.length ? { label: 'Now', value: now[0].title, unit: '', sub: now.length > 1 ? `and ${now.length - 1} more` : now[0].kind } : { label: 'Library', value: String(data.items.filter((i) => i.status === 'want').length), unit: 'to go', sub: `${data.items.filter((i) => i.status === 'done').length} finished` };
    },
    weekly(since, until) {
      const done = data.items.filter((i) => i.status === 'done' && i.finished >= since && i.finished <= until);
      return { title: 'Library', lines: [done.length ? 'Finished: ' + done.map((i) => i.rating ? `${i.title} (${i.rating}★)` : i.title).join(', ') : 'Nothing finished', `${data.items.filter((i) => i.status === 'now').length} in progress`] };
    },
    start() {
      data = { items: [], ...(moduleData.library || {}) };
      status = 'now';
      kind = '';
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
      if (e.code === 'KeyN') { e.preventDefault(); $('lb-title').focus(); }
      else if (e.key === '/') { e.preventDefault(); $('lb-find').focus(); }
      else if (/^Digit[1-3]$/.test(e.code)) { status = STATUS[+e.code.slice(5) - 1][0]; paint(); }
    },
  });
})();
