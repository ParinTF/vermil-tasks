const test = require('node:test');
const assert = require('node:assert');
const { autoDaily, autoMetric, autoMatches, autoFill, autoDue, autoAllowed, autoSummary } = require('../ui/logic.js');

const wed = new Date(2026, 10, 11); // Wednesday 11 Nov 2026

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
