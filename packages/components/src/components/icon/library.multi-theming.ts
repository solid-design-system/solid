import type { IconLibrary } from './library';

const themes: Record<string, Record<string, string>> = {
  UI: {
    close: `<svg viewBox="0 0 24 24"><path d="..."/></svg>`
  },
  KID: {
    close: `<svg viewBox="0 0 24 24"><path d="..."/></svg>`
  },
  VB: {},
  BB: {}
};

const multiThemingLibrary: IconLibrary = {
  name: 'multi-theming',

  resolver: (name, element) => {
    const theme = element?.getAttribute('data-theme') || 'UI';

    const svg = themes?.[theme]?.[name];

    if (!svg) return '';

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  },

  mutator: svg => svg.setAttribute('fill', 'currentColor')
};

export default multiThemingLibrary;
