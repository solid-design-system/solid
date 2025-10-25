import '../button/button';
import '../icon/icon';
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, state } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flipcard allows for the addition of content/information on both "sides" of the card, through means of a flip animation. Used  to add dynamism and interactivity to a page.
 * @documentation https://solid.union-investment.com/[storybook-link]/flipcard
 * @status stable
 * @since 3.8.0
 *
 * @dependency sd-button
 * @dependency sd-icon
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
 * @csspart front-button - The button that flips the flipcard to the back.
 * @csspart back-button - The button that flips the flipcard to the front.
 * @csspart front-interactive-container - The container that wraps the front side and the flip button.
 * @csspart back-interactive-container - The container that wraps the back side and the flip button.
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
   * Allows the flipcard to flip vertically or horizontally.
   */
  @property({ reflect: true, attribute: 'flip-direction' }) flipDirection: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Determines the placement of the contents of the flipcard.
   */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'top';

  /** Determines the variant of the front face of the flipcard. */
  @property({ type: String, reflect: true, attribute: 'front-variant' })
  frontVariant: 'primary' | 'primary-100' | 'gradient-light' | 'gradient-dark' = 'primary';

  /** Determines the variant of the back face of the flipcard. */
  @property({ type: String, reflect: true, attribute: 'back-variant' })
  backVariant: 'primary' | 'primary-100' | 'gradient-light' | 'gradient-dark' = 'primary';

  @state() activeSide: 'front' | 'back' = 'front';

  connectedCallback() {
    super.connectedCallback();
  }

  private flipFront() {
    this.activeSide = 'back';
    this.front.classList.add('clicked--front');
    this.back.classList.add('clicked--back');
    this.emit('sd-flip-front');

    /**
     * DEV Note: A timeout is needed to move the focus to the end of the callstack,
     * to enable the browser to have time to remove the `inert` attribute fron the flipcard side.
     */
    setTimeout(() => {
      this.back.focus();
    });
  }

  private flipBack() {
    this.activeSide = 'front';
    this.front.classList.remove('clicked--front');
    this.back.classList.remove('clicked--back');
    this.emit('sd-flip-back');

    /**
     * DEV Note: A timeout is needed to move the focus to the end of the callstack,
     * to enable the browser to have time to remove the `inert` attribute fron the flipcard side.
     */
    setTimeout(() => {
      this.front.focus();
    });
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
          aria-hidden=${this.activeSide === 'back'}
          inert=${ifDefined(this.activeSide === 'back' || undefined)}
          class=${cx(
            'flip-card__side flip-card__side--front overflow-hidden transition-transform duration-1000 ease-in-out',
            'flex focus-visible:focus-outline',
            'absolute top-0 left-0 w-full h-full justify-end text-left',
            this.frontVariant === 'primary' && 'bg-primary',
            this.frontVariant === 'primary-100' && 'bg-primary-100',
            this.placement === 'top' ? 'flex-col' : 'flex-col-reverse',
            this.flipDirection === 'vertical' && 'vertical'
          )}
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
              'flex relative',
              {
                primary: 'text-white',
                'primary-100': 'text-black',
                'gradient-light': 'text-black',
                'gradient-dark': 'text-white'
              }[this.frontVariant]
            )}
          >
            <div
              class=${cx(
                'absolute inset-0',
                {
                  primary: '',
                  'primary-100': '',
                  'gradient-light':
                    this.placement === 'top'
                      ? 'bg-gradient-to-b from-white/75 to-white/60'
                      : 'bg-gradient-to-t  from-white/75 to-white/60',
                  'gradient-dark':
                    this.placement === 'bottom'
                      ? 'bg-gradient-to-t from-primary-800/75 to-primary-800/60'
                      : 'bg-gradient-to-b  from-primary-800/75 to-primary-800/60'
                }[this.frontVariant]
              )}
            ></div>
            <slot name="front"></slot>
          </div>

          <div
            part="front-secondary-gradient"
            class=${cx(
              'flip-card__gradient',
              {
                primary: 'mb-auto',
                'primary-100': 'mb-auto',
                'gradient-light':
                  this.placement === 'top'
                    ? 'bg-gradient-to-b from-white/60 to-white/0 mb-auto'
                    : 'bg-gradient-to-t from-white/60 to-white/0 mt-auto',
                'gradient-dark':
                  this.placement === 'bottom'
                    ? 'bg-gradient-to-t from-primary-800/60 to-primary-800/0 mt-auto'
                    : 'bg-gradient-to-b from-primary-800/60 to-primary-800/0 mb-auto'
              }[this.frontVariant]
            )}
          ></div>
          <sd-button
            part="front-button"
            size="md"
            variant=${{
              primary: 'tertiary',
              'primary-100': 'tertiary',
              'gradient-light': 'primary',
              'gradient-dark': 'primary'
            }[this.frontVariant] as 'primary' | 'secondary' | 'tertiary' | 'cta'}
            ?inverted=${{
              primary: true,
              'primary-100': false,
              'gradient-light': true,
              'gradient-dark': true
            }[this.frontVariant]}
            class=${cx('absolute right-0 p-2 flex-shrink-0', this.placement === 'top' ? 'bottom-0' : 'top-0')}
            @click=${this.flipFront}
            @keydown=${this.handleFrontKeydown}
          >
            <sd-icon library="_internal" name="reload" label="Flip to Back"></sd-icon>
          </sd-button>
        </div>

        <div
          part="back"
          tabindex="0"
          aria-hidden=${this.activeSide === 'front'}
          inert=${ifDefined(this.activeSide === 'front' || undefined)}
          class=${cx(
            'flip-card__side flip-card__side--back overflow-hidden transition-transform duration-1000 ease-in-out',
            'flex focus-visible:focus-outline',
            'absolute top-0 left-0 w-full h-full justify-end text-left',
            this.backVariant === 'primary' && 'bg-primary',
            this.backVariant === 'primary-100' && 'bg-primary-100',
            this.placement === 'top' ? 'flex-col' : 'flex-col-reverse',
            this.flipDirection === 'vertical' && 'vertical'
          )}
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
                primary: 'text-white',
                'primary-100': 'text-black',
                'gradient-light': 'text-black',
                'gradient-dark': 'text-white'
              }[this.backVariant],
              {
                primary: '',
                'primary-100': '',
                'gradient-light':
                  this.placement === 'top'
                    ? 'bg-gradient-to-b from-white/75 to-white/60'
                    : 'bg-gradient-to-t  from-white/75 to-white/60',
                'gradient-dark':
                  this.placement === 'bottom'
                    ? 'bg-gradient-to-t from-primary-800/75 to-primary-800/60'
                    : 'bg-gradient-to-b  from-primary-800/75 to-primary-800/60'
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
                primary: 'mb-auto',
                'primary-100': 'mb-auto',
                'gradient-light':
                  this.placement === 'top'
                    ? 'bg-gradient-to-b from-white/60 to-white/0 mb-auto'
                    : 'bg-gradient-to-t from-white/60 to-white/0 mt-auto',
                'gradient-dark':
                  this.placement === 'bottom'
                    ? 'bg-gradient-to-t from-primary-800/60 to-primary-800/0 mt-auto'
                    : 'bg-gradient-to-b from-primary-800/60 to-primary-800/0 mb-auto'
              }[this.backVariant]
            )}
          ></div>
          <sd-button
            size="md"
            part="back-button"
            variant=${{
              primary: 'tertiary',
              'primary-100': 'tertiary',
              'gradient-light': 'primary',
              'gradient-dark': 'primary'
            }[this.backVariant] as 'primary' | 'secondary' | 'tertiary' | 'cta'}
            ?inverted=${{
              primary: true,
              'primary-100': false,
              'gradient-light': true,
              'gradient-dark': true
            }[this.backVariant]}
            class=${cx('absolute right-0 p-2 flex-shrink-0', this.placement === 'top' ? 'bottom-0' : 'top-0')}
            @click=${this.flipBack}
            @keydown=${this.handleBackKeydown}
          >
            <sd-icon library="_internal" name="reload" label="Flip to Front"></sd-icon>
          </sd-button>
        </div>
      </div>
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
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

      /**
       * Dev-note: In some components, css properties need to be assigned
       * to specific variables so we keep consistency as in Figma.
       * 
       * For more details, see the 'Consistency with Figma' section in the **CONTRIBUTING.md**.
       */
      :host([front-variant='gradient-light']) [part='front-slot-container'] .bg-gradient-to-b,
      :host([front-variant='gradient-light']) [part='front-secondary-gradient'] {
        --sd-color-background-white: var(--sd-informational-gradient--white-color-background, var(--sd-color-white));
      }

      :host([front-variant='gradient-dark']) [part='front-slot-container'] .bg-gradient-to-b,
      :host([front-variant='gradient-dark']) [part='front-secondary-gradient'] {
        --sd-color-background-primary-800: var(
          --sd-informational-gradient--primary-800-color-background,
          var(--sd-color-primary-800)
        );
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-flipcard': SdFlipcard;
  }
}
