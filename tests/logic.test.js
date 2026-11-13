const test = require('node:test');
const assert = require('node:assert');
const { projectSummary, timeLog, timeLogLine, reviewRange, reviewBuckets, eventDaysIn, renewalsIn, nextOccurrence, streak, parseQuick, inView, dailyCounts, niceMax, monthGrid, shiftDay, shiftMonth, groupByDay, plainToHtml, colorKey, NOTE_COLORS, DEFAULT_COLOR, checkProgress, rankItems, minutesOf, taskMinutes, snapMinutes, withTime, layoutDay, clock, minutesLabel, focusSummary, parseAmount, moneyLabel, moneyMonth, currencySign, priceLabel, pctLabel, signedLabel, portfolio, habitDue, habitStreak, habitBest, habitDay, heatLevel, habitRate, budgetStatus, addCycle, rollForward, monthlyCost, daysUntil, nextEventDay, countdownLabel, MOODS, moodAverage, goalProgress, parseConvert, convertUnit, convertLabel, reviewText, parseIngredients, topItems, weekDays, weightTrend, medDue, dosesDue, filterLibrary, libraryYear, birthdayInfo, touchState, paidTotals, billState, PACKING_TEMPLATES, tripDays, tripState, packingProgress, secondsBetween, clockHMS, hoursLabel, timeRange, timeReport, autoDaily, autoMetric, autoMatches, autoFill, autoDue, autoAllowed, autoSummary, ASSIST_BRIEFING, briefingDue, xpLevel, xpAward, xpBadges, xpStreak, planWeek, placeDue, capLines, moneyDetail, timeDetail, assistantPrompt, assistantRange, parseAssistantReply, describeAction, assistantTurns, repeatDue, withRepeats, stockNow, hotkeyFromEvent, orderTabs, setWeekStart, zeroFill, insightFindings, insightSentence } = require('../ui/logic.js');

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
  assert.equal(parseAmount('-5'), null); // never quietly turned positive
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

test('review text: a title line, then each section with its lines as bullets', () => {
  const text = reviewText('6 Nov to 12 Nov', [{ title: 'Tasks', lines: ['9 done', '2 overdue'] }, { title: 'Money', lines: ['Spent ฿1,200'] }]);
  assert.equal(text, 'Review: 6 Nov to 12 Nov\n\nTasks\n- 9 done\n- 2 overdue\n\nMoney\n- Spent ฿1,200\n');
  assert.equal(reviewText('x', []), 'Review: x\n');
});

test('shopping: ingredients from a meal, usual items, the week', () => {
  assert.deepEqual(parseIngredients('Pad thai: noodles, shrimp, egg'), ['noodles', 'shrimp', 'egg']);
  assert.deepEqual(parseIngredients('Omelette (egg; cheese , ham)'), ['egg', 'cheese', 'ham']);
  assert.deepEqual(parseIngredients('Leftovers'), []);
  assert.deepEqual(parseIngredients('Soup:'), []);
  assert.deepEqual(topItems({ milk: 5, eggs: 9, bread: 5, rice: 1 }, 3), ['eggs', 'bread', 'milk']);
  assert.deepEqual(topItems({ milk: 5, eggs: 9 }, 5, ['Eggs']), ['milk']); // already on the list
  assert.deepEqual(weekDays('2026-11-12'), ['2026-11-09', '2026-11-10', '2026-11-11', '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15']);
  assert.equal(weekDays('2026-11-15')[0], '2026-11-09'); // a Sunday belongs to the week before it
  assert.equal(weekDays('2026-11-09')[6], '2026-11-15');
});

test('health: weight trend and medicine doses', () => {
  const t = weightTrend({ '2026-11-12': 70.4, '2026-11-05': 71.0, '2026-10-01': 80, '2026-11-08': 0 }, '2026-11-12', 14);
  assert.deepEqual(t.points.map((p) => p.day), ['2026-11-05', '2026-11-12']); // the old day and the empty one are out
  assert.equal(t.change, -0.6);
  assert.equal(weightTrend({ '2026-11-12': 70 }, '2026-11-12', 14).change, null); // one point: no change yet
  const med = { id: 'm', name: 'Vitamin', times: ['08:00', '20:00'], days: [1, 2, 3, 4, 5] }; // weekdays
  assert.equal(medDue(med, '2026-11-12'), true); // Thursday
  assert.equal(medDue(med, '2026-11-14'), false); // Saturday
  assert.deepEqual(dosesDue([med], '2026-11-12', '07:59', {}, {}).length, 0);
  assert.deepEqual(dosesDue([med], '2026-11-12', '08:00', {}, {}).map((d) => d.key), ['m@08:00']);
  assert.deepEqual(dosesDue([med], '2026-11-12', '21:00', { 'm@08:00': true }, {}).map((d) => d.key), ['m@20:00']); // the morning one was taken
  assert.deepEqual(dosesDue([med], '2026-11-12', '21:00', {}, { 'm@08:00': true, 'm@20:00': true }), []); // both already announced
  assert.deepEqual(dosesDue([med], '2026-11-14', '21:00', {}, {}), []);
});

test('library: filtering and the year in numbers', () => {
  const items = [
    { id: '1', title: 'Dune', kind: 'Book', status: 'done', note: 'Frank Herbert', rating: 5, finished: '2026-03-02' },
    { id: '2', title: 'Arrival', kind: 'Movie', status: 'done', note: '', rating: 4, finished: '2026-05-10' },
    { id: '3', title: 'Emma', kind: 'Book', status: 'done', note: '', rating: 0, finished: '2025-12-30' },
    { id: '4', title: 'Severance', kind: 'Series', status: 'now', note: '', rating: 0 },
    { id: '5', title: 'Foundation', kind: 'Book', status: 'want', note: 'Isaac Asimov', rating: 0 },
  ];
  assert.deepEqual(filterLibrary(items, 'done', '', '').map((i) => i.id), ['1', '2', '3']);
  assert.deepEqual(filterLibrary(items, 'done', 'Book', '').map((i) => i.id), ['1', '3']);
  assert.deepEqual(filterLibrary(items, 'want', '', 'asimov').map((i) => i.id), ['5']); // the note is searched too
  assert.deepEqual(filterLibrary(items, 'now', '', 'zzz'), []);
  assert.deepEqual(libraryYear(items, 2026), { total: 2, byKind: { Book: 1, Movie: 1 }, average: 4.5 });
  assert.deepEqual(libraryYear(items, 2025), { total: 1, byKind: { Book: 1 }, average: null }); // unrated: no average
  assert.deepEqual(libraryYear([], 2026), { total: 0, byKind: {}, average: null });
});

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

test('bills: quarters, totals and state', () => {
  assert.equal(addCycle('2026-11-30', 'quarter', 30), '2027-02-28');
  assert.equal(addCycle('2026-01-15', 'quarter', 15), '2026-04-15');
  const bills = [
    { name: 'Electricity', paid: [{ day: '2026-01-10', amount: 800.5 }, { day: '2026-02-10', amount: 900 }, { day: '2025-12-10', amount: 700 }] },
    { name: 'Water', paid: [{ day: '2026-03-01', amount: 150 }] },
    { name: 'Internet', paid: [] },
  ];
  assert.deepEqual(paidTotals(bills, 2026), { per: [{ name: 'Electricity', total: 1700.5 }, { name: 'Water', total: 150 }], total: 1850.5 });
  assert.deepEqual(paidTotals([], 2026), { per: [], total: 0 });
  assert.deepEqual(billState({ next: '2026-11-10' }, '2026-11-12'), { kind: 'overdue', days: 2 });
  assert.deepEqual(billState({ next: '2026-11-12' }, '2026-11-12'), { kind: 'today', days: 0 });
  assert.deepEqual(billState({ next: '2026-11-15' }, '2026-11-12'), { kind: 'later', days: 3 });
});

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

test('time tracker: durations, ranges and the report', () => {
  assert.equal(secondsBetween('2026-11-12T09:00:00', '2026-11-12T10:02:05'), 3725);
  assert.equal(secondsBetween('2026-11-12T10:00:00', '2026-11-12T09:00:00'), 0); // never negative
  assert.equal(clockHMS(3725), '1:02:05');
  assert.equal(clockHMS(59), '0:00:59');
  assert.equal(hoursLabel(3725), '1 h 02 min');
  assert.equal(hoursLabel(90), '2 min');
  assert.equal(hoursLabel(20), '1 min'); // real time is never "0 min"
  assert.equal(hoursLabel(0), '0 min');
  assert.deepEqual(timeRange('week', '2026-11-12'), { since: '2026-11-09', until: '2026-11-15' });
  assert.deepEqual(timeRange('month', '2026-11-12'), { since: '2026-11-01', until: '2026-11-30' });
  assert.deepEqual(timeRange('lastmonth', '2026-11-12'), { since: '2026-10-01', until: '2026-10-31' });
  assert.deepEqual(timeRange('lastmonth', '2026-01-05'), { since: '2025-12-01', until: '2025-12-31' });
  const projects = [{ id: 'a', name: 'Site', client: 'Acme', rate: 600 }, { id: 'b', name: 'Admin', client: '', rate: 0 }];
  const entries = [
    { project: 'a', start: '2026-11-10T09:00:00', end: '2026-11-10T11:30:00' }, // 2.5 h
    { project: 'a', start: '2026-11-11T13:00:00', end: '2026-11-11T14:00:00' }, // 1 h
    { project: 'b', start: '2026-11-11T08:00:00', end: '2026-11-11T08:30:00' },
    { project: 'a', start: '2026-10-30T09:00:00', end: '2026-10-30T10:00:00' }, // outside
    { project: 'gone', start: '2026-11-12T09:00:00', end: '2026-11-12T09:10:00' },
  ];
  const r = timeReport(entries, projects, '2026-11-09', '2026-11-15');
  assert.deepEqual(r.rows.map((x) => [x.name, x.seconds, x.amount]), [['Site', 12600, 2100], ['Admin', 1800, 0], ['Deleted project', 600, 0]]);
  assert.deepEqual([r.seconds, r.amount], [15000, 2100]);
  assert.deepEqual(timeReport([], projects, '2026-11-09', '2026-11-15'), { rows: [], seconds: 0, amount: 0 });
});

test('automations: a daily rule runs once on its days after its time', () => {
  const rule = { when: { type: 'daily', time: '08:00', days: [1, 2, 3, 4, 5] }, last: '' };
  assert.equal(autoDaily(rule, new Date(2026, 10, 11, 7, 59)), false); // Wednesday, too early
  assert.equal(autoDaily(rule, new Date(2026, 10, 11, 8, 0)), true);
  assert.equal(autoDaily({ ...rule, last: '2026-11-11' }, new Date(2026, 10, 11, 9, 0)), false); // already ran today
  assert.equal(autoDaily(rule, new Date(2026, 10, 14, 9, 0)), false); // Saturday is not a day
  assert.equal(autoDaily({ when: { type: 'daily', time: 'x', days: [3] } }, wed), false);
});

test('automations: a number rule runs once a day when it crosses', () => {
  const rule = { when: { type: 'metric', metric: 'money.spent', op: 'above', value: 100 }, last: '' };
  assert.equal(autoMetric(rule, 100, '2026-11-11'), false);
  assert.equal(autoMetric(rule, 101, '2026-11-11'), true);
  assert.equal(autoMetric({ ...rule, last: '2026-11-11' }, 500, '2026-11-11'), false);
  assert.equal(autoMetric({ when: { ...rule.when, op: 'below', value: 5 } }, 4, '2026-11-11'), true);
  assert.equal(autoMetric(rule, NaN, '2026-11-11'), false);
});

test('automations: events match by type and an optional word', () => {
  const rule = (type, text) => ({ when: { type, text } });
  assert.equal(autoMatches(rule('task-done', ''), 'task-done', { title: 'Pay rent' }), true);
  assert.equal(autoMatches(rule('task-done', 'RENT'), 'task-done', { title: 'Pay rent' }), true);
  assert.equal(autoMatches(rule('task-done', 'gym'), 'task-done', { title: 'Pay rent' }), false);
  assert.equal(autoMatches(rule('bill-paid', ''), 'task-done', { title: 'x' }), false);
  assert.equal(autoMatches(rule('over-budget', 'food'), 'over-budget', { cat: 'Food' }), true);
});

test('automations: words fill in, dates resolve, the guard limits a runaway', () => {
  assert.equal(autoFill('Follow up {title} ({amount})', { title: 'Invoice', amount: 50 }), 'Follow up Invoice (50)');
  assert.equal(autoFill('{nope} {title}', { title: 'A' }), '{nope} A');
  assert.equal(autoDue('tomorrow', '07:30', new Date(2026, 10, 30, 12)), '2026-12-01T07:30');
  assert.equal(autoDue('today', '', wed), '2026-11-11T09:00');
  assert.equal(autoDue('', '08:00', wed), null);
  const stamps = [];
  const ok = Array.from({ length: 7 }, (_, i) => autoAllowed(stamps, 1000 + i));
  assert.deepEqual(ok, [true, true, true, true, true, false, false]);
  assert.equal(autoAllowed(stamps, 70000), true); // a minute later it may run again
});

test('automations: a rule reads as one sentence', () => {
  assert.equal(autoSummary({ when: { type: 'daily', time: '08:00', days: [0, 1, 2, 3, 4, 5, 6] }, do: { type: 'task', text: 'Plan the day' } }), 'When every day at 08:00, add a task: Plan the day');
  assert.equal(autoSummary({ when: { type: 'bill-paid', text: '' }, do: { type: 'open', view: 'money' } }), 'When a bill is paid, open money');
  assert.equal(autoSummary({ when: { type: 'daily', time: '09:00', days: [1, 2, 3, 4, 5] }, do: { type: 'toast', text: 'Hi' } }), 'When on weekdays at 09:00, show a notification: Hi');
});

test('assistant: the prompt carries the date, the shared data and only the allowed actions', () => {
  const now = new Date(2026, 10, 12, 14, 5);
  const p = assistantPrompt({ now, sections: [{ title: 'Tasks', lines: ['Pay rent (due 2026-11-14)', 'Buy milk'] }], can: ['task', 'open'], views: ['tasks', 'money'] });
  assert.ok(p.includes('Thursday 2026-11-12, local time 14:05'));
  assert.ok(p.includes('## Tasks\n- Pay rent (due 2026-11-14)\n- Buy milk'));
  assert.ok(p.includes('"type":"task"') && p.includes('one of: tasks, money') && !p.includes('"type":"expense"') && !p.includes('"type":"shop"'));
  const bare = assistantPrompt({ now, sections: [], can: [], views: [] });
  assert.ok(bare.includes('Nothing is shared with you') && bare.includes('cannot suggest actions') && !bare.includes('## '));
});

test('assistant: a reply is parsed, fenced or not, and plain text is just the reply', () => {
  const can = ['task', 'shop', 'expense', 'note', 'open'], views = ['tasks', 'money'];
  const ok = parseAssistantReply('{"reply":"Done soon","actions":[{"type":"task","title":" Pay rent ","due":"2026-11-14T09:00"},{"type":"shop","name":"milk"}]}', { can, views });
  assert.deepEqual(ok, { reply: 'Done soon', actions: [{ type: 'task', title: 'Pay rent', due: '2026-11-14T09:00' }, { type: 'shop', name: 'milk' }] });
  const fenced = parseAssistantReply('```json\n{"reply":"hi","actions":[]}\n```', { can, views });
  assert.equal(fenced.reply, 'hi');
  const chatty = parseAssistantReply('Sure! {"reply":"hi","actions":[]} hope that helps', { can, views });
  assert.equal(chatty.reply, 'hi');
  assert.deepEqual(parseAssistantReply('Just words', { can, views }), { reply: 'Just words', actions: [] });
  assert.deepEqual(parseAssistantReply('', { can, views }), { reply: '', actions: [] });
  assert.equal(parseAssistantReply('[1,2]', { can, views }).reply, '[1,2]');
});

test('assistant: only valid actions of allowed kinds get through', () => {
  const can = ['task', 'expense', 'open'], views = ['tasks'];
  const bad = [
    { type: 'task', title: '' }, { type: 'task', title: 'x', due: 'tomorrow' }, { type: 'task', title: 'x', due: '2026-13-45T99:99' },
    { type: 'shop', name: 'milk' }, // Shopping is not allowed here
    { type: 'delete', id: 'all' }, null, 'task',
    { type: 'expense', amount: -5, cat: 'Food' }, { type: 'expense', amount: 'lots' }, { type: 'expense', amount: 0 },
    { type: 'open', view: 'settings' },
  ];
  const r = parseAssistantReply(JSON.stringify({ reply: 'x', actions: bad }), { can, views });
  assert.deepEqual(r.actions.map((a) => a.type + ':' + (a.title || a.cat || a.view || '')), ['task:x', 'task:x']); // the two tasks with a bad due keep the title and lose the date
  assert.deepEqual(r.actions.map((a) => a.due), [null, null]);
  const good = parseAssistantReply('{"reply":"r","actions":[{"type":"expense","amount":12.345,"cat":"","note":"lunch"},{"type":"open","view":"tasks"}]}', { can, views });
  assert.deepEqual(good.actions, [{ type: 'expense', amount: 12.35, cat: 'Other', note: 'lunch' }, { type: 'open', view: 'tasks' }]);
  const many = parseAssistantReply(JSON.stringify({ reply: 'r', actions: Array.from({ length: 9 }, (_, i) => ({ type: 'task', title: 't' + i })) }), { can, views });
  assert.equal(many.actions.length, 5);
  const long = parseAssistantReply(JSON.stringify({ reply: 'r', actions: [{ type: 'task', title: 'x'.repeat(500) }] }), { can, views });
  assert.equal(long.actions[0].title.length, 200);
  assert.equal(parseAssistantReply('{"actions":[]}', { can, views }).reply, '(no answer)');
});

test('assistant: each action reads as one line', () => {
  assert.equal(describeAction({ type: 'task', title: 'Pay rent', due: '2026-11-14T09:00' }), 'Add the task "Pay rent" due 2026-11-14 09:00');
  assert.equal(describeAction({ type: 'task', title: 'Call', due: null }), 'Add the task "Call"');
  assert.equal(describeAction({ type: 'shop', name: 'milk' }), 'Add "milk" to the shopping list');
  assert.equal(describeAction({ type: 'expense', amount: 5, cat: 'Food', note: '' }), 'Record an expense of 5 in Food');
  assert.equal(describeAction({ type: 'note', title: 'Ideas', body: '' }), 'Create the note "Ideas"');
  assert.equal(describeAction({ type: 'open', view: 'money' }), 'Open money');
});

test('assistant: a chat log becomes alternating turns that start and end with the user', () => {
  const log = [
    { role: 'model', text: 'Hello, ask me anything' },
    { role: 'user', text: 'one' }, { role: 'user', text: 'two' },
    { role: 'model', text: '', error: 'offline' },
    { role: 'model', text: 'answer' },
    { role: 'user', text: 'three' },
    { role: 'model', text: 'dangling' },
  ];
  assert.deepEqual(assistantTurns(log), [{ role: 'user', text: 'one\ntwo' }, { role: 'model', text: 'answer' }, { role: 'user', text: 'three' }]);
  assert.deepEqual(assistantTurns([]), []);
  assert.deepEqual(assistantTurns([{ role: 'model', text: 'x' }]), []);
  assert.equal(assistantTurns(Array.from({ length: 40 }, (_, i) => ({ role: i % 2 ? 'model' : 'user', text: 'm' + i })), 4).length, 3); // 4 messages, the first is a model turn and is dropped
});

const insightDays = (n, f, start = '2026-09-01') => { const o = {}; let d = start; for (let i = 0; i < n; i++, d = shiftDay(d, 1)) o[d] = f(i); return o; };
const lcg = (seed) => () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;

test('insights: a clear link between two modules is found, with the right direction', () => {
  const rnd = lcg(7);
  const sleep = insightDays(40, () => 5 + Math.round(rnd() * 4));
  const mood = {}; for (const [d, v] of Object.entries(sleep)) mood[d] = Math.max(1, Math.min(5, Math.round(v / 2 + (rnd() - 0.5))));
  const spend = {}; for (const [d, v] of Object.entries(sleep)) spend[d] = Math.round(300 - v * 20 + rnd() * 30);
  const today = '2026-10-10';
  const out = insightFindings([{ id: 'health.sleep', label: 'sleep', byDay: sleep }, { id: 'journal.mood', label: 'mood', byDay: mood }, { id: 'money.spent', label: 'spending', byDay: spend }], today);
  const pair = (a, b) => out.find((f) => [f.a, f.b].sort().join() === [a, b].sort().join());
  assert.ok(pair('health.sleep', 'journal.mood').higher && pair('health.sleep', 'journal.mood').n === 40);
  assert.equal(pair('health.sleep', 'money.spent').higher, false);
  assert.ok(Math.abs(out[0].r) >= Math.abs(out[out.length - 1].r)); // strongest first
  const s = insightSentence(pair('health.sleep', 'journal.mood'), { label: 'sleep' }, { label: 'mood' });
  assert.match(s, /^On days with more sleep, mood tends to be higher \(\d(\.\d)? vs \d(\.\d)?, 40 days\)$/);
});

test('insights: noise, a few days, or one module alone give nothing', () => {
  const rnd = lcg(99);
  const a = insightDays(60, () => rnd()), b = insightDays(60, () => rnd());
  assert.deepEqual(insightFindings([{ id: 'health.sleep', label: 's', byDay: a }, { id: 'journal.mood', label: 'm', byDay: b }], '2026-10-30'), []);
  const x = insightDays(10, (i) => i);
  assert.deepEqual(insightFindings([{ id: 'health.sleep', label: 's', byDay: x }, { id: 'journal.mood', label: 'm', byDay: x }], '2026-09-10'), []); // 10 days
  const y = insightDays(40, (i) => i);
  assert.deepEqual(insightFindings([{ id: 'health.sleep', label: 's', byDay: y }, { id: 'health.water', label: 'w', byDay: y }], '2026-10-10'), []); // same module
});

test('insights: what you did today can show in tomorrow', () => {
  const rnd = lcg(3);
  const work = insightDays(45, () => Math.round(rnd() * 10));
  const mood = {}; for (const d of Object.keys(work)) mood[shiftDay(d, 1)] = Math.round(work[d] / 2);
  const out = insightFindings([{ id: 'tasks.done', label: 'tasks done', byDay: work }, { id: 'journal.mood', label: 'mood', byDay: mood }], '2026-10-20');
  assert.equal(out.length, 1);
  assert.equal(out[0].lag, 1);
  assert.ok(out[0].a === 'tasks.done' && out[0].higher);
});

test('insights: a count is 0 on quiet days, from its first day to today', () => {
  const f = zeroFill({ '2026-11-09': 3, '2026-11-11': 2 }, '2026-11-12', 90);
  assert.deepEqual(f, { '2026-11-09': 3, '2026-11-10': 0, '2026-11-11': 2, '2026-11-12': 0 });
  assert.deepEqual(zeroFill({}, '2026-11-12', 90), {});
  assert.equal(Object.keys(zeroFill({ '2020-01-01': 1 }, '2026-11-12', 30)).length, 30);
});

test('settings: tabs follow the chosen order and new ones come last', () => {
  assert.deepEqual(orderTabs(['tasks', 'notes', 'money'], []), ['tasks', 'notes', 'money']);
  assert.deepEqual(orderTabs(['tasks', 'notes', 'money'], ['money', 'tasks']), ['money', 'tasks', 'notes']);
  assert.deepEqual(orderTabs(['a', 'b', 'c'], ['x', 'c', 'y']), ['c', 'a', 'b']); // ids it no longer has are ignored
});

test('settings: the week can start on Sunday', () => {
  setWeekStart(0);
  try {
    assert.equal(weekDays('2026-11-11')[0], '2026-11-08'); // Wednesday 11 Nov: the Sunday before
    assert.equal(weekDays('2026-11-08')[0], '2026-11-08');
    assert.equal(monthGrid(2026, 10)[0].day, '2026-11-01'); // 1 Nov 2026 is a Sunday
    assert.equal(timeRange('week', '2026-11-11').until, '2026-11-14');
  } finally { setWeekStart(1); }
  assert.equal(weekDays('2026-11-11')[0], '2026-11-09');
  assert.equal(monthGrid(2026, 10)[0].day, '2026-10-26');
});

test('settings: a key event becomes a shortcut text, or nothing when it cannot be one', () => {
  const ev = (code, mods = {}) => ({ code, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, ...mods });
  assert.equal(hotkeyFromEvent(ev('KeyT', { ctrlKey: true, altKey: true })), 'Ctrl+Alt+T');
  assert.equal(hotkeyFromEvent(ev('Digit5', { shiftKey: true, ctrlKey: true })), 'Ctrl+Shift+5');
  assert.equal(hotkeyFromEvent(ev('F9', { altKey: true })), 'Alt+F9');
  assert.equal(hotkeyFromEvent(ev('ArrowLeft', { altKey: true })), 'Alt+Left');
  assert.equal(hotkeyFromEvent(ev('Space', { ctrlKey: true })), 'Ctrl+Space');
  assert.equal(hotkeyFromEvent(ev('KeyT')), null); // no modifier
  assert.equal(hotkeyFromEvent(ev('ControlLeft', { ctrlKey: true })), null); // only a modifier so far
  assert.equal(hotkeyFromEvent(ev('KeyT', { ctrlKey: true, metaKey: true })), null);
  assert.equal(hotkeyFromEvent(ev('Escape', { ctrlKey: true })), null);
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

test('stocks: the latest trade is the price, against the previous close', () => {
  const q = { price: 166.19, prevClose: 173.7, change: -7.51, changePct: -4.32, state: 'CLOSED', lastPrice: 150.0, lastIn: 'PRE', lastTime: 1700 };
  assert.deepEqual(stockNow(q), { price: 150, change: -23.7, pct: -13.64, label: 'Pre-market', time: 1700 });
  assert.equal(stockNow({ ...q, lastPrice: 167.84, lastIn: 'POST' }).label, 'After-hours');
  assert.equal(stockNow({ ...q, lastPrice: 166.19, lastIn: 'REGULAR' }).label, 'At close');
  assert.equal(stockNow({ ...q, state: 'REGULAR', lastIn: 'REGULAR' }).label, 'Live');
  const old = { price: 110, prevClose: 100, change: 10, changePct: 10, state: 'CLOSED' }; // saved by an earlier version
  assert.deepEqual(stockNow(old), { price: 110, change: 10, pct: 10, label: 'At close', time: 0 });
  assert.equal(stockNow({ ...old, prevClose: 0 }).pct, 10);
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

test('review: the span for a day, a week, a month and a year, and how far back they go', () => {
  const t = '2026-11-12';
  assert.deepEqual(reviewRange('day', 0, t), { since: t, until: t });
  assert.deepEqual(reviewRange('day', 2, t), { since: '2026-11-10', until: '2026-11-10' });
  assert.deepEqual(reviewRange('week', 0, t), { since: '2026-11-06', until: t });
  assert.deepEqual(reviewRange('week', 1, t), { since: '2026-10-30', until: '2026-11-05' });
  assert.deepEqual(reviewRange('month', 0, t), { since: '2026-11-01', until: t }); // this month stops at today
  assert.deepEqual(reviewRange('month', 1, t), { since: '2026-10-01', until: '2026-10-31' });
  assert.deepEqual(reviewRange('month', 12, t), { since: '2025-11-01', until: '2025-11-30' });
  assert.deepEqual(reviewRange('year', 0, t), { since: '2026-01-01', until: t });
  assert.deepEqual(reviewRange('year', 1, t), { since: '2025-01-01', until: '2025-12-31' });
});

test('review: a count adds up with zeros, a rating averages with gaps, a year goes by month', () => {
  const count = { zero: true, byDay: { '2026-11-02': 3, '2026-11-04': 2 } };
  const w = reviewBuckets(count, '2026-11-01', '2026-11-07');
  assert.deepEqual(w.buckets.map((b) => b.value), [0, 3, 0, 2, 0, 0, 0]);
  assert.deepEqual([w.total, w.monthly, w.has], [5, false, true]);
  const rating = { zero: false, byDay: { '2026-11-02': 4, '2026-11-03': 2 } };
  const r = reviewBuckets(rating, '2026-11-01', '2026-11-04');
  assert.deepEqual(r.buckets.map((b) => b.value), [null, 4, 2, null]); // days without an entry are gaps, not zeros
  assert.equal(r.total, 3);
  const none = reviewBuckets({ zero: false, byDay: {} }, '2026-11-01', '2026-11-04');
  assert.deepEqual([none.total, none.has], [null, false]);
  assert.equal(reviewBuckets({ zero: true, byDay: {} }, '2026-11-01', '2026-11-04').has, false);
  const year = reviewBuckets({ zero: true, byDay: { '2026-01-05': 1, '2026-01-20': 2, '2026-03-01': 4 } }, '2026-01-01', '2026-11-12');
  assert.deepEqual([year.monthly, year.buckets.length, year.buckets[0], year.buckets[2]], [true, 11, { key: '2026-01', value: 3 }, { key: '2026-03', value: 4 }]);
  assert.equal(year.total, 7);
  const avgYear = reviewBuckets({ zero: false, byDay: { '2026-01-05': 2, '2026-01-06': 4 } }, '2026-01-01', '2026-11-12');
  assert.equal(avgYear.buckets[0].value, 3);
});

test('time: the work log lists what was done, newest first, with what was written', () => {
  const projects = [{ id: 'p', name: 'Website', client: 'Acme' }];
  const entries = [
    { id: 'a', project: 'p', desc: 'Fix bug', notes: 'Found the cause\nin the form', start: '2026-11-13T07:40:00', end: '2026-11-13T09:00:00' },
    { id: 'b', project: 'p', desc: '', start: '2026-11-14T10:00:00', end: '2026-11-14T10:30:00' },
    { id: 'c', project: 'gone', desc: 'Old', start: '2026-11-13T12:00:00', end: '2026-11-13T12:10:00' },
    { id: 'd', project: 'p', desc: 'Outside', start: '2026-10-01T10:00:00', end: '2026-10-01T11:00:00' },
  ];
  const log = timeLog(entries, projects, '2026-11-01', '2026-11-30');
  assert.deepEqual(log.map((x) => x.id), ['b', 'c', 'a']);
  assert.deepEqual(log[2], { id: 'a', day: '2026-11-13', from: '07:40', to: '09:00', name: 'Website', client: 'Acme', desc: 'Fix bug', notes: 'Found the cause\nin the form', seconds: 4800 });
  assert.equal(log[1].name, 'Deleted project');
  assert.equal(timeLogLine(log[2], '13 Nov'), '13 Nov 07:40-09:00 · Website · 1 h 20 min · Fix bug — Found the cause / in the form');
  assert.equal(timeLogLine(log[0], '14 Nov'), '14 Nov 10:00-10:30 · Website · 30 min');
});

test('projectSummary counts the tasks of a project, its time and what it earns', () => {
  const p = { id: 'p1', name: 'Acme', rate: 600 };
  const todos = [{ id: 1, projectId: 'p1', done: false }, { id: 2, projectId: 'p1', done: true }, { id: 3, projectId: 'p1', done: true }, { id: 4, projectId: 'p2', done: false }, { id: 5, done: false }];
  const entries = [
    { project: 'p1', start: '2026-11-10T09:00:00', end: '2026-11-10T10:30:00' }, // this week, 1.5 h
    { project: 'p1', start: '2026-11-02T09:00:00', end: '2026-11-02T10:00:00' }, // earlier, 1 h
    { project: 'p2', start: '2026-11-10T09:00:00', end: '2026-11-10T11:00:00' },
  ];
  const s = projectSummary(todos, entries, p, '2026-11-09');
  assert.deepEqual(s, { open: 1, done: 2, total: 3, pct: 67, seconds: 9000, week: 5400, amount: 1500 });
  assert.deepEqual(projectSummary([], [], { id: 'x', rate: 0 }, '2026-11-09'), { open: 0, done: 0, total: 0, pct: 0, seconds: 0, week: 0, amount: 0 });
});

test('assistantRange: the span the summaries cover', () => {
  const today = '2026-11-13';
  assert.deepEqual(assistantRange('week', today), { since: '2026-11-07', until: today, label: 'the last 7 days' });
  assert.deepEqual(assistantRange('days30', today), { since: '2026-10-15', until: today, label: 'the last 30 days' });
  assert.deepEqual(assistantRange('month', today), { since: '2026-11-01', until: today, label: 'this month' });
  assert.deepEqual(assistantRange('lastmonth', today), { since: '2026-10-01', until: '2026-10-31', label: 'last month' });
  assert.deepEqual(assistantRange('year', today), { since: '2026-01-01', until: today, label: 'this year' });
  assert.equal(assistantRange('nonsense', today).label, 'the last 7 days');
});

test('assistantPrompt names the period when there is one', () => {
  const now = new Date(2026, 10, 13, 9, 0);
  const base = { now, sections: [{ title: 'Money', lines: ['x'] }], can: [], views: [] };
  assert.ok(!assistantPrompt(base).includes('cover'));
  assert.ok(assistantPrompt({ ...base, period: assistantRange('lastmonth', '2026-11-13') }).includes('cover last month (2026-10-01 to 2026-10-31)'));
});

test('entry-by-entry lines: newest first, inside the span, capped', () => {
  const entries = [
    { day: '2026-11-05', kind: 'out', amount: 120, cat: 'Food', note: 'lunch' },
    { day: '2026-11-09', kind: 'in', amount: 900, cat: 'Salary', note: '' },
    { day: '2026-10-30', kind: 'out', amount: 5, cat: 'Other', note: 'outside' },
  ];
  assert.deepEqual(moneyDetail(entries, '2026-11-01', '2026-11-30'), ['2026-11-09 earned 900 Salary', '2026-11-05 spent 120 Food: lunch']);
  const many = Array.from({ length: 5 }, (_, i) => `l${i}`);
  assert.deepEqual(capLines(many, 3), ['l0', 'l1', 'l2', '(2 older entries not shown)']);
  assert.deepEqual(capLines(many, 5), many);
  const t = [{ id: 'e1', project: 'p', desc: 'Fix bug', notes: 'found it\nfixed', start: '2026-11-05T07:40:00', end: '2026-11-05T09:00:00' }];
  assert.deepEqual(timeDetail(t, [{ id: 'p', name: 'Web', client: '' }], '2026-11-01', '2026-11-30'), ['2026-11-05 07:40-09:00 · Web · 1 h 20 min · Fix bug — found it / fixed']);
  assert.deepEqual(timeDetail(t, [], '2026-12-01', '2026-12-31'), []);
});

test('planWeek: the days of the week with their tasks, and what has no day yet', () => {
  const days = ['2026-11-09', '2026-11-10', '2026-11-11', '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15'];
  const todos = [
    { id: 'a', title: 'A', due: '2026-11-10T14:00', minutes: 60, done: false },
    { id: 'b', title: 'B', due: '2026-11-10T09:00', minutes: 30, done: false },
    { id: 'c', title: 'C', due: '2026-11-10T10:00', minutes: 45, done: true },
    { id: 'd', title: 'D', due: null, done: false, createdAt: '2026-11-02' },
    { id: 'e', title: 'E', due: '2026-11-05T09:00', done: false },       // overdue: back in the pool
    { id: 'f', title: 'F', due: '2026-11-20T09:00', done: false },       // a later week: nowhere yet
    { id: 'g', title: 'G', due: null, pinned: true, done: false },
    { id: 'r', title: 'R', due: '2026-11-09T08:00', repeat: 'daily', done: false },
  ];
  const { cols, pool } = planWeek(todos, { '2026-11-12': [{ title: 'Rent' }] }, days, '2026-11-09');
  assert.deepEqual(cols[1].tasks.map((t) => t.id), ['r@2026-11-10', 'b', 'c', 'a']); // by time of day, the daily task's turn included
  assert.equal(cols[1].minutes, 90);                                         // the done one does not count
  assert.deepEqual(cols[3].marks, [{ title: 'Rent' }]);
  assert.ok(cols[4].tasks.some((t) => t.ghost && t.ghostOf === 'r'));       // a repeating task shows each day it comes back
  assert.deepEqual(pool.map((t) => t.id), ['g', 'e', 'd']);                 // pinned, then the overdue, then undated
});

test('placeDue: a day for a task', () => {
  assert.deepEqual(placeDue({ due: '2026-11-05T15:30' }, '2026-11-12'), { due: '2026-11-12T15:30', snoozeUntil: null });
  assert.deepEqual(placeDue({ due: null }, '2026-11-12', '10'), { due: '2026-11-12T09:00', snoozeUntil: null, remindBefore: 10 });
  assert.deepEqual(placeDue({ due: null }, '2026-11-12', ''), { due: '2026-11-12T09:00', snoozeUntil: null, remindBefore: null });
});

test('xpLevel: level L starts at 50 * L * (L - 1) XP', () => {
  assert.deepEqual(xpLevel(0), { level: 1, into: 0, need: 100, pct: 0, title: 'Beginner' });
  assert.equal(xpLevel(99).level, 1);
  assert.deepEqual(xpLevel(100), { level: 2, into: 0, need: 200, pct: 0, title: 'Beginner' });
  assert.equal(xpLevel(299).level, 2);
  assert.deepEqual(xpLevel(450), { level: 3, into: 150, need: 300, pct: 50, title: 'Apprentice' });
  assert.equal(xpLevel(1000).level, 5);
  assert.equal(xpLevel(1000).title, 'Regular');
  assert.equal(xpLevel(-5).level, 1);
  assert.equal(xpLevel(50 * 25 * 24).title, 'Legend');
});

test('xpAward: pays once per thing, with a daily cap per source', () => {
  const fresh = { total: 0, day: '', today: {}, keys: {}, log: [] };
  const day = '2026-11-13';
  let r = xpAward(fresh, 'task-done', { key: 'task:1' }, day);
  assert.equal(r.gained, 10);
  assert.equal(r.state.total, 10);
  assert.equal(xpAward(r.state, 'task-done', { key: 'task:1' }, day).gained, 0);         // the same task again
  assert.equal(xpAward(r.state, 'task-done', { key: 'task:2' }, day).gained, 10);        // another one
  assert.equal(xpAward(fresh, 'task-done', { title: 'no key' }, day).gained, 0);          // nothing to remember it by
  assert.equal(xpAward(fresh, 'nonsense', { key: 'x' }, day).gained, 0);
  // the cap: 15 spending entries at 3 XP pay 15 XP, then nothing until tomorrow
  let s = fresh, total = 0;
  for (let i = 0; i < 9; i++) { const a = xpAward(s, 'expense-added', { key: 'e' + i }, day); s = a.state; total += a.gained; }
  assert.equal(total, 15);
  assert.equal(xpAward(s, 'expense-added', { key: 'next-day' }, '2026-11-14').gained, 3);
  // time: minutes become XP, short bursts pay nothing, long ones are capped per entry
  assert.equal(xpAward(fresh, 'time-logged', { key: 't1', minutes: 3 }, day).gained, 0);
  assert.equal(xpAward(fresh, 'time-logged', { key: 't2', minutes: 90 }, day).gained, 9);
  assert.equal(xpAward(fresh, 'time-logged', { key: 't3', minutes: 600 }, day).gained, 30);
  assert.equal(r.state.log.length, 1);
});

test('xp streak: a bonus on the first XP of a day after two in a row, a gap starts again', () => {
  let s = { total: 0, day: '', today: {}, keys: {}, log: [] };
  const earn = (day, key) => { const r = xpAward(s, 'task-done', { key }, day); s = r.state; return r; };
  assert.equal(earn('2026-11-10', 'a').bonus, 0);                 // day 1
  assert.equal(earn('2026-11-10', 'b').bonus, 0);                 // the same day: the streak does not move
  assert.equal(earn('2026-11-11', 'c').bonus, 0);                 // day 2
  const third = earn('2026-11-12', 'd');                          // day 3
  assert.equal(third.bonus, 3);
  assert.equal(third.state.total, 10 * 4 + 3);
  assert.equal(third.state.streak.len, 3);
  assert.equal(xpStreak(s, '2026-11-12'), 3);
  assert.equal(xpStreak(s, '2026-11-13'), 3);                      // still alive until the day is over
  assert.equal(xpStreak(s, '2026-11-14'), 0);                      // a day was missed
  const again = earn('2026-11-15', 'e');
  assert.equal(again.state.streak.len, 1);                         // starts again
  assert.equal(again.state.streak.best, 3);                        // the best is kept
  assert.equal(again.bonus, 0);
});

test('xp badges: progress, unlocking once, and what is announced', () => {
  let s = { total: 0, day: '', today: {}, keys: {}, log: [] };
  const first = xpAward(s, 'task-done', { key: 't0' }, '2026-11-01');
  assert.deepEqual(first.badges, ['First step']);
  s = first.state;
  assert.equal(s.badges.first, '2026-11-01');
  const announced = [];
  for (let i = 1; i < 10; i++) { const r = xpAward(s, 'task-done', { key: 't' + i }, '2026-11-01'); s = r.state; announced.push(...r.badges); }
  assert.ok(announced.includes('Getting things done'));           // the 10th task
  assert.ok(!xpAward(s, 'task-done', { key: 'again' }, '2026-11-01').badges.includes('Getting things done')); // announced once
  const list = xpBadges(s);
  assert.equal(list.find((b) => b.id === 'tasks10').done, true);
  assert.equal(list.find((b) => b.id === 'tasks100').value, 10);
  assert.equal(list.find((b) => b.id === 'tasks100').done, false);
  assert.equal(xpBadges({ total: 0, log: [], keys: {}, today: {} }).filter((b) => b.done).length, 0); // an old saved state without counters works
  const t = xpAward({ total: 0, day: '', today: {}, keys: {}, log: [] }, 'time-logged', { key: 'x', minutes: 90 }, '2026-11-01').state;
  assert.equal(t.minutes, 90);
});

test('briefingDue: once a day, only when it is on, there is a key and something is shared', () => {
  const base = { on: true, day: '2026-11-12', today: '2026-11-13', hasKey: true, shared: 2 };
  assert.equal(briefingDue(base), true);
  assert.equal(briefingDue({ ...base, day: '2026-11-13' }), false);   // already written today
  assert.equal(briefingDue({ ...base, on: false }), false);
  assert.equal(briefingDue({ ...base, hasKey: false }), false);
  assert.equal(briefingDue({ ...base, shared: 0 }), false);           // nothing it may see
  assert.equal(briefingDue({ ...base, day: '' }), true);
  assert.ok(ASSIST_BRIEFING.length < 400 && ASSIST_BRIEFING.includes('5 short lines'));
});
