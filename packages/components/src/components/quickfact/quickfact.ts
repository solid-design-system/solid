import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import { setDefaultAnimation } from '../../utilities/animation-registry';
import cx from 'classix';
import SdAccordion from '../accordion/accordion';

/**
 * @summary Accordion shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/quickfact
 * @status stable
 * @since 3.9.0
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
  @property({ type: Boolean, reflect: true, attribute: 'not-interactive' }) notInteractive = false;

  /** @internal */
  RenderSummary = () => {
    return html`
      <slot
        name="summary"
        part="summary"
        class=${cx(
          'flex flex-auto items-center text-left text-base leading-normal font-normal sm:leading-tight sm:text-3xl sm:text-center',
          this.notInteractive ? 'text-black' : 'text-primary'
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
        'flex flex-grow-0 flex-shrink-0 flex-auto items-center transition-all ease-in-out duration-300 text-xl sm:text-3xl',
        this.open && 'rotate-180',
        this.notInteractive && 'hidden'
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
    return html` <div part="content" id="content" class=${cx('overflow-hidden', this.notInteractive && 'hidden')}>
      <slot part="content__slot" class="block px-4 py-6" role="region" aria-labelledby="header"></slot>
    </div>`;
  };

  /** @internal */
  RenderOptionalIcon = () => {
    return html` <div part="icon" class="flex flex-grow-0 flex-shrink-0 flex-auto items-center">
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

      [part='header'] {
        @apply flex flex-row hover:bg-transparent;
      }

      @media (min-width: 640px) {
        [part='header'] {
          flex-direction: column;
        }

        [part='base'] {
          padding: var(--sd-spacing-6, 1.5rem);
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

      [part='summary-border'] {
        @apply hidden;
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
