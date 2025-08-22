import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb-item');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb-item');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-breadcrumb-item/Screenshots: sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-required-parent',
            enabled: false
          }
        ]
      },
      options: {}
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=15550-5257&t=ODEg7n9EI3PRszyz-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `First level page`
    },
    {
      type: 'attribute',
      name: 'href',
      value: '#'
    }
  ]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Current = {
  name: 'Current',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
        { type: 'attribute', name: 'current', value: true },
        {
          type: 'slot',
          name: 'default',
          value: 'Current'
        }
      ]
    });
  }
};

export const Combination = generateScreenshotStory([Default, Current]);
