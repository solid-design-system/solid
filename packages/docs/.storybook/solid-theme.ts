import { create } from 'storybook/theming';

export default create({
  base: 'light',

  fontBase: `'Frutiger Neue', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,

  brandTitle: 'Solid Components by Union Investment',
  brandUrl: 'https://union-investment.de',
  brandImage: './images/sds-signet.png',
  brandTarget: '_self',

  colorPrimary: '#00358e',
  colorSecondary: '#00358e',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderRadius: 4
});
