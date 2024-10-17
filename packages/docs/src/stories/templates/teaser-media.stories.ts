import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Teaser Media',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3510-218627&t=lJxrBJPRziV74fnu-4'
    }
  }
};

export const TeaserMediaWithLink = {
  render: () =>
    html` <div class="flex flex-col gap-12">
      <sd-teaser-media variant="gradient-dark">
        <div slot="media" class="relative">
          <img
            class="w-full aspect-ratio "
            src="./placeholders/images/skyscraper.jpg"
            alt="A tall glass skyscraper viewed from below"
          />
        </div>
        <div slot="meta" class="meta-info">
          <span class="meta-info-item">August 2024 | Olaf Janßen</span>
        </div>
        <h6 slot="headline">Market turnaround in sight</h6>
        <div>
          <p class="sd-paragraph sd-paragraph--inverted mb-4">
            After a long wait for good news, real estate investors are now seeing the first signs of a recovery on the
            European commercial real estate markets.
          </p>
          <div>
            <sd-button href="#" target="_blank" variant="primary" inverted>Research view</sd-button>
          </div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="primary">
        <img
          slot="media"
          class="w-full"
          src="./placeholders/images/meeting.jpg"
          alt="Three people in a business meeting talking to each other"
        />
        <h3 slot="headline" class="sd-headline sd-headline--inverted">Your contact person</h3>
        <div class="flex flex-col gap-4">
          <p class="sd-paragraph sd-paragraph--inverted">
            If you have any questions or would like to obtain further information, please find your dedicated contact
            below.
          </p>
          <div>
            <sd-button href="#" target="_blank" variant="cta">Feel free to contact us</sd-button>
          </div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="neutral-100">
        <img
          slot="media"
          class="w-full aspect-ratio"
          src="./placeholders/images/flags.jpg"
          alt="The U.S. and EU flags placed together"
        />
        <h3 slot="headline" class="sd-headline sd-headline--size-base">USA or Europe? It depends on the mix</h3>
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
 * - Aligment: Teaser contents can be center aligned if desired.
 * - Paddings: Can be changed as desired.
 * - Headline size: Can be changed as desired.
 */
export const TeaserMediaOverrides = {
  render: () =>
    html`<style>
        .media-overrides .sd-headline {
          justify-content: center;
        }
      </style>
      <sd-teaser-media variant="gradient-dark" class="media-overrides">
        <div slot="media" class="relative">
          <img
            class="w-full aspect-ratio"
            src="./placeholders/images/coffeebreak.jpg"
            alt="Two people sitting at a table, having a coffee in an office"
          />
        </div>
        <h3 slot="headline" class="sd-headline sd-headline--inverted">Gender</h3>
        <div slot="expandable" class="text-center">
          <p class="sd-paragraph sd-paragraph--inverted text-xl pb-24">We are actively promoting gender equality.</p>
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
      .gradient-white.sd-copyright::after {
        color: #000000;
        text-shadow: none;
      }
    </style>
    <div class="flex flex-col gap-12">
      <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser</h3>
        <div class="flex flex-col sd-copyright" style="--copyright: '© Union Investment 2024'">
          <div slot="default" class="h-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </sd-teaser-media>
      <sd-teaser-media variant="gradient-white" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser</h3>
        <div class="flex flex-col sd-copyright gradient-white" style="--copyright: '© Union Investment 2024'">
          <div slot="default" class="h-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </sd-teaser-media>
    </div>
  `
};
