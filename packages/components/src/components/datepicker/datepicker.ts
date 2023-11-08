import './temp.css';
import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { German } from 'flatpickr/dist/l10n/de.js';
import { query } from 'lit/decorators.js';
import flatpickr from 'flatpickr';
// import rangePlugin from 'flatpickr/dist/plugins/rangePlugin.js';
import SolidElement from '../../internal/solid-element';

@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  @query('#firstRangeInput') input: HTMLInputElement;

  flatpickr: flatpickr.Instance;

  firstUpdated() {
    this.flatpickr = flatpickr(this.input, {
      dateFormat: 'd.m.Y',
      locale: German,
      position: 'below left'
      // plugins: [new rangePlugin({ input: '#firstRangeInput' })] // enable for range selection demo
    });

    console.log('firstUpdated');
    console.log(this.flatpickr);
  }

  render() {
    return html`
      <div>
        <sd-input id="firstRangeInput" class="flatpickr flatpickr-input" placeholder="Enter date">
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
