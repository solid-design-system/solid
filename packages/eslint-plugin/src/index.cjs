const rule = require('./rules/enforce-foo-bar.cjs');
// import SdButtonIconLabelRequired from './rules/sd-button-icon-label-required';

const plugin = {
  meta: {
    name: 'eslint-plugin-example',
    version: '1.0.0'
  },
  rules: {
    // 'sd-button-icon-label-required': SdButtonIconLabelRequired,
    'enforce-foo-bar': rule
  }
};

module.exports = plugin;
