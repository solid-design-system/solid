import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdRadio from '../../components/radio/radio';
import type SdRadioGroup from './radio-group';

describe('<sd-radio-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no radio is checked', async () => {
      const radioGroup = await fixture<SdRadioGroup>(html`
        <sd-radio-group required>
          <sd-radio value="1"></sd-radio>
          <sd-radio value="2"></sd-radio>
        </sd-radio-group>
      `);

      expect(radioGroup.checkValidity()).to.be.false;
    });

    it('should become valid when an option is checked', async () => {
      const radioGroup = await fixture<SdRadioGroup>(html`
        <sd-radio-group required>
          <sd-radio value="1"></sd-radio>
          <sd-radio value="2"></sd-radio>
        </sd-radio-group>
      `);

      radioGroup.value = '1';
      await radioGroup.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
    });

    it(`should be valid when required and one radio is checked`, async () => {
      const el = await fixture<SdRadioGroup>(html`
        <sd-radio-group label="Select an option" value="1" required>
          <sd-radio name="option" value="1">Option 1</sd-radio>
          <sd-radio name="option" value="2">Option 2</sd-radio>
          <sd-radio name="option" value="3">Option 3</sd-radio>
        </sd-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when required and no radios are checked`, async () => {
      const el = await fixture<SdRadioGroup>(html`
        <sd-radio-group label="Select an option" required>
          <sd-radio name="option" value="1">Option 1</sd-radio>
          <sd-radio name="option" value="2">Option 2</sd-radio>
          <sd-radio name="option" value="3">Option 3</sd-radio>
        </sd-radio-group>
      `);

      expect(el.checkValidity()).to.be.false;
    });

    it(`should be valid when required and a different radio is checked`, async () => {
      const el = await fixture<SdRadioGroup>(html`
        <sd-radio-group label="Select an option" value="3" required>
          <sd-radio name="option" value="1">Option 1</sd-radio>
          <sd-radio name="option" value="2">Option 2</sd-radio>
          <sd-radio name="option" value="3">Option 3</sd-radio>
        </sd-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when custom validity is set`, async () => {
      const el = await fixture<SdRadioGroup>(html`
        <sd-radio-group label="Select an option">
          <sd-radio name="option" value="1">Option 1</sd-radio>
          <sd-radio name="option" value="2">Option 2</sd-radio>
          <sd-radio name="option" value="3">Option 3</sd-radio>
        </sd-radio-group>
      `);

      el.setCustomValidity('Error');

      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const radioGroup = await fixture<SdRadioGroup>(html`
        <sd-radio-group value="1" required>
          <sd-radio value="1"></sd-radio>
          <sd-radio value="2"></sd-radio>
        </sd-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('sd-radio')[1];

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-valid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      await secondRadio.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const radioGroup = await fixture<SdRadioGroup>(html`
        <sd-radio-group required>
          <sd-radio value="1"></sd-radio>
          <sd-radio value="2"></sd-radio>
        </sd-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('sd-radio')[1];

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      radioGroup.value = '';
      await radioGroup.updateComplete;

      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  it('should show a constraint validation error when setCustomValidity() is called', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sd-radio-group value="1">
          <sd-radio id="radio-1" name="a" value="1"></sd-radio>
          <sd-radio id="radio-2" name="a" value="2"></sd-radio>
        </sd-radio-group>
        <sd-button type="submit">Submit</sd-button>
      </form>
    `);
    const button = form.querySelector('sd-button')!;
    const radioGroup = form.querySelector<SdRadioGroup>('sd-radio-group')!;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

    // Submitting the form after setting custom validity should not trigger the handler
    radioGroup.setCustomValidity('Invalid selection');
    form.addEventListener('submit', submitHandler);
    button.click();

    await aTimeout(100);

    expect(submitHandler).to.not.have.been.called;
  });
});

describe('when resetting a form', () => {
  it('should reset the element to its initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sd-radio-group value="1">
          <sd-radio value="1"></sd-radio>
          <sd-radio value="2"></sd-radio>
        </sd-radio-group>
        <sd-button type="reset">Reset</sd-button>
      </form>
    `);
    const button = form.querySelector('sd-button')!;
    const radioGroup = form.querySelector('sd-radio-group')!;
    radioGroup.value = '2';

    await radioGroup.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset', false);
    await radioGroup.updateComplete;

    expect(radioGroup.value).to.equal('1');
  });
});

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sd-radio-group name="a" value="1">
          <sd-radio id="radio-1" value="1"></sd-radio>
          <sd-radio id="radio-2" value="2"></sd-radio>
          <sd-radio id="radio-3" value="3"></sd-radio>
        </sd-radio-group>
        <sd-button type="submit">Submit</sd-button>
      </form>
    `);
    const button = form.querySelector('sd-button')!;
    const radio = form.querySelectorAll('sd-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);

      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('2');
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <sd-button type="submit">Submit</sd-button>
        </form>
        <sd-radio-group form="f" name="a" value="1">
          <sd-radio id="radio-1" value="1"></sd-radio>
          <sd-radio id="radio-2" value="2"></sd-radio>
          <sd-radio id="radio-3" value="3"></sd-radio>
        </sd-radio-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.get('a')).to.equal('1');
  });
});

describe('when the value changes', () => {
  it('should emit sd-change when toggled with the arrow keys', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group>
        <sd-radio id="radio-1" value="1"></sd-radio>
        <sd-radio id="radio-2" value="2"></sd-radio>
      </sd-radio-group>
    `);
    const firstRadio = radioGroup.querySelector<SdRadio>('#radio-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    radioGroup.addEventListener('sd-change', changeHandler);
    radioGroup.addEventListener('sd-input', inputHandler);
    firstRadio.focus();
    await sendKeys({ press: 'ArrowRight' });
    await radioGroup.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(radioGroup.value).to.equal('2');
  });

  it('should emit sd-change and sd-input when clicked', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group>
        <sd-radio id="radio-1" value="1"></sd-radio>
        <sd-radio id="radio-2" value="2"></sd-radio>
      </sd-radio-group>
    `);
    const radio = radioGroup.querySelector<SdRadio>('#radio-1')!;
    setTimeout(() => radio.click());
    const event = await oneEvent(radioGroup, 'sd-change', false);
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should emit sd-change and sd-input when toggled with spacebar', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group>
        <sd-radio id="radio-1" value="1"></sd-radio>
        <sd-radio id="radio-2" value="2"></sd-radio>
      </sd-radio-group>
    `);
    const radio = radioGroup.querySelector<SdRadio>('#radio-1')!;
    radio.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = await oneEvent(radioGroup, 'sd-change', false);
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should not emit sd-change or sd-input when the value is changed programmatically', async () => {
    const radioGroup = await fixture<SdRadioGroup>(html`
      <sd-radio-group value="1">
        <sd-radio id="radio-1" value="1"></sd-radio>
        <sd-radio id="radio-2" value="2"></sd-radio>
      </sd-radio-group>
    `);

    radioGroup.addEventListener('sd-change', () => expect.fail('sd-change should not be emitted'));
    radioGroup.addEventListener('sd-input', () => expect.fail('sd-input should not be emitted'));
    radioGroup.value = '2';
    await radioGroup.updateComplete;
  });
});
