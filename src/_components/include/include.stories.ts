import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-include');
const { generateTemplate } = storybookTemplate('sd-include');

export default {
  title: 'Components/sd-include',
  component: 'sd-include',
  args,
  argTypes,
};


/**
 * Default: This shows sd-include in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
