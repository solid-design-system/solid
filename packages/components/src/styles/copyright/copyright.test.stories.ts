import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');
const { generateTemplate } = storybookTemplate('sd-copyright');

/**
 * Add a copyright at the bottom of a image.
 */
export default {
  title: 'Styles/sd-copyright/Screenshot Test',
  component: 'sd-copyright',
  parameters: {
    ...parameters
  },
  args: overrideArgs(
    {
      type: 'slot',
      name: 'default',
      value: `<img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>`
    },
    {
      '--copyright': '© 2024 Solid Design System'
    }
  ),
  argTypes
};

export const Default = {
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};
