const test = require('node:test');
const assert = require('node:assert');
const { currencySign, priceLabel, pctLabel, signedLabel, portfolio, stockNow } = require('../ui/logic.js');

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
