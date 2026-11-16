// Spaced Flashcards module: FSRS-4.5 DSR spaced-repetition scheduler (Again / Hard / Good / Easy) with context examples.
// Data: { cards: [{ id, deck, front, back, example?, s?, d?, ivl?, lapses?, box, next, lastReviewed, reviews }] }.
(() => {
  let data = { cards: [] };
  let mode = 'study'; // 'study' | 'browse'
  let activeDeck = '';
  let revealed = false;
  const save = () => saveModule('cards', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('cards-view');
  const today = () => localDay(new Date());

  function build() {
    root().replaceChildren(
      el('section', { className: 'fc-main', ariaLabel: 'Flashcards' },
        el('div', { className: 'fc-head' },
          el('h2', {}, 'Flashcards'),
          el('div', { className: 'fc-modes', role: 'tablist', ariaLabel: 'Flashcards mode' },
            el('button', { id: 'fc-m-study', type: 'button', role: 'tab', onclick: () => { mode = 'study'; revealed = false; paint(); } }, 'Study'),
            el('button', { id: 'fc-m-browse', type: 'button', role: 'tab', onclick: () => { mode = 'browse'; paint(); } }, 'All cards'))),
        el('div', { id: 'fc-sum', className: 'fc-sum' }),
        el('div', { id: 'fc-decks', className: 'tag-bar', hidden: true }),
        el('div', { id: 'fc-stage' })),
      el('aside', { className: 'fc-side', ariaLabel: 'Add a flashcard' },
        el('form', { id: 'fc-form', onsubmit: add },
          el('label', { className: 'fc-field' }, 'Deck', el('input', { id: 'fc-deck', maxLength: 40, autocomplete: 'off', placeholder: 'TOEIC, Leetcode, AI' })),
          el('label', { className: 'fc-field' }, 'Front (meaning, or a sentence with a ___ gap)', el('textarea', { id: 'fc-front', rows: 3, maxLength: 300, placeholder: 'All staff must ___ the new safety rules.' })),
          el('label', { className: 'fc-field' }, 'Back (the chunk or answer)', el('textarea', { id: 'fc-back', rows: 2, maxLength: 500, placeholder: 'comply with (the rules)' })),
          el('label', { className: 'fc-field' }, 'Example sentence (optional)', el('textarea', { id: 'fc-example', rows: 2, maxLength: 300, placeholder: 'Our suppliers comply with every safety regulation.' })),
          el('p', { className: 'fc-tip' }, 'Tip: for English, learn chunks (collocations and phrases) in a sentence, not lone words.'),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add card'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'fc-msg', className: 'fc-msg', role: 'status' }))));
    mobileSheet(root(), root().querySelector('.fc-side'), 'New card');
  }

  function add(e) {
    e.preventDefault();
    const deck = $('fc-deck').value.trim() || 'General';
    const front = $('fc-front').value.trim();
    const back = $('fc-back').value.trim();
    const example = $('fc-example').value.trim();
    if (!front || !back) { $('fc-msg').textContent = 'Fill in both the front and the back of the card.'; return; }
    data.cards.push({ id: crypto.randomUUID(), deck, front, back, ...(example ? { example } : {}), box: 1, next: today(), lastReviewed: null, reviews: 0 });
    save();
    $('fc-front').value = '';
    $('fc-back').value = '';
    $('fc-example').value = '';
    $('fc-msg').textContent = `Added card to "${deck}".`;
    paint();
    $('fc-front').focus();
  }

  function dueList() {
    const t = today();
    return data.cards
      .filter((c) => (!activeDeck || c.deck === activeDeck) && cardDue(c, t))
      .sort((a, b) => (a.next || '').localeCompare(b.next || ''));
  }

  // grade: 1 Again, 2 Hard, 3 Good, 4 Easy (FSRS)
  function gradeCurrent(grade) {
    const list = dueList();
    const cur = list[0];
    if (!cur) return;
    const t = today();
    const updated = fsrsReview(cur, grade, t);
    data.cards = data.cards.map((c) => (c.id === cur.id ? updated : c));
    revealed = false;
    emit('card-reviewed', { key: `card:${cur.id}:${t}` });
    save();
    paint();
  }

  async function remove(card) {
    if (!(await ask(`Delete card "${card.front.slice(0, 60)}"?`, 'Delete'))) return;
    data.cards = data.cards.filter((c) => c.id !== card.id);
    save();
    paint();
  }

  function paint() {
    const t = today();
    $('fc-m-study').ariaSelected = String(mode === 'study');
    $('fc-m-browse').ariaSelected = String(mode === 'browse');
    const s = deckSummary(data.cards, t);
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    $('fc-sum').replaceChildren(
      fig('Due today', String(s.due)),
      fig('Mastered (10+ days)', String(s.mastered)),
      fig('Total cards', String(s.total)));

    if (activeDeck && !s.decks.includes(activeDeck)) activeDeck = '';
    const deckBar = $('fc-decks');
    deckBar.hidden = !s.decks.length;
    if (s.decks.length) {
      deckBar.replaceChildren(
        el('button', { type: 'button', className: 'tag-pill' + (!activeDeck ? ' active' : ''), onclick: () => { activeDeck = ''; revealed = false; paint(); } }, 'All decks'),
        ...s.decks.map((d) => el('button', { type: 'button', className: 'tag-pill' + (activeDeck === d ? ' active' : ''), onclick: () => { activeDeck = activeDeck === d ? '' : d; revealed = false; paint(); } }, d)));
    }

    const stage = $('fc-stage');
    if (mode === 'study') {
      const due = dueList();
      if (!due.length) {
        stage.replaceChildren(
          el('div', { className: 'fc-done-box' },
            el('h3', {}, data.cards.length ? 'All caught up for today' : 'No flashcards yet'),
            el('p', {}, data.cards.length ? 'You have reviewed every card due today. Come back tomorrow or add new cards.' : 'Create your first flashcard on the right to start spaced-repetition study.')));
        return;
      }
      const cur = due[0];
      const pv = fsrsPreview(cur, t);
      const days = (n) => (n >= 365 ? `${Math.round(n / 36.5) / 10}y` : n >= 30 ? `${Math.round(n / 3) / 10}mo` : `${n}d`);
      const grades = [[1, 'Again', 'again'], [2, 'Hard', 'hard'], [3, 'Good', 'good'], [4, 'Easy', 'easy']];
      const recall = cur.lastReviewed ? `${Math.round(fsrsRetrievability(cur, t) * 100)}% recall` : 'New card';
      const cardBox = el('div', { className: 'fc-card' + (revealed ? ' revealed' : ''), onclick: () => { if (!revealed) { revealed = true; paint(); } } },
        el('div', { className: 'fc-card-meta' },
          el('span', {}, cur.deck || 'General'),
          el('span', {}, `${recall} · ${due.length} left today`)),
        el('div', { className: 'fc-card-front' }, cur.front),
        ...(revealed
          ? [
              el('div', { className: 'fc-card-back' }, cur.back),
              ...(cur.example ? [el('p', { className: 'fc-card-example' }, cur.example)] : []),
              el('div', { className: 'fc-card-acts fc-grades' },
                ...grades.map(([g, label, cls]) => el('button', { type: 'button', className: 'fc-grade ' + cls, title: `${label} (${g})`, onclick: (e) => { e.stopPropagation(); gradeCurrent(g); } },
                  el('b', {}, label), el('small', {}, days(pv[g]))))),
            ]
          : [
              el('button', { type: 'button', className: 'primary fc-reveal-btn', onclick: (e) => { e.stopPropagation(); revealed = true; paint(); } },
                el('span', {}, 'Show answer (Space)'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            ]));
      stage.replaceChildren(cardBox);
    } else {
      const list = data.cards.filter((c) => !activeDeck || c.deck === activeDeck);
      stage.replaceChildren(
        list.length
          ? el('ul', { className: 'fc-list' }, ...list.map((c) => {
              const del = el('button', { type: 'button', className: 'fc-del', ariaLabel: 'Delete card', textContent: '✕', onclick: () => remove(c) });
              const stab = fsrsStability(c);
              return el('li', { className: 'fc-row' },
                el('div', { className: 'fc-row-main' },
                  el('b', {}, c.front),
                  el('span', {}, c.back + (c.example ? ` · "${c.example}"` : ''))),
                el('div', { className: 'fc-row-meta' },
                  el('span', { className: 'task-tag' }, c.deck || 'General'),
                  el('small', {}, `${stab ? `stable ${Math.round(stab)}d · ${Math.round(fsrsRetrievability(c, t) * 100)}%` : 'new'} · due ${c.next <= t ? 'today' : fmt(parseDay(c.next), { day: 'numeric', month: 'short' })}`),
                  del));
            }))
          : el('p', { className: 'empty' }, 'No cards in this deck.'));
    }
  }

  const group = { module: 'cards', title: 'Flashcards', items: [['Space', 'Reveal answer'], ['1 2 3 4', 'Again, Hard, Good, Easy'], ['N', 'New card']] };
  const commandFn = () => [{ label: 'Study flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'study'; paint(); } }];

  defineModule('cards', {
    summary() {
      if (!data.cards.length) return null;
      const s = deckSummary(data.cards, today());
      return { label: 'Flashcards', value: String(s.due), unit: 'due today', warn: s.due > 0, sub: `${s.mastered} of ${s.total} mastered` };
    },
    weekly(since, until) {
      const rev = data.cards.filter((c) => c.lastReviewed && c.lastReviewed >= since && c.lastReviewed <= until).length;
      return { title: 'Flashcards', lines: [`${rev} card${rev === 1 ? '' : 's'} reviewed`] };
    },
    start() {
      data = { cards: [], ...(moduleData.cards || {}) };
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
    keys(e) {
      const t = e.target.matches ? e.target : document.body;
      if ((e.ctrlKey || e.metaKey) && !e.altKey) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('fc-front').focus(); }
      else if (mode === 'study' && e.code === 'Space') { e.preventDefault(); if (!revealed) { revealed = true; paint(); } }
      else if (mode === 'study' && revealed) {
        const idx = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code);
        const pad = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].indexOf(e.code);
        const num = idx >= 0 ? idx + 1 : pad >= 0 ? pad + 1 : ['1', '2', '3', '4'].indexOf(e.key) + 1;
        if (num >= 1 && num <= 4) { e.preventDefault(); gradeCurrent(num); }
      }
    },
  });
})();
