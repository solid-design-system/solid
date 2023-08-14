import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-meta-information');
const { overrideArgs } = storybookHelpers('sd-meta-information');
const { generateTemplate } = storybookTemplate('sd-meta-information');

/**
 * List of meta information like file size, date or whatever needed.
 */

export default {
  title: 'Styles/sd-meta-information',
  component: 'sd-meta-information',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Um1B3fI5fvdFVJv6LO7kZG/Meta-Information?type=design&node-id=0-1&mode=design&t=I2fDQn7HjSc75K1V-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: '11. August 2023' }),
  argTypes
};

/**
 * Default: This shows sd-meta-information in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<time class="%CLASSES%" datetime="2023-08-11">%SLOT%</time>' },
      args
    });
  }
};

/**
 * The sd-meta-information in all possible combinations of `variant` and `size`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
  parameters: { controls: { exclude: ['sd-meta-information--color-additional', 'sd-meta-information--size-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-meta-information--color-additional' },
        y: { type: 'attribute', name: 'sd-meta-information--size-...' }
      },
      args
    });
  }
};

/**
 * The sd-meta-information in all possible combinations of `variant` and `inverted`.
 */

export const VariantAndInverted = {
  name: 'Variant × Inverted',
  parameters: { controls: { exclude: ['sd-meta-information--color-additional', 'sd-meta-information--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-meta-information--color-additional' },
        y: { type: 'attribute', name: 'sd-meta-information--inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};

/**
 * Use the `inverted` class to make the sd-meta-information with inverted colors.
 */

export const Inverted = {
  parameters: {
    controls: {
      exclude: [
        'sd-meta-information--size-...',
        'sd-meta-information--inverted',
        'sd-meta-information--color-additional'
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'sd-meta-information--size-...' },
          { type: 'attribute', name: 'sd-meta-information--color-additional' },
          { type: 'attribute', name: 'sd-meta-information--pipe' }
        ]
      },
      constants: { type: 'attribute', name: 'sd-meta-information--inverted', value: true },
      options: { templateBackground: '#00358E' },
      args
    });
  }
};

/**
 * The sd-meta-information with pipe.
 */

export const Pipe = {
  parameters: { controls: { exclude: ['sd-meta-information--pipe', 'sd-meta-information--size-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-meta-information--pipe' },
        y: { type: 'attribute', name: 'sd-meta-information--size-...' }
      },
      args
    });
  }
};
