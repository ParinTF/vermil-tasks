const test = require('node:test');
const assert = require('node:assert');
const { shiftDay, zeroFill, insightFindings, insightSentence } = require('../ui/logic.js');

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
