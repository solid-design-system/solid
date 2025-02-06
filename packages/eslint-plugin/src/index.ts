import fs from 'node:fs';
import parser from '@html-eslint/parser';
import recommended from './configs/recommended.js';
import rules from './rules/index.js';

const { name, version } = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url)) as unknown as string
) as {
  name: string;
  version: string;
};

const plugin = {
  meta: {
    name,
    version
  },
  rules,
  configs: {}
};

const config = {
  plugins: {
    'solid-design-system': plugin
  },
  languageOptions: {
    parser
  }
};

Object.assign(plugin.configs, {
  recommended: {
    ...config,
    rules: recommended.rules
  }
});

export default plugin;
