import type { IconLibrary } from './library';

const defaultLibrary: IconLibrary = {
  name: 'default',
  resolver: name => `https://fe-celum-icons-prod.azureedge.net/${name}.svg`,
  mutator: svg => {
    const recoloredElements = {
      currentColorFills: [] as unknown as NodeListOf<SVGElement>,
      currentColorStrokes: [] as unknown as NodeListOf<SVGElement>,
      greenFills: [] as unknown as NodeListOf<SVGElement>,
      greenStrokes: [] as unknown as NodeListOf<SVGElement>
    };
    recoloredElements['currentColorFills'] = svg.querySelectorAll(
      '[fill="rgb(var(--sd-color-primary, 0 53 142))"], [fill="#fff"]'
    );
    recoloredElements['currentColorStrokes'] = svg.querySelectorAll(
      '[stroke="rgb(var(--sd-color-primary, 0 53 142))"], [stroke="#fff"]'
    );
    recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#43b02a"]');
    recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#43b02a"]');

    recoloredElements.currentColorFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'currentColor');
    });

    recoloredElements.currentColorStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'currentColor');
    });

    recoloredElements.greenFills.forEach(filledElement => {
      filledElement.setAttribute('fill', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
    });

    recoloredElements.greenStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
    });
    return svg;
  }
};

export default defaultLibrary;
