const test = require('node:test');
const assert = require('node:assert');
const { reviewText, reviewRange, reviewBuckets } = require('../ui/logic.js');

test('review text: a title line, then each section with its lines as bullets', () => {
  const text = reviewText('6 Nov to 12 Nov', [{ title: 'Tasks', lines: ['9 done', '2 overdue'] }, { title: 'Money', lines: ['Spent ฿1,200'] }]);
  assert.equal(text, 'Review: 6 Nov to 12 Nov\n\nTasks\n- 9 done\n- 2 overdue\n\nMoney\n- Spent ฿1,200\n');
  assert.equal(reviewText('x', []), 'Review: x\n');
});

test('review: the span for a day, a week, a month and a year, and how far back they go', () => {
  const t = '2026-11-12';
  assert.deepEqual(reviewRange('day', 0, t), { since: t, until: t });
  assert.deepEqual(reviewRange('day', 2, t), { since: '2026-11-10', until: '2026-11-10' });
  assert.deepEqual(reviewRange('week', 0, t), { since: '2026-11-06', until: t });
  assert.deepEqual(reviewRange('week', 1, t), { since: '2026-10-30', until: '2026-11-05' });
  assert.deepEqual(reviewRange('month', 0, t), { since: '2026-11-01', until: t }); // this month stops at today
  assert.deepEqual(reviewRange('month', 1, t), { since: '2026-10-01', until: '2026-10-31' });
  assert.deepEqual(reviewRange('month', 12, t), { since: '2025-11-01', until: '2025-11-30' });
  assert.deepEqual(reviewRange('year', 0, t), { since: '2026-01-01', until: t });
  assert.deepEqual(reviewRange('year', 1, t), { since: '2025-01-01', until: '2025-12-31' });
});

test('review: a count adds up with zeros, a rating averages with gaps, a year goes by month', () => {
  const count = { zero: true, byDay: { '2026-11-02': 3, '2026-11-04': 2 } };
  const w = reviewBuckets(count, '2026-11-01', '2026-11-07');
  assert.deepEqual(w.buckets.map((b) => b.value), [0, 3, 0, 2, 0, 0, 0]);
  assert.deepEqual([w.total, w.monthly, w.has], [5, false, true]);
  const rating = { zero: false, byDay: { '2026-11-02': 4, '2026-11-03': 2 } };
  const r = reviewBuckets(rating, '2026-11-01', '2026-11-04');
  assert.deepEqual(r.buckets.map((b) => b.value), [null, 4, 2, null]); // days without an entry are gaps, not zeros
  assert.equal(r.total, 3);
  const none = reviewBuckets({ zero: false, byDay: {} }, '2026-11-01', '2026-11-04');
  assert.deepEqual([none.total, none.has], [null, false]);
  assert.equal(reviewBuckets({ zero: true, byDay: {} }, '2026-11-01', '2026-11-04').has, false);
  const year = reviewBuckets({ zero: true, byDay: { '2026-01-05': 1, '2026-01-20': 2, '2026-03-01': 4 } }, '2026-01-01', '2026-11-12');
  assert.deepEqual([year.monthly, year.buckets.length, year.buckets[0], year.buckets[2]], [true, 11, { key: '2026-01', value: 3 }, { key: '2026-03', value: 4 }]);
  assert.equal(year.total, 7);
  const avgYear = reviewBuckets({ zero: false, byDay: { '2026-01-05': 2, '2026-01-06': 4 } }, '2026-01-01', '2026-11-12');
  assert.equal(avgYear.buckets[0].value, 3);
});
