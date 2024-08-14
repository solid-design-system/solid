import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Teaser Media',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 *
 * Examples of teaser media components.
 *
 * ```
 * ```
 */

export const Default = {
  render: () =>
    html` <div class="flex flex-wrap gap-8">
      <sd-teaser-media variant="gradient-dark" class="min-w-[435px] max-w-4xl">
        <div slot="media" class="relative">
          <img
            class="aspect-video object-cover"
            src="./placeholders/images/architecture.jpg"
            alt="A skyline of a city"
          />
        </div>
        <div slot="meta" class="meta-info">
          <span class="meta-info-item">01.12.2013</span>
          <span class="meta-info-item">| Author name</span>
        </div>
        <h3 slot="headline">Not expandable teaser-media</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary" inverted=""> Link </sd-button>
          </div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="gradient-white" class="min-w-[435px] max-w-4xl">
        <div slot="media" class="relative">
          <img
            class="aspect-video object-cover"
            src="./placeholders/images/architecture.jpg"
            alt="A skyline of a city"
          />
        </div>
        <div slot="meta" class="meta-info">
          <span class="meta-info-item">01.12.2013</span>
          <span class="meta-info-item">| Author name</span>
        </div>
        <h3 slot="headline">Expandable teaser-media</h3>
        <div slot="expandable">
          <p>
            Expandable: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
          </div>
          <div class="flex-none text-sm">
            <p>@Copyright Lorem ipsum</p>
          </div>
        </div>
      </sd-teaser-media>
    </div>`
};
