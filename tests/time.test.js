const test = require('node:test');
const assert = require('node:assert');
const { secondsBetween, clockHMS, hoursLabel, timeRange, timeReport, timeLog, timeLogLine } = require('../ui/logic.js');

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
