import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb-item');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb-item');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',

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
      value: 'Breadcrumb item'
    },
    { type: 'attribute', name: 'href', value: '#' }
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
  render: () => html` <sd-breadcrumb-item href="#"> This is your first example. </sd-breadcrumb-item> `
};
