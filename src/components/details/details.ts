import '../icon/icon';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import { css } from 'lit';
import cx from 'classix';

/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/details
 * @status stable
 * @since 2.0
 *
 * @dependency sd-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<sd-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<sd-icon>`.
 *
 * @event sd-show - Emitted when the details opens.
 * @event sd-after-show - Emitted after the details opens and all animations are complete.
 * @event sd-hide - Emitted when the details closes.
 * @event sd-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
@customElement('sd-details')
export default class SdDetails extends SolidElement {
  // static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  @query('[part="base"]') details: HTMLElement;
  @query('[part="header"]') header: HTMLElement;
  @query('[part="body"]') body: HTMLElement;

  /**
   * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  @property() summary: string;

  /** Disables the details so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? 'auto' : '0';
  }

  private handleSummaryClick() {
    console.log(this.body, this.header, this.details);
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }

      this.header.focus();
    }
  }

  private handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      const slShow = this.emit('sd-show', { cancelable: true });
      if (slShow.defaultPrevented) {
        this.open = false;
        return;
      }

      await stopAnimations(this.body);
      this.body.hidden = false;

      const { keyframes, options } = getAnimation(this, 'details.show', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.emit('sd-after-show');
    } else {
      // Hide
      const slHide = this.emit('sd-hide', { cancelable: true });
      if (slHide.defaultPrevented) {
        this.open = true;
        return;
      }

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'details.hide', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = 'auto';

      this.emit('sd-after-hide');
    }
  }

  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'sd-after-hide');
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <div
        part="base"
        class=${cx(
      'border border-neutral-300 rounded-md bg-white overflow [overflow-anchor:none]',
      this.disabled && 'disabled',
    )}
      >
        <header
          part="header"
          id="header"
          class=${cx('flex items-center rounded-inherit cursor-pointer select-none p-4 focus:outline-none focus-visible:focus',
      this.disabled && 'focus-visible:outline-none shadow-none')
      }
          role="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="flex flex-auto items-center">${this.summary}</slot>

          <span part="summary-icon" class=${cx(
        'flex flex-grow-0 flex-shrink-0 flex-auto items-center transition ease-in-out',
        this.open && 'rotate-90')}>
            <slot name="expand-icon" class=${cx(this.open && 'hidden')}>
              <sd-icon library="system" name=${isRtl ? 'chevron-left' : 'chevron-right'}></sd-icon>
            </slot>
            <slot name="collapse-icon" class=${cx(!this.open && 'hidden')}>
              <sd-icon library="system" name=${isRtl ? 'chevron-left' : 'chevron-right'}></sd-icon>
            </slot>
          </span>
        </header>
        <div part="body" class="overflow-hidden">
          <slot part="content" id="content" class="block p-4" role="region" aria-labelledby="header"></slot>
        </div>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`:host { display: block; }`
  ];
}



setDefaultAnimation('details.show', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 250, easing: 'linear' }
});

setDefaultAnimation('details.hide', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' }
  ],
  options: { duration: 250, easing: 'linear' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-details': SdDetails;
  }
}
