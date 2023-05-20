import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-card');
const { generateTemplate } = storybookTemplate('sd-card');

export default {
  title: 'Components/sd-card',
  component: 'sd-card',
  args,
  argTypes,
};


/**
 * Default: This shows sd-card in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
