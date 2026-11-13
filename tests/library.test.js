const test = require('node:test');
const assert = require('node:assert');
const { filterLibrary, libraryYear } = require('../ui/logic.js');

test('library: filtering and the year in numbers', () => {
  const items = [
    { id: '1', title: 'Dune', kind: 'Book', status: 'done', note: 'Frank Herbert', rating: 5, finished: '2026-03-02' },
    { id: '2', title: 'Arrival', kind: 'Movie', status: 'done', note: '', rating: 4, finished: '2026-05-10' },
    { id: '3', title: 'Emma', kind: 'Book', status: 'done', note: '', rating: 0, finished: '2025-12-30' },
    { id: '4', title: 'Severance', kind: 'Series', status: 'now', note: '', rating: 0 },
    { id: '5', title: 'Foundation', kind: 'Book', status: 'want', note: 'Isaac Asimov', rating: 0 },
  ];
  assert.deepEqual(filterLibrary(items, 'done', '', '').map((i) => i.id), ['1', '2', '3']);
  assert.deepEqual(filterLibrary(items, 'done', 'Book', '').map((i) => i.id), ['1', '3']);
  assert.deepEqual(filterLibrary(items, 'want', '', 'asimov').map((i) => i.id), ['5']); // the note is searched too
  assert.deepEqual(filterLibrary(items, 'now', '', 'zzz'), []);
  assert.deepEqual(libraryYear(items, 2026), { total: 2, byKind: { Book: 1, Movie: 1 }, average: 4.5 });
  assert.deepEqual(libraryYear(items, 2025), { total: 1, byKind: { Book: 1 }, average: null }); // unrated: no average
  assert.deepEqual(libraryYear([], 2026), { total: 0, byKind: {}, average: null });
});
