import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-button-group');
const { defaultTemplate } = storybookTemplates('sd-button-group');

export default {
  title: 'Components/sd-button-group',
  component: 'sd-button-group',
  args,
  argTypes,
};


/**
 * Default: This shows the button-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
