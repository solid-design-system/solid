export const themeAttributes = {
  'sd-theme-ui-light': {
    logoLg: 'images/logo-unioninvestment-lg.svg',
    logoSm: 'images/logo-unioninvestment-sm.svg',
    alt: 'Logo Union Investment Homepage',
    css: 'ui-light/ui-light.css',
    cdnIconFolder: 'union-investment'
  },

  'sd-theme-ui-dark': {
    logoLg: 'images/logo-unioninvestment-inverted-lg.svg',
    logoSm: 'images/logo-unioninvestment-inverted-sm.svg',
    alt: 'Logo Union Investment Homepage',
    css: 'ui-dark/ui-dark.css',
    cdnIconFolder: 'union-investment'
  },

  'sd-theme-vb': {
    logoLg: 'images/logo-VB-lg.svg',
    logoSm: 'images/logo-VB-sm.svg',
    alt: 'Logo Volksbanken Homepage',
    css: 'vb/vb.css',
    cdnIconFolder: 'vb'
  },

  'sd-theme-sp': {
    logoLg: 'images/logo-sparda-lg.svg',
    logoMd: 'images/logo-sparda-md.svg',
    logoSm: 'images/logo-sparda-sm.svg',
    alt: 'Logo Sparda Homepage',
    css: 'sp/sp.css',
    cdnIconFolder: 'sp'
  },

  'sd-theme-kid': {
    logoLg: 'images/logo-kidstarter-lg.svg',
    logoSm: 'images/logo-kidstarter-sm.svg',
    alt: 'Logo Kidstarter Homepage',
    css: 'kid/kid.css',
    cdnIconFolder: 'kidstarter'
  },

  'sd-theme-bb': {
    logoLg: 'images/logo-bbbank-lg.svg',
    logoMd: 'images/logo-bbbank-md.svg',
    logoSm: 'images/logo-bbbank-sm.svg',
    alt: 'Logo BBBank Homepage',
    css: 'bb/bb.css',
    cdnIconFolder: 'bbbank'
  }
};

export const getThemeIconFolders = Object.entries(themeAttributes).reduce(
  (acc, [themeId, attrs]) => {
    const themeKey = themeId.replace('sd-theme-', '');
    acc[themeKey] = attrs.cdnIconFolder || null;
    return acc;
  },
  {} as Record<string, string | null>
);

export const getThemeAttributes = () => {
  const theme = document.documentElement.dataset.sdTheme as string;

  return themeAttributes[theme as keyof typeof themeAttributes] || themeAttributes['sd-theme-ui-light'];
};
