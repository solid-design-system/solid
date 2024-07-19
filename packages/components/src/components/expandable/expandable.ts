import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
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
 *
 * @event sd-show - Emitted when the expandable opens.
 * @event sd-after-show - Emitted after the expandable opens and all animations are complete.
 * @event sd-hide - Emitted when the expandable closes.
 * @event sd-after-hide - Emitted after the expandable closes and all animations are complete.
 *
 * @csspart content
 *
 * @cssproperty --component-expandable-max-block-size - Different value for initial visible block (default: 90px)
 */
@customElement('sd-expandable')
export default class SdExpandable extends SolidElement {
  @query('.shrinker') shrinker: HTMLElement;
  @query('details') details: HTMLDetailsElement;

  /**
   * Used to check whether the component is expanded or not.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Inverts the expandable and sets the primary color background. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** Controls the height of the gradient depending on if it is used with `paragraph` or `leadtext`. */
  @property({ reflect: true }) variant: 'paragraph' | 'leadtext' = 'paragraph';

  private updateMaxHeight() {
    const scrollHeight = this.shrinker?.scrollHeight.toString();
    this.style.setProperty('--max-height-pixel', `${scrollHeight}px`);
    this.style.setProperty('--max-height', scrollHeight);
  }

  private onToggleClick() {
    console.log('onToggleClick');
    this.updateMaxHeight();
    this.open = !this.open;
    this.details.open = this.open;

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

  @watch('open', { waitUntilFirstUpdate: true })
  onOpenChange() {
    this.details.setAttribute('open', this.open.toString());
  }

  render() {
    return html`
      <details>
        <summary aria-hidden="true" class="cursor-pointer summary"><slot name="clone"></slot></summary>
        <div part="content" class="content shrinker overflow-hidden relative">
          <slot></slot>
        </div>
      </details>
      <button
        part="toggle"
        class=${cx(
          'toggle focus-visible:outline-offset-0 block m-0 p-0 w-full overflow-visible bg-transparent text-current font-inherit leading-inherit align-middle cursor-pointer',
          !this.inverted ? 'focus-visible:focus-outline' : 'focus-visible:focus-outline-inverted'
        )}
        @click=${this.onToggleClick}
      >
        ${this.open
          ? html`
              <slot name="toggle-open">
                <div class="default-content flex items-center justify-center w-full">
                  <sd-link size="lg" href="#" onclick="return false;" ?inverted=${this.inverted} tabindex="-1"
                    >Show less <sd-icon library="system" name="chevron-up" slot="icon-left"></sd-icon
                  ></sd-link>
                </div>
              </slot>
            `
          : html`
              <slot name="toggle-closed">
                <div class="default-content flex items-center justify-center w-full">
                  <sd-link size="lg" href="#" onclick="return false;" ?inverted=${this.inverted} tabindex="-1"
                    >Show more <sd-icon library="system" name="chevron-down" slot="icon-left"></sd-icon
                  ></sd-link>
                </div>
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
    SolidElement.styles,
    componentStyles,
    css`
      :host {
        @apply block relative w-full;
        display: inline-block;
      }

      .toggle::-moz-focus-inner {
        @apply border-none p-0;
      }

      details > summary {
        list-style: none;
      }

      details > summary::-webkit-details-marker {
        display: none;
      }

      .summary {
        max-block-size: var(--component-expandable-max-block-size, 90px);
        overflow: hidden;
      }

      :host([open]) .summary {
        max-block-size: var(--max-height-pixel, 1000vh);
      }

      details[open] .summary {
        display: none;
      }

      .content {
        max-block-size: var(--component-expandable-max-block-size, 90px);
      }

      :host([open]) .content {
        max-block-size: var(--max-height-pixel, 1000vh);
      }

      :host(:not([open])) .content::after {
        @apply absolute bottom-0 left-0 block w-full h-6;
        content: ' ';
        background: var(
          --gradient-vertical-transparent-white,
          linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 1) 100%)
        );
      }

      :host([variant='leadtext']) .content::after {
        @apply h-8;
      }

      :host([inverted]:not([open])) .content::after {
        background: var(
          --gradient-vertical-transparent-primary,
          linear-gradient(180deg, rgba(0, 53, 142, 0) 0%, rgba(0, 53, 142, 1) 80%, rgba(0, 53, 142, 1) 100%)
        );
      }

      details[open] .flip-card-front {
        transform: rotateY(180deg);
      }

      details[open] .flip-card-back {
        transform: rotateY(0deg);
      }

      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transition: transform 0.6s;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .flip-card-front {
        background-color: #f0f0f0;
        transform: rotateY(0deg);
      }

      .flip-card-back {
        background-color: #fff;
        transform: rotateY(-180deg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-expandable': SdExpandable;
  }
}
