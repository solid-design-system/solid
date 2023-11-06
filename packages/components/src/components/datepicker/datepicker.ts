import 'flatpickr/dist/themes/dark.css';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { query } from 'lit/decorators.js';
import flatpickr from 'flatpickr';
import SolidElement from '../../internal/solid-element';

@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  @query('input') input: HTMLInputElement;

  flatpickr: flatpickr.Instance;

  firstUpdated() {
    this.flatpickr = flatpickr(this.input, {});

    console.log('firstUpdated');
    console.log(this.flatpickr);
  }

  render() {
    return html`<div>
      <input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.." />
    </div>`;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-datepicker': SdDatepicker;
  }
}
