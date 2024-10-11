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
export const NotClickableTeaserWithLink = {
  name: 'Not Clickable Teaser with Link',
  render: () => {
    return html`
      <sd-teaser
        variant="white border-neutral-400"
        breakpoint="9999"
        inset
        class="flex-1 flex flex-col max-w-[426.67px]"
      >
        <div slot="media" class="relative">
          <img src="./placeholders/images/generic.jpg" alt="Generic Alt" class="aspect-video object-cover" />
        </div>
        <h3 slot="headline" class="sd-headline sd-headline--size-3xl">Expert views</h3>
        <div class="flex flex-col gap-5 mt-4">
          <p>
            Our experts assess current economic developments and topics for your investment decision. All analyses,
            white papers and studies can be found here.
          </p>
          <div class="flex-none">
            <sd-button href="javascript:void(0)" variant="primary">To expert views</sd-button>
          </div>
        </div>
      </sd-teaser>
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

export const ClickableTeaserWithLink = {
  name: 'Clickable Teaser with Link',
  render: () => {
    return html`
      <style>
        sd-teaser.interactive:hover {
          &::part(media) {
            opacity: 0.7;
          }
        }
      </style>
      <a href="#" target="_blank" class="flex-1">
        <sd-teaser variant="primary-100" breakpoint="9999" inset class="interactive max-w-[426.67px]">
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/images/generic.jpg" alt="Generic Alt" />
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">Invest sustainably</h3>
          <div class="flex flex-col gap-5 mt-4">
            <p>How we are actively shaping the transformation of the economy in the interests of our investors.</p>
            <div class="flex-none">
              <sd-link href="javascript:void(0)">Find out more</sd-link>
            </div>
          </div>
        </sd-teaser>
      </a>
    `;
  }
};

export const teaserWithIcon = {
  name: 'Teaser with Icon',
  render: () => {
    return html`
      <div class="flex flex-col gap-8">
        <sd-teaser variant="white" breakpoint="9999" inset class="max-w-[338px]">
          <div slot="media">
            <sd-icon name="content/files" class="text-[96px]" color="primary"></sd-icon>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-xl">Annual Report 2023</h3>
          <div class="flex flex-col gap-5 mt-4">
            <p>PDF (1,6 MB)</p>
            <div class="flex-none">
              <sd-button href="javascript:void(0)" variant="primary">
                Download Annual Report
                <sd-icon name="system/download" slot="icon-left"></sd-icon>
              </sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1 max-w-[338px]">
          <div slot="media" class="flex flex-wrap h-[189px] content-center justify-center">
            <sd-icon class="text-[96px]" name="content/letter" inverted></sd-icon>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg sd-headline--inverted">
            Subscribe to our newsletter!
          </h3>
          <div class="flex flex-col gap-5">
            <p class="sd-paragraph sd-paragraph--inverted mt-2">
              We keep you informed every month about current topics from Union Investment's real estate division: news,
              studies, stories, transactions, events and editorial articles from our places and spaces magazine. Stay up
              to date!
            </p>
            <div class="flex-none">
              <sd-button href="javascript:void(0)" variant="cta" inverted>
                <sd-icon name="system/arrow-right" slot="icon-left"></sd-icon>
                Click here to register
              </sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser
          variant="primary-100"
          breakpoint="0"
          inset=""
          class="flex-1 h-[238px]"
          id="teaserWithIcon"
          style="--distribution-media: 20%; --distribution-content: 80%;"
        >
          <div slot="media" class="flex flex-wrap justify-center">
            <sd-icon class="text-[96px]" name="content/city-apartment" color="primary"></sd-icon>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">Responsibility</h3>
          <div class="flex flex-col gap-5">
            <p class="sd-paragraph">
              We take responsibility and act responsibly in the sense of our fiduciary mandate towards our investors as
              well as towards our employees and society.
            </p>
            <div class="flex-none">
              <sd-link href="javascript:void(0)">Find out more</sd-link>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};

export const teaserWithChipAndFlag = {
  name: 'Teaser with Chip and Flag',
  render: () => {
    return html`
      <div class="flex flex-col gap-8">
        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1 flex flex-col max-w-[320px]">
          <div slot="media" class="relative">
            <img src="./placeholders/images/generic.jpg" alt="Generic Alt" class="aspect-video object-cover" />
            <span class="absolute top-3 left-4 sd-chip sd-chip--primary-500">Remote Work</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--white">Research</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="sd-meta sd-meta--inverted sd-meta--light sd-meta--size-sm sd-meta--pipe">05.06.2024</span>
            <span class="sd-meta sd-meta--inverted sd-meta--light sd-meta--size-sm">Olaf Janßen - Research view</span>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg sd-headline--inverted">
            Why office space will always be needed
          </h3>
          <div class="flex flex-col gap-5 mt-4">
            <p class="sd-paragraph sd-paragraph--inverted">
              Since the start of the Covid pandemic, more and more people have been working from home. That raises the
              question whether demand for office space will be significantly lower in the future.
            </p>
            <div class="flex-none">
              <sd-link href="javascript:void(0)" inverted>Read more</sd-link>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="relative max-w-[320px]">
          <span class="absolute top-3 left-4 sd-chip sd-chip--primary-200">Investment</span>
          <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-200">Trends</span>
          <div slot="media" class="flex flex-wrap h-[189px] content-center justify-center">
            <sd-icon class="text-[96px]" name="content/house-percent" color="primary"></sd-icon>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">
            ECB interest rate cut: a trend reversal on the real estate markets?
          </h3>
          <div class="flex flex-col gap-5">
            <p class="sd-paragraph mt-2">
              At the beginning of June this year, the European Central Bank (ECB) cut interest rates for the first time
              in almost five years: by 0.25 points to 4.25 per cent.
            </p>
            <div class="flex-none">
              <sd-button href="javascript:void(0)" variant="primary"> View full post </sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser
          variant="neutral-100"
          breakpoint="0"
          inset
          class="flex-1 h-[238px]"
          style="--distribution-media: 50%; --distribution-content: 50%;"
        >
          <div slot="media" class="relative">
            <img src="./placeholders/images/generic.jpg" alt="Generic Alt" class="aspect-video object-cover w-full" />
            <span class="absolute top-3 left-4 sd-chip sd-chip--white">Real Estate</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-300">Analytics</span>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">
            The real estate transaction volume increased by around 12% in the office, retail, logistics and hotel asset
            classes compared to the second quarter of 2024.
          </h3>
        </sd-teaser>
      </div>
    `;
  }
};

export const teaserWithDivision = {
  name: 'Teaser with 50:50 Division',
  render: () => {
    return html`
    <style>
      sd-teaser#teaserWithDivision::part(content) {
        min-height: 100%;
        padding: 24px 48px 24px 0;
      }
      sd-teaser#teaserWithDivision::part(main) {
        height: 100%;
      }
    </style>
      <sd-teaser variant="neutral-100" breakpoint="0" class="max-w-[656px] flex-1 p-4" id="teaserWithDivision">
        <div slot="media" class="relative">
          <img
            class="w-full aspect-[3/4] object-cover"
            src="./placeholders/images/generic.jpg"
            alt="Generic Alt"/>
        </div>
        <div slot="headline">
          <h3 class="sd-headline sd-headline--size-lg mb-8">“Our real estate funds are well positioned”</h3>
        </div>
        <div class="w-full flex flex-col h-full justify-between">
          <p class="sd-paragraph">
            Carsten Thiel, Head of Fund Management for Open Real Estate Mutual Funds at Union Investment, about the
            opportunities for asset classes in challenging times.
          </p>
          <div>
            <sd-link href="javascript:void(0)" class="font-bold">To the article</sd-link>
            <p class="mt-4">
              <span class="sd-meta sd-meta--pipe">15.09.2023</span>
              <span class="sd-meta">Opinions</span>
            </p>
        </div>
      </sd-teaser>
    `;
  }
};

export const contactTeaser = {
  render: () => {
    return html`
      <sd-teaser variant="primary-100" breakpoint="9999" inset class="interactive max-w-[375px]">
        <div slot="media" class="relative">
          <img class="aspect-video object-cover" src="./placeholders/images/generic.jpg" alt="Generic Alt" />
        </div>
        <h3 slot="headline" class="sd-headline sd-headline--size-lg">Nicolas Freyer</h3>
        <div class="flex flex-col gap-5">
          <p class="sd-paragraph">Managing Director</p>
          <div class="flex-none">
            <sd-link href="#" standalone>
              <sd-icon name="system/e-mail" slot="icon-left"></sd-icon>
              nicolas.freyer@union-investment.com</sd-link
            >
          </div>
        </div>
      </sd-teaser>
    `;
  }
};
