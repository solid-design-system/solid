import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-tag');
const { generateTemplate } = storybookTemplate('sd-tag');

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args,
  argTypes,
  parameters: {...parameters},
  decorators: [withActions] as any
};


/**
 * Default: This shows sd-tag in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
