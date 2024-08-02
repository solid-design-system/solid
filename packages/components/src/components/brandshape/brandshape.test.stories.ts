/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-brandshape/Screenshot Tests',
  component: 'sd-brandshape',
  tags: ['!autodocs'],
  parameters: { ...parameters },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: '<div class="slot slot--border slot--text h-8 w-full">Default slot</div>'
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
  parameters: { controls: { exclude: ['shapes'] } },
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
  parameters: { controls: { exclude: ['variant'] } },
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
  parameters: {
    controls: { exclude: ['base', 'content', 'shape-top', 'shape-middle', 'shape-bottom'] }
  },
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

export const Combination = generateScreenshotStory({
  Default,
  Shapes,
  Variants,
  Breakpoints,
  Parts
});
