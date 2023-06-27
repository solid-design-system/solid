import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-radio-button');
const { generateTemplate } = storybookTemplate('sd-radio-button');

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-radio-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
