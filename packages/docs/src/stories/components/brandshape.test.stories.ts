/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

import { html } from 'lit-html';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-brandshape/Screenshots: sd-brandshape',
  component: 'sd-brandshape',
  tags: ['!autodocs'],
  parameters: { ...parameters, controls: { disable: true } },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: '<div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>'
    },
    {
      type: 'slot',
      name: 'image',
      value: `<img slot="image" src="./placeholders/images/generic.jpg" alt="Generic" />`
    },
    { type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
  ]),
  argTypes: {
    ...argTypes,
    'shapes-attr': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...argTypes['shapes-attr'],
      control: 'text'
    }
  }
};

const increaseColumnWidth = (): ConstantDefinition => {
  return {
    type: 'template',
    name: 'width',
    value: `<div style="min-width: 300px; max-width: 600px; width: 100vw;">%TEMPLATE%</div>`
  };
};

/**
 * Default: This shows sd-brandshape in its default state.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 *  The different shapes of the brandshape.
 */
export const Shapes = {
  name: 'Shapes',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'shapes',
          values: ['["top", "middle", "bottom"]', '["top", "middle"]', '["middle", "bottom"]', '["top"]']
        }
      },
      args,
      constants: increaseColumnWidth()
    });
  }
};

/**
 *  The different variants of the brandshape.
 */
export const Variants = {
  name: 'Variants',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'variant',
          values: ['neutral-100', 'primary', 'white', 'border-primary', 'border-white', 'image']
        }
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: [
            'white',
            'white',
            'rgb(var(--sd-color-primary, 0 53 142))',
            'white',
            'rgb(var(--sd-color-primary, 0 53 142))',
            'white'
          ]
        },
        templateRenderer: ({ attributes, slots }) => {
          const inverted = ['neutral-100', 'white', 'border-primary'].includes(attributes.variant as string);
          const slotted = Object.entries(slots ?? {})
            .map(([, slot]) => slot)
            .join('\n');

          const attrs = Object.entries(attributes)
            .map(([attr, value]) => `${attr}='${value}'`)
            .join(' ');

          return `
          <sd-brandshape ${attrs}>
            ${inverted ? slotted.replace(' slot--inverted', '') : slotted}
          </sd-brandshape>`;
        }
      },
      args,
      constants: increaseColumnWidth()
    });
  }
};

/**
 * The different breakpoints of the brandshape.
 */
export const Breakpoints = {
  name: 'Breakpoints',
  render: (args: any) => {
    const getSize = (breakpoint: string): string => {
      const breakpoints: { [key: string]: string } = {
        '≤ 414px': '414px',
        '> 414px': '415px',
        '> 640px': '641px'
      };
      return breakpoints[breakpoint] || '100%';
    };
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'query width = ...',
          values: ['≤ 414px', '> 414px', '> 640px'].map(breakpoint => {
            return {
              title: breakpoint,
              value: `<div style="width: ${getSize(breakpoint)}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args
    });
  }
};

/**
 * Use the `base`, `content`, `shape-top`, `shape-middle` or `shape-bottom` part selectors to customize the brandshape.
 */
export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-brandshape::part(...){outline: solid 2px red}',
          values: ['base', 'content', 'shape-top', 'shape-middle', 'shape-bottom'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-brandshape::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: increaseColumnWidth()
    });
  }
};

/**
 * When using the 'image' variant, use the transform property to adjust the image position. In this example, the image is moved up and skewed to fit the brandshape.
 */
export const Sample = {
  name: 'Sample: Positioning Image Variant',
  render: () => {
    return generateTemplate({
      args: overrideArgs([
        {
          type: 'attribute',
          name: 'variant',
          value: 'image'
        },
        {
          type: 'slot',
          name: 'image',
          value: `<img slot="image" src="./placeholders/images/coins.jpg" alt="collaboration" />`
        },
        { type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
      ])
    });
  }
};

export const Image = {
  name: 'Image',
  render: () =>
    html`<div class="grid grid-cols-3 gap-20">
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-square.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-[200px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-square.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-[400px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-square.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-landscape.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-[200px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-landscape.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-[400px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-landscape.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-portrait.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-[200px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-portrait.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-[400px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-portrait.jpg" alt="Generic" />
        </sd-brandshape>
      </div>
      <div>
        <sd-brandshape variant="image" class="col-span-2">
          <div class="slot slot--border slot--text h-[400px] w-full">Default slot</div>
          <img slot="image" src="./images/brandshape-test-square.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image" class="col-span-2">
          <div class="slot slot--border slot--text h-[400px] w-full col-span-2">Default slot</div>
          <img slot="image" src="./images/brandshape-test-landscape.jpg" alt="Generic" />
        </sd-brandshape>
        <sd-brandshape variant="image" class="col-span-2">
          <div class="slot slot--border slot--text h-[400px] w-full col-span-2">Default slot</div>
          <img slot="image" src="./images/brandshape-test-portrait.jpg" alt="Generic" />
        </sd-brandshape>
      </div>`
};

export const Combination = generateScreenshotStory([Default, Shapes, Variants, Breakpoints, Parts, Sample, Image]);
