import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
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
 *
 * ```html
 * <sd-teaser>
 *   <sd-button href="#">Link</sd-button>
 * </<sd-teaser>
 * ```
 */
export const UnclickableTeaserWithButton = {
  name: 'Unclickable Teaser with Button',
  render: () => {
    return html`
      <sd-teaser
        variant="white border-neutral-400"
        breakpoint="9999"
        inset
        class="flex-1 flex flex-col max-w-[426.67px]"
      >
        <h3 slot="headline" class="sd-headline sd-headline--size-3xl">Expert views</h3>
        <div slot="media" class="relative">
          <img
            src="./placeholders/images/collaboration.jpg"
            alt="Two professionals reviewing a document together, emphasizing collaboration and expertise."
            class="aspect-video object-cover"
          />
        </div>
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

export const ClickableTeaser = {
  render: () => {
    return html`
      <style>
        .clickable:has(sd-button:focus),
        .clickable:has(sd-button:hover) {
          &::part(media) {
            opacity: 0.7;
          }
        }

        .clickable sd-button::part(base)::before {
          position: fixed;
          inset: 0;
          display: block;
          content: '';
        }
      </style>
      <div class="max-w-[426.67px]">
        <sd-teaser variant="primary-100" inset class="clickable relative m-2 translate-x-0 translate-y-0">
          <h2 slot="headline">Union Investment's climate strategy</h2>
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/family.jpg"
              alt="A smiling father with two children outdoors, symbolizing shared values and future growth."
            />
          </div>
          <p class="mb-8">
            Climate change is one of the greatest global challenges. Global warming threatens to have a massive impact
            on human coexistence, the living conditions of each individual and economic development. As an asset
            manager, Union Investment is facing up to the challenges associated with combating climate change and the
            sustainable restructuring of the economy.
          </p>
          <sd-link href="https://solid-design-system.fe.union-investment.de/docs/" class="relative z-10"
            >Read more about our climate strategy</sd-link
          >
          <sd-button href="https://union-investment.com" target="_blank" class="mt-5">
            <sd-icon name="system/download" slot="icon-left"></sd-icon>
            Download climate strategy report
          </sd-button>
        </sd-teaser>
      </div>
    `;
  }
};

export const TeaserWithIcon = {
  name: 'Teaser with Icon',
  render: () => {
    return html`
      <style>
        #anchor--templates-teaser--teaser-with-icon .innerZoomElementWrapper {
          height: 1300px;
        }
      </style>
      <div class="flex flex-col gap-8">
        <sd-teaser variant="white" breakpoint="9999" inset class="max-w-[338px]">
          <h3 slot="headline" class="sd-headline sd-headline--size-xl">Annual Report 2023</h3>
          <div slot="media">
            <sd-icon name="content/files" class="text-[96px]" color="primary"></sd-icon>
          </div>
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
          inset
          class="h-[238px]"
          breakpoint="538"
          style="--distribution-media: 20%; --distribution-content: 80%;"
        >
          <div slot="media" class="flex flex-wrap justify-center items-center h-[189px] md:h-auto">
            <sd-icon class="text-[96px]" name="content/city-apartment" color="primary"></sd-icon>
          </div>
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">Responsibility</h3>
          <div class="flex flex-col gap-5">
            <p class="sd-paragraph">
              We take responsibility and act responsibly in the sense of our fiduciary mandate towards our investors as
              well as towards our employees and society.
            </p>
            <div class="flex-none mb-5 md:mb-0">
              <sd-link href="javascript:void(0)">Discover our commitment</sd-link>
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
          <h3 slot="headline" class="sd-headline sd-headline--size-lg sd-headline--inverted">
            Why office space will always be needed
          </h3>
          <div slot="media" class="relative">
            <img
              src="./placeholders/images/coffeeshop.jpg"
              alt="Colleagues in a casual office meeting, smiling and interacting, symbolizing collaboration and the value of office spaces."
              class="aspect-video object-cover"
            />
            <span class="absolute top-3 left-4 sd-chip sd-chip--primary-500">Remote Work</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--white">Research</span>
          </div>
          <div slot="meta" class="meta-info">
            <span class="sd-meta sd-meta--inverted sd-meta--light sd-meta--size-sm sd-meta--pipe">05.06.2024</span>
            <span class="sd-meta sd-meta--inverted sd-meta--light sd-meta--size-sm">Olaf Janßen - Research view</span>
          </div>
          <div class="flex flex-col gap-5 mt-4">
            <p class="sd-paragraph sd-paragraph--inverted">
              Since the start of the Covid pandemic, more and more people have been working from home. That raises the
              question whether demand for office space will be significantly lower in the future.
            </p>
            <div class="flex-none">
              <sd-link href="javascript:void(0)" inverted>Why office space matters</sd-link>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="relative max-w-[320px]">
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">
            ECB interest rate cut: a trend reversal on the real estate markets?
          </h3>
          <span class="absolute top-3 left-4 sd-chip sd-chip--primary-200">Investment</span>
          <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-200">Trends</span>
          <div slot="media" class="flex flex-wrap h-[189px] content-center justify-center">
            <sd-icon class="text-[96px]" name="content/house-percent" color="primary"></sd-icon>
          </div>
          <div class="flex flex-col gap-5">
            <p class="sd-paragraph mt-2">
              At the beginning of June this year, the European Central Bank (ECB) cut interest rates for the first time
              in almost five years: by 0.25 points to 4.25 per cent.
            </p>
            <div class="flex-none">
              <sd-button href="javascript:void(0)" variant="primary">Impact of ECB rate cut</sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser
          variant="neutral-100"
          inset
          breakpoint="538"
          class="max-w-[720px] flex-1 h-[238px]"
          style="--distribution-media: 60%; --distribution-content: 50%;"
        >
          <h3 slot="headline" class="sd-headline sd-headline--size-lg">
            The real estate transaction volume increased by around 12% in the office, retail, logistics and hotel asset
            classes compared to the second quarter of 2024.
          </h3>
          <div slot="media" class="relative">
            <img
              src="./placeholders/images/skyline.jpg"
              alt="City skyline, highlighting growth in real estate transactions."
              class="aspect-video sm:aspect-[3/4] md:aspect-[16/9] object-cover w-full"
            />
            <span class="absolute top-3 left-4 sd-chip sd-chip--white">Real Estate</span>
            <span class="absolute top-2 right-0 sd-flag sd-flag--neutral-300">Analytics</span>
          </div>
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
        sd-teaser#teaser-with-division {
          container-type: inline-size;
        }

        sd-teaser#teaser-with-division::part(content) {
          padding: 32px 16px;
        }

        @container (min-width: 538px) {
          sd-teaser#teaser-with-division::part(content) {
            min-height: 100%;
            padding: 24px 34px 24px 0;
          }
        }

        sd-teaser#teaser-with-division::part(main) {
          height: 100%;
        }
      </style>
      <sd-teaser
        variant="neutral-100"
        class="max-w-[656px] flex-1"
        breakpoint="538"
        id="teaser-with-division"
        style="--distribution-media: 50%; --distribution-content: 50%;"
      >
        <h3 slot="headline" class="sd-headline sd-headline--size-3xl text-primary">
          “Our real estate funds are well positioned”
        </h3>
        <div slot="media" class="relative h-full">
          <img
            class="w-full aspect-[4/3] md:aspect-[3/4] object-cover min-h-full"
            src="./placeholders/images/collaboration.jpg"
            alt="Two professionals in an office discussing documents, symbolizing expertise in real estate fund management."
          />
        </div>
        <div class="w-full flex flex-col h-full justify-between pt-4 gap-2">
          <p class="sd-paragraph">
            The opportunities for asset classes in challenging times are being explored, particularly within the context
            of open real estate mutual funds.
          </p>
          <div class="flex flex-col gap-2">
            <sd-link href="javascript:void(0)">Discover our positioning</sd-link>
            <p>
              <span class="sd-meta sd-meta--pipe">15.09.2023</span>
              <span class="sd-meta">Opinions</span>
            </p>
          </div>
        </div>
      </sd-teaser>
    `;
  }
};

export const contactTeaser = {
  render: () => {
    return html`
      <sd-teaser variant="primary-100" breakpoint="9999" inset class="interactive max-w-[375px]">
        <h3 slot="headline" class="sd-headline sd-headline--size-lg pb-5">John Doe</h3>
        <div slot="media" class="relative">
          <img
            class="aspect-video object-cover"
            src="./placeholders/images/workspace.jpg"
            alt="Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
          />
        </div>
        <div class="flex flex-col gap-5">
          <p class="sd-paragraph">Team Member of SDS</p>
          <div class="flex-none">
            <sd-link href="#" standalone>
              <sd-icon name="system/e-mail" slot="icon-left"></sd-icon>
              john.doe@mail.com</sd-link
            >
          </div>
        </div>
      </sd-teaser>
    `;
  }
};
