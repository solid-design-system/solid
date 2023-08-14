import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-leadtext');
const { overrideArgs } = storybookHelpers('sd-leadtext');
const { generateTemplate } = storybookTemplate('sd-leadtext');

export default {
  title: 'Styles/sd-leadtext',
  component: 'sd-leadtext',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/G2kppjBPXzyQt6dFfGSPu2/Leadtext?type=design&node-id=755-5226&mode=design&t=8SvX76woqAGDbqn3-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-leadtext in its default state.
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
 * Use the `inverted` class to make a leadtext with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-leadtext--size-...', 'sd-leadtext--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [{ type: 'attribute', name: 'sd-leadtext--size-...' }]
      },
      constants: { type: 'attribute', name: 'sd-leadtext--inverted', value: true },
      options: { templateBackground: '#00358E' },
      args
    });
  }
};

/**
 * Use the `mark` class to highlight parts of the text inside leadtext with the green accent color.
 */

export const MarkAndInverted = {
  name: 'Mark × Inverted',
  parameters: { controls: { exclude: ['sd-leadtext--size-...', 'sd-leadtext--inverted', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'sd-leadtext--size-...'
        },
        y: {
          type: 'attribute',
          name: 'sd-leadtext--inverted',
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
