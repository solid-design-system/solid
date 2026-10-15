// theme fonts
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

// theme attributes
// cdnIconFolder - folder name for the icons in the CDN
// iconThemeKey - key used to identify the icon theme in our codebase
// iconThemeLabel - label for the theme in our documentation
// iconLibraries - icon libraries available for the theme
export const themeAttributes = {
  'sd-theme-ui-light': {
    logoLg: 'images/logo-unioninvestment-lg.svg',
    logoSm: 'images/logo-unioninvestment-sm.svg',
    logoAlt: 'Logo Union Investment Homepage',
    css: 'ui-light/ui-light.css',
    font: 'ui',
    cdnIconFolder: 'union-investment',
    iconThemeKey: 'union-investment',
    iconThemeLabel: 'Union Investment',
    iconLibraries: ['default', 'sd-multi-theming']
  },

  'sd-theme-ui-dark': {
    logoLg: 'images/logo-unioninvestment-inverted-lg.svg',
    logoSm: 'images/logo-unioninvestment-inverted-sm.svg',
    logoAlt: 'Logo Union Investment Homepage',
    css: 'ui-dark/ui-dark.css',
    font: 'ui',
    cdnIconFolder: 'union-investment',
    iconThemeKey: 'union-investment',
    iconThemeLabel: 'Union Investment',
    iconLibraries: ['default', 'sd-multi-theming']
  },

  'sd-theme-vb': {
    logoLg: 'images/logo-VB-lg.svg',
    logoSm: 'images/logo-VB-sm.svg',
    logoAlt: 'Logo Volksbanken Homepage',
    css: 'vb/vb.css',
    font: 'genos',
    cdnIconFolder: 'vb',
    iconThemeKey: 'vb',
    iconThemeLabel: 'VB',
    iconLibraries: ['sd-multi-theming', 'sd-internal']
  },

  'sd-theme-sp': {
    logoLg: 'images/logo-sparda-lg.svg',
    logoMd: 'images/logo-sparda-md.svg',
    logoSm: 'images/logo-sparda-sm.svg',
    logoAlt: 'Logo Sparda Homepage',
    css: 'sp/sp.css',
    font: 'genos',
    cdnIconFolder: 'sp',
    iconThemeKey: 'sp',
    iconThemeLabel: 'SP',
    iconLibraries: ['sd-multi-theming', 'sd-internal']
  },

  'sd-theme-bb': {
    logoLg: 'images/logo-bbbank-lg.svg',
    logoMd: 'images/logo-bbbank-md.svg',
    logoSm: 'images/logo-bbbank-sm.svg',
    logoAlt: 'Logo BBBank Homepage',
    css: 'bb/bb.css',
    font: 'bbbank',
    cdnIconFolder: 'bbbank',
    iconThemeKey: 'bb',
    iconThemeLabel: 'BBBank',
    iconLibraries: ['sd-multi-theming', 'sd-internal']
  }
};

// get mapping of theme keys to their respective CDN icon folder
export const getThemeIconFolders = Object.entries(themeAttributes).reduce(
  (acc, [themeId, attrs]) => {
    const themeKey = themeId.replace('sd-theme-', '');
    acc[themeKey] = attrs.cdnIconFolder || null;
    return acc;
  },
  {} as Record<string, string | null>
);

// get mapping of icon theme keys to their respective theme attributes
export const iconThemes = Object.values(themeAttributes).reduce(
  (acc, attrs) => {
    acc[attrs.iconThemeKey] ??= attrs;
    return acc;
  },
  {} as Record<string, (typeof themeAttributes)[keyof typeof themeAttributes]>
);

// get mapping of icon theme keys to their respective CDN icon folder
export const CELUM_THEME_MAPPING: Record<string, string> = Object.fromEntries(
  Object.entries(iconThemes).map(([key, attrs]) => [key, attrs.cdnIconFolder])
);

// get mapping of icon theme keys to their respective theme labels
export const THEME_LABELS: Record<string, string> = Object.fromEntries(
  Object.entries(iconThemes).map(([key, attrs]) => [key, attrs.iconThemeLabel])
);

// get mapping of CDN icon folders to their respective icon theme keys
export const CDN_FOLDER_TO_THEME_KEY: Record<string, string> = Object.fromEntries(
  Object.entries(iconThemes).map(([key, attrs]) => [attrs.cdnIconFolder, key])
);

// get the current theme attributes based on the data-sd-theme attribute on the document element
export const getThemeAttributes = () => {
  const theme = document.documentElement.dataset.sdTheme as string;
  return themeAttributes[theme as keyof typeof themeAttributes] || themeAttributes['sd-theme-ui-light'];
};
