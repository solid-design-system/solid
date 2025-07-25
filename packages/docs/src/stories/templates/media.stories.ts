import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  title: 'Templates/Media',
  tags: ['!dev', 'autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true }
  }
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
