import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-icon-button');
const { defaultTemplate } = storybookTemplates('sd-icon-button');

export default {
  title: 'Components/sd-icon-button',
  component: 'sd-icon-button',
  args,
  argTypes,
};


/**
 * Default: This shows the icon-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
