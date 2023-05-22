import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-rating');
const { generateTemplate } = storybookTemplate('sd-rating');

export default {
  title: 'Components/sd-rating',
  component: 'sd-rating',
  args,
  argTypes,
};


/**
 * Default: This shows sd-rating in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
