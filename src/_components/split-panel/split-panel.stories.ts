import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-split-panel');
const { generateTemplate } = storybookTemplate('sd-split-panel');

export default {
  title: 'Components/sd-split-panel',
  component: 'sd-split-panel',
  args,
  argTypes,
};


/**
 * Default: This shows sd-split-panel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
