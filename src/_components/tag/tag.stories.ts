import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tag');
const { generateTemplate } = storybookTemplate('sd-tag');

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tag in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
