const test = require('node:test');
const assert = require('node:assert');
const { xpLevel, xpAward, xpBadges, xpStreak } = require('../ui/logic.js');

test('xpLevel: level L starts at 50 * L * (L - 1) XP', () => {
  assert.deepEqual(xpLevel(0), { level: 1, into: 0, need: 100, pct: 0, title: 'Beginner' });
  assert.equal(xpLevel(99).level, 1);
  assert.deepEqual(xpLevel(100), { level: 2, into: 0, need: 200, pct: 0, title: 'Beginner' });
  assert.equal(xpLevel(299).level, 2);
  assert.deepEqual(xpLevel(450), { level: 3, into: 150, need: 300, pct: 50, title: 'Apprentice' });
  assert.equal(xpLevel(1000).level, 5);
  assert.equal(xpLevel(1000).title, 'Regular');
  assert.equal(xpLevel(-5).level, 1);
  assert.equal(xpLevel(50 * 25 * 24).title, 'Legend');
});

test('xpAward: pays once per thing, with a daily cap per source', () => {
  const fresh = { total: 0, day: '', today: {}, keys: {}, log: [] };
  const day = '2026-11-13';
  let r = xpAward(fresh, 'task-done', { key: 'task:1' }, day);
  assert.equal(r.gained, 10);
  assert.equal(r.state.total, 10);
  assert.equal(xpAward(r.state, 'task-done', { key: 'task:1' }, day).gained, 0);         // the same task again
  assert.equal(xpAward(r.state, 'task-done', { key: 'task:2' }, day).gained, 10);        // another one
  assert.equal(xpAward(fresh, 'task-done', { title: 'no key' }, day).gained, 0);          // nothing to remember it by
  assert.equal(xpAward(fresh, 'nonsense', { key: 'x' }, day).gained, 0);
  // the cap: 15 spending entries at 3 XP pay 15 XP, then nothing until tomorrow
  let s = fresh, total = 0;
  for (let i = 0; i < 9; i++) { const a = xpAward(s, 'expense-added', { key: 'e' + i }, day); s = a.state; total += a.gained; }
  assert.equal(total, 15);
  assert.equal(xpAward(s, 'expense-added', { key: 'next-day' }, '2026-11-14').gained, 3);
  // time: minutes become XP, short bursts pay nothing, long ones are capped per entry
  assert.equal(xpAward(fresh, 'time-logged', { key: 't1', minutes: 3 }, day).gained, 0);
  assert.equal(xpAward(fresh, 'time-logged', { key: 't2', minutes: 90 }, day).gained, 9);
  assert.equal(xpAward(fresh, 'time-logged', { key: 't3', minutes: 600 }, day).gained, 30);
  assert.equal(r.state.log.length, 1);
});

test('xp streak: a bonus on the first XP of a day after two in a row, a gap starts again', () => {
  let s = { total: 0, day: '', today: {}, keys: {}, log: [] };
  const earn = (day, key) => { const r = xpAward(s, 'task-done', { key }, day); s = r.state; return r; };
  assert.equal(earn('2026-11-10', 'a').bonus, 0);                 // day 1
  assert.equal(earn('2026-11-10', 'b').bonus, 0);                 // the same day: the streak does not move
  assert.equal(earn('2026-11-11', 'c').bonus, 0);                 // day 2
  const third = earn('2026-11-12', 'd');                          // day 3
  assert.equal(third.bonus, 3);
  assert.equal(third.state.total, 10 * 4 + 3);
  assert.equal(third.state.streak.len, 3);
  assert.equal(xpStreak(s, '2026-11-12'), 3);
  assert.equal(xpStreak(s, '2026-11-13'), 3);                      // still alive until the day is over
  assert.equal(xpStreak(s, '2026-11-14'), 0);                      // a day was missed
  const again = earn('2026-11-15', 'e');
  assert.equal(again.state.streak.len, 1);                         // starts again
  assert.equal(again.state.streak.best, 3);                        // the best is kept
  assert.equal(again.bonus, 0);
});

test('xp badges: progress, unlocking once, and what is announced', () => {
  let s = { total: 0, day: '', today: {}, keys: {}, log: [] };
  const first = xpAward(s, 'task-done', { key: 't0' }, '2026-11-01');
  assert.deepEqual(first.badges, ['First step']);
  s = first.state;
  assert.equal(s.badges.first, '2026-11-01');
  const announced = [];
  for (let i = 1; i < 10; i++) { const r = xpAward(s, 'task-done', { key: 't' + i }, '2026-11-01'); s = r.state; announced.push(...r.badges); }
  assert.ok(announced.includes('Getting things done'));           // the 10th task
  assert.ok(!xpAward(s, 'task-done', { key: 'again' }, '2026-11-01').badges.includes('Getting things done')); // announced once
  const list = xpBadges(s);
  assert.equal(list.find((b) => b.id === 'tasks10').done, true);
  assert.equal(list.find((b) => b.id === 'tasks100').value, 10);
  assert.equal(list.find((b) => b.id === 'tasks100').done, false);
  assert.equal(xpBadges({ total: 0, log: [], keys: {}, today: {} }).filter((b) => b.done).length, 0); // an old saved state without counters works
  const t = xpAward({ total: 0, day: '', today: {}, keys: {}, log: [] }, 'time-logged', { key: 'x', minutes: 90 }, '2026-11-01').state;
  assert.equal(t.minutes, 90);
});
