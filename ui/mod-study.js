(() => {
  const sizes = [10, 20, 50, 100, 200];
  const grades = ['Again', 'Hard', 'Good', 'Easy'];
  const libraries = [['Oxford · ', 'Oxford 3000'], ['Oxford 5000 · ', 'Oxford 5000 Advance'],
    ['Oxford Phrases · ', 'Oxford Phrase List'], ['Daily · ', 'Everyday'], ['TOEIC · ', 'TOEIC']];
  let session = null;
  let revealed = false;
  let busy = false;
  let refreshTimer;
  let speaking = null;
  const language = () => $('study-language').value;

  const choices = (id, label, values, onchange) => el('div', { className: 'study-field' },
    el('span', {}, label),
    el('select', { id, ariaLabel: label, onchange }, ...values.map(([value, title]) => el('option', { value }, title))));

  function scoped() {
    const { cards, effectiveLimit, newDoneToday } = registry.cards.studyData(language());
    const filter = $('study-deck').value;
    const selected = cards.filter((card) => !filter || (filter.startsWith('group:')
      ? (card.deck || 'General').startsWith(filter.slice(6)) : (card.deck || 'General') === filter.slice(5)));
    return { cards, selected, newLimit: effectiveLimit, newDoneToday };
  }

  function updateSetup() {
    clearTimeout(refreshTimer);
    const { cards, selected, newLimit, newDoneToday } = scoped();
    const now = Date.now();
    const due = studyQueue(selected, localDay(new Date(now)), { newLimit, newDoneToday, now }).queue.length;
    const count = Number($('study-size').value);
    $('study-test').disabled = !selected.length;
    $('study-due').disabled = !due;
    $('study-due').textContent = `Review due (${due})`;
    const pack = STUDY_LANGUAGE_PACKS[language()];
    const keys = new Set(cards.map(cardKey));
    const starter = $('study-starter');
    starter.hidden = !pack || pack.cards.every(([front]) => keys.has(cardKey({ front, language: pack.language })));
    if (pack) starter.textContent = `Add ${pack.deck} cards`;
    $('study-hsk').hidden = language() !== 'zh';
    $('study-available').textContent = !selected.length
      ? (cards.length ? 'No cards in this deck.' : 'No cards in this language yet.')
      : selected.length < count
        ? `Only ${selected.length} cards available. The test will use all of them.`
        : 'Test ratings update your review schedule.';
    if (!session && view === 'study') refreshTimer = setTimeout(updateSetup, 15000);
  }

  function startSession(kind) {
    const { selected, newLimit, newDoneToday } = scoped();
    const now = Date.now();
    const cards = kind === 'test'
      ? studySample(selected, Number($('study-size').value))
      : studyQueue(selected, localDay(new Date(now)), { newLimit, newDoneToday, now, rng: Math.random }).queue;
    if (!cards.length) { updateSetup(); return; }
    session = { kind, ids: cards.map((card) => card.id), index: 0, counts: [0, 0, 0, 0] };
    revealed = false;
    $('study-result').replaceChildren();
    paintSession(true);
  }

  function stopSession(focus = true) {
    stopPronunciation();
    session = null;
    revealed = false;
    $('study-session').replaceChildren();
    $('study-setup').hidden = false;
    updateSetup();
    if (focus) ($('study-test').disabled ? $('study-library') : $('study-test')).focus();
  }

  const intervalLabel = (days) => {
    const minutes = Math.max(1, Math.round(days * 1440));
    return minutes < 1440 ? minutesLabel(minutes) : `${Math.round(days * 10) / 10} d`;
  };

  function reveal() {
    if (!session || revealed) return;
    revealed = true;
    paintSession(true);
  }

  async function addHsk() {
    const band = $('study-hsk-level').value;
    const button = $('study-hsk-add');
    const status = $('study-hsk-status');
    button.disabled = true;
    status.textContent = 'Loading vocabulary…';
    try {
      if (typeof HSK_2025 === 'undefined') await loadFile('script', { src: 'hsk-2025.js' });
      if (!button.isConnected) return;
      const added = registry.cards.importStudyCards(hskStudyItems(band, HSK_2025[band]));
      const deck = hskDeck(band);
      show();
      if (language() === 'zh') {
        $('study-deck').value = 'deck:' + deck;
        updateSetup();
      }
      status.textContent = added ? `Added ${added.toLocaleString('en-US')} cards to ${deck}.` : `${deck} is already added.`;
    } catch {
      status.textContent = 'Could not load HSK vocabulary. Try again.';
    } finally {
      button.disabled = false;
    }
  }

  function stopPronunciation() {
    if (!speaking) return;
    speaking = null;
    window.speechSynthesis?.cancel();
  }

  function playPronunciation(card) {
    const status = $('study-audio-status');
    stopPronunciation();
    const speech = window.speechSynthesis;
    const voice = mandarinVoice(speech?.getVoices() || []);
    if (!voice || typeof SpeechSynthesisUtterance === 'undefined') {
      status.textContent = 'Add a Chinese (Simplified, China) text-to-speech voice in your device settings and restart Vermil.';
      return;
    }
    const utterance = new SpeechSynthesisUtterance(card.front);
    utterance.lang = voice.lang;
    utterance.voice = voice;
    utterance.rate = 0.85;
    const finish = (message) => {
      if (speaking !== utterance) return;
      speaking = null;
      status.textContent = message;
    };
    utterance.onend = () => finish('');
    utterance.onerror = () => finish('Could not play Mandarin audio. Try again.');
    speaking = utterance;
    status.textContent = 'Playing…';
    speech.speak(utterance);
  }

  async function rate(id, grade) {
    if (!session || !revealed || busy || session.ids[session.index] !== id) return;
    stopPronunciation();
    const run = session;
    const now = Date.now();
    busy = true;
    try {
      if (await registry.cards.rateCard(id, grade, now)) {
        run.counts[grade - 1]++;
        emit('card-reviewed', { key: `card:${id}:${localDay(new Date(now))}` });
      }
    } catch (error) {
      tell('Could not save your rating: ' + (error.message || error));
      return;
    } finally {
      busy = false;
    }
    if (session !== run) return;
    run.index++;
    revealed = false;
    paintSession(true);
  }

  function paintSession(focus = false) {
    if (!session) return;
    clearTimeout(refreshTimer);
    const { cards } = registry.cards.studyData();
    const { ids, counts, kind } = session;
    let card;
    while (session.index < ids.length) {
      card = cards.find((candidate) => candidate.id === ids[session.index]);
      if (card) break;
      session.index++;
      revealed = false;
    }
    if (!card) {
      const rated = counts.reduce((a, b) => a + b, 0);
      $('study-result').replaceChildren(
        el('h3', {}, kind === 'test' ? 'Test complete' : 'Review complete'),
        el('p', {}, `${rated} cards rated · ${grades.map((label, i) => `${label} ${counts[i]}`).join(' · ')}`));
      stopSession(focus);
      return;
    }
    $('study-setup').hidden = true;
    const now = Date.now();
    const preview = revealed ? fsrsPreview(card, now) : null;
    const recall = fsrsRetrievability(card, now);
    const hsk = Number.isInteger(card.hskId);
    if (hsk) window.speechSynthesis?.getVoices(); // The available voices can arrive asynchronously.
    $('study-session').replaceChildren(
      el('div', { className: 'study-progress' },
        el('span', { role: 'status' }, `${kind === 'test' ? 'Test' : 'Review'} · ${session.index + 1} / ${ids.length}`),
        el('button', { type: 'button', className: 'linkish', onclick: () => { if (!busy) stopSession(); } }, 'End session')),
      el('article', { className: 'fc-card study-card' },
        el('div', { className: 'fc-card-meta' }, el('span', {}, card.deck || 'General'),
          el('span', {}, recall === null ? (card.lastReviewed ? 'Reviewed before' : 'New card') : `${Math.round(recall * 100)}% recall`)),
        el('div', { className: 'fc-card-front', lang: cardLanguage(card) }, registry.cards.front(card.front, card.pos)),
        ...(hsk ? [el('div', { className: 'study-speech' },
          el('button', { id: 'study-audio', type: 'button', className: 'ghost', onclick: () => playPronunciation(card) }, 'Play pronunciation'),
          el('span', { id: 'study-audio-status', role: 'status' }))] : []),
        ...(revealed ? [
          el('div', { className: 'fc-card-back', ...(hsk ? { lang: 'zh-Latn-pinyin' } : {}) }, card.back),
          ...(card.example ? [el('p', { className: 'fc-card-example' }, card.example)] : []),
          el('div', { className: 'fc-card-acts fc-grades', role: 'group', ariaLabel: 'Rate your recall' },
            ...grades.map((label, i) => el('button', { type: 'button', className: 'fc-grade ' + label.toLowerCase(), title: `${label} (${i + 1})`, onclick: () => rate(card.id, i + 1) },
              el('b', {}, label), el('small', {}, intervalLabel(preview[i + 1]))))),
        ] : [el('button', { id: 'study-reveal', type: 'button', className: 'primary fc-reveal-btn', onclick: reveal },
          el('span', {}, 'Show answer'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))])));
    if (focus && view === 'study') $('study-session').querySelector(revealed ? '.fc-grade' : '#study-reveal')?.focus();
  }

  function show() {
    const { cards, newLimit } = registry.cards.studyData(language());
    const names = [...new Set(cards.map((card) => card.deck || 'General'))].sort();
    const deck = $('study-deck');
    const selected = deck.value;
    deck.replaceChildren(el('option', { value: '' }, 'All decks'),
      ...libraries.filter(([prefix]) => names.some((name) => name.startsWith(prefix)))
        .map(([prefix, label]) => el('option', { value: 'group:' + prefix }, label + ' (All)')),
      ...names.map((name) => el('option', { value: 'deck:' + name }, name)));
    deck.value = [...deck.options].some((option) => option.value === selected) ? selected : '';
    $('study-limit').value = String(newLimit);
    if (session) paintSession();
    else updateSetup();
  }

  function changeLanguage() {
    try { localStorage.setItem('study-language', language()); } catch {}
    $('study-deck').value = '';
    $('study-result').replaceChildren();
    show();
  }

  const commands = () => [{ label: 'Study flashcards', hint: 'Study', kind: 'Command', run: () => setView('study') }];
  const shortcuts = { module: 'study', title: 'Study', items: [['Space', 'Reveal answer'], ['1 2 3 4', 'Rate recall']] };
  defineModule('study', {
    summary() {
      const { cards } = registry.cards.studyData();
      if (!cards.length) return null;
      const day = localDay(new Date());
      const due = registry.cards.dueTotal();
      const { mastered, total } = deckSummary(cards, day);
      return { label: 'Study', value: String(due), unit: 'due now', warn: due > 0, sub: `${mastered} of ${total} mastered` };
    },
    async start() {
      if (typeof STUDY_LANGUAGE_PACKS === 'undefined') await loadFile('script', { src: 'study-language-packs.js', id: 'script-study-languages' });
      $('study-view').replaceChildren(el('section', { className: 'study-main', ariaLabel: 'Study' },
        el('header', { className: 'fc-head study-head' },
          el('h2', {}, 'Study'), el('small', {}, 'FSRS-7')),
        el('div', { id: 'study-setup' },
          el('div', { className: 'study-fields' },
            choices('study-language', 'Language', CARD_LANGUAGES, changeLanguage),
            choices('study-deck', 'Deck', [['', 'All decks']], updateSetup),
            choices('study-size', 'Cards per test', sizes.map((n) => [n, String(n)]), updateSetup),
            choices('study-limit', 'New cards per day', [[20, '20'], [50, '50'], [0, 'All']], (e) => {
              registry.cards.setStudyLimit(Number(e.target.value));
              updateSetup();
            })),
          el('div', { className: 'study-actions' },
            el('button', { id: 'study-test', className: 'primary', type: 'button', onclick: () => startSession('test') },
              el('span', {}, 'Start test'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
            el('button', { id: 'study-due', className: 'ghost', type: 'button', onclick: () => startSession('due') }, 'Review due'),
            el('button', { id: 'study-starter', className: 'ghost', type: 'button', hidden: true, onclick: () => {
              registry.cards.importStudyPack(STUDY_LANGUAGE_PACKS[language()]);
              show();
            } }, 'Add starter cards'),
            el('button', { id: 'study-library', className: 'linkish', type: 'button', onclick: () => {
              registry.cards.setCardLanguage(language());
              setView('cards');
            } }, 'Open Cards')),
          el('p', { id: 'study-available', role: 'status' }),
          el('details', { id: 'study-hsk', className: 'study-hsk', hidden: true },
            el('summary', {}, 'HSK 3.0 vocabulary'),
            el('div', { className: 'study-hsk-controls' },
              choices('study-hsk-level', 'HSK level', HSK_BANDS.map(([band, count]) => [band, `${hskDeck(band)} · ${count.toLocaleString('en-US')} entries`])),
              el('button', { id: 'study-hsk-add', className: 'ghost', type: 'button', onclick: addHsk }, 'Add HSK deck')),
            el('p', { id: 'study-hsk-status', role: 'status' })),
          el('div', { id: 'study-result', role: 'status' })),
        el('div', { id: 'study-session' })));
      for (const id of ['study-language', 'study-deck', 'study-size', 'study-limit', 'study-hsk-level']) enhanceSelect($(id));
      try {
        const saved = localStorage.getItem('study-language');
        if (CARD_LANGUAGES.some(([id]) => id === saved)) $('study-language').value = saved;
      } catch {}
      commandHooks.push(commands);
      shortcutGroups.push(shortcuts);
      show();
    },
    stop() {
      clearTimeout(refreshTimer);
      stopPronunciation();
      session = null;
      commandHooks.splice(commandHooks.indexOf(commands), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(shortcuts), 1);
    },
    leave: stopPronunciation,
    show,
    keys(e) {
      if (!session || e.repeat || e.ctrlKey || e.altKey || e.metaKey || e.target.closest?.('.dd, input, select, textarea')) return;
      if (!revealed && e.code === 'Space' && (!e.target.closest?.('button') || e.target.id === 'study-reveal')) {
        e.preventDefault();
        reveal();
      } else if (revealed && /^(Digit|Numpad)[1-4]$/.test(e.code)) {
        e.preventDefault();
        rate(session.ids[session.index], Number(e.code.at(-1)));
      }
    },
  });
})();
