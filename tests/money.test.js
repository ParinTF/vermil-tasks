const test = require('node:test');
const assert = require('node:assert');
const { parseAmount, moneyLabel, moneyMonth, budgetStatus, moneyAccounts } = require('../ui/logic.js');

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

test('budgetStatus: ok under 80%, near from 80%, over from 100%', () => {
  assert.deepEqual(budgetStatus(50, 100), { pct: 50, level: 'ok', left: 50 });
  assert.deepEqual(budgetStatus(79.4, 100), { pct: 79, level: 'ok', left: 20.6 });
  assert.deepEqual(budgetStatus(80, 100), { pct: 80, level: 'near', left: 20 });
  assert.deepEqual(budgetStatus(100, 100), { pct: 100, level: 'over', left: 0 });
  assert.deepEqual(budgetStatus(105, 100), { pct: 105, level: 'over', left: -5 });
  assert.deepEqual(budgetStatus(10, 0), { pct: 0, level: 'ok', left: -10 }); // no limit set: never a warning
});

test('moneyAccounts separates Online and Cash balances and does not deduct PayLater until settled', () => {
  const entries = [
    { id: '1', day: '2026-11-01', kind: 'in', amount: 10000, cat: 'Salary', account: 'online' },
    { id: '2', day: '2026-11-02', kind: 'in', amount: 2000, cat: 'Salary', account: 'cash' },
    { id: '3', day: '2026-11-03', kind: 'out', amount: 300, cat: 'Food', account: 'cash' },
    { id: '4', day: '2026-11-04', kind: 'out', amount: 1500, cat: 'Shopping', account: 'paylater' },
  ];
  const unpaid = [{ id: 'pl1', entryId: '4', title: 'Headphones', amount: 1500, due: '2026-11-28', paid: false }];
  const before = moneyAccounts(entries, unpaid, '2026-11');
  assert.equal(before.online, 10000); // untouched by PayLater purchase!
  assert.equal(before.cash, 1700);
  assert.equal(before.walletBalance, 11700);
  assert.equal(before.paylaterSpent, 1500);
  assert.equal(before.paylaterUnpaid, 1500);
  assert.equal(before.paylaterDueMonth, 1500);

  // Settling PayLater from Online deducts from Online balance
  const settled = [{ ...unpaid[0], paid: true, paidWith: 'online', paidDay: '2026-11-25' }];
  const after = moneyAccounts(entries, settled, '2026-11');
  assert.equal(after.online, 8500);
  assert.equal(after.cash, 1700);
  assert.equal(after.walletBalance, 10200);
  assert.equal(after.paylaterUnpaid, 0);
  assert.equal(after.paylaterSettled, 1500);
});
