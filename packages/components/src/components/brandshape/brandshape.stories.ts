/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

export default {
  title: 'Components/sd-brandshape',
  component: 'sd-brandshape',
  parameters: { ...parameters },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: 'Default'
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
          name: 'variant'
        }
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['white', 'white', '#00358E']
        }
      },
      args,
      constants: increaseColumnWidth()
    });
  }
};

/**
 * Use the `base`, `content-top`, `content-middle`, `shape-top`, `shape-middle` or `shape-bottom` part selectors to customize the brandshape.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content-top', 'content-middle', 'shape-top', 'shape-middle', 'shape-bottom'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-brandshape::part(...){outline: solid 2px red}',
          values: ['base', 'content-middle', 'shape-top', 'shape-middle', 'shape-bottom'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-brandshape::part(${part}){outline: solid 2px red; fill: red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: increaseColumnWidth()
    });
  }
};
