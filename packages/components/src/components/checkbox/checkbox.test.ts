import '../../../dist/solid-components';
import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdCheckbox from './checkbox';

describe('<sd-checkbox>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdCheckbox>(html` <sd-checkbox>Checkbox</sd-checkbox> `);
    await expect(el).to.be.accessible();
  });

  it('should not be checked by default', async () => {
    const radio = await fixture<SdCheckbox>(html`<sd-checkbox></sd-checkbox>`);
    expect(radio.checked).to.be.false;
  });

  it('default properties', async () => {
    const el = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);
    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.indeterminate).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<SdCheckbox>(html` <sd-checkbox title="Test"></sd-checkbox> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SdCheckbox>(html` <sd-checkbox disabled></sd-checkbox> `);
    const checkbox = el.shadowRoot!.querySelector('input')!;

    expect(checkbox.disabled).to.be.true;
  });

  it('should be disabled when disabled property is set', async () => {
    const el = await fixture<SdCheckbox>(html`<sd-checkbox></sd-checkbox>`);
    const checkbox = el.shadowRoot!.querySelector('input')!;

    el.disabled = true;
    await el.updateComplete;

    expect(checkbox.disabled).to.be.true;
  });

  it('should not be checked if clicked when visually-disabled', async () => {
    const el = await fixture<SdCheckbox>(html`<sd-checkbox visually-disabled></sd-checkbox>`);
    el.click();
    await el.updateComplete;

    expect(el.checked).to.be.false;
  });

  it('should have aria-disabled when visually-disabled', async () => {
    const el = await fixture<SdCheckbox>(html`<sd-checkbox visually-disabled></sd-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should be valid by default', async () => {
    const el = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);
    expect(el.checkValidity()).to.be.true;
  });

  it('should emit sd-change and sd-input when clicked', async () => {
    const el = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);
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
    const el = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);
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
    const el = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);

    el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
    el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  it('should contain aria-invalid', async () => {
    const el = await fixture<HTMLFormElement>(html` <sd-checkbox required></sd-checkbox> `);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.hasAttribute('aria-invalid')).to.be.true;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-checkbox name="a" value="1" checked></sd-checkbox>
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
          <sd-checkbox name="a" checked></sd-checkbox>
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
      const checkbox = await fixture<HTMLFormElement>(html` <sd-checkbox></sd-checkbox> `);

      // Submitting the form after setting custom validity should not trigger the handler
      checkbox.setCustomValidity('Invalid selection');
      await checkbox.updateComplete;

      expect(checkbox.checkValidity()).to.be.false;
      expect(checkbox.checkValidity()).to.be.false;
      expect(checkbox.hasAttribute('data-invalid')).to.be.true;
      expect(checkbox.hasAttribute('data-valid')).to.be.false;
      expect(checkbox.hasAttribute('data-user-invalid')).to.be.false;
      expect(checkbox.hasAttribute('data-user-valid')).to.be.false;

      checkbox.click();
      await checkbox.updateComplete;

      expect(checkbox.hasAttribute('data-user-invalid')).to.be.true;
      expect(checkbox.hasAttribute('data-user-valid')).to.be.false;
      expect(checkbox.getAttribute('aria-invalid')).to.equal('true');
    });

    it('should show invalid-message when calling reportCustomValidity with non-empty setCustomValidity() ', async () => {
      const input = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.false;
    });

    it('should hide invalid-message when calling reportCustomValidity with empty setCustomValidity() ', async () => {
      const input = await fixture<SdCheckbox>(html` <sd-checkbox></sd-checkbox> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.false;

      input.setCustomValidity('');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.true;
    });

    it('should be invalid when required and unchecked', async () => {
      const checkbox = await fixture<HTMLFormElement>(html` <sd-checkbox required></sd-checkbox> `);
      expect(checkbox.checkValidity()).to.be.false;
    });

    it('should be valid when required and checked', async () => {
      const checkbox = await fixture<HTMLFormElement>(html` <sd-checkbox required checked></sd-checkbox> `);
      expect(checkbox.checkValidity()).to.be.true;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-checkbox form="f" name="a" value="1" checked></sd-checkbox>
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
          <sd-checkbox name="a" value="1" checked></sd-checkbox>
          <sd-button type="reset">Reset</sd-button>
        </form>
      `);
      const button = form.querySelector('sd-button')!;
      const checkbox = form.querySelector('sd-checkbox')!;
      checkbox.checked = false;

      await checkbox.updateComplete;
      expect(checkbox.getAttribute('aria-invalid')).to.equal('false');
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await checkbox.updateComplete;

      expect(checkbox.checked).to.true;

      checkbox.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await checkbox.updateComplete;

      expect(checkbox.checked).to.false;
    });
  });

  describe('click', () => {
    it('should click the inner input', async () => {
      const el = await fixture<SdCheckbox>(html`<sd-checkbox></sd-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const clickSpy = sinon.spy();

      checkbox.addEventListener('click', clickSpy, { once: true });

      el.click();
      await el.updateComplete;

      expect(clickSpy.called).to.equal(true);
      expect(el.checked).to.equal(true);
    });
  });

  describe('focus', () => {
    it('should focus the inner input', async () => {
      const el = await fixture<SdCheckbox>(html`<sd-checkbox></sd-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const focusSpy = sinon.spy();

      checkbox.addEventListener('focus', focusSpy, { once: true });

      el.focus();
      await el.updateComplete;

      expect(focusSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(checkbox);
    });
  });

  describe('blur', () => {
    it('should blur the inner input', async () => {
      const el = await fixture<SdCheckbox>(html`<sd-checkbox></sd-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const blurSpy = sinon.spy();

      checkbox.addEventListener('blur', blurSpy, { once: true });

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(blurSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('indeterminate', () => {
    it('should render indeterminate icon until checked', async () => {
      const el = await fixture<SdCheckbox>(html`<sd-checkbox indeterminate></sd-checkbox>`);
      let indeterminateIcon = el.shadowRoot!.querySelector('[part~="indeterminate-icon"]')!;

      expect(indeterminateIcon).not.to.be.null;

      el.click();
      await el.updateComplete;

      indeterminateIcon = el.shadowRoot!.querySelector('[part~="indeterminate-icon"]')!;

      expect(indeterminateIcon).to.be.null;
    });

    it('should contain correct aria-checked', async () => {
      const el = await fixture<SdCheckbox>(html`<sd-checkbox indeterminate></sd-checkbox>`);
      const input = el.shadowRoot!.querySelector('input');

      expect(input!.getAttribute('aria-checked')).to.equal('mixed');
    });
  });
});
