import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Solid Components by Union Investment',
  brandUrl: 'https://union-investment.de',
  brandImage: './images/sds-signet.png',
  brandTarget: '_self',

  colorPrimary: '#00358e',
  colorSecondary: '#43b02a',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderRadius: 4
});
