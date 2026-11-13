const test = require('node:test');
const assert = require('node:assert');
const { nextOccurrence, streak, inView, dailyCounts, niceMax, repeatDue, withRepeats } = require('../ui/logic.js');

const wed = new Date(2026, 10, 11); // Wednesday 11 Nov 2026
const at10 = new Date(2026, 10, 11, 10, 0);
const next = (repeat, due, today = wed) => nextOccurrence(repeat, due, today);

test('streak counts back from today, or from yesterday while today is open', () => {
  const days = (...list) => new Set(list.map((d) => '2026-11-' + d));
  assert.equal(streak('daily', days(), wed), 0);
  assert.equal(streak('daily', days('11'), wed), 1);
  assert.equal(streak('daily', days('09', '10', '11'), wed), 3);
  assert.equal(streak('daily', days('09', '10'), wed), 2); // today not done yet
  assert.equal(streak('daily', days('08', '09'), wed), 0); // missed yesterday
  assert.equal(streak('daily', days('07', '09', '10'), wed), 2); // gap on the 8th
});

test('weekday streaks ignore the weekend', () => {
  const days = new Set(['2026-11-12', '2026-11-13', '2026-11-16']); // Thu, Fri, Mon
  assert.equal(streak('weekdays', days, new Date(2026, 10, 16)), 3);
  assert.equal(streak('daily', days, new Date(2026, 10, 16)), 1);
  assert.equal(streak('weekdays', days, new Date(2026, 10, 15)), 2); // asked on Sunday
});

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

test('today view: overdue and anything due today, nothing later or undated', () => {
  assert.equal(inView('today', '2026-11-10T09:00', at10), true); // overdue
  assert.equal(inView('today', '2026-11-11T09:00', at10), true); // earlier today is overdue too
  assert.equal(inView('today', '2026-11-11T23:59', at10), true);
  assert.equal(inView('today', '2026-11-12T00:00', at10), false);
  assert.equal(inView('today', null, at10), false);
});

test('week view: overdue plus today and the next six days', () => {
  assert.equal(inView('week', '2026-11-01T09:00', at10), true); // overdue
  assert.equal(inView('week', '2026-11-17T23:59', at10), true); // day 7 of the window
  assert.equal(inView('week', '2026-11-18T00:00', at10), false);
  assert.equal(inView('week', null, at10), false);
});

test('week view across a month end', () => {
  const now = new Date(2026, 10, 28, 10, 0);
  assert.equal(inView('week', '2026-12-04T12:00', now), true);
  assert.equal(inView('week', '2026-12-05T00:00', now), false);
});

test('dailyCounts: last n days oldest first, gaps are zero, older days are left out', () => {
  const days = ['2026-11-11', '2026-11-11', '2026-11-09', '2026-11-05', '2026-10-01'];
  const counts = dailyCounts(days, at10, 7);
  assert.deepEqual(counts.map((c) => c.day), ['2026-11-05', '2026-11-06', '2026-11-07', '2026-11-08', '2026-11-09', '2026-11-10', '2026-11-11']);
  assert.deepEqual(counts.map((c) => c.count), [1, 0, 0, 0, 1, 0, 2]);
  assert.equal(dailyCounts([], at10, 3).every((c) => c.count === 0), true);
});

test('dailyCounts crosses a month end', () => {
  const counts = dailyCounts(['2026-11-30', '2026-12-02'], new Date(2026, 11, 2, 9, 0), 4);
  assert.deepEqual(counts.map((c) => c.day), ['2026-11-29', '2026-11-30', '2026-12-01', '2026-12-02']);
  assert.deepEqual(counts.map((c) => c.count), [0, 1, 0, 1]);
});

test('niceMax gives an even top so the middle tick is a whole number', () => {
  assert.deepEqual([0, 1, 2, 3, 5, 9, 10].map(niceMax), [2, 2, 2, 4, 6, 10, 10]);
  assert.deepEqual([11, 13, 20, 21, 101].map(niceMax), [20, 20, 20, 30, 110]);
});

test('repeat: the first due is today at that time when it is still ahead, else the next day', () => {
  const at = (h, m, d = 11) => new Date(2026, 10, d, h, m); // Wednesday 11 Nov 2026 by default
  assert.equal(repeatDue('daily', '18:00', at(9, 0)), '2026-11-11T18:00');
  assert.equal(repeatDue('daily', '08:00', at(9, 0)), '2026-11-12T08:00');
  assert.equal(repeatDue('daily', '09:00', at(9, 0)), '2026-11-12T09:00'); // the minute itself has gone
  assert.equal(repeatDue('weekdays', '18:00', at(9, 0, 14)), '2026-11-16T18:00'); // Saturday: Monday
  assert.equal(repeatDue('weekly', '08:00', at(9, 0)), '2026-11-18T08:00');
  assert.equal(repeatDue('daily', '07:30', at(9, 0), '2026-11-20'), '2026-11-20T07:30'); // editing keeps the day
});

test('repeat: an open repeating task shows on every day it comes back, from today on', () => {
  const task = (repeat, due, extra = {}) => ({ id: 't', title: 'Stretch', due, repeat, done: false, ...extra });
  const days = (list) => list.filter((t) => t.ghost).map((t) => t.due.slice(0, 10));
  const out = withRepeats([task('daily', '2026-11-11T09:00')], '2026-11-08', '2026-11-15', '2026-11-11');
  assert.deepEqual(days(out), ['2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15']); // not the days before today, not its own day
  assert.ok(out.find((t) => t.ghost).due.endsWith('T09:00') && out.find((t) => t.ghost).ghostOf === 't' && out.find((t) => t.ghost).id === 't@2026-11-12');
  assert.deepEqual(days(withRepeats([task('weekdays', '2026-11-12T09:00')], '2026-11-12', '2026-11-22', '2026-11-12')), ['2026-11-13', '2026-11-16', '2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20']);
  assert.deepEqual(days(withRepeats([task('weekly', '2026-11-12T09:00')], '2026-11-01', '2026-12-10', '2026-11-12')), ['2026-11-19', '2026-11-26', '2026-12-03', '2026-12-10']);
  assert.deepEqual(days(withRepeats([task('monthly', '2026-01-31T09:00')], '2026-02-01', '2026-04-30', '2026-01-31')), ['2026-02-28', '2026-03-31', '2026-04-30']); // the 31st lands on the last day of a short month
  assert.deepEqual(days(withRepeats([task('daily', '2026-11-05T09:00')], '2026-11-08', '2026-11-13', '2026-11-12')), ['2026-11-12', '2026-11-13']); // an overdue one stays on its own day; the copies start today
  assert.deepEqual(withRepeats([task('daily', '2026-11-11T09:00', { done: true }), task('', '2026-11-11T09:00'), task('daily', null)], '2026-11-01', '2026-11-30', '2026-11-11').filter((t) => t.ghost), []);
});
