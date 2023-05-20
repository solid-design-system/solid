import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-spinner');
const { generateTemplate } = storybookTemplate('sd-spinner');

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  args,
  argTypes
};

/**
 * Default: This shows sd-spinner in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
