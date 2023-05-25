import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-icon-button');
const { generateTemplate } = storybookTemplate('sd-icon-button');

export default {
  title: 'Components/sd-icon-button',
  component: 'sd-icon-button',
  args,
  argTypes,
};


/**
 * Default: This shows sd-icon-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
