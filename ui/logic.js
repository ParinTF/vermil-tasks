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

// ── calendar maths: weeks start on Monday ──
// The six weeks of a month view (42 days), from the Monday on or before the 1st. `month` is 0 to 11.
function monthGrid(year, month) {
  const lead = (new Date(year, month, 1).getDay() + 6) % 7; // days since Monday
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
function parseAmount(text) { // "1,250.50", "฿120" -> a number above 0 with at most 2 decimals, else null
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
    const value = cents(shares * q.price);
    const spent = cents(shares * cost);
    return { ...it, q, shares, cost, value, day: cents(shares * (q.price - q.prevClose)), pl: cost ? cents(value - spent) : null, plPct: cost ? cents((value - spent) / spent * 100) : null, spent: cost ? spent : 0 };
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

if (typeof module !== 'undefined') module.exports = { currencySign, priceLabel, pctLabel, signedLabel, portfolio, parseAmount, moneyLabel, moneyMonth, clock, minutesLabel, focusSummary, minutesOf, taskMinutes, snapMinutes, withTime, layoutDay, rankItems, checkProgress, plainToHtml, escapeHtml, colorKey, NOTE_COLORS, DEFAULT_COLOR, monthGrid, shiftDay, shiftMonth, groupByDay, localDay, parseDay, nextOccurrence, streak, parseQuick, inView, dailyCounts, niceMax };
