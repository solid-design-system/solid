import '../../../dist/solid-components';
import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { getFormControls, serialize } from '../../utilities/form.js';
import { sendKeys } from '@web/test-runner-commands'; // must come from the same module
import sinon from 'sinon';
import type SdInput from './input.js';

describe('<sd-input>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdInput>(html` <sd-input label="Name"></sd-input> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<SdInput>(html` <sd-input></sd-input> `);

    expect(el.type).to.equal('text');
    expect(el.size).to.equal('lg');
    expect(el.name).to.equal('');
    expect(el.value).to.equal('');
    expect(el.defaultValue).to.equal('');
    expect(el.title).to.equal('');
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.clearable).to.be.false;
    expect(el.passwordToggle).to.be.false;
    expect(el.passwordVisible).to.be.false;
    expect(el.spinButtons).to.be.false;
    expect(el.placeholder).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.minlength).to.be.undefined;
    expect(el.maxlength).to.be.undefined;
    expect(el.min).to.be.undefined;
    expect(el.max).to.be.undefined;
    expect(el.step).to.be.undefined;
    expect(el.pattern).to.be.undefined;
    expect(el.required).to.be.false;
    expect(el.autocapitalize).to.be.undefined;
    expect(el.autocorrect).to.be.undefined;
    expect(el.autocomplete).to.be.undefined;
    expect(el.autofocus).to.be.undefined;
    expect(el.enterkeyhint).to.be.undefined;
    expect(el.spellcheck).to.be.true;
    expect(el.inputmode).to.be.undefined;
    expect(el.valueAsDate).to.be.null;
    expect(isNaN(el.valueAsNumber)).to.be.true;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<SdInput>(html` <sd-input title="Test"></sd-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SdInput>(html` <sd-input disabled></sd-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.disabled).to.be.true;
  });

  it('should have aria-disabled when visually-disabled', async () => {
    const el = await fixture<SdInput>(html` <sd-input visually-disabled></sd-input> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should render label wrapper if label or tooltip are present', async () => {
    const el = await fixture<SdInput>(html`
      <sd-input label="test">
        <sd-tooltip
          slot="tooltip"
          content="Lorem ipsum"
          placement="bottom"
          size="lg"
          trigger="click focus"
        ></sd-tooltip>
      </sd-input>
    `);

    const labelParentElement = el.shadowRoot!.querySelector('[part~="form-control"]');
    const tooltip = el.shadowRoot!.querySelector('slot[name="tooltip"]')!;
    const label = el.shadowRoot!.querySelector('#label')!;

    expect(labelParentElement).to.exist;
    expect(labelParentElement!.contains(label)).to.be.true;
    expect(labelParentElement!.contains(tooltip)).to.be.true;
  });

  it('should not render label wrapper if label or tooltip are present', async () => {
    const el = await fixture<SdInput>(html` <sd-input> </sd-input> `);

    const labelParentElement = el.shadowRoot!.querySelector('[part~="form-control"]');
    const tooltip = el.shadowRoot!.querySelector('slot[name="tooltip"]')!;
    const label = el.shadowRoot!.querySelector('#label')!;

    expect(labelParentElement).to.exist;
    expect(labelParentElement!.contains(label)).to.be.false;
    expect(labelParentElement!.contains(tooltip)).to.be.false;
  });

  describe('value methods', () => {
    it('should set the value as a date when using valueAsDate', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="date"></sd-input> `);
      const today = new Date();

      el.valueAsDate = today;

      expect(el.value).to.equal(today.toISOString().split('T')[0]);
    });

    it('should set the value as a number when using valueAsNumber', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number"></sd-input> `);
      const num = 12345;

      el.valueAsNumber = num;

      expect(el.value).to.equal(num.toString());
    });
  });

  describe('value min & max', () => {
    it('should react with data-valid attribute on input field when date value is within min-max range of date', async () => {
      const el = await fixture<SdInput>(html`
        <sd-input type="date" value="2024-06-10" min="2023-06-10" max="2025-06-10" spellcheck></sd-input>
      `);
      expect(el.hasAttribute('data-valid')).to.be.true;
    });

    it('should react with data-invalid attribute on input field when date value is greater then set maximum', async () => {
      const el = await fixture<SdInput>(html`
        <sd-input type="date" value="2025-06-10" max="2024-06-10" spellcheck></sd-input>
      `);
      expect(el.hasAttribute('data-invalid')).to.be.true;
    });

    it('should react with data-invalid attribute on input field when date value is lower then set minimum', async () => {
      const el = await fixture<SdInput>(html`
        <sd-input type="date" value="2023-06-10" min="2024-06-10" spellcheck></sd-input>
      `);
      expect(el.hasAttribute('data-invalid')).to.be.true;
    });

    it('should react on value within/out of range form number', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" min="5" spellcheck></sd-input> `);
      el.valueAsNumber = 6;
      expect(el.checkValidity()).to.be.true;

      el.valueAsNumber = 4;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });
  });

  it('should focus the input when clicking on the label', async () => {
    const el = await fixture<SdInput>(html` <sd-input label="Name"></sd-input> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const focusHandler = sinon.spy();

    el.addEventListener('sd-focus', focusHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => focusHandler.calledOnce);

    expect(focusHandler).to.have.been.calledOnce;
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<SdInput>(html` <sd-input></sd-input> `);
      expect(el.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<SdInput>(html` <sd-input required></sd-input> `);
      expect(el.reportValidity()).to.be.false;
      expect(el.checkValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<SdInput>(html` <sd-input disabled required></sd-input> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<SdInput>(html` <sd-input required value="a"></sd-input> `);

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'b' });
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<SdInput>(html` <sd-input required></sd-input> `);

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: 'a' });
      await sendKeys({ press: 'Backspace' });
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><sd-input name="a" value="1"></sd-input></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><sd-input name="a" value="1"></sd-input></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });

    it('should submit the form when pressing enter in a form without a submit button', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><sd-input></sd-input></form> `);
      const input = form.querySelector('sd-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', submitHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => submitHandler.calledOnce);

      expect(submitHandler).to.have.been.calledOnce;
    });

    it('should prevent submission when pressing enter in an input and canceling the keydown event', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><sd-input></sd-input></form> `);
      const input = form.querySelector('sd-input')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());
      const keydownHandler = sinon.spy((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      });

      form.addEventListener('submit', submitHandler);
      input.addEventListener('keydown', keydownHandler);
      input.focus();
      await sendKeys({ press: 'Enter' });
      await waitUntil(() => keydownHandler.calledOnce);

      expect(keydownHandler).to.have.been.calledOnce;
      expect(submitHandler).to.not.have.been.called;
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const input = await fixture<SdInput>(html` <sd-input></sd-input> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      expect(input.checkValidity()).to.be.false;
      expect(input.hasAttribute('data-invalid')).to.be.true;
      expect(input.hasAttribute('data-valid')).to.be.false;
      expect(input.hasAttribute('data-user-invalid')).to.be.false;
      expect(input.hasAttribute('data-user-valid')).to.be.false;
      expect(input.getAttribute('aria-invalid')).to.equal('true');

      input.focus();
      await sendKeys({ type: 'test' });
      await input.updateComplete;

      expect(input.hasAttribute('data-user-invalid')).to.be.true;
      expect(input.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should show invalid-message when calling reportCustomValidity with non-empty setCustomValidity() ', async () => {
      const input = await fixture<SdInput>(html` <sd-input></sd-input> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.false;
    });

    it('should hide invalid-message when calling reportCustomValidity with empty setCustomValidity() ', async () => {
      const input = await fixture<SdInput>(html` <sd-input></sd-input> `);

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
      const input = await fixture<HTMLFormElement>(html` <sd-input style-on-valid></sd-input> `);

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

    it('should not show icon when calling reportValidity() without style-on-valid attribute', async () => {
      const input = await fixture<HTMLFormElement>(html` <sd-input></sd-input> `);

      input.setCustomValidity('');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;
      await input.updateComplete; // Currently there are two updates in the component

      expect(input.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.not.exist;
      expect(input.shadowRoot!.querySelector('[part~="valid-icon"]')).to.not.exist;
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
          <sd-input name="a" value="test"></sd-input>
          <sd-button type="reset">Reset</sd-button>
        </form>
      `);
      const button = form.querySelector('sd-button')!;
      const input = form.querySelector('sd-input')!;
      input.value = '1234';

      await input.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal('test');

      input.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal('');
    });
  });

  describe('when calling HTMLFormElement.reportValidity()', () => {
    it('should be invalid when the input is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-input required value=""></sd-input>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });

    it('should be valid when the input is empty, reportValidity() is called, and the form has novalidate', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <sd-input required value=""></sd-input>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.true;
    });

    it('should be invalid when a native input is empty and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <input required value=""></input>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      expect(form.reportValidity()).to.be.false;
    });
  });

  describe('when the value changes', () => {
    it('should emit sd-change and sd-input when the user types in the input', async () => {
      const el = await fixture<SdInput>(html` <sd-input></sd-input> `);
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

    it('should not emit sd-change or sd-input when the value is set programmatically', async () => {
      const el = await fixture<SdInput>(html` <sd-input></sd-input> `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
      el.value = 'abc';

      await el.updateComplete;
    });

    it('should not emit sd-change or sd-input when calling setinputText()', async () => {
      const el = await fixture<SdInput>(html` <sd-input value="hi there"></sd-input> `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
      el.focus();
      el.setSelectionRange(0, 2);
      el.setRangeText('hello');

      await el.updateComplete;
    });
  });

  describe('when type="search"', () => {
    it('should emit sd-search when the user clicks the search button', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="search"></sd-input> `);
      const searchHandler = sinon.spy();
      const searchButton = el.shadowRoot!.querySelector('button')!;

      el.addEventListener('sd-search', searchHandler);

      searchButton.click();
      await waitUntil(() => searchHandler.calledOnce);

      expect(searchHandler).to.have.been.calledOnce;
    });

    it('should translate the search icon aria-label when the lang attribute is set', async () => {
      const el = await fixture<SdInput>(html` <sd-input lang="de" type="search"></sd-input> `);
      const searchIcon = el.shadowRoot!.querySelector('button')!.querySelector('sd-icon')!;

      await el.updateComplete;

      expect(searchIcon.getAttribute('aria-label')).to.equal('Suchen');
    });
  });

  describe('when type="number"', () => {
    it('should be valid when the value is within the boundary of a step', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step=".5" value="1.5"></sd-input> `);
      expect(el.checkValidity()).to.be.true;
    });

    it('should be invalid when the value is not within the boundary of a step', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step=".5" value="1.25"></sd-input> `);
      expect(el.checkValidity()).to.be.false;
    });

    it('should update validity when step changes', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step=".5" value="1.5"></sd-input> `);
      expect(el.checkValidity()).to.be.true;

      el.step = 1;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it('should increment by step when stepUp() is called', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step="2" value="2"></sd-input> `);

      el.stepUp();
      await el.updateComplete;
      expect(el.value).to.equal('4');
    });

    it('should decrement by step when stepDown() is called', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step="2" value="2"></sd-input> `);

      el.stepDown();
      await el.updateComplete;
      expect(el.value).to.equal('0');
    });

    it('should not emit sd-input or sd-change when stepUp() is called programmatically', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step="2" value="2"></sd-input> `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
      el.stepUp();

      await el.updateComplete;
    });

    it('should not emit sd-input and sd-change when stepDown() is called programmatically', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" step="2" value="2"></sd-input> `);

      el.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
      el.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
      el.stepDown();

      await el.updateComplete;
    });
  });

  describe('when using spellcheck', () => {
    it('should enable spellcheck when no attribute is present', async () => {
      const el = await fixture<SdInput>(html` <sd-input></sd-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
      expect(input.getAttribute('spellcheck')).to.equal('true');
      expect(input.spellcheck).to.be.true;
    });

    it('should enable spellcheck when set to "true"', async () => {
      const el = await fixture<SdInput>(html` <sd-input spellcheck="true"></sd-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
      expect(input.getAttribute('spellcheck')).to.equal('true');
      expect(input.spellcheck).to.be.true;
    });

    it('should disable spellcheck when set to "false"', async () => {
      const el = await fixture<SdInput>(html` <sd-input spellcheck="false"></sd-input> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;
      expect(input.getAttribute('spellcheck')).to.equal('false');
      expect(input.spellcheck).to.be.false;
    });
  });

  describe('when using spin-buttons', () => {
    it('should show spin buttons when spin-buttons is set', async () => {
      const el = await fixture<SdInput>(html` <sd-input type="number" spin-buttons></sd-input> `);
      const decrementButton = el.shadowRoot!.querySelector('button[part^="decrement-number-stepper"]')!;
      const incrementButton = el.shadowRoot!.querySelector('button[part^="increment-number-stepper"]')!;

      expect(decrementButton).to.exist;
      expect(incrementButton).to.exist;
    });

    it('should decrement the value on long press of decrement button', async () => {
      const el = await fixture<SdInput>(html`<sd-input type="number" spin-buttons></sd-input>`);
      el.value = '10';
      await el.updateComplete;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleStepDownSpy = sinon.spy(el as any, 'handleStepDown');

      const initialValue = parseFloat(el.value);

      // manually invoke the handleStepDown multiple times to simulate a long press effect
      for (let i = 0; i < 5; i++) {
        el['handleStepDown']();
      }

      expect(handleStepDownSpy.callCount).to.equal(5);

      const newValue = parseFloat(el.value);
      expect(newValue).to.be.lessThan(initialValue);

      handleStepDownSpy.restore();
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
          <sd-input form="f1" name="a" value="1"></sd-input>
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>('#f2')!;
      const input = document.querySelector('sd-input')!;

      input.form = 'f2';
      await input.updateComplete;

      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
      expect(formData.get('b')).to.be.null;
      expect(formData.get('c')).to.equal('3');
    });
  });

  describe('when using the getFormControls() function', () => {
    it('should return both native and Solid form controls in the correct DOM order', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <input type="text" name="a" value="1" form="f1" />
          <input type="text" name="b" value="2" form="f1" />
          <form id="f1">
            <input type="hidden" name="c" value="3" />
            <input type="text" name="d" value="4" />
            <input name="e" value="5" />
            <textarea name="f">6</textarea>
            <textarea name="g">7</textarea>
            <input type="checkbox" name="h" value="8" />
          </form>
          <input type="text" name="i" value="9" form="f1" />
          <input type="text" name="j" value="10" form="f1" />
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>('form')!;
      const formControls = getFormControls(form);

      expect(formControls.length).to.equal(10);
      expect(formControls.map((fc: HTMLInputElement) => fc.value).join('')).to.equal('12345678910');
    });
  });
});
