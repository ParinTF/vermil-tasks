const test = require('node:test');
const assert = require('node:assert');
const { goalProgress } = require('../ui/logic.js');

test('goals: reaching a target and staying under a limit', () => {
  assert.deepEqual(goalProgress('atleast', 40, 100), { pct: 40, state: 'ok' });
  assert.deepEqual(goalProgress('atleast', 100, 100), { pct: 100, state: 'done' });
  assert.deepEqual(goalProgress('atleast', 130, 100), { pct: 130, state: 'done' });
  assert.deepEqual(goalProgress('atmost', 80, 100), { pct: 80, state: 'ok' });
  assert.deepEqual(goalProgress('atmost', 100, 100), { pct: 100, state: 'ok' }); // exactly at the limit is still fine
  assert.deepEqual(goalProgress('atmost', 101, 100), { pct: 101, state: 'over' });
  assert.deepEqual(goalProgress('atleast', 5, 0), { pct: 0, state: 'done' });
});
