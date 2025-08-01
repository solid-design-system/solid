import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-media');
const { overrideArgs } = storybookHelpers('sd-media');
const { generateTemplate } = storybookTemplate('sd-media');

export default {
  title: 'Styles/sd-media',
  tags: ['!dev', 'autodocs'],
  component: 'sd-media',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2784-16896&t=4wQWPA7fIC0v9u7i-4'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
  }),
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
 * Use the html `figcaption` element to add a description.
 */
export const Description = {
  render: () => html`
    <figure class="sd-media p-4">
      <img
        src="./placeholders/images/architecture.jpg"
        alt="A generic placeholder jpg"
        class="aspect-video object-cover"
      />
      <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</figcaption>
    </figure>
  `
};

/**
 * Use the `sd-media--inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => html`
    <div class="p-4 bg-primary">
      <figure class="sd-media sd-media--inverted p-4">
        <img
          src="./placeholders/images/architecture.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
        <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</figcaption>
      </figure>
    </div>
  `
};
