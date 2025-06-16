import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb-item');
const { overrideArgs } = storybookHelpers('sd-breadcrumb-item');
const { generateTemplate } = storybookTemplate('sd-breadcrumb-item');

/**
 * Used to visualize a page's location within the site's hierarchy and provide easy navigation to previous sections.
 */
export default {
  tags: ['!dev', 'skip-a11y-[aria-required-parent]'],
  title: 'Components/sd-breadcrumb-item',
  component: 'sd-breadcrumb-item',

  argTypes,
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
