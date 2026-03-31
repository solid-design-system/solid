import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Brandshape',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3121-11350&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Example of a brandshape with the variant `border-primary`.
 */
export const Default = {
  name: 'Brandshape',
  render: () =>
    html`<sd-brandshape variant="border-primary">
      <h4 class="sd-headline sd-headline--3xl mb-4">
        Exclusion criteria: Ensure minimum standards, avoid controversies
      </h4>
      <p class="sd-paragraph">
        In this approach, single or multiple criteria are defined that exclude investment in certain companies,
        industries or countries. The individual criteria can be determined individually within the SIRIS platform, such
        as the exclusion of companies that generate more than 5 per cent of their turnover from gambling. The exclusion
        criteria are additionally reviewed in a two-stage research process.
      </p>
    </sd-brandshape>`
};

export const Transparent = {
  name: 'Brandshape with transparent variant',
  render: () =>
    html` <style>
        .brandshape-wrapper {
          background: url('./placeholders/images/skyline.jpg');
          background-size: cover;
          background-position: center;
          padding: 3rem;
        }
      </style>
      <div class="brandshape-wrapper">
        <sd-brandshape variant="primary|80">
          <h4 class="sd-headline sd-headline--3xl mb-4 text-white">
            Exclusion criteria: Ensure minimum standards, avoid controversies
          </h4>
          <p class="sd-paragraph text-white">
            In this approach, single or multiple criteria are defined that exclude investment in certain companies,
            industries or countries. The individual criteria can be determined individually within the SIRIS platform,
            such as the exclusion of companies that generate more than 5 per cent of their turnover from gambling. The
            exclusion criteria are additionally reviewed in a two-stage research process.
          </p>
          <sd-button variant="cta" class="mt-4">Find out more</sd-button>
        </sd-brandshape>
      </div>`
};

export const Copyright = {
  name: 'Brandshape with Copyright',
  render: () =>
    html` <style>
        sd-brandshape::part(content) {
          height: 200px;
        }

        .sd-copyright::after {
          bottom: 60px;
          padding-right: 8px;
        }
      </style>
      <sd-brandshape
        variant="image"
        class="sd-copyright sd-copyright--orientation-vertical"
        style="--copyright: '© Union Investment 2025';"
      >
        <img
          slot="image"
          src="./placeholders/images/skyline.jpg"
          alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs"
          class="object-bottom"
        />
      </sd-brandshape>`
};
