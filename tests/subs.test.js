const test = require('node:test');
const assert = require('node:assert');
const { addCycle, rollForward, monthlyCost, daysUntil } = require('../ui/logic.js');

test('subscriptions: cycles keep their day of the month', () => {
  assert.equal(addCycle('2026-01-31', 'month', 31), '2026-02-28'); // a short month
  assert.equal(addCycle('2026-02-28', 'month', 31), '2026-03-31'); // and back to the 31st
  assert.equal(addCycle('2026-12-15', 'month', 15), '2027-01-15');
  assert.equal(addCycle('2028-02-29', 'year', 29), '2029-02-28');
  assert.equal(addCycle('2026-11-12', 'week', 12), '2026-11-19');
  assert.equal(rollForward('2026-09-10', 'month', 10, '2026-11-12'), '2026-12-10'); // missed two, next is ahead
  assert.equal(rollForward('2026-11-12', 'month', 12, '2026-11-12'), '2026-11-12'); // today counts
});

test('subscriptions: monthly cost and days until', () => {
  assert.equal(monthlyCost(199, 'month'), 199);
  assert.equal(monthlyCost(1200, 'year'), 100);
  assert.equal(monthlyCost(10, 'week'), 43.33);
  assert.equal(daysUntil('2026-11-15', '2026-11-12'), 3);
  assert.equal(daysUntil('2026-11-10', '2026-11-12'), -2);
  assert.equal(daysUntil('2026-12-01', '2026-11-30'), 1); // across a month end
});
