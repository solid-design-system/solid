import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-display');
const { overrideArgs } = storybookHelpers('sd-display');
const { generateTemplate } = storybookTemplate('sd-display');

/**
 * Display provides larger text sizes that are not used as headlines. <br>
 * <br>
 * The different sizes allow for a more versatile styling of text elements. Display text should not be used as substitute for headlines.<br>
 * <br>
 * <b>Sizes</b>
 * <li>xl is the default size.</li>
 */

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
      options: { templateContent: '<p class="%CLASSES%">%SLOT%</p>' },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a display with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-display--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-display--inverted', values: [false, true] }]
      },
      constants: { type: 'attribute', name: 'sd-display--inverted', value: true },
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      },
      args
    });
  }
};
