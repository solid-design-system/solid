import '../icon/icon';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { html } from 'lit/static-html.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Accordion shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/accordion
 * @status stable
 * @since 1.1
 *
 * @dependency sd-icon
 *
 * @slot - The accordion main content.
 * @slot summary - The accordion summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<sd-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<sd-icon>`.
 *
 * @event sd-show - Emitted when the accordion opens.
 * @event sd-after-show - Emitted after the accordion opens and all animations are complete.
 * @event sd-hide - Emitted when the accordion closes.
 * @event sd-after-hide - Emitted after the accordion closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart summary-border - The container that wraps the currently active accordions border.
 * @csspart content - The container that wraps the accordion content slot.
 * @csspart content__slot - The accordion content slot.
 *
 * @animation accordion.show - The animation to use when showing accordion. You can use `height: auto` with this animation.
 * @animation accordion.hide - The animation to use when hiding accordion. You can use `height: auto` with this animation.
 */
@customElement('sd-accordion')
export default class SdAccordion extends SolidElement {
  // static styles: CSSResultGroup = styles;

  public localize = new LocalizeController(this);

  @query('[part="base"]') accordion: HTMLDetailsElement;
  @query('[part="header"]') header: HTMLElement;
  @query('[part="content"]') body: HTMLElement;

  accordionObserver: MutationObserver;

  /**
   * Indicates whether or not the accordion is open. You can toggle this attribute to show and hide the accordion, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the accordion' open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  @property({ reflect: true }) summary: string;

  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? 'auto' : '0';

    if (this.open) {
      this.accordion.open = true;
    }

    this.accordionObserver = new MutationObserver(changes => {
      for (const change of changes) {
        if (change.type === 'attributes' && change.attributeName === 'open') {
          if (this.accordion.open) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    });
    this.accordionObserver.observe(this.accordion, { attributes: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.accordionObserver?.disconnect();
  }

  protected handleSummaryClick(event: MouseEvent) {
    event.preventDefault();

    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  protected handleSummaryKeyDown(event: KeyboardEvent) {
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
      this.accordion.open = true;
      // Show
      const slShow = this.emit('sd-show', { cancelable: true });
      if (slShow.defaultPrevented) {
        this.open = false;
        this.accordion.open = false;
        return;
      }

      await stopAnimations(this.body);
      this.body.hidden = false;

      const { keyframes, options } = getAnimation(this, 'accordion.show', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.emit('sd-after-show');
    } else {
      // Hide
      const slHide = this.emit('sd-hide', { cancelable: true });
      if (slHide.defaultPrevented) {
        this.accordion.open = true;
        this.open = true;
        return;
      }

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'accordion.hide', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = 'auto';

      this.accordion.open = false;
      this.emit('sd-after-hide');
    }
  }

  /** Shows the accordion. */
  async show() {
    if (this.open) {
      return undefined;
    }
    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  /** Hides the accordion */
  async hide() {
    if (!this.open) {
      return undefined;
    }
    this.open = false;
    return waitForEvent(this, 'sd-after-hide');
  }

  render() {
    return html`
      <details part="base" class="border-y border-neutral-400">
        <summary
          part="header"
          id="header"
          class=${cx(
            'flex text-base gap-4 font-bold items-center cursor-pointer select-none px-4 py-3 focus-visible:focus-outline text-primary relative group transition-colors ease-in-out duration-fast hover:bg-neutral-200'
          )}
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          tabindex="0"
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div
            part="summary-border"
            class=${cx(
              !this.open && 'opacity-0',
              'w-1 bg-accent absolute left-0 transition-height duration-fast ease-in-out h-[calc(100%-16px)] group-hover:h-full'
            )}
          ></div>
          <slot name="summary" part="summary" class="flex flex-auto items-center text-left">${this.summary}</slot>
          <span
            part="summary-icon"
            class=${cx(
              'flex flex-grow-0 flex-shrink-0 flex-auto items-center transition-all ease-in-out duration-medium text-xl',
              this.open && 'rotate-180'
            )}
            ><slot name="expand-icon" class=${cx(this.open && 'hidden')}>
              <sd-icon library="_internal" name="chevron-down"></sd-icon>
            </slot>
            <slot name="collapse-icon" class=${cx(!this.open && 'hidden')}>
              <sd-icon library="_internal" name="chevron-down"></sd-icon> </slot
          ></span>
        </summary>
        <div part="content" id="content" class="overflow-hidden">
          <slot part="content__slot" class="block px-4 py-6" role="region" aria-labelledby="header"></slot>
        </div>
      </details>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block;
      }

      /** Removes summary marker on Safari */
      [part='header']::-webkit-details-marker {
        @apply hidden;
      }
    `
  ];
}

setDefaultAnimation('accordion.show', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 'var(--sd-duration-medium, 300)', easing: 'ease-in-out' }
});

setDefaultAnimation('accordion.hide', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' }
  ],
  options: { duration: 'var(--sd-duration-fast, 150)', easing: 'ease-in-out' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-accordion': SdAccordion;
  }
}
