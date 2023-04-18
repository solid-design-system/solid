import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-color-picker');
const { defaultTemplate } = storybookTemplates('sd-color-picker');

export default {
  title: 'Components/sd-color-picker',
  component: 'sd-color-picker',
  args,
  argTypes,
};


/**
 * Default: This shows the color-picker in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
