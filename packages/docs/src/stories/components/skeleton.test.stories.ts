import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-skeleton');
const { overrideArgs } = storybookHelpers('sd-skeleton');
const { generateTemplate } = storybookTemplate('sd-skeleton');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-skeleton/Screenshots: sd-skeleton',
  component: 'sd-skeleton',
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
