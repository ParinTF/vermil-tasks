const test = require('node:test');
const assert = require('node:assert');
const { addCycle, paidTotals, billState } = require('../ui/logic.js');

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
