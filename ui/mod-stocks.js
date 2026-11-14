// Stocks module: look up a stock, watch it, and track what your positions are worth. It needs the internet, so every
// use starts with a connection check; offline it shows the last saved prices and says so.
// Two pages on one list: Watch (a compact table to glance at each stock) and Portfolio (the positions, with value and profit or loss; the page is called My stocks).
// Data: { items: [{ symbol, name, shares, cost }], quotes: { SYMBOL: quote }, at: ms, page: 'watch' | 'portfolio' }. Prices come from the backend
// (Yahoo Finance's public endpoints: free, may be delayed, and can change without notice).
const stocksApi = { // one place for the network calls, so a test can replace them
  online: () => invoke('net_online'),
  search: (q) => invoke('stock_search', { q }),
  quotes: (symbols) => invoke('stock_quotes', { symbols }),
};

(() => {
  let data = { items: [], quotes: {}, at: 0 };
  let online = null; // null until the first check
  let busy = false;
  let timer = null;
  let searchTimer = null;
  let note = ''; // the last problem, shown under the header
  const save = () => saveModule('stocks', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('stocks-view');
  const STATES = { PRE: 'Pre-market', REGULAR: 'Market open', POST: 'After-hours', CLOSED: 'Market closed' };

  function build() {
    const field = (id, label, props) => el('label', { className: 'st-field' }, label, el('input', { id, ...props }));
    root().replaceChildren(
      el('section', { className: 'st-main', ariaLabel: 'Stocks' },
        el('div', { className: 'st-head' }, el('h2', {}, 'Stocks'),
          el('div', { className: 'st-tools' }, el('span', { id: 'st-status', className: 'st-status', role: 'status' }),
            el('button', { id: 'st-refresh', className: 'linkish', type: 'button', textContent: 'Refresh', onclick: () => refresh() }))),
        el('div', { id: 'st-offline', className: 'st-offline', role: 'alert', hidden: true },
          el('b', {}, 'No internet connection. '), 'Stocks needs it to load prices, so search and updates are off. The last saved prices are shown. ',
          el('button', { className: 'linkish', type: 'button', textContent: 'Try again', onclick: () => refresh() })),
        el('div', { id: 'st-note', className: 'st-note-err', hidden: true }),
        el('div', { className: 'st-pages', role: 'group', ariaLabel: 'Stocks page' },
          ...[['watch', 'Watch'], ['portfolio', 'My stocks']].map(([id, label]) => { const b = el('button', { type: 'button', className: 'st-page-btn', textContent: label, onclick: () => setPage(id) }); b.dataset.page = id; return b; })),
        el('div', { id: 'st-watch', className: 'st-pane' },
          el('div', { className: 'sw-head', ariaHidden: 'true' }, ...['Symbol', 'Price', 'Change', 'Pre / post', 'Prev close', 'Status', ''].map((t) => el('span', {}, t))),
          el('ul', { id: 'sw-list', className: 'st-list sw-list', ariaLabel: 'Watched stocks' })),
        el('div', { id: 'st-port', className: 'st-pane' },
          el('div', { id: 'st-sum', className: 'st-sum' }),
          el('ul', { id: 'st-list', className: 'st-list', ariaLabel: 'Your positions' })),
        el('div', { id: 'st-none', className: 'empty', hidden: true }, 'Nothing here yet. Search for a stock on the right, then add it to watch or to track a position.'),
        el('p', { className: 'st-fine' }, 'Prices come from Yahoo Finance, update every 15 seconds while this tab is open, and may be delayed (some exchanges by 15 minutes). The big price is the latest trade, even before the open or after the close, and its move is against the previous close. Under it: the close, and the pre-market and after-hours moves. This is information, not advice.')),
      el('aside', { className: 'st-side', ariaLabel: 'Find and add a stock' },
        el('form', { id: 'st-find', onsubmit: (e) => { e.preventDefault(); const first = document.querySelector('#st-results button'); if (first) first.click(); } },
          field('st-q', 'Find a stock', { type: 'search', autocomplete: 'off', placeholder: 'Name or symbol, e.g. apple or NVDA', maxLength: 40 })),
        el('ul', { id: 'st-results', className: 'st-results', ariaLabel: 'Search results' }),
        el('div', { id: 'st-find-msg', className: 'st-msg', role: 'status' }),
        el('form', { id: 'st-pos', className: 'st-pos', hidden: true, onsubmit: addPosition },
          el('div', { id: 'st-pos-title', className: 'st-pos-title' }),
          field('st-shares', 'Shares you hold (0 to just watch)', { inputMode: 'decimal', autocomplete: 'off', placeholder: '0' }),
          field('st-cost', 'Average price you paid', { inputMode: 'decimal', autocomplete: 'off', placeholder: 'Optional' }),
          el('div', { className: 'actions' },
            el('button', { id: 'st-save', className: 'primary', type: 'submit' }, el('span', {}, 'Save'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('button', { className: 'ghost', type: 'button', textContent: 'Cancel', onclick: () => { $('st-pos').hidden = true; } })))));
    $('st-q').oninput = () => { clearTimeout(searchTimer); searchTimer = setTimeout(search, 350); };
    mobileSheet(root(), root().querySelector('.st-side'), 'Add stock');
  }

  const symbols = () => data.items.map((i) => i.symbol);

  function paintStatus() {
    const states = Object.values(data.quotes).map((q) => q.state);
    const market = states.length ? STATES[[...new Set(states)].sort((a, b) => states.filter((s) => s === b).length - states.filter((s) => s === a).length)[0]] : '';
    $('st-status').replaceChildren(
      el('i', { className: 'st-dot ' + (online === null ? '' : online ? 'on' : 'off') }),
      document.createTextNode(online === null ? 'Checking connection…' : online ? 'Online' : 'Offline'),
      ...(data.at ? [document.createTextNode(` · updated ${new Date(data.at).toLocaleTimeString('en-GB')}`)] : []),
      ...(market ? [document.createTextNode(' · ' + market)] : []));
    $('st-offline').hidden = online !== false;
    $('st-note').hidden = !note;
    $('st-note').textContent = note;
    for (const id of ['st-q', 'st-refresh']) $(id).disabled = online === false || busy;
  }

  const move = (n) => el('span', { className: 'st-move ' + (n > 0 ? 'up' : n < 0 ? 'down' : 'flat') }, (n > 0 ? '▲ ' : n < 0 ? '▼ ' : '') + pctLabel(n));
  const clock = (sec) => new Date(sec * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  // the page on show: the one chosen last, else Portfolio when something is held and Watch otherwise
  const pageNow = () => (data.page === 'watch' || data.page === 'portfolio' ? data.page : data.items.some((i) => i.shares > 0) ? 'portfolio' : 'watch');
  function setPage(p) {
    data.page = p;
    save();
    paint();
    document.querySelector(`.st-page-btn[data-page="${p}"]`)?.focus();
  }

  // one stock on the Watch page: a single line with everything the Portfolio page shows about its price, and no money
  function watchRow(r) {
    const q = r.q;
    const now = q ? stockNow(q) : null;
    const pct = (label, n) => el('span', { className: 'sw-pct ' + (n > 0 ? 'up' : n < 0 ? 'down' : 'flat') }, `${label} ${pctLabel(n)}`);
    const ext = !q ? [] : now.label === 'Pre-market' || now.label === 'After-hours' ? [pct('Close', q.changePct)]
      : [...(q.prePct !== null && q.prePct !== undefined ? [pct('Pre', q.prePct)] : []), ...(q.postPct !== null && q.postPct !== undefined ? [pct('Post', q.postPct)] : [])];
    const edit = el('button', { type: 'button', className: 'st-act', ariaLabel: 'Edit ' + r.symbol, textContent: '✎', onclick: () => openPosition(r) });
    const del = el('button', { type: 'button', className: 'st-act', ariaLabel: 'Remove ' + r.symbol, textContent: '✕', onclick: () => remove(r) });
    const li = el('li', { tabIndex: 0, title: 'Drag to reorder', ariaLabel: `${r.symbol}. Alt and the up or down arrow move it.` },
      el('span', { className: 'st-name' }, el('b', {}, r.symbol), el('small', {}, r.name || (q && q.name) || '')),
      q ? el('b', { className: 'sw-price' }, priceLabel(now.price, q.currency)) : el('span', { className: 'sw-price st-wait' }, online === false ? 'no price saved' : 'loading…'),
      el('span', { className: 'sw-change' }, ...(q ? [move(now.pct), el('small', {}, signedLabel(now.change, q.currency))] : [])),
      el('span', { className: 'sw-ext' }, ...ext),
      el('span', { className: 'sw-prev' }, q ? (q.prevClose ? priceLabel(q.prevClose, q.currency) : '—') : ''),
      el('span', { className: 'sw-state' }, q ? now.label + (now.time ? ' · ' + clock(now.time) : '') : ''),
      el('span', { className: 'st-acts' }, edit, del));
    li.dataset.symbol = r.symbol;
    li.onpointerdown = (e) => { if (e.button === 0 && !e.target.closest('button')) dragRow(li, e); };
    li.onkeydown = (e) => { if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.target === li) { e.preventDefault(); e.stopPropagation(); moveRow(r.symbol, e.key === 'ArrowUp' ? -1 : 1); } };
    return li;
  }

  function paint() {
    const { rows, totals } = portfolio(data.items, data.quotes);
    const page = pageNow();
    $('st-watch').hidden = page !== 'watch';
    $('st-port').hidden = page !== 'portfolio';
    for (const b of document.querySelectorAll('.st-page-btn')) b.ariaPressed = String(b.dataset.page === page);
    $('sw-list').replaceChildren(...rows.map(watchRow));
    $('st-sum').replaceChildren(...totals.flatMap((t) => {
      const fig = (label, value, cls = '') => el('div', { className: cls }, el('small', {}, label), el('b', {}, value));
      return [fig('Value' + (totals.length > 1 ? ' · ' + t.currency : ''), priceLabel(t.value, t.currency)),
        fig('Today', signedLabel(t.day, t.currency), t.day < 0 ? 'neg' : t.day > 0 ? 'pos' : ''),
        fig('Profit / loss', t.hasPl ? `${signedLabel(t.pl, t.currency)} (${pctLabel(t.plPct)})` : '—', !t.hasPl ? '' : t.pl < 0 ? 'neg' : t.pl > 0 ? 'pos' : '')];
    }));
    $('st-list').replaceChildren(...rows.map((r) => {
      const q = r.q;
      const now = q ? stockNow(q) : null;
      const ext = (label, price, pct) => el('span', {}, `${label} ${priceLabel(price, q.currency)} `, move(pct));
      const edit = el('button', { type: 'button', className: 'st-act', ariaLabel: 'Edit ' + r.symbol, textContent: '✎', onclick: () => openPosition(r) });
      const del = el('button', { type: 'button', className: 'st-act', ariaLabel: 'Remove ' + r.symbol, textContent: '✕', onclick: () => remove(r) });
      const li = el('li', { tabIndex: 0, title: 'Drag to reorder', ariaLabel: `${r.symbol}. Alt and the up or down arrow move it.` },
        el('span', { className: 'st-name' }, el('b', {}, r.symbol), el('small', {}, r.name || (q && q.name) || '')),
        // the big number is the latest price, with its move against the previous close; what the market did before and after is small
        q ? el('span', { className: 'st-price' }, el('b', { className: 'st-now' }, priceLabel(now.price, q.currency)), move(now.pct), el('small', {}, now.label + (now.time ? ' · ' + clock(now.time) : ''))) : el('span', { className: 'st-price st-wait' }, online === false ? 'no price saved' : 'loading…'),
        el('span', { className: 'st-ext' },
          ...(q && now.label === 'Live' ? [el('span', {}, 'Prev close ', priceLabel(q.prevClose, q.currency))] : []),
          ...(q && (now.label === 'Pre-market' || now.label === 'After-hours') ? [ext('Close', q.price, q.changePct)] : []),
          ...(q && q.prePct !== null && now.label !== 'Pre-market' ? [ext('Pre-market', q.prePrice, q.prePct)] : []),
          ...(q && q.postPct !== null && now.label !== 'After-hours' ? [ext('After-hours', q.postPrice, q.postPct)] : [])),
        el('span', { className: 'st-pos-cell' },
          ...(r.shares ? [el('span', {}, `${r.shares} sh`, q ? ` · ${priceLabel(r.value, q.currency)}` : ''),
            ...(r.pl !== null ? [el('span', { className: 'st-pl' + (r.pl < 0 ? ' down' : r.pl > 0 ? ' up' : '') }, `${signedLabel(r.pl, q.currency)} (${pctLabel(r.plPct)})`)] : [])] : [el('span', { className: 'st-watch' }, 'watching')])),
        el('span', { className: 'st-acts' }, edit, del));
      li.dataset.symbol = r.symbol;
      li.onpointerdown = (e) => { if (e.button === 0 && !e.target.closest('button')) dragRow(li, e); };
      li.onkeydown = (e) => { if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && e.target === li) { e.preventDefault(); e.stopPropagation(); moveRow(r.symbol, e.key === 'ArrowUp' ? -1 : 1); } };
      return li;
    }));
    $('st-none').hidden = data.items.length > 0;
    paintStatus();
  }

  // Reorder the list: drag a row (pointer events: HTML5 drag and drop is unreliable in the WebView) or Alt+Up/Down on it.
  function keepOrder(symbols) {
    data.items.sort((a, b) => symbols.indexOf(a.symbol) - symbols.indexOf(b.symbol));
    save();
    paint();
  }
  function moveRow(symbol, d) {
    const order = symbols(), i = order.indexOf(symbol);
    if (i + d < 0 || i + d >= order.length) return;
    [order[i], order[i + d]] = [order[i + d], order[i]];
    keepOrder(order);
    document.querySelector(`.st-pane:not([hidden]) li[data-symbol="${symbol}"]`)?.focus();
  }
  function dragRow(li, e) {
    const list = li.parentNode;
    const from = { x: e.clientX, y: e.clientY };
    let moved = false;
    list.setPointerCapture(e.pointerId); // on the list: moving the row in the DOM would drop a capture held by the row
    list.onpointermove = (ev) => {
      if (!moved && Math.hypot(ev.clientX - from.x, ev.clientY - from.y) < 5) return;
      moved = true;
      li.classList.add('dragging');
      const others = [...list.children].filter((x) => x !== li);
      const at = others.filter((x) => { const r = x.getBoundingClientRect(); return r.top + r.height / 2 < ev.clientY; }).length;
      if (others[at] !== li.nextSibling) list.insertBefore(li, others[at] || null);
    };
    list.onpointerup = list.onpointercancel = () => {
      list.onpointermove = list.onpointerup = list.onpointercancel = null;
      li.classList.remove('dragging');
      if (moved) keepOrder([...list.children].map((x) => x.dataset.symbol));
    };
  }

  // every use starts with a connection check
  async function refresh() {
    if (busy) return;
    busy = true;
    note = '';
    if (online !== true) { online = null; paintStatus(); } // an update while online does not flash "Checking connection"
    try { online = await stocksApi.online(); } catch { online = false; }
    if (online && symbols().length) {
      try {
        const r = await stocksApi.quotes(symbols());
        for (const q of r.quotes) data.quotes[q.symbol.toUpperCase()] = q;
        if (r.quotes.length) data.at = Date.now();
        if (r.failed.length) note = `${r.failed.length} price${r.failed.length === 1 ? '' : 's'} could not be loaded (${r.failed[0]}).`;
        save();
      } catch (e) {
        if (String(e).includes('no internet')) online = false; else note = 'Could not load prices: ' + e;
      }
    }
    busy = false;
    paint();
  }

  async function search() {
    const q = $('st-q').value.trim();
    $('st-results').replaceChildren();
    $('st-find-msg').textContent = '';
    if (!q) return;
    if (online === false) { $('st-find-msg').textContent = 'Search needs the internet.'; return; }
    $('st-find-msg').textContent = 'Searching…';
    try {
      if (!(await stocksApi.online())) { online = false; paint(); $('st-find-msg').textContent = 'Search needs the internet.'; return; }
      const found = await stocksApi.search(q);
      if ($('st-q').value.trim() !== q) return; // a newer search is on its way
      $('st-find-msg').textContent = found.length ? '' : 'No match.';
      $('st-results').replaceChildren(...found.map((f) => {
        const b = el('button', { type: 'button' }, el('b', {}, f.symbol), el('span', {}, f.name), el('small', {}, [f.exchange, f.kind === 'EQUITY' ? '' : f.kind.toLowerCase()].filter(Boolean).join(' · ')));
        b.onclick = () => openPosition({ symbol: f.symbol.toUpperCase(), name: f.name, shares: 0, cost: 0 });
        return el('li', {}, b);
      }));
    } catch (e) {
      if (String(e).includes('no internet')) { online = false; paint(); }
      $('st-find-msg').textContent = String(e).includes('no internet') ? 'Search needs the internet.' : 'Search failed: ' + e;
    }
  }

  function openPosition(r) {
    const have = data.items.find((i) => i.symbol === r.symbol);
    if (typeof isMobile === 'function' && isMobile()) root().classList.add('sheet-open');
    $('st-pos').hidden = false;
    $('st-pos').dataset.symbol = r.symbol;
    $('st-pos').dataset.name = r.name || '';
    $('st-pos-title').textContent = `${r.symbol}${r.name ? ' · ' + r.name : ''}`;
    $('st-shares').value = have && have.shares ? have.shares : r.shares || '';
    $('st-cost').value = have && have.cost ? have.cost : r.cost || '';
    $('st-save').firstChild.textContent = have ? 'Save' : 'Add';
    $('st-shares').focus();
  }

  function addPosition(e) {
    e.preventDefault();
    const symbol = $('st-pos').dataset.symbol;
    const num = (s) => { const n = Number(String(s).replace(/,/g, '')); return Number.isFinite(n) && n >= 0 ? n : NaN; };
    const shares = $('st-shares').value.trim() ? num($('st-shares').value) : 0;
    const cost = $('st-cost').value.trim() ? num($('st-cost').value) : 0;
    if (Number.isNaN(shares) || Number.isNaN(cost)) { $('st-find-msg').textContent = 'Shares and price must be numbers, 0 or more.'; return; }
    const item = { symbol, name: $('st-pos').dataset.name, shares, cost };
    const i = data.items.findIndex((x) => x.symbol === symbol);
    if (i >= 0) data.items[i] = { ...data.items[i], ...item, name: item.name || data.items[i].name }; else data.items.push(item);
    save();
    $('st-pos').hidden = true;
    $('st-q').value = '';
    $('st-results').replaceChildren();
    $('st-find-msg').textContent = `${symbol} saved.`;
    paint();
    refresh();
  }

  async function remove(r) {
    if (!(await ask(`Remove ${r.symbol} from your list?`, 'Remove'))) return;
    data.items = data.items.filter((x) => x.symbol !== r.symbol);
    delete data.quotes[r.symbol];
    save();
    paint();
  }

  const metricsFn = () => [{ id: 'stocks.value', label: 'My stocks value (saved prices)', unit: '', get: () => portfolio(data.items, data.quotes).totals[0]?.value || 0 }];
  const group = { module: 'stocks', title: 'Stocks', items: [['/', 'Find a stock'], ['R', 'Refresh prices'], ['1 / 2', 'Watch or My stocks'], ['Alt+↑/↓', 'Move the focused stock up or down']] };
  const commandFn = () => [{ label: 'Look up a stock', hint: 'Stocks', kind: 'Command', run: async () => { await setView('stocks'); $('st-q').focus(); } }];
  const wake = () => { if (view === 'stocks') refresh(); };
  const goOnline = () => wake();
  const goOffline = () => { online = false; paint(); };

  defineModule('stocks', {
    weekly() {
      if (!data.items.length) return null;
      const t = portfolio(data.items, data.quotes).totals[0];
      return { title: 'Stocks', lines: t ? [`My stocks ${priceLabel(t.value, t.currency)}, ${signedLabel(t.day, t.currency)} on the last day with a saved price`, ...(t.hasPl ? [`Profit or loss ${signedLabel(t.pl, t.currency)} (${pctLabel(t.plPct)})`] : [])] : [`${data.items.length} watched, no prices saved yet`] };
    },
    summary() {
      if (!data.items.length) return null;
      const t = portfolio(data.items, data.quotes).totals[0];
      if (!t) return { label: 'Stocks', value: String(data.items.length), unit: 'watching', sub: 'No prices saved yet' };
      const base = t.value - t.day;
      return { label: 'My stocks', value: priceLabel(t.value, t.currency), unit: '', warn: t.day < 0, sub: `Today ${signedLabel(t.day, t.currency)}${base ? ' (' + pctLabel(t.day / base * 100) + ')' : ''} · saved prices` };
    },
    start() {
      data = { items: [], quotes: {}, at: 0, ...(moduleData.stocks || {}) };
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
      // while this tab is open the prices update every 15 seconds (30 with more than ten stocks); Yahoo may still delay some exchanges
      timer = setInterval(() => { if (view === 'stocks' && !document.hidden && (symbols().length <= 10 || Date.now() - data.at > 29000)) refresh(); }, 15000);
      addEventListener('online', goOnline);
      addEventListener('offline', goOffline);
    },
    stop() {
      clearInterval(timer);
      removeEventListener('online', goOnline);
      removeEventListener('offline', goOffline);
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      metricHooks.splice(metricHooks.indexOf(metricsFn), 1);
    },
    show() { paint(); refresh(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.key === '/' || e.code === 'KeyN') { e.preventDefault(); $('st-q').focus(); }
      else if (e.code === 'KeyR') refresh();
      else if (e.code === 'Digit1') setPage('watch');
      else if (e.code === 'Digit2') setPage('portfolio');
    },
  });
})();
