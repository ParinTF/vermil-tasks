// Stocks module: look up a stock, watch it, and track what your positions are worth. It needs the internet, so every
// use starts with a connection check; offline it shows the last saved prices and says so.
// Data: { items: [{ symbol, name, shares, cost }], quotes: { SYMBOL: quote }, at: ms }. Prices come from the backend
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
        el('div', { id: 'st-sum', className: 'st-sum' }),
        el('ul', { id: 'st-list', className: 'st-list', ariaLabel: 'Your stocks' }),
        el('div', { id: 'st-none', className: 'empty', hidden: true }, 'Nothing here yet. Search for a stock on the right, then add it to watch or to track a position.'),
        el('p', { className: 'st-fine' }, 'Prices come from Yahoo Finance and may be delayed. Pre-market moves compare with the previous close, after-hours moves with today’s close. This is information, not advice.')),
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
  }

  const symbols = () => data.items.map((i) => i.symbol);

  function paintStatus() {
    const states = Object.values(data.quotes).map((q) => q.state);
    const market = states.length ? STATES[[...new Set(states)].sort((a, b) => states.filter((s) => s === b).length - states.filter((s) => s === a).length)[0]] : '';
    $('st-status').replaceChildren(
      el('i', { className: 'st-dot ' + (online === null ? '' : online ? 'on' : 'off') }),
      document.createTextNode(online === null ? 'Checking connection…' : online ? 'Online' : 'Offline'),
      ...(data.at ? [document.createTextNode(` · updated ${new Date(data.at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`)] : []),
      ...(market ? [document.createTextNode(' · ' + market)] : []));
    $('st-offline').hidden = online !== false;
    $('st-note').hidden = !note;
    $('st-note').textContent = note;
    for (const id of ['st-q', 'st-refresh']) $(id).disabled = online === false || busy;
  }

  const move = (n) => el('span', { className: 'st-move' + (n < 0 ? ' down' : '') }, (n > 0 ? '▲ ' : n < 0 ? '▼ ' : '') + pctLabel(n));

  function paint() {
    const { rows, totals } = portfolio(data.items, data.quotes);
    $('st-sum').replaceChildren(...totals.flatMap((t) => {
      const fig = (label, value, cls = '') => el('div', { className: cls }, el('small', {}, label), el('b', {}, value));
      return [fig('Value' + (totals.length > 1 ? ' · ' + t.currency : ''), priceLabel(t.value, t.currency)),
        fig('Today', signedLabel(t.day, t.currency), t.day < 0 ? 'neg' : ''),
        fig('Profit / loss', t.hasPl ? `${signedLabel(t.pl, t.currency)} (${pctLabel(t.plPct)})` : '—', t.hasPl && t.pl < 0 ? 'neg' : '')];
    }));
    $('st-list').replaceChildren(...rows.map((r) => {
      const q = r.q;
      const edit = el('button', { type: 'button', className: 'st-act', ariaLabel: 'Edit ' + r.symbol, textContent: '✎', onclick: () => openPosition(r) });
      const del = el('button', { type: 'button', className: 'st-act', ariaLabel: 'Remove ' + r.symbol, textContent: '✕', onclick: () => remove(r) });
      return el('li', {},
        el('span', { className: 'st-name' }, el('b', {}, r.symbol), el('small', {}, r.name || (q && q.name) || '')),
        q ? el('span', { className: 'st-price' }, priceLabel(q.price, q.currency), move(q.changePct)) : el('span', { className: 'st-price st-wait' }, online === false ? 'no price saved' : 'loading…'),
        el('span', { className: 'st-ext' },
          ...(q && q.prePct !== null ? [el('span', {}, 'Pre-market ', move(q.prePct))] : []),
          ...(q && q.postPct !== null ? [el('span', {}, 'After-hours ', move(q.postPct))] : [])),
        el('span', { className: 'st-pos-cell' },
          ...(r.shares ? [el('span', {}, `${r.shares} sh`, q ? ` · ${priceLabel(r.value, q.currency)}` : ''),
            ...(r.pl !== null ? [el('span', { className: 'st-pl' + (r.pl < 0 ? ' down' : '') }, `${signedLabel(r.pl, q.currency)} (${pctLabel(r.plPct)})`)] : [])] : [el('span', { className: 'st-watch' }, 'watching')])),
        el('span', { className: 'st-acts' }, edit, del));
    }));
    $('st-none').hidden = data.items.length > 0;
    paintStatus();
  }

  // every use starts with a connection check
  async function refresh() {
    if (busy) return;
    busy = true;
    note = '';
    online = null;
    paintStatus();
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

  const metricsFn = () => [{ id: 'stocks.value', label: 'Portfolio value (saved prices)', unit: '', get: () => portfolio(data.items, data.quotes).totals[0]?.value || 0 }];
  const group = { module: 'stocks', title: 'Stocks', items: [['/', 'Find a stock'], ['R', 'Refresh prices']] };
  const commandFn = () => [{ label: 'Look up a stock', hint: 'Stocks', kind: 'Command', run: async () => { await setView('stocks'); $('st-q').focus(); } }];
  const wake = () => { if (view === 'stocks') refresh(); };
  const goOnline = () => wake();
  const goOffline = () => { online = false; paint(); };

  defineModule('stocks', {
    summary() {
      if (!data.items.length) return null;
      const t = portfolio(data.items, data.quotes).totals[0];
      if (!t) return { label: 'Stocks', value: String(data.items.length), unit: 'watching', sub: 'No prices saved yet' };
      const base = t.value - t.day;
      return { label: 'Portfolio', value: priceLabel(t.value, t.currency), unit: '', warn: t.day < 0, sub: `Today ${signedLabel(t.day, t.currency)}${base ? ' (' + pctLabel(t.day / base * 100) + ')' : ''} · saved prices` };
    },
    start() {
      data = { items: [], quotes: {}, at: 0, ...(moduleData.stocks || {}) };
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      metricHooks.push(metricsFn);
      timer = setInterval(() => { if (view === 'stocks' && !document.hidden) refresh(); }, 60000);
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
    },
  });
})();
