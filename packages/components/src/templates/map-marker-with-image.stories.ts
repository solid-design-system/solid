import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Map Marker with Image',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2544-19514&node-type=CANVAS&m=dev'
    }
  }
};

/**
 *
 * ```
 * ```
 */

export const Default = {
  render: () =>
    html`<sd-map-marker state="default" variant="place">
      <img src="./placeholders/images/bild.png" alt="The Bild logo" class="h-8 w-8 -mt-4" />
    </sd-map-marker>`
};
