import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate
} from '../../../../components/scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tab-panel');
const { overrideArgs } = storybookHelpers('sd-tab-panel');
const { generateTemplate } = storybookTemplate('sd-tab-panel');

export default {
  title: 'Components/sd-tab-panel/Screenshots: sd-tab-panel',
  tags: ['!autodocs'],
  component: 'sd-tab-panel',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--text slot--border">Default Slot</div>`
    },
    {
      type: 'attribute',
      name: 'active',
      value: true
    },
    {
      type: 'cssProperty',
      name: '--padding',
      value: '24px'
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-tab-panel in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
