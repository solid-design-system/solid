import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-notification');
const { generateTemplate } = storybookTemplate('sd-notification');
const { overrideArgs } = storybookHelpers('sd-notification');

export default {
  title: 'Components/sd-notification',
  component: 'sd-notification',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
      <div class="slot slot--border slot--text h-8 my-auto w-full">Default slot</div>
      `
    }
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
