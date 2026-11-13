const test = require('node:test');
const assert = require('node:assert');
const { weightTrend, medDue, dosesDue } = require('../ui/logic.js');

test('health: weight trend and medicine doses', () => {
  const t = weightTrend({ '2026-11-12': 70.4, '2026-11-05': 71.0, '2026-10-01': 80, '2026-11-08': 0 }, '2026-11-12', 14);
  assert.deepEqual(t.points.map((p) => p.day), ['2026-11-05', '2026-11-12']); // the old day and the empty one are out
  assert.equal(t.change, -0.6);
  assert.equal(weightTrend({ '2026-11-12': 70 }, '2026-11-12', 14).change, null); // one point: no change yet
  const med = { id: 'm', name: 'Vitamin', times: ['08:00', '20:00'], days: [1, 2, 3, 4, 5] }; // weekdays
  assert.equal(medDue(med, '2026-11-12'), true); // Thursday
  assert.equal(medDue(med, '2026-11-14'), false); // Saturday
  assert.deepEqual(dosesDue([med], '2026-11-12', '07:59', {}, {}).length, 0);
  assert.deepEqual(dosesDue([med], '2026-11-12', '08:00', {}, {}).map((d) => d.key), ['m@08:00']);
  assert.deepEqual(dosesDue([med], '2026-11-12', '21:00', { 'm@08:00': true }, {}).map((d) => d.key), ['m@20:00']); // the morning one was taken
  assert.deepEqual(dosesDue([med], '2026-11-12', '21:00', {}, { 'm@08:00': true, 'm@20:00': true }), []); // both already announced
  assert.deepEqual(dosesDue([med], '2026-11-14', '21:00', {}, {}), []);
});
