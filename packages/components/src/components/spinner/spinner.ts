import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://solid.union-investment.com/[storybook-link]/spinner
 * @status stable
 * @since 1.0
 */
@customElement('sd-spinner')
export default class SdSpinner extends SolidElement {
  /** The color color of the spinner.
   */
  @property({ reflect: true }) color: 'primary' | 'white' | 'currentColor' = 'currentColor';

  private readonly localize = new LocalizeController(this);

  render() {
    return html`
      <svg
        role="progressbar"
        viewBox="0 0 24 24"
        class=${cx(
          'animate-spin',
          {
            primary: 'text-primary',
            white: 'text-white',
            currentColor: ''
          }[this.color]
        )}
        aria-label=${this.localize.term('loading')}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          class="opacity-20"
          fill="currentColor"
        />
        <mask id="mask0_5273_25391" style="mask-type:alpha" maskUnits="userSpaceOnUse">
          <path d="M24 12C24 5.37258 18.6274 0 12 0V12H24Z" fill="currentColor" />
        </mask>
        <g mask="url(#mask0_5273_25391)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
            fill="currentColor"
          />
        </g>
      </svg>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: inline-block;
        width: 1em;
        height: 1em;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-spinner': SdSpinner;
  }
}
