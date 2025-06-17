import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-range');
const { generateTemplate } = storybookTemplate('sd-range');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-range',
  component: 'sd-range',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  decorators: [withActions] as any
};

// export const Default = {
//   render: (args: any) => {
//     return generateTemplate({args});
//   }
// };

/**
 * Use the `first example` to describe a feature.
 */
export const FirstExample = {
  render: () => html`
    <sd-range label="hello world" help-text="help text hello world" value="10 50">
      This is your first example.
    </sd-range>
  `
};
