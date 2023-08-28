import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-popup');
const { generateTemplate } = storybookTemplate('sd-popup');

/**
 * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
 */

export default {
  title: 'Components/sd-popup',
  component: 'sd-popup',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-popup in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
