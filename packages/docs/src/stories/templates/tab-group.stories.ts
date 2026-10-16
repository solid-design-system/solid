import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Tab Group',
  parameters: {
    relatedLinks: [
      'components/sd-tab-group',
      'components/sd-tab',
      'components/sd-tab-panel',
      'components/sd-badge',
      'styles/sd-chip'
    ],
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3687-40468&t=ilrs806pHHSfnwKM-4'
    }
  }
};

/**
 * Example of how to use a center-aligned tab group to switch between related content panels. Use this layout when the tab content is visually prominent and benefits from a centered composition.
 */
export const TabCentered = {
  name: 'Tab Group Center Aligned',
  render: () =>
    html` <sd-tab-group activation centered>
      <sd-tab slot="nav" panel="tab-1">Gender</sd-tab>
      <sd-tab-panel name="tab-1">
        <figure class="sd-media sd-copyright" style="--copyright: '© Photo by Austin Distel on Unsplash';">
          <img
            src="./placeholders/images/collaboration.jpg"
            alt="Two men in business attire sitting on a sofa in a modern office, smiling and looking at a laptop screen."
            class="aspect-video object-cover"
          />
        </figure>
        <p class="sd-paragraph mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis
          commodo integer hendrerit tortor.
        </p>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">Age diversity</sd-tab>
      <sd-tab-panel name="tab-2">
        <figure class="sd-media sd-copyright" style="--copyright: '© Photo by Nathan Dumlao on Unsplash';">
          <img
            src="./placeholders/images/family.jpg"
            alt="A man with glasses and a beard holding two young children in his arms, smiling outdoors with trees in the background."
            class="aspect-video object-cover"
          />
        </figure>
        <p class="sd-paragraph mt-4">
          Vivamus mattis mauris nec vulputate facilisis. Nulla facilisi. Pellentesque consectetur mi eget tristique
          vestibulum. Nunc porta urna sit amet magna congue feugiat. Quisque commodo arcu ex, eget mollis magna porta
          eu. Aliquam at turpis dolor. Quisque ut neque laoreet, cursus tellus non, venenatis elit.
        </p>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3">Education</sd-tab>
      <sd-tab-panel name="tab-3">
        <figure class="sd-media sd-copyright" style="--copyright: '© Photo by Dan Dimmock on Unsplash';">
          <img
            src="./placeholders/images/workspace.jpg"
            alt="Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
            class="aspect-video object-cover"
          />
        </figure>
        <p class="sd-paragraph mt-4">
          Sed dignissim ipsum vel ultricies interdum. Quisque posuere felis sit amet fringilla tristique. Donec velit
          ex, viverra id lorem hendrerit, congue gravida justo. Fusce ultricies tellus arcu, nec suscipit metus sagittis
          sed. Vestibulum lacinia enim eu tellus auctor, quis pulvinar felis varius.
        </p>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-4">Background</sd-tab>
      <sd-tab-panel name="tab-4">
        <figure class="sd-media sd-copyright" style="--copyright: '© Photo by Austin Distel on Unsplash';">
          <img
            src="./placeholders/images/collaboration.jpg"
            alt="Two men in business attire sitting on a sofa in a modern office, smiling and looking at a laptop screen."
            class="aspect-video object-cover"
          />
        </figure>
        <p class="sd-paragraph mt-4">
          Maecenas aliquet nibh nec tempor ultrices. Donec mattis sapien sed elit tincidunt, quis feugiat risus
          facilisis. Cras rutrum venenatis dui, in sollicitudin nulla vestibulum nec. Maecenas sed imperdiet sapien, non
          lacinia ex. Etiam rhoncus ullamcorper sem, eu euismod ipsum volutpat non.
        </p>
      </sd-tab-panel>
    </sd-tab-group>`
};

/**
 * Example of how to use a centered container tab group with icons on mobile screens. Keep it to two tabs with short labels so both fit on small screens without scrolling.
 */
export const TabCenteredMobile = {
  name: 'Tab Group Mobile with Icons',
  render: () => html`
    <div class="max-w-[375px]">
      <sd-tab-group activation centered>
        <sd-tab slot="nav" panel="tab-1" variant="container">
          <sd-icon slot="left" name="system/calendar"></sd-icon>
          Savings plans
        </sd-tab>
        <sd-tab-panel name="tab-1">
          <h3 class="sd-headline sd-headline--size-3xl">Savings plans</h3>
          <p class="sd-paragraph sd-paragraph--size-sm mt-4">Invest regularly and adjust your plans at any time.</p>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <h4 class="sd-headline sd-headline--size-lg">UniGlobal</h4>
              <span class="sd-chip sd-chip--size-sm">Active</span>
            </div>
            <p class="sd-paragraph sd-paragraph--size-sm mt-4">100 EUR monthly · next on 15.10.2026</p>
            <sd-link href="#" size="sm">Edit plan</sd-link>
            <sd-divider class="my-6"></sd-divider>
            <div class="flex items-center justify-between">
              <h4 class="sd-headline sd-headline--size-lg">UniRak</h4>
              <span class="sd-chip sd-chip--size-sm">Paused</span>
            </div>
            <p class="sd-paragraph sd-paragraph--size-sm mt-4">50 EUR monthly · paused since 01.09.2026</p>
            <sd-link href="#" size="sm">Resume plan</sd-link>
            <sd-divider class="mt-6"></sd-divider>
          </div>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2" variant="container">
          <sd-icon slot="left" name="system/star-filled"></sd-icon>
          Favorites
        </sd-tab>
        <sd-tab-panel name="tab-2">
          <h3 class="sd-headline sd-headline--size-3xl">Favorites</h3>
          <p class="sd-paragraph sd-paragraph--size-sm mt-4">Keep track of the funds you are interested in.</p>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <h4 class="sd-headline sd-headline--size-lg">UniEuroRenta</h4>
            </div>
            <p class="sd-paragraph sd-paragraph--size-sm mt-4">Bond fund · added on 03.08.2026</p>
            <sd-link href="#" size="sm">View fund</sd-link>
            <sd-divider class="mt-6"></sd-divider>
          </div>
        </sd-tab-panel>
      </sd-tab-group>
    </div>
  `
};

/**
 * Example of how to add a badge to a tab label to surface unread or new item counts directly in the navigation. The active tab reveals a content list where individual items are marked with a "New" chip, combining two layers of status indication.
 */

export const TabWithBadge = {
  name: 'Tab Group with Badge',
  render: () =>
    html` <sd-tab-group activation>
      <sd-tab slot="nav" panel="tab-1">
        Notifications
        <sd-badge class="ml-2">3</sd-badge>
      </sd-tab>
      <sd-tab-panel name="tab-1">
        <h3 class="sd-headline sd-headline--size-3xl">Nisi eu excepteur anim esse</h3>
        <p class="sd-paragraph mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis
          commodo integer hendrerit tortor.
        </p>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">Reminders</sd-tab>
      <sd-tab-panel name="tab-2">
        <h3 class="sd-headline sd-headline--size-3xl">Lorem ipsum dolor sit amet</h3>
        <p class="sd-paragraph mt-2">
          Maecenas aliquet nibh nec tempor ultrices. Donec mattis sapien sed elit tincidunt, quis feugiat risus
          facilisis. Cras rutrum venenatis dui, in sollicitudin nulla vestibulum nec. Maecenas sed imperdiet sapien, non
          lacinia ex. Etiam rhoncus ullamcorper sem, eu euismod ipsum volutpat non.
        </p>
      </sd-tab-panel>
    </sd-tab-group>`
};

/**
 * Example of how to combine icons, labels, and badges within tab items for a compact, information-dense navigation. Each tab uses an icon alongside its label, and a badge on the active tab indicates relevant items in that panel.
 */

export const TabWithIconBadge = {
  name: 'Tab Group with Icon and Badge',
  render: () => html`
    <sd-tab-group activation>
      <sd-tab slot="nav" panel="tab-1">
        <sd-icon slot="left" name="system/dashboard" class="pr-2"></sd-icon>
        Dashboard
      </sd-tab>
      <sd-tab-panel name="tab-1">
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis
          commodo integer hendrerit tortor.
        </p>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-2">
        <sd-icon slot="left" name="system/folder"></sd-icon>
        <sd-badge size="sm" class="mb-[1rem] mr-[0.75rem] -ml-[0.30rem]" variant="red">New Notification</sd-badge>
        <span class="-ml-[0.50rem]">Files</span>
      </sd-tab>
      <sd-tab-panel name="tab-2">
        <p class="sd-paragraph">
          Vivamus mattis mauris nec vulputate facilisis. Nulla facilisi. Pellentesque consectetur mi eget tristique
          vestibulum. Nunc porta urna sit amet magna congue feugiat. Quisque commodo arcu ex, eget mollis magna porta
          eu. Aliquam at turpis dolor. Quisque ut neque laoreet, cursus tellus non, venenatis elit.
        </p>
      </sd-tab-panel>
      <sd-tab slot="nav" panel="tab-3">
        <sd-icon slot="left" name="system/highlighter" class="pr-2"></sd-icon>
        Notes
      </sd-tab>
      <sd-tab-panel name="tab-3">
        <p class="sd-paragraph">
          Sed dignissim ipsum vel ultricies interdum. Quisque posuere felis sit amet fringilla tristique. Donec velit
          ex, viverra id lorem hendrerit, congue gravida justo. Fusce ultricies tellus arcu, nec suscipit metus sagittis
          sed. Vestibulum lacinia enim eu tellus auctor, quis pulvinar felis varius.
        </p>
      </sd-tab-panel>
    </sd-tab-group>
  `
};
