import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SdQuickfact from './quickfact';

describe('<sd-quickfact>', () => {
  describe('defaults', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      await expect(el).to.be.accessible();
    });

    it('initializes with open set to false', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      expect(el.open).to.be.false;
    });

    it('toggles open state when button is clicked', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      const button = el.shadowRoot!.querySelector('button');

      button!.click();
      await el.updateComplete;

      expect(el.open).to.be.true;

      button!.click();
      await el.updateComplete;
      expect(el.open).to.be.false;
    });

    it('emits "sd-show" event when opened', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
      const showSpy = sinon.spy();
      el.addEventListener('sd-show', showSpy);

      el.open = true;
      await el.updateComplete;

      expect(showSpy.calledOnce).to.be.true;
    });

    it('emits "sd-hide" event when closed', async () => {
      const el = await fixture<SdQuickfact>(html`<sd-quickfact open></sd-quickfact>`);
      const hideSpy = sinon.spy();
      el.addEventListener('sd-hide', hideSpy);

      el.open = false;
      await el.updateComplete;

      expect(hideSpy.calledOnce).to.be.true;
    });

    describe('show', () => {
      it('sets open attribute to true and emits "sd-after-show" event', async () => {
        const el = await fixture<SdQuickfact>(html`<sd-quickfact></sd-quickfact>`);
        const afterShowSpy = sinon.spy();
        el.addEventListener('sd-after-show', afterShowSpy);

        await el.show();

        expect(el.open).to.be.true;
        expect(el.base.hasAttribute('open')).to.be.true;
        expect(afterShowSpy.calledOnce).to.be.true;
      });
    });

    describe('hide', () => {
      it('sets open attribute to false and emits "sd-after-hide" event', async () => {
        const el = await fixture<SdQuickfact>(html`<sd-quickfact open></sd-quickfact>`);
        const afterHideSpy = sinon.spy();
        el.addEventListener('sd-after-hide', afterHideSpy);

        await el.hide();

        expect(el.open).to.be.false;
        expect(el.base.hasAttribute('open')).to.be.false;
        expect(afterHideSpy.calledOnce).to.be.true;
      });
    });
  });
});
