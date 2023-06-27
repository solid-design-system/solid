import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-visually-hidden');
const { generateTemplate } = storybookTemplate('sd-visually-hidden');

export default {
  title: 'Components/sd-visually-hidden',
  component: 'sd-visually-hidden',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-visually-hidden in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
