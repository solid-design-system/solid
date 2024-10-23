import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-map-marker');
const { generateTemplate } = storybookTemplate('sd-map-marker');

/**
 * Used to show a location or a cluster of locations on a map.
 *
 * **Related templates:**
 * - [Map Marker](?path=/docs/templates-map-marker--docs)
 */
export default {
  title: 'Components/sd-map-marker',
  tags: ['!dev'],
  component: 'sd-map-marker',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2544-17460&node-type=FRAME&m=dev'
    }
  },
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to change the appearance of the marker:
 *
 * - `main` (default)
 * - `place`: Used to show a location on the map
 * - `cluster`: Used to show multiple locations on the map
 */
export const Variant = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-map-marker></sd-map-marker>
      <sd-map-marker variant="place">
        <sd-icon name="content/image" color="primary"></sd-icon>
      </sd-map-marker>
      <sd-map-marker variant="cluster"> 88 </sd-map-marker>
    </div>
  `
};

/**
 * Use the `state` attribute to change the appearance of the marker:
 *
 * - `default`
 * - `hover`: When the marker is hovered
 * - `active`: When the marker is active
 */
export const State = {
  render: () => html`
    <div class="flex gap-12">
      <div class="flex flex-col space-y-5">
        <sd-map-marker state="default"></sd-map-marker>
        <sd-map-marker state="hover"></sd-map-marker>
        <sd-map-marker state="active"></sd-map-marker>
      </div>

      <div class="flex flex-col space-y-5">
        <sd-map-marker state="default" variant="place">
          <sd-icon name="content/image" color="primary"></sd-icon>
        </sd-map-marker>
        <sd-map-marker state="hover" variant="place">
          <sd-icon name="content/image" color="primary"></sd-icon>
        </sd-map-marker>
        <sd-map-marker state="active" variant="place">
          <sd-icon name="content/image" color="primary"></sd-icon>
        </sd-map-marker>
      </div>

      <div class="flex flex-col space-y-5">
        <sd-map-marker state="default" variant="cluster"> 88 </sd-map-marker>
        <sd-map-marker state="hover" variant="cluster"> 88 </sd-map-marker>
      </div>
    </div>
  `
};

/**
 * Use the `animated` attribute to animate the marker.
 */
export const Animated = {
  render: () => html`
    <sd-map-marker class="animated-example" variant="main" state="default" animated=""></sd-map-marker>
    <script>
      const marker = document.querySelector('.animated-example');
      setInterval(() => {
        marker.animated = !marker.animated;
      }, 2000);
    </script>
  `
};

/**
 * Use the `default` slot to include content in the marker.
 */
export const Slot = {
  render: () => html`
    <sd-map-marker variant="place" class="slot-example">
      <span class="slot slot--border h-8 w-8 -mt-4"></span>
    </sd-map-marker>
  `
};
