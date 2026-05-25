export const themeAttributes = {
  'sd-theme-ui-light': {
    logoLg: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-unioninvestment-lg.svg',
    logoSm: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-unioninvestment-sm.svg',
    alt: 'Union Investment Homepage',
    css: 'ui-light/ui-light.css'
  },

  'sd-theme-ui-dark': {
    logoLg: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-unioninvestment-inverted-lg.svg',
    logoSm: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-unioninvestment-inverted-sm.svg',
    alt: 'Union Investment Homepage',
    css: 'ui-dark/ui-dark.css'
  },

  'sd-theme-vb': {
    logoLg: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-VB-lg.svg',
    logoSm: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-VB-sm.svg',
    alt: 'Volksbanken Homepage',
    css: 'vb/vb.css'
  },

  'sd-theme-kid': {
    logoLg: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-kidstarter-lg.svg',
    logoSm: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-kidstarter-sm.svg',
    alt: 'Kidstarter Homepage',
    css: 'kid/kid.css'
  },

  'sd-theme-bb': {
    logoLg: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-bbbank-lg.svg',
    logoSm: 'https://solid-design-system.fe.union-investment.de/docs/images/logo-bbbank-sm.svg',
    alt: 'BB Bank Homepage',
    css: 'bb/bb.css'
  }
};

export const getThemeAttributes = () => {
  const theme = document.documentElement.dataset.sdTheme as string;

  return themeAttributes[theme as keyof typeof themeAttributes] || themeAttributes['sd-theme-ui-light'];
};
