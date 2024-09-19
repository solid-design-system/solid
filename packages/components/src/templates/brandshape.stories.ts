import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Brandshape Template',
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
