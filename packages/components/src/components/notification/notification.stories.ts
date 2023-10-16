import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
const { args, argTypes, parameters } = storybookDefaults('sd-notification');
const { generateTemplate } = storybookTemplate('sd-notification');

export default {
  title: 'Components/sd-notification',
  component: 'sd-notification',
  args,
  argTypes,
  parameters: { ...parameters }
};
/**
 * This shows sd-notification in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
