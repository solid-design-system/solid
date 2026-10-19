import assert from 'node:assert/strict';
import fs from 'node:fs';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fetchIconsForTheme } from './fetch-celum-changelog.mjs';
import { collectChangedIcons, downloadChangedIcons } from './download-changed-icons.mjs';

function setup(context, changelog, existing = []) {
  context.mock.timers.enable({ apis: ['Date'], now: new Date(2026, 9, 15, 12).getTime() });
  let snapshot = { ui: { system: existing, content: [], lastCheck: '2026-10-14' } };
  context.mock.method(console, 'info', () => undefined);
  const errors = context.mock.method(console, 'error', () => undefined);
  context.mock.method(fs, 'existsSync', () => true);
  context.mock.method(fs, 'readFileSync', () => JSON.stringify(snapshot));
  context.mock.method(fs, 'mkdirSync', () => undefined);
  const writes = context.mock.method(fs, 'writeFileSync', (_path, content) => {
    snapshot = JSON.parse(content);
  });
  context.mock.method(globalThis, 'fetch', url =>
    Promise.resolve(
      url.endsWith('.json') ? Response.json([]) : new Response(changelog, { status: changelog === null ? 404 : 200 })
    )
  );
  return { writes, errors, snapshot: () => snapshot };
}

for (const changelog of [null, 'Added:\n-\n\nRemoved:\n-\n\nModified:\n-\n']) {
  test(`does not write a date-only update for ${changelog === null ? 'missing' : 'empty'} changelogs`, async context => {
    const state = setup(context, changelog);
    await fetchIconsForTheme('default', 'ui', ['system']);
    assert.equal(state.errors.mock.calls.length, 0);
    assert.equal(state.writes.mock.calls.length, 0);
    assert.equal(state.snapshot().ui.lastCheck, '2026-10-14');
  });
}

for (const section of ['Added', 'Modified', 'Removed']) {
  test(`persists ${section.toLowerCase()} icons and advances the check date`, async context => {
    const state = setup(context, `${section}:\ncalendar.svg\n`);
    await fetchIconsForTheme('default', 'ui', ['system']);
    assert.equal(state.errors.mock.calls.length, 0);
    const snapshot = state.snapshot().ui;
    assert.equal(snapshot.lastCheck, new Date(2026, 9, 15).toLocaleDateString());
    assert.equal(snapshot.system.length, 1);
    const icons = snapshot.system[0].icons[section.toLowerCase()];
    assert.equal(icons.length, 1);
    assert.equal(typeof icons[0] === 'string' ? icons[0] : icons[0].name, 'calendar.svg');
  });
}

test('does not write when the icon changelog is already stored', async context => {
  const state = setup(context, 'Added:\ncalendar.svg\n', [
    { date: '2026-10-15', icons: { added: ['calendar.svg'], modified: [], removed: [] } }
  ]);
  await fetchIconsForTheme('default', 'ui', ['system']);
  assert.equal(state.errors.mock.calls.length, 0);
  assert.equal(state.writes.mock.calls.length, 0);
});

test('selects only changed icon entries, not check dates or existing icons', () => {
  const existing = {
    ui: {
      lastCheck: '2026-10-14',
      system: [{ date: '2026-10-14', icons: { added: ['old.svg'], modified: [], removed: [] } }]
    }
  };
  const current = structuredClone(existing);
  current.ui.lastCheck = '2026-10-15';
  assert.deepEqual(collectChangedIcons('default', existing, current), []);
  current.ui.system.push({
    date: '2026-10-15',
    icons: {
      added: [{ name: 'new.svg', urlSvg: 'https://example.com/new.svg' }],
      modified: ['changed.svg'],
      removed: ['removed.svg']
    }
  });
  assert.deepEqual(
    collectChangedIcons('default', existing, current).map(icon => icon.name),
    ['new.svg', 'changed.svg', 'removed.svg']
  );
});

test('downloads added/modified icons once and reports removals and unavailable files', async context => {
  const output = await mkdtemp(path.join(tmpdir(), 'celum-changes-'));
  context.mock.method(console, 'warn', () => undefined);
  const changes = ['added', 'modified', 'removed'].map(change => ({
    library: 'default',
    theme: 'ui',
    type: 'system',
    date: '2026-10-15',
    change,
    name: `${change}.svg`,
    urlSvg: `https://example.com/${change}.svg`
  }));
  changes.push({ ...changes[0], date: '2026-10-16' });
  const requests = [];
  try {
    const report = await downloadChangedIcons(changes, output, url => {
      requests.push(String(url));
      return Promise.resolve(new Response('<svg/>', { status: String(url).includes('modified') ? 404 : 200 }));
    });
    assert.equal(report.downloaded, 1);
    assert.equal(requests.length, 2);
    assert(!requests.some(url => url.includes('removed')));
    assert.equal(await readFile(path.join(output, 'default/ui/system/added.svg'), 'utf8'), '<svg/>');
    assert.equal(report.changes.find(icon => icon.change === 'modified').downloadError, 'HTTP 404');
    assert.equal(JSON.parse(await readFile(path.join(output, 'report.json'), 'utf8')).changes.length, 4);
    await downloadChangedIcons([], output);
    assert.equal(fs.existsSync(output), false);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
