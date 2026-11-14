const test = require('node:test');
const assert = require('node:assert');
const { plainToHtml, colorKey, NOTE_COLORS, DEFAULT_COLOR, checkProgress, sortNotes, NOTE_TEMPLATES } = require('../ui/logic.js');

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

test('sortNotes puts pinned notes first, then newest updatedAt', () => {
  const notes = [
    { id: 'n1', title: 'Old', updatedAt: '2026-11-01T10:00:00Z' },
    { id: 'n2', title: 'Newer', updatedAt: '2026-11-10T10:00:00Z' },
    { id: 'n3', title: 'Pinned old', pinned: true, updatedAt: '2026-11-02T10:00:00Z' },
  ];
  assert.deepEqual(sortNotes(notes).map((n) => n.id), ['n3', 'n2', 'n1']);
  assert.ok(NOTE_TEMPLATES.length >= 4 && NOTE_TEMPLATES.every((t) => t.id && t.label && t.title));
});
