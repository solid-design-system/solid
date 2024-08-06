import '../solid-components';
import { html } from 'lit-html';

/**
 * Examples of the sd-accordion-group component in different backgrounds.
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Accordion Group',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hER2N8wZXhiTrdlDXyrdUt/Quote?type=design&node-id=1001-4293&mode=design&t=Xywhix1rQMoatokH-0'
    }
  }
};

export const Default = {
  name: 'Accordion in white background',
  render: () => html`
    <div class="bg-white p-8">
      <sd-accordion-group>
        <sd-accordion summary="Accordion 1"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora magnam error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora
          ea.</sd-accordion
        ><sd-accordion summary="Accordion 2"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora.</sd-accordion
        ><sd-accordion summary="Accordion 3"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora magnam error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora ea. A dolore
          mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem tempora magnam
          error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora ea.</sd-accordion
        >
      </sd-accordion-group>
    </div>
  `
};

export const SampleWithNeutralBackground = {
  name: 'Accordion in neutral background',
  render: () => html`
    <div class="bg-neutral-100 p-8">
      <sd-accordion-group>
        <sd-accordion summary="Accordion 1"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora magnam error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora
          ea.</sd-accordion
        ><sd-accordion summary="Accordion 2"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora.</sd-accordion
        ><sd-accordion summary="Accordion 3"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora magnam error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora ea. A dolore
          mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem tempora magnam
          error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora ea.</sd-accordion
        >
      </sd-accordion-group>
    </div>
  `
};

export const SampleWithPrimaryBackground = {
  name: 'Accordion in primary background',
  render: () => html`
    <div class="bg-primary-100 p-8">
      <sd-accordion-group>
        <sd-accordion summary="Accordion 1"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora magnam error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora
          ea.</sd-accordion
        ><sd-accordion summary="Accordion 2"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora.</sd-accordion
        ><sd-accordion summary="Accordion 3"
          >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
          tempora magnam error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora ea. A dolore
          mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem tempora magnam
          error distinctio magni optio. Quisquam excepturi exercitationem odio earum tempora ea.</sd-accordion
        >
      </sd-accordion-group>
    </div>
  `
};
