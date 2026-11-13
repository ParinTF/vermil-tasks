const test = require('node:test');
const assert = require('node:assert');
const { birthdayInfo, touchState } = require('../ui/logic.js');

test('people: birthdays and staying in touch', () => {
  assert.deepEqual(birthdayInfo({ birthday: '1990-11-20', showAge: true }, '2026-11-12'), { days: 8, next: '2026-11-20', turning: 36 });
  assert.deepEqual(birthdayInfo({ birthday: '1990-11-12', showAge: true }, '2026-11-12'), { days: 0, next: '2026-11-12', turning: 36 }); // today
  assert.deepEqual(birthdayInfo({ birthday: '1990-03-05', showAge: false }, '2026-11-12'), { days: 113, next: '2027-03-05', turning: null }); // next year, age hidden
  assert.equal(birthdayInfo({ birthday: '' }, '2026-11-12'), null);
  assert.deepEqual(touchState({ every: 30, last: '2026-10-01' }, '2026-11-12'), { due: true, since: 42 });
  assert.deepEqual(touchState({ every: 30, last: '2026-11-01' }, '2026-11-12'), { due: false, since: 11 });
  assert.deepEqual(touchState({ every: 30, last: '2026-10-13' }, '2026-11-12'), { due: true, since: 30 }); // exactly the interval
  assert.deepEqual(touchState({ every: 14 }, '2026-11-12'), { due: true, since: null }); // never contacted
  assert.deepEqual(touchState({ every: 0, last: '2026-01-01' }, '2026-11-12'), { due: false, since: 315 }); // no interval: never due
});
