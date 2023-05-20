import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-range');
const { generateTemplate } = storybookTemplate('sd-range');

export default {
  title: 'Components/sd-range',
  component: 'sd-range',
  args,
  argTypes,
};


/**
 * Default: This shows sd-range in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
