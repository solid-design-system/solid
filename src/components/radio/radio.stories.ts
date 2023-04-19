import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-radio');
const { defaultTemplate } = storybookTemplates('sd-radio');

export default {
  title: 'Components/sd-radio',
  component: 'sd-radio',
  args,
  argTypes,
};


/**
 * Default: This shows sd-radio in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
