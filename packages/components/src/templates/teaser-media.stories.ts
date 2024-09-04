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
 * - Aligment: Teaser content can be center aligned if desired.
 * - Padding: Can be changed as desired.
 * - Headline size: Can be changed as desired.
 *
 * ```
 * ```
 */

export const Default = {
  render: () =>
    html` <style>
        #part-content sd-teaser-media::part(content) {
          padding: 60px;
        }
      </style>
      <div class="flex flex-wrap gap-8 w-[600px]">
        <div id="part-content">
          <sd-teaser-media variant="gradient-dark" class="min-w-[435px] max-w-4xl">
            <div slot="media" class="relative">
              <img src="./placeholders/images/coffeeshop.jpg" alt="A skyline of a city" />
            </div>
            <h1 slot="headline" class="text-center text-4xl">Gender</h1>
            <div slot="expandable" class="text-center">
              <p>We are actively promoting gender equality.</p>
            </div>
          </sd-teaser-media>
        </div>
        <sd-teaser-media variant="gradient-dark" class="min-w-[435px] max-w-4xl">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/coffeeshop.jpg"
              alt="A skyline of a city"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">August 2024</span>
            <span class="meta-info-item">| Olaf Janßen</span>
          </div>
          <h6 slot="headline">Market turnaround in sight</h6>
          <div class="flex flex-col gap-4">
            <p>
              After a long wait for good news, real estate investors are now seeing the first signs of a recovery on the
              European commercial real estate markets.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>Research view</sd-button>
            </div>
          </div>
        </sd-teaser-media>
      </div>`
};

export const TeaserMediaWithLink = {
  name: 'Teaser Media with Link Template',
  render: () => html`
    <div style="margin-bottom: 40px; width: 546px">
      <sd-teaser-media variant="primary">
        <img slot="media" src="./placeholders/images/coffeeshop.jpg" alt="Test" />
        <h3 slot="headline">Your contact person</h3>
        <div class="flex flex-col gap-4">
          <p>
            If you have any questions or would like to obtain further information, please find your dedicated contact
            below.
          </p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="cta">Feel free to contact us</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>

    <div style="margin-bottom: 40px; width: 546px">
      <sd-teaser-media variant="neutral-100">
        <img slot="media" src="./placeholders/images/coffeeshop.jpg" alt="Test" />
        <h3 slot="headline">USA or Europe? It depends on the mix</h3>
        <div class="flex flex-col gap-4">
          <p>
            A positive growth environment, the tech boom and government investment incentives show this: The USA is
            ahead of the eurozone in many respects. Moritz Bauer, Head of Investment Strategy at Union Investment,
            explains why investors should nevertheless also keep an eye on European investments.
          </p>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">12.06.2024</span>
          </div>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary">Read only</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>
  `
};
