import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
const { args, argTypes, parameters } = storybookDefaults('sd-carousel');
const { generateTemplate } = storybookTemplate('sd-carousel');

export default {
  title: 'Components/sd-carousel',
  component: 'sd-carousel',
  args,
  argTypes,
  parameters: { ...parameters }
};

/**
 * This shows sd-carousel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};
