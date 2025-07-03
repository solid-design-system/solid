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
 * @since 1.0
 */
@customElement('sd-loader')
export default class SdLoader extends SolidElement {
  /** The color of the loader. */
  @property({ type: String, reflect: true }) color: 'primary' | 'white' | 'currentColor' = 'currentColor';

  public localize = new LocalizeController(this);

  render() {
    return html`
      <div class="flex" role="progressbar" aria-label=${this.localize.term('loading')}>
        ${[0, 1, 2].map(
          i => html`
            <sd-icon
              part="dot"
              class=${cx(
                'dot rounded-full',
                i < 2 ? 'mr-[6px]' : 'mr-0',
                {
                  primary: 'text-primary animate-loader-primary',
                  white: 'text-white animate-loader-white',
                  currentColor: 'animate-loader-current'
                }[this.color]
              )}
              library="_internal"
              name="circle"
            ></sd-icon>
          `
        )}
      </div>
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        .dot {
          width: 0.25em;
          height: 0.25em;

          &:nth-child(1) {
            animation-delay: 0.4s;
          }

          &:nth-child(2) {
            animation-delay: 0.6s;
          }

          &:nth-child(3) {
            animation-delay: 0.8s;
          }
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
