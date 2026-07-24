import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-file-selector');
const { generateTemplate } = storybookTemplate('sd-file-selector');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-file-selector',
  component: 'sd-file-selector',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `first example` to describe a feature.
 */
export const FirstExample = {
  render: () => html` <sd-file-selector> This is your first example. </sd-file-selector> `
};

/**
 * Use the `first example` to describe a feature.
 */
export const SecondExample = {
  render: () => html` <sd-file-selector droparea> This is your first example. </sd-file-selector> `
};
