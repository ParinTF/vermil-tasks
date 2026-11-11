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

if (typeof module !== 'undefined') module.exports = { localDay, parseDay, nextOccurrence, streak };
