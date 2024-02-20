import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Scrollable is used to indicate there is hidden content to be scrolled.
 * @documentation https://solid.union-investment.com/[storybook-link]/scrollable
 * @status stable
 * @since 1.0
 *
 * @event button-end - Emitted when the end button is clicked.
 * @event button-start - Emitted when the start button is clicked.
 * @event end - Emitted when the end of the scrollable is reached.
 * @event start - Emitted when the start of the scrollable is reached.
 *
 * @slot - The scrollable's content.
 * @slot icon - The scrollable's icon.
 *
 * @csspart base - The scrollable's base wrapper.
 * @csspart content - The scrollable's main content.
 *
 * @cssproperty --gradient - Defines a custom color for the gradient.
 */

@customElement('sd-scrollable')
export default class SdScrollable extends SolidElement {
  /** Defines the scroll orientation */
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** Activates scroll buttons */
  @property({ type: Boolean }) buttons: boolean = false;

  /** The amount in px to be scrolled when clicking the buttons. */
  @property({ type: Number }) scrollStep: number = 150;

  /** IActivates browser scrollbars */
  @property({ type: Boolean }) scrollbars: boolean = false;

  /** Activates a shadow as optional visual scroll indicator */
  @property({ type: Boolean }) shadow: boolean = false;

  /** Activates a gradient as optional visual scroll indicator */
  @property({ type: Boolean }) gradient: boolean = false;

  render() {
    return html`
      <div
        part="base"
        class=${cx(
          'scroll-container',
          this.orientation === 'horizontal' ? 'horizontal-scroll' : 'vertical-scroll',
          this.scrollbars ? 'show-scrollbars' : 'hide-scrollbars'
        )}
      >
        <slot></slot>
      </div>

      ${this.buttons
        ? html`
            <button part="button" class="scroll-button" @click="${() => this.scroll({ top: 0 })}">
              <slot name="button-icon">Start</slot>
            </button>
            Test
            <button part="button" class="scroll-button" @click="${() => this.scroll({ top: 0 })}">
              <slot name="button-icon">End</slot>
            </button>
          `
        : ''}
      ${this.shadow ? html`<div part="shadow" class="scroll-shadow"></div>` : ''}
      ${this.gradient ? html`<div part="gradient" class="scroll-gradient"></div>` : ''}
    `;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-scrollable': SdScrollable;
  }
}
