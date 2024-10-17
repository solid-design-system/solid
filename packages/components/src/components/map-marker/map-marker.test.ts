import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import type SdMapMarker from './map-marker';

describe('<sd-navigation-item>', () => {
  // Test default button variant
  describe('by default', () => {
    // Accessibility
    it('passes accessibility test', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker></sd-map-marker>`);
      await expect(el).to.be.accessible();
    });

    it('primary values are set correctly', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker></sd-map-marker> `);

      expect(el.variant).to.equal('main');
      expect(el.state).to.equal('default');
      expect(el.animated).to.equal(false);
    });
  });
  describe('svgs have a width bigger than 1 in all browsers', () => {
    it('for main variant', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker></sd-map-marker> `);
      expect(el.shadowRoot!.querySelector('svg')?.getBoundingClientRect().width).to.be.greaterThan(0);
    });
    it('for cluster variant', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker variant="cluster"></sd-map-marker> `);
      expect(el.shadowRoot!.querySelector('svg')?.getBoundingClientRect().width).to.be.greaterThan(0);
    });
    it('for cluster variant', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker variant="place"></sd-map-marker> `);
      expect(el.shadowRoot!.querySelector('svg')?.getBoundingClientRect().width).to.be.greaterThan(0);
    });
  });
});
