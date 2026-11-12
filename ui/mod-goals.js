// Goals module: a target for a number that another module already keeps (tasks done, focus minutes, money saved, habits kept),
// or a number you update by hand. Data: { goals: [{ id, title, source, target, direction: 'atleast' | 'atmost', current }] }.
(() => {
  let data = { goals: [] };
  const save = () => saveModule('goals', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('goals-view');
  const num = (v) => (Math.round(v * 100) / 100).toLocaleString('en-US');
  const WORDS = ['tasks', 'min', 'days'];
  // a currency goes in front ($180), a count behind (3 tasks, 75 min, 80%)
  const show = (v, unit) => (!unit ? num(v) : unit === '%' ? num(v) + '%' : WORDS.includes(unit) ? `${num(v)} ${unit}` : unit + num(v));
  const sources = () => metricHooks.flatMap((f) => f());
  const sourceOf = (g) => (g.source === 'manual' ? null : sources().find((m) => m.id === g.source) || false); // false: its module is off
  const valueOf = (g) => { const m = sourceOf(g); return m === null ? g.current || 0 : m ? m.get() : null; };

  function build() {
    root().replaceChildren(
      el('section', { className: 'gl-main', ariaLabel: 'Goals' },
        el('div', { className: 'gl-head' }, el('h2', {}, 'Goals')),
        el('ul', { id: 'gl-list', className: 'gl-list', ariaLabel: 'Goals' }),
        el('div', { id: 'gl-none', className: 'empty', hidden: true }, 'No goals yet. Pick a number to watch and set a target.')),
      el('aside', { className: 'gl-side', ariaLabel: 'Add a goal' },
        el('form', { id: 'gl-form', onsubmit: add },
          el('label', { className: 'gl-field' }, 'Goal', el('input', { id: 'gl-title', maxLength: 80, autocomplete: 'off', placeholder: 'Save 10,000 this month' })),
          el('label', { className: 'gl-field' }, 'Measured by', el('select', { id: 'gl-source' })),
          el('div', { className: 'gl-two' },
            el('label', { className: 'gl-field' }, 'Aim', el('select', { id: 'gl-dir' }, el('option', { value: 'atleast' }, 'Reach at least'), el('option', { value: 'atmost' }, 'Stay under'))),
            el('label', { className: 'gl-field' }, 'Target', el('input', { id: 'gl-target', inputMode: 'decimal', autocomplete: 'off', placeholder: '0' }))),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'gl-msg', className: 'gl-msg', role: 'status' }))));
    fillSources();
  }

  // "Measured by": by hand, or any number a switched-on module offers (read again each time, so a module added later shows up)
  function fillSources() {
    const keep = $('gl-source').value;
    $('gl-source').replaceChildren(el('option', { value: 'manual' }, 'By hand'), ...sources().map((m) => el('option', { value: m.id }, m.label)));
    $('gl-source').value = [...$('gl-source').options].some((o) => o.value === keep) ? keep : 'manual';
  }

  function add(e) {
    e.preventDefault();
    const title = $('gl-title').value.trim();
    const target = parseAmount($('gl-target').value);
    if (!title || target === null) { $('gl-msg').textContent = 'A name and a target above 0.'; return; }
    data.goals.push({ id: crypto.randomUUID(), title, source: $('gl-source').value, target, direction: $('gl-dir').value, current: 0 });
    save();
    $('gl-title').value = '';
    $('gl-target').value = '';
    $('gl-msg').textContent = `Added "${title}".`;
    paint();
    $('gl-title').focus();
  }

  async function remove(g) {
    if (!(await ask(`Remove the goal "${g.title}"?`, 'Remove'))) return;
    data.goals = data.goals.filter((x) => x.id !== g.id);
    save();
    paint();
  }

  function paint() {
    fillSources();
    $('gl-list').replaceChildren(...data.goals.map((g) => {
      const m = sourceOf(g);
      const value = valueOf(g);
      const p = value === null ? null : goalProgress(g.direction, value, g.target);
      const unit = m ? m.unit : '';
      const fill = el('i', {});
      fill.style.width = p ? Math.min(100, p.pct) + '%' : '0';
      const status = p === null ? 'Its module is off' : p.state === 'done' ? 'Reached' : p.state === 'over' ? 'Over the limit' : g.direction === 'atmost' ? 'Within the limit' : `${p.pct}%`;
      const del = el('button', { type: 'button', className: 'gl-del', ariaLabel: 'Remove ' + g.title, textContent: '✕' });
      del.onclick = () => remove(g);
      const hand = sourceOf(g) === null
        ? [el('div', { className: 'gl-hand' }, ...[['−', -1], ['+', 1]].map(([t, d]) => { const b = el('button', { type: 'button', textContent: t, ariaLabel: `${d < 0 ? 'Decrease' : 'Increase'} ${g.title}` }); b.onclick = () => { g.current = Math.max(0, (g.current || 0) + d * Math.max(1, Math.round(g.target / 20))); save(); paint(); }; return b; }),
            ((inp) => { inp.onchange = () => { const n = Number(inp.value.replace(/,/g, '')); if (Number.isFinite(n) && n >= 0) { g.current = n; save(); paint(); } }; return inp; })(el('input', { className: 'gl-set', value: String(g.current || 0), inputMode: 'decimal', ariaLabel: 'Current value of ' + g.title })))]
        : [];
      return el('li', { className: p ? p.state : 'off' },
        el('div', { className: 'gl-top' }, el('b', {}, g.title), del),
        el('span', { className: 'gl-track', ariaHidden: 'true' }, fill),
        el('div', { className: 'gl-line' }, el('span', {}, value === null ? '—' : `${show(value, unit)} ${g.direction === 'atmost' ? 'of a limit of' : 'of'} ${WORDS.includes(unit) ? num(g.target) : show(g.target, unit)}`), el('span', { className: 'gl-state' }, status)),
        el('small', {}, m ? 'From ' + m.label.toLowerCase() : m === false ? 'The module that measured it is switched off' : 'Updated by hand'), ...hand);
    }));
    $('gl-none').hidden = data.goals.length > 0;
  }

  const group = { module: 'goals', title: 'Goals', items: [['N', 'New goal']] };
  const commandFn = () => [{ label: 'Add a goal', hint: 'Goals', kind: 'Command', run: async () => { await setView('goals'); $('gl-title').focus(); } }];

  defineModule('goals', {
    summary() {
      if (!data.goals.length) return null;
      const states = data.goals.map((g) => { const v = valueOf(g); return v === null ? null : { g, ...goalProgress(g.direction, v, g.target) }; }).filter(Boolean);
      const reached = states.filter((s) => s.state === 'done' || (s.g.direction === 'atmost' && s.state === 'ok')).length;
      const over = states.filter((s) => s.state === 'over');
      const next = states.filter((s) => s.state === 'ok' && s.g.direction === 'atleast').sort((a, b) => b.pct - a.pct)[0];
      return { label: 'Goals', value: `${reached} of ${data.goals.length}`, unit: 'on track', warn: over.length > 0, sub: over.length ? `Over: ${over[0].g.title}` : next ? `Next: ${next.g.title} (${next.pct}%)` : 'All reached' };
    },
    start() {
      data = { goals: [], ...(moduleData.goals || {}) };
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
    refresh: paint,
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('gl-title').focus(); }
    },
  });
})();
