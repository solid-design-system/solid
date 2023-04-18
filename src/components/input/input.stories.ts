import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-input');
const { defaultTemplate } = storybookTemplates('sd-input');

export default {
  title: 'Components/sd-input',
  component: 'sd-input',
  args,
  argTypes,
};


/**
 * Default: This shows the input in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
