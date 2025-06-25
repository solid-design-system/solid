import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-range-tick');
const { overrideArgs } = storybookHelpers('sd-range-tick');
const { generateTemplate } = storybookTemplate('sd-range-tick');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-range-tick/Screenshots: sd-range-tick',
  component: 'sd-range-tick',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([]),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'slot', name: 'default', value: '50' }] });
  }
};

export const Subtick = {
  name: 'Subtick',
  render: (args: any) => {
    return generateTemplate({ args, constants: [{ type: 'attribute', name: 'subtick', value: true }] });
  }
};

export const Combination = generateScreenshotStory([Default, Subtick]);
