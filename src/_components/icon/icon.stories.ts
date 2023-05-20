import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-icon');
const { generateTemplate } = storybookTemplate('sd-icon');

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
  args,
  argTypes,
};


/**
 * Default: This shows sd-icon in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
