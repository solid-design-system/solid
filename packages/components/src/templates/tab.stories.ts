import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Tab',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3687-40468&t=ilrs806pHHSfnwKM-4'
    }
  }
};

/**
 * Example of a centered tab group.
 * To implement this sample, adjust the tabs CSS part as follows:
 *
 * ```css
 * sd-tab-group::part(tabs) {
    justify-content: center;
  }
 * ```
 */
export const TabCentered = {
  name: 'Tab Center Aligned',
  render: () =>
    html` <style>
        sd-tab-group#centered::part(tabs) {
          justify-content: center;
        }
      </style>
      <sd-tab-group activation id="centered">
        <sd-tab slot="nav" panel="tab-1">Gender</sd-tab>
        <sd-tab-panel name="tab-1">
          <figure class="sd-media pb-4">
            <img
              src="./placeholders/images/generic.jpg"
              alt="A generic placeholder jpg"
              class="aspect-video object-cover"
            />
          </figure>
          <p class="sd-paragraph">
            <b>DD. Month Year -</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio
            tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit
            neque tristique. Facilisis commodo integer hendrerit tortor.
          </p>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-2">Age diversity</sd-tab>
        <sd-tab-panel name="tab-2">
          <p class="sd-paragraph">
            Vivamus mattis mauris nec vulputate facilisis. Nulla facilisi. Pellentesque consectetur mi eget tristique
            vestibulum. Nunc porta urna sit amet magna congue feugiat. Quisque commodo arcu ex, eget mollis magna porta
            eu. Aliquam at turpis dolor. Quisque ut neque laoreet, cursus tellus non, venenatis elit.
          </p>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-3">Education</sd-tab>
        <sd-tab-panel name="tab-3">
          <p class="sd-paragraph">
            Sed dignissim ipsum vel ultricies interdum. Quisque posuere felis sit amet fringilla tristique. Donec velit
            ex, viverra id lorem hendrerit, congue gravida justo. Fusce ultricies tellus arcu, nec suscipit metus
            sagittis sed. Vestibulum lacinia enim eu tellus auctor, quis pulvinar felis varius.
          </p>
        </sd-tab-panel>
        <sd-tab slot="nav" panel="tab-4">Background</sd-tab>
        <sd-tab-panel name="tab-4">
          <p class="sd-paragraph">
            Maecenas aliquet nibh nec tempor ultrices. Donec mattis sapien sed elit tincidunt, quis feugiat risus
            facilisis. Cras rutrum venenatis dui, in sollicitudin nulla vestibulum nec. Maecenas sed imperdiet sapien,
            non lacinia ex. Etiam rhoncus ullamcorper sem, eu euismod ipsum volutpat non.
          </p>
        </sd-tab-panel>
      </sd-tab-group>`
};

export const TabWithBadge = {
  name: 'Tab with Badge',
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
        <p class="sd-paragraph">
          Maecenas aliquet nibh nec tempor ultrices. Donec mattis sapien sed elit tincidunt, quis feugiat risus
          facilisis. Cras rutrum venenatis dui, in sollicitudin nulla vestibulum nec. Maecenas sed imperdiet sapien, non
          lacinia ex. Etiam rhoncus ullamcorper sem, eu euismod ipsum volutpat non.
        </p>
      </sd-tab-panel>
    </sd-tab-group>`
};

export const TabWithIconBadge = {
  name: 'Tab with Icon and Badge',
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
        <sd-badge size="sm" class="mb-3 mr-2" variant="error"></sd-badge>
        Files
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
