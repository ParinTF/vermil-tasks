const test = require('node:test');
const assert = require('node:assert');
const { CARD_BOX_DAYS, cardDue, reviewCard, fsrsRetrievability, fsrsReview, fsrsPreview, deckSummary, studyQueue, importCardPack, stripGapCue, cleanChoiceLabel, buildCardQuiz, buildCuratedQuiz, scoreQuiz, toeicReadingScore, toeicCefrBand, toeicListeningScore, toeicListeningCefr, toeicTotalScore, toeicTotalCefr, buildMockExam, scoreMockExam, buildListeningExam, scoreListeningExam, scoreFullToeicExam, snapToeflBand, toeflCefrBand, toeflComparable120, toeflOverallBand, toeflAdaptiveBranch, toeflBandScore, scoreToeflWordGap, scoreToeflBuildSentence, parseToeflAiEval, summarizeMockMistakes, buildMockDiagnosisPrompt, buildMockQuestionCoachPrompt, parseMockCoachReply, normalizeMockHistory, recordMockScoreEntry, xpAward } = require('../ui/logic.js');
const { TOEIC_PACKS } = require('../ui/toeic-pack.js');
const { DAILY_PACKS } = require('../ui/daily-pack.js');
const { OXFORD_PACKS } = require('../ui/oxford-pack.js');
const { OXFORD_5K_PACKS } = require('../ui/oxford5k-pack.js');
const { OXFORD_PHRASE_PACKS } = require('../ui/oxford-phrase-pack.js');
const { TOEFL_SETS_1 } = require('../ui/toefl-sets-1.js');
const { TOEFL_SETS_2 } = require('../ui/toefl-sets-2.js');
const { TOEIC_QUIZ } = require('../ui/toeic-quiz.js');
const { TOEIC_MOCK_P6 } = require('../ui/toeic-mock-p6.js');
const { TOEIC_MOCK_VOL1 } = require('../ui/toeic-mock-1.js');
const { TOEIC_MOCK_VOL2 } = require('../ui/toeic-mock-2.js');
const { TOEIC_MOCK_VOL3 } = require('../ui/toeic-mock-3.js');
const { TOEIC_MOCK_VOL4 } = require('../ui/toeic-mock-4.js');
const { TOEIC_MOCK_VOL5 } = require('../ui/toeic-mock-5.js');
const { TOEIC_MOCK_VOL6 } = require('../ui/toeic-mock-6.js');
const { TOEIC_LISTEN_VOL1 } = require('../ui/toeic-listen-1.js');
const { TOEIC_LISTEN_VOL2 } = require('../ui/toeic-listen-2.js');
const { TOEIC_LISTEN_VOL3 } = require('../ui/toeic-listen-3.js');
const { TOEIC_LISTEN_VOL4 } = require('../ui/toeic-listen-4.js');
const { TOEIC_LISTEN_VOL5 } = require('../ui/toeic-listen-5.js');
const { TOEIC_LISTEN_VOL6 } = require('../ui/toeic-listen-6.js');

test('Spaced flashcards Leitner boxes advance on Got it and reset to Box 1 on Again', () => {
  assert.deepEqual(CARD_BOX_DAYS, [1, 3, 7, 14, 30]);
  const c1 = { id: 'c1', deck: 'Japanese', front: 'Neko', back: 'Cat', box: 1, next: '2026-11-15', reviews: 0 };
  assert.equal(cardDue(c1, '2026-11-15'), true);
  assert.equal(cardDue(c1, '2026-11-14'), false);

  const c2 = reviewCard(c1, true, '2026-11-15');
  assert.equal(c2.box, 2);
  assert.equal(c2.next, '2026-11-18'); // +3 days
  assert.equal(c2.reviews, 1);

  const c3 = reviewCard(c2, false, '2026-11-18');
  assert.equal(c3.box, 1);
  assert.equal(c3.next, '2026-11-19'); // +1 day
  assert.equal(c3.reviews, 2);
});

test('FSRS-7 uses the published slow and fast traces and keeps its fractional due time', () => {
  const now = new Date(2026, 10, 16, 9).getTime();
  const c0 = { id: 'f1', deck: 'TOEIC', next: '2026-11-16', reviews: 0 };
  const c1 = fsrsReview(c0, 3, now);
  // Reference values from ts-fsrs 6.0.0 / FSRS7Model with default weights.
  assert.deepEqual(c1.memory, { version: 7, stability: 3.9221, stabilityFast: 3.13768, difficulty: 3.53072398 });
  assert.equal(c1.reviews, 1);
  assert.equal(c1.reviewedAt, now);
  assert.ok(Math.abs(c1.ivl - 4.777721809) < 0.00001);
  assert.equal(fsrsPreview(c0, now)[3], c1.ivl);
  assert.equal(cardDue(c1, c1.next, c1.dueAt - 1), false);
  assert.equal(cardDue(c1, c1.next, c1.dueAt), true);
  assert.ok(Math.abs(fsrsRetrievability(c1, c1.dueAt) - 0.9) < 0.001);

  const laterToday = now + 0.08 * 86400000;
  assert.deepEqual(fsrsReview(c1, 4, laterToday).memory,
    { version: 7, stability: 6.72408871, stabilityFast: 82.41789787, difficulty: 1 });
  const lapsed = fsrsReview(c1, 1, c1.dueAt);
  assert.equal(lapsed.lapses, 1);
  assert.ok(lapsed.ivl > 0 && lapsed.ivl < 1 / 24);
});

test('legacy cards keep their due date and counts before building FSRS-7 memory at the next rating', () => {
  const legacy = { id: 'old', box: 3, s: 7, d: 4, lastReviewed: '2026-11-09', next: '2026-11-16', reviews: 5 };
  const now = new Date(2026, 10, 16, 9).getTime();
  assert.equal(cardDue(legacy, '2026-11-15', now), false);
  assert.equal(cardDue(legacy, '2026-11-16', now), true);
  assert.equal(fsrsRetrievability(legacy, now), null);
  const updated = fsrsReview(legacy, 3, now);
  assert.equal(updated.reviews, 6);
  assert.deepEqual(updated.memory, fsrsReview({}, 3, now).memory);
  assert.equal(legacy.next, '2026-11-16');
});

test('language versions isolate study cards and new card allowances', () => {
  const { cardLanguage, studyLanguageCards, studyNewCount, studyNewReview } = require('../ui/logic.js');
  const date = '2026-11-18';
  const cards = [
    { id: 'ox', deck: 'Oxford A1' },
    { id: 'old-zh', deck: 'Mandarin Basics' },
    { id: 'old-ja', deck: 'Japanese: Travel' },
    { id: 'new-ja', deck: 'General', language: 'ja' },
    { id: 'name-only', deck: 'Chinese', language: 'en' },
  ];
  assert.deepEqual(cards.map(cardLanguage), ['en', 'zh', 'ja', 'ja', 'en']);
  assert.deepEqual(studyLanguageCards(cards, 'ja').map((c) => c.id), ['old-ja', 'new-ja']);
  const log = studyNewReview({ day: date, count: 20 }, date, 'zh');
  assert.deepEqual([studyNewCount(log, date, 'en'), studyNewCount(log, date, 'zh'), studyNewCount(log, date, 'ja')], [20, 1, 0]);
  assert.equal(studyNewCount(log, '2026-11-19', 'zh'), 0);
  assert.equal(studyNewCount(log, date), 21);
});

test('import keeps identical prompts in different languages and skips duplicates within a language', () => {
  const existing = [{ id: 'en-one', front: '1', back: 'One', deck: 'General' }];
  const items = [
    { front: '1', back: 'One', deck: 'General' },
    { front: '1', back: 'いち', language: 'ja', deck: 'Numbers' },
    { front: '1', back: 'いち', deck: 'Japanese' },
  ];
  const { cards, added } = importCardPack(existing, items, '2026-11-18', () => 'ja-one');
  assert.equal(added, 1);
  assert.deepEqual(cards.map((c) => [c.id, c.language]), [['en-one', undefined], ['ja-one', 'ja']]);
});

test('Chinese and Japanese starter packs are complete and import into their own study versions', () => {
  const { STUDY_LANGUAGE_PACKS } = require('../ui/study-language-packs.js');
  const { studyLanguageCards } = require('../ui/logic.js');
  const items = Object.values(STUDY_LANGUAGE_PACKS).flatMap(({ deck, language, cards }) =>
    cards.map(([front, back]) => ({ deck, language, front, back })));
  const { cards, added } = importCardPack([], items, '2026-11-18', (i) => `starter-${i}`);
  assert.equal(added, 48);
  for (const [id, script] of [['zh', /\p{Script=Han}/u], ['ja', /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u]]) {
    const scoped = studyLanguageCards(cards, id);
    assert.equal(scoped.length, 24);
    assert.ok(scoped.every((c) => script.test(c.front) && c.back.trim()));
  }
  assert.equal(studyLanguageCards(cards, 'en').length, 0);
});

test('new HSK imports all 11,000 syllabus entries including same-spelling entries', () => {
  const { HSK_2025 } = require('../ui/hsk-2025.js');
  const { HSK_BANDS, hskStudyItems } = require('../ui/logic.js');
  const counts = [300, 200, 500, 1000, 1600, 1800, 5600];
  const entries = HSK_BANDS.flatMap(([band], i) => {
    const rows = hskStudyItems(band, HSK_2025[band]);
    assert.equal(rows.length, counts[i]);
    assert.ok(rows.every((row) => row.language === 'zh' && row.front && row.back));
    return rows;
  });
  assert.deepEqual(entries.map((row) => row.hskId), Array.from({ length: 11000 }, (_, i) => i + 1));
  const { cards, added } = importCardPack([], entries, '2026-11-18', (i) => `hsk-${i}`);
  assert.equal(added, 11000);
  assert.ok(cards.filter((card) => card.front === '和').length > 1);
  assert.equal(importCardPack(cards, entries, '2026-11-18').added, 0);
  assert.equal(cards.find((card) => card.front === '爱').back, 'ài');
  assert.equal(cards.at(-1).deck, 'HSK 7–9');
});

test('Mandarin audio prefers a local Mainland voice and never falls back to an English or Cantonese voice', () => {
  const { mandarinVoice } = require('../ui/logic.js');
  const en = { lang: 'en-US', localService: true };
  const yue = { lang: 'zh-HK', localService: true };
  const cloud = { lang: 'zh-CN', localService: false };
  const local = { lang: 'zh-Hans-CN', localService: true };
  assert.equal(mandarinVoice([en, yue]), undefined);
  assert.equal(mandarinVoice([en, yue, cloud]), cloud);
  assert.equal(mandarinVoice([en, cloud, local]), local);
});

test('study sessions sample from the full eligible pool while keeping due reviews ahead of new cards', () => {
  const { studySample } = require('../ui/logic.js');
  const today = '2026-11-16';
  const cards = [
    { id: 'a', next: today }, { id: 'b', next: today }, { id: 'c', next: today },
    { id: 'due', next: today, lastReviewed: '2026-11-15' }, { id: 'future', next: '2026-12-01' },
  ];
  const session = studyQueue(cards, today, { newLimit: 2, newDoneToday: 1, rng: () => 0 });
  assert.deepEqual(session.queue.map((c) => c.id), ['due', 'b']);
  assert.deepEqual(studySample(cards, 3, () => 0).map((c) => c.id), ['b', 'c', 'due']);
  assert.equal(new Set(studySample(cards, 200, () => 0).map((c) => c.id)).size, 5);
  assert.equal(cards[0].id, 'a');
});

test('deckSummary counts due, mastered (s >= 10 or Box 4-5) and sorted deck names, plus review XP', () => {
  const cards = [
    { id: '1', deck: 'Tech', box: 4, next: '2026-11-20' },
    { id: '2', deck: 'Lang', s: 1.4, box: 1, next: '2026-11-15' },
    { id: '3', deck: 'Tech', s: 14.8, box: 3, next: '2026-11-10' },
  ];
  assert.deepEqual(deckSummary(cards, '2026-11-15'), {
    total: 3,
    due: 2,
    mastered: 2,
    decks: ['Lang', 'Tech'],
  });
  const xp = xpAward({ total: 0, day: '', today: {}, keys: {}, log: [] }, 'card-reviewed', { key: 'card:1:2026-11-15' }, '2026-11-15');
  assert.equal(xp.gained, 2);
});

test('TOEIC_PACKS has 1000 unique, valid chunk cards across 20 packs and studyQueue paces daily new cards', () => {
  const seenFront = new Set();
  const all = [];
  for (const p of TOEIC_PACKS) {
    assert.ok(p.id && p.label && p.deck && Array.isArray(p.cards) && p.cards.length >= 35);
    for (const [front, back, example] of p.cards) {
      assert.ok(front && front.includes('___'), `Missing ___ gap in: ${front}`);
      assert.ok(back && back.trim().length > 0, `Empty back for: ${front}`);
      assert.ok(example && example.trim().length > 0, `Empty example for: ${front}`);
      const key = front.trim().toLowerCase();
      assert.ok(!seenFront.has(key), `Duplicate front found: ${front}`);
      seenFront.add(key);
      all.push({ deck: p.deck, front, back, example });
    }
  }
  assert.equal(TOEIC_PACKS.length, 20);
  assert.equal(all.length, 1000);

  let seq = 0;
  const first = importCardPack([], all, '2026-11-16', () => `t-${++seq}`);
  assert.equal(first.added, 1000);
  assert.equal(first.cards.length, 1000);

  const second = importCardPack(first.cards, all, '2026-11-16', () => `t-${++seq}`);
  assert.equal(second.added, 0);
  assert.equal(second.cards.length, 1000);

  // studyQueue keeps FSRS due reviews uncapped while pacing unseen new cards per day
  const mixed = [
    { id: 'r1', next: '2026-11-15', lastReviewed: '2026-11-10' },
    ...first.cards.slice(0, 50),
  ];
  const paced = studyQueue(mixed, '2026-11-16', { newLimit: 20, newDoneToday: 5 });
  assert.equal(paced.reviewsDue, 1);
  assert.equal(paced.newShown, 15);
  assert.equal(paced.queue.length, 16);
  assert.equal(paced.queue[0].id, 'r1');
});

test('Quiz builder generates 4-choice questions with explanations and validates 1,000-question 20-set TOEIC_QUIZ', () => {
  const seenIds = new Set();
  const seenPrompts = new Set();
  const setCounts = {};
  const ansCounts = [0, 0, 0, 0];
  assert.equal(TOEIC_QUIZ.length, 1000);
  for (const item of TOEIC_QUIZ) {
    assert.ok(item.id && !seenIds.has(item.id), `Duplicate id ${item.id}`);
    seenIds.add(item.id);
    const key = item.q.trim().toLowerCase();
    assert.ok(!seenPrompts.has(key), `Duplicate prompt: ${item.q}`);
    seenPrompts.add(key);
    assert.ok(item.set >= 1 && item.set <= 20, `Invalid set on ${item.id}`);
    setCounts[item.set] = (setCounts[item.set] || 0) + 1;
    assert.ok(item.q.includes('___') && item.choices.length === 4);
    assert.equal(new Set(item.choices).size, 4, `Duplicate choices in ${item.id}`);
    assert.ok(item.ans >= 0 && item.ans < 4);
    ansCounts[item.ans]++;
    assert.ok(item.why && item.why.length > 20 && !/\([A-D]\)/.test(item.why), `Bad why on ${item.id}`);
  }
  assert.equal(Object.keys(setCounts).length, 20);
  for (let s = 1; s <= 20; s++) assert.equal(setCounts[s], 50, `Set ${s} must have 50 questions`);
  assert.deepEqual(ansCounts, [250, 250, 250, 250]);

  assert.deepEqual(stripGapCue('Please ___ the form. (กรอกให้ครบ)'), { stem: 'Please ___ the form.', cue: 'กรอกให้ครบ' });
  assert.equal(cleanChoiceLabel('dedicated to (+ noun/V-ing)'), 'dedicated to');
  assert.equal(cleanChoiceLabel('adhere to / abide by'), 'adhere to');

  const deck = [
    { id: 'c1', deck: 'Preps', front: 'Staff must ___ the rules. (ปฏิบัติตาม)', back: 'comply with', example: 'Everyone complied.' },
    { id: 'c2', deck: 'Preps', front: 'The contract is ___ approval. (ขึ้นอยู่กับ)', back: 'subject to', example: 'Prices are subject to change.' },
    { id: 'c3', deck: 'Preps', front: 'We are ___ this goal. (ทุ่มเทให้)', back: 'dedicated to (+ noun/V-ing)', example: 'Dedicated to service.' },
    { id: 'c4', deck: 'Preps', front: 'App is ___ macOS. (เข้ากันได้)', back: 'compatible with', example: 'Works smoothly.' },
  ];
  const qs = buildCardQuiz(deck, { count: 4, deck: 'Preps', rng: () => 0.35 });
  assert.equal(qs.length, 4);
  for (const q of qs) {
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.ok(!q.q.includes('(ปฏิบัติตาม)') && q.why.includes('คำตอบ:') && q.why.includes('ตัวเลือกอื่น:'));
  }

  const sc = scoreQuiz(qs, [qs[0].ans, (qs[1].ans + 1) % 4, qs[2].ans, null]);
  assert.equal(sc.answered, 3);
  assert.equal(sc.correct, 2);
  assert.equal(sc.wrong, 1);
  assert.equal(sc.missed.length, 1);

  const set1 = buildCuratedQuiz(TOEIC_QUIZ, { count: 0, set: 1, shuffle: false });
  assert.equal(set1.length, 50);
  assert.ok(set1.every((x) => x.set === 1));

  const filtered = buildCuratedQuiz(TOEIC_QUIZ, { count: 0, tag: 'Connector' });
  assert.equal(filtered.length, 51);
});

test('Mock exam builder serves 30 balanced 100-question TOEIC Reading sets (Part 5-7) and computes 5-495 scores', () => {
  assert.equal(toeicReadingScore(0), 5);
  assert.equal(toeicReadingScore(25), 80);
  assert.equal(toeicReadingScore(70), 325);
  assert.equal(toeicReadingScore(98), 495);
  assert.equal(toeicCefrBand(80), 'A1');
  assert.equal(toeicCefrBand(155), 'A2');
  assert.equal(toeicCefrBand(325), 'B1');
  assert.equal(toeicCefrBand(415), 'B2');
  assert.equal(toeicCefrBand(475), 'C1');

  const p7All = [
    ...TOEIC_MOCK_VOL1,
    ...TOEIC_MOCK_VOL2,
    ...TOEIC_MOCK_VOL3,
    ...TOEIC_MOCK_VOL4,
    ...TOEIC_MOCK_VOL5,
    ...TOEIC_MOCK_VOL6,
  ];
  assert.equal(TOEIC_MOCK_P6.length, 120);
  assert.equal(p7All.length, 420);

  const p5Seen = new Set();
  const p6Passages = new Set();
  const p7Seen = new Set();
  const p7GroupMap = new Map(p7All.map((g) => [g.id, g]));
  let grandTotal = 0;

  for (let s = 1; s <= 30; s++) {
    const qs = buildMockExam(s, { p5Pool: TOEIC_QUIZ, p6Passages: TOEIC_MOCK_P6, p7Groups: p7All });
    assert.equal(qs.length, 100);
    grandTotal += qs.length;

    const counts = [0, 0, 0, 0];
    const parts = { 5: 0, 6: 0, 7: 0 };
    for (let i = 0; i < qs.length; i++) {
      const q = qs[i];
      assert.equal(q.num, 101 + i);
      assert.equal(q.choices.length, 4);
      assert.equal(new Set(q.choices).size, 4);
      assert.ok(q.why && q.why.length >= 20);
      assert.ok(!/Wait:|Check:|Wait—|\([A-D]\)/i.test(q.why + q.q));
      counts[q.ans]++;
      parts[q.part]++;
      if (q.part === 5) p5Seen.add(q.q);
      if (q.part === 6) p6Passages.add(q.groupId);
      if (q.part === 7) {
        p7Seen.add(`${q.groupId}::${q.q}`);
        if (q.q.includes('[1], [2], [3], and [4]')) {
          const grp = p7GroupMap.get(q.groupId);
          const txt = grp.docs.map((d) => d.blocks.map((b) => (typeof b === 'string' ? b : JSON.stringify(b))).join(' ')).join(' ');
          assert.ok(['[1]', '[2]', '[3]', '[4]'].every((k) => txt.includes(k)), `Missing slot marker in ${q.groupId}`);
        }
      }
    }
    assert.deepEqual(parts, { 5: 30, 6: 16, 7: 54 });
    assert.deepEqual(counts, [25, 25, 25, 25]);
  }

  assert.equal(grandTotal, 3000);
  assert.equal(p5Seen.size, 900);
  assert.equal(p6Passages.size, 120);
  assert.equal(p7Seen.size, 1620);

  const set30 = buildMockExam(30, { p5Pool: TOEIC_QUIZ, p6Passages: TOEIC_MOCK_P6, p7Groups: p7All });
  const answers = set30.map((q, idx) => (idx < 70 ? q.ans : (q.ans + 1) % 4));
  const report = scoreMockExam(set30, answers, 3120);
  assert.equal(report.correct, 70);
  assert.equal(report.scaled, 325);
  assert.equal(report.band, 'B1');
  assert.equal(report.elapsedSec, 3120);
  assert.equal(report.parts[5].correct, 30);
  assert.equal(report.parts[6].correct, 16);
  assert.equal(report.parts[7].correct, 24);
  assert.equal(report.parts[7].singleTotal, 29);
  assert.equal(report.parts[7].multiTotal, 25);
  assert.equal(report.missed.length, 30);
  assert.equal(report.missed[0].num, 171);
});

test('TOEIC Listening score scale, 30 balanced sets (3,000 Qs), and Full 200-Q scoring', () => {
  assert.equal(toeicListeningScore(0, 100), 5);
  assert.equal(toeicListeningScore(93, 100), 495);
  assert.equal(toeicListeningCefr(495), 'C1');
  assert.equal(toeicListeningCefr(400), 'B2');
  assert.equal(toeicTotalScore(495, 495), 990);
  assert.equal(toeicTotalCefr(945), 'C1');
  assert.equal(toeicTotalCefr(785), 'B2');

  const vols = [TOEIC_LISTEN_VOL1, TOEIC_LISTEN_VOL2, TOEIC_LISTEN_VOL3, TOEIC_LISTEN_VOL4, TOEIC_LISTEN_VOL5, TOEIC_LISTEN_VOL6];
  const p2Seen = new Set();
  const qSeen = new Set();
  let totalListenQs = 0;

  for (let set = 1; set <= 30; set++) {
    const raw = vols[Math.ceil(set / 5) - 1];
    const qs = buildListeningExam(set, raw);
    assert.equal(qs.length, 100, `Set ${set} must have 100 listening questions`);
    totalListenQs += qs.length;

    const parts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const p1Ans = [0, 0, 0, 0];
    const p2Ans = [0, 0, 0];
    const p34Ans = [0, 0, 0, 0];
    let p3Graphics = 0;
    let p4Graphics = 0;

    for (let i = 0; i < qs.length; i++) {
      const q = qs[i];
      assert.equal(q.num, i + 1);
      parts[q.part]++;
      if (q.part === 1) {
        assert.equal(q.choices.length, 4);
        assert.ok(q.imgKey && q.imgKey.endsWith('.webp'));
        p1Ans[q.ans]++;
      } else if (q.part === 2) {
        assert.equal(q.choices.length, 3, `Part 2 must strictly have 3 choices (${q.id})`);
        assert.ok(q.prompt && q.prompt.length >= 8);
        assert.ok(!p2Seen.has(q.prompt.toLowerCase()), `Duplicate Part 2 prompt in set ${set}: ${q.prompt}`);
        p2Seen.add(q.prompt.toLowerCase());
        p2Ans[q.ans]++;
      } else {
        assert.equal(q.choices.length, 4);
        assert.ok(!qSeen.has(q.q.toLowerCase()), `Duplicate Part 3/4 question in set ${set}: ${q.q}`);
        qSeen.add(q.q.toLowerCase());
        p34Ans[q.ans]++;
        if (q.passages?.[0]) {
          const doc = q.passages[0];
          assert.ok(doc.meta == null || (Array.isArray(doc.meta) && doc.meta.every((m) => Array.isArray(m) && m.length >= 2)));
          assert.ok(Array.isArray(doc.blocks) && doc.blocks.length > 0);
          if (q.part === 3) p3Graphics++;
          if (q.part === 4) p4Graphics++;
        }
      }
      assert.ok(q.why && q.why.length >= 15);
      assert.ok(!/\([A-D]\)/.test(q.why), `Bare choice letter leaked in why: ${q.why}`);
    }

    assert.deepEqual(parts, { 1: 6, 2: 25, 3: 39, 4: 30 });
    assert.equal(p3Graphics, 9);
    assert.equal(p4Graphics, 9);
    assert.ok(p1Ans.every((c) => c >= 1));
    assert.ok(p2Ans.every((c) => c >= 8 && c <= 9));
    assert.ok(p34Ans.every((c) => c >= 15 && c <= 20));
  }

  assert.equal(totalListenQs, 3000);
  assert.equal(p2Seen.size, 750);
  assert.equal(qSeen.size, 2070);

  const lSet1 = buildListeningExam(1, TOEIC_LISTEN_VOL1);
  const rSet1 = buildMockExam(1, {
    p5Pool: TOEIC_QUIZ,
    p6Passages: TOEIC_MOCK_P6,
    p7Groups: TOEIC_MOCK_VOL1.filter((g) => g.set === 1),
  });
  const lRep = scoreListeningExam(lSet1, lSet1.map((q) => q.ans), 1840);
  const rRep = scoreMockExam(rSet1, rSet1.map((q, idx) => (idx < 70 ? q.ans : (q.ans + 1) % 4)), 3100);
  assert.equal(lRep.correct, 100);
  assert.equal(lRep.scaled, 495);
  assert.equal(lRep.band, 'C1');
  const fullRep = scoreFullToeicExam(lRep, rRep);
  assert.equal(fullRep.listenScaled, 495);
  assert.equal(fullRep.readScaled, 325);
  assert.equal(fullRep.totalScaled, 820);
  assert.equal(fullRep.band, 'B2');
  assert.equal(fullRep.correct, 170);
  assert.equal(fullRep.total, 200);
  assert.equal(fullRep.elapsedSec, 4940);
});

test('DAILY_PACKS provides 1,000 unique everyday chunks separated cleanly from TOEIC decks', () => {
  assert.equal(DAILY_PACKS.length, 20);
  const toeicFronts = new Set();
  for (const p of TOEIC_PACKS) {
    for (const [front] of p.cards) toeicFronts.add(front.trim().toLowerCase());
  }
  const seenFront = new Set();
  const seenBack = new Set();
  const dailyItems = [];

  for (const pack of DAILY_PACKS) {
    assert.ok(pack.deck.startsWith('Daily · '), `Daily pack deck must start with "Daily · ": ${pack.deck}`);
    assert.equal(pack.cards.length, 50, `Daily pack ${pack.id} must have 50 cards`);
    for (const [front, back, example] of pack.cards) {
      assert.equal((front.match(/___/g) || []).length, 1, `Expected single ___ blank: ${front}`);
      assert.ok(/\([^)]*[\u0E00-\u0E7F]+[^)]*\)$/.test(front.trim()), `Missing Thai cue: ${front}`);
      assert.ok(back && back.split('/')[0].trim().includes(' '), `Expected multi-word everyday chunk: ${back}`);
      const fk = front.trim().toLowerCase();
      const bk = back.trim().toLowerCase();
      assert.ok(!toeicFronts.has(fk), `Collision with TOEIC_PACKS: ${front}`);
      assert.ok(!seenFront.has(fk), `Duplicate daily front: ${front}`);
      assert.ok(!seenBack.has(bk), `Duplicate daily back chunk: ${back}`);
      seenFront.add(fk);
      seenBack.add(bk);
      dailyItems.push({ deck: pack.deck, front, back, example });
    }
  }
  assert.equal(dailyItems.length, 1000);

  const toeicItems = TOEIC_PACKS.flatMap((p) => p.cards.map(([front, back, example]) => ({ deck: p.deck, front, back, example })));
  let seq = 0;
  const imported = importCardPack([], [...toeicItems, ...dailyItems], '2026-11-17', () => `d-${++seq}`);
  assert.equal(imported.added, 2000);
  assert.equal(imported.cards.length, 2000);

  const dailyQuiz = buildCardQuiz(imported.cards, { count: 20, deck: 'Daily · *' });
  assert.equal(dailyQuiz.length, 20);
  assert.ok(dailyQuiz.every((q) => String(q.tag || '').startsWith('Daily · ')));

  const toeicQuiz = buildCardQuiz(imported.cards, { count: 20, deck: 'TOEIC · *' });
  assert.equal(toeicQuiz.length, 20);
  assert.ok(toeicQuiz.every((q) => String(q.tag || '').startsWith('TOEIC · ')));
});

test('OXFORD_PACKS provides 2,983 official CEFR words with POS tags, preserves pos on import, and scopes quizzes cleanly', () => {
  assert.equal(OXFORD_PACKS.length, 30);
  const VALID_POS = /^(n\.|v\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|art\.|excl\.|num\.|ord\.|modal v\.|aux\. v\.|link\. v\.|inf\. marker)(,\s*(n\.|v\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|art\.|excl\.|num\.|ord\.|modal v\.|aux\. v\.|link\. v\.|inf\. marker))*$/;
  const seenKeys = new Set();
  const levelCounts = { A1: 0, A2: 0, B1: 0, B2: 0 };
  const oxItems = [];

  for (const pack of OXFORD_PACKS) {
    assert.ok(pack.deck.startsWith('Oxford · '), `Oxford pack deck must start with "Oxford · ": ${pack.deck}`);
    const lvlMatch = pack.deck.match(/^Oxford · (A1|A2|B1|B2) · /);
    assert.ok(lvlMatch, `Missing CEFR level in deck: ${pack.deck}`);
    assert.ok(Array.isArray(pack.cards) && pack.cards.length >= 90, `Unexpected size in ${pack.id}`);
    for (const [word, back, example, pos] of pack.cards) {
      assert.ok(word && word.trim().length > 0, `Empty word in ${pack.id}`);
      assert.ok(VALID_POS.test(pos), `Invalid POS "${pos}" for "${word}"`);
      assert.ok(/[\u0E00-\u0E7F]/.test(back) && !/[\/()]/.test(back), `Invalid back "${back}" for "${word}"`);
      assert.ok(example && example.trim().length >= 8 && !/[\u0E00-\u0E7F]/.test(example), `Invalid example "${example}" for "${word}"`);
      const k = `${word.trim().toLowerCase()}\0${pos.trim().toLowerCase()}`;
      assert.ok(!seenKeys.has(k), `Duplicate Oxford word+POS: ${word} (${pos})`);
      seenKeys.add(k);
      levelCounts[lvlMatch[1]]++;
      oxItems.push({ deck: pack.deck, front: word, back, example, pos });
    }
  }
  assert.equal(oxItems.length, 2983);
  assert.deepEqual(levelCounts, { A1: 900, A2: 794, B1: 691, B2: 598 });

  let seq = 0;
  const imported = importCardPack([], oxItems, '2026-11-18', () => `ox-${++seq}`);
  assert.equal(imported.added, 2983);
  assert.equal(imported.cards.length, 2983);

  const itLower = imported.cards.find((c) => c.front === 'it');
  const itTech = imported.cards.find((c) => c.front === 'IT');
  assert.equal(itLower?.pos, 'pron.');
  assert.equal(itTech?.pos, 'n.');

  const reimported = importCardPack(imported.cards, oxItems, '2026-11-18', () => `ox-${++seq}`);
  assert.equal(reimported.added, 0);

  const a1Quiz = buildCardQuiz(imported.cards, { count: 25, deck: 'Oxford · A1*' });
  assert.equal(a1Quiz.length, 25);
  assert.ok(a1Quiz.every((q) => String(q.tag || '').startsWith('Oxford · A1') && q.pos && q.q.endsWith(`(${q.pos})`)));
  assert.ok(a1Quiz.every((q) => q.choices.every((c) => /[\u0E00-\u0E7F]/.test(c))));

  // Advance Mode: Oxford 5000 B2-C1 expansion combines cleanly to 4,981 unique cards
  assert.equal(OXFORD_5K_PACKS.length, 20);
  const advLevels = { B2: 0, C1: 0 };
  const advItems = [];
  for (const pack of OXFORD_5K_PACKS) {
    assert.ok(pack.deck.startsWith('Oxford 5000 · '), `Invalid Oxford 5000 deck: ${pack.deck}`);
    const lm = pack.deck.match(/^Oxford 5000 · (B2|C1) · /);
    assert.ok(lm, `Missing B2/C1 level in deck: ${pack.deck}`);
    for (const [word, back, example, pos] of pack.cards) {
      assert.ok(VALID_POS.test(pos), `Invalid Advance POS "${pos}" for "${word}"`);
      assert.ok(/[\u0E00-\u0E7F]/.test(back) && !/[\/()]/.test(back), `Invalid Advance back "${back}" for "${word}"`);
      assert.ok(example && example.trim().length >= 8 && !/[\u0E00-\u0E7F]/.test(example), `Invalid Advance example "${example}" for "${word}"`);
      advLevels[lm[1]]++;
      advItems.push({ deck: pack.deck, front: word, back, example, pos });
    }
  }
  assert.equal(advItems.length, 1998);
  assert.deepEqual(advLevels, { B2: 701, C1: 1297 });

  const withAdv = importCardPack(imported.cards, advItems, '2026-11-18', () => `ox5-${++seq}`);
  assert.equal(withAdv.added, 1998);
  assert.equal(withAdv.cards.length, 4981);

  const fineAdj = withAdv.cards.find((c) => c.front === 'fine' && c.pos === 'adj.');
  const fineNv = withAdv.cards.find((c) => c.front === 'fine' && c.pos === 'n., v.');
  const monthMarch = withAdv.cards.find((c) => c.front === 'March');
  const verbMarch = withAdv.cards.find((c) => c.front === 'march');
  assert.ok(fineAdj && fineNv && monthMarch && verbMarch);

  const c1Quiz = buildCardQuiz(withAdv.cards, { count: 25, deck: 'Oxford 5000 · C1*' });
  assert.equal(c1Quiz.length, 25);
  assert.ok(c1Quiz.every((q) => String(q.tag || '').startsWith('Oxford 5000 · C1') && q.pos));

  const full5kQuiz = buildCardQuiz(withAdv.cards, { count: 25, deck: 'Oxford*' });
  assert.equal(full5kQuiz.length, 25);
  assert.ok(full5kQuiz.every((q) => String(q.tag || '').startsWith('Oxford')));

  // Oxford Phrase List (750 idioms & phrases across A1-C1) combines cleanly to 5,731 cards
  assert.equal(OXFORD_PHRASE_PACKS.length, 10);
  const VALID_PHRASE_POS = /^(phr\.|phr\. v\.|idiom)$/;
  const phraseLevels = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
  const phraseItems = [];
  for (const pack of OXFORD_PHRASE_PACKS) {
    assert.ok(pack.deck.startsWith('Oxford Phrases · '), `Invalid phrase deck: ${pack.deck}`);
    const lm = pack.deck.match(/^Oxford Phrases · (A1|A2|B1|B2|C1) · /);
    assert.ok(lm, `Missing CEFR level in phrase deck: ${pack.deck}`);
    for (const [phrase, back, example, pos] of pack.cards) {
      assert.ok(phrase && phrase.trim().length > 0, `Empty phrase in ${pack.id}`);
      assert.ok(VALID_PHRASE_POS.test(pos), `Invalid phrase tag "${pos}" for "${phrase}"`);
      assert.ok(/[\u0E00-\u0E7F]/.test(back) && !/[\/()]/.test(back), `Invalid phrase back "${back}" for "${phrase}"`);
      assert.ok(example && example.trim().length >= 8 && !/[\u0E00-\u0E7F]/.test(example), `Invalid phrase example "${example}" for "${phrase}"`);
      phraseLevels[lm[1]]++;
      phraseItems.push({ deck: pack.deck, front: phrase, back, example, pos });
    }
  }
  assert.equal(phraseItems.length, 750);
  assert.deepEqual(phraseLevels, { A1: 199, A2: 176, B1: 175, B2: 125, C1: 75 });

  const withPhrases = importCardPack(withAdv.cards, phraseItems, '2026-11-18', () => `oxp-${++seq}`);
  assert.equal(withPhrases.added, 750);
  assert.equal(withPhrases.cards.length, 5731);

  assert.ok(withPhrases.cards.find((c) => c.front === 'because of' && c.pos === 'prep.'));
  assert.ok(withPhrases.cards.find((c) => c.front === 'because of' && c.pos === 'phr.'));

  const wordsOnlyQuiz = buildCardQuiz(withPhrases.cards, { count: 40, deck: 'Oxford · *|Oxford 5000 · *' });
  assert.equal(wordsOnlyQuiz.length, 40);
  assert.ok(wordsOnlyQuiz.every((q) => !String(q.tag || '').startsWith('Oxford Phrases · ')));

  const phraseQuiz = buildCardQuiz(withPhrases.cards, { count: 25, deck: 'Oxford Phrases · *' });
  assert.equal(phraseQuiz.length, 25);
  assert.ok(phraseQuiz.every((q) => String(q.tag || '').startsWith('Oxford Phrases · ') && VALID_PHRASE_POS.test(q.pos)));
});

test('TOEFL iBT (2026) scoring helpers, adaptive routing, and all 10 4-skill sets validate cleanly', () => {
  assert.equal(toeflOverallBand(5.5, 5.0, 5.0, 5.0), 5.0); // 5.125 -> 5.0
  assert.equal(toeflOverallBand(5.5, 5.5, 5.0, 5.0), 5.5); // 5.25 -> 5.5
  assert.equal(toeflCefrBand(6.0), 'C2');
  assert.equal(toeflCefrBand(5.5), 'C1');
  assert.equal(toeflCefrBand(4.5), 'B2');
  assert.equal(toeflCefrBand(3.0), 'B1');
  assert.equal(toeflCefrBand(2.0), 'A2');
  assert.equal(toeflCefrBand(1.5), 'A1');
  assert.equal(toeflComparable120(5.5).range, '107–113');
  assert.equal(toeflComparable120(6.0).range, '114–120');

  assert.equal(toeflAdaptiveBranch(12, 18), 'stage2b');
  assert.equal(toeflAdaptiveBranch(11, 18), 'stage2a');
  assert.equal(toeflBandScore(10, 10, 'lower'), 4.5);
  assert.equal(toeflBandScore(10, 10, 'upper'), 6.0);
  assert.equal(toeflBandScore(0, 10, 'upper'), 3.0);

  assert.equal(scoreToeflWordGap('orbs', 'orbs'), true);
  assert.equal(scoreToeflWordGap(' ORBS ', 'orbs'), true);
  assert.equal(scoreToeflWordGap('bad', 'orbs'), false);

  const aiParsed = parseToeflAiEval('```json\n{"band": 5.3, "summary": "Clear", "strengths": ["Coherent"], "improvements": ["Vary verbs"]}\n```');
  assert.deepEqual(aiParsed, { band: 5.5, cefr: 'C1', summary: 'Clear', strengths: ['Coherent'], improvements: ['Vary verbs'] });
  assert.equal(parseToeflAiEval('not json'), null);

  const allSets = [...TOEFL_SETS_1, ...TOEFL_SETS_2];
  assert.equal(allSets.length, 10);
  const mcqs = [0, 0, 0, 0];
  let totalCloze = 0;
  let totalBuild = 0;
  let totalRepeat = 0;
  let totalInterview = 0;

  allSets.forEach((s, idx) => {
    assert.equal(s.set, idx + 1);
    assert.ok(s.theme && s.theme.length > 5);

    for (const sk of ['stage1', 'stage2a', 'stage2b']) {
      const rst = s.reading[sk];
      const gaps = rst.cloze.segments.filter((x) => typeof x === 'object');
      assert.equal(gaps.length, 10, `Set ${s.set} R.${sk} must have 10 gaps`);
      for (const g of gaps) {
        totalCloze++;
        assert.ok(scoreToeflWordGap(g.ans, g.ans));
      }
      for (const d of rst.daily) {
        for (const q of d.qs) { assert.equal(q.choices.length, 4); mcqs[q.ans]++; }
      }
      assert.equal(rst.academic.qs.length, 5);
      for (const q of rst.academic.qs) { assert.equal(q.choices.length, 4); mcqs[q.ans]++; }

      const lst = s.listening[sk];
      for (const r of lst.responses) { assert.ok(r.prompt && r.choices.length === 4); mcqs[r.ans]++; }
      for (const ln of lst.conversation.lines) { assert.ok(ln.role && ln.text && (ln.sex === 'm' || ln.sex === 'f')); }
      for (const q of lst.conversation.qs) { assert.equal(q.choices.length, 4); mcqs[q.ans]++; }
      for (const q of lst.announcement.qs) { assert.equal(q.choices.length, 4); mcqs[q.ans]++; }
      for (const q of lst.talk.qs) { assert.equal(q.choices.length, 4); mcqs[q.ans]++; }
    }

    assert.equal(s.writing.build.length, 10);
    for (const b of s.writing.build) {
      totalBuild++;
      assert.ok(Array.isArray(b.chunks) && b.chunks.length >= 5);
      assert.equal(scoreToeflBuildSentence(b.ans, b), true, `Invalid build item in Set ${s.set}: ${b.ans}`);
    }
    assert.ok(s.writing.email.bullets.length === 3 && s.writing.email.model.length > 80);
    assert.ok(s.writing.discussion.posts.length === 2 && s.writing.discussion.model.length > 80);

    assert.equal(s.speaking.repeat.length, 5);
    totalRepeat += s.speaking.repeat.length;
    assert.equal(s.speaking.interview.questions.length, 4);
    totalInterview += s.speaking.interview.questions.length;
  });

  assert.equal(totalCloze, 300);
  assert.equal(totalBuild, 100);
  assert.equal(totalRepeat, 50);
  assert.equal(totalInterview, 40);
  assert.deepEqual(mcqs, [158, 157, 157, 158]);
});

test('Post-exam Mock AI Assistant Coach sends all missed question details and parses full replies', () => {
  const lSet1 = buildListeningExam(1, TOEIC_LISTEN_VOL1);
  // Mirror a 51/100 Listening performance: Part 1 (6/6), Part 2 (15/25), Part 3 (17/39), Part 4 (13/30)
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
  const targetRight = { 1: 6, 2: 15, 3: 17, 4: 13 };
  const answers = lSet1.map((q) => {
    counts[q.part]++;
    if (counts[q.part] <= targetRight[q.part]) return q.ans;
    if (counts[q.part] === targetRight[q.part] + 1) return null; // 1 skipped per missed part
    return (q.ans + 1) % q.choices.length;
  });

  const rep = scoreListeningExam(lSet1, answers, 1653);
  assert.equal(rep.correct, 51);
  assert.equal(rep.scaled, 235);
  assert.equal(rep.band, 'A2');

  const summary = summarizeMockMistakes(lSet1, answers);
  assert.equal(summary.total, 100);
  assert.equal(summary.correct, 51);
  assert.equal(summary.missedCount, 49);
  assert.equal(summary.skippedCount, 3);
  assert.equal(summary.missed.length, 49);
  assert.equal(summary.missed[0].num, 22);
  assert.equal(summary.missed[0].pickLabel, 'Skipped');
  assert.match(summary.missed[0].tag, /^Part 2 · /);
  // Weakest parts first: Part 4 (43%), Part 3 (44%), Part 2 (60%), Part 1 (100%)
  assert.deepEqual(summary.byPart.map((p) => p.part), [4, 3, 2, 1]);
  assert.deepEqual(summary.byPart.map((p) => p.pct), [43, 44, 60, 100]);
  assert.ok(summary.topTags.length >= 2);

  const diagPrompt = buildMockDiagnosisPrompt({
    set: 1,
    isFull: false,
    report: rep,
    listenReport: rep,
    questions: lSet1,
    answers,
  });
  assert.ok(diagPrompt.system.length > 100 && diagPrompt.system.length <= 60000);
  assert.ok(diagPrompt.prompt.length > 8000 && diagPrompt.prompt.length <= 320000);
  assert.ok(diagPrompt.prompt.includes('Mock Set 1 — TOEIC Listening'));
  assert.ok(diagPrompt.prompt.includes('235/495'));
  assert.ok(diagPrompt.prompt.includes('Part 4: 13/30 (43%'));
  assert.ok(diagPrompt.prompt.includes('All Missed Questions by Type:'));
  const missedIndex = diagPrompt.prompt.split('All Missed Questions by Type:\n')[1].split('\n\n')[0];
  assert.deepEqual([...missedIndex.matchAll(/\bQ(\d+)\b/g)].map((m) => Number(m[1])).sort((a, b) => a - b), summary.missed.map((m) => m.num));
  const details = diagPrompt.prompt.split('Missed Question Details:\n\n')[1];
  assert.equal([...details.matchAll(/^Question: Q\d+ · /gm)].length, 49);
  for (const { index, tag } of summary.missed) {
    const q = lSet1[index];
    const choices = q.choices.map((choice, i) => `(${'ABCD'[i]}) ${choice}`);
    assert.ok(details.includes([
      `Question: Q${q.num} · ${tag}`, `Stem: ${q.prompt || q.q}`, 'Choices:', ...choices,
      `Student Pick: ${answers[index] === null ? 'Skipped' : choices[answers[index]]}`,
      `Correct Answer: ${choices[q.ans]}`,
    ].join('\n')), `Full request details for Q${q.num}`);
  }
  const transcript = lSet1.find((q) => q.num === 100).scriptLines.join('\n');
  assert.equal(details.split(transcript).length, 2, 'Shared transcript is sent once');

  const rSet1 = buildMockExam(1, { p5Pool: TOEIC_QUIZ, p6Passages: TOEIC_MOCK_P6, p7Groups: TOEIC_MOCK_VOL1 });
  const fullPrompt = buildMockDiagnosisPrompt({
    isFull: true, fullReport: {}, questions: [...lSet1, ...rSet1], answers: new Array(200).fill(null),
  }).prompt;
  assert.ok(fullPrompt.length <= 320000);
  assert.equal([...fullPrompt.matchAll(/^Question: Q\d+ · /gm)].length, 200);
  assert.match(fullPrompt, /Document \/ Visual Context:/);

  // Question coach prompts across Part 2, Part 3 Graphic, and follow-up modes
  const q7 = lSet1[6]; // Part 2 Q7
  assert.equal(q7.tag, 'Part 2 · Where question');
  assert.deepEqual([10, 12, 14, 15, 20, 24, 28].map((num) => lSet1[num - 1].tag), [
    'Part 2 · Choice question', 'Part 2 · Negative question', 'Part 2 · Request form',
    'Part 2 · Statement response', 'Part 2 · Suggestion', 'Part 2 · Yes/no question', 'Part 2 · What time question',
  ]);
  const pExplain = buildMockQuestionCoachPrompt(q7, (q7.ans + 1) % 3, { mode: 'explain' });
  assert.ok(pExplain.system.length <= 60000 && pExplain.prompt.length <= 8000);
  assert.ok(pExplain.prompt.includes('Q7 · Part 2'));
  assert.ok(pExplain.prompt.includes('Audio Script:'));

  const qGraphic = lSet1.find((q) => q.part === 3 && q.passages?.length);
  assert.ok(qGraphic);
  const pFormula = buildMockQuestionCoachPrompt(qGraphic, null, { mode: 'formula' });
  assert.ok(pFormula.prompt.length <= 8000);
  assert.ok(pFormula.prompt.includes('Document / Visual Context:'));
  assert.ok(pFormula.prompt.includes('ข้อนี้มีสูตรยังไง'));
  const longDoc = {
    ...qGraphic,
    passages: [{ blocks: ['Long reading context. '.repeat(100), { type: 'table', rows: Array.from({ length: 12 }, (_, i) => [`Row ${i + 1}`]) }] }],
  };
  assert.match(buildMockQuestionCoachPrompt(longDoc, null).prompt, /^Row 12$/m);

  const pFollow = buildMockQuestionCoachPrompt(q7, q7.ans, { mode: 'followup', questionText: 'ทำไมข้อ B ถึงใช้กับ When ไม่ได้ครับ' });
  assert.ok(pFollow.prompt.includes('Student follow-up question: ทำไมข้อ B ถึงใช้กับ When ไม่ได้ครับ'));

  // Resilient JSON parsing
  const parsedDiag = parseMockCoachReply('```json\n{"summary":"ควรเน้น Part 3-4","priorities":[{"part":"Part 3","focus":"จับ Keyword ก่อนฟัง","principle":"Paraphrasing","formula":"อ่านคำถามล่วงหน้า 3 ข้อ","drill":"ฝึกฟังวันละ 3 บทสนทนา"}],"nextStep":"ลุย Set 2"}\n```', 'diagnosis');
  assert.equal(parsedDiag.summary, 'ควรเน้น Part 3-4');
  assert.equal(parsedDiag.priorities.length, 1);
  assert.equal(parsedDiag.priorities[0].formula, 'อ่านคำถามล่วงหน้า 3 ข้อ');
  assert.equal(parsedDiag.nextStep, 'ลุย Set 2');

  const parsedQ = parseMockCoachReply('Here is your JSON:\n{"answer":"ตอบ A เพราะถามเวลา","howToSolve":"1. ฟังคำขึ้นต้น When","principle":"Wh-question ต้องตอบเวลา ไม่ใช่ Yes/No","formula":"When -> ตัด Yes/No ทิ้งทันที","whyWrong":"ข้อ B เป็นตัวลวงเสียงคล้าย","tip":"โฟกัสคำแรกของประโยค"}', 'question');
  assert.equal(parsedQ.formula, 'When -> ตัด Yes/No ทิ้งทันที');
  assert.equal(parsedQ.principle, 'Wh-question ต้องตอบเวลา ไม่ใช่ Yes/No');
  const longExplanation = 'ข้อสังเกตจากบทพูด\n'.repeat(120).trim();
  assert.equal(parseMockCoachReply(JSON.stringify({ answer: 'Please review this item.', whyWrong: longExplanation })).whyWrong, longExplanation);
  assert.equal(parseMockCoachReply(JSON.stringify({ priorities: [{ formula: longExplanation }] }), 'diagnosis').priorities[0].formula, longExplanation);
  assert.equal(parseMockCoachReply('not valid json', 'question'), null);
  assert.equal(parseMockCoachReply('{}', 'diagnosis'), null);
});

test('Mock Exam UI hides Assistant during active test and enables Post-Exam Coach & Question Tutor after submit', async () => {
  const fs = require('node:fs');
  const vm = require('node:vm');
  const logic = require('../ui/logic.js');

  function makeEl(tag, props = {}, ...children) {
    const node = {
      tagName: String(tag).toUpperCase(),
      children: [],
      style: {},
      classList: {
        add(...c) { const set = new Set((node.className || '').split(/\s+/).filter(Boolean)); c.forEach((x) => set.add(x)); node.className = [...set].join(' '); },
        remove(...c) { const set = new Set((node.className || '').split(/\s+/).filter(Boolean)); c.forEach((x) => set.delete(x)); node.className = [...set].join(' '); },
        toggle(c, f) { if (f === undefined ? !this.contains(c) : f) this.add(c); else this.remove(c); },
        contains(c) { return (node.className || '').split(/\s+/).includes(c); },
      },
      setAttribute(k, v) { this[k] = v; },
      append(...kids) { kids.forEach((k) => this.appendChild(k)); },
      appendChild(k) {
        if (k === null || k === undefined || k === false) return null;
        if (typeof k === 'string' || typeof k === 'number') {
          const tn = { tagName: '#TEXT', textContent: String(k), children: [] };
          this.children.push(tn);
          return tn;
        }
        this.children.push(k);
        return k;
      },
      replaceChildren(...kids) { this.children = []; this.append(...kids); },
      querySelector(sel) { return findAll(this, sel)[0] || null; },
      querySelectorAll(sel) { return findAll(this, sel); },
      get textContent() {
        if (this._text !== undefined && !this.children.length) return this._text;
        return (this._text || '') + this.children.map((c) => c.textContent || '').join('');
      },
      set textContent(v) { this._text = String(v ?? ''); this.children = []; },
      focus() {},
      select() {},
      blur() {},
      isConnected: true,
    };
    for (const [k, v] of Object.entries(props || {})) {
      if (k === 'style' && v && typeof v === 'object') Object.assign(node.style, v);
      else if (k === 'dataset' && v && typeof v === 'object') node.dataset = { ...v };
      else if (k === 'textContent') node.textContent = v;
      else node[k] = v;
    }
    for (const ch of children.flat()) node.appendChild(ch);
    return node;
  }

  function matches(node, sel) {
    if (!node || !node.tagName || node.tagName === '#TEXT') return false;
    if (sel.startsWith('#')) return node.id === sel.slice(1);
    if (sel.startsWith('.')) return (node.className || '').split(/\s+/).includes(sel.slice(1));
    return node.tagName.toLowerCase() === sel.toLowerCase();
  }
  function findAll(root, sel) {
    const out = [];
    function walk(n) {
      if (!n || !n.children) return;
      for (const c of n.children) {
        if (matches(c, sel)) out.push(c);
        walk(c);
      }
    }
    walk(root);
    return out;
  }

  const rootEl = makeEl('main', { id: 'cards-view' });
  let currentView = 'cards';
  const askCalls = [];
  const assistantCalls = [];
  let confirmSend = true;
  let hasKey = false;

  const ctx = {
    ...logic,
    TOEIC_LISTEN_VOLS: { 1: TOEIC_LISTEN_VOL1 },
    console,
    setTimeout,
    clearTimeout,
    setInterval: () => 1,
    clearInterval: () => {},
    Math, Date, Number, String, Boolean, Array, Object, Map, Set, Promise, RegExp, JSON, Error,
    el: makeEl,
    $: (id) => (id === 'cards-view' ? rootEl : findAll(rootEl, '#' + id)[0] || null),
    moduleData: { cards: {} },
    saveModule: async () => {},
    loadFile: async () => {},
    enhanceSelect: () => {},
    mobileSheet: () => {},
    Audio: class { play() { return Promise.resolve(); } pause() {} addEventListener() {} },
    emit: () => {},
    tell: (msg) => { ctx._lastTell = msg; },
    ask: async (msg, okLabel, _cancel, content) => { askCalls.push({ msg, okLabel, content }); return confirmSend; },
    setView: async (v) => { currentView = v; },
    isField: () => false,
    commandHooks: [],
    shortcutGroups: [],
    VermilFSRS7: {},
    OXFORD_PHRASE_PACKS: [],
    OXFORD_PACKS: [],
    DAILY_PACKS: [],
    TOEIC_PACKS: [],
    TOEIC_QUIZ: [],
    window: {
      speechSynthesis: { cancel() {}, getVoices() { return []; }, speak() {} },
      __TAURI__: {
        core: {
          invoke: async (cmd, args) => {
            if (cmd === 'listening_pack_status') return [{ vol: 1, installed: true, bytes: 1000 }];
            if (cmd === 'get_assistant') return { has_key: hasKey, model: hasKey ? 'gemini-2.5-flash' : '' };
            if (cmd === 'assistant_ask') {
              assistantCalls.push(args);
              if (args.system.includes('priorities')) {
                return JSON.stringify({
                  summary: 'คะแนน Listening 235/495 ควรเร่งแก้ Part 3 และ Part 4 เป็นอันดับแรก',
                  priorities: [
                    { part: 'Part 3 · Conversations', focus: 'อ่านคำถาม 3 ข้อล่วงหน้าก่อนเสียงพูด', principle: 'จับ Paraphrase', formula: 'Who/Where -> ฟังประโยคแรก', drill: 'ฝึกทำวันละ 3 บทสนทนา' },
                  ],
                  nextStep: 'ทบทวนข้อที่ผิดใน Set 1 แล้วลองทำ Set 2',
                });
              }
              const lastTurn = args.turns[args.turns.length - 1].text;
              if (lastTurn.includes('Follow-up on Q')) {
                return JSON.stringify({
                  answer: 'เพราะตัวเลือก B เป็น Yes/No ซึ่งใช้ตอบคำถามที่ขึ้นต้นด้วย When ไม่ได้ครับ',
                  howToSolve: '',
                  principle: 'Wh-question ห้ามตอบ Yes/No',
                  formula: 'When/Where/Why -> ตัด Yes/No ทิ้งทันที',
                  whyWrong: 'The choice responds to a different question.',
                  tip: 'Listen for the time phrase after the first speaker pauses.',
                });
              }
              return JSON.stringify({
                answer: 'ข้อนี้ถามเวลาจึงต้องตอบช่วงเวลา',
                howToSolve: '1. ฟังคำแรกของโจทย์\n2. ตัดตัวเลือกที่ตอบไม่ตรงคำถาม',
                principle: 'Question-Response Direct Time Match',
                formula: 'When/What time -> มองหา By / At / Tomorrow / Next week',
                whyWrong: 'ตัวเลือกที่คุณเลือกใช้คำพ้องเสียงหลอก (Sound-alike trap)',
                tip: 'ตั้งสติฟังคำแรกของ Part 2 ทุกข้อ',
              });
            }
            return null;
          },
        },
      },
    },
  };
  ctx.globalThis = ctx;
  let modDef = null;
  ctx.defineModule = (_id, def) => { modDef = def; };

  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(require('node:path').join(__dirname, '../ui/mod-cards.js'), 'utf8'), ctx);

  await modDef.start();
  const testModeBtn = findAll(rootEl, 'button').find((b) => b.textContent === 'Test');
  testModeBtn.onclick();
  const grid = findAll(rootEl, '.fc-mk-grid')[0];
  const startBtn = findAll(grid, 'button')[0];
  await startBtn.onclick();

  // 1. DURING ACTIVE EXAM: zero AI elements rendered
  assert.equal(findAll(rootEl, '#fc-mk-ai-diagnosis').length, 0);
  assert.equal(findAll(rootEl, '#fc-mk-ai-qbox').length, 0);
  assert.equal(findAll(rootEl, '.fc-mk-aibox').length, 0);

  // Submit the exam
  const submitBtn = findAll(rootEl, '.fc-mk-subbtn')[0];
  await submitBtn.onclick();
  await new Promise((r) => setTimeout(r, 10));

  // 2. AFTER SUBMITTING EXAM: both Overall Diagnosis and Per-Question Tutor render
  assert.equal(findAll(rootEl, '#fc-mk-ai-diagnosis').length, 1);
  assert.equal(findAll(rootEl, '#fc-mk-ai-qbox').length, 1);

  // 3. No API key yet -> Open Settings button navigates to settings
  const openSettingsBtn = findAll(rootEl, 'button').find((b) => b.textContent === 'Open Settings');
  assert.ok(openSettingsBtn);
  openSettingsBtn.onclick();
  assert.equal(currentView, 'settings');

  // 4. Enable API key and return to Cards view
  hasKey = true;
  modDef.show();
  await new Promise((r) => setTimeout(r, 10));

  const diagBtn = findAll(rootEl, '#fc-mk-ai-diag-btn')[0];
  const missedList = findAll(rootEl, '#fc-mk-missed-questions')[0];
  assert.equal(findAll(missedList, 'button').length, 100);
  assert.match(missedList.textContent, /Q100.*Skipped.*Correct/);
  const inspectQ100 = findAll(missedList, 'button').at(-1);
  inspectQ100.onclick();
  assert.match(findAll(rootEl, '#fc-mk-review-question')[0].textContent, /Q100 · Part 4/);

  confirmSend = false;
  await diagBtn.onclick();
  assert.equal(assistantCalls.length, 0);
  confirmSend = true;
  await diagBtn.onclick();
  assert.equal(assistantCalls.length, 1);
  const preview = findAll(askCalls.at(-1).content, 'pre');
  assert.equal(preview[0].textContent, assistantCalls[0].turns[0].text);
  assert.equal(preview[1].textContent, assistantCalls[0].system);
  assert.match(preview[0].textContent, /Question: Q100 · Part 4[^\n]*\nStem: [^\n]+\nChoices:\n\(A\)[\s\S]+?Student Pick: Skipped\nCorrect Answer: \([A-D]\)/);
  const diagBox = findAll(rootEl, '#fc-mk-ai-diagnosis')[0];
  assert.ok(diagBox.textContent.includes('คะแนน Listening 235/495'));
  assert.ok(diagBox.textContent.includes('Who/Where -> ฟังประโยคแรก'));

  // 5. Per-question 'How to solve & Principle' chip
  const qBox = findAll(rootEl, '#fc-mk-ai-qbox')[0];
  const solveChip = findAll(qBox, '.fc-mk-aichip')[0];
  await solveChip.onclick();
  const qBoxAfter = findAll(rootEl, '#fc-mk-ai-qbox')[0];
  assert.ok(qBoxAfter.textContent.includes('How to Solve'));
  assert.ok(qBoxAfter.textContent.includes('ข้อนี้ถามเวลาจึงต้องตอบช่วงเวลา'));
  assert.ok(qBoxAfter.textContent.includes('When/What time -> มองหา By / At / Tomorrow / Next week'));
  assert.ok(qBoxAfter.textContent.includes('Sound-alike trap'));

  // 6. Multi-turn follow-up question in thread
  const input = findAll(qBoxAfter, '#fc-mk-ai-input')[0];
  input.oninput({ target: { value: 'ทำไมข้อ B ถึงผิดครับ' } });
  const form = findAll(qBoxAfter, 'form')[0];
  await form.onsubmit({ preventDefault() {}, currentTarget: form });
  const qBoxThread = findAll(rootEl, '#fc-mk-ai-qbox')[0];
  assert.ok(qBoxThread.textContent.includes('ทำไมข้อ B ถึงผิดครับ'));
  assert.ok(qBoxThread.textContent.includes('Wh-question ห้ามตอบ Yes/No'));
  assert.ok(qBoxThread.textContent.includes('The choice responds to a different question.'));
  assert.ok(qBoxThread.textContent.includes('Listen for the time phrase after the first speaker pauses.'));
  const followUpPre = findAll(askCalls.at(-1).content, 'pre');
  const followUpRequest = assistantCalls.at(-1);
  assert.deepEqual(followUpPre.map((item) => item.textContent), [...followUpRequest.turns.map((turn) => turn.text), followUpRequest.system]);

  // 7. Return to Lobby -> verify Mock 1 card displays attempt history -> click Retake for Round 2 (68/100) -> verify Round 1 vs Round 2 comparison
  const backLobbyBtn = findAll(rootEl, 'button').find((b) => b.textContent.includes('All 30 Mock Sets'));
  backLobbyBtn.onclick();
  const set1AfterR1 = findAll(findAll(rootEl, '.fc-mk-grid')[0], 'button')[0];
  assert.ok(set1AfterR1.textContent.includes('1 attempt · View Report'));

  // Clicking scored Mock 1 in lobby opens its Score Report & Attempt History instead of wiping
  await set1AfterR1.onclick();
  const histBoxR1 = findAll(rootEl, '#fc-mk-history')[0];
  assert.ok(histBoxR1, 'Clicking scored set card must open Score Report with Attempt History');
  assert.ok(histBoxR1.textContent.includes('Round #1'));

  // Click Retake Set 1 and answer 68 questions right in Round #2
  const retakeBtn = findAll(rootEl, 'button').find((b) => b.textContent.includes('Retake Set 1'));
  await retakeBtn.onclick();
  for (let qi = 0; qi < 68; qi++) {
    const curChoices = findAll(rootEl, '.fc-qz-opt');
    // Pick the right choice for the first 68 questions by reading the underlying dataset
    const qObj = logic.buildListeningExam(1, TOEIC_LISTEN_VOL1)[qi];
    curChoices[qObj.ans].onclick();
    if (qi < 67) {
      findAll(rootEl, '.fc-qz-next')[0].onclick();
    }
  }
  const submitR2 = findAll(rootEl, '.fc-mk-subbtn')[0];
  await submitR2.onclick();
  await new Promise((r) => setTimeout(r, 10));

  const histBoxR2 = findAll(rootEl, '#fc-mk-history')[0];
  assert.ok(histBoxR2);
  assert.ok(histBoxR2.textContent.includes('รอบ 1: 0/100  →  รอบ 2: 68/100'));
  assert.ok(histBoxR2.textContent.includes('+68 ข้อ'));
  assert.ok(histBoxR2.textContent.includes('ผิด 32 ข้อ:'));
  assert.ok(histBoxR2.textContent.includes('ผิดซ้ำจากรอบก่อน (32):'));
  assert.ok(histBoxR2.textContent.includes('แก้ได้แล้วในรอบนี้ (+68):'));

  // Switch back to Round #1 and verify hero score switches to Round #1
  const viewR1Btn = findAll(histBoxR2, 'button').find((b) => b.textContent === 'View Round #1');
  assert.ok(viewR1Btn);
  viewR1Btn.onclick();
  const heroAfterSwitch = findAll(rootEl, '.fc-mk-hero')[0];
  assert.ok(heroAfterSwitch.textContent.includes('0 / 100 Correct'));
});

test('Mock Attempt History preserves legacy pre-v3.7.10 score entries (e.g. 51/100) and tracks Round 2 (68/100) missed questions', () => {
  const lSet1 = buildListeningExam(1, TOEIC_LISTEN_VOL1);
  // Legacy entry from v3.7.9 with 51/100 (235/495) and parts breakdown, before history[] existed
  const legacyEntry = {
    bestScaled: 235,
    bestRaw: 51,
    lastScaled: 235,
    lastRaw: 51,
    band: 'A2',
    attempts: 1,
    parts: {
      1: { correct: 6, total: 6 },
      2: { correct: 15, total: 25 },
      3: { correct: 17, total: 39 },
      4: { correct: 13, total: 30 },
    },
  };

  const normLegacy = normalizeMockHistory(legacyEntry, 'listening');
  assert.equal(normLegacy.length, 1);
  assert.equal(normLegacy[0].attempt, 1);
  assert.equal(normLegacy[0].correct, 51);
  assert.equal(normLegacy[0].scaled, 235);
  assert.equal(normLegacy[0].hasAnswers, false);

  // Verify AI Diagnosis prompt on legacy Round #1 (before per-question answers were saved) uses 51/100 & real part scores instead of 0/100
  const legacyDiag = buildMockDiagnosisPrompt({
    set: 1,
    isFull: false,
    report: { scaled: 235, band: 'A2', correct: 51, total: 100, parts: legacyEntry.parts },
    listenReport: { scaled: 235, band: 'A2', correct: 51, total: 100, parts: legacyEntry.parts },
    legacyAttempt: normLegacy[0],
    questions: lSet1,
    answers: new Array(100).fill(null),
  });
  assert.equal(legacyDiag.summary.correct, 51);
  assert.equal(legacyDiag.summary.missedCount, 49);
  assert.equal(legacyDiag.summary.skippedCount, 0);
  assert.equal(legacyDiag.summary.legacySummaryOnly, true);
  assert.equal(legacyDiag.summary.missed.length, 0);
  assert.match(legacyDiag.prompt, /Question-level answers were not saved/);
  assert.doesNotMatch(legacyDiag.prompt, /All Missed Questions by Type|Missed Question Details/);
  assert.ok(legacyDiag.prompt.includes('Score: 235/495 (CEFR A2, 51/100 correct)'));
  assert.ok(legacyDiag.prompt.includes('- Part 4: 13/30 (43%, missed 17)'));
  assert.ok(legacyDiag.prompt.includes('- Part 3: 17/39 (44%, missed 22)'));
  assert.ok(legacyDiag.prompt.includes('- Part 2: 15/25 (60%, missed 10)'));
  assert.ok(legacyDiag.prompt.includes('- Part 1: 6/6 (100%, missed 0)'));
  assert.ok(!legacyDiag.prompt.includes('0/100 correct'));
  assert.ok(!legacyDiag.prompt.includes('Skipped / Unanswered: 100'));
  const knownMissed = buildMockDiagnosisPrompt({ questions: lSet1, legacyAttempt: { ...normLegacy[0], parts: null, missedNums: [7] } });
  assert.match(knownMissed.prompt, /Recorded Missed Questions by Type:\n- Part 2 · Where question: Q7/);
  assert.match(knownMissed.prompt, /No part scores were saved/);
  assert.equal(knownMissed.summary.missed[0].pickLabel, 'Unavailable');
  assert.match(knownMissed.prompt, /Student Pick: Unavailable/);
  const legacyTutor = buildMockQuestionCoachPrompt(lSet1[6], null, { mode: 'trap', answerKnown: false });
  assert.match(legacyTutor.prompt, /Student Pick: Unavailable/);
  assert.doesNotMatch(legacyTutor.prompt, /Skipped|\(Missed\)/);

  // Now complete Round 2 with 68/100 correct
  const r2Answers = lSet1.map((q, idx) => (idx < 68 ? q.ans : (q.ans + 1) % q.choices.length));
  const r2Rep = scoreListeningExam(lSet1, r2Answers, 1520);
  assert.equal(r2Rep.correct, 68);

  const afterR2 = recordMockScoreEntry(legacyEntry, {
    section: 'listening',
    report: r2Rep,
    questions: lSet1,
    answers: r2Answers,
    examMode: 'exam',
    at: '2026-11-20T12:15',
  });
  assert.equal(afterR2.attempts, 2);
  assert.equal(afterR2.bestRaw, 68);
  assert.equal(afterR2.lastRaw, 68);

  const hist2 = normalizeMockHistory(afterR2, 'listening');
  assert.equal(hist2.length, 2);
  assert.equal(hist2[0].attempt, 1);
  assert.equal(hist2[0].correct, 51);
  assert.equal(hist2[1].attempt, 2);
  assert.equal(hist2[1].correct, 68);
  assert.equal(hist2[1].deltaRaw, 17);
  assert.equal(hist2[1].missedNums.length, 32);
  assert.equal(hist2[1].missedNums[0], 69);

  // Round 3: 75/100 correct (fixes Q69..Q75, still misses Q76..Q100)
  const r3Answers = lSet1.map((q, idx) => (idx < 75 ? q.ans : (q.ans + 1) % q.choices.length));
  const r3Rep = scoreListeningExam(lSet1, r3Answers, 1480);
  const afterR3 = recordMockScoreEntry(afterR2, {
    section: 'listening',
    report: r3Rep,
    questions: lSet1,
    answers: r3Answers,
    examMode: 'exam',
    at: '2026-11-20T13:00',
  });
  const hist3 = normalizeMockHistory(afterR3, 'listening');
  assert.equal(hist3.length, 3);
  assert.equal(hist3[2].attempt, 3);
  assert.equal(hist3[2].correct, 75);
  assert.equal(hist3[2].deltaRaw, 7);
  assert.deepEqual(hist3[2].fixedMissed, [69, 70, 71, 72, 73, 74, 75]);
  assert.equal(hist3[2].repeatedMissed.length, 25);
  assert.equal(hist3[2].repeatedMissed[0], 76);
});
