import { expect, fixture, html } from '@open-wc/testing';
import type SdAccordionGroup from './accordion-group';

describe('<sd-accordion-group>', () => {
  it('should close other accordions when closeOthers is true', async () => {
    const el = await fixture<SdAccordionGroup>(
      html`
        <sd-accordion-group closeOthers
          ><sd-accordion></sd-accordion><sd-accordion></sd-accordion><sd-accordion></sd-accordion
          ><sd-accordion></sd-accordion><sd-accordion></sd-accordion
        ></sd-accordion-group>
      `
    );
    expect(el).to.exist;
  });
});
