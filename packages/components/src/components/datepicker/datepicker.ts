import './temp.css';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { German } from 'flatpickr/dist/l10n/de.js';
import { query } from 'lit/decorators.js';
import flatpickr from 'flatpickr';
import SolidElement from '../../internal/solid-element';

@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  @query('sd-input') input: HTMLInputElement;

  flatpickr: flatpickr.Instance;

  firstUpdated() {
    this.flatpickr = flatpickr(this.input, {
      dateFormat: 'd-m-Y',
      locale: German,
      position: 'below right'
    });

    console.log('firstUpdated');
    console.log(this.flatpickr);
  }

  render() {
    return html` <sd-input class="flatpickr flatpickr-input" placeholder="Select Date.."></sd-input> `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-datepicker': SdDatepicker;
  }
}
