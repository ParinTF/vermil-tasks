// Spaced Flashcards module: FSRS-4.5 DSR spaced-repetition scheduler + Oxford 3000 & Advance Oxford 5000 (POS) + 1,000 Everyday + 1,000 TOEIC chunks
// + Part 5 quizzes + 30 Full TOEIC Listening & Reading Mock Exams (Q1-100 Listening / Q101-200 Reading / Full 200-Q 10-990 scoring).
// Data: { cards, newLimit, advanceMode, newLog, extraToday, quizScores, mockScores, listenScores, fullScores, mockProgress }.
(() => {
  let data = { cards: [], newLimit: 20, advanceMode: false, newLog: { day: '', count: 0 }, extraToday: 0, quizScores: {}, mockScores: {}, listenScores: {}, fullScores: {}, mockProgress: {} };
  let mode = 'study'; // 'study' | 'quiz' | 'browse'
  let activeDeck = '';
  let revealed = false;
  let quizSource = 'mock'; // 'mock' | 'sets' | 'topic' | 'cards'
  let quizSet = 1;
  let quizTag = '';
  let quizCount = 10;
  let quizSyncFsrs = true;
  let quizState = null;

  let mockSection = 'listening'; // 'listening' | 'reading' | 'full'
  let mockExamMode = 'exam'; // 'exam' | 'practice'
  let mockSession = null;
  let pendingPackSet = 0; // set waiting on volume download/preview choice
  let loadingMockSet = 0;
  let mockTimer = null;

  let packStatus = {}; // vol (1..6) -> { vol, installed, bytes }
  let packLoadingVol = 0;
  let packDownload = {}; // vol -> { loaded, total }
  let unlistenProgress = null;

  const assetCache = new Map();
  const audioState = {
    el: null,
    key: '',
    playing: false,
    loading: false,
    playedKeys: new Set(),
    currentTime: 0,
    duration: 0,
    rate: 1.0,
    autoNext: true,
    nextTimer: null,
    error: '',
  };

  const READ_EXAM_SEC = 75 * 60;
  const LISTEN_EXAM_SEC = 45 * 60;
  const tauriInvoke = (cmd, args) => (window.__TAURI__?.core?.invoke ? window.__TAURI__.core.invoke(cmd, args) : null);
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
          el('div', { className: 'fc-head-tools' },
            el('div', { className: 'fc-modes', role: 'tablist', ariaLabel: 'Flashcards mode' },
              el('button', { id: 'fc-m-study', type: 'button', role: 'tab', onclick: () => { stopMockAll(); mode = 'study'; revealed = false; paint(); } }, 'Study'),
              el('button', { id: 'fc-m-quiz', type: 'button', role: 'tab', onclick: () => { mode = 'quiz'; if (quizSource !== 'mock' && !quizState) startQuiz(); else { refreshPackStatus(); paint(); } } }, 'Test'),
              el('button', { id: 'fc-m-browse', type: 'button', role: 'tab', onclick: () => { stopMockAll(); mode = 'browse'; paint(); } }, 'All cards')),
            el('button', { id: 'fc-adv-toggle', type: 'button', className: 'fc-adv-btn', ariaPressed: 'false', onclick: toggleAdvance }, 'Advance · Oxford 5000'))),
        el('div', { id: 'fc-sum', className: 'fc-sum' }),
        el('div', { id: 'fc-pace', className: 'fc-pace', role: 'group', ariaLabel: 'Daily new card limit' }),
        el('div', { id: 'fc-decks', className: 'tag-bar', hidden: true }),
        el('div', { id: 'fc-packs', className: 'fc-packs-wrap', hidden: true }),
        el('input', { id: 'fc-search', type: 'search', placeholder: 'Search words, chunks, POS, meanings or examples…', ariaLabel: 'Search flashcards', hidden: true, oninput: paint }),
        el('div', { id: 'fc-stage' })),
      el('aside', { className: 'fc-side', ariaLabel: 'Add a flashcard' },
        el('form', { id: 'fc-form', onsubmit: add },
          el('div', { className: 'fc-form-row' },
            el('label', { className: 'fc-field' }, 'Deck', el('input', { id: 'fc-deck', maxLength: 40, autocomplete: 'off', placeholder: 'Oxford, TOEIC, AI' })),
            el('label', { className: 'fc-field' }, 'POS (optional)', el('input', { id: 'fc-pos', maxLength: 24, autocomplete: 'off', placeholder: 'n., v., adj.' }))),
          el('label', { className: 'fc-field' }, 'Front (word, meaning, or a ___ gap sentence)', el('textarea', { id: 'fc-front', rows: 3, maxLength: 300, placeholder: 'abandon  OR  All staff must ___ the rules.' })),
          el('label', { className: 'fc-field' }, 'Back (meaning or answer)', el('textarea', { id: 'fc-back', rows: 2, maxLength: 500, placeholder: 'ละทิ้ง, ทอดทิ้ง  OR  comply with' })),
          el('label', { className: 'fc-field' }, 'Example sentence (optional)', el('textarea', { id: 'fc-example', rows: 2, maxLength: 300, placeholder: 'They had to abandon the car in heavy rain.' })),
          el('p', { className: 'fc-tip' }, 'Tip: add n., v., adj. for single words so you practice both meaning and word class.'),
          el('button', { className: 'primary', type: 'submit' }, el('span', {}, 'Add card'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
          el('div', { id: 'fc-msg', className: 'fc-msg', role: 'status' }))));
    mobileSheet(root(), root().querySelector('.fc-side'), 'New card');
  }

  function add(e) {
    e.preventDefault();
    const deck = $('fc-deck').value.trim() || 'General';
    const pos = ($('fc-pos')?.value || '').trim();
    const front = $('fc-front').value.trim();
    const back = $('fc-back').value.trim();
    const example = $('fc-example').value.trim();
    if (!front || !back) { $('fc-msg').textContent = 'Fill in both the front and the back of the card.'; return; }
    data.cards.push({ id: crypto.randomUUID(), deck, front, back, ...(pos ? { pos } : {}), ...(example ? { example } : {}), box: 1, next: today(), lastReviewed: null, reviews: 0 });
    save();
    if ($('fc-pos')) $('fc-pos').value = '';
    $('fc-front').value = '';
    $('fc-back').value = '';
    $('fc-example').value = '';
    $('fc-msg').textContent = `Added card to "${deck}".`;
    paint();
    $('fc-front').focus();
  }

  function matchesDeck(card, filter) {
    if (!filter) return true;
    const d = String(card?.deck || '');
    return String(filter).split('|').filter(Boolean).some((f) => (f.endsWith('*') ? d.startsWith(f.slice(0, -1)) : d === f));
  }

  function queueState() {
    const t = today();
    const scoped = data.cards.filter((c) => matchesDeck(c, activeDeck));
    return studyQueue(scoped, t, { newLimit: effectiveLimit(), newDoneToday: newDone(t) });
  }
  const dueList = () => queueState().queue;

  function gradeCurrent(grade) {
    const list = dueList();
    const cur = list[0];
    if (!cur) return;
    const t = today();
    const wasNew = cur.reviews === 0;
    const updated = fsrsReview(cur, grade, t);
    data.cards = data.cards.map((c) => (c.id === cur.id ? updated : c));
    if (wasNew) data.newLog = { day: t, count: (data.newLog?.day === t ? data.newLog.count || 0 : 0) + 1 };
    save();
    emit('card-reviewed', { key: `card:${cur.id}:${t}` });
    revealed = false;
    paint();
  }

  function remove(card) {
    data.cards = data.cards.filter((c) => c.id !== card.id);
    save();
    paint();
  }

  const oxfordPacks = () => (typeof OXFORD_PACKS !== 'undefined' ? OXFORD_PACKS : []);
  const oxford5kPacks = () => (typeof OXFORD_5K_PACKS !== 'undefined' ? OXFORD_5K_PACKS : []);
  const oxfordPhrasePacks = () => (typeof OXFORD_PHRASE_PACKS !== 'undefined' ? OXFORD_PHRASE_PACKS : []);
  const toeicPacks = () => (typeof TOEIC_PACKS !== 'undefined' ? TOEIC_PACKS : []);
  const dailyPacks = () => (typeof DAILY_PACKS !== 'undefined' ? DAILY_PACKS : []);

  async function ensureOxford5k() {
    if (typeof OXFORD_5K_PACKS === 'undefined' && !$('script-oxford5k-pack')) {
      await loadFile('script', { src: 'oxford5k-pack.js', id: 'script-oxford5k-pack' }).catch(() => {});
    }
  }

  async function toggleAdvance(force) {
    const next = typeof force === 'boolean' ? force : !data.advanceMode;
    data.advanceMode = next;
    if (next) {
      await ensureOxford5k();
      packOpen.ox5k = true;
      packOpen.oxford = false;
    } else if (activeDeck.startsWith('Oxford 5000') || activeDeck === 'Oxford*' || activeDeck === 'Oxford · *|Oxford 5000 · *') {
      activeDeck = '';
    }
    save();
    paint();
  }
  const cardKey = (front, pos) => {
    const f = String(front || '').trim().toLowerCase();
    const p = String(pos || '').trim().toLowerCase();
    return f ? (p ? `${f}\u0000${p}` : f) : '';
  };
  const existingKeys = () => new Set(data.cards.map((c) => cardKey(c.front, c.pos)).filter(Boolean));

  function packRemaining(pack) {
    const have = existingKeys();
    return pack.cards.filter(([front, , , pos]) => !have.has(cardKey(front, pos))).length;
  }

  function packToItems(pack) {
    const deck = pack.deck || pack.label;
    return (pack.cards || []).map(([front, back, example, pos]) => ({
      deck,
      front,
      back,
      example,
      ...(pos ? { pos } : {}),
    }));
  }

  function loadPack(pack, groupLabel = 'chunks') {
    const res = importCardPack(data.cards, packToItems(pack), today());
    if (!res.added) { $('fc-msg').textContent = `All ${groupLabel} from "${pack.label}" are already in your deck.`; return; }
    data.cards = res.cards;
    save();
    $('fc-msg').textContent = `Added ${res.added} ${groupLabel} (${pack.label}).`;
    paint();
  }

  function loadAllPacks(list, groupLabel = 'chunks') {
    let total = 0;
    const t = today();
    let cur = data.cards;
    for (const p of list) {
      const res = importCardPack(cur, packToItems(p), t);
      if (res.added) { cur = res.cards; total += res.added; }
    }
    if (!total) { $('fc-msg').textContent = `All ${groupLabel} in this library are already in your collection.`; return; }
    data.cards = cur;
    save();
    $('fc-msg').textContent = `Added all ${total} ${groupLabel} across ${list.length} topics.`;
    paint();
  }

  function isField(t) {
    return t.matches('input, textarea, select') && t.type !== 'checkbox';
  }

  function formatClock(sec) {
    const s = Math.max(0, Math.floor(sec || 0));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }

  // ── Media Pack Manager (.vpack) & Listening Audio Playback ──

  function cacheSet(key, val) {
    if (assetCache.has(key)) assetCache.delete(key);
    assetCache.set(key, val);
    if (assetCache.size > 40) {
      const first = assetCache.keys().next().value;
      if (first) assetCache.delete(first);
    }
  }

  async function fetchAsset(vol, key) {
    const cacheKey = `${vol}:${key}`;
    if (assetCache.has(cacheKey)) return assetCache.get(cacheKey);
    try {
      const dataUri = await tauriInvoke('read_listening_asset', { vol, key });
      if (dataUri) cacheSet(cacheKey, dataUri);
      return dataUri || '';
    } catch {
      return '';
    }
  }

  async function refreshPackStatus() {
    if (!window.__TAURI__?.core?.invoke) return;
    try {
      const list = await tauriInvoke('listening_pack_status');
      const next = {};
      for (const it of list || []) next[it.vol] = it;
      packStatus = next;
      if (mode === 'quiz' && quizSource === 'mock') paint();
    } catch {}
  }

  async function downloadPack(vol) {
    if (packLoadingVol || !window.__TAURI__?.core?.invoke) return false;
    packLoadingVol = vol;
    packDownload[vol] = { loaded: 0, total: 0 };
    paint();
    try {
      const st = await tauriInvoke('download_listening_pack', { vol });
      assetCache.clear();
      packStatus = { ...packStatus, [vol]: st };
      packLoadingVol = 0;
      delete packDownload[vol];
      paint();
      return true;
    } catch (e) {
      packLoadingVol = 0;
      delete packDownload[vol];
      tell('Download failed: ' + (e?.message || e));
      paint();
      return false;
    }
  }

  async function removePack(vol, e) {
    e?.stopPropagation?.();
    if (packLoadingVol || !window.__TAURI__?.core?.invoke) return;
    if (!(await ask(`Remove cached Volume ${vol} audio & photo pack to free disk space?`, 'Remove'))) return;
    try {
      await tauriInvoke('delete_listening_pack', { vol });
      assetCache.clear();
      await refreshPackStatus();
    } catch (err) {
      tell('Could not remove pack: ' + (err?.message || err));
    }
  }

  function clearAudioTimers() {
    if (audioState.nextTimer) { clearTimeout(audioState.nextTimer); audioState.nextTimer = null; }
  }

  function stopAudioPlayback() {
    clearAudioTimers();
    if (audioState.el) {
      try { audioState.el.pause(); } catch {}
    }
    try { window.speechSynthesis?.cancel(); } catch {}
    audioState.playing = false;
    audioState.loading = false;
    audioState.key = '';
    audioState.currentTime = 0;
    audioState.duration = 0;
    audioState.error = '';
  }

  function updateAudioUi() {
    const tEl = $('fc-mk-audiotime');
    const fEl = $('fc-mk-trackfill');
    const sEl = $('fc-mk-seek');
    const pEl = $('fc-mk-playbtn');
    const dur = audioState.duration || 0;
    const cur = audioState.currentTime || 0;
    if (tEl) tEl.textContent = audioState.loading ? 'Loading audio…' : `${formatClock(cur)} / ${dur ? formatClock(dur) : '--:--'}`;
    if (fEl) fEl.style.width = `${dur > 0 ? Math.min(100, (cur / dur) * 100) : 0}%`;
    if (sEl && dur > 0) { sEl.max = String(dur); sEl.value = String(cur); }
    if (pEl) {
      pEl.textContent = audioState.playing ? '❚❚ Playing' : '▶ Play';
      pEl.className = 'fc-mk-playbtn' + (audioState.playing ? ' playing' : '');
    }
  }

  function pickVoice(hint = 'us', role = 'm') {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    const wantFemale = String(role).includes('w') || String(role).includes('f');
    const en = voices.filter((v) => String(v.lang || '').toLowerCase().startsWith('en'));
    if (!en.length) return null;
    const langPrefix = hint === 'uk' ? 'en-gb' : hint === 'au' ? 'en-au' : hint === 'ca' ? 'en-ca' : 'en-us';
    const byRegion = en.filter((v) => v.lang.toLowerCase().startsWith(langPrefix));
    const pool = byRegion.length ? byRegion : en;
    const fem = pool.find((v) => /zira|sonia|libby|natasha|clara|aria|jenny|female|woman/i.test(v.name));
    const mal = pool.find((v) => /david|mark|ryan|william|liam|guy|andrew|male|man/i.test(v.name));
    return (wantFemale ? fem || pool[pool.length - 1] : mal || pool[0]) || pool[0];
  }

  function speakListeningFallback(q, onFinish) {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
      audioState.error = 'Audio pack not downloaded and system speech synthesis is unavailable.';
      updateAudioUi();
      return;
    }
    window.speechSynthesis.cancel();
    const lines = [];
    if (q.part === 1) {
      lines.push([`Number ${q.num}.`, 'us', 'm']);
      ['A', 'B', 'C', 'D'].forEach((L, idx) => lines.push([`${L}. ${q.choices[idx] || ''}`, q.accent || 'us', 'm']));
    } else if (q.part === 2) {
      lines.push([`Number ${q.num}. ${q.prompt || ''}`, 'uk', 'f']);
      ['A', 'B', 'C'].forEach((L, idx) => lines.push([`${L}. ${q.choices[idx] || ''}`, 'us', 'm']));
    } else if (q.part === 3) {
      lines.push([`Questions ${q.groupRange || q.num}.`, 'us', 'm']);
      (q.scriptLines || []).forEach((line, idx) => lines.push([line.replace(/^[^:]+:\s*/, ''), idx % 2 ? 'uk' : 'us', idx % 2 ? 'm' : 'f']));
    } else {
      lines.push([`Questions ${q.groupRange || q.num}. ${q.contextLabel || ''}.`, 'us', 'm']);
      lines.push([(q.scriptLines || []).slice(1).join(' '), 'us', 'm']);
    }
    let idx = 0;
    audioState.playing = true;
    audioState.loading = false;
    updateAudioUi();
    const key = q.audioKey;
    const next = () => {
      if (!audioState.playing || audioState.key !== key) return;
      if (idx >= lines.length) {
        audioState.playing = false;
        onFinish();
        return;
      }
      const [txt, acc, role] = lines[idx++];
      const u = new SpeechSynthesisUtterance(txt);
      const v = pickVoice(acc, role);
      if (v) u.voice = v;
      u.rate = audioState.rate || 1.0;
      u.pitch = role === 'f' ? 1.08 : 0.96;
      u.onend = () => { if (audioState.key === key && audioState.playing) setTimeout(next, 420); };
      u.onerror = () => { audioState.playing = false; updateAudioUi(); };
      window.speechSynthesis.speak(u);
    };
    next();
  }

  function scheduleExamAutoNext(playedKey) {
    clearAudioTimers();
    if (!mockSession || mockSession.submitted || mockSession.paused || mockSession.examMode !== 'exam' || !audioState.autoNext) return;
    const curQ = mockSession.questions[mockSession.index];
    if (!curQ || curQ.audioKey !== playedKey) return;
    const waitMs = curQ.part <= 2 ? 2000 : 1800;
    audioState.nextTimer = setTimeout(() => {
      if (!mockSession || mockSession.submitted || mockSession.paused || mockSession.examMode !== 'exam') return;
      const qs = mockSession.questions;
      const curIdx = mockSession.index;
      if (qs[curIdx]?.audioKey !== playedKey) return;
      let nextIdx = curIdx + 1;
      while (nextIdx < qs.length && qs[nextIdx].audioKey === playedKey) nextIdx++;
      if (nextIdx < qs.length) gotoMockQuestion(nextIdx);
    }, waitMs);
  }

  async function playQuestionAudio(q, { restart = false } = {}) {
    if (!q?.audioKey) return;
    clearAudioTimers();
    const key = q.audioKey;
    const sameKey = audioState.key === key;
    if (sameKey && !restart && audioState.playing) return;

    if (!sameKey || restart) {
      if (audioState.el) { try { audioState.el.pause(); } catch {} }
      try { window.speechSynthesis?.cancel(); } catch {}
    }

    audioState.key = key;
    audioState.error = '';

    const onEnded = () => {
      audioState.playing = false;
      audioState.playedKeys.add(key);
      updateAudioUi();
      scheduleExamAutoNext(key);
    };

    if (mockSession?.ttsFallback) {
      speakListeningFallback(q, onEnded);
      return;
    }

    if (!audioState.el && typeof Audio !== 'undefined') {
      const a = new Audio();
      a.addEventListener('timeupdate', () => {
        if (audioState.key !== key) return;
        audioState.currentTime = a.currentTime || 0;
        audioState.duration = a.duration || 0;
        updateAudioUi();
      });
      a.addEventListener('loadedmetadata', () => {
        audioState.duration = a.duration || 0;
        updateAudioUi();
      });
      a.addEventListener('ended', () => {
        audioState.playing = false;
        audioState.playedKeys.add(audioState.key);
        updateAudioUi();
        scheduleExamAutoNext(audioState.key);
      });
      audioState.el = a;
    }

    if (!audioState.el) return;
    try {
      if (!sameKey || restart) {
        audioState.loading = true;
        audioState.currentTime = 0;
        audioState.duration = 0;
        updateAudioUi();
        const uri = await fetchAsset(q.vol, key);
        if (audioState.key !== key) return;
        audioState.loading = false;
        if (!uri) {
          audioState.error = 'Audio pack asset missing — download Volume pack in Lobby.';
          updateAudioUi();
          return;
        }
        audioState.el.src = uri;
        audioState.el.currentTime = 0;
      }
      audioState.el.playbackRate = audioState.rate || 1.0;
      audioState.playing = true;
      updateAudioUi();
      await audioState.el.play();
    } catch (err) {
      audioState.loading = false;
      audioState.playing = false;
      audioState.error = 'Playback error: ' + (err?.message || err);
      updateAudioUi();
    }
  }

  function toggleAudioPlayPause(q) {
    if (!q?.audioKey || !mockSession) return;
    if (mockSession.ttsFallback) {
      if (audioState.playing) { stopAudioPlayback(); updateAudioUi(); }
      else playQuestionAudio(q, { restart: true });
      return;
    }
    if (mockSession.examMode === 'exam' && !mockSession.submitted && audioState.playedKeys.has(q.audioKey)) return;
    if (audioState.key === q.audioKey && audioState.el?.src) {
      if (audioState.playing) {
        audioState.el.pause();
        audioState.playing = false;
        clearAudioTimers();
        updateAudioUi();
      } else {
        audioState.playing = true;
        audioState.el.playbackRate = audioState.rate || 1.0;
        updateAudioUi();
        audioState.el.play().catch(() => {});
      }
    } else {
      playQuestionAudio(q, { restart: true });
    }
  }

  // ── Mock Progress & Session Lifecycle ──

  function progressKeyFor(sess = mockSession) {
    if (!sess) return '';
    if (sess.isFull) return `F${sess.set}`;
    return sess.stage === 'listening' ? `L${sess.set}` : String(sess.set);
  }

  function persistMockProgress() {
    if (!mockSession || mockSession.submitted) return;
    const key = progressKeyFor(mockSession);
    if (!key) return;
    const entry = {
      answers: mockSession.answers,
      flags: mockSession.flags,
      elapsed: mockSession.elapsed,
      index: mockSession.index,
      examMode: mockSession.examMode,
      ttsFallback: Boolean(mockSession.ttsFallback),
      ...(mockSession.isFull ? {
        isFull: true,
        stage: mockSession.stage,
        intermission: Boolean(mockSession.intermission),
        stage1Answers: mockSession.stage1?.answers || null,
        stage1Flags: mockSession.stage1?.flags || null,
        stage1Elapsed: mockSession.stage1?.elapsed || 0,
      } : {}),
    };
    data.mockProgress = { ...(data.mockProgress || {}), [key]: entry };
    save();
  }

  function stopMockTimer() {
    if (mockTimer) { clearInterval(mockTimer); mockTimer = null; }
  }

  function stopMockAll() {
    stopMockTimer();
    stopAudioPlayback();
  }

  function sectionLimitSec(sess = mockSession) {
    return sess?.stage === 'listening' ? LISTEN_EXAM_SEC : READ_EXAM_SEC;
  }

  function syncMockTimer() {
    const active = mode === 'quiz' && quizSource === 'mock' && mockSession && !mockSession.submitted && !mockSession.intermission && !mockSession.paused && mockSession.examMode === 'exam';
    if (!active) { stopMockTimer(); return; }
    if (mockTimer) return;
    const limit = sectionLimitSec(mockSession);
    mockTimer = setInterval(() => {
      if (!mockSession || mockSession.submitted || mockSession.paused || mockSession.intermission || mode !== 'quiz' || quizSource !== 'mock') { stopMockTimer(); return; }
      mockSession.elapsed++;
      const left = Math.max(0, limit - mockSession.elapsed);
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

  async function ensureReadingVolume(setNum) {
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

  async function ensureListeningVolume(setNum) {
    const vol = Math.ceil((Number(setNum) || 1) / 5);
    const vols = globalThis.TOEIC_LISTEN_VOLS || {};
    if (!vols[vol] && !$(`script-toeic-listen-${vol}`)) {
      await loadFile('script', { src: `toeic-listen-${vol}.js`, id: `script-toeic-listen-${vol}` });
    }
    return (globalThis.TOEIC_LISTEN_VOLS || {})[vol] || [];
  }

  async function launchMockEntry(setNum, { section = mockSection, resume = false, examMode = mockExamMode, allowFallback = false } = {}) {
    const s = Number(setNum) || 1;
    const saved = resume ? data.mockProgress?.[section === 'full' ? `F${s}` : section === 'listening' ? `L${s}` : String(s)] : null;
    const needPack = (section === 'listening' || (section === 'full' && (!saved || saved.stage !== 'reading'))) && !allowFallback && !saved?.ttsFallback;
    if (needPack && window.__TAURI__?.core?.invoke) {
      const vol = Math.ceil(s / 5);
      const st = packStatus[vol];
      if (!st?.installed) {
        pendingPackSet = s;
        paint();
        return;
      }
    }
    pendingPackSet = 0;
    await startMockExam(s, { section, resume, examMode, ttsFallback: allowFallback || Boolean(saved?.ttsFallback) });
  }

  async function startMockExam(setNum = 1, { section = mockSection, resume = false, examMode = mockExamMode, ttsFallback = false } = {}) {
    const s = Number(setNum) || 1;
    loadingMockSet = s;
    stopMockAll();
    audioState.playedKeys = new Set();
    paint();

    try {
      const progKey = section === 'full' ? `F${s}` : section === 'listening' ? `L${s}` : String(s);
      const saved = resume ? data.mockProgress?.[progKey] : null;
      const isFull = section === 'full';
      const stage = isFull && saved?.stage === 'reading' ? 'reading' : section === 'reading' ? 'reading' : 'listening';

      let questions = [];
      let stage1 = null;
      if (stage === 'listening') {
        const raw = await ensureListeningVolume(s);
        questions = buildListeningExam(s, raw);
      } else {
        if (isFull && saved?.stage1Answers) {
          const rawL = await ensureListeningVolume(s);
          const lQs = buildListeningExam(s, rawL);
          const lAns = saved.stage1Answers;
          stage1 = {
            questions: lQs,
            answers: lAns,
            flags: saved.stage1Flags || new Array(lQs.length).fill(false),
            elapsed: saved.stage1Elapsed || 0,
            report: scoreListeningExam(lQs, lAns, saved.stage1Elapsed || 0),
          };
        }
        const p7Groups = await ensureReadingVolume(s);
        const p5Pool = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
        const p6Passages = typeof TOEIC_MOCK_P6 !== 'undefined' ? TOEIC_MOCK_P6 : [];
        questions = buildMockExam(s, { p5Pool, p6Passages, p7Groups });
      }

      loadingMockSet = 0;
      if (!questions.length) {
        tell(`Mock Set ${s} (${stage}) could not be loaded.`);
        paint();
        return;
      }

      const len = questions.length;
      const answers = saved?.answers?.length === len ? [...saved.answers] : new Array(len).fill(null);
      const flags = saved?.flags?.length === len ? [...saved.flags] : new Array(len).fill(false);

      mockSession = {
        set: s,
        vol: Math.ceil(s / 5),
        isFull,
        stage,
        intermission: Boolean(saved?.intermission),
        stage1,
        ttsFallback: ttsFallback || Boolean(saved?.ttsFallback),
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
        listenReport: stage1?.report || null,
        readReport: null,
        fullReport: null,
        revFilter: 'missed',
        revPart: 0,
      };
      quizSource = 'mock';
      paint();
      if (mockSession.stage === 'listening' && mockSession.examMode === 'exam' && !mockSession.paused && !mockSession.intermission) {
        playQuestionAudio(mockSession.questions[mockSession.index]);
      }
    } catch (e) {
      loadingMockSet = 0;
      tell('Could not load mock exam data: ' + (e.message || e));
      paint();
    }
  }

  async function beginReadingStage2() {
    if (!mockSession || !mockSession.isFull || mockSession.stage !== 'listening') return;
    loadingMockSet = mockSession.set;
    stopMockAll();
    paint();
    try {
      const p7Groups = await ensureReadingVolume(mockSession.set);
      const p5Pool = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
      const p6Passages = typeof TOEIC_MOCK_P6 !== 'undefined' ? TOEIC_MOCK_P6 : [];
      const readQs = buildMockExam(mockSession.set, { p5Pool, p6Passages, p7Groups });
      loadingMockSet = 0;
      if (!readQs.length) {
        tell(`Reading Set ${mockSession.set} could not be loaded.`);
        paint();
        return;
      }
      mockSession.stage = 'reading';
      mockSession.intermission = false;
      mockSession.questions = readQs;
      mockSession.answers = new Array(readQs.length).fill(null);
      mockSession.flags = new Array(readQs.length).fill(false);
      mockSession.index = 0;
      mockSession.elapsed = 0;
      mockSession.docTab = 'all';
      mockSession.navOpen = false;
      mockSession.paused = false;
      persistMockProgress();
      paint();
    } catch (e) {
      loadingMockSet = 0;
      tell('Could not load Reading stage: ' + (e.message || e));
      paint();
    }
  }

  function recordSectionScore(type, setNum, report) {
    const key = String(setNum);
    if (type === 'listening') {
      const prev = data.listenScores?.[key];
      data.listenScores = {
        ...(data.listenScores || {}),
        [key]: {
          bestScaled: Math.max(prev?.bestScaled || 0, report.scaled),
          bestRaw: Math.max(prev?.bestRaw || 0, report.correct),
          lastScaled: report.scaled,
          lastRaw: report.correct,
          band: toeicListeningCefr(Math.max(prev?.bestScaled || 0, report.scaled)),
          attempts: (prev?.attempts || 0) + 1,
          parts: report.parts,
        },
      };
    } else if (type === 'reading') {
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
    }
  }

  async function submitMockExam(autoTimedOut = false) {
    if (!mockSession || mockSession.submitted) return;
    const unanswered = mockSession.answers.filter((a) => a === null || a === undefined).length;
    if (!autoTimedOut && unanswered > 0) {
      const label = mockSession.isFull && mockSession.stage === 'listening' ? 'Submit Listening & advance to Reading' : 'Submit';
      if (!(await ask(`You still have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. ${label}?`, label))) return;
    }
    stopMockAll();

    if (mockSession.stage === 'listening' && mockSession.isFull) {
      const lRep = scoreListeningExam(mockSession.questions, mockSession.answers, mockSession.elapsed);
      recordSectionScore('listening', mockSession.set, lRep);
      mockSession.stage1 = {
        questions: mockSession.questions,
        answers: [...mockSession.answers],
        flags: [...mockSession.flags],
        elapsed: mockSession.elapsed,
        report: lRep,
      };
      mockSession.listenReport = lRep;
      mockSession.intermission = true;
      mockSession.paused = false;
      persistMockProgress();
      save();
      paint();
      return;
    }

    if (mockSession.stage === 'listening') {
      const report = scoreListeningExam(mockSession.questions, mockSession.answers, mockSession.elapsed);
      recordSectionScore('listening', mockSession.set, report);
      mockSession.submitted = true;
      mockSession.report = report;
      mockSession.listenReport = report;
    } else if (mockSession.isFull && mockSession.stage1) {
      const rRep = scoreMockExam(mockSession.questions, mockSession.answers, mockSession.elapsed);
      recordSectionScore('reading', mockSession.set, rRep);
      const lRep = mockSession.stage1.report;
      const fullRep = scoreFullToeicExam(lRep, rRep);
      const key = String(mockSession.set);
      const prev = data.fullScores?.[key];
      data.fullScores = {
        ...(data.fullScores || {}),
        [key]: {
          bestTotal: Math.max(prev?.bestTotal || 0, fullRep.totalScaled),
          bestListen: Math.max(prev?.bestListen || 0, fullRep.listenScaled),
          bestRead: Math.max(prev?.bestRead || 0, fullRep.readScaled),
          lastTotal: fullRep.totalScaled,
          band: toeicTotalCefr(Math.max(prev?.bestTotal || 0, fullRep.totalScaled)),
          attempts: (prev?.attempts || 0) + 1,
        },
      };
      mockSession.questions = [...mockSession.stage1.questions, ...mockSession.questions];
      mockSession.answers = [...mockSession.stage1.answers, ...mockSession.answers];
      mockSession.flags = [...mockSession.stage1.flags, ...mockSession.flags];
      mockSession.submitted = true;
      mockSession.listenReport = lRep;
      mockSession.readReport = rRep;
      mockSession.fullReport = fullRep;
      mockSession.report = {
        ...fullRep,
        missed: [...(lRep.missed || []), ...(rRep.missed || [])],
      };
    } else {
      const report = scoreMockExam(mockSession.questions, mockSession.answers, mockSession.elapsed);
      recordSectionScore('reading', mockSession.set, report);
      mockSession.submitted = true;
      mockSession.report = report;
      mockSession.readReport = report;
    }

    mockSession.paused = false;
    mockSession.navOpen = false;
    mockSession.docTab = 'all';
    const firstMissed = mockSession.questions.findIndex((q, idx) => mockSession.answers[idx] !== q.ans);
    mockSession.revFilter = firstMissed >= 0 ? 'missed' : 'all';
    mockSession.revPart = 0;
    mockSession.index = firstMissed >= 0 ? firstMissed : 0;

    const pKey = progressKeyFor(mockSession);
    if (data.mockProgress?.[pKey]) {
      const copy = { ...data.mockProgress };
      delete copy[pKey];
      data.mockProgress = copy;
    }
    save();
    emit('card-reviewed', { key: `mock:${mockSession.isFull ? 'full' : mockSession.stage}:${mockSession.set}:${today()}` });
    paint();
  }

  function answerMock(choiceIdx) {
    if (!mockSession || mockSession.submitted || mockSession.paused || mockSession.intermission) return;
    const i = mockSession.index;
    const q = mockSession.questions[i];
    if (!q || choiceIdx >= q.choices.length) return;
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
    clearAudioTimers();
    if (!mockSession.submitted && mockSession.elapsed > 0) persistMockProgress();
    paint();

    if (!mockSession.submitted && !mockSession.paused && nextQ?.part <= 4) {
      if (nextQ.audioKey !== audioState.key && mockSession.examMode === 'exam' && !audioState.playedKeys.has(nextQ.audioKey)) {
        playQuestionAudio(nextQ, { restart: true });
      }
    }
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
        const idx = mockSession ? mockSession.questions.findIndex((x) => x.num === qNum) : qNum - 101;
        const picked = idx >= 0 ? answers?.[idx] : null;
        const isCurrent = activeQ && activeQ.num === qNum;
        const LETTERS = ['A', 'B', 'C', 'D'];
        const filled = picked !== null && picked !== undefined;
        frag.push(el('span', {
          className: 'fc-mk-blank' + (isCurrent ? ' active' : '') + (filled ? ' filled' : ''),
          onclick: () => { if (idx >= 0) gotoMockQuestion(idx); },
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
        el('span', { className: 'fc-mk-dkind' }, totalDocs > 1 ? `Document ${idx + 1} · ${doc.kind || 'Reference'}` : (doc.kind || doc.kindLabel || 'Document')),
        ...(doc.title ? [el('span', { className: 'fc-mk-dtitle' }, doc.title)] : [])),
      ...(metaEl ? [metaEl] : []),
      ...blocks);
  }

  function renderPart1PhotoPane(q) {
    if (mockSession?.ttsFallback) {
      return el('div', { className: 'fc-mk-passage' },
        el('div', { className: 'fc-mk-phead' }, el('span', {}, `Photograph ${q.num} (Offline Voice Preview)`)),
        el('div', { className: 'fc-mk-photofallback' },
          el('strong', {}, 'Audio Photo Question (Download Vol Pack for Realistic Image)'),
          el('small', {}, `Download Volume ${q.vol} in Lobby to display the realistic WebP photograph.`)));
    }
    const holder = el('div', { className: 'fc-mk-passage' },
      el('div', { className: 'fc-mk-phead' }, el('span', {}, `Question ${q.num} · Photograph`)));
    const img = el('img', { className: 'fc-mk-photo', alt: `TOEIC Part 1 photograph for Question ${q.num}` });
    const showPending = () => {
      holder.replaceChildren(
        el('div', { className: 'fc-mk-phead' }, el('span', {}, `Question ${q.num} · Photograph`)),
        el('div', { className: 'fc-mk-photofallback' },
          el('strong', {}, `Photo Pending Pack Update (Set ${q.set} · Q${q.num})`),
          el('small', {}, 'Audio plays cleanly! Realistic photo for this question is scheduled after image quota reset (Set 1 has all 6 photos ready).')));
    };
    const cacheKey = `${q.vol}:${q.imgKey}`;
    if (assetCache.has(cacheKey)) {
      const uri = assetCache.get(cacheKey);
      if (uri) { img.src = uri; holder.appendChild(img); } else showPending();
    } else if (window.__TAURI__?.core?.invoke) {
      holder.appendChild(img);
      fetchAsset(q.vol, q.imgKey).then((uri) => {
        if (!holder.isConnected) return;
        if (uri) img.src = uri;
        else { cacheSet(cacheKey, ''); showPending(); }
      });
    } else {
      holder.appendChild(img);
    }
    return holder;
  }

  function renderAudioBar(q, { inReview = false } = {}) {
    if (!q?.audioKey) return null;
    const isPracticeOrReview = inReview || mockSession?.examMode === 'practice';
    const isSame = audioState.key === q.audioKey;
    const played = audioState.playedKeys.has(q.audioKey);
    const dur = isSame ? audioState.duration : 0;
    const cur = isSame ? audioState.currentTime : 0;
    const playing = isSame && audioState.playing;
    const lockReplay = !isPracticeOrReview && !mockSession?.ttsFallback && played;

    const speeds = isPracticeOrReview
      ? [0.85, 1.0, 1.15].map((r) => el('button', {
          type: 'button',
          className: 'tag-pill' + (audioState.rate === r ? ' active' : ''),
          onclick: () => {
            audioState.rate = r;
            if (audioState.el) audioState.el.playbackRate = r;
            paint();
          },
        }, `${r}×`))
      : [];

    return el('div', { className: 'fc-mk-audiobar' },
      el('button', {
        id: 'fc-mk-playbtn',
        type: 'button',
        className: 'fc-mk-playbtn' + (playing ? ' playing' : ''),
        disabled: lockReplay,
        onclick: () => toggleAudioPlayPause(q),
      }, playing ? '❚❚ Pause' : lockReplay ? '✓ Played (Exam)' : isSame && cur > 0 ? '▶ Resume' : '▶ Play Audio'),
      ...(isPracticeOrReview
        ? [el('button', { type: 'button', className: 'tag-pill', title: 'Replay audio (R)', onclick: () => playQuestionAudio(q, { restart: true }) }, '↻ Replay')]
        : []),
      el('div', { className: 'fc-mk-trackmeta' },
        el('div', { className: 'fc-mk-tracktitle' },
          el('span', {}, q.groupRange ? `Audio Track Q${q.groupRange}` : `Audio Track Q${q.num}`),
          el('span', { id: 'fc-mk-audiotime' }, audioState.error ? audioState.error : audioState.loading && isSame ? 'Loading…' : `${formatClock(cur)} / ${dur ? formatClock(dur) : '--:--'}`)),
        isPracticeOrReview && dur > 0 && !mockSession?.ttsFallback
          ? el('input', {
              id: 'fc-mk-seek',
              type: 'range',
              className: 'fc-mk-trackseek',
              min: 0,
              max: dur,
              step: 0.1,
              value: cur,
              oninput: (e) => {
                if (audioState.el && audioState.key === q.audioKey) {
                  audioState.el.currentTime = Number(e.target.value) || 0;
                  audioState.currentTime = audioState.el.currentTime;
                }
              },
            })
          : el('div', { className: 'fc-mk-trackbar fc-mk-trackprog' },
              el('div', { id: 'fc-mk-trackfill', className: 'fc-mk-trackfill', style: { width: `${dur > 0 ? Math.min(100, (cur / dur) * 100) : 0}%` } }))),
      ...speeds,
      ...(!inReview && mockSession?.examMode === 'exam'
        ? [el('button', {
            type: 'button',
            className: 'tag-pill' + (audioState.autoNext ? ' active' : ''),
            title: 'Automatically advance after audio clip finishes',
            onclick: () => { audioState.autoNext = !audioState.autoNext; if (!audioState.autoNext) clearAudioTimers(); paint(); },
          }, audioState.autoNext ? 'Auto-next: ON' : 'Auto-next: OFF')]
        : []));
  }

  function renderMockNavigator() {
    const qs = mockSession.questions;
    const partDefs = [
      [1, 'Part 1 · Photographs (1–6)'],
      [2, 'Part 2 · Question-Response (7–31)'],
      [3, 'Part 3 · Conversations (32–70)'],
      [4, 'Part 4 · Talks (71–100)'],
      [5, 'Part 5 · Incomplete Sentences (101–130)'],
      [6, 'Part 6 · Text Completion (131–146)'],
      [7, 'Part 7 · Reading Comprehension (147–200)'],
    ];
    const groups = partDefs.map(([p, title]) => [title, qs.map((q, qi) => ({ q, qi })).filter(({ q }) => q.part === p)]).filter(([, arr]) => arr.length);

    return el('div', { className: 'fc-mk-nav' },
      el('div', { className: 'fc-mk-navhead' },
        el('b', {}, `Answer Sheet Navigator · ${mockSession.answers.filter((a) => a !== null && a !== undefined).length}/${qs.length} answered`),
        el('button', { type: 'button', className: 'linkish', onclick: () => { mockSession.navOpen = false; paint(); } }, 'Close ✕')),
      ...groups.map(([title, list]) => el('div', { className: 'fc-mk-navpart' },
        el('small', {}, title),
        el('div', { className: 'fc-mk-bubbles' }, ...list.map(({ q, qi }) => {
          const picked = mockSession.answers[qi];
          const answered = picked !== null && picked !== undefined;
          let cls = 'fc-mk-bub';
          if (qi === mockSession.index) cls += ' cur';
          if (mockSession.submitted) cls += (picked === q.ans ? ' ok' : ' bad');
          else if (answered) cls += ' ans';
          if (mockSession.flags[qi]) cls += ' flag';
          return el('button', {
            type: 'button',
            className: cls,
            onclick: () => gotoMockQuestion(qi),
          }, String(q.num));
        })))));
  }

  function sourceBar() {
    const curated = typeof TOEIC_QUIZ !== 'undefined' ? TOEIC_QUIZ : [];
    const tags = [...new Set(curated.map((x) => x.tag).filter(Boolean))];
    return el('div', { className: 'fc-qz-sources', role: 'group', ariaLabel: 'Test bank' },
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'mock' ? ' active' : ''), onclick: () => { quizSource = 'mock'; refreshPackStatus(); paint(); } }, 'Mock Exam (30 Full L+R Sets)'),
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'sets' ? ' active' : ''), onclick: () => { stopMockAll(); startQuiz('sets', { set: quizSet }); } }, 'Part 5 Sets (20 × 50 Qs)'),
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'topic' ? ' active' : ''), onclick: () => { stopMockAll(); startQuiz('topic', { tag: quizTag, count: quizCount }); } }, `By Topic (${tags.length})`),
      el('button', { type: 'button', className: 'tag-pill' + (quizSource === 'cards' ? ' active' : ''), onclick: () => { stopMockAll(); startQuiz('cards', { count: quizCount }); } }, `My Decks / Chunks (${data.cards.length})`));
  }

  function renderPackStrip() {
    if (mockSection === 'reading') return null;
    const isDesktop = Boolean(window.__TAURI__?.core?.invoke);
    return el('div', { className: 'fc-mk-packbar', role: 'region', ariaLabel: 'Listening media packs' },
      el('span', { className: 'fc-mk-packbar-lbl' }, 'Audio + Photo Packs:'),
      ...[1, 2, 3, 4, 5, 6].map((v) => {
        const st = packStatus[v];
        const busy = packLoadingVol === v;
        const setSpan = `${(v - 1) * 5 + 1}–${v * 5}`;
        const mbText = st?.bytes ? ` (${(st.bytes / (1024 * 1024)).toFixed(1)} MB)` : '';
        if (busy) {
          const dl = packDownload[v] || { loaded: 0, total: 0 };
          const pct = dl.total ? `${Math.round((dl.loaded / dl.total) * 100)}%` : `${(dl.loaded / (1024 * 1024)).toFixed(1)} MB`;
          return el('span', { id: `fc-mk-dlprog-${v}`, className: 'fc-mk-packpill busy' }, `Downloading Vol ${v}: ${pct}`);
        }
        return el('span', { className: 'fc-mk-packpill' + (st?.installed ? ' ok' : '') },
          el('button', {
            type: 'button',
            className: 'linkish',
            disabled: !isDesktop || packLoadingVol > 0,
            onclick: () => downloadPack(v),
          }, st?.installed ? `✓ Vol ${v} (${setSpan})${mbText}` : `↓ Vol ${v} (${setSpan})`),
          ...(st?.installed ? [el('button', { type: 'button', className: 'fc-mk-packdel', title: `Remove Volume ${v} cache`, onclick: (e) => removePack(v, e) }, '✕')] : []));
      }));
  }

  function paintMock(stage) {
    const LETTERS = ['A', 'B', 'C', 'D'];
    // Lobby when no active mock test session
    if (!mockSession) {
      const scoreMap = mockSection === 'full' ? (data.fullScores || {}) : mockSection === 'listening' ? (data.listenScores || {}) : (data.mockScores || {});
      const doneEntries = Object.values(scoreMap);
      const bestTop = doneEntries.reduce((mx, r) => Math.max(mx, r.bestTotal || r.bestScaled || 0), 0);
      const maxScale = mockSection === 'full' ? 990 : 495;

      const progPrefix = mockSection === 'full' ? 'F' : mockSection === 'listening' ? 'L' : '';
      const inProgKeys = Object.keys(data.mockProgress || {}).filter((k) => {
        if (mockSection === 'full') return k.startsWith('F');
        if (mockSection === 'listening') return k.startsWith('L');
        return /^\d+$/.test(k);
      }).filter((k) => {
        const pr = data.mockProgress[k];
        return pr && ((pr.answers || []).some((a) => a !== null && a !== undefined) || pr.stage === 'reading' || pr.intermission);
      });
      const resumeKey = inProgKeys.sort((a, b) => Number(b.replace(/^[LF]/, '')) - Number(a.replace(/^[LF]/, '')))[0];
      const resumeProg = resumeKey ? data.mockProgress[resumeKey] : null;
      const resumeSetNum = resumeKey ? Number(resumeKey.replace(/^[LF]/, '')) : 0;

      const resumeBanner = resumeProg
        ? el('div', { className: 'fc-mk-resume' },
            el('div', {},
              el('strong', {}, `Mock Set ${resumeSetNum} (${mockSection}) in progress · Q${(resumeProg.stage === 'reading' || mockSection === 'reading' ? 101 : 1) + (resumeProg.index || 0)}`),
              el('small', {}, `${resumeProg.answers.filter((a) => a !== null && a !== undefined).length}/100 answered · ${resumeProg.examMode === 'exam' ? 'Exam Mode' : 'Practice Mode'}`)),
            el('button', {
              type: 'button',
              className: 'primary',
              onclick: () => launchMockEntry(resumeSetNum, { section: mockSection, resume: true }),
            }, el('span', {}, `Resume Set ${resumeSetNum}`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')))
        : null;

      const pendingVol = pendingPackSet ? Math.ceil(pendingPackSet / 5) : 0;
      const packPrompt = pendingPackSet
        ? el('div', { className: 'fc-mk-promptcard' },
            el('div', {},
              el('strong', {}, `Media Pack Volume ${pendingVol} (Sets ${(pendingVol - 1) * 5 + 1}–${pendingVol * 5}) Required for Real Audio & Photos`),
              el('small', {}, `Download natural multi-accent MP3 audio & WebP photos once (~12–18 MB) for Mock Set ${pendingPackSet}, or preview right away with Windows built-in speech.`)),
            el('div', { className: 'fc-mk-promptacts' },
              el('button', {
                type: 'button',
                className: 'primary',
                disabled: packLoadingVol > 0,
                onclick: async () => {
                  const targetSet = pendingPackSet;
                  if (await downloadPack(pendingVol)) startMockExam(targetSet, { section: mockSection, resume: false });
                },
              }, el('span', {}, packLoadingVol === pendingVol ? 'Downloading…' : `↓ Download Vol ${pendingVol} & Start`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→')),
              el('button', {
                type: 'button',
                className: 'tag-pill',
                onclick: () => launchMockEntry(pendingPackSet, { section: mockSection, resume: false, allowFallback: true }),
              }, 'Preview Offline (Windows Voice)'),
              el('button', { type: 'button', className: 'linkish', onclick: () => { pendingPackSet = 0; paint(); } }, 'Cancel')))
        : null;

      const grid = el('div', { className: 'fc-mk-grid', role: 'group', ariaLabel: '30 TOEIC Mock Sets' },
        ...Array.from({ length: 30 }, (_, idx) => {
          const s = idx + 1;
          const sc = scoreMap[String(s)];
          const pKey = `${progPrefix}${s}`;
          const prog = data.mockProgress?.[pKey];
          const hasProg = Boolean(prog && ((prog.answers || []).some((a) => a !== null && a !== undefined) || prog.stage === 'reading'));
          const isLoad = loadingMockSet === s;
          const subLabel = isLoad
            ? 'Loading…'
            : sc
              ? (mockSection === 'full' ? `Best ${sc.bestTotal}/990` : `Best ${sc.bestScaled}/495 (${sc.bestRaw}/100)`)
              : hasProg
                ? `Resume Q${(prog.stage === 'reading' || mockSection === 'reading' ? 101 : 1) + (prog.index || 0)}`
                : mockSection === 'full' ? '200 Qs · Part 1–7' : mockSection === 'listening' ? '100 Qs · Part 1–4' : '100 Qs · Part 5–7';
          return el('button', {
            type: 'button',
            className: 'fc-mk-setcard' + (sc ? ' scored' : '') + (hasProg ? ' inprog' : '') + (isLoad ? ' disabled' : ''),
            disabled: loadingMockSet > 0,
            onclick: () => launchMockEntry(s, { section: mockSection, resume: hasProg }),
          },
          el('b', {}, `Mock ${s}`, ...(sc ? [el('span', { className: 'fc-mk-band' }, sc.band)] : [])),
          el('small', {}, subLabel));
        }));

      const packStrip = renderPackStrip();
      stage.replaceChildren(
        el('div', { className: 'fc-qz-bar' }, sourceBar()),
        el('div', { className: 'fc-mk-lobby' },
          el('div', { className: 'fc-mk-modebar' },
            el('div', { className: 'fc-mk-modepills', role: 'group', ariaLabel: 'TOEIC Mock Section' },
              el('button', { type: 'button', className: 'tag-pill' + (mockSection === 'listening' ? ' active' : ''), onclick: () => { mockSection = 'listening'; pendingPackSet = 0; refreshPackStatus(); paint(); } }, 'Listening (100 Q · 45m)'),
              el('button', { type: 'button', className: 'tag-pill' + (mockSection === 'reading' ? ' active' : ''), onclick: () => { mockSection = 'reading'; pendingPackSet = 0; paint(); } }, 'Reading (100 Q · 75m)'),
              el('button', { type: 'button', className: 'tag-pill' + (mockSection === 'full' ? ' active' : ''), onclick: () => { mockSection = 'full'; pendingPackSet = 0; refreshPackStatus(); paint(); } }, 'Full Exam (200 Q · 120m)')),
            el('span', { className: 'fc-mk-stats' }, `${doneEntries.length}/30 sets completed` + (bestTop ? ` · Peak: ${bestTop}/${maxScale}` : ''))),
          el('div', { className: 'fc-mk-modebar' },
            el('div', { className: 'fc-mk-modepills', role: 'group', ariaLabel: 'Mock test pacing' },
              el('button', { type: 'button', className: 'tag-pill' + (mockExamMode === 'exam' ? ' active' : ''), onclick: () => { mockExamMode = 'exam'; paint(); } }, 'Exam Mode (Timed · Single audio play)'),
              el('button', { type: 'button', className: 'tag-pill' + (mockExamMode === 'practice' ? ' active' : ''), onclick: () => { mockExamMode = 'practice'; paint(); } }, 'Practice Mode (Untimed · Replay + Script + Thai Review)'))),
          ...(packStrip ? [packStrip] : []),
          ...(packPrompt ? [packPrompt] : []),
          ...(resumeBanner ? [resumeBanner] : []),
          grid));
      return;
    }

    // Full TOEIC Stage 1 -> Stage 2 Intermission
    if (mockSession.isFull && mockSession.intermission && !mockSession.submitted) {
      const lr = mockSession.listenReport;
      stage.replaceChildren(
        el('div', { className: 'fc-mk-hud' },
          el('div', { className: 'fc-mk-hud-l' },
            el('button', { type: 'button', className: 'linkish', onclick: () => { persistMockProgress(); stopMockAll(); mockSession = null; paint(); } }, '← Exit & Save'),
            el('strong', {}, `Mock ${mockSession.set} · Full TOEIC`)),
          el('span', { className: 'fc-mk-partpill' }, 'Listening Complete · Next: Reading')),
        el('div', { className: 'fc-mk-stage2box' },
          el('h3', {}, `Section 1 (Listening Q1–100) Submitted`),
          el('p', {}, `Listening answers recorded: ${lr.answered}/100 (${formatClock(lr.elapsedSec)} used). Your final 10–990 score will appear after finishing Section 2 Reading.`),
          el('button', {
            type: 'button',
            className: 'primary',
            disabled: loadingMockSet > 0,
            onclick: beginReadingStage2,
          }, el('span', {}, loadingMockSet ? 'Loading Reading…' : 'Start Section 2: Reading (Q101–200 · 75 min)'), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))));
      return;
    }

    // Score Report & Post-Exam Inspector when submitted
    if (mockSession.submitted && mockSession.report) {
      const r = mockSession.report;
      const isFull = Boolean(mockSession.fullReport);
      const isListenOnly = !isFull && Boolean(mockSession.listenReport);
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

      const leftPane = aq?.part === 1
        ? renderPart1PhotoPane(aq)
        : aq?.passages?.length
          ? el('div', { className: 'fc-mk-passage' },
              el('div', { className: 'fc-mk-phead' }, el('span', {}, `Questions ${aq.groupRange || aq.num} · Review`)),
              ...aq.passages.map((d, di) => renderPassageDoc(d, di, aq.passages.length, aq, mockSession.answers)))
          : null;

      const scriptBox = aq?.scriptLines?.length
        ? el('div', { className: 'fc-mk-script' },
            el('strong', {}, 'Audio Script'),
            ...aq.scriptLines.map((line) => el('p', {}, line)))
        : null;

      const reviewAudio = aq?.audioKey ? renderAudioBar(aq, { inReview: true }) : null;
      const reviewDetail = aq
        ? el('div', { className: 'fc-mk-split' + (leftPane ? '' : ' single') },
            ...(leftPane ? [leftPane] : []),
            el('div', { className: 'fc-mk-qpane' },
              el('div', { className: 'fc-card fc-qz-card' },
                el('div', { className: 'fc-card-meta' },
                  el('span', {}, `Q${aq.num} · Part ${aq.part} · ${aq.tag}`),
                  el('span', {}, aPick === aq.ans ? '✓ Correct' : aPick === null ? '— Skipped' : '✕ Missed')),
                ...(reviewAudio ? [reviewAudio] : []),
                el('div', { className: 'fc-qz-q' }, aq.prompt ? aq.prompt : aq.q),
                el('div', { className: 'fc-qz-choices' }, ...aq.choices.map((ch, ci) => {
                  let cls = 'fc-qz-opt';
                  if (ci === aq.ans) cls += ' right';
                  else if (ci === aPick) cls += ' wrong';
                  else cls += ' dim';
                  return el('button', { type: 'button', className: cls, disabled: true },
                    el('b', { className: 'fc-qz-let' }, LETTERS[ci]), el('span', {}, ch));
                })),
                ...(scriptBox ? [scriptBox] : []),
                el('div', { className: 'fc-qz-explain ' + (aPick === aq.ans ? 'ok' : 'bad') },
                  el('strong', {}, aPick === aq.ans
                    ? `✓ Correct (${LETTERS[aq.ans]})`
                    : aPick === null || aPick === undefined
                      ? `Unanswered — Correct answer is (${LETTERS[aq.ans]}) ${aq.choices[aq.ans]}`
                      : `✕ Your pick: (${LETTERS[aPick]})  →  Correct: (${LETTERS[aq.ans]}) ${aq.choices[aq.ans]}`),
                  el('div', { className: 'fc-qz-why' }, ...String(aq.why || '').split('\n').map((line) => el('p', {}, line)))))))
        : el('p', { className: 'fc-qz-perfect' }, 'No questions match this review filter — great work!');

      const partBoxes = [];
      if (mockSession.listenReport) {
        const lp = mockSession.listenReport.parts;
        partBoxes.push(
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 1 · Photos'), el('b', {}, `${lp[1].correct} / ${lp[1].total}`), el('span', {}, `${Math.round(lp[1].correct / (lp[1].total || 1) * 100)}%`)),
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 2 · Q&A'), el('b', {}, `${lp[2].correct} / ${lp[2].total}`), el('span', {}, `${Math.round(lp[2].correct / (lp[2].total || 1) * 100)}%`)),
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 3 · Conv'), el('b', {}, `${lp[3].correct} / ${lp[3].total}`), el('span', {}, `${Math.round(lp[3].correct / (lp[3].total || 1) * 100)}%`)),
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 4 · Talks'), el('b', {}, `${lp[4].correct} / ${lp[4].total}`), el('span', {}, `${Math.round(lp[4].correct / (lp[4].total || 1) * 100)}%`)));
      }
      if (mockSession.readReport) {
        const rp = mockSession.readReport.parts;
        partBoxes.push(
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 5 · Sentences'), el('b', {}, `${rp[5].correct} / ${rp[5].total}`), el('span', {}, `${Math.round(rp[5].correct / (rp[5].total || 1) * 100)}%`)),
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 6 · Text'), el('b', {}, `${rp[6].correct} / ${rp[6].total}`), el('span', {}, `${Math.round(rp[6].correct / (rp[6].total || 1) * 100)}%`)),
          el('div', { className: 'fc-mk-partbox' }, el('small', {}, 'Part 7 · Reading'), el('b', {}, `${rp[7].correct} / ${rp[7].total}`), el('span', {}, `Single ${rp[7].singleCorrect}/${rp[7].singleTotal} · Multi ${rp[7].multiCorrect}/${rp[7].multiTotal}`)));
      }

      const heroScore = isFull ? mockSession.fullReport.totalScaled : r.scaled;
      const heroMax = isFull ? 990 : 495;
      const heroBand = isFull ? mockSession.fullReport.band : r.band;
      const totalQCount = mockSession.questions.length;
      const totalCorrectCount = isFull ? mockSession.fullReport.correct : r.correct;
      const partFilterList = isFull
        ? [[0, 'All'], [1, 'P1'], [2, 'P2'], [3, 'P3'], [4, 'P4'], [5, 'P5'], [6, 'P6'], [7, 'P7']]
        : isListenOnly
          ? [[0, 'All Parts'], [1, 'Part 1'], [2, 'Part 2'], [3, 'Part 3'], [4, 'Part 4']]
          : [[0, 'All Parts'], [5, 'Part 5'], [6, 'Part 6'], [7, 'Part 7']];

      stage.replaceChildren(
        el('div', { className: 'fc-mk-report' },
          el('div', { className: 'fc-mk-hud' },
            el('div', { className: 'fc-mk-hud-l' },
              el('button', { type: 'button', className: 'linkish', onclick: () => { stopMockAll(); mockSession = null; paint(); } }, '← All 30 Mock Sets'),
              el('strong', {}, `Mock Set ${mockSession.set} ${isFull ? 'Full TOEIC' : isListenOnly ? 'Listening' : 'Reading'} Score Report`)),
            el('div', { className: 'fc-mk-hud-r' },
              el('button', { type: 'button', className: 'fc-grade', onclick: () => launchMockEntry(mockSession.set, { section: isFull ? 'full' : isListenOnly ? 'listening' : 'reading', resume: false, allowFallback: mockSession.ttsFallback }) }, el('b', {}, `Retake Set ${mockSession.set}`)),
              ...(mockSession.set < 30 ? [el('button', { type: 'button', className: 'primary', onclick: () => launchMockEntry(mockSession.set + 1, { section: isFull ? 'full' : isListenOnly ? 'listening' : 'reading', allowFallback: mockSession.ttsFallback }) }, el('span', {}, `Next: Set ${mockSession.set + 1}`), el('span', { className: 'arrow', ariaHidden: 'true' }, '→'))] : []))),
          el('div', { className: 'fc-mk-hero' },
            el('div', { className: 'fc-mk-hero-score' },
              el('b', {}, `${heroScore}`),
              el('small', {}, `/ ${heroMax} · CEFR ${heroBand}`)),
            el('div', {},
              el('strong', {}, isFull
                ? `L ${mockSession.fullReport.listenScaled}/495 + R ${mockSession.fullReport.readScaled}/495 · ${totalCorrectCount}/200 Correct`
                : `${totalCorrectCount} / ${totalQCount} Correct (${r.pct}%)`),
              el('small', { style: { display: 'block', color: 'var(--mute)' } }, `${mockSession.examMode === 'exam' ? `Time used: ${formatClock(isFull ? mockSession.fullReport.elapsedSec : r.elapsedSec)}` : `Untimed Practice · ${formatClock(isFull ? mockSession.fullReport.elapsedSec : r.elapsedSec)}`}`))),
          el('div', { className: 'fc-mk-parts' }, ...partBoxes),
          el('div', { className: 'fc-mk-revbar' },
            el('div', { className: 'fc-mk-modepills' },
              ...[['missed', `Missed (${totalQCount - totalCorrectCount})`], ['flagged', `Flagged (${mockSession.flags.filter(Boolean).length})`], ['all', `All (${totalQCount})`]].map(([id, lbl]) => el('button', {
                type: 'button',
                className: 'tag-pill' + (mockSession.revFilter === id ? ' active' : ''),
                onclick: () => { mockSession.revFilter = id; paint(); },
              }, lbl))),
            el('div', { className: 'fc-mk-modepills' },
              ...partFilterList.map(([p, lbl]) => el('button', {
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

    // Active Exam / Practice workspace
    const qs = mockSession.questions;
    const i = mockSession.index;
    const q = qs[i];
    const picked = mockSession.answers[i];
    const answeredCount = mockSession.answers.filter((a) => a !== null && a !== undefined).length;
    const flaggedCount = mockSession.flags.filter(Boolean).length;
    const remainingSec = Math.max(0, sectionLimitSec(mockSession) - mockSession.elapsed);
    const sameGroup = q.groupId ? qs.map((x, qi) => ({ num: x.num, qi })).filter((x) => qs[x.qi].groupId === q.groupId) : [];

    const hud = el('div', { className: 'fc-mk-hud' },
      el('div', { className: 'fc-mk-hud-l' },
        el('button', { type: 'button', className: 'linkish', onclick: () => { persistMockProgress(); stopMockAll(); mockSession = null; paint(); } }, '← Exit & Save'),
        el('strong', {}, `Mock ${mockSession.set}`),
        el('span', { className: 'fc-mk-partpill' }, `Part ${q.part} · Q${q.num}/${mockSession.stage === 'listening' ? 100 : 200}`)),
      el('div', { className: 'fc-mk-hud-r' },
        ...(mockSession.examMode === 'exam'
          ? [
              el('span', { id: 'fc-mk-timer', className: 'fc-mk-timer' + (remainingSec <= 300 ? ' warn' : '') }, formatClock(remainingSec)),
              el('button', {
                type: 'button',
                className: 'tag-pill',
                onclick: () => {
                  mockSession.paused = !mockSession.paused;
                  if (mockSession.paused) { if (audioState.el) try { audioState.el.pause(); } catch {} audioState.playing = false; clearAudioTimers(); }
                  persistMockProgress();
                  paint();
                },
              }, mockSession.paused ? 'Resume' : 'Pause'),
            ]
          : [el('span', { className: 'fc-mk-partpill' }, 'Practice Mode')]),
        el('span', { className: 'fc-mk-prog' }, `${answeredCount}/100 done${flaggedCount ? ` · ⚑ ${flaggedCount}` : ''}`),
        el('button', { type: 'button', className: 'tag-pill' + (mockSession.navOpen ? ' active' : ''), onclick: () => { mockSession.navOpen = !mockSession.navOpen; paint(); } }, mockSession.stage === 'listening' ? 'Grid 1–100' : 'Grid 101–200'),
        el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => submitMockExam(false) }, mockSession.isFull && mockSession.stage === 'listening' ? 'Next: Reading →' : 'Submit Exam')));

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

    const leftPane = q.part === 1
      ? renderPart1PhotoPane(q)
      : docs.length
        ? el('div', { className: 'fc-mk-passage' },
            el('div', { className: 'fc-mk-phead' },
              el('span', {}, q.part === 6
                ? `Questions ${q.groupRange} refer to the following passage.`
                : q.part <= 4
                  ? `Questions ${q.groupRange} refer to the following graphic.`
                  : `Questions ${q.groupRange} refer to the following ${docs.length >= 3 ? 'three passages' : docs.length === 2 ? 'two passages' : 'passage'}.`),
              ...(docs.length > 1
                ? [el('div', { className: 'fc-mk-doctabs' },
                    el('button', { type: 'button', className: 'tag-pill' + (mockSession.docTab === 'all' ? ' active' : ''), onclick: () => { mockSession.docTab = 'all'; paint(); } }, 'All docs'),
                    ...docs.map((_, di) => el('button', { type: 'button', className: 'tag-pill' + (String(mockSession.docTab) === String(di) ? ' active' : ''), onclick: () => { mockSession.docTab = String(di); paint(); } }, `Doc ${di + 1}`)))]
                : [])),
            ...visibleDocs.map(({ d, di }) => renderPassageDoc(d, di, docs.length, q, mockSession.answers)))
        : null;

    const showImmediate = mockSession.examMode === 'practice' && picked !== null && picked !== undefined;
    const hideListenOptText = q.part <= 2 && !showImmediate;
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
      }, el('b', { className: 'fc-qz-let' }, LETTERS[ci]), el('span', {}, hideListenOptText ? `Mark option (${LETTERS[ci]})` : ch));
    });

    const audioBar = q.audioKey ? renderAudioBar(q, { inReview: false }) : null;
    const scriptReveal = showImmediate && q.scriptLines?.length
      ? el('div', { className: 'fc-mk-script' }, el('strong', {}, 'Audio Script'), ...q.scriptLines.map((line) => el('p', {}, line)))
      : null;

    const qCard = el('div', { className: 'fc-card fc-qz-card' },
      el('div', { className: 'fc-card-meta' },
        el('span', {}, `Question ${q.num} · ${q.tag}`),
        el('button', { type: 'button', className: 'fc-mk-flagbtn' + (mockSession.flags[i] ? ' active' : ''), onclick: () => toggleMockFlag(i) }, mockSession.flags[i] ? '⚑ Flagged (F)' : '⚑ Flag (F)')),
      ...(audioBar ? [audioBar] : []),
      el('div', { className: 'fc-qz-q' }, q.q),
      el('div', { className: 'fc-qz-choices' }, ...choiceBtns),
      ...(scriptReveal ? [scriptReveal] : []),
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
          : el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => submitMockExam(false) }, mockSession.isFull && mockSession.stage === 'listening' ? 'Submit Listening →' : 'Finish & Submit →')));

    const navEl = mockSession.navOpen ? renderMockNavigator() : null;
    stage.replaceChildren(
      hud,
      ...(navEl ? [navEl] : []),
      el('div', { className: 'fc-mk-split' + (leftPane ? '' : ' single') },
        ...(leftPane ? [leftPane] : []),
        el('div', { className: 'fc-mk-qpane' }, qCard)));
  }

  function startQuiz(source = quizSource, { set = quizSet, tag = quizTag, count = quizCount } = {}) {
    quizSource = source;
    if (source === 'mock') { refreshPackStatus(); paint(); return; }
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

  const renderWordLine = (text, pos) => (pos
    ? el('span', { className: 'fc-word-line' }, el('span', {}, text), el('span', { className: 'fc-pos' }, pos))
    : text);

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
        el('p', {}, quizSource === 'cards' ? 'Load Oxford 3000, Everyday, or TOEIC packs above or add 4 cards to test yourself.' : 'Switch topics or select a test set above to begin.')));
      finishMount();
      return;
    }

    const { questions, answers, index } = quizState;
    const sc = scoreQuiz(questions, answers);
    const LETTERS = ['A', 'B', 'C', 'D'];

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
                el('p', { className: 'fc-qz-rev-q' }, q.pos ? renderWordLine(q.stem || q.q, q.pos) : q.q),
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
      el('div', { className: 'fc-qz-q' }, q.pos ? renderWordLine(q.stem || q.q, q.pos) : q.q),
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

  const packOpen = { oxford: false, ox5k: false, phrase: true, daily: false, toeic: false };

  function buildPackSection(key, title, unitLabel, groupName, list) {
    if (!list.length) return null;
    const total = list.reduce((n, p) => n + p.cards.length, 0);
    const leftAll = list.reduce((n, p) => n + packRemaining(p), 0);
    const allBtn = el('button', { type: 'button', className: 'fc-pack-all' + (!leftAll ? ' loaded' : ''), onclick: () => loadAllPacks(list, unitLabel) },
      leftAll ? `Add all ${leftAll} remaining ${unitLabel} →` : `✓ All ${total} ${unitLabel} loaded`);
    const grid = el('div', { className: 'fc-pack-grid' }, ...list.map((p) => {
      const rem = packRemaining(p);
      return el('button', {
        type: 'button',
        className: 'fc-pack-btn' + (rem === 0 ? ' loaded' : ''),
        onclick: () => loadPack(p, unitLabel),
      }, el('b', {}, (rem === 0 ? '✓ ' : '+ ') + p.label), el('small', {}, rem === 0 ? `${p.cards.length} ready` : `${rem} of ${p.cards.length} new`));
    }));
    const sec = el('details', { className: 'fc-packs' },
      el('summary', {},
        el('span', {}, `${title} · ${total} ${unitLabel} (${list.length} ${groupName})`),
        el('small', {}, leftAll ? `${leftAll} available` : 'All installed')),
      el('div', { className: 'fc-pack-body' }, allBtn, grid));
    sec.open = Boolean(packOpen[key]);
    sec.addEventListener('toggle', () => { packOpen[key] = sec.open; });
    return sec;
  }

  function paintPacks() {
    const box = $('fc-packs');
    const oxList = oxfordPacks();
    const ox5kList = data.advanceMode ? oxford5kPacks() : [];
    const phraseList = oxfordPhrasePacks();
    const dailyList = dailyPacks();
    const toeicList = toeicPacks();
    if (!box || (!oxList.length && !ox5kList.length && !phraseList.length && !dailyList.length && !toeicList.length)) return;
    box.hidden = false;
    const sections = [
      ...(data.advanceMode ? [buildPackSection('ox5k', 'Oxford 5000 Advance Library (B2–C1 · n./v./adj.)', 'Advance words', 'sets', ox5kList)] : []),
      buildPackSection('phrase', 'Oxford Phrase List (A1–C1 · phr. / phr. v. / idiom)', 'Oxford phrases', 'sets', phraseList),
      buildPackSection('oxford', 'Oxford 3000 Word Library (A1–B2 · n./v./adj.)', 'Oxford words', 'sets', oxList),
      buildPackSection('daily', 'Everyday Conversation Library', 'everyday chunks', 'topics', dailyList),
      buildPackSection('toeic', 'TOEIC Business Library', 'TOEIC chunks', 'topics', toeicList),
    ].filter(Boolean);
    box.replaceChildren(...sections);
  }

  function paint() {
    const t = today();
    const isMockActive = mode === 'quiz' && quizSource === 'mock' && Boolean(mockSession);
    root()?.classList?.toggle('mock-active', isMockActive);
    $('fc-m-study').ariaSelected = String(mode === 'study');
    if ($('fc-m-quiz')) $('fc-m-quiz').ariaSelected = String(mode === 'quiz');
    $('fc-m-browse').ariaSelected = String(mode === 'browse');
    const advBtn = $('fc-adv-toggle');
    if (advBtn) {
      advBtn.hidden = isMockActive;
      advBtn.ariaPressed = String(Boolean(data.advanceMode));
      advBtn.textContent = data.advanceMode ? '✓ Advance · Oxford 5000' : 'Advance · Oxford 5000';
    }
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

    const activeExists = !activeDeck || String(activeDeck).split('|').filter(Boolean).some((f) => (f.endsWith('*')
      ? s.decks.some((d) => d.startsWith(f.slice(0, -1)))
      : s.decks.includes(f)));
    if (!activeExists) activeDeck = '';
    const deckBar = $('fc-decks');
    deckBar.hidden = !s.decks.length || (mode === 'quiz' && quizSource !== 'cards');
    if (s.decks.length) {
      const hasOx3k = s.decks.some((d) => d.startsWith('Oxford · '));
      const hasOx5k = s.decks.some((d) => d.startsWith('Oxford 5000 · '));
      const groupDefs = [
        ...(hasOx3k && hasOx5k ? [['', 'Oxford · *|Oxford 5000 · *', 'Oxford 5000 (All)']] : []),
        ['Oxford · ', 'Oxford · *', hasOx5k ? 'Oxford 3000' : 'Oxford (All)'],
        ['Oxford 5000 · ', 'Oxford 5000 · *', 'Advance (5k only)'],
        ['Oxford Phrases · ', 'Oxford Phrases · *', 'Oxford Phrases (750)'],
        ['Daily · ', 'Daily · *', 'Everyday (All)'],
        ['TOEIC · ', 'TOEIC · *', 'TOEIC (All)'],
      ];
      const activeGroups = groupDefs.filter(([prefix, pat]) => (pat === 'Oxford · *|Oxford 5000 · *' ? (hasOx3k && hasOx5k) : s.decks.some((d) => d.startsWith(prefix))));
      const cefrPills = [
        ...['A1', 'A2', 'B1', 'B2'].map((lvl) => [`Oxford · ${lvl}*`, `Oxford ${lvl}`]),
        ...['B2', 'C1'].map((lvl) => [`Oxford 5000 · ${lvl}*`, `Adv ${lvl}`]),
      ].filter(([pat]) => s.decks.some((d) => d.startsWith(pat.slice(0, -1))));
      const pickDeck = (val) => { activeDeck = val; revealed = false; if (mode === 'quiz') startQuiz('cards', { count: quizCount }); else paint(); };
      const ox5kLvl = activeDeck.match(/^Oxford 5000 · (B2|C1)/);
      const ox3kLvl = activeDeck.match(/^Oxford · (A1|A2|B1|B2)/);
      const oxPhrLvl = activeDeck.match(/^Oxford Phrases · (A1|A2|B1|B2|C1)/);
      const subPrefix = ox5kLvl
        ? ox5kLvl[0]
        : ox3kLvl
          ? ox3kLvl[0]
          : oxPhrLvl
            ? oxPhrLvl[0]
            : activeDeck.includes('|') || activeDeck === 'Oxford*'
              ? ''
              : groupDefs.find(([prefix]) => prefix && activeDeck.startsWith(prefix))?.[0] || '';
      const isLibDeck = (d) => ['Oxford · ', 'Oxford 5000 · ', 'Oxford Phrases · ', 'Daily · ', 'TOEIC · '].some((p) => d.startsWith(p));
      const shownDecks = s.decks.filter((d) => (subPrefix ? d.startsWith(subPrefix) : (s.decks.length <= 24 || !isLibDeck(d))));
      const quickPills = [
        ...(activeGroups.length > 1 || cefrPills.length ? activeGroups.map(([, pat, lbl]) => [pat, lbl]) : []),
        ...cefrPills,
      ];
      deckBar.replaceChildren(
        el('button', { type: 'button', className: 'tag-pill' + (!activeDeck ? ' active' : ''), onclick: () => pickDeck('') }, 'All decks'),
        ...quickPills.map(([pat, lbl]) => el('button', {
          type: 'button',
          className: 'tag-pill' + (activeDeck === pat ? ' active' : ''),
          onclick: () => pickDeck(activeDeck === pat ? '' : pat),
        }, lbl)),
        ...shownDecks.map((d) => el('button', { type: 'button', className: 'tag-pill' + (activeDeck === d ? ' active' : ''), onclick: () => pickDeck(activeDeck === d ? '' : d) }, d)));
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
              : 'Load the Oxford 3000 words, Everyday, or TOEIC libraries above, or add your own flashcard on the right.'),
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
        el('div', { className: 'fc-card-front' }, renderWordLine(cur.front, cur.pos)),
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
      const list = data.cards.filter((c) => matchesDeck(c, activeDeck) && (!needle || `${c.front}\n${c.pos || ''}\n${c.back}\n${c.example || ''}\n${c.deck || ''}`.toLowerCase().includes(needle)));
      stage.replaceChildren(
        list.length
          ? el('ul', { className: 'fc-list' }, ...list.slice(0, 200).map((c) => {
              const del = el('button', { type: 'button', className: 'fc-del', ariaLabel: 'Delete card', textContent: '✕', onclick: () => remove(c) });
              const stab = fsrsStability(c);
              return el('li', { className: 'fc-row' },
                el('div', { className: 'fc-row-main' },
                  el('b', {}, renderWordLine(c.front, c.pos)),
                  el('span', {}, c.back + (c.example ? ` · "${c.example}"` : ''))),
                el('div', { className: 'fc-row-meta' },
                  el('span', { className: 'task-tag' }, c.deck || 'General'),
                  el('small', {}, `${stab ? `stable ${Math.round(stab)}d · ${Math.round(fsrsRetrievability(c, t) * 100)}%` : 'new'} · due ${c.next <= t ? 'today' : fmt(parseDay(c.next), { day: 'numeric', month: 'short' })}`),
                  del));
            }), ...(list.length > 200 ? [el('p', { className: 'fc-tip' }, `Showing first 200 of ${list.length} matching cards — use Search or deck filters above to narrow down.`)] : []))
          : el('p', { className: 'empty' }, 'No cards match this filter.'));
    }
  }

  const group = { module: 'cards', title: 'Flashcards', items: [['Space', 'Reveal answer'], ['1 2 3 4', 'Grade card / pick A B C D'], ['R', 'Replay listening clip'], ['Enter / Arrows', 'Next / prev question'], ['F', 'Flag mock question'], ['N', 'New card']] };
  const commandFn = () => [
    { label: 'Study flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { stopMockAll(); await setView('cards'); mode = 'study'; paint(); } },
    { label: 'TOEIC: Full Listening & Reading Mock Exam (30 Sets × 200 Qs)', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); mode = 'quiz'; quizSource = 'mock'; refreshPackStatus(); paint(); } },
    { label: 'TOEIC: Part 5 Practice Sets (20 × 50 Qs)', hint: 'Flashcards', kind: 'Command', run: async () => { stopMockAll(); await setView('cards'); mode = 'quiz'; startQuiz('sets', { set: quizSet || 1 }); } },
    { label: 'TOEIC: Practice Test by Grammar Topic', hint: 'Flashcards', kind: 'Command', run: async () => { stopMockAll(); await setView('cards'); mode = 'quiz'; startQuiz('topic', { tag: quizTag, count: quizCount || 10 }); } },
    { label: 'Quiz from my flashcards', hint: 'Flashcards', kind: 'Command', run: async () => { stopMockAll(); await setView('cards'); mode = 'quiz'; startQuiz('cards', { count: 10 }); } },
    { label: `Oxford Phrases: Load all ${oxfordPhrasePacks().reduce((n, p) => n + p.cards.length, 0)} phrases & idioms`, hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); loadAllPacks(oxfordPhrasePacks(), 'Oxford phrases'); } },
    { label: `Oxford 3000: Load all ${oxfordPacks().reduce((n, p) => n + p.cards.length, 0)} words`, hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); loadAllPacks(oxfordPacks(), 'Oxford words'); } },
    { label: 'Oxford 5000: Toggle Advance Mode (B2–C1)', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); await toggleAdvance(); } },
    { label: 'Oxford 5000: Load all 1,998 Advance words (B2–C1)', hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); await toggleAdvance(true); loadAllPacks(oxford5kPacks(), 'Advance words'); } },
    { label: `Everyday: Load all ${dailyPacks().reduce((n, p) => n + p.cards.length, 0)} chunks`, hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); loadAllPacks(dailyPacks(), 'everyday chunks'); } },
    { label: `TOEIC: Load all ${toeicPacks().reduce((n, p) => n + p.cards.length, 0)} chunks`, hint: 'Flashcards', kind: 'Command', run: async () => { await setView('cards'); loadAllPacks(toeicPacks(), 'TOEIC chunks'); } },
    ...toeicPacks().map((p) => ({
      label: `TOEIC: Add ${p.label} (${p.cards.length} chunks)`,
      hint: 'Flashcards',
      kind: 'Command',
      run: async () => { await setView('cards'); loadPack(p, 'TOEIC chunks'); },
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
      if (typeof OXFORD_PHRASE_PACKS === 'undefined' && !$('script-oxford-phrase-pack')) {
        await loadFile('script', { src: 'oxford-phrase-pack.js', id: 'script-oxford-phrase-pack' }).catch(() => {});
      }
      if (typeof OXFORD_PACKS === 'undefined' && !$('script-oxford-pack')) {
        await loadFile('script', { src: 'oxford-pack.js', id: 'script-oxford-pack' }).catch(() => {});
      }
      if (typeof DAILY_PACKS === 'undefined' && !$('script-daily-pack')) {
        await loadFile('script', { src: 'daily-pack.js', id: 'script-daily-pack' }).catch(() => {});
      }
      if (typeof TOEIC_PACKS === 'undefined' && !$('script-toeic-pack')) {
        await loadFile('script', { src: 'toeic-pack.js', id: 'script-toeic-pack' }).catch(() => {});
      }
      if (typeof TOEIC_QUIZ === 'undefined' && !$('script-toeic-quiz')) {
        await loadFile('script', { src: 'toeic-quiz.js', id: 'script-toeic-quiz' }).catch(() => {});
      }
      data = { cards: [], newLimit: 20, advanceMode: false, newLog: { day: '', count: 0 }, extraToday: 0, quizScores: {}, mockScores: {}, listenScores: {}, fullScores: {}, mockProgress: {}, ...(moduleData.cards || {}) };
      if (data.advanceMode || data.cards.some((c) => String(c?.deck || '').startsWith('Oxford 5000 · '))) {
        await ensureOxford5k();
      }
      if (window.__TAURI__?.event?.listen && !unlistenProgress) {
        unlistenProgress = await window.__TAURI__.event.listen('listening-progress', (ev) => {
          const p = ev?.payload;
          if (!p?.vol) return;
          packDownload[p.vol] = { loaded: Number(p.loaded) || 0, total: Number(p.total) || 0 };
          const bar = $('fc-mk-dlprog-' + p.vol);
          if (bar) {
            const pct = p.total ? `${Math.round((p.loaded / p.total) * 100)}%` : `${(p.loaded / (1024 * 1024)).toFixed(1)} MB`;
            bar.textContent = `Downloading Vol ${p.vol}: ${pct}`;
          }
        }).catch(() => null);
      }
      await refreshPackStatus();
      build();
      paint();
      commandHooks.push(commandFn);
      shortcutGroups.push(group);
    },
    stop() {
      persistMockProgress();
      stopMockAll();
      if (typeof unlistenProgress === 'function') { try { unlistenProgress(); } catch {} unlistenProgress = null; }
      commandHooks.splice(commandHooks.indexOf(commandFn), 1);
      shortcutGroups.splice(shortcutGroups.indexOf(group), 1);
    },
    show() { refreshPackStatus(); paint(); },
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
        const cur = mockSession.index;
        const curQ = mockSession.questions[cur];
        if (mockSession.submitted) {
          if (e.code === 'KeyR' && curQ?.audioKey) { e.preventDefault(); playQuestionAudio(curQ, { restart: true }); }
          return;
        }
        if (!mockSession.paused && !mockSession.intermission) {
          const picked = mockSession.answers[cur];
          const answered = picked !== null && picked !== undefined;
          if (num >= 1 && num <= (curQ?.choices?.length || 4)) { e.preventDefault(); answerMock(num - 1); }
          else if (e.code === 'KeyF') { e.preventDefault(); toggleMockFlag(cur); }
          else if (e.code === 'KeyR' && curQ?.audioKey && mockSession.examMode === 'practice') { e.preventDefault(); playQuestionAudio(curQ, { restart: true }); }
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
