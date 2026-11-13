const test = require('node:test');
const assert = require('node:assert');
const { MOODS, moodAverage } = require('../ui/logic.js');

test('journal: mood average over the days that have a mood', () => {
  const e = { '2026-11-12': { mood: 4, text: 'x' }, '2026-11-11': { mood: 2, text: '' }, '2026-11-10': { mood: 0, text: 'no mood' }, '2026-11-01': { mood: 5, text: '' } };
  assert.equal(moodAverage(e, '2026-11-12', 7), 3); // (4 + 2) / 2; the 0 and the old day are out
  assert.equal(moodAverage(e, '2026-11-12', 30), 3.7); // (4 + 2 + 5) / 3
  assert.equal(moodAverage({}, '2026-11-12', 7), null);
  assert.equal(MOODS[3], 'Okay');
});
