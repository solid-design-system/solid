import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-tree-item');
const { defaultTemplate } = storybookTemplates('sd-tree-item');

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
    return defaultTemplate(args);
  }
};
