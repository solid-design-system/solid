import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit-html';
import type SdMapMarker from './map-marker';

describe('<sd-map-marker>', () => {
  // Test default button variant
  describe('by default', () => {
    // Accessibility
    it('passes accessibility test', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker not-interactive></sd-map-marker>`);
      await expect(el).to.be.accessible();
    });

    it('passes accessibility test when it renders a button', async () => {
      const el = await fixture<SdMapMarker>(
        html` <sd-map-marker><div class="sr-only">Acessible Pin</div></sd-map-marker>`
      );
      await expect(el).to.be.accessible();
    });

    it('does not have the aria-labelledby attribute when renders a div', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker not-interactive></sd-map-marker>`);

      expect(el.shadowRoot!.querySelector('div')?.getAttribute('aria-labelledby')).to.be.null;
    });

    it('has a button role when it renders a button', async () => {
      const el = await fixture<SdMapMarker>(
        html` <sd-map-marker><div class="sr-only">Acessible Pin</div></sd-map-marker>`
      );

      expect(el.shadowRoot!.querySelector('button')?.getAttribute('role')).to.equal('button');
    });

    it('does not have a role when it renders a link', async () => {
      const el = await fixture<SdMapMarker>(
        html` <sd-map-marker
          href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/docs-general-introduction--docs"
          ><div class="sr-only">Acessible Pin</div></sd-map-marker
        >`
      );

      expect(el.shadowRoot!.querySelector('a')?.getAttribute('role')).to.be.null;
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

  describe('renders a different tag according to the not-interactive attribute', () => {
    it('when not interactive renders a div', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker not-interactive></sd-map-marker> `);
      expect(el.shadowRoot!.querySelector('div')).to.exist;
    });

    it('when interactive but without an href, renders a button', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker></sd-map-marker> `);
      expect(el.shadowRoot!.querySelector('button')).to.exist;
    });

    it('when interactive and href is set', async () => {
      const el = await fixture<SdMapMarker>(html` <sd-map-marker href="https://www.solid.com"></sd-map-marker> `);
      expect(el.shadowRoot!.querySelector('a')).to.exist;
    });
  });
});
