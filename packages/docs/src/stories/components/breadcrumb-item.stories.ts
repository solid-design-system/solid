import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb-item');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb-item');

/**
 * Used to visualize a page's location within the site's hierarchy and provide easy navigation to previous sections.
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',

  argTypes,
  parameters: {
    ...parameters,
    controls: { disable: true },
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
      value: 'First level page'
    },
    { type: 'attribute', name: 'href', value: '#' }
  ])
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `current` attribute for the last breadcrumb-item.
 */
export const Current = {
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
