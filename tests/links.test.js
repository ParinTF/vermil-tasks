const test = require('node:test');
const assert = require('node:assert');
const { cleanLinkUrl, linkHost, filterLinks } = require('../ui/logic.js');

test('cleanLinkUrl and linkHost normalise web addresses', () => {
  assert.equal(cleanLinkUrl('example.com/post'), 'https://example.com/post');
  assert.equal(cleanLinkUrl('https://www.github.com/rust-lang'), 'https://www.github.com/rust-lang');
  assert.equal(cleanLinkUrl(''), '');
  assert.equal(linkHost('https://www.github.com/rust-lang'), 'github.com');
});

test('filterLinks filters by status, tag and query, keeping pinned items first', () => {
  const items = [
    { id: '1', title: 'Tauri Guide', url: 'https://tauri.app', tag: 'dev', read: false, pinned: false, addedAt: '2026-11-10T10:00:00Z' },
    { id: '2', title: 'Design Systems', url: 'https://design.example', tag: 'design', read: false, pinned: true, addedAt: '2026-11-08T10:00:00Z' },
    { id: '3', title: 'Old Article', url: 'https://news.example', tag: 'dev', read: true, pinned: false, addedAt: '2026-11-12T10:00:00Z' },
  ];
  assert.deepEqual(filterLinks(items, { status: 'unread' }).map((x) => x.id), ['2', '1']);
  assert.deepEqual(filterLinks(items, { status: 'all', tag: 'dev' }).map((x) => x.id), ['3', '1']);
  assert.deepEqual(filterLinks(items, { status: 'all', q: 'tauri' }).map((x) => x.id), ['1']);
});
