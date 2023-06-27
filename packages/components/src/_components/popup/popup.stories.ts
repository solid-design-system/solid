import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-popup');
const { generateTemplate } = storybookTemplate('sd-popup');

export default {
  title: 'Components/sd-popup',
  component: 'sd-popup',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-popup in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
