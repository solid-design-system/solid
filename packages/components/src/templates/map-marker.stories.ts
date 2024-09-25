import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Map Marker',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3274-15606&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * ### Map Maker with Images
 */
export const MapMakerWithImages = {
  render: () =>
    html`<sd-map-marker state="default" variant="place">
      <img src="./placeholders/images/bild.png" alt="The Bild logo" class="h-8 w-8 -mt-4" />
    </sd-map-marker>`
};
