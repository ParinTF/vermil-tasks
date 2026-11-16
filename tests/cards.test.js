const test = require('node:test');
const assert = require('node:assert');
const { CARD_BOX_DAYS, cardDue, reviewCard, fsrsStability, fsrsRetrievability, fsrsReview, fsrsPreview, deckSummary, studyQueue, importCardPack, stripGapCue, cleanChoiceLabel, buildCardQuiz, buildCuratedQuiz, scoreQuiz, toeicReadingScore, toeicCefrBand, buildMockExam, scoreMockExam, xpAward } = require('../ui/logic.js');
const { TOEIC_PACKS } = require('../ui/toeic-pack.js');
const { TOEIC_QUIZ } = require('../ui/toeic-quiz.js');
const { TOEIC_MOCK_P6 } = require('../ui/toeic-mock-p6.js');
const { TOEIC_MOCK_VOL1 } = require('../ui/toeic-mock-1.js');
const { TOEIC_MOCK_VOL2 } = require('../ui/toeic-mock-2.js');
const { TOEIC_MOCK_VOL3 } = require('../ui/toeic-mock-3.js');
const { TOEIC_MOCK_VOL4 } = require('../ui/toeic-mock-4.js');
const { TOEIC_MOCK_VOL5 } = require('../ui/toeic-mock-5.js');
const { TOEIC_MOCK_VOL6 } = require('../ui/toeic-mock-6.js');

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
