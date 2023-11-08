import '../datepicker/temp.css';
import 'lit-flatpickr';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import SolidElement from '../../internal/solid-element';

@customElement('sd-litpicker')
export default class SdLitpicker extends SolidElement {
  render() {
    return html`
      <lit-flatpickr id="my-date-picker" altInput altFormat="F j, Y" dateFormat="Y-m-d" theme="none">
        <sd-input class="flatpickr flatpickr-input" type="text" placeholder="Select Date.."></sd-input>
      </lit-flatpickr>
    `;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [SolidElement.styles, css``];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-litpicker': SdLitpicker;
  }
}
