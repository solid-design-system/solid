import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Teaser Media',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3510-218627&t=lJxrBJPRziV74fnu-4'
    }
  },
  decorators: [
    (story: any) => html`
      <style>
        #anchor--templates-teaser-media--teaser-media-overrides .innerZoomElementWrapper {
          overflow: hidden;
        }
      </style>
      ${story()}
    `
  ] as unknown
};

export const TeaserMediaWithLink = {
  name: 'Teaser Media with Link',
  render: () =>
    html` <div class="flex flex-col gap-12">
      <sd-teaser-media variant="gradient-dark">
        <h3 slot="headline" class="sd-headline sd-headline--inverted">Market turnaround in sight</h3>
        <div slot="media" class="relative">
          <img
            class="w-full aspect-ratio"
            src="./placeholders/images/coins.jpg"
            alt="Close-up of hands stacking coins into small piles on a table, suggesting financial planning or saving."
          />
        </div>
        <div slot="meta" class="meta-info">
          <span class="sd-meta sd-meta--pipe sd-meta--inverted">August 2024</span>
          <span class="sd-meta sd-meta--inverted">Olaf Janßen</span>
        </div>
        <div>
          <p class="sd-paragraph sd-paragraph--inverted mb-4 mt-2">
            After a long wait for good news, real estate investors are now seeing the first signs of a recovery on the
            European commercial real estate markets.
          </p>
          <div>
            <sd-button href="#" target="_blank" variant="primary" inverted>Research view</sd-button>
          </div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="primary">
        <h3 slot="headline" class="sd-headline sd-headline--inverted">Your contact person</h3>
        <img
          slot="media"
          class="w-full"
          src="./placeholders/images/collaboration.jpg"
          alt="Two professionals representing accessible customer support."
        />
        <div class="flex flex-col gap-4">
          <p class="sd-paragraph sd-paragraph--inverted">
            If you have any questions or would like to obtain further information, please find your dedicated contact
            below.
          </p>
          <div>
            <sd-button href="#" target="_blank" variant="cta" inverted>Feel free to contact us</sd-button>
          </div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="neutral-100" class="teaser-neutral-100">
        <h3 slot="headline" class="sd-headline sd-headline--size-base">USA or Europe? It depends on the mix</h3>
        <img
          slot="media"
          class="w-full aspect-ratio"
          src="./placeholders/images/skyline.jpg"
          alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
        />
        <div class="flex flex-col gap-4">
          <p class="sd-paragraph">
            A positive growth environment, the tech boom and government investment incentives show this: The USA is
            ahead of the eurozone in many respects. Moritz Bauer, Head of Investment Strategy at Union Investment,
            explains why investors should nevertheless also keep an eye on European investments.
          </p>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">12.06.2024</span>
          </div>
          <div>
            <sd-button href="#" target="_blank" variant="primary">Read now</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>`
};

/**
 * - Alignment: Teaser contents can be center aligned if desired.
 * - Paddings: Can be changed as desired.
 */
export const TeaserMediaOverrides = {
  render: () =>
    html`<style>
        .media-overrides::part(content) {
          display: flex;
          align-items: center;
        }
      </style>
      <sd-teaser-media variant="gradient-dark" class="media-overrides">
        <h3 slot="headline" class="sd-headline sd-headline--inverted">Gender</h3>
        <div slot="media" class="relative">
          <img
            class="w-full aspect-ratio"
            src="./placeholders/images/coffeeshop.jpg"
            alt="Diverse group of individuals in a casual meeting setting, emphasizing gender equality and collaboration."
          />
        </div>
        <div slot="expandable">
          <p class="sd-paragraph sd-paragraph--inverted pb-12">We are actively promoting gender equality.</p>
        </div>
      </sd-teaser-media> `
};

export const TeaserMediaWithCopyright = {
  name: 'Teaser Media with Copyright',
  render: () => html`
    <style>
      .sd-copyright::after {
        padding: 0;
      }
    </style>
    <div class="flex flex-col gap-12">
      <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
        <h3 slot="headline">Headline Media Teaser</h3>
        <img slot="media" src="./placeholders/images/architecture.jpg" class="aspect-video object-cover" alt="" />
        <div class="flex flex-col sd-copyright" style="--copyright: '© Union Investment 2024'">
          <div slot="default" class="h-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="gradient-light" class="max-w-[600px]">
        <h3 slot="headline">Headline Media Teaser</h3>
        <img slot="media" src="./placeholders/images/architecture.jpg" class="aspect-video object-cover" alt="" />
        <div
          class="flex flex-col sd-copyright sd-copyright--color-black gradient-white"
          style="--copyright: '© Union Investment 2024'"
        >
          <div slot="default" class="h-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </sd-teaser-media>
    </div>
  `
};
