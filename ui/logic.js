// Pure date logic for repeating tasks. Loaded by the UI as a plain script and by the node tests as a module.

// local calendar day as "2026-11-12", the same shape datetime-local uses, so the two compare and splice as text
const localDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parseDay = (s) => new Date(+s.slice(0, 4), s.slice(5, 7) - 1, +s.slice(8, 10));

// The day a repeating task comes back after being completed on `today`.
// Counts from the due date when there is one, so a weekly Monday task stays on Mondays even when done late.
function nextOccurrence(repeat, due, today) {
  const todayStr = localDay(today);
  let d = parseDay(due || todayStr);
  // shortcut: a monthly task due on the 31st moves to the 30th after a short month and stays there, store the anchor day if that matters
  const anchor = d.getDate();
  do {
    if (repeat === 'weekly') d.setDate(d.getDate() + 7);
    else if (repeat === 'monthly') {
      const lastDay = new Date(d.getFullYear(), d.getMonth() + 2, 0).getDate();
      d = new Date(d.getFullYear(), d.getMonth() + 1, Math.min(anchor, lastDay));
    } else {
      do d.setDate(d.getDate() + 1); while (repeat === 'weekdays' && (d.getDay() === 0 || d.getDay() === 6));
    }
  } while (localDay(d) <= todayStr);
  return localDay(d);
}

// How many scheduled days in a row a daily or weekdays task was completed. `days` is a Set of completion days.
function streak(repeat, days, today) {
  const d = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (!days.has(localDay(d))) d.setDate(d.getDate() - 1); // today still being open does not break the streak
  let n = 0;
  for (;; d.setDate(d.getDate() - 1)) {
    if (repeat === 'weekdays' && (d.getDay() === 0 || d.getDay() === 6)) continue;
    if (!days.has(localDay(d))) return n;
    n++;
  }
}

// ── quick-add text: "Call supplier tomorrow 9am" → { title: 'Call supplier', due: '2026-11-12T09:00' } ──
const two = (n) => String(n).padStart(2, '0');
const RELATIVE = { today: 0, 'วันนี้': 0, tomorrow: 1, tmr: 1, 'พรุ่งนี้': 1, 'มะรืน': 2, 'มะรืนนี้': 2 };
const WEEKDAY = {
  sun: 0, sunday: 0, mon: 1, monday: 1, tue: 2, tues: 2, tuesday: 2, wed: 3, weds: 3, wednesday: 3,
  thu: 4, thur: 4, thurs: 4, thursday: 4, fri: 5, friday: 5, sat: 6, saturday: 6,
  'อาทิตย์': 0, 'จันทร์': 1, 'อังคาร': 2, 'พุธ': 3, 'พฤหัส': 4, 'พฤหัสบดี': 4, 'ศุกร์': 5, 'เสาร์': 6, // after an optional leading "วัน"
};

// "9am", "9:30pm", "14:00" → { h, min }. A bare number is not a time.
function timeFrom(tok) {
  const m = /^(\d{1,2})(?::(\d{2}))?(am|pm)?$/i.exec(tok);
  if (!m || (m[2] === undefined && !m[3])) return null;
  let h = +m[1];
  const min = m[2] ? +m[2] : 0;
  if (min > 59) return null;
  if (m[3]) {
    if (h < 1 || h > 12) return null;
    h = (h % 12) + (m[3].toLowerCase() === 'pm' ? 12 : 0);
  } else if (h > 23) return null;
  return { h, min };
}

// A day word → { date } for a fixed day, { weekday } for a day name, null when the word is not a day.
function dayFrom(word, now) {
  const w = word.toLowerCase();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (Object.hasOwn(RELATIVE, w)) return { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + RELATIVE[w]), isToday: RELATIVE[w] === 0 };
  const name = w.startsWith('วัน') ? w.slice(3) : w;
  if (Object.hasOwn(WEEKDAY, name)) return { weekday: WEEKDAY[name] };
  const m = /^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}|\d{2}))?$/.exec(w); // d/m or d/m/yyyy
  if (!m) return null;
  const d = +m[1];
  const mo = +m[2];
  const y = m[3] ? (m[3].length === 2 ? 2000 + +m[3] : +m[3]) : today.getFullYear();
  let date = new Date(y, mo - 1, d);
  if (date.getMonth() !== mo - 1 || date.getDate() !== d) return null; // 31/2 rolls over, so it is not a date
  if (!m[3] && date < today) date = new Date(y + 1, mo - 1, d); // a day already gone means next year
  return { date };
}

// Reads a day and/or a time off the END of the text (so words inside a title are safe), in either order.
// At most one of each; the title keeps at least one word.
function parseQuick(text, now) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  let day = null;
  let time = null;
  while (words.length > 1 && !(day && time)) {
    const n = words.length;
    let took = 0;
    let gotTime = null;
    let gotDay = null;
    if (!time) {
      let end = n;
      if (end > 2 && /^น\.?$/.test(words[end - 1])) end--; // Thai "น." after a time
      gotTime = timeFrom(words[end - 1]);
      if (gotTime) took = n - end + 1;
      else if (end > 2 && /^(am|pm)$/i.test(words[end - 1]) && (gotTime = timeFrom(words[end - 2] + words[end - 1]))) took = n - end + 2; // "9 am"
    }
    if (!gotTime && !day) {
      gotDay = dayFrom(words[n - 1], now);
      if (gotDay) took = 1;
    }
    if (!took || n - took < 1) break;
    if (gotTime) time = gotTime; else day = gotDay;
    words.length -= took;
    if (words.length > 1 && /^(at|on|by|@)$/i.test(words[words.length - 1])) words.pop(); // "tomorrow at 9am", "by friday"
  }
  if (!day && !time) return { title: text.trim(), due: null };

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const plus = (n) => new Date(today.getFullYear(), today.getMonth(), today.getDate() + n);
  const at = (date, h, min) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, min);
  let h = time ? time.h : 9;
  let min = time ? time.min : 0;
  let date;
  if (day && day.date) {
    date = day.date;
    if (day.isToday && !time && at(today, 9, 0) <= now) { // "today" with no time: 09:00, or the next full hour once that has passed
      h = Math.min(now.getHours() + 1, 23);
      if (now.getHours() + 1 > 23) min = 59;
    }
  } else if (day) { // a day name: its next occurrence; today only when the time is still ahead
    let delta = (day.weekday - now.getDay() + 7) % 7;
    if (delta === 0 && !(time && at(today, h, min) > now)) delta = 7;
    date = plus(delta);
  } else {
    date = at(today, h, min) > now ? today : plus(1); // a time alone: the next time it happens
  }
  return { title: words.join(' '), due: `${localDay(date)}T${two(h)}:${two(min)}` };
}

// Is a task with this due date part of the Today or Week view? Anything overdue is in both;
// `week` covers today and the next six days. A task without a due date is in neither.
function inView(view, due, now) {
  if (!due) return false;
  if (new Date(due) < now) return true;
  const last = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (view === 'today' ? 0 : 6));
  return due.slice(0, 10) <= localDay(last);
}

// Tasks done per day for the last `n` days ending today, oldest first. `days` holds one local day per finished task.
function dailyCounts(days, today, n) {
  const tally = new Map();
  for (const d of days) tally.set(d, (tally.get(d) || 0) + 1);
  return Array.from({ length: n }, (_, i) => {
    const day = localDay(new Date(today.getFullYear(), today.getMonth(), today.getDate() - (n - 1 - i)));
    return { day, count: tally.get(day) || 0 };
  });
}

// A clean, even top for a count axis, so its middle tick is a whole number too: 3 → 4, 9 → 10, 13 → 20.
function niceMax(n) {
  return n <= 10 ? Math.max(2, Math.ceil(n / 2) * 2) : Math.ceil(n / 10) * 10;
}

// ── calendar maths: weeks start on Monday, or on Sunday when Settings says so ──
let weekStartDay = typeof prefsNow === 'object' ? prefsNow.weekStart : 1; // 1 = Monday, 0 = Sunday
const setWeekStart = (d) => { weekStartDay = d === 0 ? 0 : 1; };
// The six weeks of a month view (42 days), from the Monday on or before the 1st. `month` is 0 to 11.
function monthGrid(year, month) {
  const lead = (new Date(year, month, 1).getDay() - weekStartDay + 7) % 7; // days since the week started
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(year, month, 1 - lead + i);
    return { day: localDay(d), inMonth: d.getMonth() === month };
  });
}

function shiftDay(day, n) {
  const d = parseDay(day);
  return localDay(new Date(d.getFullYear(), d.getMonth(), d.getDate() + n));
}

// The same day number in another month, clamped to that month's length: 31 Jan plus a month is 28 Feb.
function shiftMonth(day, n) {
  const d = parseDay(day);
  const target = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return localDay(new Date(target.getFullYear(), target.getMonth(), Math.min(d.getDate(), last)));
}

// Tasks that have a due date, by day, earliest first. Tasks without one are not on a calendar.
function groupByDay(todos) {
  const days = {};
  for (const t of todos) {
    if (!t.due) continue;
    (days[t.due.slice(0, 10)] ||= []).push(t);
  }
  for (const list of Object.values(days)) list.sort((a, b) => a.due.localeCompare(b.due) || a.title.localeCompare(b.title));
  return days;
}

// ── note text ──
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// A note that only has plain text (made before formatting existed) as the editor's paragraphs, one per line.
function plainToHtml(text) {
  return String(text || '').split('\n').map((line) => `<p>${line ? escapeHtml(line) : '<br>'}</p>`).join('');
}

// The text colours a note can use, by the hex the editor stores. The first is the plain text colour.
const DEFAULT_COLOR = '#12110f';
const NOTE_COLORS = { '#12110f': 'Default', '#c93410': 'Vermilion', '#1d4ed8': 'Blue', '#166534': 'Green', '#7e22ce': 'Purple', '#6f6b63': 'Gray' };

// "rgb(201, 52, 16)" or "#C93410" as "#c93410"; anything else (a colour name, nothing) as "".
function colorKey(value) {
  const m = /^rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(value || '');
  if (m) return '#' + [m[1], m[2], m[3]].map((n) => (+n).toString(16).padStart(2, '0')).join('');
  return /^#[0-9a-f]{6}$/i.test(value || '') ? value.toLowerCase() : '';
}

// "2 of 3 done" for a note's plain text, where a checklist item is a line starting "[ ] " or "[x] ".
function checkProgress(body) {
  const items = String(body || '').split('\n').filter((line) => /^\[[ x]\] /.test(line));
  return { done: items.filter((line) => line.startsWith('[x]')).length, total: items.length };
}

// Command palette ranking: every word of the query must appear in the item's label, hint or text. A label that starts
// with the first word comes first, then one that contains it, then a match elsewhere; ties keep the list's order.
function rankItems(items, query, limit = 30) {
  const words = String(query || '').toLowerCase().split(/\s+/).filter(Boolean);
  const scored = [];
  items.forEach((item, i) => {
    const label = item.label.toLowerCase();
    const all = `${label} ${(item.hint || '').toLowerCase()} ${(item.text || '').toLowerCase()}`;
    if (!words.every((w) => all.includes(w))) return;
    scored.push({ item, i, score: !words.length || label.startsWith(words[0]) ? 0 : label.includes(words[0]) ? 1 : 2 });
  });
  return scored.sort((a, b) => a.score - b.score || a.i - b.i).slice(0, limit).map((s) => s.item);
}

// ── time blocking: a day as 24 hours of minutes, tasks as blocks (start, length) ──
const minutesOf = (due) => Number(due.slice(11, 13)) * 60 + Number(due.slice(14, 16)); // "2026-11-12T09:30" -> 570
const taskMinutes = (t) => Math.max(15, Number(t.minutes) || 60); // a task without a length is an hour
const snapMinutes = (min, step = 15) => Math.max(0, Math.min(1440 - step, Math.round(min / step) * step));
const withTime = (day, min) => `${day}T${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

// Overlapping blocks share the width: returns { id: { lane, lanes } } where lanes is how many columns that overlap needs.
function layoutDay(blocks) {
  const out = {};
  let cluster = [];
  let laneEnds = [];
  let clusterEnd = -1;
  const flush = () => {
    const lanes = Math.max(0, ...cluster.map((c) => c.lane + 1));
    for (const c of cluster) out[c.id] = { lane: c.lane, lanes };
    cluster = [];
    laneEnds = [];
    clusterEnd = -1;
  };
  for (const b of [...blocks].sort((a, c) => a.start - c.start || c.end - a.end)) {
    if (cluster.length && b.start >= clusterEnd) flush(); // nothing overlaps from here: a new cluster
    let lane = laneEnds.findIndex((end) => end <= b.start);
    if (lane < 0) lane = laneEnds.length;
    laneEnds[lane] = b.end;
    cluster.push({ id: b.id, lane });
    clusterEnd = Math.max(clusterEnd, b.end);
  }
  flush();
  return out;
}

// ── focus timer ──
const clock = (ms) => { // 1500000 -> "25:00"; rounds up so a timer shows 00:01 until it is really over
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
const minutesLabel = (m) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ' ' + (m % 60) + ' min' : ''}`);

// sessions are { task, title, day, min }; returns today, the last 7 days, the minutes per task (all time) and the week's top tasks
function focusSummary(sessions, today) {
  const since = shiftDay(today, -6);
  const out = { todayMin: 0, todayCount: 0, weekMin: 0, total: {}, byTask: [] };
  const week = new Map();
  for (const s of sessions) {
    if (s.task) out.total[s.task] = (out.total[s.task] || 0) + s.min;
    if (s.day === today) { out.todayMin += s.min; out.todayCount++; }
    if (s.day >= since && s.day <= today) {
      out.weekMin += s.min;
      const key = s.task || '';
      const prev = week.get(key) || { task: key, title: '', min: 0 };
      week.set(key, { ...prev, title: s.title || prev.title, min: prev.min + s.min });
    }
  }
  out.byTask = [...week.values()].sort((a, b) => b.min - a.min).slice(0, 5);
  return out;
}

// ── money (the expenses module): amounts are summed in whole cents so 0.1 + 0.2 stays 0.3 ──
function parseAmount(text) { // "1,250.50", "฿120" -> a number above 0 with at most 2 decimals, else null (a minus sign is not an amount)
  if (String(text).includes('-')) return null;
  const n = Number(String(text).replace(/[^\d.]/g, ''));
  return Number.isFinite(n) && n > 0 && n < 1e9 ? Math.round(n * 100) / 100 : null;
}
const moneyLabel = (n, cur = '') => cur + n.toLocaleString('en-US', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

// entries are { day, kind: 'in' | 'out', amount, cat }; month is "2026-11"
function moneyMonth(entries, month) {
  const list = entries.filter((e) => e.day.startsWith(month)).sort((a, b) => b.day.localeCompare(a.day) || b.id.localeCompare(a.id));
  const cents = (kind) => list.filter((e) => e.kind === kind).reduce((sum, e) => sum + Math.round(e.amount * 100), 0);
  const cats = new Map();
  for (const e of list) if (e.kind === 'out') cats.set(e.cat, (cats.get(e.cat) || 0) + Math.round(e.amount * 100));
  return {
    list, in: cents('in') / 100, out: cents('out') / 100, balance: (cents('in') - cents('out')) / 100,
    byCat: [...cats].map(([cat, c]) => ({ cat, amount: c / 100 })).sort((a, b) => b.amount - a.amount),
  };
}

// ── stocks: signs, labels and the portfolio maths (amounts rounded to cents row by row) ──
const CURRENCY_SIGNS = { USD: '$', THB: '฿', EUR: '€', GBP: '£', JPY: '¥', CNY: '¥', KRW: '₩', INR: '₹', HKD: 'HK$', SGD: 'S$', AUD: 'A$', CAD: 'C$' };
const currencySign = (code) => CURRENCY_SIGNS[code] || (code ? code + ' ' : '');
const priceLabel = (n, cur) => currencySign(cur) + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: n < 1 ? 4 : 2 });
const pctLabel = (n) => (n > 0 ? '+' : n < 0 ? '−' : '') + Math.abs(n).toFixed(2) + '%';
const signedLabel = (n, cur) => (n > 0 ? '+' : n < 0 ? '−' : '') + currencySign(cur) + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const cents = (n) => Math.round(n * 100) / 100;

// items are { symbol, shares, cost } (shares 0 = just watching, cost = average price paid per share), quotes are by symbol.
// Returns a row per item and totals per currency: value, today's change, and profit or loss over the positions that have a cost.
function portfolio(items, quotes) {
  const rows = items.map((it) => {
    const q = quotes[it.symbol] || null;
    const shares = Number(it.shares) || 0;
    const cost = Number(it.cost) || 0;
    if (!q || !shares) return { ...it, q, shares, cost, value: null, day: null, pl: null, plPct: null };
    const now = stockNow(q);
    const value = cents(shares * now.price);
    const spent = cents(shares * cost);
    return { ...it, q, shares, cost, value, day: cents(shares * (now.price - q.prevClose)), pl: cost ? cents(value - spent) : null, plPct: cost ? cents((value - spent) / spent * 100) : null, spent: cost ? spent : 0 };
  });
  const totals = {};
  for (const r of rows) {
    if (r.value === null) continue;
    const t = (totals[r.q.currency] ||= { currency: r.q.currency, value: 0, day: 0, pl: 0, spent: 0, hasPl: false });
    t.value = cents(t.value + r.value);
    t.day = cents(t.day + r.day);
    if (r.pl !== null) { t.pl = cents(t.pl + r.pl); t.spent = cents(t.spent + r.spent); t.hasPl = true; }
  }
  for (const t of Object.values(totals)) t.plPct = t.hasPl && t.spent ? cents(t.pl / t.spent * 100) : null;
  return { rows, totals: Object.values(totals) };
}

// ── habits: a habit is { id, name, days: [0..6] (Sunday = 0), created: "YYYY-MM-DD" }, the log is { "YYYY-MM-DD": [habit ids] } ──
const habitDue = (h, day) => h.days.includes(parseDay(day).getDay()) && day >= h.created;

// Days in a row it was done, counting only the days it was due. Today not done yet does not break it.
function habitStreak(h, log, today) {
  let n = 0;
  for (let day = today, i = 0; i < 800 && day >= h.created; day = shiftDay(day, -1), i++) {
    if (!habitDue(h, day)) continue;
    if ((log[day] || []).includes(h.id)) n++;
    else if (day !== today) break;
  }
  return n;
}

function habitBest(h, log, today) {
  let best = 0, run = 0;
  for (let day = h.created; day <= today; day = shiftDay(day, 1)) {
    if (!habitDue(h, day)) continue;
    run = (log[day] || []).includes(h.id) ? run + 1 : 0;
    best = Math.max(best, run);
  }
  return best;
}

// how many of the habits due that day were done
function habitDay(habits, log, day) {
  const due = habits.filter((h) => habitDue(h, day));
  return { done: due.filter((h) => (log[day] || []).includes(h.id)).length, total: due.length };
}

// 0 for nothing due or nothing done, then 1 to 4 by the share done
const heatLevel = ({ done, total }) => (!total || !done ? 0 : Math.min(4, Math.ceil(done / total * 4)));

// the share of due days this habit was done on, over the last `days` days up to today
function habitRate(h, log, today, days) {
  let due = 0, done = 0;
  for (let i = 0, day = today; i < days; i++, day = shiftDay(day, -1)) {
    if (!habitDue(h, day)) continue;
    due++;
    if ((log[day] || []).includes(h.id)) done++;
  }
  return due ? Math.round(done / due * 100) : null;
}

// a category's spending against its monthly limit: share used, the level (ok under 80%, near from 80%, over from 100%) and what is left
function budgetStatus(spent, limit) {
  const pct = limit > 0 ? Math.round(spent / limit * 100) : 0;
  return { pct, level: pct >= 100 ? 'over' : pct >= 80 ? 'near' : 'ok', left: Math.round((limit - spent) * 100) / 100 };
}

// ── subscriptions: a charge repeats every week, month or year; `anchor` is the day of the month it started on, so a
// charge on the 31st returns to the 31st after a short month instead of drifting to the 28th ──
function addCycle(day, cycle, anchor) {
  const d = parseDay(day);
  if (cycle === 'week') return shiftDay(day, 7);
  const months = cycle === 'year' ? 12 : cycle === 'quarter' ? 3 : 1;
  const y = d.getFullYear() + Math.floor((d.getMonth() + months) / 12);
  const m = (d.getMonth() + months) % 12;
  const last = new Date(y, m + 1, 0).getDate();
  return localDay(new Date(y, m, Math.min(anchor || d.getDate(), last)));
}

// the next charge on or after `today`, counting forward from a date that may be in the past
function rollForward(day, cycle, anchor, today) {
  let d = day;
  for (let i = 0; d < today && i < 2000; i++) d = addCycle(d, cycle, anchor);
  return d;
}

const monthlyCost = (amount, cycle) => Math.round((cycle === 'year' ? amount / 12 : cycle === 'week' ? amount * 52 / 12 : amount) * 100) / 100;
const daysUntil = (day, today) => Math.round((parseDay(day) - parseDay(today)) / 86400000);

// ── countdown: an event is { title, day, yearly }; a yearly one (a birthday) counts to its next occurrence ──
function nextEventDay(ev, today) {
  if (!ev.yearly) return ev.day;
  const [, m, d] = ev.day.split('-').map(Number);
  const on = (y) => localDay(new Date(y, m - 1, Math.min(d, new Date(y, m, 0).getDate()))); // 29 Feb falls on 28 Feb in other years
  const y = Number(today.slice(0, 4));
  return on(y) >= today ? on(y) : on(y + 1);
}

// the days an event falls on within [from, to]: its own day, or each year's day for a yearly one (never before it began)
function eventDaysIn(ev, from, to) {
  if (!ev.yearly) return ev.day >= from && ev.day <= to ? [ev.day] : [];
  const [, m, d] = ev.day.split('-').map(Number), out = [];
  for (let y = Number(from.slice(0, 4)); y <= Number(to.slice(0, 4)); y++) {
    const day = localDay(new Date(y, m - 1, Math.min(d, new Date(y, m, 0).getDate())));
    if (day >= from && day <= to && day >= ev.day) out.push(day);
  }
  return out;
}

// the charge days of a subscription within [from, to], counting on from its next charge
function renewalsIn(sub, from, to) {
  const out = [];
  for (let d = sub.next, i = 0; d <= to && i < 800; d = addCycle(d, sub.cycle, sub.anchor), i++) if (d >= from) out.push(d);
  return out;
}

const countdownLabel = (n) => (n === 0 ? 'Today' : n === 1 ? 'Tomorrow' : n === -1 ? 'Yesterday' : n > 0 ? `${n} days` : `${-n} days ago`);

// ── journal: entries are { "YYYY-MM-DD": { mood: 0..5 (0 = not set), text } } ──
const MOODS = ['Not set', 'Rough', 'Low', 'Okay', 'Good', 'Great'];

// the average mood over the last `days` days up to today, over the days that have one (null when none)
function moodAverage(entries, today, days) {
  const moods = [];
  for (let i = 0, d = today; i < days; i++, d = shiftDay(d, -1)) if (entries[d] && entries[d].mood > 0) moods.push(entries[d].mood);
  return moods.length ? Math.round(moods.reduce((a, b) => a + b, 0) / moods.length * 10) / 10 : null;
}

// ── goals: reach at least `target` (a savings goal) or stay at most `target` (a spending limit) ──
function goalProgress(direction, value, target) {
  const pct = target > 0 ? Math.round(value / target * 100) : 0;
  if (direction === 'atmost') return { pct, state: value > target ? 'over' : 'ok' };
  return { pct, state: value >= target ? 'done' : 'ok' };
}

// ── converter: "5 km to mi", "30 c to f", "100 usd to thb" ──
// every unit is a factor to its category's base unit (m, kg, l, m/s); temperature is handled apart
const UNITS = {
  length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, ft: 0.3048, in: 0.0254, yd: 0.9144 },
  mass: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.45359237, oz: 0.028349523125 },
  volume: { l: 1, ml: 0.001, gal: 3.785411784, cup: 0.2365882365, tbsp: 0.01478676478, tsp: 0.00492892159 },
  speed: { kmh: 1 / 3.6, mph: 0.44704, ms: 1, knot: 0.514444 },
  temperature: { c: 1, f: 1, k: 1 },
};
const UNIT_ALIASES = {
  km: 'km', kilometer: 'km', kilometers: 'km', kilometre: 'km', kilometres: 'km', m: 'm', meter: 'm', meters: 'm', metre: 'm', metres: 'm', cm: 'cm', mm: 'mm',
  mi: 'mi', mile: 'mi', miles: 'mi', ft: 'ft', foot: 'ft', feet: 'ft', in: 'in', inch: 'in', inches: 'in', yd: 'yd', yard: 'yd', yards: 'yd',
  kg: 'kg', kilo: 'kg', kilos: 'kg', g: 'g', gram: 'g', grams: 'g', mg: 'mg', lb: 'lb', lbs: 'lb', pound: 'lb', pounds: 'lb', oz: 'oz', ounce: 'oz', ounces: 'oz',
  l: 'l', liter: 'l', liters: 'l', litre: 'l', litres: 'l', ml: 'ml', gal: 'gal', gallon: 'gal', gallons: 'gal', cup: 'cup', cups: 'cup', tbsp: 'tbsp', tsp: 'tsp',
  kmh: 'kmh', 'km/h': 'kmh', kph: 'kmh', mph: 'mph', 'm/s': 'ms', ms: 'ms', knot: 'knot', knots: 'knot',
  c: 'c', '°c': 'c', celsius: 'c', f: 'f', '°f': 'f', fahrenheit: 'f', k: 'k', kelvin: 'k',
};
const unitKind = (u) => Object.keys(UNITS).find((k) => u in UNITS[k]);

// → { amount, from, to, currency } or null. Units are normalised; two three-letter codes that are not units are a currency pair.
function parseConvert(text) {
  const m = /^\s*(-?\d[\d,]*(?:\.\d+)?|-?\.\d+)\s*([a-z°/]+)\s*(?:to|in|into|=|>|->|as)\s*([a-z°/]+)\s*$/i.exec(text);
  if (!m) return null;
  const amount = Number(m[1].replace(/,/g, ''));
  const [a, b] = [m[2].toLowerCase(), m[3].toLowerCase()];
  const [ua, ub] = [UNIT_ALIASES[a], UNIT_ALIASES[b]];
  if (ua && ub) return unitKind(ua) === unitKind(ub) ? { amount, from: ua, to: ub, currency: false } : null;
  if (!ua && !ub && /^[a-z]{3}$/.test(a) && /^[a-z]{3}$/.test(b) && a !== b) return { amount, from: a.toUpperCase(), to: b.toUpperCase(), currency: true };
  return null;
}

function convertUnit(amount, from, to) {
  if (unitKind(from) === 'temperature') {
    const c = from === 'c' ? amount : from === 'f' ? (amount - 32) * 5 / 9 : amount - 273.15;
    return to === 'c' ? c : to === 'f' ? c * 9 / 5 + 32 : c + 273.15;
  }
  const k = unitKind(from);
  return amount * UNITS[k][from] / UNITS[k][to];
}

// up to 4 decimals, no trailing zeros, thousands separated
const convertLabel = (n) => (Math.abs(n) < 1e-9 ? 0 : n).toLocaleString('en-US', { maximumFractionDigits: Math.abs(n) >= 1000 ? 2 : 4 });

// ── weekly review: sections are { title, lines: [text] }; the same words go on the page and into the clipboard ──
function reviewText(range, sections) {
  return [`Review: ${range}`, '', ...sections.flatMap((s) => [s.title, ...s.lines.map((l) => '- ' + l), ''])].join('\n').trim() + '\n';
}

// the entries that started within [since, until], newest first, each with its project, length and what was written (at most 300)
function timeLog(entries, projects, since, until) {
  return entries
    .filter((e) => { const d = localDay(new Date(e.start)); return d >= since && d <= until; })
    .sort((a, b) => b.start.localeCompare(a.start))
    .slice(0, 300)
    .map((e) => { const p = projects.find((x) => x.id === e.project); return { id: e.id, day: localDay(new Date(e.start)), from: e.start.slice(11, 16), to: e.end.slice(11, 16), name: p ? p.name : 'Deleted project', client: p ? p.client : '', desc: e.desc || '', notes: e.notes || '', seconds: secondsBetween(e.start, e.end) }; });
}

// one line of the work log for the copied summary: "13 Nov 07:40-09:00 · Website · 1 h 20 min · Fix bug — what was done"
function timeLogLine(x, dayLabel) {
  return [`${dayLabel} ${x.from}-${x.to}`, x.name, hoursLabel(x.seconds), x.desc].filter(Boolean).join(' · ') + (x.notes ? ' — ' + x.notes.replace(/\s*\n\s*/g, ' / ') : '');
}

// ── Assistant: entry by entry, for the modules that offer it (the user ticks each one on its own) ──
// at most `max` lines, then one saying how many were left out
function capLines(lines, max = 60) {
  return lines.length > max ? [...lines.slice(0, max), `(${lines.length - max} older entries not shown)`] : lines;
}
// "2026-11-05 spent 120 Food: lunch", newest first
function moneyDetail(entries, since, until, max = 60) {
  const note = (s) => (s ? ': ' + String(s).replace(/\s+/g, ' ').slice(0, 80) : '');
  return capLines(entries.filter((e) => e.day >= since && e.day <= until).sort((a, b) => b.day.localeCompare(a.day))
    .map((e) => `${e.day} ${e.kind === 'in' ? 'earned' : 'spent'} ${e.amount} ${e.cat || 'Other'}${note(e.note)}`), max);
}
// "2026-11-05 07:40-09:00 · Website · 1 h 20 min · Fix bug — details", newest first
function timeDetail(entries, projects, since, until, max = 60) {
  return capLines(timeLog(entries, projects, since, until).map((x) => timeLogLine({ ...x, notes: x.notes.slice(0, 120) }, x.day)), max);
}

// ── Week plan: seven days of tasks, and the tasks that still have no day ──
// days: the seven 'YYYY-MM-DD' of the week; marks: { day: [dated things from other modules] }.
// pool = open tasks with no day or a day already gone (a repeating task keeps its own rhythm, so it is never in it).
function planWeek(todos, marks, days, today) {
  const cols = days.map((day) => ({ day, tasks: [], marks: marks[day] || [], minutes: 0 }));
  const at = new Map(cols.map((c) => [c.day, c]));
  for (const t of withRepeats(todos, days[0], days[6], today)) {
    const c = t.due && at.get(t.due.slice(0, 10));
    if (c) c.tasks.push(t);
  }
  for (const c of cols) {
    c.tasks.sort((a, b) => a.due.localeCompare(b.due));
    c.minutes = c.tasks.filter((t) => !t.done).reduce((n, t) => n + (t.minutes || 0), 0);
  }
  const pool = todos.filter((t) => !t.done && !t.repeat && (!t.due || t.due.slice(0, 10) < today))
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (a.due || '￿').localeCompare(b.due || '￿') || (a.createdAt || '').localeCompare(b.createdAt || ''));
  return { cols, pool };
}
// the change that puts a task on a day: it keeps its time of day (09:00 when it had none, with the usual reminder), a snooze starts over
function placeDue(t, day, defaultRemind = '0') {
  const patch = { due: day + (t.due ? t.due.slice(10) : 'T09:00'), snoozeUntil: null };
  if (!t.due) patch.remindBefore = defaultRemind === '' ? null : Number(defaultRemind);
  return patch;
}

// ── Levels: XP for what you do ──
// Each rule is what an event from emit() is worth. An event carries a `key` naming that one thing (a task, a habit on a day), so
// doing or undoing it again never pays twice; `cap` is the most a source can pay in a day, which keeps a flood of entries honest.
const XP_RULES = {
  'task-done': { src: 'tasks', label: 'Task done', pts: () => 10, cap: 200 },
  'habit-done': { src: 'habits', label: 'Habit kept', pts: () => 8, cap: 80 },
  'focus-done': { src: 'focus', label: 'Focus session', pts: () => 15, cap: 90 },
  'time-logged': { src: 'time', label: 'Work tracked', pts: (d) => (d.minutes >= 5 ? Math.min(30, Math.round(d.minutes / 10) || 1) : 0), cap: 60 },
  'journal-written': { src: 'journal', label: 'Journal written', pts: () => 10, cap: 10 },
  'expense-added': { src: 'money', label: 'Spending recorded', pts: () => 3, cap: 15 },
  'workout-logged': { src: 'workout', label: 'Workout', pts: () => 15, cap: 30 },
  'water-goal': { src: 'water', label: 'Water goal reached', pts: () => 5, cap: 5 },
  'bill-paid': { src: 'bills', label: 'Bill paid', pts: () => 10, cap: 30 },
  'card-reviewed': { src: 'cards', label: 'Flashcard reviewed', pts: () => 2, cap: 40 },
};
const XP_TITLES = [[1, 'Beginner'], [3, 'Apprentice'], [5, 'Regular'], [8, 'Skilled'], [12, 'Expert'], [18, 'Master'], [25, 'Legend']];
// level L starts at 50 * L * (L - 1) XP: 100, 300, 600, 1000...
const xpStart = (level) => 50 * level * (level - 1);
function xpLevel(total) {
  const t = Math.max(0, Math.floor(total) || 0);
  let level = Math.floor((1 + Math.sqrt(1 + 4 * t / 50)) / 2);
  while (xpStart(level + 1) <= t) level++;
  while (level > 1 && xpStart(level) > t) level--;
  const into = t - xpStart(level), need = xpStart(level + 1) - xpStart(level);
  return { level, into, need, pct: Math.round(into / need * 100), title: [...XP_TITLES].reverse().find(([from]) => level >= from)[1] };
}
// Badges: a goal each, counted from what has been paid (counts per source, minutes of work, the best streak, the level).
// value(s) is where you are, goal where it unlocks; a badge once unlocked stays (state.badges keeps the day).
const XP_BADGES = [
  { id: 'first', name: 'First step', about: 'Earn your first XP', value: (s) => Math.min(1, s.total), goal: 1 },
  { id: 'tasks10', name: 'Getting things done', about: 'Finish 10 tasks', value: (s) => s.counts.tasks || 0, goal: 10 },
  { id: 'tasks100', name: 'Task machine', about: 'Finish 100 tasks', value: (s) => s.counts.tasks || 0, goal: 100 },
  { id: 'tasks500', name: 'Unstoppable', about: 'Finish 500 tasks', value: (s) => s.counts.tasks || 0, goal: 500 },
  { id: 'habits30', name: 'Creature of habit', about: 'Keep a habit 30 times', value: (s) => s.counts.habits || 0, goal: 30 },
  { id: 'habits200', name: 'Routine master', about: 'Keep a habit 200 times', value: (s) => s.counts.habits || 0, goal: 200 },
  { id: 'focus10', name: 'In the zone', about: 'Finish 10 focus sessions', value: (s) => s.counts.focus || 0, goal: 10 },
  { id: 'time10h', name: 'Ten hours in', about: 'Track 10 hours of work', value: (s) => Math.floor((s.minutes || 0) / 60), goal: 10 },
  { id: 'time100h', name: 'Hundred-hour club', about: 'Track 100 hours of work', value: (s) => Math.floor((s.minutes || 0) / 60), goal: 100 },
  { id: 'journal7', name: 'Dear diary', about: 'Write your journal on 7 days', value: (s) => s.counts.journal || 0, goal: 7 },
  { id: 'journal30', name: 'Chronicler', about: 'Write your journal on 30 days', value: (s) => s.counts.journal || 0, goal: 30 },
  { id: 'workout10', name: 'On the move', about: 'Log 10 workouts', value: (s) => s.counts.workout || 0, goal: 10 },
  { id: 'bills10', name: 'Paid on time', about: 'Pay 10 bills', value: (s) => s.counts.bills || 0, goal: 10 },
  { id: 'streak3', name: 'Three in a row', about: 'Earn XP 3 days in a row', value: (s) => s.streak.best || 0, goal: 3 },
  { id: 'streak7', name: 'A full week', about: 'Earn XP 7 days in a row', value: (s) => s.streak.best || 0, goal: 7 },
  { id: 'streak30', name: 'A whole month', about: 'Earn XP 30 days in a row', value: (s) => s.streak.best || 0, goal: 30 },
  { id: 'level5', name: 'Level 5', about: 'Reach level 5', value: (s) => xpLevel(s.total).level, goal: 5 },
  { id: 'level10', name: 'Level 10', about: 'Reach level 10', value: (s) => xpLevel(s.total).level, goal: 10 },
];
// every badge with where you are: { id, name, about, value, goal, done, day }
function xpBadges(state) {
  const s = { ...state, counts: state.counts || {}, minutes: state.minutes || 0, streak: state.streak || {}, badges: state.badges || {} };
  return XP_BADGES.map((b) => { const value = Math.min(b.goal, b.value(s)); return { id: b.id, name: b.name, about: b.about, value, goal: b.goal, done: value >= b.goal, day: s.badges[b.id] || '' }; });
}
// days in a row with XP, counting today only if something was earned today (yesterday keeps it alive until the day is over)
function xpStreak(state, today) {
  const st = state.streak || {};
  return st.day === today || st.day === shiftDay(today, -1) ? st.len || 0 : 0;
}
// the first XP of a day after at least two days in a row pays a bonus: the streak length, at most 10
const xpBonus = (len) => (len >= 3 ? Math.min(10, len) : 0);

// one event -> { state, gained, label, bonus, badges: [names unlocked now] }
// state: { total, day, today: { source: xp }, keys: { key: day }, log: [{ day, label, pts }], counts: { source: n }, minutes, streak: { day, len, best }, badges: { id: day } }
function xpAward(state, type, data, today) {
  const rule = XP_RULES[type];
  const none = { state, gained: 0, label: '', bonus: 0, badges: [] };
  if (!rule || !data || typeof data.key !== 'string' || !data.key || state.keys[data.key]) return none;
  const spent = state.day === today ? state.today : {};
  const pts = Math.min(Math.max(0, Math.round(rule.pts(data))), rule.cap - (spent[rule.src] || 0));
  if (pts <= 0) return none;
  const keys = { ...state.keys, [data.key]: today };
  const names = Object.keys(keys);
  if (names.length > 3000) for (const k of names) if (keys[k] < shiftDay(today, -120)) delete keys[k]; // old things are never done again
  // the streak moves once a day, on the first XP of that day
  const old = state.streak || {};
  let streak = old;
  let bonus = 0;
  if (old.day !== today) {
    const len = old.day === shiftDay(today, -1) ? (old.len || 0) + 1 : 1;
    streak = { day: today, len, best: Math.max(old.best || 0, len) };
    bonus = xpBonus(len);
  }
  const log = [...state.log, { day: today, label: rule.label, pts }];
  if (bonus) log.push({ day: today, label: `Streak bonus: ${streak.len} days`, pts: bonus });
  const next = {
    ...state, total: state.total + pts + bonus, day: today, today: { ...spent, [rule.src]: (spent[rule.src] || 0) + pts }, keys, log: log.slice(-60),
    counts: { ...(state.counts || {}), [rule.src]: ((state.counts || {})[rule.src] || 0) + 1 },
    minutes: (state.minutes || 0) + (type === 'time-logged' ? Math.max(0, Math.round(data.minutes) || 0) : 0),
    streak,
  };
  const fresh = xpBadges({ ...next, badges: state.badges }).filter((b) => b.done && !b.day);
  next.badges = { ...(state.badges || {}), ...Object.fromEntries(fresh.map((b) => [b.id, today])) };
  return { state: next, gained: pts, label: rule.label, bonus, badges: fresh.map((b) => b.name) };
}

// ── Review: the span it covers and the numbers behind its charts ──
// a day, the last 7 days, a calendar month or a calendar year, `back` periods before this one, never reaching past today
function reviewRange(kind, back, today) {
  if (kind === 'day') { const d = shiftDay(today, -back); return { since: d, until: d }; }
  if (kind === 'week') { const until = shiftDay(today, -7 * back); return { since: shiftDay(until, -6), until }; }
  const cap = (last) => (last > today ? today : last);
  if (kind === 'month') {
    const [y, m] = today.split('-').map(Number);
    return { since: localDay(new Date(y, m - 1 - back, 1)), until: cap(localDay(new Date(y, m - back, 0))) };
  }
  const y = Number(today.slice(0, 4)) - back;
  return { since: `${y}-01-01`, until: cap(`${y}-12-31`) };
}

// One series ({ byDay, zero }) over [since, until] as bars: a bar a day, or a bar a month for a span over two months.
// A count (zero) is a sum and 0 on quiet days; a rating is an average and has gaps. `total` is the figure for the whole span.
function reviewBuckets(series, since, until) {
  const days = [];
  for (let d = since; d <= until; d = shiftDay(d, 1)) days.push(d);
  const monthly = days.length > 62;
  const groups = new Map();
  for (const d of days) { const k = monthly ? d.slice(0, 7) : d; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(d); }
  const of = (list) => {
    const vals = list.map((d) => series.byDay[d]).filter((v) => v != null);
    if (series.zero) return Math.round(vals.reduce((n, v) => n + v, 0) * 100) / 100;
    return vals.length ? Math.round(vals.reduce((n, v) => n + v, 0) / vals.length * 100) / 100 : null;
  };
  const buckets = [...groups].map(([key, list]) => ({ key, value: of(list) }));
  const total = of(days);
  return { buckets, total, monthly, has: series.zero ? total > 0 : total !== null };
}

// ── shopping and meals ──
// "Pad thai: noodles, shrimp, egg" or "Omelette (egg, cheese)" -> the ingredients; text without a list gives none
function parseIngredients(text) {
  const m = /[:(]\s*([^()]+?)\s*\)?\s*$/.exec(String(text));
  return m ? m[1].split(/[,;]/).map((s) => s.trim()).filter(Boolean) : [];
}

// the things added most often, most first (ties alphabetical), leaving out what is already on the list
function topItems(history, n, exclude = []) {
  const skip = new Set(exclude.map((s) => s.toLowerCase()));
  return Object.entries(history).filter(([name]) => !skip.has(name.toLowerCase())).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n).map(([name]) => name);
}

// the seven days of the week (Monday first, or Sunday) that contain `day`
function weekDays(day) {
  const dow = (parseDay(day).getDay() - weekStartDay + 7) % 7;
  const monday = shiftDay(day, -dow);
  return Array.from({ length: 7 }, (_, i) => shiftDay(monday, i));
}

// ── health ──
// weights is { "YYYY-MM-DD": kg }. The points are the days that have one over the last `days` days (oldest first) and
// the change is from the first to the last of them.
function weightTrend(weights, today, days) {
  const points = [];
  for (let i = days - 1; i >= 0; i--) { const d = shiftDay(today, -i); if (weights[d] > 0) points.push({ day: d, kg: weights[d] }); }
  return { points, change: points.length > 1 ? Math.round((points.at(-1).kg - points[0].kg) * 10) / 10 : null };
}

// a medicine is { id, name, times: ["08:00"], days: [0..6] }; true when it is to be taken on that day
const medDue = (med, day) => med.days.includes(parseDay(day).getDay());

// the doses whose time has come and that are neither taken nor already announced: [{ med, time, key }]
// taken is { "<id>@<time>": true } for the day, announced is the same shape
function dosesDue(meds, day, hhmm, taken, announced) {
  return meds.filter((m) => medDue(m, day)).flatMap((m) => m.times.filter((t) => t <= hhmm).map((t) => ({ med: m, time: t, key: `${m.id}@${t}` }))).filter((d) => !taken[d.key] && !announced[d.key]);
}

// ── library: an item is { id, title, kind, status: 'want' | 'now' | 'done', note, rating (0-5), finished: "YYYY-MM-DD" } ──
function filterLibrary(items, status, kind, query) {
  const q = String(query || '').trim().toLowerCase();
  return items.filter((i) => i.status === status && (!kind || i.kind === kind) && (!q || (i.title + ' ' + (i.note || '')).toLowerCase().includes(q)));
}

// how many of each kind were finished in a year, and the average rating of the rated ones
function libraryYear(items, year) {
  const done = items.filter((i) => i.status === 'done' && i.finished && i.finished.startsWith(String(year)));
  const byKind = {};
  for (const i of done) byKind[i.kind] = (byKind[i.kind] || 0) + 1;
  const rated = done.filter((i) => i.rating > 0);
  return { total: done.length, byKind, average: rated.length ? Math.round(rated.reduce((n, i) => n + i.rating, 0) / rated.length * 10) / 10 : null };
}

// ── people: { name, birthday: "YYYY-MM-DD", showAge, every (days between catch-ups, 0 = never), last: "YYYY-MM-DD" } ──
// days until the next birthday (0 = today), the day it falls on, and the age they turn (null when the year is not to be shown)
function birthdayInfo(p, today) {
  if (!p.birthday) return null;
  const next = nextEventDay({ day: p.birthday, yearly: true }, today);
  return { days: daysUntil(next, today), next, turning: p.showAge ? Number(next.slice(0, 4)) - Number(p.birthday.slice(0, 4)) : null };
}

// whether it is time to get in touch: they have an interval and the last contact (or having added them) is older than it
function touchState(p, today) {
  if (!p.every) return { due: false, since: p.last ? daysUntil(today, p.last) : null };
  const since = p.last ? daysUntil(today, p.last) : null;
  return { due: since === null || since >= p.every, since };
}

// ── bills: a bill is { name, cycle: 'month' | 'quarter' | 'year' | 'once', next, amount, paid: [{ day, amount }] } ──
// what was paid in a year, per bill and in all
function paidTotals(bills, year) {
  const per = bills.map((b) => ({ name: b.name, total: Math.round(b.paid.filter((p) => p.day.startsWith(String(year))).reduce((n, p) => n + p.amount * 100, 0)) / 100 })).filter((x) => x.total > 0).sort((a, b) => b.total - a.total);
  return { per, total: Math.round(per.reduce((n, x) => n + x.total * 100, 0)) / 100 };
}

// how a bill stands: overdue by n days, due today, or due in n days
const billState = (b, today) => { const n = daysUntil(b.next, today); return n < 0 ? { kind: 'overdue', days: -n } : n === 0 ? { kind: 'today', days: 0 } : { kind: 'later', days: n }; };

// ── travel: a trip is { name, from, to, budget, packing: [{ text, done }], plan: { day: text }, costs: [{ label, amount }] } ──
const PACKING_TEMPLATES = {
  Essentials: ['Passport or ID', 'Phone and charger', 'Wallet and cards', 'Medicine', 'Toiletries', 'Underwear and socks'],
  Beach: ['Swimwear', 'Sunscreen', 'Sunglasses', 'Flip-flops', 'Beach towel'],
  Cold: ['Warm jacket', 'Gloves and hat', 'Thermal layer', 'Lip balm'],
  Business: ['Laptop and charger', 'Business cards', 'Formal clothes', 'Notebook and pen'],
};

// every day of the trip, from the first to the last, at most 60
function tripDays(from, to) {
  const days = [];
  for (let d = from; d <= to && days.length < 60; d = shiftDay(d, 1)) days.push(d);
  return days;
}

// before (days until it starts), during (which day of how many) or after (days since it ended)
function tripState(trip, today) {
  if (today < trip.from) return { kind: 'before', days: daysUntil(trip.from, today) };
  if (today > trip.to) return { kind: 'after', days: daysUntil(today, trip.to) };
  return { kind: 'during', day: daysUntil(today, trip.from) + 1, of: daysUntil(trip.to, trip.from) + 1 };
}

const packingProgress = (items) => ({ done: items.filter((i) => i.done).length, total: items.length });

// ── time tracker: an entry is { project, desc, start, end } (ISO times); a project is { id, name, client, rate (per hour) } ──
const secondsBetween = (start, end) => Math.max(0, Math.round((new Date(end) - new Date(start)) / 1000));

// 3725 -> "1:02:05"
const clockHMS = (sec) => `${Math.floor(sec / 3600)}:${String(Math.floor(sec % 3600 / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;

// 3725 -> "1 h 02 min", 90 -> "2 min" (rounded to the minute, never "0 min" for real time)
function hoursLabel(sec) {
  const m = Math.max(sec > 0 ? 1 : 0, Math.round(sec / 60));
  return m >= 60 ? `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')} min` : `${m} min`;
}

// the first and last day of a week (Monday first), this month or last month around `today`
function timeRange(kind, today) {
  if (kind === 'week') { const w = weekDays(today); return { since: w[0], until: w[6] }; }
  const [y, m] = today.split('-').map(Number);
  const first = (yy, mm) => localDay(new Date(yy, mm, 1));
  const last = (yy, mm) => localDay(new Date(yy, mm + 1, 0));
  return kind === 'lastmonth' ? { since: first(y, m - 2), until: last(y, m - 2) } : { since: first(y, m - 1), until: last(y, m - 1) };
}

// per project: seconds and what it earns at its hourly rate, for entries that started within [since, until]
function timeReport(entries, projects, since, until) {
  const by = new Map();
  for (const e of entries) {
    const day = localDay(new Date(e.start));
    if (day < since || day > until) continue;
    by.set(e.project, (by.get(e.project) || 0) + secondsBetween(e.start, e.end));
  }
  const rows = [...by].map(([id, seconds]) => { const p = projects.find((x) => x.id === id); return { id, name: p ? p.name : 'Deleted project', client: p ? p.client : '', seconds, amount: p && p.rate ? Math.round(seconds / 3600 * p.rate * 100) / 100 : 0 }; }).sort((a, b) => b.seconds - a.seconds);
  return { rows, seconds: rows.reduce((n, r) => n + r.seconds, 0), amount: Math.round(rows.reduce((n, r) => n + r.amount * 100, 0)) / 100 };
}

// One project at a glance: its tasks (todo.projectId), and the time and earnings of its entries; `weekSince` is the Monday of this week.
function projectSummary(todos, entries, project, weekSince) {
  const mine = todos.filter((t) => t.projectId === project.id);
  const open = mine.filter((t) => !t.done);
  const mineTime = entries.filter((e) => e.project === project.id);
  const seconds = mineTime.reduce((n, e) => n + secondsBetween(e.start, e.end), 0);
  const week = mineTime.filter((e) => localDay(new Date(e.start)) >= weekSince).reduce((n, e) => n + secondsBetween(e.start, e.end), 0);
  return {
    open: open.length, done: mine.length - open.length, total: mine.length,
    pct: mine.length ? Math.round((mine.length - open.length) / mine.length * 100) : 0,
    seconds, week, amount: project.rate ? Math.round(seconds / 3600 * project.rate * 100) / 100 : 0,
  };
}

// ── Automations: a rule is "when X happens, do Y". The pure parts. ──
// when: { type: 'daily', time: 'HH:MM', days: [0..6] } | { type: 'task-done' | 'bill-paid' | 'over-budget' | 'overdue', text } | { type: 'metric', metric, op: 'above' | 'below', value }
// A daily or metric rule runs at most once a day (rule.last is that day).
function autoDaily(rule, now) {
  const w = rule.when;
  if (!w || w.type !== 'daily' || !/^\d\d:\d\d$/.test(w.time || '')) return false;
  if (rule.last === localDay(now)) return false;
  if (!(w.days || []).includes(now.getDay())) return false;
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}` >= w.time;
}
function autoMetric(rule, value, today) {
  const w = rule.when;
  if (!w || w.type !== 'metric' || rule.last === today || !Number.isFinite(value)) return false;
  return w.op === 'below' ? value < w.value : value > w.value;
}
// an event (task-done, bill-paid...) matches a rule of that type; a filter word must appear in the title, name or category
function autoMatches(rule, type, data) {
  const w = rule.when;
  if (!w || w.type !== type) return false;
  const text = (w.text || '').trim().toLowerCase();
  return !text || String(data.title || data.name || data.cat || '').toLowerCase().includes(text);
}
// "Review {title}" with the event's words filled in; an unknown word stays as typed
function autoFill(text, ctx = {}) {
  return String(text || '').replace(/\{(title|name|amount|cat|day)\}/g, (_, k) => (ctx[k] == null ? '' : String(ctx[k]))).trim();
}
// "today" or "tomorrow" at HH:MM -> "YYYY-MM-DDTHH:MM" in local time; nothing -> null
function autoDue(spec, time, now) {
  if (spec !== 'today' && spec !== 'tomorrow') return null;
  const day = spec === 'today' ? localDay(now) : shiftDay(localDay(now), 1);
  return `${day}T${/^\d\d:\d\d$/.test(time || '') ? time : '09:00'}`;
}
// A runaway guard: at most `max` runs of one rule inside `windowMs`. Mutates and returns whether this run may go.
function autoAllowed(stamps, now, max = 5, windowMs = 60000) {
  while (stamps.length && now - stamps[0] > windowMs) stamps.shift();
  if (stamps.length >= max) return false;
  stamps.push(now);
  return true;
}
const AUTO_WHEN = { daily: 'At a time', 'task-done': 'A task is done', 'bill-paid': 'A bill is paid', 'over-budget': 'A budget runs out', overdue: 'A task becomes overdue', metric: 'A number passes a value' };
const AUTO_DO = { task: 'Add a task', shop: 'Add to the shopping list', expense: 'Record an expense', toast: 'Show a notification', open: 'Open a tab' };
const AUTO_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// one line for the list: "When every day at 08:00, add a task: Plan the day"
function autoSummary(rule) {
  const w = rule.when || {}, d = rule.do || {};
  const ds = w.days || [];
  const days = ds.length === 7 ? 'every day' : ds.length === 5 && ![0, 6].some((x) => ds.includes(x)) ? 'on weekdays' : ds.map((x) => AUTO_WEEK[x]).join(', ');
  const when = w.type === 'daily' ? `${days} at ${w.time}` : w.type === 'metric' ? `${w.label || w.metric} ${w.op === 'below' ? 'falls below' : 'passes'} ${w.value}` : `${(AUTO_WHEN[w.type] || w.type).toLowerCase()}${w.text ? ` ("${w.text}")` : ''}`;
  const what = d.type === 'open' ? `open ${d.view || 'a tab'}` : `${(AUTO_DO[d.type] || d.type).toLowerCase()}${d.text ? `: ${d.text}` : ''}`;
  return `When ${when}, ${what}`;
}

// "Ctrl+Alt+T" from a key event, for choosing a global shortcut: a modifier (Ctrl, Alt or Shift) and one ordinary key, by its physical code
function hotkeyFromEvent(e) {
  const mods = [e.ctrlKey && 'Ctrl', e.altKey && 'Alt', e.shiftKey && 'Shift'].filter(Boolean);
  if (e.metaKey || !mods.length) return null;
  const c = e.code || '';
  const named = { Space: 'Space', ArrowUp: 'Up', ArrowDown: 'Down', ArrowLeft: 'Left', ArrowRight: 'Right', Home: 'Home', End: 'End', PageUp: 'PageUp', PageDown: 'PageDown', Insert: 'Insert', Delete: 'Delete' };
  const key = /^Key[A-Z]$/.test(c) ? c.slice(3) : /^Digit\d$/.test(c) ? c.slice(5) : /^F([1-9]|1\d|2[0-4])$/.test(c) ? c : named[c];
  return key ? [...mods, key].join('+') : null;
}

// A repeating task keeps only a time of day: its first due is today at that time if that is still ahead (and a
// weekdays task is not on a weekend), else its next day. When editing, `keepDay` keeps the occurrence it already has.
function repeatDue(repeat, time, now, keepDay) {
  if (keepDay) return `${keepDay}T${time}`;
  const today = localDay(now);
  const ahead = time > `${two(now.getHours())}:${two(now.getMinutes())}` && (repeat !== 'weekdays' || (now.getDay() !== 0 && now.getDay() !== 6));
  return `${ahead ? today : nextOccurrence(repeat, today, now)}T${time}`;
}

// The calendar shows an open repeating task on every day it will come back, not only on its next due day:
// todos plus a read-only copy (`ghost`, `ghostOf`) for each of those days from `today` on, within [from, to].
function withRepeats(todos, from, to, today) {
  const extra = [];
  for (const t of todos) {
    if (t.done || !t.repeat || !t.due) continue;
    const start = t.due.slice(0, 10), anchor = parseDay(start);
    for (let d = [shiftDay(start, 1), from, today].sort().pop(); d <= to; d = shiftDay(d, 1)) {
      const date = parseDay(d), dow = date.getDay();
      const lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const hit = t.repeat === 'daily' || (t.repeat === 'weekdays' && dow !== 0 && dow !== 6) || (t.repeat === 'weekly' && dow === anchor.getDay()) || (t.repeat === 'monthly' && date.getDate() === Math.min(anchor.getDate(), lastOfMonth));
      if (hit) extra.push({ ...t, id: `${t.id}@${d}`, due: d + t.due.slice(10), ghost: true, ghostOf: t.id });
    }
  }
  return [...todos, ...extra];
}

// the latest price of a quote: the newest trade, even before the open or after the close, against the previous close
function stockNow(q) {
  const price = q.lastPrice ?? q.price; // quotes saved by an older version have no lastPrice
  const base = q.prevClose;
  const session = q.lastIn || 'REGULAR';
  return {
    price,
    change: base ? Math.round((price - base) * 10000) / 10000 : q.change,
    pct: base ? Math.round((price - base) / base * 10000) / 100 : q.changePct,
    label: session === 'PRE' ? 'Pre-market' : session === 'POST' ? 'After-hours' : q.state === 'REGULAR' ? 'Live' : 'At close',
    time: q.lastTime || 0,
  };
}

// the tabs in the order Settings chose; ones it does not know keep their own order, after the known ones
function orderTabs(ids, order) {
  const at = (id) => { const i = order.indexOf(id); return i < 0 ? 1000 + ids.indexOf(id) : i; };
  return [...ids].sort((a, b) => at(a) - at(b));
}

// ── Assistant: what is sent to the model, and what is accepted back. Pure. ──
// The model is asked for JSON { reply, actions }. An action is only ever a suggestion the user confirms, and only
// these shapes are accepted, so whatever the model writes cannot do anything else.
const ASSIST_ACTION_HELP = {
  task: '{"type":"task","title":"...","due":"YYYY-MM-DDTHH:MM" or null}',
  shop: '{"type":"shop","name":"..."}',
  expense: '{"type":"expense","amount":12.5,"cat":"Food","note":"..."}',
  note: '{"type":"note","title":"...","body":"..."}',
  open: '{"type":"open","view":"..."}',
};
// The span the module summaries cover: the user picks one; every module's weekly(since, until) already takes any span.
const ASSIST_PERIODS = [['week', 'the last 7 days'], ['days30', 'the last 30 days'], ['month', 'this month'], ['lastmonth', 'last month'], ['year', 'this year']];
function assistantRange(kind, today) {
  const label = (ASSIST_PERIODS.find(([k]) => k === kind) || ASSIST_PERIODS[0])[1];
  if (kind === 'days30') return { since: shiftDay(today, -29), until: today, label };
  if (kind === 'month') return { ...reviewRange('month', 0, today), label };
  if (kind === 'lastmonth') return { ...reviewRange('month', 1, today), label };
  if (kind === 'year') return { ...reviewRange('year', 0, today), label };
  return { since: shiftDay(today, -6), until: today, label };
}
// can: the action types whose modules are on; sections: [{ title, lines }] the user chose to share; views: ids of open-able tabs
function assistantPrompt({ now, sections, can, views, period }) {
  const day = localDay(now), time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const weekday = now.toLocaleDateString('en-GB', { weekday: 'long' });
  const data = sections.length
    ? sections.map((s) => `## ${s.title}\n${s.lines.map((l) => '- ' + l).join('\n')}`).join('\n\n')
    : 'Nothing is shared with you. You can chat and suggest actions, but you cannot see the user\'s data.';
  return [
    'You are the assistant inside Vermil, a personal organiser on the user\'s Windows PC. Answer in the language the user writes in, briefly and plainly.',
    `Today is ${weekday} ${day}, local time ${time}.`,
    ...(period ? [`The module summaries below cover ${period.label} (${period.since} to ${period.until}). Say so when the user asks about another span.`] : []),
    'Use only the data below for questions about the user\'s own life. If it is not there, say you cannot see it. Never invent entries.',
    'To add or open something, put it in "actions". The user sees each action and decides, so phrase it as an offer ("I can add..."), never as already done.',
    'Reply with JSON only, in this form: {"reply": "text for the user", "actions": []}',
    can.length ? 'An action is one of:\n' + can.map((k) => ASSIST_ACTION_HELP[k].replace('"view":"..."', `"view":"one of: ${views.join(', ')}"`)).join('\n') : 'You cannot suggest actions: no module that could carry them out is on.',
    '', 'Data you may use:', data,
  ].join('\n');
}

// the morning briefing: one request a day, written from what the user chose to share, never with actions
const ASSIST_BRIEFING = 'Write my briefing for today in at most 5 short lines: what is due or overdue, what needs preparing for tomorrow, and one suggestion. Reply in the same language as my task titles. Plain text, no markdown.';
// is a briefing to be written now? on: the user turned it on; day: when the last one was written; shared: how many things they let it see
function briefingDue({ on, day, today, hasKey, shared }) {
  return !!on && !!hasKey && shared > 0 && day !== today;
}

const ASSIST_DUE = /^\d{4}-\d\d-\d\dT\d\d:\d\d$/;
const clip = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
// text from the model -> { reply, actions } with only valid, allowed actions (at most five); text that is not JSON is simply the reply
function parseAssistantReply(text, { can = [], views = [] } = {}) {
  let raw = String(text || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  let data = null;
  for (const candidate of [raw, raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1)]) {
    try { const v = JSON.parse(candidate); if (v && typeof v === 'object' && !Array.isArray(v)) { data = v; break; } } catch {}
  }
  if (!data) return { reply: raw.slice(0, 4000), actions: [] };
  const actions = [];
  for (const a of Array.isArray(data.actions) ? data.actions : []) {
    if (!a || !can.includes(a.type) || actions.length >= 5) continue;
    if (a.type === 'task') {
      const title = clip(a.title, 200);
      const due = typeof a.due === 'string' && ASSIST_DUE.test(a.due) && !Number.isNaN(parseDay(a.due.slice(0, 10)).getTime()) ? a.due : null;
      if (title) actions.push({ type: 'task', title, due });
    } else if (a.type === 'shop') {
      const name = clip(a.name, 80);
      if (name) actions.push({ type: 'shop', name });
    } else if (a.type === 'expense') {
      const amount = Math.round(Number(a.amount) * 100) / 100;
      if (Number.isFinite(amount) && amount > 0 && amount < 1e9) actions.push({ type: 'expense', amount, cat: clip(a.cat, 30) || 'Other', note: clip(a.note, 120) });
    } else if (a.type === 'note') {
      const title = clip(a.title, 120);
      if (title) actions.push({ type: 'note', title, body: clip(a.body, 4000) });
    } else if (a.type === 'open' && views.includes(a.view)) {
      actions.push({ type: 'open', view: a.view });
    }
  }
  const reply = clip(data.reply, 4000);
  return { reply: reply || (actions.length ? '' : '(no answer)'), actions };
}

// one line for the confirmation list
function describeAction(a) {
  if (a.type === 'task') return `Add the task "${a.title}"${a.due ? ` due ${a.due.replace('T', ' ')}` : ''}`;
  if (a.type === 'shop') return `Add "${a.name}" to the shopping list`;
  if (a.type === 'expense') return `Record an expense of ${a.amount} in ${a.cat}${a.note ? ` (${a.note})` : ''}`;
  if (a.type === 'note') return `Create the note "${a.title}"`;
  return `Open ${a.view}`;
}

// the turns to send for a chat log: no errors or empty replies, same speakers merged, starting and ending with the user, the last `max` messages
function assistantTurns(log, max = 12) {
  const turns = [];
  for (const m of log.slice(-max)) {
    const text = String(m.text || '').trim();
    if (!text || m.error) continue;
    const role = m.role === 'user' ? 'user' : 'model';
    if (turns.length && turns[turns.length - 1].role === role) turns[turns.length - 1].text += '\n' + text;
    else turns.push({ role, text });
  }
  while (turns.length && turns[0].role !== 'user') turns.shift();
  while (turns.length && turns[turns.length - 1].role !== 'user') turns.pop();
  return turns;
}

// ── Insights: patterns across modules, from one number per day per series. Pure. ──
// series: [{ id: 'health.sleep', label, unit, byDay: { 'YYYY-MM-DD': number } }]. These are patterns in the user's own days,
// never causes, so a pair is reported only with enough days and a clear, unlikely-to-be-chance link (Spearman, |r| >= 0.4, t >= 3).
function ranksOf(values) {
  const order = values.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  const r = new Array(values.length);
  for (let i = 0; i < order.length;) {
    let j = i;
    while (j + 1 < order.length && order[j + 1][0] === order[i][0]) j++;
    for (let k = i; k <= j; k++) r[order[k][1]] = (i + j) / 2 + 1; // ties share the average rank
    i = j + 1;
  }
  return r;
}
function pearson(x, y) {
  const n = x.length, mx = x.reduce((s, v) => s + v, 0) / n, my = y.reduce((s, v) => s + v, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) { sxy += (x[i] - mx) * (y[i] - my); sxx += (x[i] - mx) ** 2; syy += (y[i] - my) ** 2; }
  return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
}
const spearman = (x, y) => pearson(ranksOf(x), ranksOf(y));

// a count-like series (tasks done, money spent) is 0 on the days nothing happened, from its first day to today
function zeroFill(byDay, today, days) {
  const keys = Object.keys(byDay).sort();
  if (!keys.length) return {};
  const out = {};
  for (let d = keys[0] > shiftDay(today, -(days - 1)) ? keys[0] : shiftDay(today, -(days - 1)); d <= today; d = shiftDay(d, 1)) out[d] = byDay[d] || 0;
  return out;
}

const INSIGHT_MIN_DAYS = 21;
function insightFindings(series, today, days = 90) {
  const since = shiftDay(today, -(days - 1));
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const found = [];
  for (const a of series) for (const b of series) {
    if (a.id.split('.')[0] === b.id.split('.')[0]) continue; // two numbers of one module say little
    for (const lag of [0, 1]) { // lag 1: what A did today against B tomorrow
      if (lag === 0 && a.id > b.id) continue; // the same pair once
      const xs = [], ys = [];
      for (const day of Object.keys(a.byDay)) {
        const other = lag ? shiftDay(day, 1) : day;
        if (day < since || other > today || !(other in b.byDay)) continue;
        xs.push(a.byDay[day]); ys.push(b.byDay[other]);
      }
      const n = xs.length;
      if (n < INSIGHT_MIN_DAYS) continue;
      const r = spearman(xs, ys);
      if (Math.abs(r) < 0.4 || Math.abs(r * Math.sqrt((n - 2) / (1 - r * r))) < 3) continue;
      const mid = [...xs].sort((p, q) => p - q)[Math.floor(n / 2)];
      const hi = ys.filter((_, i) => xs[i] > mid), lo = ys.filter((_, i) => xs[i] <= mid);
      if (hi.length < 5 || lo.length < 5) continue; // too lopsided to compare
      found.push({ a: a.id, b: b.id, lag, r, n, hi: mean(hi), lo: mean(lo), higher: r > 0, strength: Math.abs(r) >= 0.6 ? 'Strong' : Math.abs(r) >= 0.5 ? 'Moderate' : 'Mild' });
    }
  }
  const best = new Map(); // the stronger of the two timings for each pair
  for (const f of found) { const k = [f.a, f.b].sort().join('|'); if (!best.has(k) || Math.abs(f.r) > Math.abs(best.get(k).r)) best.set(k, f); }
  return [...best.values()].sort((p, q) => Math.abs(q.r) - Math.abs(p.r)).slice(0, 8);
}

// "On days with more sleep, mood tends to be higher (4.1 vs 3.2, 27 days)"
function insightSentence(f, a, b) {
  const num = (v) => String(Math.round(v * 10) / 10);
  return `${f.lag ? 'After days with more' : 'On days with more'} ${a.label}, ${b.label}${f.lag ? ' the next day' : ''} tends to be ${f.higher ? 'higher' : 'lower'} (${num(f.hi)} vs ${num(f.lo)}, ${f.n} days)`;
}

// ── Task subtasks & tags ──
function parseSubtasks(text, prev = []) {
  const old = Array.isArray(prev) ? [...prev] : [];
  const used = new Set();
  const out = [];
  for (const raw of String(text || '').split(/\r?\n/)) {
    let s = raw.trim();
    if (!s) continue;
    let forced = null;
    if (/^\[[xX]\]\s+/.test(s)) { forced = true; s = s.replace(/^\[[xX]\]\s+/, ''); }
    else if (/^\[\s?\]\s+/.test(s)) { forced = false; s = s.replace(/^\[\s?\]\s+/, ''); }
    else if (/^[-*•]\s+/.test(s)) s = s.replace(/^[-*•]\s+/, '');
    const title = s.trim().slice(0, 160);
    if (!title) continue;
    const hit = old.findIndex((p, i) => !used.has(i) && String(p.title || '').toLowerCase() === title.toLowerCase());
    if (hit >= 0) used.add(hit);
    const keep = hit >= 0 ? old[hit] : null;
    out.push({
      id: (keep && keep.id) || `sub-${out.length + 1}`,
      title,
      done: forced !== null ? forced : !!(keep && keep.done),
    });
    if (out.length >= 30) break;
  }
  return out;
}

function subtaskProgress(subtasks) {
  if (!Array.isArray(subtasks) || !subtasks.length) return null;
  const total = subtasks.length;
  const done = subtasks.filter((s) => s && s.done).length;
  return { done, total };
}

function extractTags(title, tagInput = '') {
  const rawTitle = String(title || '').trim();
  const fromTitle = [];
  const stripped = rawTitle.replace(/(?:^|\s)#([\p{L}\p{N}_-]{1,24})/gu, (_, tag) => {
    fromTitle.push(tag.toLowerCase());
    return ' ';
  }).replace(/\s+/g, ' ').trim();
  const fromInput = String(tagInput || '')
    .split(/[\s,]+/)
    .map((w) => w.replace(/^#+/, '').trim().toLowerCase().slice(0, 24))
    .filter((w) => /^[\p{L}\p{N}_-]+$/u.test(w));
  const tags = [...new Set([...fromTitle, ...fromInput])].slice(0, 8);
  return { title: stripped || rawTitle, tags };
}

function taskTags(t) {
  if (!t) return [];
  const saved = Array.isArray(t.tags) ? t.tags.map((x) => String(x || '').replace(/^#+/, '').trim().toLowerCase()).filter(Boolean) : [];
  const inline = extractTags(t.title || '').tags;
  return [...new Set([...saved, ...inline])];
}

function projectBoard(todos, projectId) {
  const items = (todos || []).filter((t) => t && t.projectId === projectId);
  return {
    todo: items.filter((t) => !t.done && t.stage !== 'doing'),
    doing: items.filter((t) => !t.done && t.stage === 'doing'),
    done: items.filter((t) => !!t.done),
  };
}

const NOTE_TEMPLATES = [
  { id: 'meeting', label: 'Meeting', title: 'Meeting notes', body: 'Attendees\n\nAgenda\n[ ] \n\nAction items\n[ ] ' },
  { id: 'checklist', label: 'Checklist', title: 'Checklist', body: '[ ] \n[ ] \n[ ] ' },
  { id: 'weekly', label: 'Weekly plan', title: 'Weekly plan', body: 'Top 3 priorities\n[ ] \n[ ] \n[ ] \n\nWins & notes\n' },
  { id: 'brief', label: 'Project brief', title: 'Project brief', body: 'Goal\n\nScope\n[ ] \n\nNext steps\n[ ] ' },
];

function sortNotes(notes) {
  return [...(notes || [])].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.updatedAt || '').localeCompare(a.updatedAt || ''));
}

const MONEY_ACCOUNTS = [
  { id: 'online', label: 'Online' },
  { id: 'cash', label: 'Cash' },
  { id: 'paylater', label: 'PayLater' },
];

function moneyAccounts(entries = [], paylater = [], month = '') {
  const inMonth = (d) => !month || String(d || '').startsWith(month);
  let onlineCents = 0;
  let cashCents = 0;
  let paylaterSpentCents = 0;
  for (const e of entries) {
    if (!e || !inMonth(e.day)) continue;
    const acc = e.account || 'online';
    const c = Math.round((Number(e.amount) || 0) * 100);
    if (e.kind === 'in') {
      if (acc === 'cash') cashCents += c;
      else onlineCents += c;
    } else if (e.kind === 'out') {
      if (acc === 'paylater') paylaterSpentCents += c;
      else if (acc === 'cash') cashCents -= c;
      else onlineCents -= c;
    }
  }
  let unpaidCents = 0;
  let dueMonthCents = 0;
  let settledMonthCents = 0;
  for (const it of paylater) {
    if (!it) continue;
    const c = Math.round((Number(it.amount) || 0) * 100);
    if (it.paid) {
      if (inMonth(it.paidDay || it.due)) {
        settledMonthCents += c;
        if (it.paidWith === 'cash') cashCents -= c;
        else onlineCents -= c;
      }
    } else {
      unpaidCents += c;
      if (month && String(it.due || '').startsWith(month)) dueMonthCents += c;
    }
  }
  return {
    online: onlineCents / 100,
    cash: cashCents / 100,
    walletBalance: (onlineCents + cashCents) / 100,
    paylaterSpent: paylaterSpentCents / 100,
    paylaterUnpaid: unpaidCents / 100,
    paylaterDueMonth: dueMonthCents / 100,
    paylaterSettled: settledMonthCents / 100,
  };
}

// ── Bookmarks / Read Later ──
function cleanLinkUrl(raw) {
  const s = String(raw || '').trim();
  if (!s) return '';
  const withScheme = /^https?:\/\//i.test(s) ? s : 'https://' + s;
  try {
    const u = new URL(withScheme);
    return u.protocol === 'http:' || u.protocol === 'https:' ? u.href : '';
  } catch {
    return '';
  }
}

function linkHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./i, '');
  } catch {
    return '';
  }
}

function filterLinks(items = [], { status = 'unread', tag = '', q = '' } = {}) {
  const needle = String(q || '').trim().toLowerCase();
  const wantTag = String(tag || '').replace(/^#+/, '').trim().toLowerCase();
  return [...items]
    .filter((it) => {
      if (!it) return false;
      if (status === 'unread' && it.read) return false;
      if (status === 'read' && !it.read) return false;
      if (status === 'pinned' && !it.pinned) return false;
      if (wantTag && String(it.tag || '').toLowerCase() !== wantTag) return false;
      if (needle) {
        const hay = `${it.title || ''}\n${it.url || ''}\n${it.tag || ''}\n${it.note || ''}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    })
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || String(b.addedAt || '').localeCompare(String(a.addedAt || '')));
}

// ── Spaced Flashcards (Leitner 5-box + FSRS-4.5 DSR scheduler) ──
const CARD_BOX_DAYS = [1, 3, 7, 14, 30];
const cardDue = (c, today) => !c.next || c.next <= today;

function reviewCard(c, remembered, today) {
  const curBox = Math.max(1, Math.min(5, Number(c.box) || 1));
  const box = remembered ? Math.min(5, curBox + 1) : 1;
  const next = shiftDay(today, CARD_BOX_DAYS[box - 1]);
  return { ...c, box, next, lastReviewed: today, reviews: (Number(c.reviews) || 0) + 1 };
}

// FSRS-4.5 with its published default weights, scheduled by whole days (no same-day learning steps, no weight optimiser).
// A card keeps s (stability: days until recall falls to 90%) and d (difficulty 1..10). Grades: 1 Again, 2 Hard, 3 Good, 4 Easy.
const FSRS_W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
const FSRS_DECAY = -0.5;
const FSRS_FACTOR = 19 / 81; // makes R(S, S) = 0.9
const FSRS_RETENTION = 0.9;
const fsrsClampD = (d) => Math.min(10, Math.max(1, d));
const fsrsD0 = (g) => fsrsClampD(FSRS_W[4] - (g - 3) * FSRS_W[5]);
const fsrsR = (elapsed, s) => Math.pow(1 + FSRS_FACTOR * elapsed / s, FSRS_DECAY);
const fsrsInterval = (s) => Math.min(36500, Math.max(1, Math.round(s / FSRS_FACTOR * (Math.pow(FSRS_RETENTION, 1 / FSRS_DECAY) - 1))));

// the stability a card already has: its own, or one guessed from its old Leitner box so a migrated card is not reset
function fsrsStability(card) {
  if (Number(card?.s) > 0) return Number(card.s);
  const box = Number(card?.box) || 1;
  return card?.lastReviewed && box > 1 ? CARD_BOX_DAYS[box - 1] : 0;
}

// chance of recalling the card today (1 for a card never reviewed)
function fsrsRetrievability(card, today) {
  const s = fsrsStability(card);
  if (!s || !card?.lastReviewed) return 1;
  return Math.round(fsrsR(Math.max(0, daysUntil(today, card.lastReviewed)), s) * 1000) / 1000;
}

function fsrsReview(card, grade, today) {
  const g = Math.max(1, Math.min(4, Math.round(Number(grade)) || 3));
  const prevS = fsrsStability(card);
  let s;
  let d;
  if (!prevS) {
    s = FSRS_W[g - 1];
    d = fsrsD0(g);
  } else {
    const prevD = Number(card?.d) > 0 ? Number(card.d) : 5;
    const r = fsrsR(Math.max(0, daysUntil(today, card.lastReviewed || today)), prevS);
    if (g === 1) {
      s = FSRS_W[11] * Math.pow(prevD, -FSRS_W[12]) * (Math.pow(prevS + 1, FSRS_W[13]) - 1) * Math.exp(FSRS_W[14] * (1 - r));
      s = Math.min(s, prevS); // forgetting never makes a card more stable
    } else {
      const hard = g === 2 ? FSRS_W[15] : 1;
      const easy = g === 4 ? FSRS_W[16] : 1;
      s = prevS * (1 + Math.exp(FSRS_W[8]) * (11 - prevD) * Math.pow(prevS, -FSRS_W[9]) * (Math.exp(FSRS_W[10] * (1 - r)) - 1) * hard * easy);
    }
    const nextD = prevD - FSRS_W[6] * (g - 3);
    d = fsrsClampD(FSRS_W[7] * fsrsD0(3) + (1 - FSRS_W[7]) * nextD); // mean reversion towards a Good first answer
  }
  s = Math.round(Math.max(0.1, s) * 100) / 100;
  const ivl = g === 1 ? 1 : fsrsInterval(s);
  return {
    ...card,
    s,
    d: Math.round(d * 100) / 100,
    box: ivl >= 21 ? 5 : ivl >= 10 ? 4 : ivl >= 5 ? 3 : ivl >= 2 ? 2 : 1, // kept for the old Leitner views and backups
    ivl,
    lapses: (Number(card?.lapses) || 0) + (g === 1 && prevS ? 1 : 0),
    next: shiftDay(today, ivl),
    lastReviewed: today,
    reviews: (Number(card?.reviews) || 0) + 1,
  };
}

// the interval each of the four answers would give, for the buttons
function fsrsPreview(card, today) {
  return { 1: fsrsReview(card, 1, today).ivl, 2: fsrsReview(card, 2, today).ivl, 3: fsrsReview(card, 3, today).ivl, 4: fsrsReview(card, 4, today).ivl };
}

function deckSummary(cards = [], today) {
  const list = Array.isArray(cards) ? cards : [];
  const due = list.filter((c) => c && cardDue(c, today)).length;
  const mastered = list.filter((c) => c && ((Number(c.s) || 0) >= 10 || (Number(c.box) || 1) >= 4)).length;
  const decks = [...new Set(list.map((c) => (c && c.deck ? String(c.deck).trim() : '')).filter(Boolean))].sort();
  return { total: list.length, due, mastered, decks };
}

// Orders due FSRS reviews first (never capped), followed by up to `newLimit - newDoneToday` unseen cards (0 = unlimited).
function studyQueue(cards = [], today, { newLimit = 20, newDoneToday = 0 } = {}) {
  const due = (cards || []).filter((c) => c && cardDue(c, today));
  const reviews = due.filter((c) => !!c.lastReviewed).sort((a, b) => (a.next || '').localeCompare(b.next || ''));
  const unseen = due.filter((c) => !c.lastReviewed);
  const cap = newLimit > 0 ? Math.max(0, newLimit - Math.max(0, newDoneToday)) : unseen.length;
  const fresh = unseen.slice(0, cap);
  return { queue: [...reviews, ...fresh], reviewsDue: reviews.length, newDue: unseen.length, newShown: fresh.length };
}

function importCardPack(existingCards = [], items = [], today, nextId) {
  const cardKey = (front, pos) => {
    const f = String(front || '').trim().toLowerCase();
    const p = String(pos || '').trim().toLowerCase();
    return f ? (p ? `${f}\u0000${p}` : f) : '';
  };
  const seen = new Set((existingCards || []).map((c) => cardKey(c?.front, c?.pos)).filter(Boolean));
  const added = [];
  const makeId = nextId || ((i) => (globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `fc-${Date.now()}-${i}`));
  for (const raw of items || []) {
    if (!raw) continue;
    const deck = String(raw.deck || 'General').trim() || 'General';
    const front = String(raw.front || '').trim();
    const back = String(raw.back || '').trim();
    const pos = String(raw.pos || '').trim();
    const example = String(raw.example || '').trim();
    if (!front || !back) continue;
    const key = cardKey(front, pos);
    if (seen.has(key)) continue;
    seen.add(key);
    added.push({
      id: makeId(added.length),
      deck,
      front,
      back,
      ...(pos ? { pos } : {}),
      ...(example ? { example } : {}),
      box: 1,
      next: today,
      lastReviewed: null,
      reviews: 0,
    });
  }
  return { cards: [...(existingCards || []), ...added], added: added.length };
}

// ── Flashcards Quiz & TOEIC Practice Test helpers ──
function stripGapCue(front) {
  const raw = String(front || '').trim();
  const m = raw.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
  if (!m) return { stem: raw, cue: '' };
  return { stem: m[1].trim(), cue: m[2].trim() };
}

function cleanChoiceLabel(back) {
  return String(back || '')
    .replace(/\s*\(\+[^)]*\)/g, '')
    .split(/\s+\/\s+/)[0]
    .trim();
}

function shuffleWith(list, rng = Math.random) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildCardQuiz(cards = [], { count = 10, deck = '', rng = Math.random } = {}) {
  const all = (cards || []).filter((c) => c && c.front && c.back);
  const deckOk = (d) => (!deck ? true : deck.endsWith('*') ? String(d || '').startsWith(deck.slice(0, -1)) : d === deck);
  const scoped = all.filter((c) => deckOk(c.deck));
  if (all.length < 4 || !scoped.length) return [];
  const chosen = shuffleWith(scoped, rng).slice(0, Math.min(count > 0 ? count : scoped.length, scoped.length));
  const out = [];
  for (const target of chosen) {
    const answerLabel = cleanChoiceLabel(target.back);
    if (!answerLabel) continue;
    const sameDeck = shuffleWith(all.filter((c) => c !== target && c.deck === target.deck), rng);
    const sameKind = shuffleWith(all.filter((c) => c !== target && c.deck !== target.deck && Boolean(c.pos) === Boolean(target.pos)), rng);
    const otherDecks = shuffleWith(all.filter((c) => c !== target && c.deck !== target.deck && Boolean(c.pos) !== Boolean(target.pos)), rng);
    const seenLabels = new Set([answerLabel.toLowerCase()]);
    const distractors = [];
    for (const cand of [...sameDeck, ...sameKind, ...otherDecks]) {
      const lbl = cleanChoiceLabel(cand.back);
      const low = lbl.toLowerCase();
      if (!lbl || seenLabels.has(low)) continue;
      seenLabels.add(low);
      const { cue } = stripGapCue(cand.front);
      distractors.push({ label: lbl, cue });
      if (distractors.length === 3) break;
    }
    if (distractors.length < 3) continue;
    const { stem, cue } = stripGapCue(target.front);
    const pos = String(target.pos || '').trim();
    const opts = shuffleWith([
      { label: answerLabel, correct: true },
      ...distractors.map((d) => ({ label: d.label, correct: false })),
    ], rng);
    const ans = opts.findIndex((o) => o.correct);
    const parts = [];
    parts.push(`คำตอบ: "${target.back}"${pos ? ` (${pos})` : ''}${cue ? ` — ${cue}` : ''}`);
    if (target.example) parts.push(`ตัวอย่าง: ${target.example}`);
    const otherNotes = distractors.map((d) => (d.cue ? `${d.label} (${d.cue})` : d.label)).join(' · ');
    if (otherNotes) parts.push(`ตัวเลือกอื่น: ${otherNotes}`);
    out.push({
      id: target.id || stem,
      cardId: target.id || null,
      tag: target.deck || 'Flashcards',
      q: pos ? `${stem} (${pos})` : stem,
      ...(pos ? { stem, pos } : {}),
      choices: opts.map((o) => o.label),
      ans,
      why: parts.join('\n'),
    });
  }
  return out;
}

function buildCuratedQuiz(items = [], { count = 10, tag = '', set = 0, shuffle = true, rng = Math.random } = {}) {
  const pool = (items || []).filter((x) => x && (!set || x.set === set) && (!tag || x.tag === tag));
  const picked = shuffle ? shuffleWith(pool, rng) : [...pool];
  return picked.slice(0, count > 0 ? Math.min(count, picked.length) : picked.length);
}

function scoreQuiz(questions = [], answers = []) {
  const total = questions.length;
  let answered = 0;
  let correct = 0;
  const missed = [];
  for (let i = 0; i < total; i++) {
    const pick = answers[i];
    if (pick === null || pick === undefined || pick < 0) continue;
    answered++;
    if (pick === questions[i].ans) correct++;
    else missed.push({ index: i, question: questions[i], pick });
  }
  return {
    total,
    answered,
    correct,
    wrong: answered - correct,
    pct: total ? Math.round(correct / total * 100) : 0,
    missed,
  };
}

// ETS TOEIC Reading conversion (raw 0..100 -> scaled 5..495) and official CEFR cutoffs
const TOEIC_READING_ANCHORS = [
  [0, 5], [10, 5], [15, 30], [25, 80], [40, 155],
  [55, 235], [70, 325], [85, 415], [95, 475], [98, 495], [100, 495],
];

function toeicReadingScore(correct = 0, total = 100) {
  if (!total || correct <= 0) return 5;
  const raw = Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
  for (let i = 1; i < TOEIC_READING_ANCHORS.length; i++) {
    const [x0, y0] = TOEIC_READING_ANCHORS[i - 1];
    const [x1, y1] = TOEIC_READING_ANCHORS[i];
    if (raw <= x1) {
      const y = x1 === x0 ? y1 : y0 + ((raw - x0) / (x1 - x0)) * (y1 - y0);
      return Math.max(5, Math.min(495, Math.round(y / 5) * 5));
    }
  }
  return 495;
}

function toeicCefrBand(scaled = 5) {
  if (scaled >= 455) return 'C1';
  if (scaled >= 385) return 'B2';
  if (scaled >= 275) return 'B1';
  if (scaled >= 115) return 'A2';
  return 'A1';
}

const EXAM_PERMS3 = [
  [0, 1, 2], [0, 2, 1], [1, 0, 2],
  [1, 2, 0], [2, 0, 1], [2, 1, 0],
];

function shuffleExamChoices(choices = [], ans = 0, seed = 0) {
  if (!Array.isArray(choices) || choices.length !== 4) return { choices: [...(choices || [])], ans };
  const targetPos = Math.abs(seed) % 4;
  const wrong = choices.filter((_, idx) => idx !== ans);
  const p = EXAM_PERMS3[Math.abs(seed * 7 + Math.floor(seed / 4)) % 6];
  const ordered = [null, null, null, null];
  ordered[targetPos] = choices[ans];
  let wi = 0;
  for (let pos = 0; pos < 4; pos++) {
    if (pos !== targetPos) ordered[pos] = wrong[p[wi++]];
  }
  return { choices: ordered, ans: targetPos };
}

function buildMockExam(setNum = 1, { p5Pool = [], p6Passages = [], p7Groups = [] } = {}) {
  const s = Number(setNum) || 1;
  const pureP5 = (p5Pool || []).filter((x) => x && x.tag !== 'Part 6 Context');
  const p5Items = pureP5.filter((_, idx) => idx % 30 === s - 1).slice(0, 30);
  const out = [];
  let qNum = 101;

  p5Items.forEach((item) => {
    const bal = shuffleExamChoices(item.choices, item.ans, s * 13 + qNum);
    out.push({
      id: `m${s}-q${qNum}`,
      set: s,
      num: qNum++,
      part: 5,
      tag: item.tag || 'Part 5',
      q: item.q,
      choices: bal.choices,
      ans: bal.ans,
      why: item.why,
      groupId: null,
      passages: null,
    });
  });

  const p6List = (p6Passages || []).filter((p) => p && Number(p.set) === s);
  p6List.forEach((p, gi) => {
    const startNum = qNum;
    const docs = [{ ...(p.doc || p), baseNum: startNum, kindLabel: p.label || p.doc?.label || 'Text Completion' }];
    const groupId = p.id || `m${s}-p6-${gi + 1}`;
    (p.questions || []).forEach((qq, qi) => {
      const choices = qq.choices || qq[2];
      const rawAns = qq.ans !== undefined ? qq.ans : qq[3];
      const why = qq.why || qq[4];
      const tag = qq.tag || qq[0] || 'Part 6';
      const q = qq.q || qq[1] || `Blank [${startNum + qi}]`;
      const bal = shuffleExamChoices(choices, rawAns, s * 17 + qNum);
      out.push({
        id: `m${s}-q${qNum}`,
        set: s,
        num: qNum++,
        part: 6,
        blankIndex: qi + 1,
        tag,
        q,
        choices: bal.choices,
        ans: bal.ans,
        why,
        groupId,
        groupRange: `${startNum}–${startNum + (p.questions || []).length - 1}`,
        passages: docs,
      });
    });
  });

  const p7List = (p7Groups || []).filter((g) => g && Number(g.set) === s);
  p7List.forEach((g, gi) => {
    const docs = g.docs || (g.doc ? [g.doc] : []);
    const qs = g.questions || [];
    const startNum = qNum;
    const groupId = g.id || `m${s}-p7-${gi + 1}`;
    qs.forEach((qq) => {
      const choices = qq.choices || qq[2];
      const rawAns = qq.ans !== undefined ? qq.ans : qq[3];
      const why = qq.why || qq[4];
      const tag = qq.tag || qq[0] || (docs.length >= 3 ? 'Triple Passage' : docs.length === 2 ? 'Double Passage' : 'Single Passage');
      const q = qq.q || qq[1];
      const bal = shuffleExamChoices(choices, rawAns, s * 29 + qNum);
      out.push({
        id: `m${s}-q${qNum}`,
        set: s,
        num: qNum++,
        part: 7,
        multi: docs.length > 1,
        docCount: docs.length,
        tag,
        q,
        choices: bal.choices,
        ans: bal.ans,
        why,
        groupId,
        groupRange: `${startNum}–${startNum + qs.length - 1}`,
        passages: docs,
      });
    });
  });

  return out;
}

function scoreMockExam(questions = [], answers = [], elapsedSec = 0) {
  const base = scoreQuiz(questions, answers);
  const scaled = toeicReadingScore(base.correct, base.total || 100);
  const band = toeicCefrBand(scaled);
  const parts = {
    5: { correct: 0, total: 0 },
    6: { correct: 0, total: 0 },
    7: { correct: 0, total: 0, singleCorrect: 0, singleTotal: 0, multiCorrect: 0, multiTotal: 0 },
  };
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const p = parts[q.part] || parts[7];
    const ok = answers[i] === q.ans;
    p.total++;
    if (ok) p.correct++;
    if (q.part === 7) {
      if (q.multi) {
        parts[7].multiTotal++;
        if (ok) parts[7].multiCorrect++;
      } else {
        parts[7].singleTotal++;
        if (ok) parts[7].singleCorrect++;
      }
    }
  }
  return {
    ...base,
    scaled,
    band,
    elapsedSec,
    parts,
    missed: base.missed.map((m) => ({ ...m, num: m.question.num, part: m.question.part })),
  };
}

// ETS TOEIC Listening conversion (raw 0..100 -> scaled 5..495) and official CEFR cutoffs
const TOEIC_LISTENING_ANCHORS = [
  [0, 5], [7, 5], [15, 45], [25, 95], [40, 175],
  [55, 260], [70, 355], [85, 445], [93, 495], [100, 495],
];

function toeicListeningScore(correct = 0, total = 100) {
  if (!total || correct <= 0) return 5;
  const raw = Math.max(0, Math.min(100, Math.round((correct / total) * 100)));
  for (let i = 1; i < TOEIC_LISTENING_ANCHORS.length; i++) {
    const [x0, y0] = TOEIC_LISTENING_ANCHORS[i - 1];
    const [x1, y1] = TOEIC_LISTENING_ANCHORS[i];
    if (raw <= x1) {
      const y = x1 === x0 ? y1 : y0 + ((raw - x0) / (x1 - x0)) * (y1 - y0);
      return Math.max(5, Math.min(495, Math.round(y / 5) * 5));
    }
  }
  return 495;
}

function toeicListeningCefr(scaled = 5) {
  if (scaled >= 490) return 'C1';
  if (scaled >= 400) return 'B2';
  if (scaled >= 275) return 'B1';
  if (scaled >= 110) return 'A2';
  return 'A1';
}

function toeicTotalScore(listenScaled = 5, readScaled = 5) {
  return Math.max(10, Math.min(990, (Number(listenScaled) || 5) + (Number(readScaled) || 5)));
}

function toeicTotalCefr(total = 10) {
  if (total >= 945) return 'C1';
  if (total >= 785) return 'B2';
  if (total >= 550) return 'B1';
  if (total >= 225) return 'A2';
  return 'A1';
}

function buildListeningExam(setNum = 1, rawItems = []) {
  const s = Number(setNum) || 1;
  const vol = Math.ceil(s / 5);
  const items = (rawItems || []).filter((x) => x && Number(x.set) === s);
  const p1 = items.filter((x) => x.part === 1);
  const p2 = items.filter((x) => x.part === 2);
  const p3 = items.filter((x) => x.part === 3);
  const p4 = items.filter((x) => x.part === 4);
  const out = [];
  let qNum = 1;

  p1.forEach((item) => {
    out.push({
      id: item.id || `l${s}-q${qNum}`,
      set: s,
      vol,
      num: qNum++,
      part: 1,
      tag: 'Part 1 · Photograph',
      imgKey: `${item.id}.webp`,
      audioKey: `${item.id}.mp3`,
      accent: item.accent || 'us',
      q: 'Look at the picture and listen to the four statements.',
      choices: [...(item.stmts || item.choices || [])],
      ans: Number(item.ans) || 0,
      why: item.why || '',
      scriptLines: (item.stmts || item.choices || []).map((st, idx) => `(${['A', 'B', 'C', 'D'][idx]}) ${st}`),
      groupId: item.id,
      passages: null,
    });
  });

  p2.forEach((item) => {
    out.push({
      id: item.id || `l${s}-q${qNum}`,
      set: s,
      vol,
      num: qNum++,
      part: 2,
      tag: 'Part 2 · Question-Response',
      audioKey: `${item.id}.mp3`,
      accent: item.accent || 'us / uk',
      q: 'Listen to the question or statement and select the best response.',
      prompt: item.prompt || '',
      choices: [...(item.choices || [])].slice(0, 3),
      ans: Number(item.ans) || 0,
      why: item.why || '',
      scriptLines: [
        `Prompt: ${item.prompt || ''}`,
        ...(item.choices || []).slice(0, 3).map((ch, idx) => `(${['A', 'B', 'C'][idx]}) ${ch}`),
      ],
      groupId: item.id,
      passages: null,
    });
  });

  p3.forEach((item) => {
    const qs = item.questions || [];
    const startNum = qNum;
    const docs = item.doc ? [item.doc] : null;
    const scriptLines = (item.turns || []).map(([spk, _v, txt]) => `${spk}: ${txt}`);
    qs.forEach((qq) => {
      const choices = qq.choices || qq[2];
      const rawAns = qq.ans !== undefined ? qq.ans : qq[3];
      const why = qq.why || qq[4];
      const tag = qq.tag || qq[0] || (docs ? 'Part 3 · Graphic' : 'Part 3 · Conversation');
      const q = qq.q || qq[1];
      const bal = shuffleExamChoices(choices, rawAns, s * 31 + qNum);
      out.push({
        id: `l${s}-q${qNum}`,
        set: s,
        vol,
        num: qNum++,
        part: 3,
        tag,
        audioKey: `${item.id}.mp3`,
        groupId: item.id,
        groupRange: `${startNum}–${startNum + qs.length - 1}`,
        hasGraphic: Boolean(docs),
        passages: docs,
        scriptLines,
        q,
        choices: bal.choices,
        ans: bal.ans,
        why,
      });
    });
  });

  p4.forEach((item) => {
    const qs = item.questions || [];
    const startNum = qNum;
    const docs = item.doc ? [item.doc] : null;
    const scriptLines = [`[${item.label || 'Short Talk'}]`, item.text || ''];
    qs.forEach((qq) => {
      const choices = qq.choices || qq[2];
      const rawAns = qq.ans !== undefined ? qq.ans : qq[3];
      const why = qq.why || qq[4];
      const tag = qq.tag || qq[0] || (docs ? 'Part 4 · Graphic' : 'Part 4 · Short Talk');
      const q = qq.q || qq[1];
      const bal = shuffleExamChoices(choices, rawAns, s * 37 + qNum);
      out.push({
        id: `l${s}-q${qNum}`,
        set: s,
        vol,
        num: qNum++,
        part: 4,
        tag,
        contextLabel: item.label || 'Short Talk',
        audioKey: `${item.id}.mp3`,
        groupId: item.id,
        groupRange: `${startNum}–${startNum + qs.length - 1}`,
        hasGraphic: Boolean(docs),
        passages: docs,
        scriptLines,
        q,
        choices: bal.choices,
        ans: bal.ans,
        why,
      });
    });
  });

  return out;
}

function scoreListeningExam(questions = [], answers = [], elapsedSec = 0) {
  const base = scoreQuiz(questions, answers);
  const scaled = toeicListeningScore(base.correct, base.total || 100);
  const band = toeicListeningCefr(scaled);
  const parts = {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
    4: { correct: 0, total: 0 },
  };
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const p = parts[q.part] || parts[4];
    p.total++;
    if (answers[i] === q.ans) p.correct++;
  }
  return {
    ...base,
    scaled,
    band,
    elapsedSec,
    parts,
    missed: base.missed.map((m) => ({ ...m, num: m.question.num, part: m.question.part })),
  };
}

function scoreFullToeicExam(listenReport, readReport) {
  const listenScaled = listenReport?.scaled || 5;
  const readScaled = readReport?.scaled || 5;
  const totalScaled = toeicTotalScore(listenScaled, readScaled);
  return {
    totalScaled,
    band: toeicTotalCefr(totalScaled),
    listenScaled,
    readScaled,
    listenRaw: listenReport?.correct || 0,
    readRaw: readReport?.correct || 0,
    correct: (listenReport?.correct || 0) + (readReport?.correct || 0),
    total: (listenReport?.total || 100) + (readReport?.total || 100),
    elapsedSec: (listenReport?.elapsedSec || 0) + (readReport?.elapsedSec || 0),
    listenParts: listenReport?.parts,
    readParts: readReport?.parts,
  };
}

if (typeof module !== 'undefined') module.exports = { secondsBetween, clockHMS, hoursLabel, timeRange, timeReport, PACKING_TEMPLATES, tripDays, tripState, packingProgress, paidTotals, billState, birthdayInfo, touchState, filterLibrary, libraryYear, weightTrend, medDue, dosesDue, parseIngredients, topItems, weekDays, reviewText, parseConvert, convertUnit, convertLabel, goalProgress, MOODS, moodAverage, nextEventDay, eventDaysIn, renewalsIn, countdownLabel, addCycle, rollForward, monthlyCost, daysUntil, budgetStatus, habitDue, habitStreak, habitBest, habitDay, heatLevel, habitRate, currencySign, priceLabel, pctLabel, signedLabel, portfolio, parseAmount, moneyLabel, moneyMonth, MONEY_ACCOUNTS, moneyAccounts, cleanLinkUrl, linkHost, filterLinks, CARD_BOX_DAYS, cardDue, reviewCard, fsrsStability, fsrsRetrievability, fsrsReview, fsrsPreview, deckSummary, studyQueue, importCardPack, stripGapCue, cleanChoiceLabel, buildCardQuiz, buildCuratedQuiz, scoreQuiz, toeicReadingScore, toeicCefrBand, toeicListeningScore, toeicListeningCefr, toeicTotalScore, toeicTotalCefr, shuffleExamChoices, buildMockExam, scoreMockExam, buildListeningExam, scoreListeningExam, scoreFullToeicExam, clock, minutesLabel, focusSummary, minutesOf, taskMinutes, snapMinutes, withTime, layoutDay, rankItems, checkProgress, plainToHtml, escapeHtml, colorKey, NOTE_COLORS, DEFAULT_COLOR, monthGrid, shiftDay, shiftMonth, groupByDay, localDay, parseDay, nextOccurrence, streak, parseQuick, inView, dailyCounts, niceMax, autoDaily, autoMetric, autoMatches, autoFill, autoDue, autoAllowed, autoSummary, ASSIST_BRIEFING, briefingDue, xpLevel, xpAward, xpBadges, xpStreak, XP_RULES, planWeek, placeDue, capLines, moneyDetail, timeDetail, assistantPrompt, assistantRange, ASSIST_PERIODS, parseAssistantReply, describeAction, assistantTurns, repeatDue, withRepeats, stockNow, projectSummary, projectBoard, NOTE_TEMPLATES, sortNotes, timeLog, timeLogLine, reviewRange, reviewBuckets, hotkeyFromEvent, orderTabs, setWeekStart, zeroFill, insightFindings, insightSentence, parseSubtasks, subtaskProgress, extractTags, taskTags };
