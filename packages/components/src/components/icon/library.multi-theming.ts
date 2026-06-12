import type { IconLibrary } from './library';

const multiThemingLibrary: IconLibrary = {
  name: 'multi-theming',

  resolver: (name: string) => {
    const theme = document.documentElement.dataset.sdTheme?.replace('sd-theme-', '').split('-')[0] || 'ui-light';
    return `/figma-icons/${theme}/${name}.svg`;
  },

  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.querySelectorAll('[fill]').forEach(el => {
      el.setAttribute('fill', 'currentColor');
    });
  }
};

export default multiThemingLibrary;
