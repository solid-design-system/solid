import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-file-selector');
const { overrideArgs } = storybookHelpers('sd-file-selector');
const { generateTemplate } = storybookTemplate('sd-file-selector');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-file-selector/Screenshots: sd-file-selector',
  component: 'sd-file-selector',
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
