import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form';
import sinon from 'sinon';
import type SdButton from '../button/button';
import type SdOption from '../../components/option/option';
import type SdSelect from './select';

describe('<sd-select>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select label="Select one">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select disabled>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    expect(el.displayInput.disabled).to.be.true;
  });

  it('should show a placeholder when no options are selected', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select placeholder="Select one">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select one');
  });

  it('should show a placeholder when no options are selected and multiple is set', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select placeholder="Select a few" multiple>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select a few');
  });

  it('should not allow selection when the option is disabled', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select value="option-1">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2" disabled>Option 2</sd-option>
      </sd-select>
    `);
    const disabledOption: HTMLOptionElement = el.querySelector('sd-option[disabled]')!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal('option-1');
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select label="Select One">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('sd-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit sd-change when the value is changed with the mouse', async () => {
      const el = await fixture<SdSelect>(html`
        <sd-select value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);
      const secondOption = el.querySelectorAll<SdOption>('sd-option')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit sd-change and sd-input when the value is changed with the keyboard', async () => {
      const el = await fixture<SdSelect>(html`
        <sd-select value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: ' ' }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the third option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-3');
    });

    it('should not emit sd-change or sd-input when the value is changed programmatically', async () => {
      const el = await fixture<SdSelect>(html`
        <sd-select value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });
  });

  it('should open the listbox when any letter key is pressed with sd-select is on focus', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('[part="display-input"]')!;

    el.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the listbox when ctrl + R is pressed with sd-select is on focus', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('[part="display-input"]')!;

    el.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const select = el.querySelector<SdSelect>('sd-select')!;
      expect(select.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const select = el.querySelector<SdSelect>('sd-select')!;
      expect(select.checkValidity()).to.be.false;
    });

    it('should focus on the displayInput when constraint validation occurs', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const select = el.querySelector<SdSelect>('sd-select')!;
      el.requestSubmit();

      expect(select.shadowRoot!.activeElement).to.equal(select.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<SdSelect>(html`
        <sd-select label="Select one" required value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);
      const secondOption = el.querySelectorAll('sd-option')[1];

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<SdSelect>(html`
        <sd-select label="Select one" required>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);
      const secondOption = el.querySelectorAll('sd-option')[1];

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      el.value = '';
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select name="a" value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('option-1');
    });

    it('should serialize its name and value in FormData when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select name="a" value="option-2 option-3" multiple>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.getAll('a')).to.include('option-2');
      expect(formData.getAll('a')).to.include('option-3');
    });

    it('should serialize its name and value in JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select name="a" value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('option-1');
    });

    it('should serialize its name and value in JSON when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-select name="a" value="option-2 option-3" multiple>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </form>
      `);
      const json = serialize(form);
      expect(JSON.stringify(json)).to.equal(JSON.stringify({ a: ['option-2', 'option-3'] }));
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-select form="f" name="a" value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option-1');
    });

    it('should show invalid-message when calling reportCustomValidity with non-empty setCustomValidity() ', async () => {
      const input = await fixture<SdSelect>(html`
        <sd-select name="a" value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);
      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.false;
    });

    it('should hide invalid-message when calling reportCustomValidity with empty setCustomValidity() ', async () => {
      const input = await fixture<SdSelect>(html`
        <sd-select name="a" value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);
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

    it('should show correct icon when calling reportValidity() with style-on-valid attribute', async () => {
      const input = await fixture<SdSelect>(html`
        <sd-select name="a" value="option-1" style-on-valid>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
      `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.exist;
      expect(input.shadowRoot!.querySelector('[part~="valid-icon"]')).to.not.exist;

      input.setCustomValidity('');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.not.exist;
      expect(input.shadowRoot!.querySelector('[part~="valid-icon"]')).to.exist;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-input form="f" name="a" value="1"></sd-input>
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
          <sd-select value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-select>
          <sd-button type="reset">Reset</sd-button>
        </form>
      `);
      const resetButton: SdButton = form.querySelector('sd-button')!;
      const select = form.querySelector('sd-select')!;

      select.value = 'option-3';
      await select.updateComplete;
      expect(select.value).to.equal('option-3');

      setTimeout(() => {
        resetButton.click();
        clickOnElement(resetButton);
      });
      await oneEvent(form, 'reset', false);
      await select.updateComplete;
      expect(select.value).to.equal('option-1');
    });
  });

  it('should update the display label when an option changes', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select value="option-1">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('[part="display-input"]')!;
    const option = el.querySelector('sd-option')!;

    expect(displayInput.value).to.equal('Option 1');

    option.textContent = 'updated';
    await oneEvent(option, 'slotchange', false);
    await el.updateComplete;

    expect(displayInput.value).to.equal('updated');
  });

  it('should emit sd-focus and sd-blur when receiving and losing focus', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select value="option-1">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const focusHandler = sinon.spy();
    const blurHandler = sinon.spy();

    el.addEventListener('sd-focus', focusHandler);
    el.addEventListener('sd-blur', blurHandler);

    el.focus();
    await el.updateComplete;
    el.blur();
    await el.updateComplete;

    expect(focusHandler).to.have.been.calledOnce;
    expect(blurHandler).to.have.been.calledOnce;
  });

  it('should emit sd-clear when the clear button is clicked', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select value="option-1" clearable>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const clearHandler = sinon.spy();
    const clearButton: HTMLButtonElement = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener('sd-clear', clearHandler);
    await el.show();
    clearButton.click();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
  });

  it('should emit sd-change and sd-input when a tag is removed', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select value="option-1 option-2 option-3" multiple useTags>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;

    const removeButton: HTMLSlotElement = tag.shadowRoot!.querySelector('[part="removable-indicator"]')!;

    el.addEventListener('sd-change', changeHandler);
    el.addEventListener('sd-input', inputHandler);

    removeButton.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
  });

  it('should emit sd-show, sd-after-show, sd-hide, and sd-after-hide events when the listbox opens and closes', async () => {
    const el = await fixture<SdSelect>(html`
      <sd-select value="option-1">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);
    el.addEventListener('sd-hide', hideHandler);
    el.addEventListener('sd-after-hide', afterHideHandler);

    await el.show();
    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;

    await el.hide();
    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });
});
