// Home and modules. The shell is always there; every feature is a module that is switched on from the Home page.
// A module that is off is not loaded at all (its script and stylesheet are fetched only while it is on).
//
// To add one: put an entry in MODULES, write the script (and style) it names, and call defineModule(id, impl) in it.
// impl: { start() runs when it is switched on or the app starts with it on, stop() when it is switched off,
//         show() when its view opens, keys(e) for keys while its view is showing }.
// An entry with `view` gets a tab (Ctrl+1..9 in tab order) and a <main id="<id>-view">; `requires` lists the modules it needs.
// `builtin` marks a module whose markup and code still live in the page itself.
// Hooks it may use: rowInfo.push(t => text) adds to a task row's details, rowTools.push(t => button) to its buttons,
// commandHooks.push(() => [palette commands]), shortcutGroups.push({ module, title, items }); take them out again in stop().
// Its data goes through saveModule(id, value) into the same data file.
const MODULES = [
  { id: 'tasks', name: 'Tasks', about: 'A to-do list with due dates, reminders, repeats, history and stats.', view: 'Tasks', builtin: true, recommended: true },
  { id: 'notes', name: 'Notes', about: 'Quick notes with sizes, colours and checklists, linkable to tasks.', view: 'Notes', builtin: true },
  { id: 'calendar', name: 'Calendar', about: 'Your tasks by month or hour by hour. Drag to reschedule.', view: 'Calendar', builtin: true, requires: ['tasks'] },
  { id: 'pomodoro', name: 'Focus timer', about: 'A Pomodoro timer for a task. Adds up the time you really focus on each one.', script: 'mod-pomodoro.js', style: 'mod-pomodoro.css', requires: ['tasks'] },
  { id: 'money', name: 'Expenses', about: 'Record what you spend and earn, by category, month by month.', script: 'mod-money.js', style: 'mod-money.css', view: 'Money' },
];

const moduleData = {}; // id -> saved value; "_on" lists the ids that are switched on
const started = new Set();
const registry = {};
const byId = (id) => MODULES.find((m) => m.id === id);

const defineModule = (id, impl) => { registry[id] = impl; };
const moduleOn = (id) => (moduleData._on || []).includes(id);
async function saveModule(id, value) {
  await invoke('save_module', { id, value });
  moduleData[id] = value;
}

function loadFile(tag, props) {
  return new Promise((resolve, reject) => {
    const node = el(tag, props);
    node.onload = resolve;
    node.onerror = () => reject(new Error('could not load ' + (props.src || props.href)));
    document.head.append(node);
  });
}

// the tab bar and VIEWS follow what is switched on: Home first, then the modules with a view, in list order
function syncViews() {
  const want = ['home', ...MODULES.filter((m) => m.view && started.has(m.id)).map((m) => m.id)];
  VIEWS.splice(0, VIEWS.length, ...want);
  document.querySelector('.views').replaceChildren(...want.map((id) => {
    const tab = el('button', { id: 'view-' + id, role: 'tab', type: 'button', ariaSelected: String(view === id) }, id === 'home' ? 'Home' : byId(id).view);
    tab.onclick = () => setView(id);
    return tab;
  }));
}

async function startModule(m) {
  if (started.has(m.id)) return;
  if (!m.builtin) {
    if (m.style && !$('style-' + m.id)) await loadFile('link', { rel: 'stylesheet', href: m.style, id: 'style-' + m.id });
    if (!registry[m.id]) await loadFile('script', { src: m.script, id: 'script-' + m.id });
    if (m.view && !$(m.id + '-view')) document.querySelector('.foot').before(el('main', { id: m.id + '-view', className: m.id + '-page', hidden: true }));
  }
  started.add(m.id);
  syncViews();
  await registry[m.id]?.start?.();
}

async function stopModule(m) {
  if (!started.has(m.id)) return;
  if (view === m.id) await setView('home');
  started.delete(m.id);
  await registry[m.id]?.stop?.();
  if (m.view && !m.builtin) $(m.id + '-view')?.remove();
  if (!m.builtin) $('style-' + m.id)?.remove(); // its look goes with it; the script stays cached
  syncViews();
}

// Switch one on (bringing what it needs) or off (taking what needs it); false when the user backs out.
async function setModule(m, on) {
  if (on) {
    for (const id of [...(m.requires || []), m.id]) await startModule(byId(id));
  } else {
    const deps = MODULES.filter((d) => started.has(d.id) && (d.requires || []).includes(m.id));
    if (deps.length && !(await ask(`${deps.map((d) => d.name).join(' and ')} ${deps.length > 1 ? 'need' : 'needs'} ${m.name}, so ${deps.length > 1 ? 'they go' : 'it goes'} too. Your data stays.`, 'Remove'))) return false;
    for (const d of deps) await stopModule(d);
    await stopModule(m);
  }
  await saveModule('_on', MODULES.filter((x) => started.has(x.id)).map((x) => x.id));
  return true;
}

// the Home page: one card per module, to add, open or remove it
function renderHome() {
  const home = $('home-view');
  const focused = document.activeElement?.closest?.('.mod-card')?.id;
  const card = (m) => {
    const on = started.has(m.id);
    const act = (turnOn) => async () => {
      try { await setModule(m, turnOn); } catch (e) { tell(`Could not switch ${m.name}: ${e.message || e}`); }
      renderHome();
    };
    const buttons = on
      ? [...(m.view ? [el('button', { type: 'button', className: 'primary mod-open', onclick: () => setView(m.id) }, el('span', {}, 'Open'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))] : []),
        el('button', { type: 'button', className: 'linkish mod-remove', ariaLabel: 'Remove ' + m.name, onclick: act(false) }, 'Remove')]
      : [el('button', { type: 'button', className: 'primary mod-add', ariaLabel: 'Add ' + m.name, onclick: act(true) }, el('span', {}, 'Add'), el('span', { className: 'arrow', ariaHidden: 'true' }, '+'))];
    return el('article', { className: 'mod-card' + (on ? ' on' : ''), id: 'card-' + m.id },
      el('div', { className: 'mod-tag' }, on ? 'Installed' : m.recommended ? 'Recommended' : 'Available'),
      el('h3', {}, m.name), el('p', {}, m.about),
      ...((m.requires || []).length && !on ? [el('p', { className: 'mod-needs' }, 'Also adds ' + m.requires.map((id) => byId(id).name).join(', '))] : []),
      el('div', { className: 'mod-actions' }, ...buttons));
  };
  home.replaceChildren(
    el('header', { className: 'home-head' },
      el('p', { className: 'eyebrow' }, 'Vermil'),
      el('h2', { className: 'home-h' }, started.size ? 'Your workspace' : 'Pick what you need'),
      el('p', { className: 'home-sub' }, started.size
        ? 'Add or remove modules any time. A module you remove is not loaded at all, and your data stays.'
        : 'Vermil starts empty. Add only the modules you want: the rest are never loaded, so the app stays light.')),
    el('div', { className: 'mod-grid' }, ...MODULES.map(card)));
  if (focused) document.querySelector('#' + focused + ' button')?.focus();
}

// at start: read what is saved, then start the modules that are on (one that fails to load is skipped, not fatal)
invoke('get_modules').then(async (saved) => {
  Object.assign(moduleData, saved);
  if (!Array.isArray(moduleData._on)) { // first start with modules: whoever already has tasks or notes keeps the three views they had
    const [t, n] = await Promise.all([invoke('get_todos'), invoke('get_notes')]);
    moduleData._on = t.length || n.length ? ['tasks', 'notes', 'calendar'] : [];
    if (moduleData._on.length) await invoke('save_module', { id: '_on', value: moduleData._on });
  }
  for (const m of MODULES) if (moduleOn(m.id)) await startModule(m).catch((e) => console.error(m.id, e));
  syncViews();
  renderHome();
});
