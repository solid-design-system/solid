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
    value: `
    <sd-tab-group>
    <sd-tab slot="nav" panel="tab-1">Tab 1</sd-tab>
    <sd-tab slot="nav" panel="tab-2">Tab 2</sd-tab>
    <sd-tab slot="nav" panel="tab-3">Tab 3</sd-tab>
    <sd-tab slot="nav" panel="tab-4">Tab 4</sd-tab>
    <sd-tab slot="nav" panel="tab-5">Tab 5</sd-tab>

  
    <sd-tab-panel name="tab-1"><div class="slot slot--text slot--border">Default Slot</div></sd-tab-panel>
    <sd-tab-panel name="tab-2"><div class="slot slot--text slot--border">Default Slot</div></sd-tab-panel>
    <sd-tab-panel name="tab-3"><div class="slot slot--text slot--border">Default Slot</div></sd-tab-panel>
    <sd-tab-panel name="tab-4"><div class="slot slot--text slot--border">Default Slot</div></sd-tab-panel>
    <sd-tab-panel name="tab-5"><div class="slot slot--text slot--border">Default Slot</div></sd-tab-panel>
  </sd-tab-group>
  
            `
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
