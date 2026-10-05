import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createPrompt, parsePromptBlocks, stripPromptOnlyBlocks } from './mdx-prompt-blocks.mjs';

const block = (name, content) => `{/* prompt:${name} */}\n${content}\n{/* /prompt:${name} */}\n`;

test('composes only Vue and shared content in that order', () => {
  const source = `import anything from 'anything';\n${block('shared', 'Install SDS')}# Quickstart\n${block('vue', 'Create Vue')}<Source />`;
  assert.equal(createPrompt(source), 'Create Vue\n\nInstall SDS');
  assert.equal(
    stripPromptOnlyBlocks(source),
    "import anything from 'anything';\nInstall SDS\n# Quickstart\n<Source />"
  );
});

test('leaves documents without markers unchanged', () => {
  const source = '# Guide\r\n\r\nOrdinary content\r\n';
  assert.equal(stripPromptOnlyBlocks(source), source);
});

test('selects only the requested framework and hides all framework blocks', () => {
  const frameworks = ['vue', 'react', 'svelte'];
  const source =
    '# Quickstart\n' + frameworks.map(name => block(name, `Create ${name}`)).join('') + block('shared', 'Install SDS');
  for (const framework of frameworks) {
    assert.equal(createPrompt(source, framework), `Create ${framework}\n\nInstall SDS`);
  }
  assert.equal(stripPromptOnlyBlocks(source), '# Quickstart\nInstall SDS\n');
  assert.throws(() => createPrompt(block('shared', 'Install SDS'), 'react'), /Missing or empty prompt:react/);
  assert.throws(() => createPrompt(block('shared', 'Install SDS'), 'svelte'), /Missing or empty prompt:svelte/);
});

test('preserves code imports and ignores markers inside backtick and tilde fences', () => {
  for (const fence of ['````', '~~~~']) {
    const code = `${fence}js\nimport vue from 'vue';\n${block('shared', 'literal marker example')}${fence.slice(0, 3)}\n${fence}\n`;
    const source = block('vue', code) + block('shared', 'Install SDS');
    assert.equal(parsePromptBlocks(source).length, 2);
    assert.equal(createPrompt(source), `${code.trim()}\n\nInstall SDS`);
  }
});

test('accepts CRLF markers and a closing marker without a trailing newline', () => {
  const source = (block('vue', 'Create Vue') + block('shared', 'Install SDS')).trimEnd().replaceAll('\n', '\r\n');
  assert.equal(createPrompt(source), 'Create Vue\n\nInstall SDS');
  assert.equal(stripPromptOnlyBlocks(source), 'Install SDS\n');
});

test('reports malformed blocks with filename and line', () => {
  const cases = [
    ['{/* /prompt:vue */}', 'Unmatched closing'],
    ['{/* prompt:vue */}', 'Unclosed'],
    ['{/* prompt:vue */}\n{/* prompt:shared */}', 'cannot be nested'],
    [block('vue', 'first') + block('vue', 'second'), 'Duplicate'],
    ['{/* prompt:unknown */}', 'Unknown']
  ];
  for (const [source, message] of cases) {
    assert.throws(
      () => parsePromptBlocks(source, 'Quickstart.mdx'),
      error => {
        assert.match(error.message, /Quickstart\.mdx:\d+:/);
        assert.ok(error.message.includes(message));
        return true;
      }
    );
  }
});

test('requires nonempty Vue and shared blocks when composing a prompt', () => {
  assert.throws(() => createPrompt(block('shared', 'Install SDS')), /Missing or empty prompt:vue/);
  assert.throws(() => createPrompt(block('vue', 'Create Vue')), /Missing or empty prompt:shared/);
  assert.throws(() => createPrompt(block('vue', '') + block('shared', 'Install SDS')), /Missing or empty prompt:vue/);
});

test('Quickstart keeps each framework setup only in its composed prompt', () => {
  const source = readFileSync(new URL('../packages/docs/src/stories/packages/Quickstart.mdx', import.meta.url), 'utf8');
  const visible = stripPromptOnlyBlocks(source);
  const setups = [
    { framework: 'vue', title: 'Create a Vue 3', template: 'vue-ts', plugin: "import vue from '@vitejs/plugin-vue'" },
    {
      framework: 'react',
      title: 'Create a React 19',
      template: 'react-ts',
      plugin: "import react from '@vitejs/plugin-react'"
    },
    {
      framework: 'svelte',
      title: 'Create a Svelte 5',
      template: 'svelte-ts',
      plugin: "import { svelte } from '@sveltejs/vite-plugin-svelte'"
    }
  ];
  for (const setup of setups) {
    const prompt = createPrompt(source, setup.framework);
    assert.ok(prompt.startsWith(setup.title));
    assert.ok(prompt.includes(`--template ${setup.template}`));
    assert.ok(prompt.includes(setup.plugin));
    assert.ok(prompt.indexOf('npm create vite') < prompt.indexOf('#### 1. Install the packages'));
    assert.match(prompt, /```bash\nnpm create vite/);
    assert.match(prompt, /import '@solid-design-system\/components\/dist\/solid-components.js'/);
    assert.equal(prompt.match(/npm install --save-dev tailwindcss @tailwindcss\/vite/g)?.length, 1);
    assert.doesNotMatch(prompt, /prompt:|<Source|<Meta|Install with Agent|addon-docs|mdx-prompt-blocks|\?raw/);
    assert.doesNotMatch(visible, new RegExp(setup.title));
    for (const other of setups.filter(candidate => candidate.framework !== setup.framework)) {
      assert.ok(!prompt.includes(other.title));
      assert.ok(!prompt.includes(other.plugin));
    }
    assert.ok(visible.includes(`<Source code={createPrompt(markdown, '${setup.framework}')}`));
  }
  assert.doesNotMatch(visible, /npm create vite|isCustomElement|prompt:/);
  assert.match(visible, /#### 1. Install the packages/);
});
