const test = require('node:test');
const assert = require('node:assert');
const { CARD_BOX_DAYS, cardDue, reviewCard, fsrsStability, fsrsRetrievability, fsrsReview, fsrsPreview, deckSummary, studyQueue, importCardPack, stripGapCue, cleanChoiceLabel, buildCardQuiz, buildCuratedQuiz, scoreQuiz, toeicReadingScore, toeicCefrBand, toeicListeningScore, toeicListeningCefr, toeicTotalScore, toeicTotalCefr, buildMockExam, scoreMockExam, buildListeningExam, scoreListeningExam, scoreFullToeicExam, snapToeflBand, toeflCefrBand, toeflComparable120, toeflOverallBand, toeflAdaptiveBranch, toeflBandScore, scoreToeflWordGap, scoreToeflBuildSentence, parseToeflAiEval, xpAward } = require('../ui/logic.js');
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

test('FSRS-4.5 schedules initial grades, subsequent intervals, lapses and retrievability', () => {
  const c0 = { id: 'f1', deck: 'TOEIC', front: 'All staff must ___ the rules.', back: 'comply with', example: 'Suppliers comply with safety laws.', next: '2026-11-16', reviews: 0 };
  assert.equal(fsrsRetrievability(c0, '2026-11-16'), 1);

  const pv0 = fsrsPreview(c0, '2026-11-16');
  assert.deepEqual(pv0, { 1: 1, 2: 1, 3: 4, 4: 14 });

  const c1 = fsrsReview(c0, 3, '2026-11-16'); // Good
  assert.equal(c1.ivl, 4);
  assert.equal(c1.next, '2026-11-20');
  assert.equal(c1.reviews, 1);
  assert.ok(Math.abs(fsrsRetrievability(c1, '2026-11-20') - 0.9) < 0.02);

  const pv1 = fsrsPreview(c1, '2026-11-20');
  assert.ok(pv1[1] < pv1[2] && pv1[2] < pv1[3] && pv1[3] < pv1[4]);

  const c2 = fsrsReview(c1, 3, '2026-11-20'); // Good again
  assert.ok(c2.s > c1.s && c2.ivl >= 10);

  const lapsed = fsrsReview(c2, 1, c2.next); // Again -> lapse
  assert.equal(lapsed.ivl, 1);
  assert.equal(lapsed.lapses, 1);
  assert.ok(lapsed.s < c2.s);
  assert.ok(lapsed.d > c2.d);

  // Legacy Leitner cards keep their progress instead of resetting to 0
  const legacy = { id: 'old', box: 3, lastReviewed: '2026-11-09', next: '2026-11-16' };
  assert.equal(fsrsStability(legacy), 7);
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
