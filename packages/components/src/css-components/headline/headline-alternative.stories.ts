import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-headline');
const { overrideArgs } = storybookHelpers('sd-headline');
const { generateTemplate } = storybookTemplate('sd-headline');

/**
 * List of meta information like file size, date or whatever needed.
 */

export default {
  title: 'Styles/sd-headline',
  component: 'sd-headline',
  parameters,
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes
};

/**
 * Default: This shows sd-headline in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ options: { templateContent: '<div class="%CLASSES%">%SLOT%</div>' }, args });
  }
};

/**
 * When inserting an `<sd-icon>` into the default slot, the button will be rendered as an icon-only button.
 */

export const Sizes = {
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'sd-headline--size-...' }
      },
      args,
      options: { templateContent: '<div class="%CLASSES%">%SLOT%</div>' }
    });
  }
};
