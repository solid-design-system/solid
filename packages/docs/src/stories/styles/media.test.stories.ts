import '../../../../components/src/solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-media');
const { overrideArgs } = storybookHelpers('sd-media');
const { generateTemplate } = storybookTemplate('sd-media');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Used to display an image or a video preview.
 */
export default {
  title: 'Styles/sd-media/Screenshots: sd-media',
  tags: ['!autodocs'],
  component: 'sd-media',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: `
          <figure class="%CLASSES% max-w-xl p-4">
              <img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>
            <figcaption>%SLOT%</figcaption>
          </figure>
      `
      },
      args
    });
  }
};

export const MediaSample = {
  name: 'Media Sample',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: `
          <figure class="%CLASSES% max-w-xl p-4">
            <div class="sd-copyright" style="--copyright: '© 2024 Solid Design System';">
              <img src="./placeholders/images/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>
            </div>
            <figcaption>%SLOT%</figcaption>
          </figure>
      `
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, MediaSample]);
