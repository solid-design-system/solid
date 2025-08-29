import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-datepicker');
const { overrideArgs } = storybookHelpers('sd-datepicker');
const { generateTemplate } = storybookTemplate('sd-datepicker');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-datepicker/Screenshots: sd-datepicker',
  component: 'sd-datepicker',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([{}]),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
