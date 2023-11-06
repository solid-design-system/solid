import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { query } from 'lit/decorators.js';
import flatpickr from 'flatpickr';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Short summary of the component's intended use.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-example
 *
 * @event sd-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  @query('input') input: HTMLInputElement;

  flatpickr: any = null;

  firstUpdated() {
    console.log('firstUpdated');
    console.log(this.input);

    flatpickr(this.input, {});
  }

  render() {
    return html`<div>
      <input id="datepicker" class="form-control" /><link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
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
