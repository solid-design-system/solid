import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
// TODO
// import InteractiveStyles from '../../styles/interactive/interactive.css?inline';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Expandable shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/expandable
 * @status stable
 * @since 3.11.0
 *
 * @dependency sd-icon
 *
 * @slot - Content of the expandable
 * @slot toggle-open - Content of the toggle button when the expandable is open
 * @slot toggle-closed - Content of the toggle button when the expandable is closed
 *
 * @event sd-show - Emitted when the expandable opens.
 * @event sd-after-show - Emitted after the expandable opens and all animations are complete.
 * @event sd-hide - Emitted when the expandable closes.
 * @event sd-after-hide - Emitted after the expandable closes and all animations are complete.
 *
 * @csspart content - The content of the expandable.
 * @csspart toggle - The toggle button of the expandable.
 * @csspart summary - The summary of the expandable.
 * @csspart details - The details element of the expandable.
 *
 * @cssproperty --gradient-color-start - Start color of the gradient. Set the opacity to 0 (default: rgba(255, 255, 255, 0))
 * @cssproperty --gradient-color-end - End color of the gradient. Set the opacity to 1 (default: rgba(255, 255, 255, 1))
 * @cssproperty --gradient-height - Height of the gradient (default: 24px)
 * @cssproperty --component-expandable-max-block-size - Different value for initial visible block (default: 90px)
 */
@customElement('sd-expandable')
export default class SdExpandable extends SolidElement {
  @query('.content-preview') contentPreview: HTMLElement;
  @query('details') details: HTMLDetailsElement;

  /**
   * Used to check whether the component is expanded or not.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Inverts the expandable and sets the color of the gradient to primary. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  public localize = new LocalizeController(this);

  private updateMaxHeight() {
    const scrollHeight = this.contentPreview?.scrollHeight.toString();
    this.style.setProperty('--max-height-pixel', `${scrollHeight}px`);
    this.style.setProperty('--max-height', scrollHeight);
  }

  private onToggleClick() {
    this.updateMaxHeight();
    this.open = !this.open;
  }

  @watch('open', { waitUntilFirstUpdate: true })
  onOpenChange() {
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

    this.details.setAttribute('open', this.open.toString());
  }

  /** Opens the expandable */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.onToggleClick();
    return waitForEvent(this, 'sd-after-show');
  }

  /** Closes the expandable */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.onToggleClick();
    return waitForEvent(this, 'sd-after-hide');
  }

  render() {
    return html`
      <details part="details">
        <summary part="summary" aria-hidden="true" class="cursor-pointer overflow-hidden list-none">
          <slot name="clone"></slot>
        </summary>
        <div part="content" class="content content-preview overflow-hidden relative">
          <slot></slot>
        </div>
      </details>
      <button
        part="toggle"
        class=${cx(
          'sd-interactive sd-interactive--reset !h-full !justify-center !w-full !text-base !flex !items-center !underline !underline-offset-2 !toggle',
          this.inverted && 'sd-interactive--inverted',
          !this.inverted ? '!focus-visible:focus-outline' : '!focus-visible:focus-outline-inverted'
        )}
        @click=${this.onToggleClick}
      >
        ${this.open
          ? html`
              <slot name="toggle-open">
                <sd-icon class="mr-2 text-xl" library="system" name="chevron-up"></sd-icon>
                ${this.localize.term('showLess')}
              </slot>
            `
          : html`
              <slot name="toggle-closed">
                <sd-icon class="mr-2 text-xl" library="system" name="chevron-down"></sd-icon>
                ${this.localize.term('showMore')}
              </slot>
            `}
      </button>
    `;
  }

  firstUpdated() {
    this.cloneContentToLightDOM();

    // Set the initial state of the details element
    this.details.setAttribute('open', this.open.toString());
  }

  cloneContentToLightDOM() {
    const slot = document.createElement('div');
    slot.setAttribute('slot', 'clone');

    const nodes = Array.from(this.childNodes);
    nodes.forEach(node => {
      const clone = node.cloneNode(true);
      slot.appendChild(clone);
    });

    this.appendChild(slot);
  }

  static styles = [
    // unsafeCSS(InteractiveStyles),
    componentStyles,
    css`
      :host {
        --gradient-color-start: rgba(255, 255, 255, 0);
        --gradient-color-end: rgba(255, 255, 255, 1);
        --component-expandable-max-block-size: 90px;
        --gradient-height: 24px;
        --gradient: var(--gradient-color-start) 0%, var(--gradient-color-end) 80%, var(--gradient-color-end) 100%;

        @apply inline-block relative w-full;
      }

      .toggle::-moz-focus-inner {
        @apply border-none p-0;
      }

      details > summary::-webkit-details-marker,
      details[open] summary {
        @apply hidden;
      }

      summary {
        max-block-size: var(--component-expandable-max-block-size);
      }

      :host([open]) summary {
        max-block-size: var(--max-height-pixel, 1000vh);
      }

      .content {
        max-block-size: var(--component-expandable-max-block-size);
      }

      :host([open]) .content {
        max-block-size: var(--max-height-pixel, 1000vh);
      }

      :host(:not([open])) .content::after {
        @apply absolute bottom-0 left-0 block w-full;
        content: ' ';

        height: var(--gradient-height);
        background: linear-gradient(180deg, var(--gradient));
      }

      :host([inverted]:not([open])) .content::after {
        background: var(
          --gradient-vertical-transparent-primary,
          linear-gradient(180deg, rgba(0, 53, 142, 0) 0%, rgba(0, 53, 142, 1) 80%, rgba(0, 53, 142, 1) 100%)
        );
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-expandable': SdExpandable;
  }
}
