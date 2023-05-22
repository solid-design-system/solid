import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-button-group');
const { generateTemplate } = storybookTemplate('sd-button-group');

export default {
  title: 'Components/sd-button-group',
  component: 'sd-button-group',
  args,
  argTypes,
};


/**
 * Default: This shows sd-button-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
