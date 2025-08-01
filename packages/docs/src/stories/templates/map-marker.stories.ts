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
 */
export const MapMakerWithImages = {
  render: () =>
    html`<sd-map-marker state="default" variant="place" label="Union Investment location" not-interactive>
      <img src="images/ui-brand-mark.png" alt="Brand mark of Union Investment" class="h-8 w-8 -mt-4" />
    </sd-map-marker>`
};
