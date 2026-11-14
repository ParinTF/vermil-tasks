const test = require('node:test');
const assert = require('node:assert');
const { CARD_BOX_DAYS, cardDue, reviewCard, deckSummary } = require('../ui/logic.js');

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

test('deckSummary counts due, mastered (Box 4-5) and sorted deck names', () => {
  const cards = [
    { id: '1', deck: 'Tech', box: 4, next: '2026-11-20' },
    { id: '2', deck: 'Lang', box: 1, next: '2026-11-15' },
    { id: '3', deck: 'Tech', box: 5, next: '2026-11-10' },
  ];
  assert.deepEqual(deckSummary(cards, '2026-11-15'), {
    total: 3,
    due: 2,
    mastered: 2,
    decks: ['Lang', 'Tech'],
  });
});
