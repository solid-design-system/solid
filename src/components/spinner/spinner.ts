import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://solid.union-investment.com/[storybook-link]/spinner
 * @status stable
 * @since 2.0
 */
@customElement('sd-spinner')
export default class SdSpinner extends SolidElement {
  /** The color variant of the spinner.
   */
  @property({ reflect: true }) variant: 'primary' | 'white' | 'neutral-500' | 'neutral-600' = 'primary';

  private readonly localize = new LocalizeController(this);

  render() {
    const color = {
      primary: 'fill-primary',
      white: 'fill-white',
      'neutral-500': 'fill-neutral-500',
      'neutral-600': 'fill-neutral-600'
    }[this.variant];

    return html`
      <svg role="progressbar" class="h-6 w-6 animate-spin" aria-valuetext=${this.localize.term('loading')}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
          class=${cx('opacity-20', color)}
        />
        <mask id="mask0_5273_25391" style="mask-type:alpha" maskUnits="userSpaceOnUse">
          <path d="M24 12C24 5.37258 18.6274 0 12 0V12H24Z" class=${cx(color)} />
        </mask>
        <g mask="url(#mask0_5273_25391)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
            class=${cx(color)}
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
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-spinner': SdSpinner;
  }
}
