export const fontConfig = {
  ui: {
    fontFaces: `@font-face {
  font-family: 'Frutiger Neue';
  font-style: normal;
  font-weight: 400;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-Bk.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: italic;
  font-weight: 400;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-BkIt.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: normal;
  font-weight: 600;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-Bd.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: italic;
  font-weight: 600;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-BdIt.woff2')
    format('woff2');
}`,
    fontFamily: `'Frutiger Neue'`
  },
  genos: {
    fontFaces: `@font-face {
  font-family: 'GenosGFG';
  font-style: normal;
  font-weight: 400;
  src: url('https://markenwelt.wegfrei-portal.de/fonts/GenosGFG-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'GenosGFG';
  font-style: normal;
  font-weight: 700;
  src: url('https://markenwelt.wegfrei-portal.de/fonts/GenosGFG-Bold.woff2') format('woff2');
}`,
    fontFamily: `'GenosGFG'`
  },
  bbbank: {
    fontFaces: `@font-face {
  font-family: 'BBBank Type TT';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('%ASSETS-BASE-URL%/fonts/bbbank/BBBankTypeTT-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'BBBank Type TT';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('%ASSETS-BASE-URL%/fonts/bbbank/BBBankTypeTT-Bold.woff2') format('woff2');
}`,
    fontFamily: `'BBBank Type TT'`
  }
} as const;

export const themeAttributes = {
  'sd-theme-ui-light': {
    logoLg: 'images/logo-unioninvestment-lg.svg',
    logoSm: 'images/logo-unioninvestment-sm.svg',
    alt: 'Logo Union Investment Homepage',
    css: 'ui-light/ui-light.css',
    font: 'ui',
    cdnIconFolder: 'union-investment'
  },

  'sd-theme-ui-dark': {
    logoLg: 'images/logo-unioninvestment-inverted-lg.svg',
    logoSm: 'images/logo-unioninvestment-inverted-sm.svg',
    alt: 'Logo Union Investment Homepage',
    css: 'ui-dark/ui-dark.css',
    font: 'ui',
    cdnIconFolder: 'union-investment'
  },

  'sd-theme-vb': {
    logoLg: 'images/logo-VB-lg.svg',
    logoSm: 'images/logo-VB-sm.svg',
    alt: 'Logo Volksbanken Homepage',
    css: 'vb/vb.css',
    font: 'genos',
    cdnIconFolder: 'vb'
  },

  'sd-theme-sp': {
    logoLg: 'images/logo-sparda-lg.svg',
    logoMd: 'images/logo-sparda-md.svg',
    logoSm: 'images/logo-sparda-sm.svg',
    alt: 'Logo Sparda Homepage',
    css: 'sp/sp.css',
    font: 'genos',
    cdnIconFolder: 'sp'
  },

  'sd-theme-bb': {
    logoLg: 'images/logo-bbbank-lg.svg',
    logoMd: 'images/logo-bbbank-md.svg',
    logoSm: 'images/logo-bbbank-sm.svg',
    alt: 'Logo BBBank Homepage',
    css: 'bb/bb.css',
    font: 'bbbank',
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
