const test = require('node:test');
const assert = require('node:assert');
const { monthGrid, shiftDay, shiftMonth, groupByDay, minutesOf, taskMinutes, snapMinutes, withTime, layoutDay, eventDaysIn, renewalsIn } = require('../ui/logic.js');

test('monthGrid: six full weeks starting on a Monday', () => {
  const nov = monthGrid(2026, 10); // 1 Nov 2026 is a Sunday
  assert.equal(nov.length, 42);
  assert.equal(nov[0].day, '2026-10-26');
  assert.equal(nov[41].day, '2026-12-06');
  assert.equal(nov.filter((c) => c.inMonth).length, 30);
  assert.equal(nov[6].day, '2026-11-01');
  assert.equal(nov[6].inMonth, true);
  assert.equal(nov[5].inMonth, false);
});

test('monthGrid: a month that starts on a Monday has no lead days, a leap February has 29', () => {
  const feb = monthGrid(2027, 1); // 1 Feb 2027 is a Monday
  assert.equal(feb[0].day, '2027-02-01');
  assert.equal(feb.filter((c) => c.inMonth).length, 28);
  assert.equal(monthGrid(2028, 1).filter((c) => c.inMonth).length, 29);
  assert.equal(monthGrid(2026, 11)[0].day, '2026-11-30'); // 1 Dec 2026 is a Tuesday
});

test('shiftDay crosses month and year ends', () => {
  assert.equal(shiftDay('2026-12-31', 1), '2027-01-01');
  assert.equal(shiftDay('2026-03-01', -1), '2026-02-28');
  assert.equal(shiftDay('2026-11-11', 7), '2026-11-18');
});

test('shiftMonth keeps the day number and clamps to the length of the new month', () => {
  assert.equal(shiftMonth('2026-11-11', 1), '2026-12-11');
  assert.equal(shiftMonth('2026-01-31', 1), '2026-02-28');
  assert.equal(shiftMonth('2026-03-31', -1), '2026-02-28');
  assert.equal(shiftMonth('2026-12-15', 1), '2027-01-15');
  assert.equal(shiftMonth('2026-01-15', -1), '2025-12-15');
});

test('groupByDay: dated tasks only, earliest time first, ties by title', () => {
  const t = (title, due) => ({ title, due });
  const days = groupByDay([t('b', '2026-11-11T09:00'), t('a', '2026-11-11T09:00'), t('late', '2026-11-11T18:30'), t('early', '2026-11-11T07:15'), t('no date', null), t('other', '2026-11-12T10:00')]);
  assert.deepEqual(Object.keys(days).sort(), ['2026-11-11', '2026-11-12']);
  assert.deepEqual(days['2026-11-11'].map((x) => x.title), ['early', 'a', 'b', 'late']);
});

test('time blocking helpers', () => {
  assert.equal(minutesOf('2026-11-12T09:30'), 570);
  assert.equal(withTime('2026-11-12', 570), '2026-11-12T09:30');
  assert.equal(withTime('2026-11-12', 5), '2026-11-12T00:05');
  assert.equal(taskMinutes({}), 60);
  assert.equal(taskMinutes({ minutes: 30 }), 30);
  assert.equal(taskMinutes({ minutes: 3 }), 15); // never shorter than a slot
  assert.equal(snapMinutes(557), 555);
  assert.equal(snapMinutes(-40), 0);
  assert.equal(snapMinutes(5000), 1425); // the last slot of the day
});

test('layoutDay: overlapping blocks take lanes, separate ones keep the full width', () => {
  const out = layoutDay([
    { id: 'a', start: 540, end: 600 }, { id: 'b', start: 570, end: 630 }, // overlap each other
    { id: 'c', start: 600, end: 660 },                                     // starts as a ends, overlaps b
    { id: 'd', start: 720, end: 780 },                                     // alone
  ]);
  assert.deepEqual(out.a, { lane: 0, lanes: 2 });
  assert.deepEqual(out.b, { lane: 1, lanes: 2 });
  assert.deepEqual(out.c, { lane: 0, lanes: 2 }); // reuses the lane a freed
  assert.deepEqual(out.d, { lane: 0, lanes: 1 });
  assert.deepEqual(layoutDay([]), {});
});

test('calendar: the days a countdown event or a renewal falls on', () => {
  assert.deepEqual(eventDaysIn({ day: '2026-11-20', yearly: false }, '2026-11-01', '2026-11-30'), ['2026-11-20']);
  assert.deepEqual(eventDaysIn({ day: '2026-12-20', yearly: false }, '2026-11-01', '2026-11-30'), []);
  assert.deepEqual(eventDaysIn({ day: '1990-11-05', yearly: true }, '2026-10-25', '2026-12-06'), ['2026-11-05']); // a birthday comes every year
  assert.deepEqual(eventDaysIn({ day: '1990-11-05', yearly: true }, '2025-10-01', '2027-02-01'), ['2025-11-05', '2026-11-05']);
  assert.deepEqual(eventDaysIn({ day: '2028-02-29', yearly: true }, '2029-02-01', '2029-03-01'), ['2029-02-28']); // 29 Feb falls on 28 Feb in other years
  assert.deepEqual(eventDaysIn({ day: '2026-11-05', yearly: true }, '2025-10-01', '2025-12-01'), []); // not before it began
  const sub = (cycle, next, anchor) => ({ next, cycle, anchor });
  assert.deepEqual(renewalsIn(sub('week', '2026-11-03'), '2026-11-01', '2026-11-30'), ['2026-11-03', '2026-11-10', '2026-11-17', '2026-11-24']);
  assert.deepEqual(renewalsIn(sub('month', '2026-01-31', 31), '2026-02-01', '2026-04-30'), ['2026-02-28', '2026-03-31', '2026-04-30']);
  assert.deepEqual(renewalsIn(sub('year', '2026-06-01'), '2026-11-01', '2027-07-01'), ['2027-06-01']);
  assert.deepEqual(renewalsIn(sub('month', '2026-12-10'), '2026-11-01', '2026-11-30'), []); // its next charge is later
});
