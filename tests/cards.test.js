const test = require('node:test');
const assert = require('node:assert');
const { CARD_BOX_DAYS, cardDue, reviewCard, fsrsStability, fsrsRetrievability, fsrsReview, fsrsPreview, deckSummary, studyQueue, importCardPack, stripGapCue, cleanChoiceLabel, buildCardQuiz, buildCuratedQuiz, scoreQuiz, xpAward } = require('../ui/logic.js');
const { TOEIC_PACKS } = require('../ui/toeic-pack.js');
const { TOEIC_QUIZ } = require('../ui/toeic-quiz.js');

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

test('Quiz builder generates 4-choice questions with explanations and validates curated TOEIC_QUIZ', () => {
  const seenIds = new Set();
  assert.equal(TOEIC_QUIZ.length, 60);
  for (const item of TOEIC_QUIZ) {
    assert.ok(item.id && !seenIds.has(item.id), `Duplicate id ${item.id}`);
    seenIds.add(item.id);
    assert.ok(item.q.includes('___') && item.choices.length === 4);
    assert.ok(item.ans >= 0 && item.ans < 4);
    assert.ok(item.why && item.why.length > 20);
  }

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

  const filtered = buildCuratedQuiz(TOEIC_QUIZ, { count: 0, tag: 'Connector' });
  assert.equal(filtered.length, 10);
});
