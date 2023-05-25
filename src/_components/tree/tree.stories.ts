import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tree');
const { generateTemplate } = storybookTemplate('sd-tree');

export default {
  title: 'Components/sd-tree',
  component: 'sd-tree',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tree in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
