import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-popup');
const { defaultTemplate } = storybookTemplates('sd-popup');

export default {
  title: 'Components/sd-popup',
  component: 'sd-popup',
  args,
  argTypes,
};


/**
 * Default: This shows the popup in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
