import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-spinner');
const { defaultTemplate, attributesTemplate } = storybookTemplates('sd-spinner');

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  args,
  argTypes,
};

/**
 * Those attributes are relevant for the stories in terms of design variations.
 * To make story creation faster and as there are lots of them, it is easier to
 * define them here and use it later.
 */

const relevantAttributes = [
  'variant',
  'size',
];

/**
 * Default: This shows sd-spinner in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};

/**
 * Use the `size` attribute to change the size of the spinner.
 */

export const Size = {
  parameters: { controls: { exclude: relevantAttributes } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args },
        attributes: ['size'],
      }
    );
  }
};

/**
 * Use the `variant` attribute to change the color of the spinner and correspond with the parents variant.
 */

export const Variant = {
  parameters: { controls: { exclude: relevantAttributes } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args },
        attributes: ['variant'],
      }
    );
  }
};