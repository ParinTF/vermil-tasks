// Levels module: XP and levels for what you do. Every module that has something worth counting says so through emit()
// (a task done, a habit kept, a focus session...); the rules, the caps and the level maths are in logic.js (XP_RULES, xpAward, xpLevel).
// Shows one band on Home and a short message at each level. Data: { total, day, today: { source: xp }, keys: { key: day }, log: [{ day, label, pts }] }.
(() => {
  const fresh = () => ({ total: 0, day: '', today: {}, keys: {}, log: [] });
  let state = fresh();
  let banner = null;
  let bannerTimer = null;
  const today = () => localDay(new Date());
  const save = () => saveModule('xp', state).catch((e) => console.error('xp save', e));
  const gainedToday = () => (state.day === today() ? Object.values(state.today).reduce((n, v) => n + v, 0) : 0);

  function onEvent(type, data) {
    const r = xpAward(state, type, data, today());
    if (!r.gained) return;
    const before = xpLevel(state.total).level;
    state = r.state;
    const now = xpLevel(state.total);
    save();
    if (view === 'home') renderHome();
    if (now.level > before) celebrate(now);
  }

  // a short message that goes by itself; the desktop shows it too when the window is hidden
  function celebrate(now) {
    banner?.remove();
    clearTimeout(bannerTimer);
    const text = `Level ${now.level} · ${now.title}`;
    banner = el('div', { className: 'xp-up', role: 'status', ariaLive: 'polite', title: 'Click to close' },
      el('small', {}, 'Level up'), el('b', {}, text), el('span', {}, `${xpStart(now.level + 1) - state.total} XP to level ${now.level + 1}.`));
    banner.onclick = () => banner.remove();
    document.body.append(banner);
    bannerTimer = setTimeout(() => banner?.remove(), 7000);
    if (document.hidden) invoke('toast', { title: text, text: 'You levelled up in Vermil.', module: 'xp' }).catch(() => {});
  }

  function band() {
    const lv = xpLevel(state.total);
    const gain = gainedToday();
    const recent = [...state.log].reverse().slice(0, 8);
    return el('section', { className: 'xp', id: 'xp-band', ariaLabel: 'Level' },
      el('div', { className: 'xp-row' },
        el('b', { className: 'xp-lv' }, `Level ${lv.level}`),
        el('span', { className: 'xp-title' }, lv.title),
        el('div', { className: 'xp-bar', role: 'progressbar', ariaValueMin: '0', ariaValueMax: String(lv.need), ariaValueNow: String(lv.into), ariaLabel: 'Progress to the next level' }, el('i', { style: `width:${lv.pct}%` })),
        el('span', { className: 'xp-num' }, `${lv.into} / ${lv.need} XP`),
        ...(gain ? [el('small', { className: 'xp-today' }, `+${gain} today`)] : [])),
      ...(recent.length ? [el('details', { className: 'xp-recent' }, el('summary', {}, 'Recent'),
        el('ul', {}, ...recent.map((x) => el('li', {}, el('span', {}, x.label), el('em', {}, `+${x.pts} XP`), el('small', {}, x.day === today() ? 'today' : fmt(parseDay(x.day), { day: 'numeric', month: 'short' }))))))] : []));
  }

  function settingsSection() {
    const status = el('p', { id: 'xp-status', className: 'st-fine', role: 'status' });
    const lv = xpLevel(state.total);
    const reset = el('button', { id: 'xp-reset', type: 'button', className: 'linkish', textContent: 'Start again from level 1' });
    reset.onclick = async () => {
      if (!(await ask(`Reset your XP? You are level ${lv.level} with ${state.total} XP.`, 'Reset'))) return;
      state = fresh();
      await save();
      status.textContent = 'Back to level 1.';
      if (view === 'home') renderHome();
    };
    return el('section', { className: 'st-sec', ariaLabel: 'Levels' }, el('h3', {}, 'Levels'),
      el('p', { className: 'st-fine' }, `Level ${lv.level} (${lv.title}), ${state.total} XP. XP comes from tasks done, habits kept, focus and tracked time, journal days, spending recorded, workouts, the water goal and bills paid. Each thing counts once, and each source pays up to a daily limit. While Levels is off nothing is counted.`),
      el('div', { className: 'st-actions' }, reset, status));
  }

  defineModule('xp', {
    start() {
      state = { ...fresh(), ...(moduleData.xp || {}) };
      eventHooks.push(onEvent);
      homeHooks.push(band);
      settingsHooks.push(settingsSection);
    },
    stop() {
      eventHooks.splice(eventHooks.indexOf(onEvent), 1);
      homeHooks.splice(homeHooks.indexOf(band), 1);
      settingsHooks.splice(settingsHooks.indexOf(settingsSection), 1);
      banner?.remove();
      clearTimeout(bannerTimer);
    },
  });
})();
