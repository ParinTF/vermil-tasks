// Assistant module: ask questions about your own data and have things added for you, using your own Gemini API key.
// Off until you add it and a key (Settings); it sends only the question and the parts you tick under "What it can see".
// Every action it suggests is listed and runs only when you press the button. The key lives in the backend (assistant.rs).
// Data: { share: [ids], period: 'week' | 'days30' | 'month' | 'lastmonth' | 'year' (the span the module summaries cover), log: [{ role: 'user' | 'model', text, error?, actions?: [{ ...action, state: 'pending' | 'done' | 'skipped' | 'error', err? }] }] }.
(() => {
  let data = { share: [], log: [], period: 'week' };
  let info = { has_key: false, model: '' };
  let busy = false;
  const save = () => saveModule('assistant', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('assistant-view');
  const today = () => localDay(new Date());

  const range = () => assistantRange(data.period, today());
  // what can be shared: the open tasks, the note titles, and the summary of any module that has one, over the chosen span
  function shareable() {
    const list = [];
    if (started.has('tasks')) list.push({ id: 'tasks', label: 'Tasks: your open tasks and when they are due', build: () => ({ title: 'Open tasks', lines: todos.filter((t) => !t.done && !isLater(t)).slice(0, 40).map((t) => t.title + (t.due ? ` (due ${t.due.replace('T', ' ')})` : '')) }) });
    if (started.has('notes')) list.push({ id: 'notes', label: 'Notes: the titles only, never the text', build: () => ({ title: 'Note titles', lines: notes.slice(0, 40).map((n) => n.title || 'Untitled') }) });
    for (const m of MODULES) {
      if (!started.has(m.id) || ['tasks', 'notes', 'assistant'].includes(m.id) || !registry[m.id]?.weekly) continue;
      list.push({ id: m.id, label: `${m.name}: a summary of ${range().label}`, build: () => registry[m.id].weekly(range().since, range().until) });
    }
    return list;
  }
  const sections = () => shareable().filter((s) => data.share.includes(s.id)).flatMap((s) => { try { const x = s.build(); return x && x.lines.length ? [x] : []; } catch { return []; } });
  const can = () => [['task', 'tasks'], ['shop', 'shopping'], ['expense', 'money'], ['note', 'notes']].filter(([, id]) => started.has(id)).map(([k]) => k).concat('open');
  const views = () => MODULES.filter((m) => m.view && started.has(m.id) && m.id !== 'assistant').map((m) => m.id);
  const system = () => assistantPrompt({ now: new Date(), sections: sections(), can: can(), views: views(), period: range() });

  function build() {
    root().replaceChildren(
      el('section', { className: 'as-main', ariaLabel: 'Assistant' },
        el('div', { className: 'as-head' }, el('h2', {}, 'Assistant')),
        el('div', { id: 'as-log', className: 'as-log', role: 'log', ariaLive: 'polite', ariaLabel: 'Conversation' }),
        el('form', { id: 'as-form', className: 'as-form', onsubmit: (e) => { e.preventDefault(); send(); } },
          el('textarea', { id: 'as-q', rows: 2, maxLength: 2000, placeholder: 'Ask about your week, or say "add a task to call the bank tomorrow"', ariaLabel: 'Your message', oninput: paintPreview, onkeydown: (e) => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); } } }),
          el('button', { id: 'as-send', className: 'primary', type: 'submit' }, el('span', {}, 'Ask'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')))),
      el('aside', { className: 'as-side', ariaLabel: 'What it can see' },
        el('h3', {}, 'What it can see'),
        el('p', { className: 'as-fine' }, 'Nothing is sent unless you tick it. Your question and the ticked parts go to Google’s Gemini service with your own key.'),
        el('label', { className: 'as-period' }, 'Summaries cover', el('select', { id: 'as-period', ariaLabel: 'Span the summaries cover', onchange: () => { data.period = $('as-period').value; save(); paintShare(); paintPreview(); } }, ...ASSIST_PERIODS.map(([k, l]) => el('option', { value: k }, l)))),
        el('div', { id: 'as-share', className: 'as-share', role: 'group', ariaLabel: 'Shared with the assistant' }),
        el('details', { id: 'as-details', className: 'as-details' }, el('summary', {}, 'Show exactly what is sent'), el('pre', { id: 'as-pre' })),
        el('button', { id: 'as-clear', type: 'button', className: 'linkish', textContent: 'Clear the conversation', onclick: clearLog })));
  }

  function paintShare() {
    if ($('as-period')) $('as-period').value = data.period;
    $('as-share').replaceChildren(...shareable().map((s) => {
      const box = el('input', { type: 'checkbox', checked: data.share.includes(s.id), value: s.id });
      box.onchange = () => { data.share = box.checked ? [...new Set([...data.share, s.id])] : data.share.filter((x) => x !== s.id); save(); paintPreview(); };
      return el('label', { className: 'check as-opt' }, box, ' ' + s.label);
    }));
    if (!$('as-share').children.length) $('as-share').append(el('p', { className: 'as-fine' }, 'Switch on Tasks or another module and it can be shared here.'));
  }

  // exactly the text that would go out now: the instructions with the ticked data, then the question
  function paintPreview() {
    const q = $('as-q')?.value.trim();
    if ($('as-pre')) $('as-pre').textContent = system() + '\n\n---\nYour message:\n' + (q || '(nothing typed yet)');
  }

  function paintLog() {
    const log = $('as-log');
    if (!log) return;
    const items = [];
    if (!info.has_key) {
      const go = el('button', { type: 'button', className: 'linkish', textContent: 'Open Settings', onclick: () => setView('settings') });
      items.push(el('div', { className: 'as-note' }, 'Add your Gemini API key in Settings to start. ', go));
    } else if (!data.log.length) items.push(el('div', { className: 'as-note' }, `Ready (${info.model}). Tick what it may see on the right, then ask.`));
    data.log.forEach((m, i) => {
      const bubble = el('div', { className: 'as-msg ' + (m.role === 'user' ? 'me' : 'it') + (m.error ? ' bad' : '') });
      bubble.append(el('small', {}, m.role === 'user' ? 'You' : 'Assistant'), el('p', {}, m.error ? 'Could not answer: ' + m.error : m.text));
      if (m.actions?.length) bubble.append(actionList(m, i === data.log.length - 1));
      items.push(bubble);
    });
    if (busy) items.push(el('div', { className: 'as-note', id: 'as-busy' }, 'Thinking…'));
    log.replaceChildren(...items);
    log.scrollTop = log.scrollHeight;
    if ($('as-send')) $('as-send').disabled = busy || !info.has_key;
  }

  // suggested actions: each shown as a line, run only when you press the button
  function actionList(m, latest) {
    const pending = m.actions.some((a) => a.state === 'pending');
    const boxes = [];
    const rows = m.actions.map((a) => {
      const box = el('input', { type: 'checkbox', checked: a.state === 'pending' || a.state === 'done', disabled: a.state !== 'pending' }); // a line that was skipped or failed is not ticked
      boxes.push(box);
      const status = a.state === 'done' ? 'Done' : a.state === 'skipped' ? 'Skipped' : a.state === 'error' ? 'Problem: ' + a.err : '';
      return el('li', { className: a.state }, el('label', { className: 'check' }, box, ' ' + describeAction(a)), ...(status ? [el('span', { className: 'as-state' }, status)] : []));
    });
    const run = async () => {
      for (const [i, a] of m.actions.entries()) {
        if (a.state !== 'pending') continue;
        if (!boxes[i].checked) { a.state = 'skipped'; continue; }
        try { await doAction(a); a.state = 'done'; } catch (e) { a.state = 'error'; a.err = String(e.message || e); }
      }
      save();
      paintLog();
      paintShare();
    };
    const skip = () => { for (const a of m.actions) if (a.state === 'pending') a.state = 'skipped'; save(); paintLog(); };
    return el('div', { className: 'as-actions' }, el('ul', {}, ...rows),
      ...(pending && latest ? [el('div', { className: 'as-act-row' }, el('button', { type: 'button', className: 'primary as-do', onclick: run }, el('span', {}, 'Do the ticked'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')), el('button', { type: 'button', className: 'linkish as-skip', textContent: 'Skip', onclick: skip }))] : []));
  }

  async function send() {
    const q = $('as-q').value.trim();
    if (!q || busy || !info.has_key) return;
    for (const m of data.log) for (const a of m.actions || []) if (a.state === 'pending') a.state = 'skipped'; // a new question leaves old suggestions behind
    data.log.push({ role: 'user', text: q });
    $('as-q').value = '';
    busy = true;
    paintLog();
    const ask = { system: system(), turns: assistantTurns(data.log) };
    try {
      const raw = await invoke('assistant_ask', ask);
      const out = parseAssistantReply(raw, { can: can(), views: views() });
      data.log.push({ role: 'model', text: out.reply, actions: out.actions.map((a) => ({ ...a, state: 'pending' })) });
    } catch (e) {
      data.log.push({ role: 'model', text: '', error: String(e.message || e) });
    }
    data.log = data.log.slice(-40);
    busy = false;
    save();
    paintLog();
    paintPreview();
    $('as-q').focus();
  }

  async function clearLog() {
    if (data.log.length && !(await ask('Clear the whole conversation?', 'Clear'))) return;
    data.log = [];
    save();
    paintLog();
  }

  async function readInfo() { try { info = await invoke('get_assistant'); } catch {} }

  // the key section on the Settings page
  function settingsSection() {
    const key = el('input', { id: 'as-key', type: 'password', autocomplete: 'off', spellcheck: false, maxLength: 200, ariaLabel: 'Gemini API key' });
    const model = el('input', { id: 'as-model', type: 'text', autocomplete: 'off', maxLength: 60, ariaLabel: 'Model' });
    model.setAttribute('list', 'as-models');
    const status = el('p', { id: 'as-status', className: 'st-fine', role: 'status' });
    const sec = el('section', { className: 'st-sec', ariaLabel: 'Assistant' },
      el('h3', {}, 'Assistant (Gemini)'),
      el('label', { className: 'st-field' }, 'API key', key),
      el('label', { className: 'st-field' }, 'Model', model),
      el('datalist', { id: 'as-models' }),
      el('div', { className: 'st-actions' },
        el('button', { id: 'as-save', type: 'button', className: 'primary', onclick: saveKey }, el('span', {}, 'Save'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
        el('button', { id: 'as-check', type: 'button', className: 'linkish', textContent: 'Check the key and list models', onclick: checkKey }),
        el('button', { id: 'as-remove', type: 'button', className: 'linkish', textContent: 'Remove the key', onclick: removeKey }), status),
      el('p', { className: 'st-fine' }, 'Make a key in Google AI Studio and paste it here. It is kept in a file in your user folder (not in backups or sync) and is only ever sent to Google. What you ask, and the parts you tick on the Assistant page, go to Google too; a free key may let Google use that to improve its products, so read Google’s current terms before sharing money or health details.'));
    readInfo().then(() => {
      key.placeholder = info.has_key ? '•••••••• saved. Paste a new key to replace it' : 'Paste your key';
      model.value = info.model;
    });
    async function saveKey() {
      try {
        await invoke('set_assistant', { key: key.value.trim() ? key.value.trim() : null, model: model.value });
        key.value = '';
        await readInfo();
        key.placeholder = info.has_key ? '•••••••• saved. Paste a new key to replace it' : 'Paste your key';
        status.textContent = info.has_key ? 'Saved.' : 'Saved, but there is no key yet.';
        paintLog();
      } catch (e) { status.textContent = String(e); }
    }
    async function checkKey() {
      status.textContent = 'Checking…';
      try {
        if (key.value.trim() || model.value !== info.model) await saveKey();
        const names = await invoke('assistant_models');
        $('as-models').replaceChildren(...names.map((n) => el('option', { value: n })));
        status.textContent = `The key works. ${names.length} models can answer; pick one in the Model box.`;
      } catch (e) { status.textContent = String(e); }
    }
    async function removeKey() {
      if (!info.has_key || !(await ask('Remove the saved API key?', 'Remove'))) return;
      await invoke('set_assistant', { key: '', model: model.value });
      await readInfo();
      key.placeholder = 'Paste your key';
      status.textContent = 'The key was removed.';
      paintLog();
    }
    return sec;
  }

  const group = { module: 'assistant', title: 'Assistant', items: [['/', 'Write a message'], ['Ctrl+Enter', 'Send']] };
  const commandFn = () => [{ label: 'Ask the assistant', hint: 'Assistant', kind: 'Command', run: async () => { await setView('assistant'); $('as-q').focus(); } }];

  defineModule('assistant', {
    async start() {
      data = { share: [], log: [], period: 'week', ...(moduleData.assistant || {}) };
      await readInfo();
      build();
      enhanceSelect($('as-period'));
      paintShare();
      paintPreview();
      paintLog();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
      settingsHooks.push(settingsSection);
    },
    stop() {
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
      settingsHooks.splice(settingsHooks.indexOf(settingsSection), 1);
    },
    async show() { await readInfo(); paintShare(); paintPreview(); paintLog(); },
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'Slash' && !e.shiftKey) { e.preventDefault(); $('as-q').focus(); }
    },
  });
})();
