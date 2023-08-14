import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-format-date');
const { generateTemplate } = storybookTemplate('sd-format-date');

export default {
  title: 'SDS Components/sd-format-date',
  component: 'sd-format-date',
  args,
  argTypes,
  parameters: {...parameters},
  decorators: [withActions] as any
};


/**
 * Default: This shows sd-format-date in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
