import type { IconLibrary } from './library';

const ICON_BASE_PATH = '/figma-icons';

const multiThemingLibrary: IconLibrary = {
  name: 'multi-theming',

  resolver: (name: string, element?: HTMLElement) => {
    const theme = element?.getAttribute('data-theme') || 'UI';

    return `${ICON_BASE_PATH}/${theme}/${name}.svg`;
  },

  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
  }
};

export default multiThemingLibrary;
