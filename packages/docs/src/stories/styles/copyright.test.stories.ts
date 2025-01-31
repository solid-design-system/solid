import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-copyright');
const { overrideArgs } = storybookHelpers('sd-copyright');
const { generateTemplate } = storybookTemplate('sd-copyright');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Add a copyright at the bottom of a image.
 */
export default {
  title: 'Styles/sd-copyright/Screenshots: sd-copyright',
  tags: ['!autodocs'],
  component: 'sd-copyright',
  parameters: {
    ...parameters,
    controls: { disable: true }
  },
  args: overrideArgs(
    {
      type: 'slot',
      name: 'default',
      value: `<img src="./placeholders/images/generic.jpg" alt=" " class="aspect-video object-cover"/>`
    },
    {
      '--copyright': '© 2024 Solid Design System'
    }
  ),
  argTypes
};

export const Default = {
  name: 'Default',
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

export const Variants = {
  name: 'Variants',
  parameters: { controls: { exclude: ['sd-copyright--color-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-copyright--color-...' }
      },
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl text-left" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};

export const NoShadow = {
  name: 'No Shadow',
  parameters: { controls: { exclude: ['sd-copyright--no-shadow'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-copyright--no-shadow', values: [false, true] }
      },
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl text-left" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};

export const Orientation = {
  name: 'Orientation',
  parameters: { controls: { exclude: ['sd-copyright--orientation-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-copyright--orientation-...' }
      },
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl text-left" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};

export const Placement = {
  name: 'Placement',
  parameters: { controls: { exclude: ['sd-copyright--placement-...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'sd-copyright--placement-...' }
      },
      options: {
        templateContent: `<div class="%CLASSES% max-w-xl text-left" style="--copyright: '${args['--copyright']}';">%SLOT%</div>`
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, Variants, NoShadow, Orientation, Placement]);
