import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Teaser',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2392-52834&t=lJxrBJPRziV74fnu-4'
    }
  }
};

/**
 * The teaser itself is not clickable, but links can be placed inside.
 * There is no need for any extra steps, the teaser can be used as it is.
 *
 * ```html
 * <sd-teaser>
 *   <sd-button href="#">Link</sd-button>
 * </<sd-teaser>
 * ```
 */

export const NotClickableTeaser = {
  name: 'Not Clickable Teaser',
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/coffeeshop.jpg"
              alt="A group of people sitting in a coffee shop"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>Link</sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/skyline.jpg"
              alt="A skyline of a city by night"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};

/**
 * If the teaser itself should be clickable and there are no other links inside, then wrap the teaser with an anchor tag.
 * The button on the bottom of the teaser is **must not be a link**. According to the HTML spec, it is not allowed to
 * have an anchor tag inside another anchor.
 *
 * ```html
 * <a href="#">
 *    <sd-teaser class="interactive">
 *      <sd-button>CTA</sd-button>
 *    </<sd-teaser>
 * </a>
 * ```
 *
 * To further highlight the interactive state of the teaser, the opacity of the media part can be reduced on hover.
 *
 * ```css
 * sd-teaser.interactive:hover {
 *   &::part(media) {
 *     transition-property: opacity;
 *     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *     transition-duration: 150ms;
 *     transition-duration: 300ms;
 *     opacity: 0.5;
 *   }
 * }
 * ```
 */

export const ClickableTeaser = {
  name: 'Clickable Teaser',
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }

        sd-teaser.interactive:hover {
          &::part(media) {
            opacity: 0.7;
          }
        }
      </style>
      <div class="flex justify-between gap-8">
        <a href="#" target="_blank" class="flex-1">
          <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="interactive">
            <div slot="media" class="relative">
              <img
                class="aspect-video object-cover"
                src="./placeholders/images/coffeeshop.jpg"
                alt="A group of people sitting in a coffee shop"
              />
            </div>
            <div slot="meta" class="meta-info">
              <span class="meta-info-item">01.12.2013</span>
              <span class="meta-info-item">| Author name</span>
            </div>
            <h3 slot="headline">Clickable teaser</h3>
            <div class="flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div class="flex-none">
                <sd-button variant="cta" inverted>Add to shopping cart</sd-button>
              </div>
            </div>
          </sd-teaser>
        </a>

        <a href="#" target="_blank" class="flex-1">
          <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="interactive">
            <div slot="media" class="relative">
              <img
                class="aspect-video object-cover"
                src="./placeholders/images/skyline.jpg"
                alt="A skyline of a city by night"
              />
            </div>
            <div slot="meta" class="meta-info">
              <span class="meta-info-item">01.12.2013</span>
              <span class="meta-info-item">| Author name</span>
            </div>
            <h3 slot="headline">Clickable teaser</h3>
            <div class="flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div class="flex-none">
                <sd-button variant="cta">Add to shopping cart</sd-button>
              </div>
            </div>
          </sd-teaser>
        </a>
      </div>
    `;
  }
};

export const TeaserWithIcon = {
  name: 'Teaser with icon',
  render: () => {
    return html`
      <style>
        #teaserWithIcon::part(media) {
          display: flex;
          justify-content: center;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1" id="teaserWithIcon">
          <div slot="media" class="flex flex-wrap h-[238px] content-center">
            <sd-icon class="text-[96px]" name="content/picture" library="global-resources" color="white"> </sd-icon>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>Link</sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="primary-100" breakpoint="9999" inset class="flex-1" id="teaserWithIcon">
          <div slot="media" class="flex flex-wrap h-[238px] content-center">
            <sd-icon class="text-[96px]" name="content/picture" library="global-resources" color="primary"> </sd-icon>
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};

export const HorizontalTeaserWithIcon = {
  name: 'Horizontal Teaser with Icon',
  render: () => {
    return html`
      <style>
        #teaserWithIcon::part(media) {
          display: flex;
          flex-basis: 33.333333%;
          justify-content: center;
        }
        #teaserWithIcon::part(content) {
          flex-basis: 66.666667%;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="primary" breakpoint="0" inset class="flex-1 h-[238px]" id="teaserWithIcon">
          <div slot="media" class="flex flex-wrap content-center">
            <sd-icon class="text-[96px]" name="content/picture" library="global-resources" color="white"> </sd-icon>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>Link</sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="primary-100" breakpoint="0" inset class="flex-1 h-[238px]" id="teaserWithIcon">
          <div slot="media" class="flex flex-wrap content-center">
            <sd-icon class="text-[96px]" name="content/picture" library="global-resources" color="primary"> </sd-icon>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};

export const CenteredTeaserWithIcon = {
  name: 'Centered Teaser with Icon',
  render: () => {
    return html`
      <style>
        #teaserWithIcon::part(media) {
          display: flex;
          justify-content: center;
        }

        #teaserWithIcon::part(headline) {
          text-self: center;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="white" breakpoint="9999" inset id="teaserWithIcon">
          <div slot="media">
            <sd-icon class="text-[96px] mt-24" name="content/picture" library="global-resources" color="primary">
            </sd-icon>
          </div>
          <h3 class="text-center" slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
        </sd-teaser>
        <sd-teaser variant="white" breakpoint="9999" inset id="teaserWithIcon">
          <div slot="media">
            <sd-icon class="text-[96px] mt-24" name="content/piggy-bank" library="global-resources" color="primary">
            </sd-icon>
          </div>
          <h3 class="text-center" slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
        </sd-teaser>
        <sd-teaser variant="white" breakpoint="9999" inset id="teaserWithIcon">
          <div slot="media">
            <sd-icon class="text-[96px] mt-24" name="content/plant" library="global-resources" color="primary">
            </sd-icon>
          </div>
          <h3 class="text-center" slot="headline">Risus luctus sem a laoreet convallis nunc id quis fusce</h3>
        </sd-teaser>
      </div>
    `;
  }
};
