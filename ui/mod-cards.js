// Spaced Flashcards module: FSRS-4.5 DSR spaced-repetition scheduler (Again / Hard / Good / Easy) with context examples.
// Data: { cards: [{ id, deck, front, back, example?, s?, d?, ivl?, lapses?, box, next, lastReviewed, reviews }] }.
(() => {
  let data = { cards: [], newLimit: 20, newLog: { day: '', count: 0 }, extraToday: 0, quizScores: {}, mockScores: {}, mockProgress: {} };
  let mode = 'study'; // 'study' | 'quiz' | 'browse'
  let activeDeck = '';
  let revealed = false;
  let quizSource = 'mock'; // 'mock' (30 x 100-Q Reading Mock) | 'sets' (20 x 50-Q Part 5) | 'topic' (1,000 Qs) | 'cards'
  let quizSet = 1;
  let quizTag = '';
  let quizCount = 10;
  let quizSyncFsrs = true;
  let quizState = null; // { source, set, questions, answers, index, recorded }
  let mockExamMode = 'exam'; // 'exam' (75m timed, submit at end) | 'practice' (untimed, instant reveal)
  let mockSession = null;
  let loadingMockSet = 0;
  let mockTimer = null;
  const EXAM_SEC = 75 * 60;
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
            el('button', { id: 'fc-m-quiz', type: 'button', role: 'tab', onclick: () => { mode = 'quiz'; if (quizSource !== 'mock' && !quizState) startQuiz(); else paint(); } }, 'Test'),
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

  function formatClock(sec = 0) {
    const s = Math.max(0, Math.floor(sec));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }

  function persistMockProgress() {
    if (!mockSession || mockSession.submitted) return;
    const key = String(mockSession.set);
    data.mockProgress = {
      ...(data.mockProgress || {}),
      [key]: {
        answers: mockSession.answers,
        flags: mockSession.flags,
        elapsed: mockSession.elapsed,
        index: mockSession.index,
        examMode: mockSession.examMode,
      },
    };
    save();
  }

  function stopMockTimer() {
    if (mockTimer) { clearInterval(mockTimer); mockTimer = null; }
  }

  function syncMockTimer() {
    const active = mode === 'quiz' && quizSource === 'mock' && mockSession && !mockSession.submitted && !mockSession.paused && mockSession.examMode === 'exam';
    if (!active) { stopMockTimer(); return; }
    if (mockTimer) return;
    mockTimer = setInterval(() => {
      if (!mockSession || mockSession.submitted || mockSession.paused || mode !== 'quiz' || quizSource !== 'mock') { stopMockTimer(); return; }
      mockSession.elapsed++;
      const left = Math.max(0, EXAM_SEC - mockSession.elapsed);
      const tEl = $('fc-mk-timer');
      if (tEl) {
        tEl.textContent = formatClock(left);
        tEl.className = 'fc-mk-timer' + (left <= 300 ? ' warn' : '');
      }
      if (mockSession.elapsed % 15 === 0) persistMockProgress();
      if (left <= 0) {
        stopMockTimer();
        submitMockExam(true);
      }
    }, 1000);
  }

  async function ensureMockVolume(setNum) {
    if (typeof TOEIC_QUIZ === 'undefined' && !$('script-toeic-quiz')) {
      await loadFile('script', { src: 'toeic-quiz.js', id: 'script-toeic-quiz' });
    }
    if (typeof TOEIC_MOCK_P6 === 'undefined' && !$('script-toeic-mock-p6')) {
      await loadFile('script', { src: 'toeic-mock-p6.js', id: 'script-toeic-mock-p6' });
    }
    const vol = Math.ceil((Number(setNum) || 1) / 5);
    const vols = globalThis.TOEIC_MOCK_VOLS || {};
    if (!vols[vol] && !$(`script-toeic-mock-${vol}`)) {
      await loadFile('script', { src: `toeic-mock-${vol}.js`, id: `script-toeic-mock-${vol}` });
    }
    return (globalThis.TOEIC_MOCK_VOLS || {})[vol] || [];
  }

  async function startMockExam(setNum = 1, { resume = false, examMode = mockExamMode } = {}) {
    const s = Number(setNum) || 1;
    loadingMockSet = s;
    paint();
    try {
      const p7Groups = await ensureMockVolume(s);
      const p5Pool = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
      const p6Passages = typeof TOEIC_MOCK_P6 !== 'undefined' ? TOEIC_MOCK_P6 : [];
      const questions = buildMockExam(s, { p5Pool, p6Passages, p7Groups });
      loadingMockSet = 0;
      if (!questions.length) {
        tell(`Mock Exam Set ${s} could not be loaded.`);
        paint();
        return;
      }
      const saved = resume ? data.mockProgress?.[String(s)] : null;
      const len = questions.length;
      const answers = saved?.answers?.length === len ? [...saved.answers] : new Array(len).fill(null);
      const flags = saved?.flags?.length === len ? [...saved.flags] : new Array(len).fill(false);
      mockSession = {
        set: s,
        examMode: saved?.examMode || examMode,
        questions,
        answers,
        flags,
        index: saved ? Math.max(0, Math.min(len - 1, saved.index || 0)) : 0,
        elapsed: saved ? Number(saved.elapsed) || 0 : 0,
        paused: false,
        navOpen: false,
        docTab: 'all',
        submitted: false,
        report: null,
        revFilter: 'missed',
        revPart: 0,
      };
      quizSource = 'mock';
      paint();
    } catch (e) {
      loadingMockSet = 0;
      tell('Could not load mock exam data: ' + (e.message || e));
      paint();
    }
  }

  async function submitMockExam(autoTimedOut = false) {
    if (!mockSession || mockSession.submitted) return;
    const unanswered = mockSession.answers.filter((a) => a === null || a === undefined).length;
    if (!autoTimedOut && unanswered > 0) {
      if (!(await ask(`You still have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. Submit Mock Set ${mockSession.set} and calculate your score?`, 'Submit'))) return;
    }
    stopMockTimer();
    const report = scoreMockExam(mockSession.questions, mockSession.answers, mockSession.elapsed);
    mockSession.submitted = true;
    mockSession.report = report;
    mockSession.paused = false;
    mockSession.navOpen = false;
    mockSession.docTab = 'all';
    mockSession.revFilter = report.missed.length ? 'missed' : 'all';
    mockSession.revPart = 0;
    mockSession.index = report.missed[0]?.index ?? 0;

    const key = String(mockSession.set);
    const prev = data.mockScores?.[key];
    data.mockScores = {
      ...(data.mockScores || {}),
      [key]: {
        bestScaled: Math.max(prev?.bestScaled || 0, report.scaled),
        bestRaw: Math.max(prev?.bestRaw || 0, report.correct),
        lastScaled: report.scaled,
        lastRaw: report.correct,
        band: toeicCefrBand(Math.max(prev?.bestScaled || 0, report.scaled)),
        attempts: (prev?.attempts || 0) + 1,
        parts: report.parts,
      },
    };
    if (data.mockProgress?.[key]) {
      const copy = { ...data.mockProgress };
      delete copy[key];
      data.mockProgress = copy;
    }
    save();
    emit('card-reviewed', { key: `mock:${mockSession.set}:${today()}` });
    paint();
  }

  function answerMock(choiceIdx) {
    if (!mockSession || mockSession.submitted || mockSession.paused) return;
    const i = mockSession.index;
    const picked = mockSession.answers[i];
    if (mockSession.examMode === 'practice' && picked !== null && picked !== undefined) return;
    mockSession.answers[i] = choiceIdx;
    persistMockProgress();
    paint();
  }

  function toggleMockFlag(idx = mockSession?.index) {
    if (!mockSession || mockSession.submitted || idx === undefined || idx === null) return;
    mockSession.flags[idx] = !mockSession.flags[idx];
    persistMockProgress();
    paint();
  }

  function gotoMockQuestion(idx) {
    if (!mockSession) return;
    const prevQ = mockSession.questions[mockSession.index];
    const nextIdx = Math.max(0, Math.min(mockSession.questions.length - 1, idx));
    const nextQ = mockSession.questions[nextIdx];
    mockSession.index = nextIdx;
    if (prevQ?.groupId !== nextQ?.groupId) mockSession.docTab = 'all';
    mockSession.navOpen = false;
    if (!mockSession.submitted && mockSession.elapsed > 0) persistMockProgress();
    paint();
  }

  function renderAnnotatedText(text, doc, activeQ, answers) {
    const str = String(text || '');
    const tokens = str.split(/(\[[1-4]\])/g);
    const frag = [];
    for (const tok of tokens) {
      const m = tok.match(/^\[([1-4])\]$/);
      if (!m) { if (tok) frag.push(tok); continue; }
      const slot = Number(m[1]);
      if (doc.baseNum) {
        const qNum = doc.baseNum + slot - 1;
        const qIdx = qNum - 101;
        const picked = answers?.[qIdx];
        const isCurrent = activeQ && activeQ.num === qNum;
        const LETTERS = ['A', 'B', 'C', 'D'];
        const filled = picked !== null && picked !== undefined;
        frag.push(el('span', {
          className: 'fc-mk-blank' + (isCurrent ? ' active' : '') + (filled ? ' filled' : ''),
          onclick: () => gotoMockQuestion(qIdx),
        }, filled ? `[${qNum} · ${LETTERS[picked]}]` : `[${qNum}]`));
      } else {
        frag.push(el('span', { className: 'fc-mk-slot' }, tok));
      }
    }
    return el('p', { className: 'fc-mk-p' }, ...frag);
  }

  function renderPassageDoc(doc, idx, totalDocs, activeQ, answers) {
    const blocks = (doc.blocks || []).map((b) => {
      if (typeof b === 'string') return renderAnnotatedText(b, doc, activeQ, answers);
      if (b?.type === 'list') return el('ul', { className: 'fc-mk-list' }, ...(b.items || []).map((it) => el('li', {}, it)));
      if (b?.type === 'table') {
        return el('div', { className: 'fc-mk-tblwrap' },
          el('table', { className: 'fc-mk-tbl' },
            ...(b.headers ? [el('thead', {}, el('tr', {}, ...b.headers.map((h) => el('th', {}, h))))] : []),
            el('tbody', {}, ...(b.rows || []).map((row) => el('tr', {}, ...row.map((cell) => el('td', {}, cell)))))));
      }
      if (b?.type === 'chat') {
        return el('div', { className: 'fc-mk-chat' }, ...(b.msgs || []).map(([who, time, body]) => el('div', { className: 'fc-mk-msg' },
          el('div', { className: 'fc-mk-msghead' }, el('b', {}, who), el('small', {}, time)),
          el('p', {}, body))));
      }
      if (b?.type === 'box') {
        return el('div', { className: 'fc-mk-box' },
          ...(b.title ? [el('strong', {}, b.title)] : []),
          ...(b.lines || []).map((line) => el('span', {}, line)));
      }
      return null;
    }).filter(Boolean);

    const metaEl = doc.meta?.length
      ? el('dl', { className: 'fc-mk-meta' }, ...doc.meta.flatMap(([k, v]) => [el('dt', {}, `${k}:`), el('dd', {}, v)]))
      : null;

    return el('article', { className: 'fc-mk-doc' },
      el('div', { className: 'fc-mk-dochead' },
        el('span', { className: 'fc-mk-dkind' }, totalDocs > 1 ? `Document ${idx + 1} · ${doc.kind || 'Reading'}` : (doc.kind || doc.kindLabel || 'Reading')),
        ...(doc.title ? [el('span', { className: 'fc-mk-dtitle' }, doc.title)] : [])),
      ...(metaEl ? [metaEl] : []),
      ...blocks);
  }

  function renderMockNavigator() {
    const qs = mockSession.questions;
    const parts = [
      ['Part 5 · Incomplete Sentences (101–130)', qs.filter((x) => x.part === 5)],
      ['Part 6 · Text Completion (131–146)', qs.filter((x) => x.part === 6)],
      ['Part 7 · Reading Comprehension (147–200)', qs.filter((x) => x.part === 7)],
    ].filter(([, arr]) => arr.length);

    return el('div', { className: 'fc-mk-nav' },
      el('div', { className: 'fc-mk-navhead' },
        el('b', {}, `Answer Sheet Navigator · ${mockSession.answers.filter((a) => a !== null && a !== undefined).length}/${qs.length} answered`),
        el('button', { type: 'button', className: 'linkish', onclick: () => { mockSession.navOpen = false; paint(); } }, 'Close ✕')),
      ...parts.map(([title, list]) => el('div', { className: 'fc-mk-navpart' },
        el('small', {}, title),
        el('div', { className: 'fc-mk-bubbles' }, ...list.map((item) => {
          const i = item.num - 101;
          const picked = mockSession.answers[i];
          const answered = picked !== null && picked !== undefined;
          let cls = 'fc-mk-bub';
          if (i === mockSession.index) cls += ' cur';
          if (mockSession.submitted) cls += (picked === item.ans ? ' ok' : ' bad');
          else if (answered) cls += ' ans';
          if (mockSession.flags[i]) cls += ' flag';
          return el('button', {
            type: 'button',
            className: cls,
            onclick: () => gotoMockQuestion(i),
          }, String(item.num));
        })))));
  }

  function sourceBar() {
    const curated = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
    const tags = [...new Set(curated.map((x) => x.tag).filter(Boolean))];
    return el('div', { className: 'fc-qz-sources', role: 'group', ariaLabel: 'Test bank' },
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'mock' ? ' active' : ''), onclick: () => { quizSource = 'mock'; paint(); } }, 'Mock Exam (30 Sets · 100 Qs)'),
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'sets' ? ' active' : ''), onclick: () => startQuiz('sets', { set: quizSet }) }, 'Part 5 Sets (20 × 50 Qs)'),
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'topic' ? ' active' : ''), onclick: () => startQuiz('topic', { tag: quizTag, count: quizCount }) }, `By Topic (${tags.length})`),
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'cards' ? ' active' : ''), onclick: () => startQuiz('cards', { count: quizCount }) }, `My Decks / Chunks (${data.cards.length})`));
  }

  function paintMock(stage) {
    const LETTERS = ['A', 'B', 'C', 'D'];
    // Lobby when no active mock test session
    if (!mockSession) {
      const doneEntries = Object.values(data.mockScores || {});
      const bestTop = doneEntries.reduce((mx, r) => Math.max(mx, r.bestScaled || 0), 0);
      const inProgKeys = Object.keys(data.mockProgress || {}).filter((k) => (data.mockProgress[k]?.answers || []).some((a) => a !== null && a !== undefined));
      const resumeKey = inProgKeys.sort((a, b) => Number(b) - Number(a))[0];
      const resumeProg = resumeKey ? data.mockProgress[resumeKey] : null;

      const resumeBanner = resumeProg
        ? el('div', { className: 'fc-mk-resume' },
            el('div', {},
              el('strong', {}, `Mock Set ${resumeKey} in progress · Q${101 + (resumeProg.index || 0)}/200`),
              el('small', {}, `${resumeProg.answers.filter((a) => a !== null && a !== undefined).length}/100 answered · ${resumeProg.examMode === 'exam' ? `${formatClock(Math.max(0, EXAM_SEC - (resumeProg.elapsed || 0)))} remaining` : 'Practice Mode'}`)),
            el('button', {
              type: 'button',
              className: 'primary',
              onclick: () => startMockExam(Number(resumeKey), { resume: true }),
            }, el('span', {}, `Resume Set ${resumeKey}`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')))
        : null;

      const grid = el('div', { className: 'fc-mk-grid', role: 'group', ariaLabel: '30 Full TOEIC Reading Mock Sets' },
        ...Array.from({ length: 30 }, (_, idx) => {
          const s = idx + 1;
          const sc = data.mockScores?.[String(s)];
          const prog = data.mockProgress?.[String(s)];
          const hasProg = prog && (prog.answers || []).some((a) => a !== null && a !== undefined);
          const isLoad = loadingMockSet === s;
          return el('button', {
            type: 'button',
            className: 'fc-mk-setcard' + (sc ? ' scored' : '') + (hasProg ? ' inprog' : '') + (isLoad ? ' disabled' : ''),
            disabled: loadingMockSet > 0,
            onclick: () => startMockExam(s, { resume: Boolean(hasProg) }),
          },
          el('b', {}, `Mock ${s}`, ...(sc ? [el('span', { className: 'fc-mk-band' }, sc.band || toeicCefrBand(sc.bestScaled))] : [])),
          el('small', {}, isLoad ? 'Loading…' : sc ? `Best ${sc.bestScaled}/495 (${sc.bestRaw}/100)` : hasProg ? `Resume Q${101 + (prog.index || 0)}` : '100 Qs · Part 5–7'));
        }));

      stage.replaceChildren(
        el('div', { className: 'fc-qz-bar' }, sourceBar()),
        el('div', { className: 'fc-mk-lobby' },
          el('div', { className: 'fc-mk-modebar' },
            el('div', { className: 'fc-mk-modepills', role: 'group', ariaLabel: 'Mock exam mode' },
              el('button', { type: 'button', className: 'tag-pill' + (mockExamMode === 'exam' ? ' active' : ''), onclick: () => { mockExamMode = 'exam'; paint(); } }, 'Exam Mode (75 min · 5–495 Score)'),
              el('button', { type: 'button', className: 'tag-pill' + (mockExamMode === 'practice' ? ' active' : ''), onclick: () => { mockExamMode = 'practice'; paint(); } }, 'Practice Mode (Untimed · Instant Review)')),
            el('span', { className: 'fc-mk-stats' }, `${doneEntries.length}/30 sets completed` + (bestTop ? ` · Peak: ${bestTop}/495` : ''))),
          ...(resumeBanner ? [resumeBanner] : []),
          grid));
      return;
    }

    // Score Report & Post-Exam Inspector when submitted
    if (mockSession.submitted && mockSession.report) {
      const r = mockSession.report;
      const filteredList = mockSession.questions.map((q, idx) => ({ q, idx, pick: mockSession.answers[idx], flag: mockSession.flags[idx] }))
        .filter(({ q, pick, flag }) => {
          if (mockSession.revPart && q.part !== mockSession.revPart) return false;
          if (mockSession.revFilter === 'missed') return pick !== q.ans;
          if (mockSession.revFilter === 'flagged') return flag;
          return true;
        });
      const activeItem = filteredList.find((x) => x.idx === mockSession.index) || filteredList[0];
      if (activeItem && activeItem.idx !== mockSession.index) mockSession.index = activeItem.idx;
      const aq = activeItem?.q;
      const aIdx = activeItem?.idx ?? 0;
      const aPick = mockSession.answers[aIdx];

      const passagePane = aq?.passages?.length
        ? el('div', { className: 'fc-mk-passage' },
            el('div', { className: 'fc-mk-phead' },
              el('span', {}, `Questions ${aq.groupRange || aq.num} · Review`)),
            ...aq.passages.map((d, di) => renderPassageDoc(d, di, aq.passages.length, aq, mockSession.answers)))
        : null;

      const reviewDetail = aq
        ? el('div', { className: 'fc-mk-split' + (passagePane ? '' : ' single') },
            ...(passagePane ? [passagePane] : []),
            el('div', { className: 'fc-mk-qpane' },
              el('div', { className: 'fc-card fc-qz-card' },
                el('div', { className: 'fc-card-meta' },
                  el('span', {}, `Q${aq.num} · Part ${aq.part} · ${aq.tag}`),
                  el('span', {}, aPick === aq.ans ? '✓ Correct' : aPick === null ? '— Skipped' : '✕ Missed')),
                el('div', { className: 'fc-qz-q' }, aq.q),
                el('div', { className: 'fc-qz-choices' }, ...aq.choices.map((ch, ci) => {
                  let cls = 'fc-qz-opt';
                  if (ci === aq.ans) cls += ' right';
                  else if (ci === aPick) cls += ' wrong';
                  else cls += ' dim';
                  return el('button', { type: 'button', className: cls, disabled: true },
                    el('b', { className: 'fc-qz-let' }, LETTERS[ci]), el('span', {}, ch));
                })),
                el('div', { className: 'fc-qz-explain ' + (aPick === aq.ans ? 'ok' : 'bad') },
                  el('strong', {}, aPick === aq.ans
                    ? `✓ Correct (${LETTERS[aq.ans]})`
                    : aPick === null || aPick === undefined
                      ? `Unanswered — Correct answer is (${LETTERS[aq.ans]}) ${aq.choices[aq.ans]}`
                      : `✕ Your pick: (${LETTERS[aPick]})  →  Correct: (${LETTERS[aq.ans]}) ${aq.choices[aq.ans]}`),
                  el('div', { className: 'fc-qz-why' }, ...String(aq.why || '').split('\n').map((line) => el('p', {}, line)))))))
        : el('p', { className: 'fc-qz-perfect' }, 'No questions match this review filter — great work!');

      stage.replaceChildren(
        el('div', { className: 'fc-mk-report' },
          el('div', { className: 'fc-mk-hud' },
            el('div', { className: 'fc-mk-hud-l' },
              el('button', { type: 'button', className: 'linkish', onclick: () => { mockSession = null; paint(); } }, '← All 30 Mock Sets'),
              el('strong', {}, `Mock Set ${mockSession.set} Score Report`)),
            el('div', { className: 'fc-mk-hud-r' },
              el('button', { type: 'button', className: 'fc-grade', onclick: () => startMockExam(mockSession.set, { resume: false }) }, el('b', {}, `Retake Set ${mockSession.set}`)),
              ...(mockSession.set < 30 ? [el('button', { type: 'button', className: 'primary', onclick: () => startMockExam(mockSession.set + 1) }, el('span', {}, `Next: Set ${mockSession.set + 1}`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))] : []))),
          el('div', { className: 'fc-mk-hero' },
            el('div', { className: 'fc-mk-hero-score' },
              el('b', {}, `${r.scaled}`),
              el('small', {}, `/ 495 · CEFR ${r.band}`)),
            el('div', {},
              el('strong', {}, `${r.correct} / ${r.total} Correct (${r.pct}%)`),
              el('small', { style: { display: 'block', color: 'var(--mute)' } }, `${mockSession.examMode === 'exam' ? `Time used: ${formatClock(r.elapsedSec)} / 75:00` : `Untimed Practice · ${formatClock(r.elapsedSec)}`}`))),
          el('div', { className: 'fc-mk-parts' },
            el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 5 · Sentences'), el('b', {}, `${r.parts[5].correct} / ${r.parts[5].total}`), el('span', {}, `${Math.round(r.parts[5].correct / (r.parts[5].total || 1) * 100)}% accuracy`)),
            el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 6 · Text Completion'), el('b', {}, `${r.parts[6].correct} / ${r.parts[6].total}`), el('span', {}, `${Math.round(r.parts[6].correct / (r.parts[6].total || 1) * 100)}% accuracy`)),
            el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 7 · Reading'), el('b', {}, `${r.parts[7].correct} / ${r.parts[7].total}`), el('span', {}, `Single ${r.parts[7].singleCorrect}/${r.parts[7].singleTotal} · Multi ${r.parts[7].multiCorrect}/${r.parts[7].multiTotal}`))),
          el('div', { className: 'fc-mk-revbar' },
            el('div', { className: 'fc-mk-modepills' },
              ...[['missed', `Missed (${r.missed.length + (r.total - r.answered)})`], ['flagged', `Flagged (${mockSession.flags.filter(Boolean).length})`], ['all', `All (${r.total})`]].map(([id, lbl]) => el('button', {
                type: 'button',
                className: 'tag-pill' + (mockSession.revFilter === id ? ' active' : ''),
                onclick: () => { mockSession.revFilter = id; paint(); },
              }, lbl))),
            el('div', { className: 'fc-mk-modepills' },
              ...[[0, 'All Parts'], [5, 'Part 5'], [6, 'Part 6'], [7, 'Part 7']].map(([p, lbl]) => el('button', {
                type: 'button',
                className: 'tag-pill' + (mockSession.revPart === p ? ' active' : ''),
                onclick: () => { mockSession.revPart = p; paint(); },
              }, lbl)))),
          ...(filteredList.length ? [el('div', { className: 'fc-mk-revstrip' }, ...filteredList.map(({ q, idx, pick, flag }) => el('button', {
            type: 'button',
            className: 'fc-mk-bub' + (idx === aIdx ? ' cur' : '') + (pick === q.ans ? ' ok' : ' bad') + (flag ? ' flag' : ''),
            onclick: () => { mockSession.index = idx; paint(); },
          }, String(q.num))))] : []),
          reviewDetail));
      return;
    }

    // Active Mock Exam / Practice workspace
    const qs = mockSession.questions;
    const i = mockSession.index;
    const q = qs[i];
    const picked = mockSession.answers[i];
    const answeredCount = mockSession.answers.filter((a) => a !== null && a !== undefined).length;
    const flaggedCount = mockSession.flags.filter(Boolean).length;
    const remainingSec = Math.max(0, EXAM_SEC - mockSession.elapsed);
    const sameGroup = q.groupId ? qs.map((x, qi) => ({ num: x.num, qi })).filter((x) => qs[x.qi].groupId === q.groupId) : [];

    const hud = el('div', { className: 'fc-mk-hud' },
      el('div', { className: 'fc-mk-hud-l' },
        el('button', { type: 'button', className: 'linkish', onclick: () => { persistMockProgress(); stopMockTimer(); mockSession = null; paint(); } }, '← Exit & Save'),
        el('strong', {}, `Mock ${mockSession.set}`),
        el('span', { className: 'fc-mk-partpill' }, `Part ${q.part} · Q${q.num}/200`)),
      el('div', { className: 'fc-mk-hud-r' },
        ...(mockSession.examMode === 'exam'
          ? [
              el('span', { id: 'fc-mk-timer', className: 'fc-mk-timer' + (remainingSec <= 300 ? ' warn' : '') }, formatClock(remainingSec)),
              el('button', { type: 'button', className: 'tag-pill', onclick: () => { mockSession.paused = !mockSession.paused; persistMockProgress(); paint(); } }, mockSession.paused ? 'Resume' : 'Pause'),
            ]
          : [el('span', { className: 'fc-mk-partpill' }, 'Practice Mode')]),
        el('span', { className: 'fc-mk-prog' }, `${answeredCount}/100 done${flaggedCount ? ` · ⚑ ${flaggedCount}` : ''}`),
        el('button', { type: 'button', className: 'tag-pill' + (mockSession.navOpen ? ' active' : ''), onclick: () => { mockSession.navOpen = !mockSession.navOpen; paint(); } }, 'Grid 101–200'),
        el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => submitMockExam(false) }, 'Submit Exam')));

    if (mockSession.paused) {
      stage.replaceChildren(hud,
        el('div', { className: 'fc-mk-pausebox' },
          el('h3', {}, `Mock Exam Set ${mockSession.set} Paused`),
          el('p', {}, `Progress is saved (${answeredCount}/100 answered · ${formatClock(remainingSec)} left).`),
          el('button', { type: 'button', className: 'primary', onclick: () => { mockSession.paused = false; paint(); } }, el('span', {}, 'Resume Test'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))));
      return;
    }

    const docs = q.passages || [];
    const showSingleDocIdx = mockSession.docTab === 'all' ? -1 : Number(mockSession.docTab);
    const visibleDocs = docs.map((d, di) => ({ d, di })).filter(({ di }) => showSingleDocIdx < 0 || di === showSingleDocIdx);

    const passagePane = docs.length
      ? el('div', { className: 'fc-mk-passage' },
          el('div', { className: 'fc-mk-phead' },
            el('span', {}, q.part === 6
              ? `Questions ${q.groupRange} refer to the following passage.`
              : `Questions ${q.groupRange} refer to the following ${docs.length >= 3 ? 'three passages' : docs.length === 2 ? 'two passages' : 'passage'}.`),
            ...(docs.length > 1
              ? [el('div', { className: 'fc-mk-doctabs' },
                  el('button', { type: 'button', className: 'tag-pill' + (mockSession.docTab === 'all' ? ' active' : ''), onclick: () => { mockSession.docTab = 'all'; paint(); } }, 'All docs'),
                  ...docs.map((_, di) => el('button', { type: 'button', className: 'tag-pill' + (String(mockSession.docTab) === String(di) ? ' active' : ''), onclick: () => { mockSession.docTab = String(di); paint(); } }, `Doc ${di + 1}`)))]
              : [])),
          ...visibleDocs.map(({ d, di }) => renderPassageDoc(d, di, docs.length, q, mockSession.answers)))
      : null;

    const showImmediate = mockSession.examMode === 'practice' && picked !== null && picked !== undefined;
    const choiceBtns = q.choices.map((ch, ci) => {
      let cls = 'fc-qz-opt fc-mk-opt';
      if (showImmediate) {
        if (ci === q.ans) cls += ' right';
        else if (ci === picked) cls += ' wrong';
        else cls += ' dim';
      } else if (picked === ci) {
        cls += ' picked';
      }
      return el('button', {
        type: 'button',
        className: cls,
        disabled: showImmediate,
        onclick: () => answerMock(ci),
      }, el('b', { className: 'fc-qz-let' }, LETTERS[ci]), el('span', {}, ch));
    });

    const qCard = el('div', { className: 'fc-card fc-qz-card' },
      el('div', { className: 'fc-card-meta' },
        el('span', {}, `Question ${q.num} · ${q.tag}`),
        el('button', { type: 'button', className: 'fc-mk-flagbtn' + (mockSession.flags[i] ? ' active' : ''), onclick: () => toggleMockFlag(i) }, mockSession.flags[i] ? '⚑ Flagged (F)' : '⚑ Flag (F)')),
      el('div', { className: 'fc-qz-q' }, q.q),
      el('div', { className: 'fc-qz-choices' }, ...choiceBtns),
      ...(showImmediate
        ? [el('div', { className: 'fc-qz-explain ' + (picked === q.ans ? 'ok' : 'bad') },
            el('strong', {}, picked === q.ans ? `✓ Correct (${LETTERS[q.ans]})` : `✕ Incorrect — Correct answer is (${LETTERS[q.ans]}) ${q.choices[q.ans]}`),
            el('div', { className: 'fc-qz-why' }, ...String(q.why || '').split('\n').map((line) => el('p', {}, line))))]
        : []),
      el('div', { className: 'fc-mk-qfoot' },
        el('button', { type: 'button', className: 'tag-pill', disabled: i === 0, onclick: () => gotoMockQuestion(i - 1) }, '← Prev'),
        ...(sameGroup.length > 1
          ? [el('div', { className: 'fc-mk-grppills' }, ...sameGroup.map(({ num, qi }) => el('button', {
              type: 'button',
              className: 'fc-mk-bub' + (qi === i ? ' cur' : '') + (mockSession.answers[qi] !== null && mockSession.answers[qi] !== undefined ? ' ans' : '') + (mockSession.flags[qi] ? ' flag' : ''),
              onclick: () => gotoMockQuestion(qi),
            }, String(num))))]
          : []),
        i + 1 < qs.length
          ? el('button', { type: 'button', className: 'primary fc-qz-next', onclick: () => gotoMockQuestion(i + 1) }, el('span', {}, 'Next'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))
          : el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => submitMockExam(false) }, 'Finish & Submit →')));

    const navEl = mockSession.navOpen ? renderMockNavigator() : null;
    stage.replaceChildren(
      hud,
      ...(navEl ? [navEl] : []),
      el('div', { className: 'fc-mk-split' + (passagePane ? '' : ' single') },
        ...(passagePane ? [passagePane] : []),
        el('div', { className: 'fc-mk-qpane' }, qCard)));
  }

  function startQuiz(source = quizSource, { set = quizSet, tag = quizTag, count = quizCount } = {}) {
    quizSource = source;
    if (source === 'mock') { paint(); return; }
    quizSet = Number(set) || 1;
    quizTag = tag;
    quizCount = count;
    const curated = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
    const questions = quizSource === 'sets'
      ? buildCuratedQuiz(curated, { count: 0, set: quizSet, shuffle: false })
      : quizSource === 'topic'
        ? buildCuratedQuiz(curated, { count: quizCount, tag: quizTag })
        : buildCardQuiz(data.cards, { count: quizCount, deck: activeDeck });
    quizState = { source: quizSource, set: quizSet, questions, answers: new Array(questions.length).fill(null), index: 0, recorded: false };
    paint();
  }

  function advanceQuiz() {
    if (!quizState) return;
    quizState.index++;
    if (quizState.index >= quizState.questions.length && quizState.source === 'sets' && quizState.set && !quizState.recorded) {
      quizState.recorded = true;
      const sc = scoreQuiz(quizState.questions, quizState.answers);
      const key = String(quizState.set);
      const prev = data.quizScores?.[key];
      data.quizScores = {
        ...(data.quizScores || {}),
        [key]: {
          last: sc.correct,
          best: Math.max(prev?.best || 0, sc.correct),
          total: sc.total,
          pct: Math.max(prev?.pct || 0, sc.pct),
        },
      };
      save();
    }
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
    if (quizSource === 'mock') { paintMock(stage); return; }
    const curated = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
    const tags = [...new Set(curated.map((x) => x.tag).filter(Boolean))];
    const setNums = [...new Set(curated.map((x) => Number(x.set)).filter((n) => n > 0))].sort((a, b) => a - b);
    const doneSets = setNums.filter((n) => data.quizScores?.[String(n)]).length;
    const fsrsChk = el('input', { type: 'checkbox', checked: quizSyncFsrs });
    fsrsChk.onchange = () => { quizSyncFsrs = fsrsChk.checked; };
    const topicSel = quizSource === 'topic'
      ? el('select', {
          id: 'fc-qz-topic',
          className: 'fc-qz-sel',
          ariaLabel: 'Grammar topic filter',
          onchange: (e) => startQuiz('topic', { tag: e.target.value, count: quizCount }),
        }, el('option', { value: '' }, `All topics (${curated.length})`), ...tags.map((tg) => el('option', { value: tg, selected: quizTag === tg }, tg)))
      : null;

    const setGrid = quizSource === 'sets' && setNums.length
      ? el('div', { className: 'fc-qz-set-grid', role: 'group', ariaLabel: 'Part 5 Test Sets 1 to 20' },
          ...setNums.map((n) => {
            const rec = data.quizScores?.[String(n)];
            return el('button', {
              type: 'button',
              className: 'fc-qz-set-btn' + (quizSet === n ? ' active' : '') + (rec ? ' done' : ''),
              onclick: () => startQuiz('sets', { set: n }),
            }, el('b', {}, `Set ${n}`), ...(rec ? [el('small', {}, `${rec.best}/${rec.total}`)] : []));
          }))
      : null;

    const optsRow = quizSource === 'sets'
      ? el('div', { className: 'fc-qz-opts' },
          el('span', { className: 'fc-qz-info' }, `Set ${quizSet} · ${quizState?.questions?.length || 50} Qs`),
          el('span', { className: 'fc-qz-sub' }, `${doneSets}/${setNums.length} sets scored`),
          el('button', { type: 'button', className: 'linkish fc-qz-new', onclick: () => startQuiz('sets', { set: quizSet }) }, `Restart Set ${quizSet} ↻`))
      : el('div', { className: 'fc-qz-opts' },
          ...(topicSel ? [topicSel] : [el('label', { className: 'fc-qz-sync' }, fsrsChk, ' Update FSRS')]),
          ...[[10, '10 Qs'], [20, '20 Qs'], [0, 'All']].map(([n, lbl]) => el('button', {
            type: 'button',
            className: 'tag-pill' + (quizCount === n ? ' active' : ''),
            onclick: () => startQuiz(quizSource, { tag: quizTag, count: n }),
          }, lbl)),
          el('button', { type: 'button', className: 'linkish fc-qz-new', onclick: () => startQuiz(quizSource, { tag: quizTag, count: quizCount }) }, 'New set ↻'));

    const toolbar = el('div', { className: 'fc-qz-bar' },
      sourceBar(),
      optsRow,
      ...(setGrid ? [setGrid] : []));
    const finishMount = () => { if (topicSel && typeof enhanceSelect === 'function') enhanceSelect(topicSel); };

    if (!quizState || !quizState.questions.length) {
      stage.replaceChildren(toolbar, el('div', { className: 'fc-done-box' },
        el('h3', {}, quizSource === 'cards' ? 'Need at least 4 cards in your decks' : 'No questions found'),
        el('p', {}, quizSource === 'cards' ? 'Load one of the TOEIC Chunk Packs above or add 4 cards to test yourself.' : 'Switch topics or select a test set above to begin.')));
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
          quizState = { source: 'retry', set: quizSet, questions: qs, answers: new Array(qs.length).fill(null), index: 0, recorded: false };
          paint();
        },
      }, el('span', {}, `Retry ${sc.missed.length} missed`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')) : null;
      const nextSetBtn = quizSource === 'sets' && quizSet < (setNums[setNums.length - 1] || 20)
        ? el('button', { type: 'button', className: 'fc-grade', onclick: () => startQuiz('sets', { set: quizSet + 1 }) }, el('b', {}, `Next: Set ${quizSet + 1} →`))
        : null;

      stage.replaceChildren(toolbar,
        el('div', { className: 'fc-qz-summary' },
          el('div', { className: 'fc-qz-scoreline' },
            el('div', {}, el('small', {}, quizSource === 'sets' ? `Set ${quizSet} score` : 'Test score'), el('b', {}, `${sc.correct} / ${sc.total} (${sc.pct}%)`)),
            el('div', { className: 'fc-qz-sum-acts' },
              ...(retryBtn ? [retryBtn] : []),
              ...(nextSetBtn ? [nextSetBtn] : []),
              el('button', { type: 'button', className: 'fc-grade', onclick: () => startQuiz(quizSource, { set: quizSet, tag: quizTag, count: quizCount }) }, el('b', {}, quizSource === 'sets' ? `Retake Set ${quizSet}` : 'Start another test')))),
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
      onclick: advanceQuiz,
    }, el('span', {}, index + 1 < questions.length ? 'Next question (Enter)' : 'Finish & see score'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'));

    const cardEl = el('div', { className: 'fc-card fc-qz-card' },
      el('div', { className: 'fc-card-meta' },
        el('span', {}, `${q.set && quizSource === 'sets' ? `Set ${q.set} · ` : ''}${q.tag} · Q${index + 1}/${questions.length}`),
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
    const isMockActive = mode === 'quiz' && quizSource === 'mock' && Boolean(mockSession);
    root()?.classList?.toggle('mock-active', isMockActive);
    $('fc-m-study').ariaSelected = String(mode === 'study');
    if ($('fc-m-quiz')) $('fc-m-quiz').ariaSelected = String(mode === 'quiz');
    $('fc-m-browse').ariaSelected = String(mode === 'browse');
    const qAll = studyQueue(data.cards, t, { newLimit: effectiveLimit(), newDoneToday: newDone(t) });
    const s = deckSummary(data.cards, t);
    const fig = (label, value) => el('div', {}, el('small', {}, label), el('b', {}, value));
    if ($('fc-sum')) {
      $('fc-sum').hidden = isMockActive;
      $('fc-sum').replaceChildren(
        fig('Due today', String(qAll.queue.length)),
        fig('Mastered (10+ days)', String(s.mastered)),
        fig('Total cards', String(s.total)));
    }

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
    deckBar.hidden = !s.decks.length || (mode === 'quiz' && quizSource !== 'cards');
    if (s.decks.length) {
      deckBar.replaceChildren(
        el('button', { type: 'button', className: 'tag-pill' + (!activeDeck ? ' active' : ''), onclick: () => { activeDeck = ''; revealed = false; if (mode === 'quiz') startQuiz('cards', { count: quizCount }); else paint(); } }, 'All decks'),
        ...s.decks.map((d) => el('button', { type: 'button', className: 'tag-pill' + (activeDeck === d ? ' active' : ''), onclick: () => { activeDeck = activeDeck === d ? '' : d; revealed = false; if (mode === 'quiz') startQuiz('cards', { count: quizCount }); else paint(); } }, d)));
    }
    if (mode !== 'quiz') paintPacks();
    else if ($('fc-packs')) $('fc-packs').hidden = true;

    const stage = $('fc-stage');
    if (mode === 'quiz') { paintQuiz(stage); syncMockTimer(); return; }
    syncMockTimer();
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

  const group = { module: 'cards', title: 'Flashcards', items: [['Space', 'Reveal answer'], ['1 2 3 4', 'Grade card / pick A B C D'], ['Enter / Arrows', 'Next / prev question'], ['F', 'Flag mock question'], ['N', 'New card']] };
  const commandFn = () => [
    { label: 'Study flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'study'; paint(); } },
    { label: 'TOEIC: Full Reading Mock Exam (30 Sets × 100 Qs)', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; quizSource = 'mock'; paint(); } },
    { label: 'TOEIC: Part 5 Practice Sets (20 × 50 Qs)', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; startQuiz('sets', { set: quizSet || 1 }); } },
    { label: 'TOEIC: Practice Test by Grammar Topic', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; startQuiz('topic', { tag: quizTag, count: quizCount || 10 }); } },
    { label: 'Quiz from my flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; startQuiz('cards', { count: 10 }); } },
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
      data = { cards: [], newLimit: 20, newLog: { day: '', count: 0 }, extraToday: 0, quizScores: {}, mockScores: {}, mockProgress: {}, ...(moduleData.cards || {}) };
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
    },
    stop() {
      persistMockProgress();
      stopMockTimer();
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
      if (mode === 'quiz' && quizSource === 'mock' && mockSession) {
        if (!mockSession.submitted && !mockSession.paused) {
          const cur = mockSession.index;
          const picked = mockSession.answers[cur];
          const answered = picked !== null && picked !== undefined;
          if (num >= 1 && num <= 4) { e.preventDefault(); answerMock(num - 1); }
          else if (e.code === 'KeyF') { e.preventDefault(); toggleMockFlag(cur); }
          else if (e.key === 'ArrowLeft') { e.preventDefault(); gotoMockQuestion(cur - 1); }
          else if (e.key === 'ArrowRight' || (e.key === 'Enter' && answered)) { e.preventDefault(); gotoMockQuestion(cur + 1); }
        }
        return;
      }
      if (mode === 'quiz' && quizState) {
        const curIdx = quizState.index;
        const q = quizState.questions[curIdx];
        if (!q) return;
        const answered = quizState.answers[curIdx] !== null && quizState.answers[curIdx] !== undefined;
        if (!answered && num >= 1 && num <= 4) { e.preventDefault(); answerQuiz(num - 1); }
        else if (answered && (e.key === 'Enter' || e.code === 'Space')) { e.preventDefault(); advanceQuiz(); }
        return;
      }
      if (mode === 'study' && e.code === 'Space') { e.preventDefault(); if (!revealed) { revealed = true; paint(); } }
      else if (mode === 'study' && revealed && num >= 1 && num <= 4) { e.preventDefault(); gradeCurrent(num); }
    },
  });
})();
