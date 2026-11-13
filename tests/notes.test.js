const test = require('node:test');
const assert = require('node:assert');
const { plainToHtml, colorKey, NOTE_COLORS, DEFAULT_COLOR, checkProgress } = require('../ui/logic.js');

test('plainToHtml: one paragraph per line, blank lines kept, markup escaped', () => {
  assert.equal(plainToHtml('a\n\nb'), '<p>a</p><p><br></p><p>b</p>');
  assert.equal(plainToHtml(''), '<p><br></p>');
  assert.equal(plainToHtml(undefined), '<p><br></p>');
  assert.equal(plainToHtml('1 < 2 & <b>x</b>'), '<p>1 &lt; 2 &amp; &lt;b&gt;x&lt;/b&gt;</p>');
});

test('colorKey reads rgb and hex, and rejects everything else', () => {
  assert.equal(colorKey('rgb(201, 52, 16)'), '#c93410');
  assert.equal(colorKey('rgba(29, 78, 216, 1)'), '#1d4ed8');
  assert.equal(colorKey('#C93410'), '#c93410');
  assert.equal(colorKey('red'), '');
  assert.equal(colorKey('#fff'), '');
  assert.equal(colorKey(undefined), '');
});

test('note colours: six of them, the default first, all keys in the form colorKey returns', () => {
  const keys = Object.keys(NOTE_COLORS);
  assert.equal(keys.length, 6);
  assert.equal(keys[0], DEFAULT_COLOR);
  assert.ok(keys.every((k) => colorKey(k) === k));
});

test('checkProgress counts ticked and total checklist lines only', () => {
  assert.deepEqual(checkProgress('[ ] a\n[x] b\nplain text\n[x] c\n[x]no space'), { done: 2, total: 3 });
  assert.deepEqual(checkProgress('just text'), { done: 0, total: 0 });
  assert.deepEqual(checkProgress(''), { done: 0, total: 0 });
  assert.deepEqual(checkProgress(undefined), { done: 0, total: 0 });
});
