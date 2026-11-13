const test = require('node:test');
const assert = require('node:assert');
const { clock, minutesLabel, focusSummary } = require('../ui/logic.js');

test('focus timer helpers', () => {
  assert.equal(clock(25 * 60000), '25:00');
  assert.equal(clock(1), '00:01'); // rounds up
  assert.equal(clock(-5), '00:00');
  assert.equal(minutesLabel(45), '45 min');
  assert.equal(minutesLabel(60), '1 h');
  assert.equal(minutesLabel(125), '2 h 5 min');
});

test('focusSummary adds up today, the last 7 days and each task', () => {
  const sessions = [
    { task: 'a', title: 'Report', day: '2026-11-12', min: 25 },
    { task: 'a', title: 'Report', day: '2026-11-12', min: 25 },
    { task: 'b', title: 'Email', day: '2026-11-06', min: 10 }, // 6 days back: still in the week
    { task: 'b', title: 'Email', day: '2026-11-05', min: 99 }, // 7 days back: out of the week, in the total
    { task: null, title: '', day: '2026-11-11', min: 5 },
  ];
  const s = focusSummary(sessions, '2026-11-12');
  assert.equal(s.todayMin, 50);
  assert.equal(s.todayCount, 2);
  assert.equal(s.weekMin, 65);
  assert.deepEqual(s.total, { a: 50, b: 109 });
  assert.deepEqual(s.byTask.map((x) => [x.title, x.min]), [['Report', 50], ['Email', 10], ['', 5]]);
  assert.equal(focusSummary([], '2026-11-12').weekMin, 0);
});
