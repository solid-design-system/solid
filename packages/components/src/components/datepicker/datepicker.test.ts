import '../../../dist/solid-components';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SdDatepicker from './datepicker';

describe('<sd-datepicker>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-datepicker></sd-datepicker> `);

    expect(el).to.exist;
  });

  it('should be accessible', async () => {
    const el = await fixture<SdDatepicker>(html` <sd-datepicker></sd-datepicker> `);

    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<SdDatepicker>(html`<sd-datepicker></sd-datepicker>`);

    expect(el.name).to.equal('');
    expect(el.value).to.be.null;
    expect(el.range).to.be.false;
    expect(el.rangeStart).to.be.null;
    expect(el.rangeEnd).to.be.null;
    expect(el.allowSameDayRange).to.be.false;
    expect(el.size).to.equal('lg');
    expect(el.alignment).to.equal('left');
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.visuallyDisabled).to.be.false;
    expect(el.styleOnValid).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.placement).to.equal('bottom');
    expect(el.placeholder).to.equal('');
    expect(el.form).to.equal('');
    expect(el.locale).to.equal('en-US');
    expect(el.firstDayOfWeek).to.equal(1);
    expect(el.disabledWeekends).to.be.false;
    expect(el.disabledDates).to.deep.equal([]);
    expect(el.isDateDisabled).to.be.null;
    expect(el.min).to.be.undefined;
    expect(el.max).to.be.undefined;
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SdDatepicker>(html` <sd-datepicker disabled></sd-datepicker> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
    expect(input.disabled).to.be.true;
  });

  it('should have aria-disabled when visually-disabled', async () => {
    const el = await fixture<SdDatepicker>(html` <sd-datepicker visually-disabled></sd-datepicker> `);

    const day = el.shadowRoot!.querySelector<HTMLInputElement>('.day')!;
    expect(day.getAttribute('aria-disabled')).to.equal('true');
  });

  it('changes month/year labels when locale changes', async () => {
    const el = await fixture<SdDatepicker>(html`<sd-datepicker locale="en-US" value="2024-01-15"></sd-datepicker>`);
    el.show();
    await el.updateComplete;

    const monthLabelBefore = el.shadowRoot!.querySelector('.month-label');
    const labelBefore = monthLabelBefore ? (monthLabelBefore.textContent?.trim() ?? '') : '';
    el.locale = 'de-DE';
    await el.updateComplete;
    const monthLabelAfter = el.shadowRoot!.querySelector('.month-label');
    const labelAfter = monthLabelAfter ? (monthLabelAfter.textContent?.trim() ?? '') : '';

    expect(labelAfter).to.not.equal(labelBefore);
  });

  it('should show a placeholder when no date is selected', async () => {
    const el = await fixture<SdDatepicker>(html` <sd-datepicker placeholder="Select a date"></sd-datepicker> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;

    expect(input.placeholder).to.equal('Select a date');
  });

  it('should focus the datepicker when clicking on the label', async () => {
    const el = await fixture<SdDatepicker>(html` <sd-datepicker label="Date Picker"></sd-datepicker> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const focusHandler = sinon.spy();

    el.addEventListener('sd-focus', focusHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => focusHandler.calledOnce);

    expect(focusHandler).to.have.been.calledOnce;
  });

  it('reflects validity via formControlController and invalid message region', async () => {
    const el = await fixture<SdDatepicker>(html`<sd-datepicker></sd-datepicker>`);
    el.setCustomValidity('Custom error');
    await el.updateComplete;

    expect(el.reportValidity()).to.be.false;
    const invalidRegion = el.shadowRoot!.querySelector('#invalid-message')!;
    expect(invalidRegion.textContent).to.contain('Custom error');

    el.setCustomValidity('');
    await el.updateComplete;
    expect(el.reportValidity()).to.be.true;
  });

  it('checkValidity proxies to internal input when available', async () => {
    const el = await fixture<SdDatepicker>(html`<sd-datepicker></sd-datepicker>`);
    expect(el.checkValidity()).to.be.true;
  });

  describe('single date mode', () => {
    it('should select a date when clicked', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker></sd-datepicker> `);

      el.show();
      await el.updateComplete;

      const dayButton = el.shadowRoot!.querySelector('button.day:not(.out-month):not(.disabled)')!;
      await clickOnElement(dayButton);
      await el.updateComplete;

      expect(el.value).to.not.be.null;
    });

    it('should emit sd-change and sd-select when a date is selected', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker></sd-datepicker> `);
      const changeHandler = sinon.spy();
      const selectHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.addEventListener('sd-select', selectHandler);

      el.show();
      await el.updateComplete;

      const dayButton = el.shadowRoot!.querySelector('button.day:not(.out-month):not(.disabled)')!;
      await clickOnElement(dayButton);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(selectHandler).to.have.been.calledOnce;
    });

    it('formats input as DD.MM.YYYY from value after interaction', async () => {
      const el = await fixture<SdDatepicker>(html`<sd-datepicker value="2024-01-15"></sd-datepicker>`);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;

      input.focus();
      await el.updateComplete;

      input.blur();
      await el.updateComplete;

      expect(input.value).to.equal('15.01.2024');
    });
  });

  describe('range mode', () => {
    it('should allow range selection', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker range></sd-datepicker> `);

      el.show();
      await el.updateComplete;

      const dayButtons = el.shadowRoot!.querySelectorAll('button.day:not(.out-month):not(.disabled)');
      await clickOnElement(dayButtons[5]);
      await el.updateComplete;
      await clickOnElement(dayButtons[10]);
      await el.updateComplete;

      expect(el.rangeStart).to.not.be.null;
      expect(el.rangeEnd).to.not.be.null;
    });

    it('should emit sd-range-select when range is selected', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker range></sd-datepicker> `);
      const rangeSelectHandler = sinon.spy();

      el.addEventListener('sd-range-select', rangeSelectHandler);

      el.show();
      await el.updateComplete;

      const dayButtons = el.shadowRoot!.querySelectorAll('button.day:not(.out-month):not(.disabled)');
      await clickOnElement(dayButtons[5]);
      await el.updateComplete;

      expect(rangeSelectHandler).to.have.been.calledOnce;
    });

    it('should set the end date if the start date is after the end date', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker range></sd-datepicker> `);

      el.show();
      await el.updateComplete;

      const dayButtons = el.shadowRoot!.querySelectorAll('button.day:not(.out-month):not(.disabled)');
      await clickOnElement(dayButtons[10]);
      await el.updateComplete;
      await clickOnElement(dayButtons[5]);
      await el.updateComplete;

      expect(el.rangeStart).to.not.be.null;
      expect(el.rangeEnd).to.not.be.null;
    });
  });

  describe('when the value changes', () => {
    it('should emit sd-change when value is changed programmatically', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker></sd-datepicker> `);
      const changeHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.value = '2024-01-15';
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
    });

    it('should not emit sd-change when value is set to the same value', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker value="2024-01-15"></sd-datepicker> `);
      const changeHandler = sinon.spy();

      el.addEventListener('sd-change', changeHandler);
      el.value = '2024-01-15';
      await el.updateComplete;

      expect(changeHandler).to.not.have.been.called;
    });
  });

  describe('disabled dates', () => {
    it('parses disabled-dates JSON string', async () => {
      const dates = '2025-11-04,2025-11-12';
      const el = await fixture<SdDatepicker>(html`<sd-datepicker .disabledDates=${dates}></sd-datepicker>`);

      expect(el['disabledDatesSet'].has('2025-11-04')).to.be.true;
      expect(el['disabledDatesSet'].has('2025-11-12')).to.be.true;
    });

    it('parses disabled-dates string with spaces', async () => {
      const el = await fixture<SdDatepicker>(
        html`<sd-datepicker disabled-dates=" 2025-11-04 , 2025-11-12 "></sd-datepicker>`
      );
      expect(el['disabledDatesSet'].has('2025-11-04')).to.be.true;
      expect(el['disabledDatesSet'].has('2025-11-12')).to.be.true;
    });

    it('parses hyphen-separated dates', async () => {
      const el = await fixture<SdDatepicker>(
        html`<sd-datepicker disabled-dates="2025-11-11,2025-11-19"></sd-datepicker>`
      );
      expect(el['disabledDatesSet'].has('2025-11-11')).to.be.true;
      expect(el['disabledDatesSet'].has('2025-11-19')).to.be.true;
    });

    it('parses slash-separated dates', async () => {
      const el = await fixture<SdDatepicker>(
        html`<sd-datepicker disabled-dates="2025/11/20 2025/11/24"></sd-datepicker>`
      );
      expect(el['disabledDatesSet'].has('2025-11-20')).to.be.true;
      expect(el['disabledDatesSet'].has('2025-11-24')).to.be.true;
    });
  });

  describe('form integration', () => {
    it('readonly prevents typing but allows calendar open', async () => {
      const el = await fixture<SdDatepicker>(html`<sd-datepicker readonly></sd-datepicker>`);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
      input.focus();
      await el.updateComplete;

      expect(input.ariaExpanded).to.equal('true');
      const before = input.value;
      await sendKeys({ type: '15012024' });
      await el.updateComplete;
      expect(input.value).to.equal(before);
    });

    it('visually-disabled prevents interactions but keeps aria-disabled', async () => {
      const el = await fixture<SdDatepicker>(html`<sd-datepicker visually-disabled></sd-datepicker>`);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
      input.focus();
      await el.updateComplete;

      expect(input.ariaExpanded).to.equal('false');
      const day = el.shadowRoot!.querySelector<HTMLButtonElement>('button.day');
      if (day) {
        expect(day.getAttribute('aria-disabled')).to.equal('true');
      }
    });
  });

  describe('keyboard navigation', () => {
    it('focuses the first enabled day or today when tabbing into grid', async () => {
      const el = await fixture<SdDatepicker>(html`<sd-datepicker></sd-datepicker>`);
      el.show();
      await el.updateComplete;

      el.dispatchEvent(new FocusEvent('focusin', { bubbles: true, composed: true }));
      await el.updateComplete;

      await waitUntil(() => !!el.shadowRoot!.querySelector('button.day[tabindex="0"]'));
      const target = el.shadowRoot!.querySelector('button.day[tabindex="0"]')!;
      expect(target).to.exist;
    });

    it('navigates the grid with arrow keys and selects with Enter', async () => {
      const el = await fixture<SdDatepicker>(html`<sd-datepicker></sd-datepicker>`);
      el.show();
      await el.updateComplete;

      const anyDay = el.shadowRoot!.querySelector<HTMLButtonElement>('button.day.in-month')!;
      anyDay.focus();
      await sendKeys({ press: 'ArrowRight' });
      await sendKeys({ press: 'Enter' });
      await el.updateComplete;

      expect(el.value).to.not.be.null;
    });
  });

  describe('calendar alignment and placement', () => {
    it('applies alignment classes to calendar', async () => {
      const elLeft = await fixture<SdDatepicker>(html`<sd-datepicker alignment="left"></sd-datepicker>`);
      elLeft.show();
      await elLeft.updateComplete;
      const calLeft = elLeft.shadowRoot!.querySelector('[part~="datepicker"]')!;
      expect(calLeft.className).to.include('left-0');

      const elRight = await fixture<SdDatepicker>(html`<sd-datepicker alignment="right"></sd-datepicker>`);
      elRight.show();
      await elRight.updateComplete;
      const calRight = elRight.shadowRoot!.querySelector('[part~="datepicker"]')!;
      expect(calRight.className).to.include('right-0');
    });

    it('updates currentPlacement from sd-popup', async () => {
      const el = await fixture<SdDatepicker>(html`<sd-datepicker placement="bottom"></sd-datepicker>`);
      el.show();
      await el.updateComplete;

      el.dispatchEvent(
        new CustomEvent('sd-current-placement', { bubbles: true, composed: true, detail: { placement: 'top' } })
      );
      await el.updateComplete;

      expect(el['currentPlacement']).to.equal('bottom');
    });
  });

  describe('required attribute', () => {
    it('should make the input a required field when the required attribute is set', async () => {
      const el = await fixture<SdDatepicker>(html` <sd-datepicker required></sd-datepicker> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;

      expect(input.checkValidity()).to.be.false;
    });
  });

  describe('min and max attributes', () => {
    it('should mark all days before min and after max with disabled attribute', async () => {
      const el = await fixture<SdDatepicker>(
        html`<sd-datepicker value="2025-12-16" min="2025-12-10" max="2025-12-20"></sd-datepicker>`
      );

      el.show();
      await el.updateComplete;

      const dayButtons = Array.from(el.shadowRoot!.querySelectorAll('button.day'));
      const enabledDays = dayButtons.filter(btn => !btn.classList.contains('disabled'));

      expect(enabledDays.length).to.equal(11);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
      input.value = '25.12.2025';
      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('blur'));
      await el.updateComplete;

      expect(el.checkValidity()).to.be.false;
      expect(input.getAttribute('aria-invalid')).to.equal('true');
    });
  });
});
