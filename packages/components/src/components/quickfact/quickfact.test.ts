import { expect, fixture, html } from '@open-wc/testing';
import type SdQuickfact from './quickfact';

describe('<sd-quickfact>', () => {
  describe('defaults', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      await expect(el).to.be.accessible();
    });
  });
});
