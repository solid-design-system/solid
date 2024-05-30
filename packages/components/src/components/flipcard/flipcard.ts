import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property, query } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flipcard allows for the addition of content/information on both "sides" of the card, through means of a flip animation. Used  to add dynamism and interactivity to a page.
 * @documentation https://solid.union-investment.com/[storybook-link]/flipcard
 * @status stable
 * @since 3.5.0
 *
 * @event sd-flip-front - Emmited when the front face of the flipcard is clicked.
 * @event sd-flip-back - Emmited when the back face of the flipcard is clicked.
 *
 * @slot front - The front face of the flipcard.
 * @slot back - The back face of the flipcard.
 * @slot mediaFront - An optional media slot which can be as a background. Dependent from gradient variant.
 * @slot mediaBack - An optional media slot which can be as a background. Dependent from gradient variant.
 *
 * @cssparts base - The component's base wrapper.
 * @cssparts front - The container that wraps the front-side of the flipcard.
 * @cssparts back - The container that wraps the back-side of the flipcard.
 * @cssparts frontSlotContainer - The container that wraps the front slot.
 * @cssparts backSlotContainer - The container that wraps the back slot.
 * @cssparts mediaFront - The container that wraps the mediaFront slot.
 * @cssparts mediaBack - The container that wraps the mediaBack slot.
 * @cssparts frontSecondaryGradient - The container that wraps the secondary gradient of the front side.
 * @cssparts backSecondaryGradient - The container that wraps the secondary gradient of the back side.
 *
 * @cssproperties --name - Description of the flipcard.
 */
@customElement('sd-flipcard')
export default class SdFlipcard extends SolidElement {
  @query('[part="back"]') back: HTMLElement;
  @query('[part="front"]') front: HTMLElement;

  /** Determines the variant of the front face of the flipcard. */
  @property({ type: String, reflect: true })
  frontVariant:
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
    | 'gradient-dark-bottom' = 'primary-100';

  /** Determines the ratio for the layout of the flipcard. */
  @property({ type: String, reflect: true }) ratio: '3:4' | '16:9' = '3:4';

  connectedCallback() {
    super.connectedCallback();
  }

  private flipFront() {
    this.front.classList.add('clicked--front');
    this.back.classList.add('clicked--back');
    this.emit('sd-flip-front');
  }

  private flipBack() {
    this.front.classList.remove('clicked--front');
    this.back.classList.remove('clicked--back');
    this.emit('sd-flip-back');
  }

  private handleFrontKeydown(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.flipFront();
    }
  }

  private handleBackKeydown(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'Space') {
      this.flipBack();
    }
  }

  render() {
    return html`
      <div part="base" class=${cx('flip-card', this.ratio === '3:4' ? 'aspect-3/4' : 'aspect-video')}>
        <div
          part="front"
          tabindex="0"
          class=${cx(
            'flip-card__side flip-card__side--front hover',
            'flex focus-visible:focus-outline',
            'absolute top-0 left-0 w-full h-full justify-end text-left',
            this.frontVariant === 'primary' && 'bg-primary',
            this.frontVariant === 'primary-100' && 'bg-primary-100',
            this.frontVariant === 'gradient-dark-bottom' || this.frontVariant === 'gradient-light-bottom'
              ? 'flex-col-reverse'
              : 'flex-col'
          )}
          @click=${this.flipFront}
          @keydown=${this.handleFrontKeydown}
        >
          <div
            part="mediaFront"
            class=${cx(
              'absolute h-full w-full -z-20',
              (this.frontVariant === 'primary' || this.frontVariant === 'primary-100') && 'hidden'
            )}
          >
            <slot name="mediaFront"></slot>
          </div>

          <div
            part="frontSlotContainer"
            class=${cx(
              'py-4 px-6 flex mt-auto',
              {
                primary: 'text-white',
                'primary-100': 'text-black',
                'gradient-light-top': 'text-black',
                'gradient-light-bottom': 'text-black',
                'gradient-dark-top': 'text-white',
                'gradient-dark-bottom': 'text-white'
              }[this.frontVariant],
              {
                primary: '',
                'primary-100': '',
                'gradient-light-top': 'bg-gradient-to-b from-white/75 to-white/60',
                'gradient-light-bottom': 'bg-gradient-to-t from-white/75 to-white/60',
                'gradient-dark-top': 'bg-gradient-to-b from-primary-800/75 to-primary-800/60',
                'gradient-dark-bottom': 'bg-gradient-to-t from-primary-800/75 to-primary-800/60'
              }[this.frontVariant]
            )}
          >
            <slot name="front"></slot>
          </div>

          <div
            part="frontSecondaryGradient"
            class=${cx(
              'flex-1',
              {
                primary: '',
                'primary-100': '',
                'gradient-light-top': 'bg-gradient-to-b from-white/60 to-40%',
                'gradient-light-bottom': 'bg-gradient-to-t from-white/60 to-40%',
                'gradient-dark-top': 'bg-gradient-to-b from-primary-800/60 to-40%',
                'gradient-dark-bottom': 'bg-gradient-to-t  from-primary-800/60 to-40%'
              }[this.frontVariant]
            )}
          ></div>
        </div>

        <div
          part="back"
          tabindex="0"
          class=${cx(
            'flip-card__side flip-card__side--back hover',
            'flex focus-visible:focus-outline',
            'absolute top-0 left-0 w-full h-full justify-end text-left',
            this.backVariant === 'primary' && 'bg-primary',
            this.backVariant === 'primary-100' && 'bg-primary-100',
            this.backVariant === 'gradient-dark-bottom' || this.backVariant === 'gradient-light-bottom'
              ? 'flex-col-reverse'
              : 'flex-col'
          )}
          @click=${this.flipBack}
          @keydown=${this.handleBackKeydown}
        >
          <div
            part="mediaBack"
            class=${cx(
              'absolute h-full w-full -z-20',
              (this.backVariant === 'primary' || this.backVariant === 'primary-100') && 'hidden'
            )}
          >
            <slot name="mediaBack"></slot>
          </div>

          <div
            part="backSlotContainer"
            class=${cx(
              'py-4 px-6 flex mt-auto',
              {
                primary: 'text-white',
                'primary-100': 'text-black',
                'gradient-light-top': 'text-black',
                'gradient-light-bottom': 'text-black',
                'gradient-dark-top': 'text-white',
                'gradient-dark-bottom': 'text-white'
              }[this.backVariant],
              {
                primary: '',
                'primary-100': '',
                'gradient-light-top': 'bg-gradient-to-b from-white/75 to-white/60',
                'gradient-light-bottom': 'bg-gradient-to-t from-white/75 to-white/60',
                'gradient-dark-top': 'bg-gradient-to-b from-primary-800/75 to-primary-800/60',
                'gradient-dark-bottom': 'bg-gradient-to-t from-primary-800/75 to-primary-800/60'
              }[this.backVariant]
            )}
          >
            <slot name="back"></slot>
          </div>

          <div
            part="backSecondaryGradient"
            class=${cx(
              'flex-1',
              {
                primary: '',
                'primary-100': '',
                'gradient-light-top': 'bg-gradient-to-b from-white/60 to-40%',
                'gradient-light-bottom': 'bg-gradient-to-t from-white/60 to-40%',
                'gradient-dark-top': 'bg-gradient-to-b from-primary-800/60 to-40%',
                'gradient-dark-bottom': 'bg-gradient-to-t  from-primary-800/60 to-40%'
              }[this.backVariant]
            )}
          ></div>
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
        --name: '';
      }

      .flip-card {
        position: relative;
        perspective: 100rem;
      }
      .flip-card__side {
        transition: transform 1000ms ease;
        backface-visibility: hidden;
        overflow: hidden;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
      }
      .flip-card__side--front {
      }
      .flip-card__side--back {
        transform: rotateY(180deg);
      }

      @media (hover: hover) and (pointer: fine) {
        .flip-card:hover .flip-card__side--front.hover {
          transform: rotateY(-180deg);
        }
        .flip-card:hover .flip-card__side--back.hover {
          transform: rotateY(0);
        }
      }

      .clicked--front {
        transform: rotateY(-180deg);
      }

      .clicked--back {
        transform: rotateY(0);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-flipcard': SdFlipcard;
  }
}
