/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-floating-promises */
import '../../../dist/solid.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form';
import sinon from 'sinon';
import type SdCombobox from './combobox.js';
import type SynOption from '../option/option.js';

describe('<sd-combobox>', () => {
  describe('accessibility', () => {
    it('should pass accessibility tests when closed', async () => {
      const combobox = await fixture<SdCombobox>(html`
        <sd-combobox label="Combobox one">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      await expect(combobox).to.be.accessible();
    });

    it('should pass accessibility tests when open', async () => {
      const combobox = await fixture<SdCombobox>(html`
        <sd-combobox label="Combobox one">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      await combobox.show();

      await expect(combobox).to.be.accessible();
    });
  });

  it('default properties', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);

    expect(el.name).to.equal('');
    expect(el.value).to.equal('');
    expect(el.defaultValue).to.equal('');
    expect(el.size).to.equal('medium');
    expect(el.placeholder).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.clearable).to.be.false;
    expect(el.open).to.be.false;
    expect(el.hoist).to.be.false;
    expect(el.label).to.equal('');
    expect(el.placement).to.equal('bottom');
    expect(el.helpText).to.equal('');
    expect(el.form).to.equal('');
    expect(el.required).to.be.false;
    expect(el.getOption).to.be.a('function');
    expect(el.filter).to.be.a('function');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox disabled>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    expect(el.displayInput.disabled).to.be.true;
    expect(el.valueInput.disabled).to.be.true;
  });

  it('should show a placeholder when no options are selected', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox placeholder="Combobox one">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Combobox one');
  });

  it('should not allow selection when the option is disabled', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox value="Option">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2" disabled>Option 2</sd-option>
      </sd-combobox>
    `);
    const disabledOption = el.querySelector('sd-option[disabled]')!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal('Option');
  });

  it('should focus the combobox when clicking on the label', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox label="Combobox One">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const focusHandler = sinon.spy();

    el.addEventListener('sd-focus', focusHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => focusHandler.calledOnce);

    expect(focusHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit sd-change and sd-input when the user types in the combobox', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener('sd-input', inputHandler);
      el.addEventListener('sd-change', changeHandler);
      el.focus();
      await sendKeys({ type: 'abc' });
      el.blur();
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledThrice;
    });

    it('should emit sd-change and sd-input when the value is changed with the mouse', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      await el.show();

      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const secondOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);

      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit sd-change and sd-input when the value is changed with the keyboard', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // open the dropdown and move to first option
      await el.updateComplete;
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

    it('should not emit sd-change or sd-input when a disabled option is selected with the keyboard', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2" disabled>Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // open the dropdown and move to first option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;
    });

    it('should not emit sd-change or sd-input when the value is changed programmatically', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox value="option-1">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });

    it('should emit sd-change and sd-input with the correct validation message when the value changes', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox required>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const handler = sinon.spy((event: CustomEvent) => {
        if (el.validationMessage) {
          expect.fail(`Validation message should be empty when ${event.type} is emitted and a value is set`);
        }
      });

      el.addEventListener('sd-change', handler);
      el.addEventListener('sd-input', handler);

      await clickOnElement(el);
      await aTimeout(500);
      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const secondOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[1];

      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(handler).to.be.calledTwice;
    });
  });

  describe('keyboard handling', () => {
    it('should open the listbox when the ArrowDown key is pressed and select the first option with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;
      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      await aTimeout(500);

      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const firstOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[0];

      expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
      expect(firstOption.getAttribute('aria-selected')).to.equal('true');
      expect(el.displayInput.getAttribute('aria-activedescendant')).to.equal(firstOption.id);
    });

    it('should open the listbox when the ArrowUp key is pressed and select the last option with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;
      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'ArrowUp' });
      await el.updateComplete;
      await aTimeout(500);

      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const lastOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[filteredListbox.children.length - 1];

      expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
      expect(lastOption.getAttribute('aria-selected')).to.equal('true');
      expect(el.displayInput.getAttribute('aria-activedescendant')).to.equal(lastOption.id);
    });

    it('should open the listbox when a letter key is pressed with sd-combobox is on focus with filtered options', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Black</sd-option>
          <sd-option value="option-2">Yellow</sd-option>
          <sd-option value="option-3">Red</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;
      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'e' });
      await el.updateComplete;

      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const filteredOptions = filteredListbox.querySelectorAll<SynOption>('sd-option');

      expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
      expect(filteredOptions.length).to.equal(2);
    });

    it('should not open the listbox when a letter key is pressed with sd-combobox is on focus with no appropriate options', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Black</sd-option>
          <sd-option value="option-2">Yellow</sd-option>
          <sd-option value="option-3">Red</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;
      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'f' });
      await el.updateComplete;

      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const filteredOptions = filteredListbox.querySelectorAll<SynOption>('sd-option');

      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
      expect(filteredOptions.length).to.equal(0);
    });

    it('should not open the listbox when ctrl + R is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await sendKeys({ down: 'Control' });
      await sendKeys({ press: 'r' });
      await sendKeys({ up: 'Control' });
      await el.updateComplete;
      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
    });

    it('should not open the listbox when ctrl + R is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await sendKeys({ down: 'Control' });
      await sendKeys({ press: 'r' });
      await sendKeys({ up: 'Control' });
      await el.updateComplete;
      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
    });

    it('should not open the listbox when the Enter key is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;
      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
    });

    it('should close the listbox when Escape key is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox value="option">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' });
      await el.updateComplete;
      await sendKeys({ press: 'Escape' });
      await el.updateComplete;

      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
      expect(displayInput.value).to.equal('option');
      expect(el.value).to.equal('option');
    });

    it('should close the listbox when Enter key is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await el.updateComplete;

      await sendKeys({ type: 'opt' });
      await el.updateComplete;

      expect(displayInput.getAttribute('aria-expanded')).to.equal('true');

      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
      expect(displayInput.value).to.equal('opt');
      expect(el.value).to.equal('opt');
    });

    it('should clear the input when Escape key is pressed with sd-combobox is on focus and listbox is closed', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox value="option">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'Escape' });
      await el.updateComplete;

      expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
      expect(displayInput.value).to.equal('');
      expect(el.value).to.equal('');
    });

    it('should move the cursor to the start of the input when Home key is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox value="option">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await el.updateComplete;

      expect(displayInput.selectionStart).to.equal(6);
      expect(displayInput.selectionEnd).to.equal(6);

      await sendKeys({ press: 'Home' });
      await el.updateComplete;

      expect(displayInput.selectionStart).to.equal(0);
      expect(displayInput.selectionEnd).to.equal(0);
    });

    it('should move the cursor to the end of the input when End key is pressed with sd-combobox is on focus', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox value="option">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await el.updateComplete;
      displayInput.setSelectionRange(0, 0);

      expect(displayInput.selectionStart).to.equal(0);
      expect(displayInput.selectionEnd).to.equal(0);

      await sendKeys({ press: 'End' });
      await el.updateComplete;

      expect(displayInput.selectionStart).to.equal(6);
      expect(displayInput.selectionEnd).to.equal(6);
    });

    it('should not close the listbox when Enter key is pressed with a disabled option is selected', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox value="option">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option disabled value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('.combobox__display-input')!;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // open the dropdown and move to first option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;

      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
      expect(el.value).to.equal('option');
    });
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const combobox = el.querySelector<SdCombobox>('sd-combobox')!;
      expect(combobox.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const combobox = el.querySelector<SdCombobox>('sd-combobox')!;
      expect(combobox.checkValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox disabled required>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);
      expect(el.checkValidity()).to.be.true;
      el.disabled = false;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it('should focus on the displayInput when constraint validation occurs', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const combobox = el.querySelector<SdCombobox>('sd-combobox')!;
      el.requestSubmit();
      expect(combobox.shadowRoot!.activeElement).to.equal(combobox.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox label="Combobox one" required value="opt">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();

      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const secondOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[1];

      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<SdCombobox>(html`
        <sd-combobox label="Combobox one" required>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
      const secondOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[1];

      await clickOnElement(secondOption);
      el.value = '';
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <sd-combobox required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const combobox = el.querySelector<SdCombobox>('sd-combobox')!;

      expect(combobox.hasAttribute('data-required')).to.be.true;
      expect(combobox.hasAttribute('data-optional')).to.be.false;
      expect(combobox.hasAttribute('data-invalid')).to.be.true;
      expect(combobox.hasAttribute('data-valid')).to.be.false;
      expect(combobox.hasAttribute('data-user-invalid')).to.be.false;
      expect(combobox.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const combobox = await fixture<SdCombobox>(html`
        <sd-combobox label="Combobox one">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
      `);

      combobox.setCustomValidity('Invalid selection');
      await combobox.updateComplete;

      expect(combobox.checkValidity()).to.be.false;
      expect(combobox.hasAttribute('data-invalid')).to.be.true;
      expect(combobox.hasAttribute('data-valid')).to.be.false;
      expect(combobox.hasAttribute('data-user-invalid')).to.be.false;
      expect(combobox.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox name="a" value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('option-1');
    });

    it('should serialize its name and value in JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox name="a" value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('option-1');
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-combobox form="f" name="a" value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option-1');
    });

    it('should submit the form when pressing enter in a form without a submit button', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const combobox = form.querySelector('sd-combobox')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', submitHandler);
      combobox.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => submitHandler.calledOnce);

      expect(submitHandler).to.have.been.calledOnce;
    });

    it('should prevent submission when pressing enter in a combobox and canceling the keydown event', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </form>
      `);
      const combobox = form.querySelector('sd-combobox')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
      const keydownHandler = sinon.spy((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      });

      form.addEventListener('submit', submitHandler);
      combobox.addEventListener('keydown', keydownHandler);
      combobox.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => keydownHandler.calledOnce);

      expect(keydownHandler).to.have.been.calledOnce;
      expect(submitHandler).to.not.have.been.called;
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox value="option-1">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
          <sd-button type="reset">Reset</sd-button>
        </form>
      `);
      const resetButton = form.querySelector('sd-button')!;
      const combobox = form.querySelector('sd-combobox')!;

      combobox.value = 'option-3';
      await combobox.updateComplete;
      expect(combobox.value).to.equal('option-3');

      setTimeout(() => resetButton.click());
      await oneEvent(form, 'reset');
      await combobox.updateComplete;
      expect(combobox.value).to.equal('option-1');
    });
  });

  describe('when calling HTMLFormElement.reportValidity()', () => {
    it('should be invalid when the combobox is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-combobox required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });

    it('should be valid when the combobox is empty, reportValidity() is called, and the form has novalidate', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <sd-combobox required>
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.true;
    });
  });

  describe('when using FormControlController', () => {
    it('should submit with the correct form when the form attribute changes', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f1">
            <input type="hidden" name="b" value="2" />
            <sd-button type="submit">Submit</sd-button>
          </form>
          <form id="f2">
            <input type="hidden" name="c" value="3" />
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-combobox form="f1" name="a" value="option">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
          </sd-combobox>
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>('#f2')!;
      const combobox = document.querySelector('sd-combobox')!;

      combobox.form = 'f2';
      await combobox.updateComplete;

      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option');
      expect(formData.get('b')).to.be.null;
      expect(formData.get('c')).to.equal('3');
    });
  });

  it('should emit sd-focus and sd-blur when receiving and losing focus', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox value="option-1">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
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
    const el = await fixture<SdCombobox>(html`
      <sd-combobox value="option-1" clearable>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    const clearHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const changeHandler = sinon.spy();
    const clearButton = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener('sd-clear', clearHandler);
    el.addEventListener('sd-input', inputHandler);
    el.addEventListener('sd-change', changeHandler);
    await el.show();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(changeHandler).to.have.been.calledOnce;
    expect(el.displayInput.value).to.equal('');
  });

  it('should emit sd-show, sd-after-show, sd-hide, and sd-after-hide events when the listbox opens and closes', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
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

  it('should emit sd-error if show method was called and no appropriate options are available', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox value="test">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const errorHandler = sinon.spy();

    el.addEventListener('sd-error', errorHandler);
    el.addEventListener('sd-show', showHandler);
    el.addEventListener('sd-after-show', afterShowHandler);

    await el.show();
    expect(showHandler).to.not.have.been.called;
    expect(afterShowHandler).to.not.have.been.called;
    expect(errorHandler).to.have.been.calledOnce;
  });

  it('should update the filtered list when an option changes', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    const secondSlottedOption = el.querySelectorAll('sd-option')[1];

    await el.show();
    const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
    const secondOption = filteredListbox.querySelectorAll('sd-option')[1];

    expect(secondOption.getTextLabel()).to.equal('Option 2');

    secondSlottedOption.textContent = 'updated';
    await oneEvent(secondSlottedOption, 'slotchange');
    await el.updateComplete;
    const secondUpdatedOption = filteredListbox.querySelectorAll('sd-option')[1];

    expect(secondUpdatedOption.getTextLabel()).to.equal('updated');
  });

  it('should update the filtered list when an option is added dynamically', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);
    const newOption = document.createElement('sd-option');
    newOption.value = 'option-4';
    newOption.textContent = 'Option 4';

    await el.show();
    const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;

    expect(filteredListbox.children.length).to.equal(3);

    el.appendChild(newOption);
    const slotWrapper = el.shadowRoot!.querySelector('.combobox__listbox')!;
    await oneEvent(slotWrapper, 'slotchange');
    await el.updateComplete;

    expect(filteredListbox.children.length).to.equal(4);
  });

  it('should use the custom filter if the filter property is used', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox value="test">
        <sd-option value="option-1">Green</sd-option>
        <sd-option value="option-2">Red</sd-option>
        <sd-option value="option-3">Light green</sd-option>
      </sd-combobox>
    `);
    const filterHandler = sinon.spy((option: SynOption) => option.getTextLabel().toLowerCase().includes('green'));

    el.filter = filterHandler;

    await el.show();
    await el.updateComplete;

    const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
    const options = filteredListbox.querySelectorAll('sd-option');

    expect(filterHandler).to.have.been.calledThrice;
    expect(options.length).to.equal(2);
  });

  it('should use the custom getOption renderer if the getOption property is used', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    `);

    const getOptionHandler = sinon.spy((option: SynOption) => {
      const updatedText = option.getTextLabel().concat(' - custom');
      // eslint-disable-next-line no-param-reassign
      option.textContent = updatedText;
      return option;
    });

    el.getOption = getOptionHandler;

    await el.show();
    await el.updateComplete;

    const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
    const options = filteredListbox.querySelectorAll('sd-option');

    options.forEach((option, index) => {
      expect(option.getTextLabel()).to.equal(`Option ${index + 1} - custom`);
    });
    expect(getOptionHandler).to.have.been.calledThrice;
  });

  it('should work with options that do not have a value', async () => {
    const el = await fixture<SdCombobox>(html`
      <sd-combobox>
        <sd-option>Option 1</sd-option>
        <sd-option>Option 2</sd-option>
        <sd-option>Option 3</sd-option>
      </sd-combobox>
    `);
    await el.show();

    const filteredListbox = el.shadowRoot!.querySelector('.listbox__options')!;
    const secondOption = filteredListbox.querySelectorAll<SynOption>('sd-option')[1];

    await clickOnElement(secondOption);
    await el.updateComplete;

    expect(el.value).to.equal('Option 2');
  });
});
