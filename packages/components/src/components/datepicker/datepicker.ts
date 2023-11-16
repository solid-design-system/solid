/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './solid.css';
import 'flatpickr/dist/plugins/monthSelect/style.css';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { German } from 'flatpickr/dist/l10n/de.js';
import { query } from 'lit/decorators.js';
import flatpickr from 'flatpickr';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index';
import pluginTemplate from './pluginTemplate';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import SolidElement from '../../internal/solid-element';
import solidPlugin from './solidPlugin';

@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  @query('sd-input') input: HTMLInputElement;

  flatpickr: flatpickr.Instance;

  firstUpdated() {
    this.flatpickr = flatpickr(this.input, {
      allowInput: true,
      dateFormat: 'd.m.Y',
      locale: German,
      // mode: 'single', // 'single', 'multiple', 'range'
      // showMonths: 2,
      plugins: [
        // new solidPlugin(),
        // new rangePlugin({ input: '#secondRangeInput' })
        // new monthSelectPlugin({
        //   shorthand: true, //defaults to false
        //   dateFormat: 'm.y', //defaults to "F Y"
        //   altFormat: 'F Y', //defaults to "F Y"
        //   theme: 'dark' // defaults to "light"
        // })
      ]
    });
  }

  handleKeydown(e: HTMLKeyboardEvent) {
    if (e.key === 'ArrowDown') {
      const firstVisibleDay = document.querySelector('.flatpickr-day');
      firstVisibleDay.focus();
    }
  }

  handleInput() {
    const inputDate = new Date(this.input.value);
    const isValid = !isNaN(inputDate.getTime());

    if (isValid) {
      this.flatpickr.selectedDates = [inputDate];
      this.flatpickr.jumpToDate(inputDate);
    }
  }

  render() {
    return html`
      <div>
        <sd-input
          class="flatpickr flatpickr-input"
          placeholder="Enter date"
          preventSubmit
          @keydown=${this.handleKeydown}
          @input=${this.handleInput}
        >
          <sd-icon slot="right" class="text-primary" library="system" name="calendar"></sd-icon>
        </sd-input>
      </div>
    `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-datepicker': SdDatepicker;
  }
}
