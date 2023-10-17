import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-notification');
const { generateTemplate } = storybookTemplate('sd-notification');
const { overrideArgs } = storybookHelpers('sd-notification');

export default {
  title: 'Components/sd-notification',
  component: 'sd-notification',
  args: overrideArgs([
    { type: 'slot', name: 'icon', value: `<sd-icon name="close" library="system" color="currentColor"></sd-icon>` },
    {
      type: 'slot',
      name: 'default',
      value: `
        This is a notification. It is used to display important messages to the user.`
    },
  ]),
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
