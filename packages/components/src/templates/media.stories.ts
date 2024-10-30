import '../solid-components';
import { html } from 'lit-html';

export default {
  title: 'Templates/Media',
  tags: ['!dev'],
  parameters: {
    chromatic: { disableSnapshot: true }
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
 * `Copyright` can be shown at the bottom of the default slot.
 */

export const Copyright = {
  render: () => html`
    <figure class="sd-media p-4">
      <div class="sd-copyright" style="--copyright: '© Union Investment 2024'">
        <img
          src="./placeholders/images/architecture.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
      </div>
    </figure>
  `
};
