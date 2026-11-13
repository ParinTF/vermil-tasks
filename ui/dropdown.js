// A drop-down in the app's own style, in place of the native <select>. The native popup is drawn by the WebView in its own
// look and shows as an empty box when there is nothing to choose. The <select> stays in the page, hidden, as the source of
// truth: its value, options, disabled state and change events work as before, and the drop-down follows them.
function enhanceSelect(select, { empty = 'Nothing to choose' } = {}) {
  const name = select.ariaLabel || '';
  const text = el('span', { className: 'dd-text' });
  const button = el('button', { type: 'button', className: 'dd-btn', ariaHaspopup: 'listbox', ariaExpanded: 'false' }, text, el('i', { className: 'dd-caret', ariaHidden: 'true' }));
  const list = el('ul', { className: 'dd-list', role: 'listbox', tabIndex: -1, hidden: true, ariaLabel: name });
  const wrap = el('div', { className: 'dd' });
  select.before(wrap);
  wrap.append(button, list, select);
  select.classList.add('dd-native');
  select.tabIndex = -1;
  select.setAttribute('aria-hidden', 'true');
  let active = -1;

  const options = () => [...select.options];
  function sync() {
    const o = select.selectedOptions[0];
    const none = !options().length;
    text.textContent = none ? empty : o ? o.textContent : '';
    button.classList.toggle('empty', none);
    button.disabled = none || select.disabled;
    button.ariaLabel = name ? `${name}: ${text.textContent}` : text.textContent;
  }

  const isOpen = () => !list.hidden;
  function close(focus) {
    list.hidden = true;
    button.ariaExpanded = 'false';
    removeEventListener('pointerdown', outside, true);
    removeEventListener('resize', close);
    list.removeEventListener('scroll', noop);
    if (focus) button.focus();
  }
  const noop = () => {};
  const outside = (e) => { if (!wrap.contains(e.target)) close(); };

  function choose(i) {
    const o = options()[i];
    if (!o) return;
    select.value = o.value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    sync();
    close(true);
  }

  function mark(i) {
    active = Math.max(0, Math.min(options().length - 1, i));
    [...list.children].forEach((li, n) => { li.classList.toggle('active', n === active); if (n === active) { list.setAttribute('aria-activedescendant', li.id); li.scrollIntoView({ block: 'nearest' }); } });
  }

  function open() {
    if (button.disabled || isOpen()) return;
    const id = 'dd-' + Math.random().toString(36).slice(2, 7);
    list.replaceChildren(...options().map((o, i) => {
      const li = el('li', { id: id + '-' + i, role: 'option', className: 'dd-opt', ariaSelected: String(o.selected), textContent: o.textContent });
      li.onpointerdown = (e) => e.preventDefault(); // keep the focus where it is
      li.onclick = () => choose(i);
      li.onpointermove = () => { if (active !== i) mark(i); };
      return li;
    }));
    const r = button.getBoundingClientRect();
    Object.assign(list.style, { left: r.left + 'px', top: r.bottom - 1 + 'px', width: r.width + 'px' });
    list.hidden = false;
    button.ariaExpanded = 'true';
    mark(Math.max(0, select.selectedIndex));
    addEventListener('pointerdown', outside, true);
    addEventListener('resize', close);
  }

  button.onclick = () => (isOpen() ? close() : open());
  button.onkeydown = (e) => {
    const n = options().length;
    if (!isOpen()) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); e.stopPropagation(); open(); }
      return;
    }
    const step = { ArrowDown: 1, ArrowUp: -1, Home: -n, End: n }[e.key];
    if (step) { e.preventDefault(); e.stopPropagation(); mark(e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (active + step + n) % n); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); choose(active); }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); }
    else if (e.key === 'Tab') close();
    else if (e.key.length === 1) { const at = options().findIndex((o, i) => i > active && o.textContent.toLowerCase().startsWith(e.key.toLowerCase())); if (at >= 0) mark(at); }
  };

  // follow the select: its options change when the module fills it, its value and disabled state when the module sets them
  const own = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value');
  Object.defineProperty(select, 'value', { configurable: true, get() { return own.get.call(this); }, set(v) { own.set.call(this, v); sync(); } });
  new MutationObserver(sync).observe(select, { childList: true, attributes: true, attributeFilter: ['disabled'] });
  sync();
}
