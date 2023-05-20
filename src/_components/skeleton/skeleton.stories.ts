import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-skeleton');
const { generateTemplate } = storybookTemplate('sd-skeleton');

export default {
  title: 'Components/sd-skeleton',
  component: 'sd-skeleton',
  args,
  argTypes,
};


/**
 * Default: This shows sd-skeleton in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
