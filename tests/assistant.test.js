const test = require('node:test');
const assert = require('node:assert');
const { ASSIST_BRIEFING, briefingDue, capLines, moneyDetail, timeDetail, assistantPrompt, assistantRange, parseAssistantReply, describeAction, assistantTurns } = require('../ui/logic.js');

test('assistant: the prompt carries the date, the shared data and only the allowed actions', () => {
  const now = new Date(2026, 10, 12, 14, 5);
  const p = assistantPrompt({ now, sections: [{ title: 'Tasks', lines: ['Pay rent (due 2026-11-14)', 'Buy milk'] }], can: ['task', 'open'], views: ['tasks', 'money'] });
  assert.ok(p.includes('Thursday 2026-11-12, local time 14:05'));
  assert.ok(p.includes('## Tasks\n- Pay rent (due 2026-11-14)\n- Buy milk'));
  assert.ok(p.includes('"type":"task"') && p.includes('one of: tasks, money') && !p.includes('"type":"expense"') && !p.includes('"type":"shop"'));
  const bare = assistantPrompt({ now, sections: [], can: [], views: [] });
  assert.ok(bare.includes('Nothing is shared with you') && bare.includes('cannot suggest actions') && !bare.includes('## '));
});

test('assistant: a reply is parsed, fenced or not, and plain text is just the reply', () => {
  const can = ['task', 'shop', 'expense', 'note', 'open'], views = ['tasks', 'money'];
  const ok = parseAssistantReply('{"reply":"Done soon","actions":[{"type":"task","title":" Pay rent ","due":"2026-11-14T09:00"},{"type":"shop","name":"milk"}]}', { can, views });
  assert.deepEqual(ok, { reply: 'Done soon', actions: [{ type: 'task', title: 'Pay rent', due: '2026-11-14T09:00' }, { type: 'shop', name: 'milk' }] });
  const fenced = parseAssistantReply('```json\n{"reply":"hi","actions":[]}\n```', { can, views });
  assert.equal(fenced.reply, 'hi');
  const chatty = parseAssistantReply('Sure! {"reply":"hi","actions":[]} hope that helps', { can, views });
  assert.equal(chatty.reply, 'hi');
  assert.deepEqual(parseAssistantReply('Just words', { can, views }), { reply: 'Just words', actions: [] });
  assert.deepEqual(parseAssistantReply('', { can, views }), { reply: '', actions: [] });
  assert.equal(parseAssistantReply('[1,2]', { can, views }).reply, '[1,2]');
});

test('assistant: only valid actions of allowed kinds get through', () => {
  const can = ['task', 'expense', 'open'], views = ['tasks'];
  const bad = [
    { type: 'task', title: '' }, { type: 'task', title: 'x', due: 'tomorrow' }, { type: 'task', title: 'x', due: '2026-13-45T99:99' },
    { type: 'shop', name: 'milk' }, // Shopping is not allowed here
    { type: 'delete', id: 'all' }, null, 'task',
    { type: 'expense', amount: -5, cat: 'Food' }, { type: 'expense', amount: 'lots' }, { type: 'expense', amount: 0 },
    { type: 'open', view: 'settings' },
  ];
  const r = parseAssistantReply(JSON.stringify({ reply: 'x', actions: bad }), { can, views });
  assert.deepEqual(r.actions.map((a) => a.type + ':' + (a.title || a.cat || a.view || '')), ['task:x', 'task:x']); // the two tasks with a bad due keep the title and lose the date
  assert.deepEqual(r.actions.map((a) => a.due), [null, null]);
  const good = parseAssistantReply('{"reply":"r","actions":[{"type":"expense","amount":12.345,"cat":"","note":"lunch"},{"type":"open","view":"tasks"}]}', { can, views });
  assert.deepEqual(good.actions, [{ type: 'expense', amount: 12.35, cat: 'Other', note: 'lunch' }, { type: 'open', view: 'tasks' }]);
  const many = parseAssistantReply(JSON.stringify({ reply: 'r', actions: Array.from({ length: 9 }, (_, i) => ({ type: 'task', title: 't' + i })) }), { can, views });
  assert.equal(many.actions.length, 5);
  const long = parseAssistantReply(JSON.stringify({ reply: 'r', actions: [{ type: 'task', title: 'x'.repeat(500) }] }), { can, views });
  assert.equal(long.actions[0].title.length, 200);
  assert.equal(parseAssistantReply('{"actions":[]}', { can, views }).reply, '(no answer)');
});

test('assistant: each action reads as one line', () => {
  assert.equal(describeAction({ type: 'task', title: 'Pay rent', due: '2026-11-14T09:00' }), 'Add the task "Pay rent" due 2026-11-14 09:00');
  assert.equal(describeAction({ type: 'task', title: 'Call', due: null }), 'Add the task "Call"');
  assert.equal(describeAction({ type: 'shop', name: 'milk' }), 'Add "milk" to the shopping list');
  assert.equal(describeAction({ type: 'expense', amount: 5, cat: 'Food', note: '' }), 'Record an expense of 5 in Food');
  assert.equal(describeAction({ type: 'note', title: 'Ideas', body: '' }), 'Create the note "Ideas"');
  assert.equal(describeAction({ type: 'open', view: 'money' }), 'Open money');
});

test('assistant: a chat log becomes alternating turns that start and end with the user', () => {
  const log = [
    { role: 'model', text: 'Hello, ask me anything' },
    { role: 'user', text: 'one' }, { role: 'user', text: 'two' },
    { role: 'model', text: '', error: 'offline' },
    { role: 'model', text: 'answer' },
    { role: 'user', text: 'three' },
    { role: 'model', text: 'dangling' },
  ];
  assert.deepEqual(assistantTurns(log), [{ role: 'user', text: 'one\ntwo' }, { role: 'model', text: 'answer' }, { role: 'user', text: 'three' }]);
  assert.deepEqual(assistantTurns([]), []);
  assert.deepEqual(assistantTurns([{ role: 'model', text: 'x' }]), []);
  assert.equal(assistantTurns(Array.from({ length: 40 }, (_, i) => ({ role: i % 2 ? 'model' : 'user', text: 'm' + i })), 4).length, 3); // 4 messages, the first is a model turn and is dropped
});

test('assistantRange: the span the summaries cover', () => {
  const today = '2026-11-13';
  assert.deepEqual(assistantRange('week', today), { since: '2026-11-07', until: today, label: 'the last 7 days' });
  assert.deepEqual(assistantRange('days30', today), { since: '2026-10-15', until: today, label: 'the last 30 days' });
  assert.deepEqual(assistantRange('month', today), { since: '2026-11-01', until: today, label: 'this month' });
  assert.deepEqual(assistantRange('lastmonth', today), { since: '2026-10-01', until: '2026-10-31', label: 'last month' });
  assert.deepEqual(assistantRange('year', today), { since: '2026-01-01', until: today, label: 'this year' });
  assert.equal(assistantRange('nonsense', today).label, 'the last 7 days');
});

test('assistantPrompt names the period when there is one', () => {
  const now = new Date(2026, 10, 13, 9, 0);
  const base = { now, sections: [{ title: 'Money', lines: ['x'] }], can: [], views: [] };
  assert.ok(!assistantPrompt(base).includes('cover'));
  assert.ok(assistantPrompt({ ...base, period: assistantRange('lastmonth', '2026-11-13') }).includes('cover last month (2026-10-01 to 2026-10-31)'));
});

test('entry-by-entry lines: newest first, inside the span, capped', () => {
  const entries = [
    { day: '2026-11-05', kind: 'out', amount: 120, cat: 'Food', note: 'lunch' },
    { day: '2026-11-09', kind: 'in', amount: 900, cat: 'Salary', note: '' },
    { day: '2026-10-30', kind: 'out', amount: 5, cat: 'Other', note: 'outside' },
  ];
  assert.deepEqual(moneyDetail(entries, '2026-11-01', '2026-11-30'), ['2026-11-09 earned 900 Salary', '2026-11-05 spent 120 Food: lunch']);
  const many = Array.from({ length: 5 }, (_, i) => `l${i}`);
  assert.deepEqual(capLines(many, 3), ['l0', 'l1', 'l2', '(2 older entries not shown)']);
  assert.deepEqual(capLines(many, 5), many);
  const t = [{ id: 'e1', project: 'p', desc: 'Fix bug', notes: 'found it\nfixed', start: '2026-11-05T07:40:00', end: '2026-11-05T09:00:00' }];
  assert.deepEqual(timeDetail(t, [{ id: 'p', name: 'Web', client: '' }], '2026-11-01', '2026-11-30'), ['2026-11-05 07:40-09:00 · Web · 1 h 20 min · Fix bug — found it / fixed']);
  assert.deepEqual(timeDetail(t, [], '2026-12-01', '2026-12-31'), []);
});

test('briefingDue: once a day, only when it is on, there is a key and something is shared', () => {
  const base = { on: true, day: '2026-11-12', today: '2026-11-13', hasKey: true, shared: 2 };
  assert.equal(briefingDue(base), true);
  assert.equal(briefingDue({ ...base, day: '2026-11-13' }), false);   // already written today
  assert.equal(briefingDue({ ...base, on: false }), false);
  assert.equal(briefingDue({ ...base, hasKey: false }), false);
  assert.equal(briefingDue({ ...base, shared: 0 }), false);           // nothing it may see
  assert.equal(briefingDue({ ...base, day: '' }), true);
  assert.ok(ASSIST_BRIEFING.length < 400 && ASSIST_BRIEFING.includes('5 short lines'));
});
