import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-map-marker');
const { overrideArgs } = storybookHelpers('sd-map-marker');
const { generateTemplate } = storybookTemplate('sd-map-marker');

/**
 * Used to show a location or a cluster of locations on a map.
 *
 * **Accessibility Hint**: if interactive, make sure to provide an accessible name using the `sr-only` class.
 *
 * **Related templates:**
 * - [Map Marker](?path=/docs/templates-map-marker--docs)
 */
export default {
  title: 'Components/sd-map-marker',
  tags: ['!dev'],
  component: 'sd-map-marker',
  args: overrideArgs([{ type: 'slot', name: 'default', value: '<div class="sr-only">Pinned Location</div>' }]),
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
      <sd-map-marker>
        <span class="sr-only">Pinned Location</span>
      </sd-map-marker>
      <sd-map-marker variant="place">
        <sd-icon name="content/image" color="primary"></sd-icon>
        <span class="sr-only">Pinned Place</span>
      </sd-map-marker>
      <sd-map-marker variant="cluster">
        88
        <span class="sr-only">Locations</span>
      </sd-map-marker>
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
        <sd-map-marker state="default">
          <span class="sr-only">Pinned location with default state</span>
        </sd-map-marker>
        <sd-map-marker state="hover">
          <span class="sr-only">Pinned location with hover state</span>
        </sd-map-marker>
        <sd-map-marker state="active">
          <span class="sr-only">Pinned location with active state</span>
        </sd-map-marker>
      </div>

      <div class="flex flex-col space-y-5">
        <sd-map-marker state="default" variant="place">
          <sd-icon name="content/image" color="primary"></sd-icon>
          <span class="sr-only">Pinned place with default state</span>
        </sd-map-marker>
        <sd-map-marker state="hover" variant="place">
          <sd-icon name="content/image" color="primary"></sd-icon>
          <span class="sr-only">Pinned place with hover state</span>
        </sd-map-marker>
        <sd-map-marker state="active" variant="place">
          <sd-icon name="content/image" color="primary"></sd-icon>
          <span class="sr-only">Pinned place with active state</span>
        </sd-map-marker>
      </div>

      <div class="flex flex-col space-y-5">
        <sd-map-marker state="default" variant="cluster">
          <span class="sr-only">Cluster of locations</span>
          88
        </sd-map-marker>
        <sd-map-marker state="hover" variant="cluster">
          <span class="sr-only">Hovered Cluster of locations</span>
          88
        </sd-map-marker>
      </div>
    </div>
  `
};

/**
 * Use the `animated` attribute to animate the marker.
 */
export const Animated = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-map-marker
        class="animated-example"
        variant="main"
        state="default"
        animated=""
        not-interactive
      ></sd-map-marker>
    </div>
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
      <div class="sr-only">Pinned Place with slot</div>
    </sd-map-marker>
  `
};

/**
 * Use the `not-interactive` attribute to render a marker that is not interactive.
 */
export const NotInteractive = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-map-marker not-interactive></sd-map-marker>
      <sd-map-marker variant="place" not-interactive>
        <sd-icon name="content/image" color="primary"></sd-icon>
      </sd-map-marker>
      <sd-map-marker variant="cluster" not-interactive> 88 </sd-map-marker>
    </div>
  `
};

/**
 * - Use the `href` attribute to enable the link.
 * - Use the `target` attribute to specify where to open the link.
 */
export const AsLink = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-map-marker
        href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
        target="_blank"
      >
        <span class="sr-only">Solid Design System by Union Investment</span>
      </sd-map-marker>
    </div>
  `
};
