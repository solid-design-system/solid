import '../icon/icon';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch.js';
import cx from 'classix';
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
 * @slot expand-icon - The icon of the toggle button when the expandable is closed
 * @slot collapse-icon - The icon of the toggle button when the expandable is open
 *
 * @event sd-show - Emitted when the expandable opens.
 * @event sd-after-show - Emitted after the expandable opens and all animations are complete.
 * @event sd-hide - Emitted when the expandable closes.
 * @event sd-after-hide - Emitted after the expandable closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The content of the expandable.
 * @csspart toggle - The toggle button of the expandable.
 * @csspart toggle-icon - The wrapper of the toggle icons.
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
  @query('[part="content"]') body: HTMLElement;

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
  async onOpenChange() {
    this.body.classList.add('transitioning');

    if (this.open) {
      this.emit('sd-show');

      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, 'expandable.show', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.updateComplete.then(() => {
        this.emit('sd-after-show');
      });
    } else {
      this.emit('sd-hide');

      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, 'expandable.hide', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.updateComplete.then(() => {
        this.emit('sd-after-hide');
      });
    }

    this.details.setAttribute('open', this.open.toString());
    this.body.classList.remove('transitioning');
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
      <div part="base" class="flex flex-col-reverse gap-4">
        <button
          part="toggle"
          class=${cx(
            'sd-interactive sd-interactive--reset',
            this.inverted && 'sd-interactive--inverted',
            !this.inverted ? '!focus-visible:focus-outline' : '!focus-visible:focus-outline-inverted'
          )}
          @click=${this.onToggleClick}
          aria-expanded=${this.open}
        >
          <div class=${cx('h-full justify-center w-full text-base flex items-center toggle')}>
            <span
              part="toggle-icon"
              class=${cx(
                'flex items-center mr-2 transition-transform duration-medium ease-in-out',
                this.open && 'rotate-180'
              )}
            >
              <slot name="expand-icon" class=${cx(this.open && 'hidden')}>
                <sd-icon library="_internal" name="chevron-down" class="text-xl"></sd-icon>
              </slot>
              <slot name="collapse-icon" class=${cx(!this.open && 'hidden')}>
                <sd-icon library="_internal" name="chevron-down" class="text-xl"></sd-icon>
              </slot>
            </span>
            <slot name="toggle-closed" class=${cx(this.open && 'hidden')}> ${this.localize.term('showMore')} </slot>
            <slot name="toggle-open" class=${cx(!this.open && 'hidden')}> ${this.localize.term('showLess')} </slot>
          </div>
        </button>
        <details part="details" ?inert=${ifDefined(!this.open)}>
          <summary part="summary" aria-hidden="true" class="cursor-pointer overflow-hidden list-none">
            <slot name="clone"></slot>
          </summary>
          <div part="content" class="content content-preview overflow-hidden relative">
            <slot></slot>
          </div>
        </details>
      </div>
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
    ...SolidElement.styles,
    css`
      :host {
        --component-expandable-max-block-size: 90px;
        --gradient-height: 24px;
        --gradient:
          var(
              --gradient-color-start,
              transparent,
              var(--gradient-color-end, var(--sd-color-background-white, var(--sd-color-white)))
            )
            80%,
          var(--gradient-color-end, var(--sd-color-background-white, var(--sd-color-white))) 100%;

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

      :host([open]) .content,
      :host:has(.transitioning) .content {
        max-block-size: var(--max-height-pixel, 1000vh);
      }

      .content::after {
        @apply absolute bottom-0 left-0 block w-full opacity-0 transition-opacity duration-medium ease-in-out;
        content: ' ';

        height: var(--gradient-height);
        background: linear-gradient(180deg, var(--gradient));
      }

      :host([inverted]) {
        --color-primary-rgb: 0, 53, 142;
        --gradient-color-start: rgba(var(--color-primary-rgb), 0);
        --gradient-color-end: rgba(var(--color-primary-rgb), 1);
      }

      :host([inverted]) .content::after {
        background: var(--gradient-vertical-transparent-primary, linear-gradient(180deg, var(--gradient)));
      }

      :host(:not([open])) .content::after {
        @apply opacity-100;
      }
    `
  ];
}

setDefaultAnimation('expandable.show', {
  keyframes: [{ height: 'var(--component-expandable-max-block-size, 90px)' }, { height: 'auto' }],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('expandable.hide', {
  keyframes: [{ height: 'auto' }, { height: 'var(--component-expandable-max-block-size, 90px)' }],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-expandable': SdExpandable;
  }
}
