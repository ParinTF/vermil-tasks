const test = require('node:test');
const assert = require('node:assert');
const { parseIngredients, topItems, weekDays } = require('../ui/logic.js');

test('shopping: ingredients from a meal, usual items, the week', () => {
  assert.deepEqual(parseIngredients('Pad thai: noodles, shrimp, egg'), ['noodles', 'shrimp', 'egg']);
  assert.deepEqual(parseIngredients('Omelette (egg; cheese , ham)'), ['egg', 'cheese', 'ham']);
  assert.deepEqual(parseIngredients('Leftovers'), []);
  assert.deepEqual(parseIngredients('Soup:'), []);
  assert.deepEqual(topItems({ milk: 5, eggs: 9, bread: 5, rice: 1 }, 3), ['eggs', 'bread', 'milk']);
  assert.deepEqual(topItems({ milk: 5, eggs: 9 }, 5, ['Eggs']), ['milk']); // already on the list
  assert.deepEqual(weekDays('2026-11-12'), ['2026-11-09', '2026-11-10', '2026-11-11', '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15']);
  assert.equal(weekDays('2026-11-15')[0], '2026-11-09'); // a Sunday belongs to the week before it
  assert.equal(weekDays('2026-11-09')[6], '2026-11-15');
});
