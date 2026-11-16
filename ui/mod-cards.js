// Spaced Flashcards module: FSRS-4.5 DSR spaced-repetition scheduler (Again / Hard / Good / Easy) with context examples.
// Data: { cards: [{ id, deck, front, back, example?, s?, d?, ivl?, lapses?, box, next, lastReviewed, reviews }] }.
(() => {
  let data = { cards: [], newLimit: 20, newLog: { day: '', count: 0 }, extraToday: 0 };
  let mode = 'study'; // 'study' | 'quiz' | 'browse'
  let activeDeck = '';
  let revealed = false;
  let quizSource = 'toeic'; // 'toeic' (curated Part 5 grammar+traps) | 'cards' (1,000 chunks / own cards)
  let quizTag = '';
  let quizCount = 10;
  let quizSyncFsrs = true;
  let quizState = null; // { questions, answers, index }
  const save = () => saveModule('cards', data).catch((e) => tell('Could not save: ' + (e.message || e)));
  const root = () => $('cards-view');
  const today = () => localDay(new Date());
  const newDone = (t) => (data.newLog?.day === t ? Number(data.newLog.count) || 0 : 0);
  const effectiveLimit = () => (data.newLimit > 0 ? data.newLimit + (data.extraDay === today() ? data.extraToday || 0 : 0) : 0);

  function build() {
    root().replaceChildren(
      el('section', { className: 'fc-main', ariaLabel: 'Flashcards' },
        el('div', { className: 'fc-head' },
          el('h2', {}, 'Flashcards'),
          el('div', { className: 'fc-modes', role: 'tablist', ariaLabel: 'Flashcards mode' },
            el('button', { id: 'fc-m-study', type: 'button', role: 'tab', onclick: () => { mode = 'study'; revealed = false; paint(); } }, 'Study'),
            el('button', { id: 'fc-m-quiz', type: 'button', role: 'tab', onclick: () => { mode = 'quiz'; if (!quizState) startQuiz(); else paint(); } }, 'Test'),
            el('button', { id: 'fc-m-browse', type: 'button', role: 'tab', onclick: () => { mode = 'browse'; paint(); } }, 'All cards'))),
        el('div', { id: 'fc-sum', className: 'fc-sum' }),
        el('div', { id: 'fc-pace', className: 'fc-pace', role: 'group', ariaLabel: 'Daily new card limit' }),
        el('div', { id: 'fc-decks', className: 'tag-bar', hidden: true }),
        el('details', { id: 'fc-packs', className: 'fc-packs', hidden: true }),
        el('input', { id: 'fc-search', type: 'search', placeholder: 'Search chunks, meanings or examples…', ariaLabel: 'Search flashcards', hidden: true, oninput: paint }),
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

  function queueState() {
    const t = today();
    const scoped = data.cards.filter((c) => !activeDeck || c.deck === activeDeck);
    return studyQueue(scoped, t, { newLimit: effectiveLimit(), newDoneToday: newDone(t) });
  }
  const dueList = () => queueState().queue;

  // grade: 1 Again, 2 Hard, 3 Good, 4 Easy (FSRS)
  function gradeCurrent(grade) {
    const list = dueList();
    const cur = list[0];
    if (!cur) return;
    const t = today();
    const wasNew = !cur.lastReviewed;
    const updated = fsrsReview(cur, grade, t);
    data.cards = data.cards.map((c) => (c.id === cur.id ? updated : c));
    if (wasNew) data.newLog = { day: t, count: newDone(t) + 1 };
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

  const packs = () => (typeof TOEIC_PACKS !== 'undefined' ? TOEIC_PACKS : []);
  const packItems = (p) => p.cards.map(([front, back, example]) => ({ deck: p.deck, front, back, example }));
  const packRemaining = (p) => {
    const have = new Set(data.cards.map((c) => String(c.front || '').trim().toLowerCase()));
    return p.cards.filter(([front]) => !have.has(String(front || '').trim().toLowerCase())).length;
  };

  function loadPack(p) {
    const res = importCardPack(data.cards, packItems(p), today());
    data.cards = res.cards;
    activeDeck = p.deck;
    mode = 'study';
    revealed = false;
    if (res.added) save();
    if ($('fc-msg')) $('fc-msg').textContent = res.added ? `Loaded ${res.added} TOEIC chunks into "${p.deck}".` : `"${p.deck}" is already loaded.`;
    paint();
  }

  function loadAllPacks() {
    const allItems = packs().flatMap(packItems);
    const res = importCardPack(data.cards, allItems, today());
    data.cards = res.cards;
    activeDeck = '';
    mode = 'study';
    revealed = false;
    if (res.added) save();
    if ($('fc-msg')) $('fc-msg').textContent = res.added ? `Loaded all ${res.added} TOEIC chunks.` : 'All TOEIC packs are already loaded.';
    if ($('fc-packs')) $('fc-packs').open = false;
    paint();
  }

  function startQuiz(source = quizSource, tag = quizTag, count = quizCount) {
    quizSource = source;
    quizTag = tag;
    quizCount = count;
    const questions = quizSource === 'toeic'
      ? buildCuratedQuiz(typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [], { count: quizCount, tag: quizTag })
      : buildCardQuiz(data.cards, { count: quizCount, deck: activeDeck });
    quizState = { questions, answers: new Array(questions.length).fill(null), index: 0 };
    paint();
  }

  function answerQuiz(idx) {
    if (!quizState) return;
    const i = quizState.index;
    const q = quizState.questions[i];
    if (!q || quizState.answers[i] !== null) return;
    quizState.answers[i] = idx;
    const ok = idx === q.ans;
    const t = today();
    if (quizSyncFsrs && q.cardId) {
      const card = data.cards.find((c) => c.id === q.cardId);
      if (card) {
        const updated = fsrsReview(card, ok ? 3 : 1, t);
        data.cards = data.cards.map((c) => (c.id === card.id ? updated : c));
        save();
      }
    }
    emit('card-reviewed', { key: `quiz:${q.id}:${t}` });
    paint();
  }

  function paintQuiz(stage) {
    const curated = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
    const tags = [...new Set(curated.map((x) => x.tag).filter(Boolean))];
    const fsrsChk = el('input', { type: 'checkbox', checked: quizSyncFsrs });
    fsrsChk.onchange = () => { quizSyncFsrs = fsrsChk.checked; };
    const topicSel = quizSource === 'toeic'
      ? el('select', {
          id: 'fc-qz-topic',
          className: 'fc-qz-sel',
          ariaLabel: 'Grammar topic filter',
          onchange: (e) => startQuiz('toeic', e.target.value, quizCount),
        }, el('option', { value: '' }, `All topics (${curated.length})`), ...tags.map((tg) => el('option', { value: tg, selected: quizTag === tg }, tg)))
      : null;

    const toolbar = el('div', { className: 'fc-qz-bar' },
      el('div', { className: 'fc-qz-sources', role: 'group', ariaLabel: 'Test bank' },
        el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'toeic' ? ' active' : ''), onclick: () => startQuiz('toeic', quizTag, quizCount) }, `TOEIC Grammar & Traps (${curated.length})`),
        el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'cards' ? ' active' : ''), onclick: () => startQuiz('cards', '', quizCount) }, `My Decks / Chunks (${data.cards.length})`)),
      el('div', { className: 'fc-qz-opts' },
        ...(topicSel ? [topicSel] : [el('label', { className: 'fc-qz-sync' }, fsrsChk, ' Update FSRS')]),
        ...[[10, '10 Qs'], [20, '20 Qs'], [0, 'All']].map(([n, lbl]) => el('button', {
          type: 'button',
          className: 'tag-pill' + (quizCount === n ? ' active' : ''),
          onclick: () => startQuiz(quizSource, quizTag, n),
        }, lbl)),
        el('button', { type: 'button', className: 'linkish fc-qz-new', onclick: () => startQuiz(quizSource, quizTag, quizCount) }, 'New set ↻')));
    const finishMount = () => { if (topicSel && typeof enhanceSelect === 'function') enhanceSelect(topicSel); };

    if (!quizState || !quizState.questions.length) {
      stage.replaceChildren(toolbar, el('div', { className: 'fc-done-box' },
        el('h3', {}, quizSource === 'cards' ? 'Need at least 4 cards in your decks' : 'No questions found'),
        el('p', {}, quizSource === 'cards' ? 'Load one of the TOEIC Chunk Packs above or add 4 cards to test yourself.' : 'Switch topics above to start a test.')));
      finishMount();
      return;
    }

    const { questions, answers, index } = quizState;
    const sc = scoreQuiz(questions, answers);
    const LETTERS = ['A', 'B', 'C', 'D'];

    // Summary screen when finished
    if (index >= questions.length) {
      const retryBtn = sc.missed.length ? el('button', {
        type: 'button', className: 'primary',
        onclick: () => {
          const qs = sc.missed.map((m) => m.question);
          quizState = { questions: qs, answers: new Array(qs.length).fill(null), index: 0 };
          paint();
        },
      }, el('span', {}, `Retry ${sc.missed.length} missed`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')) : null;

      stage.replaceChildren(toolbar,
        el('div', { className: 'fc-qz-summary' },
          el('div', { className: 'fc-qz-scoreline' },
            el('div', {}, el('small', {}, 'Test score'), el('b', {}, `${sc.correct} / ${sc.total} (${sc.pct}%)`)),
            el('div', { className: 'fc-qz-sum-acts' },
              ...(retryBtn ? [retryBtn] : []),
              el('button', { type: 'button', className: 'fc-grade', onclick: () => startQuiz(quizSource, quizTag, quizCount) }, el('b', {}, 'Start another test')))),
          ...(sc.missed.length
            ? [el('ul', { className: 'fc-qz-review' }, ...sc.missed.map(({ question: q, pick }) => el('li', { className: 'fc-qz-rev-item' },
                el('div', { className: 'fc-qz-rev-meta' }, el('span', { className: 'task-tag' }, q.tag)),
                el('p', { className: 'fc-qz-rev-q' }, q.q),
                el('p', { className: 'fc-qz-rev-pick' }, `Your answer: (${LETTERS[pick]}) ${q.choices[pick]}  →  Correct: (${LETTERS[q.ans]}) ${q.choices[q.ans]}`),
                el('p', { className: 'fc-qz-why' }, q.why))))]
            : [el('p', { className: 'fc-qz-perfect' }, 'Perfect score — every question answered correctly!')])));
      finishMount();
      return;
    }

    const q = questions[index];
    const picked = answers[index];
    const answered = picked !== null && picked !== undefined;
    const nextBtn = el('button', {
      type: 'button',
      className: 'primary fc-qz-next',
      onclick: () => { quizState.index++; paint(); },
    }, el('span', {}, index + 1 < questions.length ? 'Next question (Enter)' : 'Finish & see score'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'));

    const cardEl = el('div', { className: 'fc-card fc-qz-card' },
      el('div', { className: 'fc-card-meta' },
        el('span', {}, `${q.tag} · Q${index + 1}/${questions.length}`),
        el('span', {}, `Score: ${sc.correct}/${sc.answered}`)),
      el('div', { className: 'fc-qz-q' }, q.q),
      el('div', { className: 'fc-qz-choices' }, ...q.choices.map((ch, ci) => {
        let cls = 'fc-qz-opt';
        if (answered) {
          if (ci === q.ans) cls += ' right';
          else if (ci === picked) cls += ' wrong';
          else cls += ' dim';
        }
        return el('button', {
          type: 'button',
          className: cls,
          disabled: answered,
          onclick: () => answerQuiz(ci),
        }, el('b', { className: 'fc-qz-let' }, LETTERS[ci]), el('span', {}, ch));
      })),
      ...(answered
        ? [
            el('div', { className: 'fc-qz-explain ' + (picked === q.ans ? 'ok' : 'bad') },
              el('strong', {}, picked === q.ans ? `✓ Correct (${LETTERS[q.ans]})` : `✕ Incorrect — Correct answer is (${LETTERS[q.ans]}) ${q.choices[q.ans]}`),
              el('div', { className: 'fc-qz-why' }, ...String(q.why || '').split('\n').map((line) => el('p', {}, line)))),
            el('div', { className: 'fc-qz-foot' }, nextBtn),
          ]
        : []));
    stage.replaceChildren(toolbar, cardEl);
    finishMount();
  }

  function paintPacks() {
    const box = $('fc-packs');
    const list = packs();
    if (!box || !list.length) return;
    box.hidden = false;
    const total = list.reduce((n, p) => n + p.cards.length, 0);
    const leftAll = list.reduce((n, p) => n + packRemaining(p), 0);
    if (!data.cards.length) box.open = true;
    const allBtn = el('button', { type: 'button', className: 'fc-pack-all' + (!leftAll ? ' loaded' : ''), onclick: loadAllPacks },
      leftAll ? `Add all ${leftAll} remaining TOEIC chunks →` : `✓ All ${total} TOEIC chunks loaded`);
    const grid = el('div', { className: 'fc-pack-grid' }, ...list.map((p) => {
      const rem = packRemaining(p);
      return el('button', {
        type: 'button',
        className: 'fc-pack-btn' + (rem === 0 ? ' loaded' : ''),
        onclick: () => loadPack(p),
      }, el('b', {}, (rem === 0 ? '✓ ' : '+ ') + p.label), el('small', {}, rem === 0 ? `${p.cards.length} ready` : `${rem} of ${p.cards.length} new`));
    }));
    box.replaceChildren(
      el('summary', {},
        el('span', {}, `TOEIC Complete Library · ${total} chunks (${list.length} topics)`),
        el('small', {}, leftAll ? `${leftAll} available` : 'All installed')),
      el('div', { className: 'fc-pack-body' }, allBtn, grid));
  }

  function paint() {
    const t = today();
    $('fc-m-study').ariaSelected = String(mode === 'study');
    if ($('fc-m-quiz')) $('fc-m-quiz').ariaSelected = String(mode === 'quiz');
    $('fc-m-browse').ariaSelected = String(mode === 'browse');
    const qAll = studyQueue(data.cards, t, { newLimit: effectiveLimit(), newDoneToday: newDone(t) });
    const s = deckSummary(data.cards, t);
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    $('fc-sum').replaceChildren(
      fig('Due today', String(qAll.queue.length)),
      fig('Mastered (10+ days)', String(s.mastered)),
      fig('Total cards', String(s.total)));

    if ($('fc-pace')) {
      $('fc-pace').hidden = mode !== 'study';
      $('fc-pace').replaceChildren(
        el('span', { className: 'fc-pace-label' }, 'New / day:'),
        ...[[20, '20'], [50, '50'], [0, 'All']].map(([lim, lbl]) => el('button', {
          type: 'button',
          className: 'tag-pill' + ((data.newLimit ?? 20) === lim ? ' active' : ''),
          onclick: () => { data.newLimit = lim; data.extraToday = 0; save(); paint(); },
        }, lbl)),
        ...(qAll.newDue > qAll.newShown ? [el('small', { className: 'fc-pace-info' }, `${qAll.newDue} waiting`)] : []));
    }
    if ($('fc-search')) $('fc-search').hidden = mode !== 'browse';

    if (activeDeck && !s.decks.includes(activeDeck)) activeDeck = '';
    const deckBar = $('fc-decks');
    deckBar.hidden = !s.decks.length || (mode === 'quiz' && quizSource === 'toeic');
    if (s.decks.length) {
      deckBar.replaceChildren(
        el('button', { type: 'button', className: 'tag-pill' + (!activeDeck ? ' active' : ''), onclick: () => { activeDeck = ''; revealed = false; if (mode === 'quiz') startQuiz('cards', '', quizCount); else paint(); } }, 'All decks'),
        ...s.decks.map((d) => el('button', { type: 'button', className: 'tag-pill' + (activeDeck === d ? ' active' : ''), onclick: () => { activeDeck = activeDeck === d ? '' : d; revealed = false; if (mode === 'quiz') startQuiz('cards', '', quizCount); else paint(); } }, d)));
    }
    if (mode !== 'quiz') paintPacks();
    else if ($('fc-packs')) $('fc-packs').hidden = true;

    const stage = $('fc-stage');
    if (mode === 'quiz') { paintQuiz(stage); return; }
    if (mode === 'study') {
      const qs = queueState();
      const due = qs.queue;
      if (!due.length) {
        const waiting = qs.newDue > 0;
        stage.replaceChildren(
          el('div', { className: 'fc-done-box' },
            el('h3', {}, data.cards.length ? 'All caught up for today' : 'No flashcards yet'),
            el('p', {}, data.cards.length
              ? (waiting ? `You finished today’s pacing target! ${qs.newDue} unseen cards are queued for upcoming days.` : 'You have reviewed every card due today. Come back tomorrow or add new cards.')
              : 'Load the 1,000 TOEIC chunks above or add your own flashcard on the right.'),
            ...(waiting ? [el('button', {
              type: 'button', className: 'primary fc-more-btn',
              onclick: () => { data.extraDay = t; data.extraToday = (data.extraDay === t ? data.extraToday || 0 : 0) + 20; paint(); },
            }, el('span', {}, 'Study 20 more now'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))] : [])));
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
      const needle = ($('fc-search')?.value || '').trim().toLowerCase();
      const list = data.cards.filter((c) => (!activeDeck || c.deck === activeDeck) && (!needle || `${c.front}\n${c.back}\n${c.example || ''}\n${c.deck || ''}`.toLowerCase().includes(needle)));
      stage.replaceChildren(
        list.length
          ? el('ul', { className: 'fc-list' }, ...list.slice(0, 200).map((c) => {
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
            }), ...(list.length > 200 ? [el('p', { className: 'fc-tip' }, `Showing first 200 of ${list.length} matching cards — use Search or deck filters above to narrow down.`)] : []))
          : el('p', { className: 'empty' }, 'No cards match this filter.'));
    }
  }

  const group = { module: 'cards', title: 'Flashcards', items: [['Space', 'Reveal answer'], ['1 2 3 4', 'Grade card / pick A B C D'], ['Enter', 'Next quiz question'], ['N', 'New card']] };
  const commandFn = () => [
    { label: 'Study flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'study'; paint(); } },
    { label: 'TOEIC: Practice Test (with explanations)', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; startQuiz('toeic', '', 10); } },
    { label: 'Quiz from my flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; startQuiz('cards', '', 10); } },
    { label: `TOEIC: Load all ${packs().reduce((n, p) => n + p.cards.length, 0)} chunks`, hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); loadAllPacks(); } },
    ...packs().map((p) => ({
      label: `TOEIC: Add ${p.label} (${p.cards.length} chunks)`,
      hint: 'Flashcards',
      kind: 'Command',
      run: async () => { await setView('cards'); loadPack(p); },
    })),
  ];

  defineModule('cards', {
    summary() {
      if (!data.cards.length) return null;
      const t = today();
      const q = studyQueue(data.cards, t, { newLimit: effectiveLimit(), newDoneToday: newDone(t) });
      const s = deckSummary(data.cards, t);
      return { label: 'Flashcards', value: String(q.queue.length), unit: 'due today', warn: q.queue.length > 0, sub: `${s.mastered} of ${s.total} mastered` };
    },
    weekly(since, until) {
      const rev = data.cards.filter((c) => c.lastReviewed && c.lastReviewed >= since && c.lastReviewed <= until).length;
      return { title: 'Flashcards', lines: [`${rev} card${rev === 1 ? '' : 's'} reviewed`] };
    },
    async start() {
      if (typeof TOEIC_PACKS === 'undefined' && !$('script-toeic-pack')) {
        await loadFile('script', { src: 'toeic-pack.js', id: 'script-toeic-pack' }).catch(() => {});
      }
      if (typeof TOEIC_QUIZ === 'undefined' && !$('script-toeic-quiz')) {
        await loadFile('script', { src: 'toeic-quiz.js', id: 'script-toeic-quiz' }).catch(() => {});
      }
      data = { cards: [], newLimit: 20, newLog: { day: '', count: 0 }, extraToday: 0, ...(moduleData.cards || {}) };
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
      const ctrl = (e.ctrlKey || e.metaKey) && !e.altKey;
      if (ctrl && e.code === 'KeyF') { e.preventDefault(); mode = 'browse'; paint(); $('fc-search')?.focus(); $('fc-search')?.select(); return; }
      if (ctrl) return;
      if (e.key === 'Escape' && isField(t)) { t.blur(); return; }
      if (isField(t)) return;
      if (e.code === 'KeyN') { e.preventDefault(); $('fc-front').focus(); return; }
      const idx = ['Digit1', 'Digit2', 'Digit3', 'Digit4'].indexOf(e.code);
      const pad = ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].indexOf(e.code);
      const num = idx >= 0 ? idx + 1 : pad >= 0 ? pad + 1 : ['1', '2', '3', '4'].indexOf(e.key) + 1;
      if (mode === 'quiz' && quizState) {
        const curIdx = quizState.index;
        const q = quizState.questions[curIdx];
        if (!q) return;
        const answered = quizState.answers[curIdx] !== null && quizState.answers[curIdx] !== undefined;
        if (!answered && num >= 1 && num <= 4) { e.preventDefault(); answerQuiz(num - 1); }
        else if (answered && (e.key === 'Enter' || e.code === 'Space')) { e.preventDefault(); quizState.index++; paint(); }
        return;
      }
      if (mode === 'study' && e.code === 'Space') { e.preventDefault(); if (!revealed) { revealed = true; paint(); } }
      else if (mode === 'study' && revealed && num >= 1 && num <= 4) { e.preventDefault(); gradeCurrent(num); }
    },
  });
})();
