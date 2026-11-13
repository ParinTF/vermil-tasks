// Levels module: XP and levels for what you do. Every module that has something worth counting says so through emit()
// (a task done, a habit kept, a focus session...); the rules, the caps and the level maths are in logic.js (XP_RULES, xpAward, xpLevel).
// Shows one band on Home (level, streak, recent XP and the badges) and a short message at each level and badge.
// Data: see xpAward in logic.js: { total, day, today, keys, log, counts, minutes, streak, badges }.
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
    if (now.level > before || r.badges.length) celebrate(now.level > before ? now : null, r.badges);
  }

  // a short message that goes by itself; the desktop shows it too when the window is hidden
  function celebrate(now, badges = []) {
    banner?.remove();
    clearTimeout(bannerTimer);
    const text = now ? `Level ${now.level} · ${now.title}` : `Badge: ${badges.join(', ')}`;
    const lines = [...(now ? [`${xpStart(now.level + 1) - state.total} XP to level ${now.level + 1}.`] : []), ...(now && badges.length ? [`Badge: ${badges.join(', ')}`] : [])];
    banner = el('div', { className: 'xp-up', role: 'status', ariaLive: 'polite', title: 'Click to close' },
      el('small', {}, now ? 'Level up' : 'New badge'), el('b', {}, text), ...lines.map((l) => el('span', {}, l)));
    banner.onclick = () => banner.remove();
    document.body.append(banner);
    bannerTimer = setTimeout(() => banner?.remove(), 7000);
    if (document.hidden) invoke('toast', { title: text, text: now ? 'You levelled up in Vermil.' : 'You unlocked a badge in Vermil.', module: 'xp' }).catch(() => {});
  }

  function band() {
    const lv = xpLevel(state.total);
    const gain = gainedToday();
    const recent = [...state.log].reverse().slice(0, 8);
    const streak = xpStreak(state, today());
    const badges = xpBadges(state);
    return el('section', { className: 'xp', id: 'xp-band', ariaLabel: 'Level' },
      el('div', { className: 'xp-row' },
        el('b', { className: 'xp-lv' }, `Level ${lv.level}`),
        el('span', { className: 'xp-title' }, lv.title),
        el('div', { className: 'xp-bar', role: 'progressbar', ariaValueMin: '0', ariaValueMax: String(lv.need), ariaValueNow: String(lv.into), ariaLabel: 'Progress to the next level' }, el('i', { style: `width:${lv.pct}%` })),
        el('span', { className: 'xp-num' }, `${lv.into} / ${lv.need} XP`),
        el('span', { className: 'xp-side' },
          ...(gain ? [el('small', { className: 'xp-today' }, `+${gain} today`)] : []),
          ...(streak >= 2 ? [el('small', { className: 'xp-streak', title: 'Days in a row with XP' }, `${streak}-day streak`)] : []))),
      ...(recent.length ? [el('details', { className: 'xp-recent' }, el('summary', {}, 'Recent'),
        el('ul', {}, ...recent.map((x) => el('li', {}, el('span', {}, x.label), el('em', {}, `+${x.pts} XP`), el('small', {}, x.day === today() ? 'today' : fmt(parseDay(x.day), { day: 'numeric', month: 'short' }))))))] : []),
      el('details', { className: 'xp-recent xp-badges', id: 'xp-badges' }, el('summary', {}, `Badges ${badges.filter((b) => b.done).length} / ${badges.length}`),
        el('ul', {}, ...badges.map((b) => el('li', { className: b.done ? 'got' : '' }, el('span', {}, el('b', {}, (b.done ? '● ' : '○ ') + b.name), el('small', {}, b.about)), el('em', {}, b.done ? '' : `${b.value} / ${b.goal}`), el('small', {}, b.day ? fmt(parseDay(b.day), { day: 'numeric', month: 'short' }) : ''))))));
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
      el('p', { className: 'st-fine' }, `Level ${lv.level} (${lv.title}), ${state.total} XP. XP comes from tasks done, habits kept, focus and tracked time, journal days, spending recorded, workouts, the water goal and bills paid. Each thing counts once, and each source pays up to a daily limit. Earning XP on days in a row builds a streak with a bonus; badges are goals along the way. While Levels is off nothing is counted.`),
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
