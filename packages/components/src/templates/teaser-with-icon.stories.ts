import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Teaser with Icon',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2392-52834&t=lJxrBJPRziV74fnu-4'
    }
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
