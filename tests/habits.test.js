const test = require('node:test');
const assert = require('node:assert');
const { habitStreak, habitBest, habitDay, heatLevel, habitRate } = require('../ui/logic.js');

test('habits: streaks count only the days a habit is due', () => {
  const weekdays = { id: 'w', name: 'Run', days: [1, 2, 3, 4, 5], created: '2026-11-01' };
  const daily = { id: 'd', name: 'Read', days: [0, 1, 2, 3, 4, 5, 6], created: '2026-11-01' };
  // 2026-11-12 is a Thursday. Done Mon 9, Tue 10, Wed 11 (weekends before were not due for "w")
  const log = { '2026-11-06': ['w', 'd'], '2026-11-07': ['d'], '2026-11-08': ['d'], '2026-11-09': ['w', 'd'], '2026-11-10': ['w', 'd'], '2026-11-11': ['w', 'd'] };
  assert.equal(habitStreak(weekdays, log, '2026-11-12'), 4); // Thu not done yet: Fri 6, Mon 9, Tue 10, Wed 11; the weekend is skipped
  assert.equal(habitStreak(daily, log, '2026-11-12'), 6); // Nov 6..11
  assert.equal(habitStreak(daily, { ...log, '2026-11-12': ['d'] }, '2026-11-12'), 7);
  assert.equal(habitStreak(daily, { ...log, '2026-11-10': [] }, '2026-11-12'), 1); // a missed day breaks it
  assert.equal(habitStreak({ ...daily, created: '2026-11-12' }, {}, '2026-11-12'), 0);
  assert.equal(habitBest(daily, log, '2026-11-12'), 6);
  assert.equal(habitBest(weekdays, log, '2026-11-12'), 4);
});

test('habits: day totals, heat levels and rates', () => {
  const a = { id: 'a', name: 'A', days: [0, 1, 2, 3, 4, 5, 6], created: '2026-11-01' };
  const b = { id: 'b', name: 'B', days: [6], created: '2026-11-01' }; // Saturdays only
  const log = { '2026-11-12': ['a'], '2026-11-14': ['a', 'b'] };
  assert.deepEqual(habitDay([a, b], log, '2026-11-12'), { done: 1, total: 1 }); // B is not due on a Thursday
  assert.deepEqual(habitDay([a, b], log, '2026-11-14'), { done: 2, total: 2 });
  assert.deepEqual(habitDay([a, b], log, '2026-10-30'), { done: 0, total: 0 }); // before they existed
  assert.deepEqual([{ done: 0, total: 0 }, { done: 0, total: 2 }, { done: 1, total: 4 }, { done: 2, total: 4 }, { done: 3, total: 4 }, { done: 4, total: 4 }].map(heatLevel), [0, 0, 1, 2, 3, 4]);
  assert.equal(habitRate(a, log, '2026-11-14', 7), 29); // 2 of 7 days
  assert.equal(habitRate(b, log, '2026-11-14', 7), 100); // its one due day
  assert.equal(habitRate({ ...b, created: '2026-11-13' }, log, '2026-11-12', 7), null);
});
