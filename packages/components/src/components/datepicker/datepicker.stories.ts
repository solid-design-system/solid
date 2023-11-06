import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-datepicker');
const { generateTemplate } = storybookTemplate('sd-datepicker');

export default {
  title: 'Components/sd-datepicker',
  component: 'sd-datepicker',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-datepicker in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({args});
  }
};
