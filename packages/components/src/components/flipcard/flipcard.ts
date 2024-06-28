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
 * @since 3.8.0
 *
 * @event sd-flip-front - Emmited when the front face of the flipcard is clicked.
 * @event sd-flip-back - Emmited when the back face of the flipcard is clicked.
 *
 * @slot front - The front face of the flipcard.
 * @slot back - The back face of the flipcard.
 * @slot media-front - An optional media slot which can be as a background. Dependent from gradient variant.
 * @slot media-back - An optional media slot which can be as a background. Dependent from gradient variant.
 *
 * @csspart base - The component's base wrapper.
 * @csspart front - The container that wraps the front-side of the flipcard.
 * @csspart back - The container that wraps the back-side of the flipcard.
 * @csspart front-slot-container - The container that wraps the front slot.
 * @csspart back-slot-container - The container that wraps the back slot.
 * @csspart media-front - The container that wraps the media-front slot.
 * @csspart media-back - The container that wraps the media-back slot.
 * @csspart front-secondary-gradient - The container that wraps the secondary gradient of the front side.
 * @csspart back-secondary-gradient - The container that wraps the secondary gradient of the back side.
 *
 * @cssproperty --name - Description of the flipcard.
 * @cssproperty --height - Use this property to set the height of the flipcard.
 */

@customElement('sd-flipcard')
export default class SdFlipcard extends SolidElement {
  @query('[part="front"]') front: HTMLElement;
  @query('[part="back"]') back: HTMLElement;

  /**
   * Determines the activation type of the flipcard.
   */
  @property({ reflect: true }) activation: 'click' | 'click hover' = 'click hover';

  /**
   * Allows the flipcard to flip vertically or horizontally.
   */
  @property({ reflect: true, attribute: 'flip-direction' }) flipDirection: 'horizontal' | 'vertical' = 'horizontal';

  /** Determines the variant of the front face of the flipcard. */
  @property({ type: String, reflect: true, attribute: 'front-variant' })
  frontVariant:
    | 'empty'
    | 'primary'
    | 'primary-100'
    | 'gradient-light-top'
    | 'gradient-light-bottom'
    | 'gradient-dark-top'
    | 'gradient-dark-bottom' = 'empty';

  /** Determines the variant of the back face of the flipcard. */
  @property({ type: String, reflect: true, attribute: 'back-variant' }) backVariant:
    | 'empty'
    | 'primary'
    | 'primary-100'
    | 'gradient-light-top'
    | 'gradient-light-bottom'
    | 'gradient-dark-top'
    | 'gradient-dark-bottom' = 'empty';

  connectedCallback() {
    super.connectedCallback();
  }

  private flipFront() {
    this.front.classList.add('clicked--front');
    this.back.classList.add('clicked--back');
    this.emit('sd-flip-front');
    this.back.focus();
  }

  private flipBack() {
    this.front.classList.remove('clicked--front');
    this.back.classList.remove('clicked--back');
    this.emit('sd-flip-back');
    this.front.focus();
  }

  private handleFrontClick(event: PointerEvent) {
    const eventNode = event.target as HTMLElement;

    // Prevent flipping when clicking on interactive elements
    if (eventNode.getAttribute('onclick') === null && eventNode.getAttribute('href') === null) {
      this.flipFront();
    }
  }

  private handleBackClick(event: PointerEvent) {
    const eventNode = event.target as HTMLElement;

    // Prevent flipping when clicking on interactive elements
    if (eventNode.getAttribute('onclick') === null && eventNode.getAttribute('href') === null) {
      this.flipBack();
    }
  }

  private handleFrontKeydown(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.front === event.target) {
      this.flipFront();
    }
  }

  private handleBackKeydown(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.back === event.target) {
      this.flipBack();
    }
  }

  render() {
    return html`
      <div part="base" class=${cx('flip-card relative h-full w-full')}>
        <div
          part="front"
          tabindex="0"
          class=${cx(
            'flip-card__side flip-card__side--front overflow-hidden transition-transform duration-1000 ease-in-out',
            'flex focus-visible:focus-outline',
            'absolute top-0 left-0 w-full h-full justify-end text-left',
            this.activation === 'click hover' && 'hover',
            this.frontVariant === 'primary' && 'bg-primary',
            this.frontVariant === 'primary-100' && 'bg-primary-100',
            this.frontVariant === 'gradient-dark-bottom' || this.frontVariant === 'gradient-light-bottom'
              ? 'flex-col-reverse'
              : 'flex-col',
            this.flipDirection === 'vertical' && 'vertical'
          )}
          @click=${this.handleFrontClick}
          @keydown=${this.handleFrontKeydown}
        >
          <div
            part="media-front"
            class=${cx(
              'absolute h-full w-full -z-20',
              (this.frontVariant === 'primary' || this.frontVariant === 'primary-100') && 'hidden'
            )}
          >
            <slot name="media-front"></slot>
          </div>

          <div
            part="front-slot-container"
            class=${cx(
              'flex',
              {
                empty: 'text-black',
                primary: 'text-white',
                'primary-100': 'text-black',
                'gradient-light-top': 'text-black',
                'gradient-light-bottom': 'text-black',
                'gradient-dark-top': 'text-white',
                'gradient-dark-bottom': 'text-white'
              }[this.frontVariant],
              {
                empty: '',
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
            part="front-secondary-gradient"
            class=${cx(
              'flip-card__gradient',
              {
                empty: 'mb-auto',
                primary: 'mb-auto',
                'primary-100': 'mb-auto',
                'gradient-light-top': 'bg-gradient-to-b from-white/60 to-40% mb-auto',
                'gradient-light-bottom': 'bg-gradient-to-t from-white/60 to-40% mt-auto',
                'gradient-dark-top': 'bg-gradient-to-b from-primary-800/60 to-40% mb-auto',
                'gradient-dark-bottom': 'bg-gradient-to-t  from-primary-800/60 to-40% mt-auto'
              }[this.frontVariant]
            )}
          ></div>
        </div>

        <div
          part="back"
          tabindex="0"
          class=${cx(
            'flip-card__side flip-card__side--back overflow-hidden transition-transform duration-1000 ease-in-out',
            'flex focus-visible:focus-outline',
            'absolute top-0 left-0 w-full h-full justify-end text-left',
            this.activation === 'click hover' && 'hover',
            this.backVariant === 'primary' && 'bg-primary',
            this.backVariant === 'primary-100' && 'bg-primary-100',
            this.backVariant === 'gradient-dark-bottom' || this.backVariant === 'gradient-light-bottom'
              ? 'flex-col-reverse'
              : 'flex-col',
            this.flipDirection === 'vertical' && 'vertical'
          )}
          @click=${this.handleBackClick}
          @keydown=${this.handleBackKeydown}
        >
          <div
            part="media-back"
            class=${cx(
              'absolute h-full w-full -z-20',
              (this.backVariant === 'primary' || this.backVariant === 'primary-100') && 'hidden'
            )}
          >
            <slot name="media-back"></slot>
          </div>

          <div
            part="back-slot-container"
            class=${cx(
              'flex',
              {
                empty: 'text-black',
                primary: 'text-white',
                'primary-100': 'text-black',
                'gradient-light-top': 'text-black',
                'gradient-light-bottom': 'text-black',
                'gradient-dark-top': 'text-white',
                'gradient-dark-bottom': 'text-white'
              }[this.backVariant],
              {
                empty: '',
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
            part="back-secondary-gradient"
            class=${cx(
              'flip-card__gradient',
              {
                empty: 'mb-auto',
                primary: 'mb-auto',
                'primary-100': 'mb-auto',
                'gradient-light-top': 'bg-gradient-to-b from-white/60 to-40% mb-auto',
                'gradient-light-bottom': 'bg-gradient-to-t from-white/60 to-40% mt-auto',
                'gradient-dark-top': 'bg-gradient-to-b from-primary-800/60 to-40% mb-auto',
                'gradient-dark-bottom': 'bg-gradient-to-t  from-primary-800/60 to-40% mt-auto'
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
        @apply block aspect-3/4;
        --name: '';
        --height: 480px;
        height: var(--height);
      }

      .flip-card {
        perspective: 100rem;
      }

      .flip-card__side {
        backface-visibility: hidden;
      }

      .flip-card__side--back {
        transform: rotateY(180deg);
      }

      .clicked--front {
        transform: rotateY(-180deg);
      }

      .clicked--back {
        transform: rotateY(0);
      }

      .flip-card__side--back.vertical {
        transform: rotateX(180deg);
      }

      .clicked--front.vertical {
        transform: rotateX(-180deg);
      }

      .clicked--back.vertical {
        transform: rotateX(0);
      }

      .flip-card__gradient {
        flex: 0.4 1 0;
      }

      @media (hover: hover) and (pointer: fine) {
        .flip-card:hover .flip-card__side--front.hover {
          transform: rotateY(-180deg);
        }

        .flip-card:hover .flip-card__side--back.hover {
          transform: rotateY(0);
        }

        .flip-card:hover .flip-card__side--front.hover.vertical {
          transform: rotateX(-180deg);
        }

        .flip-card:hover .flip-card__side--back.hover.vertical {
          transform: rotateX(0);
        }
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-flipcard': SdFlipcard;
  }
}
