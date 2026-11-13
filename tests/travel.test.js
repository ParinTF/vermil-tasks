const test = require('node:test');
const assert = require('node:assert');
const { PACKING_TEMPLATES, tripDays, tripState, packingProgress } = require('../ui/logic.js');

test('travel: days, state and packing', () => {
  assert.deepEqual(tripDays('2026-12-30', '2027-01-02'), ['2026-12-30', '2026-12-31', '2027-01-01', '2027-01-02']);
  assert.equal(tripDays('2026-01-01', '2026-12-31').length, 60); // capped
  assert.deepEqual(tripDays('2026-02-02', '2026-02-01'), []);
  const trip = { from: '2026-12-01', to: '2026-12-05' };
  assert.deepEqual(tripState(trip, '2026-11-12'), { kind: 'before', days: 19 });
  assert.deepEqual(tripState(trip, '2026-12-01'), { kind: 'during', day: 1, of: 5 });
  assert.deepEqual(tripState(trip, '2026-12-05'), { kind: 'during', day: 5, of: 5 });
  assert.deepEqual(tripState(trip, '2026-12-08'), { kind: 'after', days: 3 });
  assert.deepEqual(packingProgress([{ done: true }, { done: false }, { done: true }]), { done: 2, total: 3 });
  assert.ok(PACKING_TEMPLATES.Essentials.includes('Passport or ID'));
});
