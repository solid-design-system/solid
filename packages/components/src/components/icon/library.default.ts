import type { IconLibrary } from './library';

const defaultLibrary: IconLibrary = {
  name: 'default',
  resolver: name => {
    const sdTheme = document.documentElement.dataset.sdTheme;
    const theme = sdTheme && sdTheme !== 'undefined' ? sdTheme.replace('sd-theme-', '') : 'ui';
    const themedName = theme.includes('ui') ? name : `${theme}/${name}`;
    const path = name.split('/');

    if (path[0] === 'content' || path[0] === 'system') {
      name = 'union-investment/' + themedName;
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

export default defaultLibrary;
