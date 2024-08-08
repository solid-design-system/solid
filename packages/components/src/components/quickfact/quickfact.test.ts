import './quickfact';
import { expect, fixture, html } from '@open-wc/testing';
import type SdQuickfact from './quickfact';

describe('<sd-quickfact>', () => {
  describe('defaults', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      await expect(el).to.be.accessible();
    });

    it('is not interactive by default', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      expect(el.expandable).to.be.false;
      const summary = el.shadowRoot!.querySelector('slot[name="summary"]')!;

      expect(summary.classList.contains('text-primary')).to.be.false;
    });
  });

  describe('expandable', () => {
    it('reflects the attribute', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact expandable></sd-quickfact>`);

      const summary = el.shadowRoot!.querySelector('slot[name="summary"]')!;
      expect(summary.classList.contains('text-primary')).to.be.true;
    });
  });
});
