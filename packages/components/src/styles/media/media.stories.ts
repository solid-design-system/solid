import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-media');
const { overrideArgs } = storybookHelpers('sd-media');
const { generateTemplate } = storybookTemplate('sd-media');

/**
 * Used as an image or a video preview that can be displayed.
 */
export default {
  title: 'Styles/sd-media',
  tags: ['!dev'],
  component: 'sd-media',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes
};

export const Default = {
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

/**
 * Use the `sd-media--inverted` class to invert the color of the caption.
 */

export const Inverted = {
  render: () => html`
    <div class="p-4 bg-primary max-w-xl">
      <figure class="sd-media sd-media--inverted max-w-xl p-4">
        <img
          src="./placeholders/images/architecture.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
        <figcaption>Inverted</figcaption>
      </figure>
    </div>
  `
};
