import SdButtonIconLabelRequired from './rules/sd-button-icon-label-required';

const plugin = {
  meta: {
    name: '@solid-design-system/eslint-plugin',
    version: '1.0.0'
  },
  rules: {
    'sd-button-icon-label-required': SdButtonIconLabelRequired
  }
};

export default plugin;
