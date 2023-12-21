// eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
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
    expect(el.noSpinButtons).to.be.false;
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
      const input = await fixture<HTMLFormElement>(html` <sd-input></sd-input> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      expect(input.checkValidity()).to.be.false;
      expect(input.hasAttribute('data-invalid')).to.be.true;
      expect(input.hasAttribute('data-valid')).to.be.false;
      expect(input.hasAttribute('data-user-invalid')).to.be.false;
      expect(input.hasAttribute('data-user-valid')).to.be.false;

      input.focus();
      await sendKeys({ type: 'test' });
      await input.updateComplete;

      expect(input.hasAttribute('data-user-invalid')).to.be.true;
      expect(input.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should render #invalid-message inside the component when setCustomValidity() and reportCustomValidity() is called with a non-empty value', async () => {
      const input = await fixture<HTMLFormElement>(html` <sd-input></sd-input> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;

      expect(input.shadowRoot!.querySelector('[part~="invalid-message"]')).to.exist;
    });

    it('should not render #invalid-message inside the component when setCustomValidity() and reportCustomValidity() is called with an empty value', async () => {
      const input = await fixture<HTMLFormElement>(html` <sd-input></sd-input> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;

      expect(input.shadowRoot!.querySelector('[part~="invalid-message"]')).to.exist;

      input.setCustomValidity('');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;

      expect(input.shadowRoot!.querySelector('[part~="invalid-message"]')).to.not.exist;
    });

    it('should show sd-icon with name="confirm" when setCustomValidity() is called with an empty value', async () => {
      const input = await fixture<HTMLFormElement>(html` <sd-input></sd-input> `);

      input.setCustomValidity('Invalid selection');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;

      expect(input.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.exist;

      input.setCustomValidity('');
      await input.updateComplete;

      input.reportValidity();
      await input.updateComplete;

      expect(input.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.not.exist;
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
      await oneEvent(form, 'reset', false);
      await input.updateComplete;

      expect(input.value).to.equal('test');

      input.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset', false);
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
      const formControls = getFormControls(form); // eslint-disable-line

      expect(formControls.length).to.equal(10); // eslint-disable-line
      expect(formControls.map((fc: HTMLInputElement) => fc.value).join('')).to.equal('12345678910'); // eslint-disable-line
    });
  });
});
