const test = require('node:test');
const assert = require('node:assert');
const { nextOccurrence, streak, parseQuick, inView, dailyCounts, niceMax, monthGrid, shiftDay, shiftMonth, groupByDay, plainToHtml, colorKey, NOTE_COLORS, DEFAULT_COLOR, checkProgress, rankItems, minutesOf, taskMinutes, snapMinutes, withTime, layoutDay, clock, minutesLabel, focusSummary, parseAmount, moneyLabel, moneyMonth, currencySign, priceLabel, pctLabel, signedLabel, portfolio, habitDue, habitStreak, habitBest, habitDay, heatLevel, habitRate, budgetStatus, addCycle, rollForward, monthlyCost, daysUntil, nextEventDay, countdownLabel, MOODS, moodAverage, goalProgress, parseConvert, convertUnit, convertLabel } = require('../ui/logic.js');

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

// ── calendar maths ──
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

// ── note text ──
test('plainToHtml: one paragraph per line, blank lines kept, markup escaped', () => {
  assert.equal(plainToHtml('a\n\nb'), '<p>a</p><p><br></p><p>b</p>');
  assert.equal(plainToHtml(''), '<p><br></p>');
  assert.equal(plainToHtml(undefined), '<p><br></p>');
  assert.equal(plainToHtml('1 < 2 & <b>x</b>'), '<p>1 &lt; 2 &amp; &lt;b&gt;x&lt;/b&gt;</p>');
});
test('colorKey reads rgb and hex, and rejects everything else', () => {
  assert.equal(colorKey('rgb(201, 52, 16)'), '#c93410');
  assert.equal(colorKey('rgba(29, 78, 216, 1)'), '#1d4ed8');
  assert.equal(colorKey('#C93410'), '#c93410');
  assert.equal(colorKey('red'), '');
  assert.equal(colorKey('#fff'), '');
  assert.equal(colorKey(undefined), '');
});
test('note colours: six of them, the default first, all keys in the form colorKey returns', () => {
  const keys = Object.keys(NOTE_COLORS);
  assert.equal(keys.length, 6);
  assert.equal(keys[0], DEFAULT_COLOR);
  assert.ok(keys.every((k) => colorKey(k) === k));
});

test('checkProgress counts ticked and total checklist lines only', () => {
  assert.deepEqual(checkProgress('[ ] a\n[x] b\nplain text\n[x] c\n[x]no space'), { done: 2, total: 3 });
  assert.deepEqual(checkProgress('just text'), { done: 0, total: 0 });
  assert.deepEqual(checkProgress(''), { done: 0, total: 0 });
  assert.deepEqual(checkProgress(undefined), { done: 0, total: 0 });
});

test('rankItems needs every word, and puts label starts before label contains before other text', () => {
  const items = [
    { label: 'Buy milk', hint: 'Due tomorrow' },
    { label: 'Call the bank', hint: '', text: 'ask about milk account' },
    { label: 'Milk run planning', hint: '' },
    { label: 'Pay rent', hint: '' },
  ];
  assert.deepEqual(rankItems(items, 'milk').map((i) => i.label), ['Milk run planning', 'Buy milk', 'Call the bank']);
  assert.deepEqual(rankItems(items, 'MILK buy').map((i) => i.label), ['Buy milk']);
  assert.deepEqual(rankItems(items, 'zzz'), []);
  assert.equal(rankItems(items, '  ').length, 4); // no words: everything, in order
  assert.equal(rankItems(items, 'e', 2).length, 2); // the limit
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

test('focus timer helpers', () => {
  assert.equal(clock(25 * 60000), '25:00');
  assert.equal(clock(1), '00:01'); // rounds up
  assert.equal(clock(-5), '00:00');
  assert.equal(minutesLabel(45), '45 min');
  assert.equal(minutesLabel(60), '1 h');
  assert.equal(minutesLabel(125), '2 h 5 min');
});

test('focusSummary adds up today, the last 7 days and each task', () => {
  const sessions = [
    { task: 'a', title: 'Report', day: '2026-11-12', min: 25 },
    { task: 'a', title: 'Report', day: '2026-11-12', min: 25 },
    { task: 'b', title: 'Email', day: '2026-11-06', min: 10 }, // 6 days back: still in the week
    { task: 'b', title: 'Email', day: '2026-11-05', min: 99 }, // 7 days back: out of the week, in the total
    { task: null, title: '', day: '2026-11-11', min: 5 },
  ];
  const s = focusSummary(sessions, '2026-11-12');
  assert.equal(s.todayMin, 50);
  assert.equal(s.todayCount, 2);
  assert.equal(s.weekMin, 65);
  assert.deepEqual(s.total, { a: 50, b: 109 });
  assert.deepEqual(s.byTask.map((x) => [x.title, x.min]), [['Report', 50], ['Email', 10], ['', 5]]);
  assert.equal(focusSummary([], '2026-11-12').weekMin, 0);
});

test('money helpers', () => {
  assert.equal(parseAmount('1,250.50'), 1250.5);
  assert.equal(parseAmount('฿ 120'), 120);
  assert.equal(parseAmount('12.345'), 12.35);
  assert.equal(parseAmount(''), null);
  assert.equal(parseAmount('0'), null);
  assert.equal(parseAmount('abc'), null);
  assert.equal(moneyLabel(1250.5, '฿'), '฿1,250.50');
  assert.equal(moneyLabel(120, '฿'), '฿120');
});

test('moneyMonth totals one month, in cents, with spending by category', () => {
  const e = (id, day, kind, amount, cat) => ({ id, day, kind, amount, cat });
  const s = moneyMonth([
    e('1', '2026-11-03', 'out', 0.1, 'Food'), e('2', '2026-11-03', 'out', 0.2, 'Food'),
    e('3', '2026-11-05', 'out', 50, 'Bills'), e('4', '2026-11-01', 'in', 1000, 'Salary'),
    e('5', '2026-10-31', 'out', 999, 'Food'), // another month
  ], '2026-11');
  assert.equal(s.out, 50.3); // not 50.300000000000004
  assert.equal(s.in, 1000);
  assert.equal(s.balance, 949.7);
  assert.deepEqual(s.byCat, [{ cat: 'Bills', amount: 50 }, { cat: 'Food', amount: 0.3 }]);
  assert.deepEqual(s.list.map((x) => x.id), ['3', '2', '1', '4']); // newest day first
  assert.equal(moneyMonth([], '2026-11').balance, 0);
});

test('stock labels', () => {
  assert.equal(currencySign('USD'), '$');
  assert.equal(currencySign('CHF'), 'CHF ');
  assert.equal(priceLabel(355.6, 'USD'), '$355.60');
  assert.equal(priceLabel(0.01234, 'USD'), '$0.0123');
  assert.equal(pctLabel(2.043), '+2.04%');
  assert.equal(pctLabel(-0.4), '−0.40%');
  assert.equal(pctLabel(0), '0.00%');
  assert.equal(signedLabel(-1250.5, 'THB'), '−฿1,250.50');
});

test('portfolio: value, today and profit per currency, watch-only rows left out', () => {
  const q = (price, prevClose, currency = 'USD') => ({ price, prevClose, currency });
  const { rows, totals } = portfolio([
    { symbol: 'AAA', shares: 10, cost: 90 },   // bought at 90, now 100
    { symbol: 'BBB', shares: 5, cost: 0 },     // no cost known: counts in value, not in profit
    { symbol: 'CCC', shares: 0, cost: 0 },     // only watching
    { symbol: 'DDD', shares: 2, cost: 50 },    // no quote yet
    { symbol: 'PTT', shares: 100, cost: 30, }, // another currency
  ], { AAA: q(100, 98), BBB: q(20, 21), CCC: q(5, 5), PTT: q(32, 31, 'THB') });
  assert.deepEqual([rows[0].value, rows[0].day, rows[0].pl, rows[0].plPct], [1000, 20, 100, 11.11]);
  assert.deepEqual([rows[1].value, rows[1].pl], [100, null]);
  assert.deepEqual([rows[2].value, rows[3].value], [null, null]);
  const usd = totals.find((t) => t.currency === 'USD');
  assert.deepEqual([usd.value, usd.day, usd.pl, usd.plPct], [1100, 15, 100, 11.11]); // 20 - 5 today; profit only over AAA
  const thb = totals.find((t) => t.currency === 'THB');
  assert.deepEqual([thb.value, thb.day, thb.pl, thb.plPct], [3200, 100, 200, 6.67]);
  assert.deepEqual(portfolio([], {}).totals, []);
});

test('habits: streaks count only the days a habit is due', () => {
  const weekdays = { id: 'w', name: 'Run', days: [1, 2, 3, 4, 5], created: '2026-11-01' };
  const daily = { id: 'd', name: 'Read', days: [0, 1, 2, 3, 4, 5, 6], created: '2026-11-01' };
  // 2026-11-12 is a Thursday. Done Mon 9, Tue 10, Wed 11 (weekends before were not due for "w")
  const log = { '2026-11-06': ['w', 'd'], '2026-11-07': ['d'], '2026-11-08': ['d'], '2026-11-09': ['w', 'd'], '2026-11-10': ['w', 'd'], '2026-11-11': ['w', 'd'] };
  assert.equal(habitStreak(weekdays, log, '2026-11-12'), 4); // Thu not done yet: Fri 6, Mon 9, Tue 10, Wed 11; the weekend is skipped
  assert.equal(habitStreak(daily, log, '2026-11-12'), 6); // Nov 6..11
  assert.equal(habitStreak(daily, { ...log, '2026-11-12': ['d'] }, '2026-11-12'), 7);
  assert.equal(habitStreak(daily, { ...log, '2026-11-10': [] }, '2026-11-12'), 1); // a missed day breaks it
  assert.equal(habitStreak({ ...daily, created: '2026-11-12' }, {}, '2026-11-12'), 0);
  assert.equal(habitBest(daily, log, '2026-11-12'), 6);
  assert.equal(habitBest(weekdays, log, '2026-11-12'), 4);
});

test('habits: day totals, heat levels and rates', () => {
  const a = { id: 'a', name: 'A', days: [0, 1, 2, 3, 4, 5, 6], created: '2026-11-01' };
  const b = { id: 'b', name: 'B', days: [6], created: '2026-11-01' }; // Saturdays only
  const log = { '2026-11-12': ['a'], '2026-11-14': ['a', 'b'] };
  assert.deepEqual(habitDay([a, b], log, '2026-11-12'), { done: 1, total: 1 }); // B is not due on a Thursday
  assert.deepEqual(habitDay([a, b], log, '2026-11-14'), { done: 2, total: 2 });
  assert.deepEqual(habitDay([a, b], log, '2026-10-30'), { done: 0, total: 0 }); // before they existed
  assert.deepEqual([{ done: 0, total: 0 }, { done: 0, total: 2 }, { done: 1, total: 4 }, { done: 2, total: 4 }, { done: 3, total: 4 }, { done: 4, total: 4 }].map(heatLevel), [0, 0, 1, 2, 3, 4]);
  assert.equal(habitRate(a, log, '2026-11-14', 7), 29); // 2 of 7 days
  assert.equal(habitRate(b, log, '2026-11-14', 7), 100); // its one due day
  assert.equal(habitRate({ ...b, created: '2026-11-13' }, log, '2026-11-12', 7), null);
});

test('budgetStatus: ok under 80%, near from 80%, over from 100%', () => {
  assert.deepEqual(budgetStatus(50, 100), { pct: 50, level: 'ok', left: 50 });
  assert.deepEqual(budgetStatus(79.4, 100), { pct: 79, level: 'ok', left: 20.6 });
  assert.deepEqual(budgetStatus(80, 100), { pct: 80, level: 'near', left: 20 });
  assert.deepEqual(budgetStatus(100, 100), { pct: 100, level: 'over', left: 0 });
  assert.deepEqual(budgetStatus(105, 100), { pct: 105, level: 'over', left: -5 });
  assert.deepEqual(budgetStatus(10, 0), { pct: 0, level: 'ok', left: -10 }); // no limit set: never a warning
});

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

test('journal: mood average over the days that have a mood', () => {
  const e = { '2026-11-12': { mood: 4, text: 'x' }, '2026-11-11': { mood: 2, text: '' }, '2026-11-10': { mood: 0, text: 'no mood' }, '2026-11-01': { mood: 5, text: '' } };
  assert.equal(moodAverage(e, '2026-11-12', 7), 3); // (4 + 2) / 2; the 0 and the old day are out
  assert.equal(moodAverage(e, '2026-11-12', 30), 3.7); // (4 + 2 + 5) / 3
  assert.equal(moodAverage({}, '2026-11-12', 7), null);
  assert.equal(MOODS[3], 'Okay');
});

test('goals: reaching a target and staying under a limit', () => {
  assert.deepEqual(goalProgress('atleast', 40, 100), { pct: 40, state: 'ok' });
  assert.deepEqual(goalProgress('atleast', 100, 100), { pct: 100, state: 'done' });
  assert.deepEqual(goalProgress('atleast', 130, 100), { pct: 130, state: 'done' });
  assert.deepEqual(goalProgress('atmost', 80, 100), { pct: 80, state: 'ok' });
  assert.deepEqual(goalProgress('atmost', 100, 100), { pct: 100, state: 'ok' }); // exactly at the limit is still fine
  assert.deepEqual(goalProgress('atmost', 101, 100), { pct: 101, state: 'over' });
  assert.deepEqual(goalProgress('atleast', 5, 0), { pct: 0, state: 'done' });
});

test('converter: parsing what was typed', () => {
  assert.deepEqual(parseConvert('5 km to mi'), { amount: 5, from: 'km', to: 'mi', currency: false });
  assert.deepEqual(parseConvert('5km in miles'), { amount: 5, from: 'km', to: 'mi', currency: false });
  assert.deepEqual(parseConvert('30 °C > f'), { amount: 30, from: 'c', to: 'f', currency: false });
  assert.deepEqual(parseConvert('10 in to cm'), { amount: 10, from: 'in', to: 'cm', currency: false }); // "in" as a unit, "to" as the word
  assert.deepEqual(parseConvert('1,250.5 usd to thb'), { amount: 1250.5, from: 'USD', to: 'THB', currency: true });
  assert.deepEqual(parseConvert('100 km/h to mph'), { amount: 100, from: 'kmh', to: 'mph', currency: false });
  assert.equal(parseConvert('5 km to kg'), null); // not the same kind of thing
  assert.equal(parseConvert('5 km to usd'), null);
  assert.equal(parseConvert('usd to thb'), null); // no amount
  assert.equal(parseConvert('buy milk to thb'), null);
  assert.equal(parseConvert('100 usd to usd'), null);
  assert.equal(parseConvert('100 us to th'), null); // not yet a currency pair
});

test('converter: the maths', () => {
  const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} vs ${b}`);
  close(convertUnit(5, 'km', 'mi'), 3.106856);
  close(convertUnit(1, 'mi', 'km'), 1.609344);
  close(convertUnit(1, 'lb', 'kg'), 0.45359237);
  close(convertUnit(100, 'c', 'f'), 212);
  close(convertUnit(32, 'f', 'c'), 0);
  close(convertUnit(0, 'k', 'c'), -273.15);
  close(convertUnit(1, 'cup', 'ml'), 236.5882365);
  close(convertUnit(100, 'kmh', 'mph'), 62.137119);
  assert.equal(convertLabel(3.106856), '3.1069');
  assert.equal(convertLabel(212), '212');
  assert.equal(convertLabel(3520.123), '3,520.12');
  assert.equal(convertLabel(-1e-15), '0');
});
