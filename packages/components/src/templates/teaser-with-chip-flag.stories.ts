import '../solid-components';
import { html } from 'lit-html';

/**
 * Examples of usage of the components together.
 *
 * ```
 * ```
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Teaser with Chip and Flag',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IUiRoK2jiW8ydM77uiY2RX/Chip?node-id=0-1&t=AZrPY5M4MtrvP04v-0'
    }
  }
};

export const TeaserWithChipAndFlag = {
  name: 'Teaser with Chip and Flag',
  parameters: {
    controls: {
      disable: true
    },
    backgrounds: {
      default: 'white'
    }
  },
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/generic.jpg"
              alt="A generic placeholder jpg"
            />
            <span class="absolute top-3 left-4 sd-chip sd-chip--white">chip name</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-200">flag name</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at,
              interdum tortor.
            </p>
            <div class="flex flex-row gap-2">
              <span class="sd-chip">chip name</span>
              <span class="sd-chip">chip name</span>
            </div>
            <div class="flex-none">
              <sd-button variant="primary">Label</sd-button>
            </div>
          </div>
        </sd-teaser>

        <sd-teaser id="teaserWithContentPlaceholder" variant="primary-100" breakpoint="9999" inset class="flex flex-1">
          <div slot="media" class="relative flex items-center place-content-center h-full">
            <sd-icon name="content/picture" library="global-resources" color="primary" class="text-[5rem]"></sd-icon>
            <span class="absolute top-3 left-4 sd-chip sd-chip--primary-300">chip name</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-500">flag name</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at,
              interdum tortor.
            </p>
            <div class="flex flex-row gap-2">
              <span class="sd-chip sd-chip--primary-300">chip name</span>
              <span class="sd-chip sd-chip--primary-300">chip name</span>
            </div>
            <div class="flex-none">
              <sd-button variant="primary">Label</sd-button>
            </div>
          </div>
        </sd-teaser>

        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/generic.jpg"
              alt="A generic placeholder jpg"
            />
            <span class="absolute top-3 left-4 sd-chip sd-chip--white">chip name</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-200">flag name</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at,
              interdum tortor.
            </p>
            <div class="flex flex-row gap-2">
              <span class="sd-chip sd-chip--primary-500">chip name</span>
              <span class="sd-chip sd-chip--primary-500">chip name</span>
            </div>
            <div class="flex-none">
              <sd-button variant="primary" inverted>Label</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};
