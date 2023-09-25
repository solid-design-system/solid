import { customElement } from '../../../src/internal/register-custom-element';
import {property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Formats a number using the specified locale and options.
 * @documentation https://solid.union-investment.com/[storybook-link]/format-number
 * @status stable
 * @since 1.0
 */
@customElement('sd-format-number')
export default class SdFormatNumber extends SolidElement {
  private readonly localize = new LocalizeController(this);

  /** The number to format. */
  @property({ type: Number }) value = 0;

  /** The formatting style to use. */
  @property() type: 'currency' | 'decimal' | 'percent' = 'decimal';

  /** Turns off grouping separators. */
  @property({ attribute: 'no-grouping', type: Boolean }) noGrouping = false;

  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  @property() currency = 'USD';

  /** How to display the currency. */
  @property({ attribute: 'currency-display' }) currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name' = 'symbol';

  /** The minimum number of integer digits to use. Possible values are 1-21. */
  @property({ attribute: 'minimum-integer-digits', type: Number }) minimumIntegerDigits: number;

  /** The minimum number of fraction digits to use. Possible values are 0-20. */
  @property({ attribute: 'minimum-fraction-digits', type: Number }) minimumFractionDigits: number;

  /** The maximum number of fraction digits to use. Possible values are 0-0. */
  @property({ attribute: 'maximum-fraction-digits', type: Number }) maximumFractionDigits: number;

  /** The minimum number of significant digits to use. Possible values are 1-21. */
  @property({ attribute: 'minimum-significant-digits', type: Number }) minimumSignificantDigits: number;

  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  @property({ attribute: 'maximum-significant-digits', type: Number }) maximumSignificantDigits: number;

  render() {
    if (isNaN(this.value)) {
      return '';
    }

    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-format-number': SdFormatNumber;
  }
}
