import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-qr-code');
const { generateTemplate } = storybookTemplate('sd-qr-code');

export default {
  title: 'Components/sd-qr-code',
  component: 'sd-qr-code',
  args,
  argTypes,
  parameters: {...parameters},
};


/**
 * Default: This shows sd-qr-code in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
