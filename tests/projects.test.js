const test = require('node:test');
const assert = require('node:assert');
const { projectSummary } = require('../ui/logic.js');

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
