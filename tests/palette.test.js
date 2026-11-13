const test = require('node:test');
const assert = require('node:assert');
const { rankItems, parseConvert, convertUnit, convertLabel } = require('../ui/logic.js');

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
