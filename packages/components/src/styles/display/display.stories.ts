import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-display');
const { overrideArgs } = storybookHelpers('sd-display');
const { generateTemplate } = storybookTemplate('sd-display');

export default {
  title: 'Styles/sd-display',
  component: 'sd-display',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2b3TvrfxawUSvpnQEqSowL/Display?type=design&node-id=954-4198&mode=design&t=JogAvP1YEInWjWEF-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-display in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="%CLASSES%">%SLOT%</time>' },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a display with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-display--size-...', 'sd-display--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [{ type: 'attribute', name: 'sd-display--size-...' }]
      },
      constants: { type: 'attribute', name: 'sd-display--inverted', value: true },
      options: { templateBackground: '#00358E' },
      args
    });
  }
};

/**
 * Use the `mark` class to highlight parts of the text inside display with the green accent color.
 */

export const MarkAndInverted = {
  name: 'Mark × Inverted',
  parameters: { controls: { exclude: ['sd-display--size-...', 'sd-display--inverted', 'default'] } },
  render: (args: any) => {
    console.log('args', args);
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'sd-display--size-...'
        },
        y: {
          type: 'attribute',
          name: 'sd-display--inverted',
          values: [false, true]
        }
      },
      constants: { type: 'slot', name: 'default', value: 'Lorem <mark class="sd-mark">Ipsum</mark>' },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};
