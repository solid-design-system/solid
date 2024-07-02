import type { IconLibrary } from './library';

const defaultLibrary: IconLibrary = {
  name: 'default',
  resolver: name => {
    const path = name.split('/');
    if (path[0] === 'content' || path[0] === 'system') {
      name = 'union-investment/' + name;
    }
    return `https://fe-celum-icons-prod.azureedge.net/${name}.svg`;
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
    recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#43b02a" i]');
    recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#43b02a" i]');

    recoloredElements.currentColorFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'currentColor');
    });

    recoloredElements.currentColorStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'currentColor');
    });

    recoloredElements.greenFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'rgb(var(--sd-color-accent, 45 157 0) / var(--tw-bg-opacity, 1))');
    });

    recoloredElements.greenStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-accent, 45 157 0) / var(--tw-bg-opacity, 1))');
    });
    return svg;
  }
};

export default defaultLibrary;
