const test = require('node:test');
const assert = require('node:assert');
const { nextOccurrence, streak, parseQuick, inView, dailyCounts, niceMax } = require('../ui/logic.js');

const wed = new Date(2026, 10, 11); // Wednesday 11 Nov 2026
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

// ── parseQuick: "now" is Wednesday 11 Nov 2026, 10:00 ──
const at10 = new Date(2026, 10, 11, 10, 0);
const q = (text, now = at10) => parseQuick(text, now);

test('quick: day and time words, in either order', () => {
  assert.deepEqual(q('Call supplier tomorrow 9am'), { title: 'Call supplier', due: '2026-11-12T09:00' });
  assert.deepEqual(q('Call supplier 9am tomorrow'), { title: 'Call supplier', due: '2026-11-12T09:00' });
  assert.deepEqual(q("Remind P'tee to execute the SQL script tmr 12:00"), { title: "Remind P'tee to execute the SQL script", due: '2026-11-12T12:00' });
});
test('quick: "at", "on" and "by" before a day or time are dropped', () => {
  assert.deepEqual(q('Call supplier tomorrow at 9am'), { title: 'Call supplier', due: '2026-11-12T09:00' });
  assert.deepEqual(q('Call supplier at 9am tomorrow'), { title: 'Call supplier', due: '2026-11-12T09:00' });
  assert.deepEqual(q('Pay rent by friday'), { title: 'Pay rent', due: '2026-11-13T09:00' });
});
test('quick: day names go to the next occurrence, today only when the time is still ahead', () => {
  assert.equal(q('Pay rent fri 14:00').due, '2026-11-13T14:00');
  assert.equal(q('x wed 14:00').due, '2026-11-11T14:00');
  assert.equal(q('x wed 9am').due, '2026-11-18T09:00');
  assert.equal(q('x wed').due, '2026-11-18T09:00');
  assert.equal(q('x Monday').due, '2026-11-16T09:00');
});
test('quick: a time alone is the next time it happens', () => {
  assert.equal(q('Call 3pm').due, '2026-11-11T15:00');
  assert.equal(q('Call 9am').due, '2026-11-12T09:00');
  assert.equal(q('Call 9:30pm').due, '2026-11-11T21:30');
  assert.equal(q('Call 12pm').due, '2026-11-11T12:00');
  assert.equal(q('Call 12am').due, '2026-11-12T00:00');
  assert.equal(q('Call 9 am').due, '2026-11-12T09:00');
});
test('quick: "today" without a time is 09:00, or the next full hour once that has passed', () => {
  assert.equal(q('Do it today', new Date(2026, 10, 11, 8, 0)).due, '2026-11-11T09:00');
  assert.equal(q('Do it today').due, '2026-11-11T11:00');
  assert.equal(q('Do it today', new Date(2026, 10, 11, 23, 30)).due, '2026-11-11T23:59');
});
test('quick: d/m and d/m/yyyy dates; a day already gone means next year', () => {
  assert.equal(q('Report 20/11').due, '2026-11-20T09:00');
  assert.equal(q('Report 5/11').due, '2027-11-05T09:00');
  assert.equal(q('Report 20/11/2026 8:00').due, '2026-11-20T08:00');
  assert.equal(q('Report 31/2').due, null);
});
test('quick: Thai words', () => {
  assert.deepEqual(q('ส่งรายงาน พรุ่งนี้ 14:00 น.'), { title: 'ส่งรายงาน', due: '2026-11-12T14:00' });
  assert.deepEqual(q('ส่งรายงาน วันศุกร์'), { title: 'ส่งรายงาน', due: '2026-11-13T09:00' });
  assert.deepEqual(q('โทรหา วันนี้ 16:00'), { title: 'โทรหา', due: '2026-11-11T16:00' });
  assert.equal(q('ส่งงาน มะรืน').due, '2026-11-13T09:00');
  assert.equal(q('ส่งรายงาน fri 14:00').due, '2026-11-13T14:00');
});
test('quick: no match leaves the text alone', () => {
  assert.deepEqual(q('Call supplier tomorrow about it'), { title: 'Call supplier tomorrow about it', due: null });
  assert.deepEqual(q('Buy 5'), { title: 'Buy 5', due: null });
  assert.deepEqual(q('Meet 25:00'), { title: 'Meet 25:00', due: null });
  assert.deepEqual(q('tomorrow'), { title: 'tomorrow', due: null }); // the title keeps at least one word
  assert.deepEqual(q('9am'), { title: '9am', due: null });
  assert.deepEqual(q('  '), { title: '', due: null });
});

// ── inView: "now" is Wednesday 11 Nov 2026, 10:00 ──
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

// ── dailyCounts and niceMax ──
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
