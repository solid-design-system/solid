import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdLink from './link';

describe('<sd-link>', () => {
  describe('accessibility tests', () => {
    [false, true].forEach(inverted => {
      it(`should be accessible when href is set and inverted is ${inverted ? 'true' : 'false'}`, async () => {
        const el = await fixture<SdLink>(html` <sd-link href="#" ?inverted=${inverted}> Default Slot </sd-link> `);
        await expect(el).to.be.accessible();
      });
    });
  });

  describe('when provided no parameters', () => {
    it('primary values are set correctly', async () => {
      const el = await fixture<SdLink>(html` <sd-link>Default Slot</sd-link> `);

      expect(el.title).to.equal('');
      expect(el.inverted).to.equal(false);
      expect(el.size).to.equal('inherit');
      expect(el.href).to.equal('');
      expect(el.standalone).to.equal(false);
    });

    it('should render as an <a>', async () => {
      const el = await fixture<SdLink>(html` <sd-link>Default Slot</sd-link> `);
      expect(el.shadowRoot!.querySelector('a')).to.exist;
    });
  });

  it('should render a component', async () => {
    const el = await fixture(html` <sd-link></sd-link> `);

    expect(el).to.exist;
  });

  it('should have aria-disabled when visually-disabled', async () => {
    const el = await fixture<SdLink>(html` <sd-link visually-disabled></sd-link> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('a')!;

    expect(input.getAttribute('aria-disabled')).to.equal('true');
  });

  describe('when using methods and href is set', () => {
    it('should emit sd-focus and sd-blur when the link is focused and blurred', async () => {
      const el = await fixture<SdLink>(html` <sd-link href="#">link</sd-link> `);
      const focusHandler = sinon.spy();
      const blurHandler = sinon.spy();

      el.addEventListener('sd-focus', focusHandler);
      el.addEventListener('sd-blur', blurHandler);

      el.focus();
      await waitUntil(() => focusHandler.calledOnce);

      el.blur();
      await waitUntil(() => blurHandler.calledOnce);

      expect(focusHandler).to.have.been.calledOnce;
      expect(blurHandler).to.have.been.calledOnce;
    });

    it('should emit a click event when calling click()', async () => {
      const el = await fixture<SdLink>(html` <sd-link href="#"></sd-link> `);
      const clickHandler = sinon.spy();

      el.addEventListener('click', clickHandler);
      el.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
    });
  });
  describe('download attribute', () => {
    it('should be set on the <a> tag when a value is provided', async () => {
      const el = await fixture<SdLink>(html` <sd-link href="#" download="file.txt">Default Slot</sd-link> `);
      const a = el.shadowRoot!.querySelector('a')!;
      expect(a).to.have.attribute('download', 'file.txt');
    });
    it('should not be set on the <a> tag when no value is provided', async () => {
      const el = await fixture<SdLink>(html` <sd-link href="#">Default Slot</sd-link> `);
      const a = el.shadowRoot!.querySelector('a')!;
      expect(a).to.not.have.attribute('download');
    });
    it('should set the download attribute with empty string when no value is provided', async () => {
      const el = await fixture<SdLink>(html` <sd-link href="#" download="">Default Slot</sd-link> `);
      const a = el.shadowRoot!.querySelector('a')!;
      expect(a).to.have.attribute('download', '');
    });
  });
});
