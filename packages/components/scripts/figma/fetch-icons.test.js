import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import FigmaExporter from 'figma-export-assets';
import { selectAssets, optimizeSvg, downloadAssets, publishExport } from './fetch-icons.js';
import {
  figmaThemeToFolder,
  figmaPrefixToCategory,
  internalNames,
  figmaInternalToCode,
  figmaStatusToCode
} from './config.js';

const prefixes = Object.fromEntries(
  Object.entries(figmaPrefixToCategory).map(([prefix, category]) => [category, prefix])
);

function fixture() {
  const system = [
    ...internalNames.filter(name => !Object.values(figmaInternalToCode).includes(name)),
    ...Object.keys(figmaInternalToCode),
    'download'
  ];
  const children = [
    ...system.flatMap(name =>
      ['UI', ...Object.keys(figmaThemeToFolder)].flatMap(theme =>
        ['false', 'true'].map(inverted => ({
          id: `${name}-${theme}-${inverted}`,
          name: `${prefixes.system}${name}/inverted=${inverted}--set=${theme}`
        }))
      )
    ),
    ...Object.keys(figmaThemeToFolder).map(theme => ({
      id: `image-${theme}`,
      name: `${prefixes.content}image/set=${theme}`
    })),
    ...Object.keys(figmaStatusToCode).flatMap(name =>
      ['sm', 'md'].map(size => ({
        id: `status-${name}-${size}`,
        name: `${prefixes.status}${name}/size=${size}--set=UI`
      }))
    ),
    { name: 'theming/brand-logo/set=UI' },
    { name: 'theming/content-icons/coins/set=BB' },
    { name: 'theming/content-icons/people-files/set=BB' },
    { name: 'System Icons - theming/headline' }
  ];
  return children;
}

test('maps allowlists, automatically skips incomplete collections and includes completed ones', () => {
  const skipped = [];
  const assets = selectAssets(fixture(), 'all', skipped);
  assert.equal(assets.filter(asset => asset.path.startsWith('bundled/_internal/')).length, 28);
  assert.equal(assets.filter(asset => asset.path.startsWith('bundled/sd-status-assets/')).length, 7);
  assert.equal(assets.filter(asset => asset.path.includes('/internal/')).length, 84);
  assert.equal(assets.find(asset => asset.path === 'bundled/_internal/risk.svg').id, 'warning-UI-false');
  assert.equal(assets.find(asset => asset.path.endsWith('/status-questionmark.svg')).id, 'status-question-mark-sm');
  assert(!assets.some(asset => asset.path.includes('union-investment') || asset.path.includes('brand-logo')));
  assert(!assets.some(asset => /\/(coins|people-files)\.svg$/.test(asset.path)));
  assert.deepEqual(
    skipped,
    ['coins', 'people-files'].map(name => ({
      collection: `${prefixes.content}${name}`,
      missingThemes: ['VB', 'SP']
    }))
  );
  const complete = [
    ...fixture(),
    ...['coins', 'people-files'].flatMap(name =>
      ['VB', 'SP'].map(theme => ({
        id: `${name}-${theme}`,
        name: `${prefixes.content}${name}/set=${theme}`
      }))
    )
  ];
  const completedWarnings = [];
  const completedAssets = selectAssets(complete, 'celum', completedWarnings);
  assert.equal(completedAssets.filter(asset => /\/(coins|people-files)\.svg$/.test(asset.path)).length, 6);
  assert.deepEqual(completedWarnings, []);
  const incompleteSystem = { id: 'public-BB', name: `${prefixes.system}public-only/set=BB` };
  const systemWarnings = [];
  assert(
    !selectAssets([...fixture(), incompleteSystem], 'celum', systemWarnings).some(asset =>
      asset.path.endsWith('/public-only.svg')
    )
  );
  assert(systemWarnings.some(warning => warning.collection === `${prefixes.system}public-only`));
  assert(!assets.some(asset => asset.path === 'bundled/_internal/download.svg'));
  const missing = fixture();
  missing.shift();
  assert.throws(() => selectAssets(missing), /Missing export destinations: .*calendar/);
  assert.throws(
    () =>
      selectAssets(
        fixture().filter(asset => asset.id !== 'calendar-VB-false'),
        'celum'
      ),
    /Missing export destinations: .*calendar/
  );
  const duplicate = fixture();
  duplicate.push(duplicate[0]);
  assert.throws(() => selectAssets(duplicate), /Duplicate export destination/);
  const unsafe = fixture();
  unsafe[0].name = `${prefixes.system}../escape/set=UI`;
  assert.throws(() => selectAssets(unsafe), /Unsafe icon name/);
  const theme = fixture();
  theme[0].name = `${prefixes.system}calendar/set=UNKNOWN`;
  assert.throws(() => selectAssets(theme), /Unknown theme/);
  assert.equal(
    selectAssets(
      fixture().filter(asset => asset.name.includes('set=UI')),
      'bundled'
    ).length,
    35
  );
  assert.equal(
    selectAssets(
      [
        ...fixture().filter(asset => asset.name.includes('set=UI')),
        { name: `${prefixes.content}unrelated/unsupported=value` },
        { name: `${prefixes.system}unrelated/unsupported=value` }
      ],
      'bundled'
    ).length,
    35
  );
  const celum = selectAssets(
    fixture().filter(asset => !asset.name.includes('set=UI')),
    'celum'
  );
  assert(celum.every(asset => asset.path.startsWith('celum/')));
  assert.throws(() => selectAssets(fixture(), 'unknown'), /Unknown export target/);
});

const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="#00358E" d="M1 1h2v2H1z"/></svg>';

test('SVGO settings preserve runtime colors and viewBox while optimizing bundled icons', () => {
  assert(optimizeSvg(svg).includes('fill="#00358e"'));
  const bundled = optimizeSvg(svg, { bundled: true });
  assert(bundled.includes('fill="currentColor"'));
  assert(bundled.includes('viewBox="0 0 24 24"'));
  assert(bundled.includes('fill="none"'));
  assert(!bundled.includes('width='));
  assert(optimizeSvg(svg.replace('#00358E', 'white'), { bundled: true, status: true }).includes('fill="currentColor"'));
  assert.equal(optimizeSvg(bundled, { bundled: true }), bundled);
  assert(optimizeSvg(svg.replace('#00358E', '#2D9D00'), { bundled: true }).includes('#2d9d00'));
});

test('delegates downloads, deduplicates nodes and withholds the token from image hosts', async context => {
  const calls = [];
  const report = {
    fileId: 'example',
    assets: [
      { id: '1:1', path: 'bundled/_internal/close.svg' },
      { id: '1:1', path: 'celum/vb/system/close.svg' },
      { id: '1:1', path: 'celum/vb/internal/close.svg' }
    ]
  };
  context.mock.method(globalThis, 'fetch', async (url, options) => {
    calls.push({ url: String(url), options });
    return String(url).includes('api.figma.com')
      ? Response.json({ images: { '1:1': 'https://images.example.com/icon.svg' } })
      : new Response(svg);
  });
  const exporter = new FigmaExporter({ fileId: 'example', figmaPersonalToken: 'secret' });
  exporter.assets = [{ id: '1:1', name: 'source' }];
  const assets = await downloadAssets(report, exporter);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].options.headers['X-Figma-Token'], 'secret');
  assert.equal(calls[1].options.headers['X-Figma-Token'], undefined);
  assert.equal(assets.length, 3);
  assert(assets[0].svg.includes('currentColor'));
  assert(assets[1].svg.includes('#00358e'));
  assert.equal(assets[2].svg, assets[1].svg);
  assert.equal(assets[2].sha256, assets[1].sha256);
  assert.match(assets[0].sha256, /^[a-f0-9]{64}$/);
  context.mock.method(globalThis, 'fetch', async () => Response.json({ images: {} }));
  await assert.rejects(downloadAssets(report, exporter), /Missing SVG download/);
  context.mock.method(console, 'warn', () => {});
  context.mock.method(console, 'error', () => {});
  context.mock.method(globalThis, 'fetch', async url =>
    String(url).includes('api.figma.com')
      ? Response.json({ images: { '1:1': 'https://images.example.com/icon.svg' } })
      : new Response('', { status: 503 })
  );
  await assert.rejects(
    downloadAssets({ fileId: 'example', assets: [{ id: '1:1', path: 'bundled/_internal/close.svg' }] }, exporter),
    /Missing SVG download/
  );
  context.mock.method(globalThis, 'fetch', async () => new Response('', { status: 403 }));
  await assert.rejects(
    downloadAssets({ fileId: 'example', assets: [{ id: '1:1', path: 'bundled/_internal/close.svg' }] }, exporter),
    /Missing SVG download/
  );
});

test('publishes reproducibly and preserves successful output when source generation fails', async () => {
  const root = await mkdtemp(join(tmpdir(), 'solid-icons-'));
  const directory = join(root, 'src/components/icon');
  const internalPath = join(directory, 'library.internal.ts');
  const statusPath = join(directory, 'library.status.ts');
  try {
    await mkdir(directory, { recursive: true });
    await writeFile(
      internalPath,
      'const internalIcons = { close: "old" } as const;\nexport const icons = internalIcons;\n'
    );
    await writeFile(
      statusPath,
      'const statusIcons = { "status-check": "old" } as const;\nexport const icons = statusIcons;\n'
    );
    const report = { fileId: 'example', assets: [] };
    const assets = [
      { id: '1', path: 'bundled/_internal/close.svg', svg },
      { id: '2', path: 'bundled/sd-status-assets/status-check.svg', svg },
      { id: '3', path: 'celum/vb/system/close.svg', svg }
    ];
    assert.equal((await publishExport(report, assets, root)).length, 2);
    assert.equal((await publishExport(report, assets, root)).length, 0);
    const bundledAssets = assets.filter(asset => asset.path.startsWith('bundled/'));
    assert.equal((await publishExport({ ...report, target: 'bundled' }, bundledAssets, root)).length, 0);
    await assert.rejects(readFile(join(root, '.figma-icons-bundled/celum/report.json')), /ENOENT/);
    const themeReport = JSON.parse(await readFile(join(root, '.figma-icons/celum/report.json'), 'utf8'));
    assert.deepEqual(
      themeReport.assets.map(asset => asset.path),
      ['celum/vb/system/close.svg']
    );
    assert(!themeReport.assets.some(asset => asset.svg));
    const before = await readFile(internalPath, 'utf8');
    assert(before.includes('export const icons = internalIcons;'));
    assert.match(await readFile(statusPath, 'utf8'), /['"]status-check['"]:/);
    const outputBefore = await readFile(join(root, '.figma-icons/report.json'), 'utf8');
    const celumRoot = join(root, 'celum-only');
    await mkdir(celumRoot);
    assert.deepEqual(
      await publishExport(
        { ...report, target: 'celum' },
        assets.filter(asset => asset.path.startsWith('celum/')),
        celumRoot
      ),
      []
    );
    assert(
      (await readFile(join(celumRoot, '.figma-icons-celum/celum/vb/system/close.svg'), 'utf8')).includes('viewBox')
    );
    assert.equal(await readFile(internalPath, 'utf8'), before);
    await assert.rejects(
      publishExport(
        report,
        assets.filter(asset => asset.id !== '2'),
        root
      ),
      /Refusing to remove/
    );
    assert.equal(await readFile(internalPath, 'utf8'), before);
    assert.equal(await readFile(join(root, '.figma-icons/report.json'), 'utf8'), outputBefore);
    await assert.rejects(
      publishExport(report, [...assets, { path: '../escape.svg', svg }], root),
      /Unsafe export destination/
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
