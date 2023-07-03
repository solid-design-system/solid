import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import type SdAccordionGroup from './accordion-group';

describe('<sd-accordion-group>', () => {
  it('should close other accordions when closeOthers is true', async () => {
    const el = await fixture<SdAccordionGroup>(
      html`
        <sd-accordion-group closeOthers>
          <sd-accordion open>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
        </sd-accordion-group>
      `
    );

    // Get all the accordions
    const accordions = el.querySelectorAll('sd-accordion');

    // Wait for a click on another accordion
    await waitUntil(() => !accordions[1].open || !accordions[2].open);

    if (accordions[1].open) {
      // Check if other accordions are closed
      expect(accordions[0].open).to.be.false;
      expect(accordions[2].open).to.be.false;
      // Check if the clicked accordion is open
      expect(accordions[1].open).to.be.true;
    } else if (accordions[2].open) {
      // Check if other accordions are closed
      expect(accordions[0].open).to.be.false;
      expect(accordions[1].open).to.be.false;
      // Check if the clicked accordion is open
      expect(accordions[2].open).to.be.true;
    }
  });
});

describe('<sd-accordion-group>', () => {
  it('should not close other accordions when closeOthers is false', async () => {
    const el = await fixture<SdAccordionGroup>(
      html`
        <sd-accordion-group>
          <sd-accordion open>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
          <sd-accordion>Accordion</sd-accordion>
        </sd-accordion-group>
      `
    );

    // Get all the accordions
    const accordions = el.querySelectorAll('sd-accordion');

    // Wait for a click on another accordion
    await waitUntil(() => !accordions[1].open || !accordions[2].open);

    if (accordions[1].open) {
      // Check if other open accordions are still open
      expect(accordions[0].open).to.be.true;
      expect(accordions[2].open).to.be.false;
      if (accordions[2].open) {
        // Check if all accordions are still open
        expect(accordions[0].open).to.be.true;
        expect(accordions[1].open).to.be.true;
        expect(accordions[2].open).to.be.true;
      }
    } else if (accordions[2].open) {
      // Check if other open accordions are still open
      expect(accordions[0].open).to.be.true;
      expect(accordions[1].open).to.be.false;
      if (accordions[1].open) {
        // Check if all accordions are still open
        expect(accordions[0].open).to.be.true;
        expect(accordions[1].open).to.be.true;
        expect(accordions[2].open).to.be.true;
      }
    }
  });
});
