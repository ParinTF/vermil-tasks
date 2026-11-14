// Bookmarks & Read Later module: save articles, links and docs by tag, filter by Unread / Pinned / Read, and search from Ctrl+K.
// Data: { items: [{ id, title, url, tag, note, read, pinned, addedAt }] }.
(() => {
  let data = { items: [] };
  let status = 'unread'; // 'unread' | 'pinned' | 'read' | 'all'
  let activeTag = '';
  const save = () => saveModule('links', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('links-view');

  function build() {
    const field = (id, label, props) => el('label', { className: 'lk-field' }, label, el('input', { id, ...props }));
    root().replaceChildren(
      el('section', { className: 'lk-main', ariaLabel: 'Bookmarks' },
        el('div', { className: 'lk-head' }, el('h2', {}, 'Bookmarks'), el('span', { id: 'lk-count', className: 'lk-count' })),
        el('div', { id: 'lk-tabs', className: 'lk-tabs', role: 'tablist', ariaLabel: 'Filter links' }),
        el('div', { id: 'lk-tags', className: 'tag-bar', hidden: true }),
        el('input', { id: 'lk-search', type: 'search', placeholder: 'Search bookmarks (Ctrl+F)', ariaLabel: 'Search bookmarks', oninput: paint }),
        el('ul', { id: 'lk-list', className: 'lk-list', ariaLabel: 'Saved links' }),
        el('div', { id: 'lk-none', className: 'empty', hidden: true })),
      el('aside', { className: 'lk-side', ariaLabel: 'Save a link' },
        el('form', { id: 'lk-form', onsubmit: add },
          field('lk-url', 'URL', { type: 'text', maxLength: 500, autocomplete: 'off', placeholder: 'https://example.com/article' }),
          field('lk-title', 'Title', { type: 'text', maxLength: 140, autocomplete: 'off', placeholder: 'Article or video title' }),
          field('lk-tag', 'Tag', { type: 'text', maxLength: 24, autocomplete: 'off', placeholder: 'dev, design, read' }),
          field('lk-note', 'Note', { type: 'text', maxLength: 200, autocomplete: 'off', placeholder: 'Why you saved it (optional)' }),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Save link'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'lk-msg', className: 'lk-msg', role: 'status' }))));
    mobileSheet(root(), root().querySelector('.lk-side'), 'Save link');
  }

  function add(e) {
    e.preventDefault();
    const url = cleanLinkUrl($('lk-url').value);
    if (!url) { $('lk-msg').textContent = 'Enter a valid web address.'; $('lk-url').focus(); return; }
    const title = $('lk-title').value.trim() || linkHost(url) || url;
    const tag = $('lk-tag').value.replace(/^#+/, '').trim().toLowerCase().slice(0, 24);
    const note = $('lk-note').value.trim();
    data.items.push({ id: crypto.randomUUID(), title, url, tag, note, read: false, pinned: false, addedAt: new Date().toISOString() });
    save();
    $('lk-url').value = '';
    $('lk-title').value = '';
    $('lk-tag').value = '';
    $('lk-note').value = '';
    $('lk-msg').textContent = `Saved "${title}".`;
    paint();
    $('lk-url').focus();
  }

  function openUrl(url) {
    try { window.open(url, '_blank', 'noopener,noreferrer'); } catch {}
  }

  async function remove(it) {
    if (!(await ask(`Delete bookmark "${it.title}"?`, 'Delete'))) return;
    data.items = data.items.filter((x) => x.id !== it.id);
    save();
    paint();
  }

  function paint() {
    const unreadCount = data.items.filter((x) => !x.read).length;
    const pinnedCount = data.items.filter((x) => x.pinned).length;
    const readCount = data.items.filter((x) => x.read).length;
    $('lk-count').textContent = `${unreadCount} to read · ${data.items.length} total`;

    const tabs = [
      ['unread', `To read (${unreadCount})`],
      ['pinned', `Pinned (${pinnedCount})`],
      ['read', `Read (${readCount})`],
      ['all', `All (${data.items.length})`],
    ];
    $('lk-tabs').replaceChildren(...tabs.map(([id, label]) => {
      const b = el('button', { type: 'button', role: 'tab', ariaSelected: String(status === id) }, label);
      b.onclick = () => { status = id; paint(); };
      return b;
    }));

    const allTags = [...new Set(data.items.map((x) => x.tag).filter(Boolean))].sort();
    if (activeTag && !allTags.includes(activeTag)) activeTag = '';
    const tagBar = $('lk-tags');
    tagBar.hidden = !allTags.length;
    if (allTags.length) {
      tagBar.replaceChildren(
        el('button', { type: 'button', className: 'tag-pill' + (!activeTag ? ' active' : ''), onclick: () => { activeTag = ''; paint(); } }, 'All tags'),
        ...allTags.map((tg) => el('button', { type: 'button', className: 'tag-pill' + (activeTag === tg ? ' active' : ''), onclick: () => { activeTag = activeTag === tg ? '' : tg; paint(); } }, '#' + tg)));
    }

    const list = filterLinks(data.items, { status, tag: activeTag, q: $('lk-search')?.value || '' });
    $('lk-list').replaceChildren(...list.map((it) => {
      const host = linkHost(it.url);
      const openBtn = el('button', { type: 'button', className: 'lk-btn primary-tint', onclick: () => openUrl(it.url) }, 'Open ↗');
      const readBtn = el('button', { type: 'button', className: 'lk-btn', onclick: () => { it.read = !it.read; save(); paint(); } }, it.read ? 'Unread' : 'Mark read');
      const pinBtn = el('button', { type: 'button', className: 'lk-btn', onclick: () => { it.pinned = !it.pinned; save(); paint(); } }, it.pinned ? 'Unpin' : 'Pin');
      const delBtn = el('button', { type: 'button', className: 'lk-del', ariaLabel: 'Delete ' + it.title, textContent: '✕', onclick: () => remove(it) });
      return el('li', { className: 'lk-row' + (it.read ? ' read' : '') },
        el('div', { className: 'lk-info' },
          el('div', { className: 'lk-title-line' },
            ...(it.pinned ? [el('span', { className: 'pin-dot', ariaLabel: 'Pinned' }, '●')] : []),
            el('button', { type: 'button', className: 'lk-title', onclick: () => openUrl(it.url) }, it.title),
            ...(host ? [el('span', { className: 'lk-host' }, host)] : []),
            ...(it.tag ? [el('span', { className: 'task-tag' }, '#' + it.tag)] : [])),
          ...(it.note ? [el('p', { className: 'lk-note' }, it.note)] : [])),
        el('div', { className: 'lk-acts' }, openBtn, readBtn, pinBtn, delBtn));
    }));
    $('lk-none').hidden = list.length > 0;
    $('lk-none').textContent = status === 'unread' ? 'Reading list is clear. Save an article or video on the right.' : 'No matching bookmarks.';
  }

  const group = { module: 'links', title: 'Bookmarks', items: [['N', 'Save a link'], ['Ctrl+F', 'Search bookmarks']] };
  const commandFn = () => [
    { label: 'Save a bookmark', hint: 'Bookmarks', kind: 'Command', run: async () => { await setView('links'); $('lk-url').focus(); } },
    ...data.items.map((it) => ({ label: it.title, hint: linkHost(it.url) || 'Bookmark', kind: 'Bookmark', run: () => openUrl(it.url) })),
  ];

  defineModule('links', {
    summary() {
      if (!data.items.length) return null;
      const unread = data.items.filter((x) => !x.read).length;
      return { label: 'Bookmarks', value: String(unread), unit: 'to read', sub: `${data.items.length} saved in all` };
    },
    weekly(since, until) {
      const added = data.items.filter((x) => x.addedAt && localDay(new Date(x.addedAt)) >= since && localDay(new Date(x.addedAt)) <= until).length;
      return { title: 'Bookmarks', lines: [`${added} link${added === 1 ? '' : 's'} saved`] };
    },
    start() {
      data = { items: [], ...(moduleData.links || {}) };
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
    },
    stop() {
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { paint(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      const ctrl = (e.ctrlKey || e.metaKey) && !e.altKey;
      if (ctrl && e.code === 'KeyF') { e.preventDefault(); $('lk-search').focus(); $('lk-search').select(); return; }
      if (ctrl) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('lk-url').focus(); }
    },
  });
})();
