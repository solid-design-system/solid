import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import type SdAccordionGroup from './accordion-group';

describe('<sd-accordion-group>', () => {
  it('should close other accordions when closeOthers is true', async () => {
    const el = await fixture<SdAccordionGroup>(
      html`
        <sd-accordion-group closeOthers>
          <sd-accordion>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
        </sd-accordion-group>
      `
    );

    // Get all the accordions
    const accordions = el.querySelectorAll('sd-accordion');

    // Open the first accordion
    accordions[0].open = true;

    // Wait for the animation to finish
    await waitUntil(() => !accordions[1].open && !accordions[2].open && !accordions[3].open);

    // Check if other accordions are closed
    expect(accordions[1].open).to.be.false;
    expect(accordions[2].open).to.be.false;
    expect(accordions[3].open).to.be.false;
  });
});
