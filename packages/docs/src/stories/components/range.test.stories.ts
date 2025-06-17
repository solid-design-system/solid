import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-range');
const { overrideArgs } = storybookHelpers('sd-range');
const { generateTemplate } = storybookTemplate('sd-range');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-range/Screenshots: sd-range',
  component: 'sd-range',
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
