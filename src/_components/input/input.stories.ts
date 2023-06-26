import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
  args,
  argTypes,
  parameters: {...parameters},
  decorators: [withActions] as any
};


/**
 * Default: This shows sd-input in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
