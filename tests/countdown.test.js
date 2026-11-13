const test = require('node:test');
const assert = require('node:assert');
const { nextEventDay, countdownLabel } = require('../ui/logic.js');

test('countdown: yearly events return, others stay put', () => {
  assert.equal(nextEventDay({ day: '2026-12-25', yearly: false }, '2026-11-12'), '2026-12-25');
  assert.equal(nextEventDay({ day: '2026-03-01', yearly: false }, '2026-11-12'), '2026-03-01'); // past, stays past
  assert.equal(nextEventDay({ day: '1990-11-20', yearly: true }, '2026-11-12'), '2026-11-20'); // later this year
  assert.equal(nextEventDay({ day: '1990-11-12', yearly: true }, '2026-11-12'), '2026-11-12'); // today
  assert.equal(nextEventDay({ day: '1990-03-05', yearly: true }, '2026-11-12'), '2027-03-05'); // next year
  assert.equal(nextEventDay({ day: '2000-02-29', yearly: true }, '2027-01-10'), '2027-02-28');
  assert.equal(nextEventDay({ day: '2000-02-29', yearly: true }, '2028-01-10'), '2028-02-29');
  assert.deepEqual([0, 1, -1, 5, -3].map(countdownLabel), ['Today', 'Tomorrow', 'Yesterday', '5 days', '3 days ago']);
});
