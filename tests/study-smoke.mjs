// Windows WebView2 smoke test. Run with: node tests/study-smoke.mjs
import assert from 'node:assert/strict';
import { execSync, spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, realpathSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const identifier = 'com.vermil.tasks.test';
const dataDir = join(realpathSync(process.env.APPDATA), identifier);
const port = 9347;
const configPath = join(tmpdir(), `vermil-study-${randomUUID()}.conf.json`);
const dataFile = join(dataDir, 'todos.json');
const browserUrl = `http://127.0.0.1:${port}/json/list`;
let app;
let socket;
let ownsData = false;
let ownsConfig = false;

function cleanup() {
  socket?.close();
  app?.kill();
  if (ownsConfig) rmSync(configPath, { force: true });
  if (ownsData && existsSync(dataDir) && realpathSync(dataDir).toLowerCase() === dataDir.toLowerCase()) {
    rmSync(dataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
}

async function until(fn, label, timeout = 15000) {
  const end = Date.now() + timeout;
  do {
    const result = await fn();
    if (result) return result;
    await delay(70);
  } while (Date.now() < end);
  throw new Error('Timed out waiting for ' + label);
}

try {
  assert.ok(!existsSync(dataDir) || !readdirSync(dataDir).length, 'Test data directory must be empty');
  const base = JSON.parse(readFileSync('src-tauri/tauri.conf.json', 'utf8'));
  writeFileSync(configPath, JSON.stringify({
    identifier,
    productName: 'Vermil Study Test',
    app: { windows: base.app.windows.map((window) => ({ ...window, additionalBrowserArgs: `--remote-debugging-port=${port}` })) },
  }), { flag: 'wx' });
  ownsConfig = true;
  execSync(`npx tauri build --debug --no-bundle --config "${configPath}"`, { stdio: 'inherit', timeout: 180000 });

  mkdirSync(dataDir, { recursive: true });
  ownsData = true;
  const cards = Array.from({ length: 22 }, (_, i) => ({
    id: `card-${i}`, front: `Prompt ${i}`, back: `Answer ${i}`, pos: 'n.',
    deck: i < 12 ? 'Sample A' : 'Sample B', next: '2000-01-01', reviews: 0,
  }));
  writeFileSync(dataFile, JSON.stringify({
    todos: [], notes: [], autostart_set: true, backup_on: false, summary_time: '',
    modules: { _on: [], _guide: true, cards: { cards, newLimit: 20 } },
  }));
  app = spawn(join('src-tauri', 'target', 'debug', 'vermil-tasks.exe'), [], { stdio: 'ignore', windowsHide: true });
  const target = await until(async () => {
    const resp = await fetch(browserUrl, { signal: AbortSignal.timeout(1000) }).catch(() => null);
    return resp && (await resp.json()).find((page) => page.type === 'page' && !/(quick|widget)\.html/.test(page.url) && /tauri\.localhost/.test(page.url));
  }, 'test WebView');
  const deadline = setTimeout(() => { cleanup(); process.exit(1); }, 60000);
  deadline.unref();
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });
  let sequence = 0;
  const requests = new Map();
  const errors = [];
  socket.addEventListener('message', ({ data }) => {
    const msg = JSON.parse(data);
    if (msg.id && requests.has(msg.id)) requests.get(msg.id)(msg);
    if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails);
  });
  function send(method, params = {}) {
    const id = ++sequence;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => { requests.delete(id); reject(new Error(method + ' timed out')); }, 5000);
      requests.set(id, (msg) => {
        clearTimeout(timeout);
        requests.delete(id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      });
      socket.send(JSON.stringify({ id, method, params }));
    });
  }
  async function evaluate(expression) {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  }
  async function click(selector) {
    const point = await evaluate(`(() => {
      const el = document.querySelector(${JSON.stringify(selector)});
      if (!el || !el.getClientRects().length) return null;
      el.scrollIntoView({ block: 'center' });
      const r = el.getBoundingClientRect();
      return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
    })()`);
    assert.ok(point, 'Expected visible control: ' + selector);
    for (const type of ['mousePressed', 'mouseReleased']) await send('Input.dispatchMouseEvent', { ...point, type, button: 'left', clickCount: 1 });
  }
  const key = async (code, key) => {
    for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, code, key });
  };
  const saved = () => JSON.parse(readFileSync(dataFile, 'utf8')).modules;
  const front = () => evaluate("document.querySelector('#study-session .fc-card-front')?.textContent");
  const choose = async (id, value) => {
    const wrap = `.study-field:has(#study-${id})`;
    await click(wrap + ' .dd-btn');
    await click(wrap + ` .dd-list li:nth-child(${value})`);
    assert.equal(await evaluate(`document.querySelector(${JSON.stringify(wrap + ' .dd-list')}).hidden`), true);
  };

  await send('Runtime.enable');
  await send('Emulation.setFocusEmulationEnabled', { enabled: true });
  await until(() => evaluate("typeof started !== 'undefined' && !!$('card-study')"), 'Home cards');
  assert.equal(await evaluate("!!$('study-view') || !!$('script-study') || !!$('script-fsrs7')"), false);
  await evaluate('localStorage.clear()');
  await send('Emulation.setDeviceMetricsOverride', { width: 1120, height: 800, deviceScaleFactor: 1, mobile: false });
  if (!await evaluate("$('pack-smart').open")) await click('#pack-smart > summary');
  await click('#card-study .mod-add');
  await until(() => evaluate("!!$('view-study') && !!$('view-cards') && !!$('study-test')"), 'independent Study and Cards tabs');
  assert.equal(await evaluate("!!$('view-notes')"), false);
  await until(() => evaluate("!!$('tile-study') && !$('tile-cards')"), 'Today strip links to Study');
  await click('#view-study');
  await until(() => evaluate("$('view-study').ariaSelected === 'true' && !$('study-test').disabled"), 'Study available');
  assert.deepEqual(await evaluate("[...$('study-size').options].map(o => +o.value)"), [10, 20, 50, 100, 200]);
  await choose('deck', 2);
  await choose('size', 5);
  assert.match(await evaluate("$('study-available').textContent"), /12 cards/);
  await click('#study-test');
  assert.match(await evaluate("document.querySelector('.study-progress span').textContent"), /Test · 1 \/ 12/);
  await click('.study-progress button');
  await choose('size', 1);
  await click('#study-test');
  const seen = new Set();
  for (let i = 0; i < 10; i++) {
    const prompt = await front();
    const index = Number(prompt.match(/Prompt (\d+)/)[1]);
    assert.ok(index < 12 && !seen.has(index));
    seen.add(index);
    assert.equal(await evaluate("!!document.querySelector('#study-session .fc-card-back')"), false);
    if (i % 2) await key('Space', ' ');
    else await click('#study-reveal');
    assert.equal(await front(), prompt);
    assert.equal(await evaluate("document.querySelector('#study-session .fc-card-back').textContent"), `Answer ${index}`);
    if (i % 2) await key('Digit3', '3');
    else await click('#study-session .fc-grade.good');
    await until(async () => await front() !== prompt, 'saved rating and next card');
  }
  assert.match(await evaluate("$('study-result').textContent"), /Test complete.*10 cards rated.*Good 10/);
  assert.equal(saved().cards.cards.filter((card) => card.memory?.version === 7 && card.dueAt > card.reviewedAt).length, 10);
  await send('Emulation.setDeviceMetricsOverride', { width: 540, height: 700, deviceScaleFactor: 1, mobile: false });
  assert.ok(await evaluate("$('study-view').scrollWidth <= $('study-view').clientWidth"));
  await click('#study-due');
  assert.match(await evaluate("document.querySelector('.study-progress span').textContent"), /Review · 1 \/ 2/);
  await click('.study-progress button');
  await click('#view-home');
  if (!await evaluate("$('pack-smart').open")) await click('#pack-smart > summary');
  await click('#card-study .mod-remove');
  await until(() => evaluate("!$('view-study') && !$('study-view') && !$('style-study')"), 'Study removed');
  assert.equal(saved().cards.cards.filter((card) => card.memory?.version === 7).length, 10);
  assert.deepEqual(errors, []);
  console.log('Study smoke passed: module lifecycle, deck and test size, ten unique cards, keyboard/mouse, FSRS-7 persistence, narrow layout, due reviews');
} finally {
  cleanup();
}
