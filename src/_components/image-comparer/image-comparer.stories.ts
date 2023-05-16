import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-image-comparer');
const { defaultTemplate } = storybookTemplates('sd-image-comparer');

export default {
  title: 'Components/sd-image-comparer',
  component: 'sd-image-comparer',
  args,
  argTypes,
};


/**
 * Default: This shows sd-image-comparer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
