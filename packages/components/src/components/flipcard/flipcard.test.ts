import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdFlipcard from './flipcard';

describe('<sd-flipcard>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);
    await expect(el).to.be.accessible();
  });

  it('should generate proper defaults', async () => {
    const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);

    expect(el.frontVariant).to.equal('primary');
    expect(el.backVariant).to.equal('primary');
    expect(el.flipDirection).to.equal('horizontal');
    expect(el.placement).to.equal('top');
  });

  describe('when a flip is triggered', () => {
    it('should emit sd-flip-front and sd-flip-back', async () => {
      const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);
      const flipFrontHandler = sinon.spy();
      const flipBackHandler = sinon.spy();

      el.addEventListener('sd-flip-front', flipFrontHandler);
      el.addEventListener('sd-flip-back', flipBackHandler);

      const front: HTMLButtonElement = el.shadowRoot!.querySelector("[part='front-button']")!;
      const back: HTMLButtonElement = el.shadowRoot!.querySelector("[part='back-button']")!;

      front.click();
      await waitUntil(() => flipFrontHandler.calledOnce);

      back.click();
      await waitUntil(() => flipBackHandler.calledOnce);

      expect(flipFrontHandler).to.have.been.calledOnce;
      expect(flipBackHandler).to.have.been.calledOnce;
    });

    it('should have the the front and back buttons focused when flipping', async () => {
      const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);
      const frontButton: HTMLButtonElement = el.shadowRoot!.querySelector("[part='front-button']")!;
      const backButton: HTMLButtonElement = el.shadowRoot!.querySelector("[part='back-button']")!;

      frontButton.focus();
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(backButton);

      await sendKeys({ press: 'Enter' });
      await el.updateComplete;
      expect(el.shadowRoot!.activeElement).to.equal(frontButton);
    });

    it('should contain accessibility attributes', async () => {
      const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);
      const front = el.shadowRoot!.querySelector("[part='front']")!;
      const back = el.shadowRoot!.querySelector("[part='back']")!;

      expect(front.getAttribute('aria-hidden')).eq('false');
      expect(front.hasAttribute('inert')).to.be.false;
      expect(back.getAttribute('aria-hidden')).eq('true');
      expect(back.hasAttribute('inert')).to.be.true;

      const flipFrontHandler = sinon.spy();
      const frontButton: HTMLButtonElement = el.shadowRoot!.querySelector("[part='front-button']")!;
      el.addEventListener('sd-flip-front', flipFrontHandler);

      frontButton.click();
      await waitUntil(() => flipFrontHandler.calledOnce);

      expect(front.getAttribute('aria-hidden')).eq('true');
      expect(front.hasAttribute('inert')).to.be.true;
      expect(back.getAttribute('aria-hidden')).eq('false');
      expect(back.hasAttribute('inert')).to.be.false;
    });
  });
});
