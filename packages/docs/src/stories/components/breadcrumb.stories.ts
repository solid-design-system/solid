import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-breadcrumb',
  component: 'sd-breadcrumb',
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-breadcrumb-item href="#">Breadcrumb item</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Breadcrumb item</sd-breadcrumb-item>
        <sd-breadcrumb-item>Current breadcrumb item</sd-breadcrumb-item>
      `
    }
  ]),
  decorators: [withActions] as any
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
  render: () => html` <sd-breadcrumb> This is your first example. </sd-breadcrumb> `
};
