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

if (typeof module !== 'undefined') module.exports = { localDay, parseDay, nextOccurrence, streak, parseQuick, inView };
