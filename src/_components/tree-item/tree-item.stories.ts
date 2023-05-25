import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tree-item');
const { generateTemplate } = storybookTemplate('sd-tree-item');

export default {
  title: 'Components/sd-tree-item',
  component: 'sd-tree-item',
  args,
  argTypes,
};


/**
 * Default: This shows sd-tree-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
