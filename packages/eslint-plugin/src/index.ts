import parser from '@html-eslint/parser';
import recommended from './configs/recommended.js';
import rules from './rules/index.js';

const plugin = {
  meta: {
    name: '@solid-design-system/eslint-plugin',
    version: '1.0.0'
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
