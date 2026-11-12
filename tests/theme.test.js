const test = require('node:test');
const assert = require('node:assert');
const { DEFAULT_ACCENT, PAPER, luminance, contrast, fitAccent, accentTokens, cleanFontName, fontStack, normalLook } = require('../ui/theme.js');

const PRESETS = ['#ff4a1c', '#e8590c', '#b97f00', '#1f9d55', '#0e8f9c', '#3b82f6', '#6366f1', '#8b5cf6', '#e5489b', '#6b7280'];

test('theme: contrast of black on white is 21', () => {
  assert.equal(Math.round(contrast('#000000', '#ffffff')), 21);
});

test('theme: every preset accent works as a mark and as small text on both papers', () => {
  for (const hex of PRESETS) {
    const t = accentTokens(hex);
    assert.equal(t.accent, hex, hex + ' is already in the band');
    assert.ok(contrast(t.accent, PAPER.light) >= 2.9 && contrast(t.accent, PAPER.dark) >= 2.9, hex + ' shows as a mark');
    assert.ok(contrast(t.textLight, PAPER.light) >= 4.5, hex + ' small text on light');
    assert.ok(contrast(t.textDark, PAPER.dark) >= 4.5, hex + ' small text on dark');
    assert.ok(contrast(t.accent, t.onAccent) >= 4.4, hex + ' text on the accent');
  }
});

test('theme: a pale or a very dark accent is moved into the readable band', () => {
  for (const hex of ['#ffff00', '#ffffff', '#000000', '#001133', '#f5e6a1']) {
    const t = accentTokens(hex);
    assert.ok(luminance(t.accent) >= 0.115 && luminance(t.accent) <= 0.275, hex + ' -> ' + t.accent);
    assert.ok(contrast(t.textLight, PAPER.light) >= 4.5 && contrast(t.textDark, PAPER.dark) >= 4.5, hex);
  }
  assert.equal(fitAccent('not a colour'), DEFAULT_ACCENT);
});

test('theme: a typed font name can never carry CSS', () => {
  assert.equal(cleanFontName('Tahoma'), 'Tahoma');
  assert.equal(cleanFontName('My Font-2'), 'My Font-2');
  assert.equal(cleanFontName('x"; } body { display:none'), 'x body displaynone');
  assert.equal(cleanFontName('  a   b '), 'a b');
  assert.equal(cleanFontName('ฟอนต์ไทย'), 'ฟอนต์ไทย');
  assert.equal(cleanFontName(null), '');
  assert.equal(cleanFontName('x'.repeat(80)).length, 40);
});

test('theme: font stacks keep Anuphan for Thai, and a custom name needs a name', () => {
  assert.ok(fontStack({ font: 'custom', custom: 'Tahoma' }).startsWith('"Tahoma", Anuphan'));
  assert.ok(fontStack({ font: 'custom', custom: '' }).startsWith('Anuphan'));
  assert.ok(fontStack({ font: 'mono' }).includes('Consolas') && fontStack({ font: 'mono' }).includes('Anuphan'));
  assert.ok(fontStack({ font: 'nope' }).startsWith('Anuphan'));
});

test('theme: a stored look is read back safely', () => {
  assert.deepEqual(normalLook(null), { accent: DEFAULT_ACCENT, font: 'anuphan', custom: '' });
  assert.deepEqual(normalLook({ accent: '#3B82F6', font: 'serif', custom: 'x' }), { accent: '#3b82f6', font: 'serif', custom: 'x' });
  assert.deepEqual(normalLook({ accent: 'red', font: 'comic', custom: 5 }), { accent: DEFAULT_ACCENT, font: 'anuphan', custom: '5' });
});
