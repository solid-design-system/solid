import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-visually-hidden');
const { defaultTemplate } = storybookTemplates('sd-visually-hidden');

export default {
  title: 'Components/sd-visually-hidden',
  component: 'sd-visually-hidden',
  args,
  argTypes,
};


/**
 * Default: This shows the visually-hidden in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
