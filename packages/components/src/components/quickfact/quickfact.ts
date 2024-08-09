import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { property } from 'lit/decorators.js';
import { setDefaultAnimation } from '../../utilities/animation-registry';
import cx from 'classix';
import SdAccordion from '../accordion/accordion';

/**
 * @summary Accordion shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/quickfact
 * @status stable
 * @since 3.12.0
 *
 * @slot icon - Optional icon to show in the header. Works best with `<sd-icon>`.
 *
 * @csspart icon - The container that wraps the icon.
 *
 * @dependency sd-icon sd-accordion
 */
@customElement('sd-quickfact')
export default class SdQuickfact extends SdAccordion {
  /**
   * Determines if the quickfact is not interactive. When set to `true`, the quickfact will not expand or collapse.
   */
  @property({ type: Boolean, reflect: true }) expandable = false;

  /** @internal */
  RenderHeader = () => {
    return html`<header
      part="header"
      id="header"
      class=${cx(
        'text-base font-bold items-center select-none focus-visible:focus-outline text-primary relative group flex flex-row hover:bg-transparent gap-3 pb-3 pt-0 px-0 sm:flex-col sm:gap-4 sm:pb-8',
        this.expandable && 'cursor-pointer'
      )}
      aria-label=${ifDefined(this.expandable ? 'header' : undefined)}
      aria-expanded=${ifDefined(this.expandable ? (this.open ? 'true' : 'false') : undefined)}
      aria-controls=${ifDefined(this.expandable ? 'content' : undefined)}
      tabindex=${this.expandable ? '0' : '-1'}
      @click=${this.expandable ? this.handleSummaryClick : null}
      @keydown=${this.expandable ? this.handleSummaryKeyDown : null}
    >
      ${this.RenderOptionalIcon()} ${this.RenderSummary()} ${this.RenderSummaryIcons()}
    </header>`;
  };

  /** @internal */
  RenderSummary = () => {
    return html`
      <slot
        name="summary"
        part="summary"
        class=${cx(
          'flex flex-auto items-start text-left text-base leading-normal font-normal sm:leading-tight sm:text-3xl sm:text-center',
          this.expandable ? 'text-primary' : 'text-black cursor-default'
        )}
        >${this.summary}</slot
      >
    `;
  };

  /** @internal */
  RenderSummaryIcons = () => {
    return html` <span
      part="summary-icon"
      class=${cx(
        'flex flex-grow-0 flex-shrink-0 flex-auto self-start sm:self-center transition-all ease-in-out duration-300 text-xl sm:text-4xl sm:mt-2',
        this.open && 'rotate-180',
        !this.expandable && 'hidden'
      )}
      ><slot name="expand-icon" class=${cx(this.open && 'hidden')}>
        <sd-icon library="system" name="chevron-down"></sd-icon>
      </slot>
      <slot name="collapse-icon" class=${cx(!this.open && 'hidden')}>
        <sd-icon library="system" name="chevron-down"></sd-icon> </slot
    ></span>`;
  };

  /** @internal */
  RenderDefaultSlot = () => {
    return html` <div part="content" id="content" class=${cx('overflow-hidden', !this.expandable && 'hidden')}>
      <slot part="content__slot" class="block" role="region" aria-labelledby="header"></slot>
    </div>`;
  };

  /** @internal */
  RenderOptionalIcon = () => {
    return html` <div
      part="icon"
      class=${cx('flex flex-grow-0 flex-shrink-0 flex-auto items-center', !this.expandable && 'cursor-default')}
    >
      <slot name="icon"></slot>
    </div>`;
  };

  static styles = [
    SdAccordion.styles,
    css`
      :host {
        @apply block;
      }

      [part='base'] {
        border: 0;
      }

      @media (min-width: 640px) {
        [part='base'] {
          padding: var(--sd-spacing-6, 1.5rem);
        }

        [part='summary-icon'] {
          font-size: var(--sd-spacing-12, 3rem);
        }
      }

      [part='icon'] {
        font-size: var(--sd-spacing-12, 3rem);
      }

      @media (min-width: 640px) {
        [part='icon'] {
          font-size: var(--sd-spacing-24, 6rem);
        }
      }
    `
  ];
}

setDefaultAnimation('quickfact.show', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 300, easing: 'ease' }
});

setDefaultAnimation('quickfact.hide', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' }
  ],
  options: { duration: 300, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'sd-quickfact': SdQuickfact;
  }
}
