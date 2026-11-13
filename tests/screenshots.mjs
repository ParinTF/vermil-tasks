// End-to-end screenshot test: builds a test copy of Vermil with its own identifier and data folder,
// seeds realistic sample data across every module, drives every view, dialog and window over the
// Chrome DevTools Protocol, and writes the screenshots to docs/screenshots/.
//
// Usage:
//   npm run screenshots             (builds the debug test binary, captures all screenshots)
//   node tests/screenshots.mjs --no-build   (reuses the already-built test binary)

import { execSync, spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PORT = 9333;
const TIMEOUT_MS = 180_000;
const IDENTIFIER = 'com.vermil.tasks.test';
const APPDATA = process.env.APPDATA || join(process.env.USERPROFILE || '', 'AppData', 'Roaming');
const DATA_DIR = join(APPDATA, IDENTIFIER);
const OUT_DIR = join('docs', 'screenshots');

const timer = setTimeout(() => {
  console.error('Timed out after', TIMEOUT_MS / 1000, 's');
  process.exit(1);
}, TIMEOUT_MS);
timer.unref();

// Refuse to run if the test data folder already holds data from an interrupted run.
if (existsSync(DATA_DIR) && readdirSync(DATA_DIR).length > 0) {
  throw new Error(`Test data folder is not empty: ${DATA_DIR}\nRemove it first before running the screenshot test.`);
}

const pad = (n) => String(n).padStart(2, '0');
const localDay = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const shiftDay = (day, n) => {
  const [y, m, d] = day.split('-').map(Number);
  return localDay(new Date(y, m - 1, d + n));
};

function buildSeedData() {
  const now = new Date();
  const today = localDay(now);
  const yesterday = shiftDay(today, -1);
  const tomorrow = shiftDay(today, 1);

  const notes = [
    {
      id: 'n-release',
      title: 'Vermil 3.3 release checklist',
      body: 'Everything stays in one small Windows app with no account or server.\n[x] Projects page linked with Time Tracker\n[x] Week plan view (press 1–7 to schedule)\n[x] Levels band and badges on Home\n[ ] Publish release notes and screenshots\n[ ] Tag and sign the NSIS installer',
      html: '<h2>Overview</h2><p>Everything stays in <b>one small Windows app</b> with no account or server. Key focus: <font color="#c93410">keep the installer under 2 MB</font> and <font color="#166534">fast without a mouse</font>.</p><ul class="check"><li data-done="1">Projects page linked with Time Tracker</li><li data-done="1">Week plan view (press 1–7 to schedule)</li><li data-done="1">Levels band and badges on Home</li><li>Publish release notes and screenshots</li><li>Tag and sign the NSIS installer</li></ul><h4>Notes for next week</h4><p>Check <font color="#1d4ed8">contrast on both light and dark paper</font> before cutting the build.</p>',
      updatedAt: `${today}T08:45:00.000Z`,
      projectId: 'p-vermil',
    },
    {
      id: 'n-trip',
      title: 'Chiang Mai cafés & quiet places',
      body: 'Old City & Nimman spots to visit:\n- Akha Ama Phrasingh (morning filter coffee)\n- Graph contemporary\n- Ang Kaew reservoir walk before 08:00',
      html: '<h2>Places to visit</h2><p>Old City &amp; Nimman spots for the morning:</p><p><b>Akha Ama Phrasingh</b> — morning filter coffee near Wat Phra Singh.<br><b>Ang Kaew reservoir</b> — quiet walk before <font color="#c93410">08:00</font>.</p>',
      updatedAt: `${yesterday}T19:20:00.000Z`,
    },
    {
      id: 'n-reading',
      title: 'Design notes: calm software',
      body: 'Software should behave like a good notebook: open fast, stay quiet until asked, and keep your data in a plain file you own.',
      html: '<p>Software should behave like a <b>good notebook</b>: open fast, stay quiet until asked, and keep your data in a plain file you own.</p>',
      updatedAt: `${shiftDay(today, -3)}T14:10:00.000Z`,
    },
  ];

  const todos = [
    {
      id: 't-overdue',
      title: 'Send Q4 invoice to Acme Studio',
      due: `${yesterday}T16:00`,
      remindBefore: 60,
      repeat: null,
      noteId: null,
      projectId: 'p-acme',
      pinned: true,
      minutes: 45,
      done: false,
      createdAt: `${shiftDay(today, -4)}T09:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-review',
      title: 'Review UI typography and dark mode contrast',
      due: `${today}T10:00`,
      remindBefore: 10,
      repeat: null,
      noteId: 'n-release',
      projectId: 'p-vermil',
      pinned: true,
      minutes: 90,
      done: false,
      createdAt: `${shiftDay(today, -2)}T10:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-habit-walk',
      title: 'Morning walk & stretch',
      due: `${today}T07:30`,
      remindBefore: 0,
      repeat: 'daily',
      series: 's-walk',
      noteId: null,
      pinned: false,
      minutes: 45,
      done: false,
      createdAt: `${shiftDay(today, -10)}T07:30:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-sync',
      title: 'Sync design handoff with Mali',
      due: `${today}T14:00`,
      remindBefore: 10,
      repeat: null,
      noteId: null,
      projectId: 'p-acme',
      pinned: false,
      minutes: 60,
      done: false,
      createdAt: `${yesterday}T11:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-pack',
      title: 'Pack camera battery and charger for Chiang Mai',
      due: `${tomorrow}T18:00`,
      remindBefore: 60,
      repeat: null,
      noteId: 'n-trip',
      pinned: false,
      minutes: 30,
      done: false,
      createdAt: `${yesterday}T15:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-report',
      title: 'Prepare monthly expense summary',
      due: `${shiftDay(today, 2)}T11:00`,
      remindBefore: 60,
      repeat: null,
      noteId: null,
      pinned: false,
      minutes: 60,
      done: false,
      createdAt: `${yesterday}T16:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-unsched-1',
      title: 'Clean up old backup folders on external drive',
      due: null,
      remindBefore: null,
      repeat: null,
      noteId: null,
      pinned: true,
      minutes: 45,
      done: false,
      createdAt: `${shiftDay(today, -3)}T12:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-unsched-2',
      title: 'Draft onboarding guide for new contributors',
      due: null,
      remindBefore: null,
      repeat: null,
      noteId: 'n-release',
      projectId: 'p-vermil',
      pinned: false,
      minutes: 60,
      done: false,
      createdAt: `${shiftDay(today, -2)}T15:00:00.000Z`,
      completedAt: null,
    },
    {
      id: 't-unsched-3',
      title: 'Renew passport before spring trip',
      due: null,
      remindBefore: null,
      repeat: null,
      noteId: null,
      pinned: false,
      minutes: 60,
      done: false,
      createdAt: `${shiftDay(today, -1)}T15:00:00.000Z`,
      completedAt: null,
    },
  ];

  // Completed tasks over the last 28 days (builds the 14-day History chart, daily streaks, and Insights series)
  const doneTitles = [
    'Morning walk & stretch',
    'Write unit tests for week planner',
    'Update release feed signature check',
    'Send wireframes to client',
    'Pay fibre internet bill',
    'Review pull request #42',
  ];
  for (let i = 1; i <= 28; i++) {
    const d = shiftDay(today, -i);
    // Daily repeating walk completed every day for the past 10 days -> 10-day streak!
    if (i <= 10) {
      todos.push({
        id: `t-walk-${i}`,
        title: 'Morning walk & stretch',
        due: `${d}T07:30`,
        remindBefore: 0,
        repeat: 'daily',
        series: 's-walk',
        done: true,
        createdAt: `${d}T07:00:00.000Z`,
        completedAt: `${d}T07:45:00.000Z`,
      });
    }
    const extraCount = (i % 3) + 1;
    for (let k = 0; k < extraCount; k++) {
      todos.push({
        id: `t-done-${i}-${k}`,
        title: doneTitles[(i + k) % doneTitles.length],
        due: `${d}T11:00`,
        remindBefore: null,
        repeat: null,
        projectId: k === 0 ? 'p-vermil' : k === 1 ? 'p-acme' : null,
        done: true,
        createdAt: `${d}T09:00:00.000Z`,
        completedAt: `${d}T15:30:00.000Z`,
      });
    }
  }
  // One task already finished today
  todos.push({
    id: 't-done-today',
    title: 'Check server backups and sync status',
    due: `${today}T08:30`,
    remindBefore: null,
    repeat: null,
    projectId: 'p-vermil',
    done: true,
    createdAt: `${today}T08:00:00.000Z`,
    completedAt: `${today}T08:35:00.000Z`,
  });

  // 28 days of correlated daily data for Health, Journal, Focus, Habits and Money so Insights & Review look rich
  const water = {};
  const sleep = {};
  const weight = {};
  const journalEntries = {};
  const focusSessions = [];
  const moneyEntries = [
    { id: 'm-sal', day: `${today.slice(0, 8)}01`, kind: 'in', amount: 65000, cat: 'Salary', note: 'Monthly salary' },
    { id: 'm-div', day: shiftDay(today, -4), kind: 'in', amount: 4200, cat: 'Dividends', note: 'Quarterly dividend' },
    { id: 'm-1', day: today, kind: 'out', amount: 185, cat: 'Food', note: 'Khao soi & iced filter coffee' },
    { id: 'm-2', day: today, kind: 'out', amount: 120, cat: 'Transport', note: 'BTS & motorbike' },
    { id: 'm-3', day: yesterday, kind: 'out', amount: 1450, cat: 'Shopping', note: 'Desk lamp & USB-C cable' },
    { id: 'm-4', day: shiftDay(today, -2), kind: 'out', amount: 890, cat: 'Bills', note: 'Fibre internet' },
    { id: 'm-5', day: shiftDay(today, -3), kind: 'out', amount: 640, cat: 'Food', note: 'Fresh market & fruit' },
    { id: 'm-6', day: shiftDay(today, -5), kind: 'out', amount: 520, cat: 'Health', note: 'Pharmacy & vitamins' },
    { id: 'm-7', day: shiftDay(today, -6), kind: 'out', amount: 750, cat: 'Fun', note: 'Cinema & dinner with friends' },
  ];

  const journalNotes = [
    'Finished the Week plan layout and took a long evening walk around the park. Everything feels calm and on track.',
    'Good deep-work morning on the Acme redesign. Kept the afternoon free of meetings and read two chapters before bed.',
    'Rainy afternoon in Bangkok. Cooked dinner at home and sorted through next week’s priorities.',
    'Slept a full eight hours and noticed how much easier the morning focus sessions felt.',
  ];

  for (let i = 0; i < 28; i++) {
    const d = shiftDay(today, -i);
    const goodDay = (i % 3 !== 2);
    const hrs = goodDay ? (i % 2 === 0 ? 7.8 : 8.2) : (i % 2 === 0 ? 6.0 : 6.4);
    const mood = goodDay ? (i % 4 === 0 ? 5 : 4) : (i % 4 === 1 ? 2 : 3);
    const glasses = goodDay ? 8 : 6;
    const focusMin = goodDay ? 75 : 25;

    water[d] = i === 0 ? 6 : glasses;
    sleep[d] = hrs;
    weight[d] = Math.round((68.8 - (28 - i) * 0.04 + (i % 3) * 0.1) * 10) / 10;
    journalEntries[d] = {
      mood,
      text: i < 4 ? journalNotes[i] : goodDay ? 'Productive morning and a quiet evening walk.' : 'Busy day with back-to-back calls; going to bed early tonight.',
    };
    focusSessions.push({
      task: 't-review',
      title: 'Review UI typography and dark mode contrast',
      day: d,
      min: focusMin,
    });
    if (i > 2) {
      moneyEntries.push({
        id: `m-d-${i}`,
        day: d,
        kind: 'out',
        amount: goodDay ? 160 + (i % 4) * 20 : 420 + (i % 5) * 45,
        cat: i % 4 === 0 ? 'Transport' : 'Food',
        note: i % 4 === 0 ? 'Train pass' : 'Lunch & coffee',
      });
    }
  }

  // Habits and 26 weeks of logs for a rich heatmap
  const habits = [
    { id: 'h-read', name: 'Read 25 minutes before bed', days: [0, 1, 2, 3, 4, 5, 6], created: shiftDay(today, -180) },
    { id: 'h-water', name: 'Drink 2L of water', days: [0, 1, 2, 3, 4, 5, 6], created: shiftDay(today, -180) },
    { id: 'h-code', name: 'Write or ship one small improvement', days: [1, 2, 3, 4, 5], created: shiftDay(today, -180) },
    { id: 'h-stretch', name: 'Mobility & stretching (15 min)', days: [0, 1, 2, 3, 4, 5, 6], created: shiftDay(today, -180) },
  ];
  const habitLog = {};
  for (let i = 0; i < 180; i++) {
    const d = shiftDay(today, -i);
    if (i === 0) {
      habitLog[d] = ['h-read', 'h-water', 'h-stretch'];
    } else if (i <= 12) {
      habitLog[d] = ['h-read', 'h-water', 'h-code', 'h-stretch'];
    } else {
      const pick = [];
      if ((i * 7) % 5 !== 0) pick.push('h-read');
      if ((i * 3) % 4 !== 0) pick.push('h-water');
      if ((i * 5) % 6 !== 0) pick.push('h-code');
      if ((i * 11) % 5 !== 0) pick.push('h-stretch');
      if (pick.length) habitLog[d] = pick;
    }
  }

  const week = [];
  for (let i = -2; i <= 4; i++) week.push(shiftDay(today, i));

  return {
    todos,
    notes,
    notesMigrated: true,
    autostartSet: true,
    summaryTime: '09:00',
    summaryDay: today,
    quiet: '00:00-23:59', // silence background WinRT toasts while capturing screenshots
    backupOff: false,
    backupDay: yesterday,
    modules: {
      _on: [
        'tasks', 'notes', 'calendar', 'pomodoro', 'money', 'habits', 'subs', 'shopping',
        'health', 'library', 'people', 'bills', 'travel', 'time', 'projects', 'plan',
        'xp', 'widget', 'countdown', 'journal', 'goals', 'stocks', 'auto', 'insights',
        'assistant', 'review',
      ],
      pomodoro: {
        work: 25,
        rest: 5,
        sessions: focusSessions,
        run: null,
      },
      money: {
        cur: '฿',
        entries: moneyEntries,
        budgets: { Food: 6500, Transport: 2500, Shopping: 2000 },
        chips: { out: ['Coffee', 'Books'], in: ['Freelance'] },
        alerted: {},
      },
      habits: {
        habits,
        log: habitLog,
      },
      subs: {
        subs: [
          { id: 'sb-1', name: 'GitHub Copilot', amount: 350, cycle: 'month', next: shiftDay(today, 2), anchor: 15 },
          { id: 'sb-2', name: 'Spotify Duo', amount: 209, cycle: 'month', next: shiftDay(today, 6), anchor: 19 },
          { id: 'sb-3', name: 'iCloud+ 200 GB', amount: 99, cycle: 'month', next: shiftDay(today, 12), anchor: 25 },
          { id: 'sb-4', name: 'Domain & DNS renewal', amount: 1200, cycle: 'year', next: shiftDay(today, 45), anchor: 28 },
        ],
        alerted: {},
      },
      shopping: {
        items: [
          { id: 'sh-1', name: 'Oat milk (2 cartons)', done: false },
          { id: 'sh-2', name: 'Chiang Mai roast coffee beans', done: false },
          { id: 'sh-3', name: 'Fresh basil & limes', done: false },
          { id: 'sh-4', name: 'Free-range eggs', done: true },
          { id: 'sh-5', name: 'Sourdough bread', done: true },
        ],
        history: { 'Jasmine rice': 9, 'Avocados': 7, 'Greek yogurt': 6, 'Olive oil': 5, 'Garlic': 5, 'Bananas': 4 },
        bought: { [today]: 2, [yesterday]: 4 },
        meals: {
          [today]: { b: 'Sourdough toast & soft-boiled eggs', l: 'Khao soi gai', d: 'Grilled salmon: salmon, asparagus, lemon' },
          [tomorrow]: { b: 'Overnight oats with mango', l: 'Pad kra pao', d: 'Green curry with jasmine rice' },
          [shiftDay(today, 2)]: { b: 'Greek yogurt & granola', l: 'Som tum & sticky rice', d: 'Homemade pasta' },
        },
      },
      health: {
        water,
        sleep,
        weight,
        workouts: [
          { id: 'wo-1', day: today, kind: 'Run', minutes: 35 },
          { id: 'wo-2', day: yesterday, kind: 'Gym', minutes: 45 },
          { id: 'wo-3', day: shiftDay(today, -3), kind: 'Yoga', minutes: 30 },
          { id: 'wo-4', day: shiftDay(today, -5), kind: 'Cycle', minutes: 50 },
        ],
        meds: [
          { id: 'med-d', name: 'Vitamin D3', times: ['08:00'], days: [0, 1, 2, 3, 4, 5, 6] },
          { id: 'med-mg', name: 'Magnesium glycinate', times: ['21:00'], days: [0, 1, 2, 3, 4, 5, 6] },
        ],
        taken: { [today]: { 'med-d@08:00': true } },
        announced: {},
        waterGoal: 8,
        sleepGoal: 7.5,
      },
      library: {
        items: [
          { id: 'lb-1', title: 'The Pragmatic Programmer', kind: 'Book', status: 'now', note: 'David Thomas & Andrew Hunt', rating: 0, finished: '' },
          { id: 'lb-2', title: 'Severance (Season 2)', kind: 'Series', status: 'now', note: 'Dan Erickson', rating: 0, finished: '' },
          { id: 'lb-3', title: 'Hades II', kind: 'Game', status: 'now', note: 'Supergiant Games', rating: 0, finished: '' },
          { id: 'lb-4', title: 'Designing Data-Intensive Applications', kind: 'Book', status: 'want', note: 'Martin Kleppmann', rating: 0, finished: '' },
          { id: 'lb-5', title: 'Dune: Part Two', kind: 'Film', status: 'done', note: 'Denis Villeneuve', rating: 5, finished: shiftDay(today, -10) },
          { id: 'lb-6', title: 'A Philosophy of Software Design', kind: 'Book', status: 'done', note: 'John Ousterhout', rating: 5, finished: shiftDay(today, -24) },
        ],
      },
      people: {
        people: [
          {
            id: 'pp-1',
            name: 'Mali Wattana',
            birthday: `1994-${shiftDay(today, 5).slice(5)}`,
            showAge: true,
            every: 14,
            last: shiftDay(today, -4),
            note: 'Lead designer at Acme · loves specialty pour-over coffee',
            gifts: 'Hario V60 copper dripper\nBotanical sketchbook',
          },
          {
            id: 'pp-2',
            name: 'Nontawat S.',
            birthday: `1991-${shiftDay(today, 22).slice(5)}`,
            showAge: true,
            every: 14,
            last: shiftDay(today, -18),
            note: 'University friend · trail runner in Chiang Mai',
            gifts: 'Ultralight running cap\nLocal honey set',
          },
          {
            id: 'pp-3',
            name: 'Mom',
            birthday: `1965-${shiftDay(today, 40).slice(5)}`,
            showAge: false,
            every: 7,
            last: yesterday,
            note: 'Sunday family dinner',
            gifts: 'Jasmine tea tin\nSilk scarf',
          },
        ],
        alerted: {},
      },
      bills: {
        bills: [
          { id: 'bl-1', name: 'MEA Electricity', cycle: 'month', next: shiftDay(today, 2), amount: 1850, note: 'CA 0200145829 · blue utility folder', paid: [{ day: shiftDay(today, -28), amount: 1790 }] },
          { id: 'bl-2', name: 'AIS Fibre Internet', cycle: 'month', next: shiftDay(today, 9), amount: 890, note: 'Account 8801-4421 · auto-receipt in email', paid: [{ day: shiftDay(today, -21), amount: 890 }] },
          { id: 'bl-3', name: 'Condo Common Fee', cycle: 'quarter', next: shiftDay(today, 25), amount: 12000, note: 'Juristic office receipt binder', paid: [{ day: shiftDay(today, -65), amount: 12000 }] },
          { id: 'bl-4', name: 'Home & Contents Insurance', cycle: 'year', next: shiftDay(today, 90), amount: 6400, note: 'Policy #TH-88412 · cabinet drawer 2', paid: [{ day: shiftDay(today, -275), amount: 6400 }] },
        ],
        alerted: {},
      },
      travel: {
        trips: [
          {
            id: 'tv-1',
            name: 'Chiang Mai Autumn Trip',
            from: shiftDay(today, 6),
            to: shiftDay(today, 9),
            budget: 15000,
            packing: [
              { id: 'pk-1', text: 'ID card & boarding pass', done: true },
              { id: 'pk-2', text: 'Mirrorless camera & 35mm lens', done: true },
              { id: 'pk-3', text: 'Light fleece jacket for Doi Inthanon', done: false },
              { id: 'pk-4', text: 'Phone charger & power bank', done: false },
              { id: 'pk-5', text: 'Running shoes', done: false },
            ],
            plan: {
              [shiftDay(today, 6)]: 'Morning flight to CNX · check in at Old City boutique hotel · Khao soi lunch',
              [shiftDay(today, 7)]: 'Sunrise at Doi Inthanon & Kew Mae Pan trail · Nimman dinner',
              [shiftDay(today, 8)]: 'Baan Kang Wat craft village · Saturday walking street',
              [shiftDay(today, 9)]: 'Morning café at Akha Ama · afternoon flight home',
            },
            costs: [
              { id: 'cs-1', label: 'Round-trip flights', amount: 3850 },
              { id: 'cs-2', label: '3 nights boutique hotel', amount: 5400 },
              { id: 'cs-3', label: 'Car rental (1 day)', amount: 1200 },
            ],
          },
        ],
      },
      time: {
        projects: [
          { id: 'p-vermil', name: 'Vermil Desktop App', client: 'Internal', rate: 1800 },
          { id: 'p-acme', name: 'Acme Design System', client: 'Acme Studio', rate: 2200 },
          { id: 'p-docs', name: 'Technical Writing & Docs', client: 'Editorial', rate: 1500 },
        ],
        entries: [
          { id: 'te-1', project: 'p-vermil', desc: 'Refine Week plan keyboard navigation', notes: 'Added 1–7 day placement and U to unschedule.', start: `${today}T08:00:00`, end: `${today}T09:45:00` },
          { id: 'te-2', project: 'p-acme', desc: 'Component tokens & dark theme review', notes: 'Checked WCAG 4.5:1 text contrast across all surfaces.', start: `${today}T10:15:00`, end: `${today}T12:00:00` },
          { id: 'te-3', project: 'p-vermil', desc: 'Levels streak & badge calculation', notes: 'Tested daily caps and streak bonus rules.', start: `${yesterday}T09:00:00`, end: `${yesterday}T11:30:00` },
          { id: 'te-4', project: 'p-acme', desc: 'Interactive prototype handoff', notes: 'Prepared spec sheet for engineering team.', start: `${yesterday}T13:30:00`, end: `${yesterday}T16:15:00` },
          { id: 'te-5', project: 'p-docs', desc: 'Update module guides & shortcut tables', notes: 'Reviewed all 31 docs pages.', start: `${shiftDay(today, -2)}T10:00:00`, end: `${shiftDay(today, -2)}T12:30:00` },
        ],
        running: null,
      },
      xp: {
        total: 740,
        day: today,
        today: { tasks: 20, habits: 24, focus: 15 },
        keys: { 'task:t-done-today': today },
        log: [
          { day: today, label: 'Focus session', pts: 15 },
          { day: today, label: 'Habit kept', pts: 8 },
          { day: today, label: 'Task done', pts: 10 },
          { day: today, label: 'Streak bonus: 7 days', pts: 7 },
          { day: yesterday, label: 'Journal written', pts: 10 },
          { day: yesterday, label: 'Workout', pts: 15 },
        ],
        counts: { tasks: 32, habits: 48, focus: 14, journal: 18, workout: 11, bills: 4 },
        minutes: 840,
        streak: { day: today, len: 7, best: 14 },
        badges: {
          first: shiftDay(today, -25),
          tasks10: shiftDay(today, -18),
          habits30: shiftDay(today, -6),
          focus10: shiftDay(today, -4),
          time10h: shiftDay(today, -3),
          journal7: shiftDay(today, -12),
          workout10: yesterday,
          streak3: shiftDay(today, -10),
          streak7: today,
        },
      },
      countdown: {
        events: [
          { id: 'cd-1', title: 'Mali’s birthday', day: `1994-${shiftDay(today, 5).slice(5)}`, yearly: true },
          { id: 'cd-2', title: 'Chiang Mai Autumn Trip', day: shiftDay(today, 6), yearly: false },
          { id: 'cd-3', title: 'Vermil 3.4 milestone', day: shiftDay(today, 18), yearly: false },
          { id: 'cd-4', title: 'New Year’s Day', day: `${Number(today.slice(0, 4)) + 1}-01-01`, yearly: true },
        ],
        alerted: {},
      },
      journal: {
        entries: journalEntries,
      },
      goals: {
        goals: [
          { id: 'gl-1', title: 'Complete 15 tasks this week', source: 'tasks.week', target: 15, direction: 'atleast', current: 0 },
          { id: 'gl-2', title: 'Focus at least 300 minutes this week', source: 'pomodoro.week', target: 300, direction: 'atleast', current: 0 },
          { id: 'gl-3', title: 'Keep monthly spending under ฿15,000', source: 'money.out', target: 15000, direction: 'atmost', current: 0 },
          { id: 'gl-4', title: 'Emergency fund target (฿)', source: 'manual', target: 100000, direction: 'atleast', current: 78500 },
        ],
      },
      stocks: {
        items: [
          { symbol: 'NVDA', name: 'NVIDIA Corporation', shares: 15, cost: 112.40 },
          { symbol: 'AAPL', name: 'Apple Inc.', shares: 20, cost: 198.50 },
          { symbol: 'MSFT', name: 'Microsoft Corporation', shares: 8, cost: 405.00 },
          { symbol: 'TSLA', name: 'Tesla, Inc.', shares: 0, cost: 0 },
        ],
        quotes: {
          NVDA: {
            symbol: 'NVDA', name: 'NVIDIA Corporation', currency: 'USD',
            price: 138.60, prevClose: 134.20, change: 4.40, changePct: 3.28,
            prePrice: 136.10, prePct: 1.42, postPrice: 139.45, postPct: 0.61,
            lastPrice: 139.45, lastTime: Math.floor(Date.now() / 1000) - 120, lastIn: 'POST', state: 'POST',
          },
          AAPL: {
            symbol: 'AAPL', name: 'Apple Inc.', currency: 'USD',
            price: 228.40, prevClose: 225.00, change: 3.40, changePct: 1.51,
            prePrice: 226.20, prePct: 0.53, postPrice: 228.90, postPct: 0.22,
            lastPrice: 228.90, lastTime: Math.floor(Date.now() / 1000) - 90, lastIn: 'POST', state: 'POST',
          },
          MSFT: {
            symbol: 'MSFT', name: 'Microsoft Corporation', currency: 'USD',
            price: 426.80, prevClose: 429.50, change: -2.70, changePct: -0.63,
            prePrice: 428.10, prePct: -0.33, postPrice: 427.20, postPct: 0.09,
            lastPrice: 427.20, lastTime: Math.floor(Date.now() / 1000) - 180, lastIn: 'POST', state: 'POST',
          },
          TSLA: {
            symbol: 'TSLA', name: 'Tesla, Inc.', currency: 'USD',
            price: 254.10, prevClose: 248.00, change: 6.10, changePct: 2.46,
            prePrice: 250.40, prePct: 0.97, postPrice: 255.00, postPct: 0.35,
            lastPrice: 255.00, lastTime: Math.floor(Date.now() / 1000) - 60, lastIn: 'POST', state: 'POST',
          },
        },
        at: Date.now() - 45_000,
        page: 'portfolio',
      },
      auto: {
        rules: [
          {
            id: 'au-1',
            on: true,
            when: { type: 'daily', time: '08:30', days: [1, 2, 3, 4, 5] },
            do: { type: 'task', text: 'Review today’s top 3 priorities', due: 'today', time: '09:00' },
            last: today,
            runs: 14,
            at: `${today}T08:30:00.000Z`,
          },
          {
            id: 'au-2',
            on: true,
            when: { type: 'bill-paid', text: '' },
            do: { type: 'toast', text: 'Recorded {title} in Expenses' },
            last: shiftDay(today, -5),
            runs: 4,
            at: `${shiftDay(today, -5)}T14:20:00.000Z`,
          },
          {
            id: 'au-3',
            on: true,
            when: { type: 'over-budget', text: 'Food' },
            do: { type: 'task', text: 'Check Food budget for the rest of the month', due: 'today', time: '18:00' },
            last: '',
            runs: 1,
            at: `${shiftDay(today, -12)}T19:00:00.000Z`,
          },
        ],
      },
      assistant: {
        share: ['tasks', 'notes', 'money', 'habits', 'calendar', 'health'],
        period: 'week',
        brief: {
          on: true,
          day: today,
          text: 'Today you have 3 tasks due, starting with the typography & dark mode review at 10:00. One invoice for Acme Studio is overdue from yesterday. You are on a 7-day XP streak and have 3 habits done today.',
        },
        log: [
          {
            role: 'user',
            text: 'How is my week looking, and can you add a task to call the dentist tomorrow at 10:00?',
          },
          {
            role: 'model',
            text: 'You have 11 tasks finished over the last 7 days and 4 scheduled for the rest of this week, including the Acme design handoff today at 14:00. Your Food budget is well within its ฿6,500 limit.\n\nI can add the dentist appointment for tomorrow morning:',
            actions: [
              {
                type: 'task',
                title: 'Call the dentist',
                due: `${tomorrow}T10:00`,
                state: 'pending',
              },
            ],
          },
        ],
      },
    },
  };
}

// Minimal Chrome DevTools Protocol client over native WebSocket
class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(String(ev.data));
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
        else resolve(msg.result);
      }
    });
  }
  static async connect(url) {
    const ws = new WebSocket(url);
    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    });
    return new CDP(ws);
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval error: ${res.exceptionDetails.text} (${expression.slice(0, 80)})`);
    }
    return res.result?.value;
  }
  async screenshot(file) {
    await this.eval('new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))');
    const { data } = await this.send('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(data, 'base64');
    if (buf.length < 2000 || buf[0] !== 0x89 || buf[1] !== 0x50) {
      throw new Error(`Invalid screenshot buffer for ${file} (${buf.length} bytes)`);
    }
    const path = join(OUT_DIR, file);
    writeFileSync(path, buf);
    console.log(`  ✓ ${path} (${Math.round(buf.length / 1024)} KB)`);
  }
  close() {
    try { this.ws.close(); } catch {}
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForTargets() {
  for (let i = 0; i < 100; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json`);
      if (res.ok) {
        const list = await res.json();
        const main = list.find((t) => t.type === 'page' && t.url.endsWith('index.html') || (t.type === 'page' && t.title === 'Vermil' && !t.url.includes('widget') && !t.url.includes('quick')));
        const quick = list.find((t) => t.type === 'page' && t.url.includes('quick.html'));
        const widget = list.find((t) => t.type === 'page' && t.url.includes('widget.html'));
        if (main && quick && widget) return { main, quick, widget };
      }
    } catch {}
    await sleep(150);
  }
  throw new Error('Timed out waiting for WebView2 DevTools targets');
}

const testConfig = {
  productName: 'Vermil Test',
  identifier: IDENTIFIER,
  app: {
    withGlobalTauri: true,
    windows: [
      {
        label: 'main',
        title: 'Vermil',
        decorations: false,
        visible: false,
        width: 1120,
        height: 800,
        minWidth: 400,
        minHeight: 520,
        backgroundColor: '#f4f1ea',
        additionalBrowserArgs: `--remote-debugging-port=${PORT}`,
      },
      {
        label: 'quick',
        url: 'quick.html',
        title: 'Quick add',
        width: 820,
        height: 80,
        decorations: false,
        resizable: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        visible: false,
        center: true,
        backgroundColor: '#12110f',
        additionalBrowserArgs: `--remote-debugging-port=${PORT}`,
      },
      {
        label: 'widget',
        url: 'widget.html',
        title: 'Vermil today',
        width: 300,
        height: 420,
        minWidth: 240,
        minHeight: 160,
        decorations: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        visible: false,
        backgroundColor: '#f4f1ea',
        additionalBrowserArgs: `--remote-debugging-port=${PORT}`,
      },
    ],
  },
};

const cfgPath = join('src-tauri', 'target', 'tauri.screenshots.conf.json');
let appProc = null;

try {
  mkdirSync(join('src-tauri', 'target'), { recursive: true });
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(cfgPath, JSON.stringify(testConfig, null, 2));

  if (!process.argv.includes('--no-build')) {
    console.log('Building test binary...');
    execSync(`npx tauri build --debug --no-bundle --config "${cfgPath}"`, { stdio: 'inherit' });
  }

  // Seed data and dummy Assistant key so every module has realistic content immediately at start.
  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(join(DATA_DIR, 'todos.json'), JSON.stringify(buildSeedData(), null, 2));
  writeFileSync(join(DATA_DIR, 'assistant.json'), JSON.stringify({
    key: 'AIzaSyDemoKeyForScreenshotsOnly000000000',
    model: 'gemini-2.5-flash',
  }));

  const bin = join('src-tauri', 'target', 'debug', 'vermil-tasks.exe');
  console.log('Launching test copy...');
  appProc = spawn(bin, [], { stdio: 'ignore' });

  const targets = await waitForTargets();
  const main = await CDP.connect(targets.main.webSocketDebuggerUrl);
  const quick = await CDP.connect(targets.quick.webSocketDebuggerUrl);
  const widget = await CDP.connect(targets.widget.webSocketDebuggerUrl);

  await main.send('Page.enable');
  await main.send('Runtime.enable');
  await main.send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await main.send('Emulation.setDeviceMetricsOverride', { width: 1120, height: 800, deviceScaleFactor: 1, mobile: false });
  await main.send('Emulation.setEmulatedMedia', {
    features: [
      { name: 'prefers-color-scheme', value: 'light' },
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ],
  });

  // Wait for all 26 modules to finish starting
  await main.eval(`(async () => {
    for (let i = 0; i < 100; i++) {
      if (typeof started !== 'undefined' && started.size >= 26) break;
      await new Promise(r => setTimeout(r, 100));
    }
    // Reset shared WebView profile localStorage to clean defaults
    localStorage.clear();
    localStorage.setItem('packs-open', JSON.stringify(['work']));
    setPrefs({ updateCheck: false, motion: 'off' });
    theme = '';
    delete document.documentElement.dataset.theme;
    showTheme();
    applyLook(normalLook({}));
    $('update').hidden = true;
    quickTaken = false;
    $('shortcuts').classList.remove('warn');
    $('shortcuts').title = '';
    const realInvoke = window.__TAURI__.core.invoke;
    window.__TAURI__.core.invoke = (cmd, args) => cmd === 'quick_shortcut' ? Promise.resolve(true) : realInvoke(cmd, args);
    // Hide the floating widget window while capturing the main window
    await invoke('widget_enable', { on: false });
    // Replace live network calls in Stocks with deterministic quotes
    if (typeof stocksApi !== 'undefined') {
      stocksApi.online = async () => true;
      stocksApi.quotes = async () => ({ quotes: Object.values(moduleData.stocks.quotes), failed: [] });
      stocksApi.search = async () => [
        { symbol: 'GOOGL', name: 'Alphabet Inc.', exchange: 'NASDAQ', kind: 'EQUITY' },
        { symbol: 'AMD', name: 'Advanced Micro Devices, Inc.', exchange: 'NASDAQ', kind: 'EQUITY' },
      ];
    }
    openPacks = new Set(['work']);
    layoutTabs();
    renderHome();
  })()`);
  await sleep(250);

  console.log('Capturing screenshots...');

  // 1. Home (showing the Today strip and the open Work package with module cards)
  await main.eval(`(async () => {
    await setView('home');
    openPacks = new Set(['work']);
    renderHome();
    document.getElementById('pack-work')?.scrollIntoView({ block: 'center' });
  })()`);
  await sleep(150);
  await main.screenshot('home.png');

  // 2. Levels (at top of Home with Recent XP and Badges expanded)
  await main.eval(`(() => {
    document.getElementById('home-view').scrollTop = 0;
    for (const d of document.querySelectorAll('#xp-band details')) d.open = true;
  })()`);
  await sleep(150);
  await main.screenshot('levels.png');
  await main.eval(`(() => {
    for (const d of document.querySelectorAll('#xp-band details')) d.open = false;
  })()`);

  // 3. Tasks (with linked note expanded on the review task)
  await main.eval(`(async () => {
    await setView('tasks');
    openNotes.add('t-review');
    render();
  })()`);
  await sleep(200);
  await main.screenshot('tasks.png');

  // 4. Tasks in Dark mode (History tab showing the 14-day completion chart)
  await main.send('Emulation.setEmulatedMedia', {
    features: [
      { name: 'prefers-color-scheme', value: 'dark' },
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ],
  });
  await main.eval(`(() => {
    document.getElementById('tab-history')?.click();
  })()`);
  await sleep(200);
  await main.screenshot('tasks-dark.png');
  await main.send('Emulation.setEmulatedMedia', {
    features: [
      { name: 'prefers-color-scheme', value: 'light' },
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ],
  });
  await main.eval(`(() => {
    document.getElementById('tab-pending')?.click();
  })()`);
  await sleep(150);

  // 5. Focus timer dialog (opened on the review task, started and paused so the chip + timer show)
  await main.eval(`(() => {
    document.querySelector('#list .act-focus')?.click();
    document.getElementById('fo-start')?.click();
    document.getElementById('fo-pause')?.click();
  })()`);
  await sleep(150);
  await main.screenshot('focus-timer.png');
  await main.eval(`(() => {
    document.getElementById('fo-stop')?.click();
    document.getElementById('focus-dlg')?.close();
    layoutTabs();
  })()`);
  await sleep(100);

  // 6. Notes (rich editor with sizes, colours, checklist & linked task chip)
  await main.eval(`(async () => {
    await setView('notes');
    await registry.notes.open('n-release', 'body');
  })()`);
  await sleep(200);
  await main.screenshot('notes.png');

  // 7. Calendar (Month view + Day panel)
  await main.eval(`(async () => {
    await setView('calendar');
    setCalMode('month');
  })()`);
  await sleep(200);
  await main.screenshot('calendar.png');

  // 8. Calendar (Hour-by-hour Day view)
  await main.eval(`(() => {
    setCalMode('day');
  })()`);
  await sleep(200);
  await main.screenshot('calendar-day.png');
  await main.eval(`setCalMode('month')`);

  // 9. Expenses (Money)
  await main.eval(`setView('money')`);
  await sleep(200);
  await main.screenshot('expenses.png');

  // 10. Habits (with 26-week heatmap)
  await main.eval(`setView('habits')`);
  await sleep(200);
  await main.screenshot('habits.png');

  // 11. Subscriptions
  await main.eval(`setView('subs')`);
  await sleep(200);
  await main.screenshot('subscriptions.png');

  // 12. Shopping & Meals
  await main.eval(`setView('shopping')`);
  await sleep(200);
  await main.screenshot('shopping.png');

  // 13. Health
  await main.eval(`setView('health')`);
  await sleep(200);
  await main.screenshot('health.png');

  // 14. Library
  await main.eval(`setView('library')`);
  await sleep(200);
  await main.screenshot('library.png');

  // 15. People
  await main.eval(`setView('people')`);
  await sleep(200);
  await main.screenshot('people.png');

  // 16. Home & Bills
  await main.eval(`setView('bills')`);
  await sleep(200);
  await main.screenshot('bills.png');

  // 17. Travel
  await main.eval(`setView('travel')`);
  await sleep(200);
  await main.screenshot('travel.png');

  // 18. Time Tracker
  await main.eval(`setView('time')`);
  await sleep(200);
  await main.screenshot('time-tracker.png');

  // 19. Projects
  await main.eval(`setView('projects')`);
  await sleep(200);
  await main.screenshot('projects.png');

  // 20. Week plan
  await main.eval(`setView('plan')`);
  await sleep(200);
  await main.screenshot('week-plan.png');

  // 21. Countdown
  await main.eval(`setView('countdown')`);
  await sleep(200);
  await main.screenshot('countdown.png');

  // 22. Journal
  await main.eval(`setView('journal')`);
  await sleep(200);
  await main.screenshot('journal.png');

  // 23. Goals
  await main.eval(`setView('goals')`);
  await sleep(200);
  await main.screenshot('goals.png');

  // 24. Stocks (My stocks / Portfolio page)
  await main.eval(`(async () => {
    await setView('stocks');
    document.querySelector('.st-page-btn[data-page="portfolio"]')?.click();
  })()`);
  await sleep(250);
  await main.screenshot('stocks.png');

  // 25. Stocks (Watch page)
  await main.eval(`(() => {
    document.querySelector('.st-page-btn[data-page="watch"]')?.click();
  })()`);
  await sleep(200);
  await main.screenshot('stocks-watch.png');

  // 26. Automations
  await main.eval(`setView('auto')`);
  await sleep(200);
  await main.screenshot('automations.png');

  // 27. Insights
  await main.eval(`setView('insights')`);
  await sleep(200);
  await main.screenshot('insights.png');

  // 28. Assistant
  await main.eval(`setView('assistant')`);
  await sleep(200);
  await main.screenshot('assistant.png');

  // 29. Weekly Review
  await main.eval(`setView('review')`);
  await sleep(200);
  await main.screenshot('review.png');

  // 30. Settings
  await main.eval(`setView('settings')`);
  await sleep(200);
  await main.screenshot('settings.png');

  // 31. Command palette (with unit conversion + matched tasks/commands)
  await main.eval(`(async () => {
    await setView('tasks');
    openPalette();
    const q = document.getElementById('pal-q');
    q.value = '12 km to mi';
    q.dispatchEvent(new Event('input'));
  })()`);
  await sleep(150);
  await main.screenshot('command-palette.png');
  await main.eval(`document.getElementById('pal')?.close()`);
  await sleep(100);

  // 32. Keyboard shortcuts dialog
  await main.eval(`openShortcuts()`);
  await sleep(150);
  await main.screenshot('shortcuts.png');
  await main.eval(`document.getElementById('keys')?.close()`);
  await sleep(100);

  // 33. Today widget window (300x420)
  await widget.send('Page.enable');
  await widget.send('Runtime.enable');
  await widget.send('Emulation.setDeviceMetricsOverride', { width: 300, height: 420, deviceScaleFactor: 1, mobile: false });
  await main.eval(`(async () => {
    await invoke('widget_set', { tiles: JSON.stringify(todayTiles()) });
    await invoke('widget_enable', { on: true });
  })()`);
  await widget.eval(`(async () => {
    const tiles = await invoke('widget_get');
    show(tiles);
  })()`);
  await sleep(200);
  await widget.screenshot('today-widget.png');
  await main.eval(`invoke('widget_enable', { on: false })`);

  // 34. Quick bar window (820x80)
  await quick.send('Page.enable');
  await quick.send('Runtime.enable');
  await quick.send('Emulation.setDeviceMetricsOverride', { width: 820, height: 80, deviceScaleFactor: 1, mobile: false });
  await quick.eval(`(() => {
    setMode('task');
    input.value = 'Send contract to Acme tomorrow 9am';
    updateHint();
  })()`);
  await sleep(200);
  await quick.screenshot('quick-bar.png');
  await quick.eval(`reset()`);

  main.close();
  quick.close();
  widget.close();

  console.log('\nAll 34 screenshots captured in docs/screenshots/.');
} finally {
  if (appProc) {
    try { appProc.kill(); } catch {}
    try { execSync(`taskkill /PID ${appProc.pid} /T /F`, { stdio: 'ignore' }); } catch {}
  }
  await sleep(400);
  if (existsSync(DATA_DIR)) {
    try { rmSync(DATA_DIR, { recursive: true, force: true }); } catch {}
  }
  if (existsSync(cfgPath)) {
    try { rmSync(cfgPath, { force: true }); } catch {}
  }
}
