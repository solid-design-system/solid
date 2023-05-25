import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-color-picker');
const { generateTemplate } = storybookTemplate('sd-color-picker');

export default {
  title: 'Components/sd-color-picker',
  component: 'sd-color-picker',
  args,
  argTypes,
};


/**
 * Default: This shows sd-color-picker in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
