import '../../solid-components';

import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-avatar');
// const { overrideArgs } = storybookHelpers('sd-avatar');
const { generateTemplate } = storybookTemplate('sd-avatar');

export default {
  title: 'Styles/sd-avatar',
  component: 'sd-avatar',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  // args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-avatar in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<img class="%CLASSES%" src="./placeholders/family.jpg" />' },
      args
    });
  }
};

/**
 * Use the `variant` class to make a avatar with variants.
 */

export const Variant = {
  parameters: { controls: { exclude: ['sd-avatar--variant-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-avatar--variant-...' }
      },
      options: { templateContent: '<img class="%CLASSES%" src="./placeholders/family.jpg" />' },
      args
    });
  }
};
