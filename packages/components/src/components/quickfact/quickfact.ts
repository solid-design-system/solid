import '../icon/icon';
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { setDefaultAnimation } from '../../utilities/animation-registry';
import SdAccordion from '../accordion/accordion';

/**
 * @summary Accordion shows a brief summary and expands to show additional content.
 * @documentation https://solid.union-investment.com/[storybook-link]/quickfact
 * @status stable
 * @since 1.1
 *
 * @dependency sd-icon sd-accordion
 */
@customElement('sd-quickfact')
export default class SdQuickfact extends SdAccordion {
  static styles = [
    SdAccordion.styles,
    css`
      :host {
        @apply block;
      }

      [part='base'] {
        border: 0;
        padding: var(--sd-spacing-6, 1.5rem);
      }

      [part='header'] {
        display: flex;
        flex-direction: row;
      }

      @media (min-width: 640px) {
        [part='header'] {
          flex-direction: column;
        }
      }

      [part='summary'] {
        text-align: center;
        font-size: var(--sd-font-size-base, 1rem);
        font-weight: var(--sd-font-weight-normal, 400);
        line-height: var(--sd-line-height-normal, 1.5);
      }

      @media (min-width: 640px) {
        [part='summary'] {
          font-size: var(--sd-font-size-3xl, 2rem);
          line-height: var(--sd-line-height-tight, 1.25);
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

      @media (min-width: 640px) {
        [part='summary-icon'] {
          font-size: var(--sd-font-size-3xl, 2rem);
        }
      }

      [part='summary-border'] {
        display: none;
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
