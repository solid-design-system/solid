import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Formats a number as a human readable bytes value.
 * @documentation https://solid.union-investment.com/[storybook-link]/format-bytes
 * @status stable
 * @since 1.0
 */
@customElement('sd-format-bytes')
export default class SdFormatBytes extends SolidElement {
  private readonly localize = new LocalizeController(this);

  /** The number to format in bytes. */
  @property({ type: Number }) value = 0;

  /** The type of unit to display. */
  @property() unit: 'byte' | 'bit' = 'byte';

  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  @property() display: 'long' | 'short' | 'narrow' = 'short';

  render() {
    if (isNaN(this.value)) {
      return '';
    }

    const bitPrefixes = ['', 'kilo', 'mega', 'giga', 'tera']; // petabit isn't a supported unit
    const bytePrefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
    const prefix = this.unit === 'bit' ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

    return this.localize.number(valueToFormat, {
      style: 'unit',
      unit,
      unitDisplay: this.display
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-format-bytes': SdFormatBytes;
  }
}
