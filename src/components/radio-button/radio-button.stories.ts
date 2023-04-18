import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-radio-button');
const { defaultTemplate } = storybookTemplates('sd-radio-button');

export default {
  title: 'Components/sd-radio-button',
  component: 'sd-radio-button',
  args,
  argTypes,
};


/**
 * Default: This shows the radio-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
