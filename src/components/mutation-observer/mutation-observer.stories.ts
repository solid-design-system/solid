import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-mutation-observer');
const { defaultTemplate } = storybookTemplates('sd-mutation-observer');

export default {
  title: 'Components/sd-mutation-observer',
  component: 'sd-mutation-observer',
  args,
  argTypes,
};


/**
 * Default: This shows the mutation-observer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};
