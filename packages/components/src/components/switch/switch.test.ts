import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdSwitch from './switch';

describe('<sd-switch>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch>Switch</sd-switch> `);
    await expect(el).to.be.accessible();
  });

  it('should not be checked by default', async () => {
    const radio = await fixture<SdSwitch>(html`<sd-switch></sd-switch>`);
    expect(radio.checked).to.be.false;
  });

  it('default properties', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch></sd-switch> `);
    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch title="Test"></sd-switch> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch disabled></sd-switch> `);
    const sdSwitch = el.shadowRoot!.querySelector('input')!;

    expect(sdSwitch.disabled).to.be.true;
  });

  it('should be disabled when disabled property is set', async () => {
    const el = await fixture<SdSwitch>(html`<sd-switch></sd-switch>`);
    const sdSwitch = el.shadowRoot!.querySelector('input')!;

    el.disabled = true;
    await el.updateComplete;

    expect(sdSwitch.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch></sd-switch> `);
    expect(el.checkValidity()).to.be.true;
  });

  it('should emit sd-change and sd-input when clicked', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch></sd-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('sd-change', changeHandler);
    el.addEventListener('sd-input', inputHandler);
    el.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit sd-change and sd-input when toggled with spacebar', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch></sd-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('sd-change', changeHandler);
    el.addEventListener('sd-input', inputHandler);
    el.focus();
    await el.updateComplete;
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should not emit sd-change or sd-input when checked programmatically', async () => {
    const el = await fixture<SdSwitch>(html` <sd-switch></sd-switch> `);

    el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
    el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-switch name="a" value="1" checked></sd-switch>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);
      const button = form.querySelector('sd-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('1');
    });

    it('should submit "on" when no value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-switch name="a" checked></sd-switch>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);
      const button = form.querySelector('sd-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('on');
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const sdSwitch = await fixture<HTMLFormElement>(html` <sd-switch></sd-switch> `);

      // Submitting the form after setting custom validity should not trigger the handler
      sdSwitch.setCustomValidity('Invalid selection');
      await sdSwitch.updateComplete;

      expect(sdSwitch.checkValidity()).to.be.false;
      expect(sdSwitch.checkValidity()).to.be.false;
      expect(sdSwitch.hasAttribute('data-invalid')).to.be.true;
      expect(sdSwitch.hasAttribute('data-valid')).to.be.false;
      expect(sdSwitch.hasAttribute('data-user-invalid')).to.be.false;
      expect(sdSwitch.hasAttribute('data-user-valid')).to.be.false;

      sdSwitch.click();
      await sdSwitch.updateComplete;

      expect(sdSwitch.hasAttribute('data-user-invalid')).to.be.true;
      expect(sdSwitch.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should be invalid when required and unchecked', async () => {
      const sdSwitch = await fixture<HTMLFormElement>(html` <sd-switch required></sd-switch> `);
      expect(sdSwitch.checkValidity()).to.be.false;
    });

    it('should be valid when required and checked', async () => {
      const sdSwitch = await fixture<HTMLFormElement>(html` <sd-switch required checked></sd-switch> `);
      expect(sdSwitch.checkValidity()).to.be.true;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-switch form="f" name="a" value="1" checked></sd-switch>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-switch name="a" value="1" checked></sd-switch>
          <sd-button type="reset">Reset</sd-button>
        </form>
      `);
      const button = form.querySelector('sd-button')!;
      const sdSwitch = form.querySelector('sd-switch')!;
      sdSwitch.checked = false;

      await sdSwitch.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset', false);
      await sdSwitch.updateComplete;

      expect(sdSwitch.checked).to.true;

      sdSwitch.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset', false);
      await sdSwitch.updateComplete;

      expect(sdSwitch.checked).to.false;
    });
  });

  describe('click', () => {
    it('should click the inner input', async () => {
      const el = await fixture<SdSwitch>(html`<sd-switch></sd-switch>`);
      const sdSwitch = el.shadowRoot!.querySelector('input')!;
      const clickSpy = sinon.spy();

      sdSwitch.addEventListener('click', clickSpy, { once: true });

      el.click();
      await el.updateComplete;

      expect(clickSpy.called).to.equal(true);
      expect(el.checked).to.equal(true);
    });
  });

  describe('focus', () => {
    it('should focus the inner input', async () => {
      const el = await fixture<SdSwitch>(html`<sd-switch></sd-switch>`);
      const sdSwitch = el.shadowRoot!.querySelector('input')!;
      const focusSpy = sinon.spy();

      sdSwitch.addEventListener('focus', focusSpy, { once: true });

      el.focus();
      await el.updateComplete;

      expect(focusSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(sdSwitch);
    });
  });

  describe('blur', () => {
    it('should blur the inner input', async () => {
      const el = await fixture<SdSwitch>(html`<sd-switch></sd-switch>`);
      const sdSwitch = el.shadowRoot!.querySelector('input')!;
      const blurSpy = sinon.spy();

      sdSwitch.addEventListener('blur', blurSpy, { once: true });

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(blurSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });
});
