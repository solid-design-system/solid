import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-image-comparer');
const { generateTemplate } = storybookTemplate('sd-image-comparer');

export default {
  title: 'Components/sd-image-comparer',
  component: 'sd-image-comparer',
  args,
  argTypes,
};


/**
 * Default: This shows sd-image-comparer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
