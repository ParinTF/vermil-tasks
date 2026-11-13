const test = require('node:test');
const assert = require('node:assert');
const { weekDays, monthGrid, timeRange, hotkeyFromEvent, orderTabs, setWeekStart } = require('../ui/logic.js');

test('settings: tabs follow the chosen order and new ones come last', () => {
  assert.deepEqual(orderTabs(['tasks', 'notes', 'money'], []), ['tasks', 'notes', 'money']);
  assert.deepEqual(orderTabs(['tasks', 'notes', 'money'], ['money', 'tasks']), ['money', 'tasks', 'notes']);
  assert.deepEqual(orderTabs(['a', 'b', 'c'], ['x', 'c', 'y']), ['c', 'a', 'b']); // ids it no longer has are ignored
});

test('settings: the week can start on Sunday', () => {
  setWeekStart(0);
  try {
    assert.equal(weekDays('2026-11-11')[0], '2026-11-08'); // Wednesday 11 Nov: the Sunday before
    assert.equal(weekDays('2026-11-08')[0], '2026-11-08');
    assert.equal(monthGrid(2026, 10)[0].day, '2026-11-01'); // 1 Nov 2026 is a Sunday
    assert.equal(timeRange('week', '2026-11-11').until, '2026-11-14');
  } finally { setWeekStart(1); }
  assert.equal(weekDays('2026-11-11')[0], '2026-11-09');
  assert.equal(monthGrid(2026, 10)[0].day, '2026-10-26');
});

test('settings: a key event becomes a shortcut text, or nothing when it cannot be one', () => {
  const ev = (code, mods = {}) => ({ code, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, ...mods });
  assert.equal(hotkeyFromEvent(ev('KeyT', { ctrlKey: true, altKey: true })), 'Ctrl+Alt+T');
  assert.equal(hotkeyFromEvent(ev('Digit5', { shiftKey: true, ctrlKey: true })), 'Ctrl+Shift+5');
  assert.equal(hotkeyFromEvent(ev('F9', { altKey: true })), 'Alt+F9');
  assert.equal(hotkeyFromEvent(ev('ArrowLeft', { altKey: true })), 'Alt+Left');
  assert.equal(hotkeyFromEvent(ev('Space', { ctrlKey: true })), 'Ctrl+Space');
  assert.equal(hotkeyFromEvent(ev('KeyT')), null); // no modifier
  assert.equal(hotkeyFromEvent(ev('ControlLeft', { ctrlKey: true })), null); // only a modifier so far
  assert.equal(hotkeyFromEvent(ev('KeyT', { ctrlKey: true, metaKey: true })), null);
  assert.equal(hotkeyFromEvent(ev('Escape', { ctrlKey: true })), null);
});
