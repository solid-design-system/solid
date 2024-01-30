import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tab-group');
const { overrideArgs } = storybookHelpers('sd-tab-group');
const { generateTemplate } = storybookTemplate('sd-tab-group');

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `<sd-tab><div class="slot slot--text slot--border">Default Slot</div></sd-tab>
            <sd-tab><div class="slot slot--text slot--border">Default Slot</div></sd-tab>
            <sd-tab><div class="slot slot--text slot--border">Default Slot</div></sd-tab>`
  }),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-tab-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
