import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
 * ### Map Marker with Image
 * Example of how to use a custom image as a map marker instead of the default pin icon. Use this variant when branded or contextual markers are needed to distinguish locations on a map.
 */
export const MapMakerWithImages = {
  render: () =>
    html`<sd-map-marker state="default" variant="place" label="Union Investment location" not-interactive>
      <img src="images/ui-brand-mark.png" alt="Brand mark of Union Investment" class="h-8 w-8 -mt-4" />
    </sd-map-marker>`
};
