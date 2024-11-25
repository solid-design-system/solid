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

    expect(el.activation).to.equal('click hover');
    expect(el.frontVariant).to.equal('primary');
    expect(el.backVariant).to.equal('primary');
  });

  it('should allow custom activation', async () => {
    const el = await fixture<SdFlipcard>(html`<sd-flipcard activation="click"></sd-flipcard>`);

    expect(el.activation).to.equal('click');
  });

  it('should flip on hover', async () => {
    const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);

    expect(el.shadowRoot!.querySelector('.flip-card__side--front')).to.have.class('hover');
  });

  it('should not flip on hover', async () => {
    const el = await fixture<SdFlipcard>(html`<sd-flipcard activation="click"></sd-flipcard>`);

    expect(el.shadowRoot!.querySelector('.flip-card__side--front')).to.not.have.class('hover');
  });

  describe('when a flip is triggered', () => {
    it('should emit sd-flip-front and sd-flip-back', async () => {
      const el = await fixture<SdFlipcard>(html`<sd-flipcard></sd-flipcard>`);
      const flipFrontHandler = sinon.spy();
      const flipBackHandler = sinon.spy();

      el.addEventListener('sd-flip-front', flipFrontHandler);
      el.addEventListener('sd-flip-back', flipBackHandler);

      const front = el.shadowRoot!.querySelector('.flip-card__side--front')! as unknown as HTMLElement;
      const back = el.shadowRoot!.querySelector('.flip-card__side--back')! as unknown as HTMLElement;

      front.click();
      await waitUntil(() => flipFrontHandler.calledOnce);

      back.click();
      await waitUntil(() => flipBackHandler.calledOnce);

      expect(flipFrontHandler).to.have.been.calledOnce;
      expect(flipBackHandler).to.have.been.calledOnce;
    });
  });
});
