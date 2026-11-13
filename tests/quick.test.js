const test = require('node:test');
const assert = require('node:assert');
const { parseQuick } = require('../ui/logic.js');

// "now" is Wednesday 11 Nov 2026, 10:00
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
