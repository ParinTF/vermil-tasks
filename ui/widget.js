// The Today widget: a small always-on-top window. The Today widget module in the main window sends the tiles; a click on one
// brings the main window up on that view. Nothing here reads the data itself.
const { invoke } = window.__TAURI__.core;
const win = window.__TAURI__.window.getCurrentWindow();
const list = document.getElementById('w-list');

function show(json) {
  let tiles = [];
  try { tiles = JSON.parse(json || '[]'); } catch { /* an unreadable payload shows the empty message */ }
  list.replaceChildren(...(tiles.length ? tiles.map((t) => {
    const tile = document.createElement(t.view ? 'button' : 'div');
    tile.className = 'w-tile' + (t.warn ? ' warn' : '');
    if (t.view) { tile.type = 'button'; tile.onclick = () => invoke('widget_click', { view: t.view }); }
    for (const [tag, text] of [['small', t.label], ['b', [t.value, t.unit].filter(Boolean).join(' ')], ['em', t.sub]]) {
      const n = document.createElement(tag);
      n.textContent = text || '';
      tile.append(n);
    }
    return tile;
  }) : [Object.assign(document.createElement('p'), { className: 'w-empty', textContent: 'Nothing to show yet. Switch on modules in Vermil.' })]));
}

window.__TAURI__.event.listen('widget-update', (e) => show(e.payload));
invoke('widget_get').then(show);
document.getElementById('w-hide').onclick = () => win.hide();
addEventListener('keydown', (e) => { if (e.key === 'Escape') win.hide(); });
