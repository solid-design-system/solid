import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdTag from './tag';

const sizes = ['lg', 'sm'];

describe('<sd-tag>', () => {
  let el: SdTag;

  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      el = await fixture<SdTag>(html`<sd-tag>Tag</sd-tag>`);
      await expect(el).to.be.accessible();
    });

    it('should have the primary values set correctly', async () => {
      el = await fixture<SdTag>(html`<sd-tag>Tag</sd-tag>`);
      expect(el.size).to.equal('lg');
      expect(el.selected).to.equal(false);
      expect(el.filtered).to.equal(false);
      expect(el.disabled).to.equal(false);
    });

    it('should render as a <button>', async () => {
      el = await fixture<SdTag>(html`<sd-tag>Tag</sd-tag>`);
      expect(el.shadowRoot!.querySelector('button')).to.exist;
      expect(el.shadowRoot!.querySelector('a')).not.to.exist;
    });
  });

  describe('when disabled', () => {
    it('should pass accessibility tests', async () => {
      el = await fixture<SdTag>(html`<sd-tag disabled>Tag</sd-tag>`);
      await expect(el).to.be.accessible();
    });

    it('should disable the native <button> when rendering a <button>', async () => {
      el = await fixture<SdTag>(html`<sd-tag disabled>Tag</sd-tag>`);
      expect(el.shadowRoot!.querySelector('button[disabled]')).to.exist;
    });

    it('should not disable the native <a> when rendering an <a>', async () => {
      el = await fixture<SdTag>(html`<sd-tag href="some/path" disabled>Tag</sd-tag>`);
      expect(el.shadowRoot!.querySelector('a[disabled]')).not.to.exist;
    });

    it('should not bubble up clicks', async () => {
      const button = await fixture<SdTag>(html`<sd-tag disabled>Tag</sd-tag>`);
      const handleClick = sinon.spy();
      button.addEventListener('click', handleClick);
      button.click();

      expect(handleClick).not.to.have.been.called;

      button.shadowRoot!.querySelector('button')!.click();
      expect(handleClick).not.to.have.been.called;

      const buttonLink = await fixture<SdTag>(html`<sd-tag href="some/path" disabled>Tag</sd-tag>`);
      buttonLink.addEventListener('click', handleClick);
      buttonLink.click();

      expect(handleClick).not.to.have.been.called;

      buttonLink.shadowRoot!.querySelector('a')!.click();
      expect(handleClick).not.to.have.been.called;
    });
  });

  sizes.forEach(size => {
    describe(`when passed a size attribute ${size}`, () => {
      it(`should be accessible when size is "${size}"`, async () => {
        el = await fixture<SdTag>(html` <sd-tag size="${size}">Tag</sd-tag> `);
        await expect(el).to.be.accessible();
      });
    });
  });

  describe('when href is present', () => {
    it('should render as an <a>', async () => {
      el = await fixture<SdTag>(html` <sd-tag href="some/path">Tag</sd-tag> `);
      expect(el.shadowRoot!.querySelector('a')).to.exist;
      expect(el.shadowRoot!.querySelector('button')).not.to.exist;
    });
  });
});
