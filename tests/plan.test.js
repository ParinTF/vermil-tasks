const test = require('node:test');
const assert = require('node:assert');
const { planWeek, placeDue } = require('../ui/logic.js');

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
