import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
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

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const front = el.shadowRoot!.querySelector("[part='front-button']")! as HTMLButtonElement;
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const back = el.shadowRoot!.querySelector("[part='back-button']")! as HTMLButtonElement;

      front.click();
      await waitUntil(() => flipFrontHandler.calledOnce);

      back.click();
      await waitUntil(() => flipBackHandler.calledOnce);

      expect(flipFrontHandler).to.have.been.calledOnce;
      expect(flipBackHandler).to.have.been.calledOnce;
    });
  });
});
