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
    expect(el.floatingLabel).to.be.false;
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

  it('should render floating label part instead of label if floating label is active', async () => {
    const el = await fixture<SdInput>(html` <sd-input label="test" floating-label> </sd-input> `);

    const labelParentElement = el.shadowRoot!.querySelector('[part~="form-control"]');
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]');
    const floatingLabel = el.shadowRoot!.querySelector('[part~="form-control-floating-label"]');

    expect(labelParentElement).to.exist;
    expect(labelParentElement!.contains(label)).to.be.false;
    expect(labelParentElement!.contains(floatingLabel)).to.be.true;
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

  describe('when type="formatted-number"', () => {
    describe('rendering', () => {
      it('should render the internal input as type="text"', async () => {
        const el = await fixture<SdInput>(html` <sd-input type="formatted-number" label="Amount"></sd-input> `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.type).to.equal('text');
      });

      it('should set inputmode to "decimal" by default', async () => {
        const el = await fixture<SdInput>(html` <sd-input type="formatted-number" label="Amount"></sd-input> `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.inputMode).to.equal('decimal');
      });

      it('should allow overriding inputmode', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" inputmode="numeric" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.inputMode).to.equal('numeric');
      });

      it('should pass accessibility tests', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" label="Amount" value="1234.56"></sd-input>
        `);
        await expect(el).to.be.accessible();
      });
    });

    describe('formatting and display', () => {
      it('should format the value using the resolved locale on initial render', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="de" value="1234.56" label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('1.234,56');
      });

      it('should format using English locale', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="1234.56" label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('1,234.56');
      });

      it('should apply numberFormatOptions', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input
            type="formatted-number"
            lang="en"
            value="1234"
            .numberFormatOptions=${{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
            label="Amount"
          ></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('1,234.00');
      });

      it('should show raw value on focus and formatted value on blur', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="1000" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        await el.updateComplete;

        el.focus();
        await el.updateComplete;
        expect(input.value).to.equal('1000');

        el.blur();
        await el.updateComplete;
        expect(input.value).to.equal('1,000');
      });

      it('should show locale-decimal raw value on focus for German locale (not JS dot-decimal)', async () => {
        // A German user formatting 1234.56 sees "1.234,56" at rest.
        // On focus they should see "1234,56" — locale decimal separator, no grouping.
        // They should NOT see the JS-internal "1234.56".
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="de" value="1234.56" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        await el.updateComplete;
        expect(input.value).to.equal('1.234,56');

        el.focus();
        await el.updateComplete;
        expect(input.value).to.equal('1234,56');

        el.blur();
        await el.updateComplete;
        expect(input.value).to.equal('1.234,56');
      });

      it('should use localize.lang() (document locale) when no lang attribute is set on the element', async () => {
        // When lang is set on the document element, the component should format/parse using it.
        const originalLang = document.documentElement.lang;
        document.documentElement.lang = 'de';
        try {
          const el = await fixture<SdInput>(html`
            <sd-input type="formatted-number" value="1234.56" label="Amount"></sd-input>
          `);
          await el.updateComplete;
          const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
          // Should format as German even without lang on the element itself
          expect(input.value).to.equal('1.234,56');

          el.focus();
          await el.updateComplete;
          // On focus should show locale-decimal form, not JS dot-decimal
          expect(input.value).to.equal('1234,56');
        } finally {
          document.documentElement.lang = originalLang;
        }
      });

      it('should update display when lang changes', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="1234.56" label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('1,234.56');

        el.lang = 'de';
        await el.updateComplete;
        expect(input.value).to.equal('1.234,56');
      });

      it('should update display when numberFormatOptions changes', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="1234.5" label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('1,234.5');

        el.numberFormatOptions = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
        await el.updateComplete;
        expect(input.value).to.equal('1,234.50');
      });

      it('should display empty string when value is empty', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('');
      });
    });

    describe('raw value', () => {
      it('should keep the raw numeric string as the value property', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="de" value="1234.56" label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('1.234,56');
        expect(el.value).to.equal('1234.56');
      });

      it('should parse "3.000,00" correctly even in an English input', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        // User typed German-style into English field — both separators present, comma is last → decimal
        input.value = '3.000,00';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('3000');
      });

      it('should parse a locale-formatted value typed by the user on blur', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="de" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '1.000,30';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('1000.3');
      });

      it('should parse an English-formatted value typed by the user on blur', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '1,000.30';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('1000.3');
      });

      it('should treat "1,000" as 1.000 (decimal) when lang="de"', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="de" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '1,000';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        // In German locale: comma = decimal → 1,000 = 1.000 = 1
        expect(el.value).to.equal('1');
      });

      it('should treat "1,000" as 1000 (thousands) when lang="en"', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '1,000';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('1000');
      });

      it('should treat a lone comma with fewer than 3 trailing digits as decimal (lang="de")', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="de" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '323323,23';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('323323.23');
      });

      // With lang="de": comma=decimal, dot=thousands — locale always wins
      for (const [typed, expected] of [
        ['3,0', '3'], // decimal comma → 3.0
        ['3,00', '3'], // decimal comma → 3.00
        ['3,000', '3'], // decimal comma → 3.000 (German: 3,000 = 3 with 3 decimal zeros)
        ['3,0000', '3'], // decimal comma → 3.0000
        ['3,00000', '3'] // decimal comma → 3.00000
      ] as const) {
        it(`should parse "${typed}" as ${expected} (lang="de", comma=decimal)`, async () => {
          const el = await fixture<SdInput>(html`
            <sd-input type="formatted-number" lang="de" label="Amount"></sd-input>
          `);
          const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
          el.focus();
          await el.updateComplete;
          input.value = typed;
          input.dispatchEvent(new Event('input'));
          el.blur();
          await el.updateComplete;
          expect(el.value).to.equal(expected);
        });
      }

      // With lang="en": comma=thousands, dot=decimal — locale always wins
      for (const [typed, expected] of [
        ['3,0', '30'], // comma=thousands (strip) → 30
        ['3,00', '300'], // comma=thousands (strip) → 300
        ['3,000', '3000'], // comma=thousands (strip) → 3000
        ['3,0000', '30000'], // comma=thousands (strip) → 30000
        ['3.0', '3'], // dot=decimal → 3.0
        ['3.000', '3'], // dot=decimal, single → 3.000
        ['3.00000', '3'] // dot=decimal → 3.00000
      ] as const) {
        it(`should parse "${typed}" as ${expected} (lang="en")`, async () => {
          const el = await fixture<SdInput>(html`
            <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
          `);
          const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
          el.focus();
          await el.updateComplete;
          input.value = typed;
          input.dispatchEvent(new Event('input'));
          el.blur();
          await el.updateComplete;
          expect(el.value).to.equal(expected);
        });
      }

      it('should treat a lone comma followed by exactly 3 digits as thousands separator (no lang, heuristic)', async () => {
        const el = await fixture<SdInput>(html` <sd-input type="formatted-number" label="Amount"></sd-input> `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '1,000';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        // Heuristic: 3 trailing digits after lone comma → thousands
        expect(el.value).to.equal('1000');
      });

      it('should handle negative numbers correctly', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = '-1,234.56';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('-1234.56');
      });

      it('should strip currency symbols and parse correctly on blur', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input
            type="formatted-number"
            lang="de"
            value="9999.99"
            number-format-options='{"style":"currency","currency":"EUR"}'
            label="Amount"
          ></sd-input>
        `);
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        // Simulate user clicking in and blurring without editing (round-trip)
        el.focus();
        await el.updateComplete;
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('9999.99');
      });

      it('should store empty string when input contains no parseable number', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        el.focus();
        await el.updateComplete;
        input.value = 'abc';
        input.dispatchEvent(new Event('input'));
        el.blur();
        await el.updateComplete;
        expect(el.value).to.equal('');
      });
    });

    describe('valueAsNumber', () => {
      it('should return the numeric value', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="42.5" label="Amount"></sd-input>
        `);
        expect(el.valueAsNumber).to.equal(42.5);
      });

      it('should return NaN for empty value', async () => {
        const el = await fixture<SdInput>(html` <sd-input type="formatted-number" label="Amount"></sd-input> `);
        expect(isNaN(el.valueAsNumber)).to.be.true;
      });

      it('should set value and update display when setting valueAsNumber', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" label="Amount"></sd-input>
        `);
        el.valueAsNumber = 9876.54;
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(el.value).to.equal('9876.54');
        expect(input.value).to.equal('9,876.54');
      });
    });

    describe('stepping', () => {
      it('should increment value with stepUp()', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="10" step="5" label="Amount"></sd-input>
        `);
        el.stepUp();
        await el.updateComplete;
        expect(el.value).to.equal('15');
      });

      it('should decrement value with stepDown()', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="10" step="5" label="Amount"></sd-input>
        `);
        el.stepDown();
        await el.updateComplete;
        expect(el.value).to.equal('5');
      });

      it('should default to step=1 when step is not set', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="10" label="Amount"></sd-input>
        `);
        el.stepUp();
        await el.updateComplete;
        expect(el.value).to.equal('11');
      });

      it('should not exceed max when stepping up', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="9" max="10" step="5" label="Amount"></sd-input>
        `);
        el.stepUp();
        await el.updateComplete;
        expect(el.value).to.equal('10');
      });

      it('should not go below min when stepping down', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="3" min="0" step="5" label="Amount"></sd-input>
        `);
        el.stepDown();
        await el.updateComplete;
        expect(el.value).to.equal('0');
      });

      it('should start from 0 when stepping up from empty value', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" step="5" label="Amount"></sd-input>
        `);
        el.stepUp();
        await el.updateComplete;
        expect(el.value).to.equal('5');
      });

      it('should update formatted display after stepping', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="999" step="1" label="Amount"></sd-input>
        `);
        el.stepUp();
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(el.value).to.equal('1000');
        expect(input.value).to.equal('1,000');
      });

      it('should increment on ArrowUp keydown', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="10" step="1" label="Amount"></sd-input>
        `);
        el.focus();
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
        await el.updateComplete;
        expect(el.value).to.equal('11');
      });

      it('should decrement on ArrowDown keydown', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="10" step="1" label="Amount"></sd-input>
        `);
        el.focus();
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
        await el.updateComplete;
        expect(el.value).to.equal('9');
      });

      it('should not step beyond max on ArrowUp', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="10" max="10" step="1" label="Amount"></sd-input>
        `);
        el.focus();
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
        await el.updateComplete;
        expect(el.value).to.equal('10');
      });

      it('should not step below min on ArrowDown', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" value="0" min="0" step="1" label="Amount"></sd-input>
        `);
        el.focus();
        await el.updateComplete;
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
        await el.updateComplete;
        expect(el.value).to.equal('0');
      });
    });

    describe('spin buttons', () => {
      it('should show spin buttons when spin-buttons attribute is set', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" spin-buttons label="Amount"></sd-input>
        `);
        const decrementButton = el.shadowRoot!.querySelector('button[part^="decrement-number-stepper"]')!;
        const incrementButton = el.shadowRoot!.querySelector('button[part^="increment-number-stepper"]')!;
        expect(decrementButton).to.exist;
        expect(incrementButton).to.exist;
      });

      it('should add role="spinbutton" and aria attributes when spin-buttons is set', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" spin-buttons min="0" max="100" value="50" label="Amount"></sd-input>
        `);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.getAttribute('role')).to.equal('spinbutton');
        expect(input.getAttribute('aria-valuenow')).to.equal('50');
        expect(input.getAttribute('aria-valuemin')).to.equal('0');
        expect(input.getAttribute('aria-valuemax')).to.equal('100');
      });

      it('should accumulate value correctly on rapid repeated steps (long-press regression)', async () => {
        // Regression: handleStep() was calling handleInput() which read the stale (not-yet-rendered)
        // input.value and overwrote _displayValue, making rapid spin appear to have no effect.
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="0" step="100" spin-buttons label="Amount"></sd-input>
        `);
        await el.updateComplete;

        const clock = sinon.useFakeTimers();
        try {
          // Simulate what longPress interval does: call handleStepUp repeatedly without awaiting
          // (mirrors the setInterval at 50ms cadence inside the longPress directive)
          for (let i = 0; i < 30; i++) {
            el['handleStepUp']();
          }
          clock.tick(0); // flush microtasks
        } finally {
          clock.restore();
        }

        await el.updateComplete;

        expect(Number(el.value)).to.equal(3000);
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('3,000');
      });
    });

    describe('clear button', () => {
      it('should clear value and display when clear button is clicked', async () => {
        const el = await fixture<SdInput>(html`
          <sd-input type="formatted-number" lang="en" value="1234.56" clearable label="Amount"></sd-input>
        `);
        await el.updateComplete;
        const clearButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="clear-button"]')!;
        expect(clearButton).to.exist;
        clearButton.click();
        await el.updateComplete;
        expect(el.value).to.equal('');
        const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;
        expect(input.value).to.equal('');
      });
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
