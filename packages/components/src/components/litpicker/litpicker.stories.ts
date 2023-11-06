import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-litpicker');
const { generateTemplate } = storybookTemplate('sd-litpicker');

export default {
  title: 'Components/sd-litpicker',
  component: 'sd-litpicker',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-litpicker in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({args});
  }
};
