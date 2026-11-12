// Today widget module: keeps the small always-on-top window up to date. The window itself lives in the backend; this
// module only sends it the Today tiles (the same ones as on Home) and opens a view when a tile is clicked there.
(() => {
  let timer = null;
  let soon = null;
  let off = null;

  const publish = () => invoke('widget_set', { tiles: JSON.stringify(todayTiles()) }).catch(() => {});
  const publishSoon = () => { clearTimeout(soon); soon = setTimeout(publish, 400); };

  defineModule('widget', {
    publishSoon,
    start() {
      publish();
      invoke('widget_enable', { on: true });
      timer = setInterval(publish, 15000); // the clock-driven tiles (overdue, days left) move without any save
      window.__TAURI__.event.listen('open-view', (e) => { if (VIEWS.includes(e.payload)) setView(e.payload); }).then((un) => { off = un; });
    },
    stop() {
      clearInterval(timer);
      clearTimeout(soon);
      off?.();
      invoke('widget_enable', { on: false });
    },
  });
})();
