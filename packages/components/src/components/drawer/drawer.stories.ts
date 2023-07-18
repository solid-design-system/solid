import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');
const { overrideArgs } = storybookHelpers('sd-drawer');

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',
  args: overrideArgs({ type: 'attribute', name: 'open', value: true }),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-drawer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
