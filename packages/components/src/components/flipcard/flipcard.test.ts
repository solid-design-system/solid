import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { userEvent } from '@storybook/test';
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
    expect(el.frontVariant).to.equal('empty');
    expect(el.backVariant).to.equal('empty');
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

      await userEvent.type(el.shadowRoot!.querySelector('.flip-card__side--front')!, '{return}', {
        pointerEventsCheck: 0
      });
      await waitUntil(() => flipFrontHandler.calledOnce);

      await userEvent.type(el.shadowRoot!.querySelector('.flip-card__side--back')!, '{return}', {
        pointerEventsCheck: 0
      });
      await waitUntil(() => flipBackHandler.calledOnce);

      expect(flipFrontHandler).to.have.been.calledOnce;
      expect(flipBackHandler).to.have.been.calledOnce;
    });
  });
});
