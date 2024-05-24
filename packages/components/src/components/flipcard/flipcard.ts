import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flipcard allows for the addition of content/information on both "sides" of the card, through means of a flip animation. Used  to add dynamism and interactivity to a page.
 * @documentation https://solid.union-investment.com/[storybook-link]/flipcard
 * @status stable
 * @since 3.5.0
 *
 * @slot front - The front face of the flipcard.
 * @slot back - The back face of the flipcard.
 * @slot mediaFront - An optional media slot which can be as a background. Dependent from gradient variant.
 * @slot mediaBack - An optional media slot which can be as a background. Dependent from gradient variant.
 *
 * @cssparts base - The component's base wrapper.
 *
 * @cssproperties --name - Description of the flipcard.
 */
@customElement('sd-flipcard')
export default class SdFlipcard extends SolidElement {
  /** Determines the variant of the front face of the flipcard. */
  @property({ type: String, reflect: true }) frontVariant:
    | 'primary'
    | 'primary-100'
    | 'gradient-light-top'
    | 'gradient-light-bottom'
    | 'gradient-dark-top'
    | 'gradient-dark-bottom' = 'primary';

  /** Determines the variant of the back face of the flipcard. */
  @property({ type: String, reflect: true }) backVariant:
    | 'primary'
    | 'primary-100'
    | 'gradient-light-top'
    | 'gradient-light-bottom'
    | 'gradient-dark-top'
    | 'gradient-dark-bottom' = 'primary';

  /** Determines the ratio for the layout of the flipcard. */
  @property({ type: String, reflect: true }) ratio: '3:4' | '16:9' = '3:4';

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div part="base" class=${cx('flip-card', this.ratio === '3:4' ? 'aspect-3/4' : 'aspect-video')}>
        <div
          part="front"
          class=${cx(
            'flip-card__side flip-card__side--front hover',
            'flex flex-col gap-4 py-4 px-6',
            'absolute top-0 left-0 w-full h-full',
            {
              primary: 'bg-primary',
              'primary-100': 'bg-primary-100',
              'gradient-light-top': '',
              'gradient-light-bottom': '',
              'gradient-dark-top': '',
              'gradient-dark-bottom': ''
            }[this.frontVariant]
          )}
        >
          <slot name="front"></slot>
        </div>

        <div
          part="back"
          class=${cx(
            'flip-card__side flip-card__side--back hover',
            'flex flex-col gap-4 py-4 px-6',
            'absolute top-0 left-0 w-full h-full',
            {
              primary: 'bg-primary',
              'primary-100': 'bg-primary-100',
              'gradient-light-top': '',
              'gradient-light-bottom': '',
              'gradient-dark-top': '',
              'gradient-dark-bottom': ''
            }[this.backVariant]
          )}
        >
          <slot name="back"></slot>
        </div>
      </div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        display: block;
      }

      .flip-card {
        position: relative;
        perspective: 100rem;
      }
      .flip-card__side {
        transition: all var(--flip-card-transition-duration, 800ms) var(--flip-card-transition-timing-function, ease);
        backface-visibility: hidden;
        border-radius: var(--flip-card-border-radius, 4px);
        overflow: hidden;
        box-shadow: var(--flip-card-box-shadow, 0 15px 40px rgba(0, 0, 0, 0.15));
      }
      .flip-card__side--front {
      }
      .flip-card__side--back {
        transform: rotateY(180deg);
      }
      .flip-card:hover .flip-card__side--front.hover {
        transform: rotateY(-180deg);
      }
      .flip-card:hover .flip-card__side--back.hover {
        transform: rotateY(0);
      }

      /* .clicked--front {
        transform: rotateY(-180deg);
      }

      .clicked--back {
        transform: rotateY(0);
      } */
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-flipcard': SdFlipcard;
  }
}
