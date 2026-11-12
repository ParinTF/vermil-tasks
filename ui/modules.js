// Optional modules. The core is Tasks, Notes and Calendar; everything else is a module whose script (and stylesheet)
// is fetched only while the module is switched on, so a module that is off costs nothing at start-up.
//
// To add one: put an entry in MODULES, write the script (and style) it names, and call defineModule(id, impl) in it.
// impl: { start() runs when it is switched on or the app starts with it on, stop() when it is switched off,
//         show() when its view opens, keys(e) for keys while its view is showing }.
// Hooks it may use: rowInfo.push(t => text) adds to a task row's details, rowTools.push(t => button) to its buttons,
// commandHooks.push(() => [palette commands]); take them out again in stop().
// Its data goes through saveModule(id, value) into the same data file; a module with `view` gets a tab and a <main id="<id>-view">.
const MODULES = [
  { id: 'pomodoro', name: 'Focus timer', about: 'A Pomodoro timer for a task. Adds up the time you really focus on each one.', script: 'mod-pomodoro.js', style: 'mod-pomodoro.css' },
];

const moduleData = {}; // id -> saved value; "_on" lists the ids that are switched on
const started = new Set();
const registry = {};

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

function addView(m) {
  const tab = el('button', { id: 'view-' + m.id, role: 'tab', type: 'button', ariaSelected: 'false' }, m.view);
  tab.onclick = () => setView(m.id);
  document.querySelector('.views').append(tab);
  $('calendar-view').parentNode.insertBefore(el('main', { id: m.id + '-view', className: m.id + '-page', hidden: true }), document.querySelector('.foot'));
  VIEWS.push(m.id);
}

async function removeView(m) {
  if (view === m.id) await setView('tasks');
  $('view-' + m.id)?.remove();
  $(m.id + '-view')?.remove();
  VIEWS.splice(VIEWS.indexOf(m.id), 1);
}

async function startModule(m) {
  if (started.has(m.id)) return;
  if (!registry[m.id]) {
    if (m.style) await loadFile('link', { rel: 'stylesheet', href: m.style, id: 'style-' + m.id });
    await loadFile('script', { src: m.script, id: 'script-' + m.id });
  } else if (m.style && !$('style-' + m.id)) {
    await loadFile('link', { rel: 'stylesheet', href: m.style, id: 'style-' + m.id });
  }
  started.add(m.id);
  if (m.view) addView(m);
  await registry[m.id].start?.();
}

async function stopModule(m) {
  if (!started.delete(m.id)) return;
  await registry[m.id].stop?.();
  if (m.view) await removeView(m);
  $('style-' + m.id)?.remove(); // its look goes with it
}

async function setModule(m, on) {
  const list = (moduleData._on || []).filter((id) => id !== m.id);
  if (on) list.push(m.id);
  if (on) await startModule(m); else await stopModule(m);
  await saveModule('_on', list);
}

function openModules() {
  if ($('dlg').open || $('pal').open) return;
  let dlg = $('mods');
  if (!dlg) {
    dlg = el('dialog', { id: 'mods', className: 'mods', ariaLabel: 'Modules' });
    dlg.onclick = (e) => { if (e.target === dlg) dlg.close(); };
    document.body.append(dlg);
  }
  dlg.replaceChildren(
    el('h2', {}, 'Modules'),
    el('div', { className: 'mods-sub' }, 'Switched off, a module is not even loaded.'),
    ...(MODULES.length ? MODULES.map((m) => {
      const box = el('input', { type: 'checkbox', checked: moduleOn(m.id), id: 'mod-' + m.id });
      box.onchange = async () => {
        box.disabled = true;
        try { await setModule(m, box.checked); } catch (e) { box.checked = !box.checked; tell(`Could not switch ${m.name}: ${e.message || e}`); }
        box.disabled = false;
      };
      return el('label', { className: 'mod' }, box, el('span', { className: 'mod-name' }, m.name), el('span', { className: 'mod-about' }, m.about));
    }) : [el('div', { className: 'mod-about' }, 'No optional modules yet.')]),
    el('div', { className: 'actions' }, el('button', { type: 'button', className: 'ghost', onclick: () => dlg.close() }, 'Close')));
  dlg.showModal();
}

// at start: read what is saved, then start the modules that are on (one that fails to load is skipped, not fatal)
invoke('get_modules').then(async (saved) => {
  Object.assign(moduleData, saved);
  for (const m of MODULES) if (moduleOn(m.id)) await startModule(m).catch((e) => console.error(m.id, e));
});
