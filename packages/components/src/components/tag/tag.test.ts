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
      expect(el.removable).to.equal(false);
      expect(el.disabled).to.equal(false);
    });

    it('should render as a <button>', async () => {
      el = await fixture<SdTag>(html`<sd-tag>Tag</sd-tag>`);
      expect(el.shadowRoot!.querySelector('button')).to.exist;
      expect(el.shadowRoot!.querySelector('a')).not.to.exist;
    });

    it('should render the child content provided', async () => {
      el = await fixture<SdTag>(html`<sd-tag>Tag</sd-tag>`);
      expect(el.innerText).to.eq('Tag');
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

  describe('when selected', () => {
    it('should pass accessibility tests', async () => {
      el = await fixture<SdTag>(html`<sd-tag selected>Tag</sd-tag>`);
      await expect(el).to.be.accessible();
    });
  });

  describe('when removable', () => {
    it('should pass accessibility tests', async () => {
      el = await fixture<SdTag>(html`<sd-tag removable>Tag</sd-tag>`);
      await expect(el).to.be.accessible();
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

    it('should not bubble up clicks when rendering a <button>', async () => {
      const button = await fixture<SdTag>(html`<sd-tag disabled>Tag</sd-tag>`);
      const handleClick = sinon.spy();
      button.addEventListener('click', handleClick);
      button.click();

      expect(handleClick).not.to.have.been.called;

      button.shadowRoot!.querySelector('button')!.click();
      expect(handleClick).not.to.have.been.called;
    });
  });

  describe('when using methods and rendering a <button>', () => {
    it('should emit sd-focus and sd-blur when the tag is focused and blurred', async () => {
      el = await fixture<SdTag>(html` <sd-tag>Tag</sd-tag> `);
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
      el = await fixture<SdTag>(html` <sd-tag>Tag</sd-tag> `);
      const clickHandler = sinon.spy();

      el.addEventListener('click', clickHandler);
      el.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
    });
  });

  describe('when using methods and rendering a <a>', () => {
    it('should emit sd-focus and sd-blur when the tag is focused and blurred', async () => {
      el = await fixture<SdTag>(html` <sd-tag href="#">Tag</sd-tag> `);
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
      el = await fixture<SdTag>(html` <sd-tag href="#">Tag</sd-tag> `);
      const clickHandler = sinon.spy();

      el.addEventListener('click', clickHandler);
      el.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
    });
  });
});
