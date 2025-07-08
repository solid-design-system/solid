import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Loaders are used to show the progress of an indeterminate operation.
 * @documentation https://solid.union-investment.com/[storybook-link]/loader
 * @status stable
 * @since 5.11
 */
@customElement('sd-loader')
export default class SdLoader extends SolidElement {
  /** The color of the loader. */
  @property({ type: String, reflect: true }) color: 'primary' | 'white' | 'currentColor' = 'currentColor';

  public localize = new LocalizeController(this);

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="progressbar"
        aria-label=${this.localize.term('loading')}
      >
        <circle
          class=${cx(
            'dot',
            {
              primary: 'text-primary animate-loader-primary',
              white: 'text-white animate-loader-white',
              currentColor: 'animate-loader-current'
            }[this.color]
          )}
          cx="20"
          cy="12"
          r="2"
          fill="currentColor"
        />
        <circle
          class=${cx(
            'dot',
            {
              primary: 'text-primary animate-loader-primary',
              white: 'text-white animate-loader-white',
              currentColor: 'animate-loader-current'
            }[this.color]
          )}
          cx="12"
          cy="12"
          r="2"
          fill="currentColor"
        />
        <circle
          class=${cx(
            'dot',
            {
              primary: 'text-primary animate-loader-primary',
              white: 'text-white animate-loader-white',
              currentColor: 'animate-loader-current'
            }[this.color]
          )}
          cx="4"
          cy="12"
          r="2"
          fill="currentColor"
        />
      </svg>
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-block;
        width: 1em;
        height: 1em;
      }

      .dot {
        &:nth-child(2) {
          animation-delay: 0.1s;
        }

        &:nth-child(1) {
          animation-delay: 0.2s;
        }
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-loader': SdLoader;
  }
}
