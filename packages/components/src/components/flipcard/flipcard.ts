import { css, html, unsafeCSS } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import HeadlineStyles from '../../styles/headline/headline.css?inline';
import ParagraphStyles from '../../styles/paragraph/paragraph.css?inline';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Flipcard allows for the addition of content/information on both "sides" of the card, through means of a flip animation. Used  to add dynamism and interactivity to a page.
 * @documentation https://solid.union-investment.com/[storybook-link]/flipcard
 * @status stable
 * @since 3.5.0
 *
 * @slot - The headline text of the flipcard.
 * @slot description - The description of the flipcard.
 * @slot headline-icon - The icon of the flipcard.
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
    | 'gradient-dark-bottom' = 'primary-100';

  /** Determines the ratio for the layout of the flipcard. */
  @property({ type: String, reflect: true }) ratio: '3:4' | '16:9' = '3:4';

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div part="base" class=${cx('', this.ratio === '3:4' ? 'aspect-3/4' : 'aspect-video')}>
        <div
          part="front"
          class=${cx(
            'h-full w-full flex flex-col gap-4 py-4 px-6',
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
          <h4
            class=${cx(
              'sd-headline sd-headline--inline sd-headline--size-lg',
              this.frontVariant === 'primary' && 'sd-headline--inverted'
            )}
          >
            <slot name="headline-icon"></slot>
            <slot></slot>
          </h4>

          <p class=${cx('sd-paragraph  text-left', this.frontVariant === 'primary' && 'sd-paragraph--inverted')}>
            <slot name="description"></slot>
          </p>

          <sd-link size="inherit" href="#" ?inverted=${this.frontVariant === 'primary' ? true : false}>Link</sd-link>
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
    unsafeCSS(HeadlineStyles),
    unsafeCSS(ParagraphStyles),
    css`
      :host {
        --name: '';
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-flipcard': SdFlipcard;
  }
}
