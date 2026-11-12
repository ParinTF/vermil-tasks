// Notes module: the list, the small rich-text editor (four sizes, bold, colours, checklists) and its keys.
// Loaded only while Notes is switched on. The note data itself (notes, links from tasks) lives in the core.
const notesGroup = { module: 'notes', title: 'Notes', items: [
    ['Ctrl+N', 'New note'], ['Ctrl+F', 'Search notes'], [['↑', '↓'], 'Walk the list'], ['Delete', 'Delete the note'],
    ['Ctrl+B', 'Bold'], ['Ctrl+Shift+L', 'Checklist'], ['Ctrl+Enter', 'Tick a checklist item'],
  ] };

function renderNoteList() {
  const items = visibleNotes();
  const uses = new Map();
  for (const t of todos) if (t.noteId) uses.set(t.noteId, (uses.get(t.noteId) || 0) + 1);
  $('note-items').replaceChildren(...items.map((n) => {
    const count = uses.get(n.id);
    const progress = checkProgress(n.body);
    const row = el('button', { type: 'button', className: 'note' + (n.id === selectedNoteId ? ' sel' : ''), id: 'note-' + n.id },
      el('b', {}, n.title || 'Untitled'), el('span', {}, noteLine(n) + (progress.total ? ` · ${progress.done}/${progress.total} done` : '') + (count ? ` · ${count} ${count === 1 ? 'task' : 'tasks'}` : '')));
    row.onclick = () => openNote(n.id, 'body');
    return el('li', {}, row);
  }));
  $('note-none').hidden = items.length > 0 || !notes.length;
  const cur = currentNote();
  $('note-editor').hidden = !cur;
  $('note-hint').hidden = !!cur;
  $('note-hint').textContent = notes.length ? 'Pick a note.' : 'No notes yet. Press Ctrl+N to write one.';
  if (cur) {
    const when = cur.updatedAt ? fmt(cur.updatedAt, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
    $('note-meta').textContent = (when ? `Edited ${when} · ` : '') + `${cur.body.length} characters`;
  }
  const linked = cur ? todos.filter((t) => t.noteId === cur.id) : [];
  $('note-links').hidden = !linked.length;
  $('note-link-list').replaceChildren(...linked.slice(0, 6).map((t) => {
    const chip = el('button', { type: 'button', className: 'chip' + (t.done ? ' done' : '') }, t.title);
    chip.onclick = () => showTask(t.id);
    return chip;
  }), ...(linked.length > 6 ? [el('span', {}, `+${linked.length - 6} more`)] : []));
  fillNoteLinks();
}

// ── rich text: a note keeps a few formats (bold, four sizes, six colours) and nothing else ──
const SIZE_TAG = { small: 'h4', normal: 'p', large: 'h2', title: 'h1' };
// block elements the editor knows how to keep, and what they become: a div, a list item or a quote is a paragraph
const NOTE_BLOCKS = { P: 'p', DIV: 'p', LI: 'p', PRE: 'p', BLOCKQUOTE: 'p', H1: 'h1', H2: 'h2', H3: 'h2', H4: 'h4', H5: 'h4', H6: 'h4' };
const editor = () => $('note-body');

// Rebuilds untrusted HTML (typed, pasted, loaded from a backup) out of the few elements and attributes the editor
// knows. Anything else is unwrapped and keeps its text; scripts and the like go with their content.
function cleanInto(source, target) {
  for (const node of [...source.childNodes]) {
    if (node.nodeType === Node.TEXT_NODE) { target.append(node.textContent); continue; }
    if (node.nodeType !== Node.ELEMENT_NODE) continue;
    const tag = node.tagName;
    if (['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'TEMPLATE', 'NOSCRIPT'].includes(tag)) continue;
    if (tag === 'BR') { target.append(document.createElement('br')); continue; }
    let out = target;
    const inBlock = /^(P|H1|H2|H4|LI)$/.test(target.tagName);
    if (tag === 'UL' && node.classList.contains('check') && !inBlock && target.tagName !== 'UL') { // a checklist
      out = document.createElement('ul');
      out.className = 'check';
      target.append(out);
    } else if (tag === 'LI' && target.tagName === 'UL' && target.className === 'check') {
      out = document.createElement('li');
      if (node.getAttribute('data-done') === '1') out.setAttribute('data-done', '1');
      target.append(out);
    } else if (NOTE_BLOCKS[tag]) {
      if (inBlock) { // a block inside a block cannot nest: it continues on a new line
        if (target.lastChild) target.append(document.createElement('br'));
      } else {
        out = document.createElement(NOTE_BLOCKS[tag]);
        target.append(out);
      }
    } else if (tag === 'B' || tag === 'STRONG') {
      out = document.createElement('b');
      target.append(out);
    } else if (tag === 'FONT') {
      const key = colorKey(node.getAttribute('color'));
      if (NOTE_COLORS[key] && key !== DEFAULT_COLOR) { // the plain colour is no format at all
        out = document.createElement('font');
        out.setAttribute('color', key);
        target.append(out);
      }
    }
    cleanInto(node, out);
  }
}

// → a detached <div> holding clean blocks only: loose text and inline runs at the top become paragraphs
function cleaned(html) {
  const inert = new DOMParser().parseFromString(html || '', 'text/html'); // nothing in it runs
  const flat = document.createElement('div');
  cleanInto(inert.body, flat);
  const root = document.createElement('div');
  let run = null;
  for (const node of [...flat.childNodes]) {
    if (node.nodeType === Node.ELEMENT_NODE && /^(P|H1|H2|H4|UL)$/.test(node.tagName)) { // UL here is a checklist, the only list cleanInto keeps
      run = null;
      if (node.tagName !== 'UL' || node.firstChild) root.append(node);
      continue;
    }
    if (!run) { run = document.createElement('p'); root.append(run); }
    run.append(node);
  }
  if (!root.firstChild) root.innerHTML = '<p><br></p>';
  return root;
}

// The plain text of the blocks, one line per block: what search, the list and Copy use.
function plainFromContainer(root) {
  const blockText = (block) => {
    let s = '';
    (function walk(n) {
      for (const c of n.childNodes) {
        if (c.nodeType === Node.TEXT_NODE) s += c.textContent;
        else if (c.tagName === 'BR') s += '\n';
        else walk(c);
      }
    })(block);
    return s.replace(/\n$/, ''); // the <br> that keeps an empty paragraph open is not a line
  };
  const lines = [...root.children].flatMap((block) => (block.tagName === 'UL'
    ? [...block.children].map((li) => (li.getAttribute('data-done') === '1' ? '[x] ' : '[ ] ') + blockText(li)) // a checklist item is a line with its box
    : [blockText(block)]));
  return lines.join('\n').replace(/\s+$/, '');
}

function setEditor(n) {
  editor().innerHTML = n ? cleaned(n.html ?? plainToHtml(n.body)).innerHTML : '<p><br></p>';
  editor().dataset.empty = n && n.body.trim() ? '' : '1';
}

function caretToEnd(node) {
  const range = document.createRange();
  range.selectNodeContents(node);
  range.collapse(false);
  const sel = getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function caretElement() {
  const anchor = getSelection().anchorNode;
  const at = anchor && (anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor);
  return at && editor().contains(at) ? at : null;
}

function applyFormat(command, value) {
  if (!currentNote()) return;
  editor().focus();
  if (command === 'formatBlock' && caretElement()?.closest('ul.check')) return; // a list item has no size of its own
  document.execCommand('styleWithCSS', false, false); // <b> and <font color>, not inline styles
  document.execCommand(command, false, value);
  touchNote();
  syncFormat();
}

// the toolbar shows the format at the caret
function syncFormat() {
  if (document.activeElement !== editor()) return;
  const anchor = getSelection().anchorNode;
  const at = anchor && (anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor);
  if (!at || !editor().contains(at)) return;
  $('fmt-bold').setAttribute('aria-pressed', String(!!at.closest('b'))); // not queryCommandState: a heading is bold by its style and would light the button
  $('fmt-check').setAttribute('aria-pressed', String(!!at.closest('ul.check')));
  const block = (at.closest('h1, h2, h4, p') || { localName: 'p' }).localName;
  for (const b of document.querySelectorAll('#note-fmt [data-size]')) b.setAttribute('aria-pressed', String(SIZE_TAG[b.dataset.size] === block));
  const key = colorKey(at.closest('font[color]')?.getAttribute('color')) || DEFAULT_COLOR;
  for (const b of document.querySelectorAll('#note-fmt [data-color]')) b.setAttribute('aria-pressed', String(b.dataset.color === key));
}

$('fmt-colors').replaceChildren(...Object.entries(NOTE_COLORS).map(([hex, name]) => {
  const b = el('button', { type: 'button', className: 'sw', ariaLabel: 'Colour: ' + name, title: name });
  b.dataset.color = hex;
  b.setAttribute('aria-pressed', 'false');
  return b;
}));
$('note-fmt').addEventListener('mousedown', (e) => e.preventDefault()); // clicking a button must not move the selection out of the text
$('note-fmt').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.id === 'fmt-bold') applyFormat('bold');
  else if (b.id === 'fmt-check') toggleChecklist();
  else if (b.dataset.size) applyFormat('formatBlock', `<${SIZE_TAG[b.dataset.size]}>`);
  else if (b.dataset.color) applyFormat('foreColor', b.dataset.color);
});
document.addEventListener('selectionchange', syncFormat);
document.execCommand('defaultParagraphSeparator', false, 'p');
// only plain text goes in from outside, so no foreign markup ever reaches a note
editor().addEventListener('paste', (e) => { e.preventDefault(); document.execCommand('insertText', false, e.clipboardData.getData('text/plain')); });
editor().addEventListener('drop', (e) => { e.preventDefault(); const text = e.dataTransfer.getData('text/plain'); if (text) document.execCommand('insertText', false, text); });

// checklists: a list whose items carry a circle; ticking sets data-done on the item
function toggleChecklist() {
  if (!currentNote()) return;
  editor().focus();
  const sel = getSelection();
  if (!sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  const keep = [sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset];
  const blocks = [...editor().children].filter((b) => range.intersectsNode(b));
  if (!blocks.length) return;
  const convert = (from, tag) => { const to = document.createElement(tag); to.append(...from.childNodes); return to; }; // moves the text, so the caret survives
  if (blocks.every((b) => b.matches('ul.check'))) {
    for (const ul of blocks) ul.replaceWith(...[...ul.children].map((li) => convert(li, 'p')));
  } else {
    let list = null;
    for (const b of blocks) {
      if (b.matches('ul.check')) { list = null; continue; }
      if (!list) {
        const before = b.previousElementSibling;
        if (before && before.matches('ul.check')) list = before; // right after a checklist: join it
        else { list = document.createElement('ul'); list.className = 'check'; b.before(list); }
      }
      list.append(convert(b, 'li'));
      b.remove();
      const next = list.nextElementSibling;
      if (next && next.matches('ul.check')) { list.append(...next.children); next.remove(); } // and one right after joins too
    }
  }
  if (editor().contains(keep[0]) && editor().contains(keep[2])) sel.setBaseAndExtent(...keep); else caretToEnd(editor());
  touchNote();
  syncFormat();
}
// Enter in a checklist item: whatever follows the caret and the lines below become plain text under the list
function leaveChecklist(li) {
  const sel = getSelection();
  const ul = li.parentElement;
  const p = document.createElement('p');
  const tail = document.createRange();
  if (sel.rangeCount && li.contains(sel.anchorNode)) tail.setStart(sel.anchorNode, sel.anchorOffset); else tail.setStart(li, li.childNodes.length);
  tail.setEnd(li, li.childNodes.length);
  p.append(tail.extractContents());
  if (!p.textContent) p.replaceChildren(document.createElement('br')); // an empty paragraph needs a break to exist
  if (!li.textContent && !li.querySelector('br')) li.append(document.createElement('br'));
  const after = [...ul.children].slice([...ul.children].indexOf(li) + 1);
  if (after.length) {
    const rest = document.createElement('ul');
    rest.className = 'check';
    rest.append(...after);
    ul.after(p, rest);
  } else {
    ul.after(p);
  }
  const caret = document.createRange();
  caret.setStart(p, 0);
  caret.collapse(true);
  sel.removeAllRanges();
  sel.addRange(caret);
  touchNote();
  syncFormat();
}

function toggleItem(li) {
  if (li.getAttribute('data-done') === '1') li.removeAttribute('data-done'); else li.setAttribute('data-done', '1');
  touchNote();
}
const inGutter = (e, li) => e.clientX - li.getBoundingClientRect().left < 32; // the column the circle sits in
editor().addEventListener('mousedown', (e) => { const li = e.target.closest?.('ul.check > li'); if (li && inGutter(e, li)) e.preventDefault(); }); // the click ticks, it does not move the caret
editor().addEventListener('click', (e) => { const li = e.target.closest?.('ul.check > li'); if (li && inGutter(e, li)) toggleItem(li); });
editor().addEventListener('input', (e) => { // a new line after a ticked item starts unticked
  if (e.inputType === 'insertParagraph') caretElement()?.closest('ul.check > li')?.removeAttribute('data-done');
});
editor().addEventListener('keydown', (e) => {
  const mod = e.ctrlKey || e.metaKey;
  if (e.key === 'Enter' && !mod && !e.shiftKey) { // Enter in a checklist ends the list and goes on in plain text
    const li = caretElement()?.closest('ul.check > li');
    if (li) { e.preventDefault(); leaveChecklist(li); return; }
  }
  if (mod && ['KeyI', 'KeyU'].includes(e.code)) e.preventDefault(); // italic and underline are not kept
  if (mod && e.key === 'Enter') { const li = caretElement()?.closest('ul.check > li'); if (li) { e.preventDefault(); toggleItem(li); } }
  if (mod && e.shiftKey && e.code === 'KeyL') { e.preventDefault(); toggleChecklist(); }
});

function showNote(id) {
  selectedNoteId = id;
  const n = currentNote();
  $('note-title').value = n ? n.title : '';
  setEditor(n);
  renderNoteList();
}

async function flushNote() {
  clearTimeout(noteTimer);
  const n = currentNote();
  if (!noteDirty || !n) return;
  noteDirty = false;
  try {
    await invoke('save_notes', { notes: [n] });
    if (draftNote && draftNote.id === n.id) draftNote = null; // now it is a real note
  } catch (e) {
    noteDirty = true;
    tell('Could not save the note: ' + e);
  }
}

// leaving a note saves what was typed, and drops a new note that nobody wrote in
async function leaveNote() {
  await flushNote();
  const n = currentNote();
  if (n && draftNote && n.id === draftNote.id && !n.title.trim() && !n.body.trim()) {
    notes = notes.filter((x) => x.id !== n.id);
    draftNote = null;
    selectedNoteId = null;
  }
}

async function openNote(id, focus) {
  if (id !== selectedNoteId) {
    await leaveNote();
    showNote(id);
  }
  if (focus) {
    $('note-' + focus).focus();
    if (focus === 'body') caretToEnd($('note-body'));
  }
}

async function newNote() {
  await leaveNote();
  draftNote = { id: newNoteId(), title: '', body: '', updatedAt: new Date().toISOString() };
  notes.push(draftNote);
  $('note-search').value = '';
  showNote(draftNote.id);
  $('note-title').focus();
}

async function deleteNote(id = selectedNoteId) {
  const n = notes.find((x) => x.id === id); // the Delete key on a list row means that row, even when it is not the open note
  if (!n) return;
  if (!(await ask(`Delete "${n.title || 'Untitled'}"?\nTasks that link to it keep going without it.`, 'Delete'))) return;
  clearTimeout(noteTimer);
  noteDirty = false;
  const list = visibleNotes();
  const i = list.findIndex((x) => x.id === n.id);
  const next = list[i + 1] || list[i - 1];
  try {
    if (!(draftNote && draftNote.id === n.id)) await invoke('delete_note', { id: n.id });
  } catch (e) {
    return tell('Could not delete the note: ' + e);
  }
  if (draftNote && draftNote.id === n.id) draftNote = null;
  notes = notes.filter((x) => x.id !== n.id);
  if (n.id === selectedNoteId) showNote(next ? next.id : null); else renderNoteList();
}

// every keystroke updates the note in memory and the list; the file is written half a second after typing stops
function touchNote() {
  const n = currentNote();
  if (!n) return;
  const root = cleaned(editor().innerHTML); // what is stored is rebuilt from the known formats, never the raw editor markup
  n.title = $('note-title').value;
  n.html = root.innerHTML;
  n.body = plainFromContainer(root);
  editor().dataset.empty = n.body.trim() ? '' : '1';
  n.updatedAt = new Date().toISOString();
  noteDirty = true;
  renderNoteList();
  clearTimeout(noteTimer);
  noteTimer = setTimeout(flushNote, 500);
}

// keys while the Notes view is showing: the Tasks shortcuts stay out of the way
function notesKeys(e) {
  const t = e.target.matches ? e.target : document.body;
  const ctrl = (e.ctrlKey || e.metaKey) && !e.altKey;
  if (ctrl && e.code === 'KeyN') { e.preventDefault(); newNote(); return; }
  if (ctrl && e.code === 'KeyF') { e.preventDefault(); $('note-search').focus(); $('note-search').select(); return; }
  if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
  if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && (t.id === 'note-search' || t.classList.contains('note'))) {
    e.preventDefault();
    const list = visibleNotes();
    const i = list.findIndex((x) => x.id === selectedNoteId);
    const next = list[Math.max(0, Math.min(list.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1)))];
    if (next) openNote(next.id).then(() => { if (t.classList.contains('note')) $('note-' + next.id)?.focus(); });
    return;
  }
  if (e.key === 'Delete' && t.classList.contains('note')) { e.preventDefault(); deleteNote(t.id.slice('note-'.length)); }
}

$('note-new').onclick = newNote;
$('note-delete').onclick = () => deleteNote();
$('note-search').oninput = renderNoteList;
$('note-title').oninput = $('note-body').oninput = touchNote;
addEventListener('blur', flushNote); // the window lost focus: do not leave typing unsaved


defineModule('notes', {
  weekly(since, until) {
    const n = notes.filter((x) => x.updatedAt && localDay(new Date(x.updatedAt)) >= since && localDay(new Date(x.updatedAt)) <= until).length;
    return { title: 'Notes', lines: [`${n} note${n === 1 ? '' : 's'} written or edited`] };
  },
  summary() {
    if (!notes.length) return null;
    const last = [...notes].sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''))[0];
    return { label: 'Notes', value: String(notes.length), unit: notes.length === 1 ? 'note' : 'notes', sub: 'Latest: ' + (last.title || noteLine(last)).slice(0, 36) };
  },
  start() { shortcutGroups.push(notesGroup); fillNoteLinks(); render(); }, // tasks gain the Linked note menu and Open buttons
  stop() { shortcutGroups.splice(shortcutGroups.indexOf(notesGroup), 1); fillNoteLinks(); render(); },
  show() { if (!currentNote() && notes.length) showNote((visibleNotes()[0] || notes[0]).id); else renderNoteList(); },
  refresh: renderNoteList,
  keys: notesKeys,
  flush: flushNote, leave: leaveNote, open: openNote, newNote,
});
