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
 * The default version of a `quote` pattern showcases a quote in an appealing layout,
 * accompanied by an image of the speaker, along with their name and job description.
 * This adds context and personality to the quote, making it more engaging and relatable.
 *
 * ```
 * ```
 */

export const MapMarkerWithImage = {
  render: () =>
    html`<sd-map-marker state="default" variant="place">
      <sd-icon name="content/image" color="primary"></sd-icon>
    </sd-map-marker>`
};
