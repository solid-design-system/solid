import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-media');
const { overrideArgs } = storybookHelpers('sd-media');
const { generateTemplate } = storybookTemplate('sd-media');

/**
 * Add a media caption to the bottom of an image.
 */
export default {
  title: 'Styles/sd-media',
  component: 'sd-media',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: `
          <figure class="%CLASSES% max-w-xl p-4">
              <img src="./placeholders/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>
            <figcaption>%SLOT%</figcaption>
          </figure>
      `
      },
      args
    });
  }
};

export const MediaSample = {
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
              <img src="./placeholders/generic.jpg" alt="A generic placeholder jpg" class="aspect-video object-cover"/>
            </div>
            <figcaption>%SLOT%</figcaption>
          </figure>
      `
      },
      args
    });
  }
};
