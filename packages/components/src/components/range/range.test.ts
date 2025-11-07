import '../../../dist/solid-components';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { resetMouse, sendKeys, sendMouse } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form.js';
import sinon from 'sinon';
import type SdRange from './range';

describe('<sd-range>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SdRange>(html` <sd-range label="Lorem Ipsum"></sd-range> `);
    await expect(el).to.be.accessible();
  });

  describe('Tooltips', () => {
    it('should allow to format the tooltips output with the tooltipFormatter attribute', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const tooltip = el.shadowRoot!.querySelector('sd-tooltip')!;

      el.tooltipFormatter = (value: number) => `Value: ${value}`;

      el.value = '5';
      await el.updateComplete;

      expect(tooltip.content).to.equal('Value: 5');
    });
  });

  describe('value methods', () => {
    it('should automatically sort the value array when setting the value prop', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      el.value = '5 3 1';
      expect(el.valueAsArray).to.deep.equal([1, 3, 5]);
    });

    it('should automatically sort the value array when setting the valueAsArray prop', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      el.valueAsArray = [5, 3, 1];
      expect(el.value).to.equal('1 3 5');
    });
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      expect(el.checkValidity()).to.be.true;
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      el.setCustomValidity('This is a custom validation message');
      expect(el.checkValidity()).to.be.false;
    });

    it('should be valid when setCustomValidity() is called with an empty value', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      el.setCustomValidity('This is a custom validation message');
      expect(el.checkValidity()).to.be.false;

      el.setCustomValidity('');
      expect(el.checkValidity()).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);

      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;

      el.setCustomValidity('This is a custom validation message');

      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-range name="a" value="1"></sd-range>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-range name="a" value="1"></sd-range>
        </form>
      `);
      const json = serialize(form) as { a: '1' };
      expect(json.a).to.equal('1');
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <sd-button type="submit">Submit</sd-button>
          </form>
          <sd-range form="f" name="a" value="1"></sd-range>
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
          <sd-range name="a" value="5"></sd-range>
          <sd-button type="reset">Reset</sd-button>
        </form>
      `);
      const button = form.querySelector('sd-button')!;
      const input = form.querySelector('sd-range')!;
      input.value = '100';

      await input.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal('5');

      input.defaultValue = '10';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal('10');
    });
  });

  describe('when calling HTMLFormElement.reportValidity()', () => {
    it('should be invalid when the range is invalid and form.reportValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <sd-range></sd-range>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      const range = form.querySelector('sd-range')!;
      range.setCustomValidity('This is a custom validation message');

      expect(form.reportValidity()).to.be.false;
    });

    it('should be valid when the range is valid, reportValidity() is called, and the form has novalidate', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <sd-range required value=""></sd-range>
          <sd-button type="submit">Submit</sd-button>
        </form>
      `);

      const range = form.querySelector('sd-range')!;
      range.setCustomValidity('This is a custom validation message');

      expect(form.reportValidity()).to.be.true;
    });
  });

  describe('when the value changes', () => {
    it('should emit a sd-change event when the user has dragged a thumb', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const changeHandler = sinon.spy();
      const baseDiv = el.shadowRoot!.querySelector('[part="base"]')!.getBoundingClientRect().width;
      const moveSteps = Math.round((baseDiv / 100) * 5);

      el.addEventListener('sd-change', changeHandler);

      const thumb = el.shadowRoot!.querySelector('[part="thumb"]')!;
      const rect = thumb.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      expect(thumb).to.not.have.class('grabbed');

      await sendMouse({
        position: [center, rect.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      expect(thumb).to.have.class('grabbed');

      await sendMouse({
        position: [center + moveSteps, rect.top],
        type: 'move'
      });

      await resetMouse();
      expect(thumb).to.not.have.class('grabbed');
      await el.updateComplete;

      expect(el.value).to.equal('5');
      expect(changeHandler.callCount).to.equal(1);
    });

    it('should not emit a sd-change event when the user has dragged a thumb to the same value again', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);

      const thumb = el.shadowRoot!.querySelector('[part="thumb"]')!;
      const rect = thumb.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const baseDiv = el.shadowRoot!.querySelector('[part="base"]')!.getBoundingClientRect().width;
      const moveSteps = Math.round((baseDiv / 100) * 5);

      expect(thumb).to.not.have.class('grabbed');
      expect(el.value).to.equal('0');

      await sendMouse({
        position: [center, rect.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      expect(thumb).to.have.class('grabbed');

      await sendMouse({
        position: [center + moveSteps, rect.top],
        type: 'move'
      });

      expect(el.value).to.equal('5');

      await sendMouse({
        position: [center, rect.top],
        type: 'move'
      });

      await resetMouse();

      await el.updateComplete;

      expect(thumb).to.not.have.class('grabbed');

      expect(el.value).to.equal('0');
      expect(inputHandler.called).to.be.true;
      expect(changeHandler.called).to.be.false;
    });

    it('should allow to set more than one value', async () => {
      if (navigator.userAgent.includes('Firefox')) {
        console.warn('Skipping test in Firefox as drag and drop does not work right');
        return;
      }

      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range value="20 80"></sd-range>`);
      const changeHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);

      const thumbs = Array.from(el.shadowRoot!.querySelectorAll('[part="thumb"]'));

      expect(thumbs).to.have.length(2);

      const thumbStart = thumbs.at(0)!;
      const thumbEnd = thumbs.at(-1)!;

      const rectStart = thumbStart.getBoundingClientRect();
      const rectEnd = thumbEnd.getBoundingClientRect();

      const startCenter = Math.floor(rectStart.left + rectStart.width / 2);
      const endCenter = Math.floor(rectEnd.left + rectEnd.width / 2);

      const baseDiv = el.shadowRoot!.querySelector('[part="base"]')!.getBoundingClientRect().width;
      const moveSteps = Math.round((baseDiv / 100) * 5);

      expect(thumbStart).to.not.have.class('grabbed');
      expect(thumbEnd).to.not.have.class('grabbed');

      await sendMouse({
        position: [startCenter, rectStart.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      expect(thumbStart).to.have.class('grabbed');
      expect(thumbEnd).to.not.have.class('grabbed');

      await sendMouse({
        position: [startCenter + moveSteps, rectStart.top],
        type: 'move'
      });

      await resetMouse();
      expect(thumbStart).to.not.have.class('grabbed');
      expect(thumbEnd).to.not.have.class('grabbed');
      await el.updateComplete;

      expect(el.value).to.equal('25 80');
      expect(changeHandler.callCount).to.equal(1);

      // Second thumb
      expect(thumbStart).to.not.have.class('grabbed');
      expect(thumbEnd).to.not.have.class('grabbed');

      await sendMouse({
        position: [endCenter, rectStart.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      expect(thumbStart).to.not.have.class('grabbed');
      expect(thumbEnd).to.have.class('grabbed');

      await sendMouse({
        position: [endCenter + moveSteps, rectStart.top],
        type: 'move'
      });

      await resetMouse();
      expect(thumbStart).to.not.have.class('grabbed');
      expect(thumbEnd).to.not.have.class('grabbed');
      await el.updateComplete;

      expect(el.value).to.equal('25 85');
      expect(changeHandler.called).to.be.true;
    });

    it('should emit a sd-input event while the user is dragging the thumb', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const inputHandler = sinon.spy();

      el.addEventListener('sd-input', inputHandler);

      const thumb = el.shadowRoot!.querySelector('[part="thumb"]')!;
      const rect = thumb.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      await sendMouse({
        position: [center, rect.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      await sendMouse({
        position: [center + 10, rect.top],
        type: 'move'
      });

      await sendMouse({
        position: [center + 20, rect.top],
        type: 'move'
      });

      await el.updateComplete;

      expect(inputHandler.callCount).to.equal(2);
    });

    it('should emit a sd-move event when the user has dragged a thumb', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const moveHandler = sinon.spy();

      el.addEventListener('sd-move', moveHandler);

      const thumb = el.shadowRoot!.querySelector('[part="thumb"]')!;
      const rect = thumb.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      await sendMouse({
        position: [center, rect.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      await sendMouse({
        position: [center + 10, rect.top],
        type: 'move'
      });

      await sendMouse({
        position: [center + 20, rect.top],
        type: 'move'
      });

      await el.updateComplete;

      expect(moveHandler.called).to.be.true;
    });

    it('should not move the thumb when the emitted `sd-move` event is prevented', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const inputHandler = sinon.spy();
      const moveHandler = sinon.spy();

      el.addEventListener('sd-input', inputHandler);
      el.addEventListener('sd-move', e => {
        e.preventDefault();
        moveHandler();
      });

      const thumb = el.shadowRoot!.querySelector('[part="thumb"]')!;
      const rect = thumb.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      await sendMouse({
        position: [center, rect.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      await sendMouse({
        position: [center + 10, rect.top],
        type: 'move'
      });

      await sendMouse({
        position: [center + 20, rect.top],
        type: 'move'
      });

      await el.updateComplete;

      expect(moveHandler.called).to.be.true;
      expect(inputHandler.callCount).to.equal(0);
    });

    it('should not move the thumb when restrict is set to true and the thumbs new value would be out of bounds', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range restrict-movement value="30 70"></sd-range>`);
      const inputHandler = sinon.spy();

      el.addEventListener('sd-input', inputHandler);

      const thumbs = el.shadowRoot!.querySelectorAll('[part="thumb"]');
      const [firstThumb, secondThumb] = Array.from(thumbs);

      const rect = firstThumb.getBoundingClientRect();
      const center = parseInt((rect.left + rect.width / 2).toFixed(0), 10);

      const targetRect = secondThumb.getBoundingClientRect();
      const targetCenter = parseInt((targetRect.left + targetRect.width / 2).toFixed(0), 10);

      await sendMouse({
        position: [center, rect.top],
        type: 'click'
      });

      await sendMouse({
        type: 'down'
      });

      await sendMouse({
        position: [targetCenter, rect.top],
        type: 'move'
      });

      await el.updateComplete;

      expect(inputHandler.callCount).to.equal(1);
      expect(el.valueAsArray).to.deep.equal([70, 70]);
    });

    it('should not emit sd-change or sd-input when the value is set programmatically', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const changeHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);

      el.value = '50';
      await el.updateComplete;

      expect(changeHandler.called).to.be.false;
    });

    it('should emit a sd-change and sd-input event when the user clicks the track', async () => {
      await resetMouse();
      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);

      const track = el.shadowRoot!.querySelector('[part="track"]')!;
      const rect = track.getBoundingClientRect();

      await sendMouse({
        position: [rect.left + 125, rect.top],
        type: 'click'
      });

      expect(el.value).to.equal('15');
      expect(changeHandler.called).to.be.true;
      expect(inputHandler.called).to.be.true;
    });

    it('should emit a pointer-down event on the closest thumb when clicking the track so it can be dragged instantly', async () => {
      const pointerDownHandler = sinon.spy();

      const el = await fixture<SdRange>(html`<sd-range></sd-range>`);
      const firstThumb = el.shadowRoot!.querySelector('[part="thumb"]')!;

      firstThumb.addEventListener('pointerdown', pointerDownHandler);

      const track = el.shadowRoot!.querySelector('[part="track"]')!;
      const rect = track.getBoundingClientRect();

      await sendMouse({
        position: [rect.left + 120, rect.top],
        type: 'click'
      });

      expect(pointerDownHandler.called).to.be.true;
    });
  });

  describe('when using keyboard navigation', () => {
    const createFixture = async () => {
      const el = await fixture<SdRange>(html` <sd-range min="0" max="100" value="50" step="2"></sd-range> `);

      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();
      const moveHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-input', inputHandler);
      el.addEventListener('sd-move', moveHandler);

      return {
        changeHandler,
        el,
        inputHandler,
        moveHandler
      };
    };

    it('should increment the value by the step when pressing the ArrowUp key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'ArrowUp'
      });

      expect(el.value).to.equal('52');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should increment the value by the step when pressing the ArrowRight key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'ArrowRight'
      });

      expect(el.value).to.equal('52');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should increment the value by one fifth of the step when pressing the PageUp key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'PageUp'
      });

      expect(el.value).to.equal('70');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should increment to the max value when pressing the PageUp key and the wanted value is too big', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.value = '90';
      await el.updateComplete;

      el.focus();
      expect(el.value).to.equal('90');

      await sendKeys({
        press: 'PageUp'
      });

      expect(el.value).to.equal('100');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should jump to the max value when pressing the End key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'End'
      });

      expect(el.value).to.equal('100');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should decrement the value by the step when pressing the ArrowDown key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'ArrowDown'
      });

      expect(el.value).to.equal('48');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should decrement the value by the step when pressing the ArrowLeft key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'ArrowLeft'
      });

      expect(el.value).to.equal('48');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should decrement the value by one fifth of the step when pressing the PageDown key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'PageDown'
      });

      expect(el.value).to.equal('30');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should decrement to the min value when pressing the PageDown key and the wanted value is too small', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.value = '10';
      await el.updateComplete;

      el.focus();
      expect(el.value).to.equal('10');

      await sendKeys({
        press: 'PageDown'
      });

      expect(el.value).to.equal('0');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should jump to the min value when pressing the Home key', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.focus();
      expect(el.value).to.equal('50');

      await sendKeys({
        press: 'Home'
      });

      expect(el.value).to.equal('0');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(1);
      expect(inputHandler.callCount).to.equal(1);
    });

    it('should not emit the sd-change and sd-input event when the user has moved the thumb via keyboard', async () => {
      const { changeHandler, el, inputHandler, moveHandler } = await createFixture();

      el.addEventListener('sd-move', e => {
        e.preventDefault();
      });

      el.value = '10';
      await el.updateComplete;

      el.focus();
      expect(el.value).to.equal('10');

      await sendKeys({
        press: 'PageDown'
      });

      expect(el.value).to.equal('10');

      expect(moveHandler.callCount).to.equal(1);
      expect(changeHandler.callCount).to.equal(0);
      expect(inputHandler.callCount).to.equal(0);
    });

    it('should move the focus to the next thumb when pressing the Tab key', async () => {
      const el = await fixture<SdRange>(html`<sd-range value="20 80"></sd-range>`);
      const thumbs = Array.from(el.shadowRoot!.querySelectorAll('[part="thumb"]'));

      expect(thumbs).to.have.length(2);

      const thumbStart = thumbs.at(0)! as HTMLDivElement;
      const thumbEnd = thumbs.at(-1)! as HTMLDivElement;

      el.focus();

      expect(document.activeElement).to.equal(el);
      expect(el.shadowRoot!.activeElement).to.equal(thumbStart);

      await sendKeys({
        press: 'Tab'
      });

      expect(el.shadowRoot!.activeElement).to.equal(thumbEnd);
    });
  });
});
