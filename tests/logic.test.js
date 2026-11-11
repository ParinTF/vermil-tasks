const test = require('node:test');
const assert = require('node:assert');
const { nextOccurrence } = require('../ui/logic.js');

const wed = new Date(2026, 10, 11); // Wednesday 11 Nov 2026
const next = (repeat, due, today = wed) => nextOccurrence(repeat, due, today);

test('daily: tomorrow, also when overdue by days', () => {
  assert.equal(next('daily', null), '2026-11-12');
  assert.equal(next('daily', '2026-11-11T08:30'), '2026-11-12');
  assert.equal(next('daily', '2026-11-02T08:30'), '2026-11-12');
});
test('daily done a day early skips to the day after its due date', () => assert.equal(next('daily', '2026-11-12T08:30'), '2026-11-13'));
test('weekdays skip the weekend', () => {
  assert.equal(next('weekdays', null), '2026-11-12');
  assert.equal(next('weekdays', null, new Date(2026, 10, 13)), '2026-11-16'); // Friday -> Monday
  assert.equal(next('weekdays', null, new Date(2026, 10, 14)), '2026-11-16'); // Saturday -> Monday
});
test('weekly keeps its weekday even when done late', () => {
  assert.equal(next('weekly', '2026-11-09T09:00'), '2026-11-16'); // Monday task done on Wednesday
  assert.equal(next('weekly', '2026-10-05T09:00'), '2026-11-16'); // weeks overdue, still a Monday
  assert.equal(next('weekly', null), '2026-11-18');
});
test('monthly keeps the day of month and clamps to short months', () => {
  assert.equal(next('monthly', '2026-11-05T09:00'), '2026-12-05');
  assert.equal(next('monthly', '2026-12-20T09:00', new Date(2026, 11, 20)), '2027-01-20');
  assert.equal(next('monthly', '2027-01-31T09:00', new Date(2027, 0, 31)), '2027-02-28');
});
