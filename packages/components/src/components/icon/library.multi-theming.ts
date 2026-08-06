import type { IconLibrary } from './library';

const themeMap: Record<string, string> = {
  'ui-light': 'union-investment',
  'ui-dark': 'union-investment',
  vb: 'vb',
  bb: 'bbbank',
  sp: 'sparda',
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
  name: 'sd-multi-theming',
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

    const currentColors = ['#00358e', '#002d67', '#005ca9', '#005AAA', '#051530'];
    const greenColor = ['#2d9d00', '#f35e01'];

    recoloredElements['currentColorFills'] = svg.querySelectorAll(
      currentColors.map(color => `[fill="${color}" i]`).join(', ')
    );
    recoloredElements['currentColorStrokes'] = svg.querySelectorAll(
      currentColors.map(color => `[stroke="${color}" i]`).join(', ')
    );
    recoloredElements['greenFills'] = svg.querySelectorAll(greenColor.map(color => `[fill="${color}" i]`).join(', '));
    recoloredElements['greenStrokes'] = svg.querySelectorAll(
      greenColor.map(color => `[stroke="${color}" i]`).join(', ')
    );

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
