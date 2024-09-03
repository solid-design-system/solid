import '../solid-components';
import { html } from 'lit-html';

/**
 * You can use the copyright element together with the media.
 *
 * ```
 * ```
 *
 */

export default {
  title: 'Templates/Media',
  tags: ['!dev'],
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
/**
 * `Description` can be shown at the bottom.
 */
export const MediaWithDescription = {
  render: () => html`
    <figure class="sd-media max-w-xl p-4">
      <img
        src="./placeholders/images/architecture.jpg"
        alt="A generic placeholder jpg"
        class="aspect-video object-cover"
      />
      <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</figcaption>
    </figure>
  `
};

export const MediaWithCopyright = {
  render: () => html`
    <figure class="sd-media max-w-xl p-4">
      <div class="sd-copyright" style="--copyright: '© 2024 Solid Design System';">
        <img
          src="./placeholders/images/architecture.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
      </div>
    </figure>
  `
};
