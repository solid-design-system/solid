import assert from 'node:assert/strict';
import { lstatSync, readdirSync, readFileSync, realpathSync } from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const root = fileURLToPath(new URL('../', import.meta.url));
const skillsDirectory = resolve(root, '.agents/skills');
const skillNames = [
  'component-development',
  'component-tests',
  'create-changeset',
  'icon-maintenance',
  'storybook-authoring',
  'style-development',
  'validate-pr-readiness',
  'write-migration-guide'
];

function parseSkill(source, directoryName) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  assert.ok(match, `${directoryName}: missing YAML frontmatter`);
  const metadata = parse(match[1], { uniqueKeys: true });
  assert.ok(metadata && typeof metadata === 'object' && !Array.isArray(metadata));
  assert.equal(metadata.name, directoryName, 'name must match its directory');
  assert.match(metadata.name, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(metadata.name.length <= 64);
  assert.equal(typeof metadata.description, 'string');
  assert.ok(metadata.description.trim().length > 0 && metadata.description.length <= 1024);
  if (metadata.compatibility !== undefined) {
    assert.equal(typeof metadata.compatibility, 'string');
    assert.ok(metadata.compatibility.trim().length > 0 && metadata.compatibility.length <= 500);
  }
  const fields = new Set(['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools']);
  for (const field of Object.keys(metadata)) assert.ok(fields.has(field), `Nonportable field: ${field}`);
  assert.ok(match[2].trim(), 'skill body must not be empty');
  assert.ok(source.split('\n').length <= 500, 'move long references out of SKILL.md');
  return metadata;
}

function assertInsideRoot(target) {
  const local = relative(root, target);
  assert.ok(local !== '..' && !local.startsWith('../') && !isAbsolute(local), `Outside repository: ${target}`);
}

function checkLocalLink(file, link) {
  if (/^https?:\/\//.test(link) || link.startsWith('#')) return;
  assert.ok(!/^[a-z][a-z0-9+.-]*:/i.test(link), `Unsupported link: ${link}`);
  assert.ok(!isAbsolute(link), `Link must be relative: ${link}`);
  const target = resolve(dirname(file), decodeURIComponent(link.split('#')[0]));
  assertInsideRoot(target);
  assertInsideRoot(realpathSync(target));
}

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const target = resolve(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(target);
    assert.ok(!entry.isSymbolicLink(), `Canonical resources must not be symlinks: ${target}`);
    return entry.isFile() && entry.name.endsWith('.md') ? [target] : [];
  });
}

test('canonical skills contain only the selected task workflows', () => {
  const directories = readdirSync(skillsDirectory, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort();
  assert.deepEqual(directories, skillNames);
});

for (const name of skillNames) {
  test(`${name}: portable metadata and bundled resources`, () => {
    const directory = resolve(skillsDirectory, name);
    parseSkill(readFileSync(resolve(directory, 'SKILL.md'), 'utf8'), name);
    for (const file of markdownFiles(directory)) {
      for (const [, link] of readFileSync(file, 'utf8').matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
        assert.doesNotThrow(() => checkLocalLink(file, link), `${relative(root, file)}: ${link}`);
      }
    }
  });
}

for (const client of ['.claude/skills', '.github/skills']) {
  test(`${client}: aliases resolve to the single canonical source`, () => {
    const directory = resolve(root, client);
    assert.deepEqual(readdirSync(directory).sort(), skillNames);
    for (const name of skillNames) {
      const alias = resolve(directory, name);
      assert.ok(lstatSync(alias).isSymbolicLink(), `${alias} must not duplicate skill content`);
      assert.equal(realpathSync(alias), realpathSync(resolve(skillsDirectory, name)));
      assert.ok(readFileSync(resolve(alias, 'SKILL.md'), 'utf8').startsWith('---\n'));
    }
  });
}

test('maintainer inventory links resolve', () => {
  const file = resolve(skillsDirectory, 'README.md');
  for (const [, link] of readFileSync(file, 'utf8').matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    assert.doesNotThrow(() => checkLocalLink(file, link), link);
  }
});

test('skill metadata rejects malformed YAML, missing fields, and host-specific configuration', () => {
  const invalid = [
    '# No frontmatter',
    '---\nname: [broken\n---\nBody',
    '---\nname: example\n---\nBody',
    '---\nname: other\ndescription: Example\n---\nBody',
    '---\nname: example\ndescription: Example\ncontext: fork\n---\nBody',
    '---\nname: example\ndescription: Example\nname: example\n---\nBody',
    '---\nname: example\ndescription: 42\n---\nBody',
    `---\nname: example\ndescription: ${'x'.repeat(1025)}\n---\nBody`
  ];
  for (const source of invalid) assert.throws(() => parseSkill(source, 'example'));
  assert.equal(parseSkill('---\r\nname: example\r\ndescription: Example\r\n---\r\nBody', 'example').name, 'example');
});

test('local resource checks reject missing files and repository escapes', () => {
  const file = resolve(skillsDirectory, 'component-development/SKILL.md');
  assert.throws(() => checkLocalLink(file, './missing-resource.md'), /ENOENT/);
  assert.throws(() => checkLocalLink(file, '../../../../outside.md'), /Outside repository/);
  assert.throws(() => checkLocalLink(file, '/absolute.md'), /must be relative/);
  assert.throws(() => checkLocalLink(file, 'file:private.md'), /Unsupported link/);
  assert.doesNotThrow(() => checkLocalLink(file, './references/conventions.md'));
});
