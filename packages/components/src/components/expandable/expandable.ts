import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Expandable shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/expandable
 * @status stable
 * @since 1.1
 *
 * @dependency sd-icon
 *
 * @slot - Content of the expandable
 * @slot toggle-open - Content of the toggle when the expandable is open
 * @slot toggle-closed - Content of the toggle when the expandable is closed
 *
 * @event sd-show - Emitted when the expandable opens.
 * @event sd-after-show - Emitted after the expandable opens and all animations are complete.
 * @event sd-hide - Emitted when the expandable closes.
 * @event sd-after-hide - Emitted after the expandable closes and all animations are complete.
 *
 * @part toggle - Part of the expandable responsible for the expansion of the component
 *
 * @cssproperty --ui-animation-bezier - Animation curve used for open and close animation
 * @cssproperty --component-expandable-max-block-size - Different value for initial visible block (default: 90px)
 */
@customElement('sd-expandable')
export default class SdExpandable extends SolidElement {
  @query('.shrinker') shrinker: HTMLElement;

  /**
   * Used to check whether the component is expanded or not.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Inverts the expandable and sets the primary color background. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  private updateMaxHeight() {
    const scrollHeight = this.shrinker?.scrollHeight.toString();
    this.style.setProperty('--max-height-pixel', `${scrollHeight}px`);
    this.style.setProperty('--max-height', scrollHeight);
  }

  private onToggleClick() {
    this.updateMaxHeight();
    this.open = !this.open;

    if (this.open) {
      this.emit('sd-show');
      this.updateComplete.then(() => {
        this.emit('sd-after-show');
      });
    } else {
      this.emit('sd-hide');
      this.updateComplete.then(() => {
        this.emit('sd-after-hide');
      });
    }
  }

  render() {
    return html`
      <div class="content">
        <div class="shrinker">
          <slot></slot>
        </div>
      </div>
      <button part="toggle" class=${cx('toggle', this.inverted && 'toggle--inverted')} @click=${this.onToggleClick}>
        ${this.open
          ? html`
              <slot name="toggle-open">
                <div class="default-content">
                  <sd-link size="lg" href="#" onclick="return false;" ?inverted=${this.inverted}
                    >Show less <sd-icon library="system" name="chevron-up" slot="icon-left"></sd-icon
                  ></sd-link>
                </div>
              </slot>
            `
          : html`
              <slot name="toggle-closed">
                <div class="default-content">
                  <sd-link size="lg" href="#" onclick="return false;" ?inverted=${this.inverted}
                    >Show more <sd-icon library="system" name="chevron-down" slot="icon-left"></sd-icon
                  ></sd-link>
                </div>
              </slot>
            `}
      </button>
    `;
  }

  static styles = [
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        display: block;
      }

      .content {
        max-block-size: var(--component-expandable-max-block-size, 90px);
        transition: max-block-size calc(0.5ms * var(--max-height, 1000))
          var(--ui-animation-bezier, cubic-bezier(0.4, 0.03, 0.4, 0.97));
        overflow: hidden;
        position: relative;
      }

      .toggle {
        border: none;
        margin: 0;
        padding: 0;
        width: 100%;
        overflow: visible;
        background: transparent;
        color: var(--skin-color-text, #333);
        font: inherit;
        line-height: inherit;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        appearance: none;
        cursor: pointer;
        margin-block-start: 15px;
      }

      .toggle::-moz-focus-inner {
        border: 0;
        padding: 0;
      }

      .toggle--inverted {
        color: white;
      }

      .default-content {
        display: flex;
        align-items: center;
        justify-content: center;
        inline-size: 100%;
      }

      :host([open]) .content {
        max-block-size: var(--max-height-pixel, 1000vh);
      }

      :host(:not([open])) .content::after {
        background: linear-gradient(
          to top,
          #fff 0%,
          rgba(255, 255, 255, 0.8) 40%,
          rgba(255, 255, 255, 0.5) 80%,
          rgba(255, 255, 255, 0) 100%
        );
        bottom: 0;
        left: 0;
        content: ' ';
        block-size: 23px;
        position: absolute;
        inline-size: 100%;
      }

      :host([inverted]:not([open])) .content::after {
        background: linear-gradient(180deg, rgba(0, 53, 142, 0) 40%, rgba(0, 53, 142, 0.75) 100%);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-expandable': SdExpandable;
  }
}
