import type { IconLibrary } from './library';

const themeMap: Record<string, string> = {
  vb: 'vb',
  bb: 'bbbank',
  kid: 'kidstarter'
};

function getTheme(element?: HTMLElement) {
  if (element) {
    const cssTheme = getComputedStyle(element).getPropertyValue('--sd-theme').trim().replace(/['"]/g, '');
    return themeMap[cssTheme];
  }
  return null;
}

const multiThemingLibrary: IconLibrary = {
  name: 'multi-theming',
  resolver: (name, element) => {
    const theme = getTheme(element);
    if (!theme) return '';

    const path = name.split('/');
    const finalPath = `${theme}/${name}`;

    if (path[0] === 'content' || path[0] === 'system') {
      name = finalPath;
    }

    return `https://celum-icons.fe.union-investment.de/${name}.svg`;
  },
  mutator: svg => {
    const recoloredElements = {
      currentColorFills: [] as unknown as NodeListOf<SVGElement>,
      currentColorStrokes: [] as unknown as NodeListOf<SVGElement>,
      greenFills: [] as unknown as NodeListOf<SVGElement>,
      greenStrokes: [] as unknown as NodeListOf<SVGElement>
    };
    recoloredElements['currentColorFills'] = svg.querySelectorAll('[fill="#00358e" i]');
    recoloredElements['currentColorStrokes'] = svg.querySelectorAll('[stroke="#00358e" i]');
    recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#2d9d00" i]');
    recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#2d9d00" i]');

    recoloredElements.currentColorFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'currentColor');
    });

    recoloredElements.currentColorStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'currentColor');
    });

    recoloredElements.greenFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'rgb(var(--sd-color-icon-fill-accent, 45 157 0))');
    });

    recoloredElements.greenStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-icon-fill-accent, 45 157 0))');
    });
    return svg;
  }
};

export default multiThemingLibrary;
