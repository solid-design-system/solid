import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-range-tick');
const { generateTemplate } = storybookTemplate('sd-range-tick');

/**
 * Used to do something cool. (Describe usage of component here.)
 *
 * **Related templates**:
 * - [Link to template](?path=docs/templates-your-template)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-range-tick',
  component: 'sd-range-tick',
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

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
