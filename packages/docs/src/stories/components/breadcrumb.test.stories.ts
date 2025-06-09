import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-breadcrumb/Screenshots: sd-breadcrumb',
  component: 'sd-breadcrumb',
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
      value: `
        <sd-breadcrumb-item href="#">Breadcrumb item</sd-breadcrumb-item>
        <sd-breadcrumb-item href="#">Breadcrumb item</sd-breadcrumb-item>
        <sd-breadcrumb-item current>Current breadcrumb item</sd-breadcrumb-item>
      `
    }
  ]),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
