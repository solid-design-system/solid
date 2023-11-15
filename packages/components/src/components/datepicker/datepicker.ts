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
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import SolidElement from '../../internal/solid-element';
import solidPlugin from './solidPlugin';
// import solidPlugin from 'flatpickr/dist/plugins/solid/index';

@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  @query('#firstRangeInput') input: HTMLInputElement;

  flatpickr: flatpickr.Instance;

  firstUpdated() {
    this.flatpickr = flatpickr(this.input, {
      // allowInput: true,
      dateFormat: 'd.m.Y',
      locale: German,
      // mode: 'single', // 'single', 'multiple', 'range'
      position: 'below left',
      plugins: [
        new solidPlugin()
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

  render() {
    return html`
      <div>
        <!-- <sd-input id="firstRangeInput" class="flatpickr flatpickr-input" placeholder="Enter date">
          <sd-icon slot="right" class="text-primary" library="system" name="calendar"></sd-icon>
        </sd-input> -->
        <input class="flatpickr flatpickr-input border-primary-200 border-2 mb-2" />
        <sd-input preventSubmit id="firstRangeInput" class="flatpickr flatpickr-input"></sd-input>

        <button
          @click=${() => {
            console.log('on click');
            console.log(this.input);

            this.input.focus();
          }}
        >
          focus sd input
        </button>
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
