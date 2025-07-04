import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

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
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=15911-3947&t=8iWCIgBhk0cwDsb7-0'
    }
  },
  args: overrideArgs([]),
  argTypes
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
