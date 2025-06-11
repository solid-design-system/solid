import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb-item');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb-item');

export default {
  title: 'Components/sd-breadcrumb-item/Screenshots: sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',
  tags: ['!autodocs'],
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
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Current = {
  render: (args: any) => {
    return generateTemplate({ args, constants: { type: 'attribute', name: 'current', value: true } });
  }
};
