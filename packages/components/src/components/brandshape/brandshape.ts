import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property, query, state } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { TemplateResult } from 'lit-html';

type Breakpoints = 0 | 414 | 640;

/**
 * @summary The Brandshape highlights a piece of content.
 * @documentation https://solid.union-investment.com/[storybook-brandshape]/brandshape
 * @status stable
 * @since 1.4
 *
 * @slot - The content inside the brandshape.
 * @slot image - The image slot for the 'image' variant.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - Middle content wrapper.
 * @csspart shape-top - Top shape.
 * @csspart shape-middle - Middle shape.
 * @csspart shape-bottom - Bottom shape.
 * @csspart stylized-container - Container for border and image variant.
 */

@customElement('sd-brandshape')
export default class SdBrandshape extends SolidElement {
  @query('[part=base]') containerElem: HTMLElement;

  /** The brandshape's theme variant. */
  @property({ type: String }) variant:
    | 'neutral-100'
    | 'primary'
    | 'white'
    | 'border-primary'
    | 'border-white'
    | 'image' = 'primary';

  /** Defines which shapes of the brandshape should be displayed. */
  @property({ type: Array }) shapes: ('top' | 'middle' | 'bottom')[] = ['top', 'middle', 'bottom'];

  /** @internal */
  @state() componentBreakpoint: Breakpoints = 0;

  private resizeObserver: ResizeObserver;

  private getSvg(breakpoint: Breakpoints, shape: 'top' | 'bottom'): TemplateResult {
    return {
      0: this.smallSvg(shape),
      414: this.mediumSvg(shape),
      640: this.largeSvg(shape)
    }[breakpoint];
  }

  private largeSvg(shape: 'top' | 'bottom'): TemplateResult {
    return shape === 'top'
      ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 121">
          <path
            d="M610.777 1.393.001 120.146 0 123h700.001V74.79c0-4.797-.462-9.585-1.381-14.294-7.909-40.537-47.237-66.998-87.843-59.103Z"
          />
        </svg>`
      : html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 123">
          <path
            d="M89.224 121.607 700 2.854 700.001 0h-700L0 48.21c0 4.797.463 9.584 1.381 14.294 7.909 40.537 47.237 66.998 87.843 59.103Z"
          />
        </svg>`;
  }

  private mediumSvg(shape: 'top' | 'bottom'): TemplateResult {
    return shape === 'top'
      ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 119">
          <path
            d="M597.75 1.6 0 118.046V121h700V85.872c0-5.509-.53-11.006-1.583-16.413-9.063-46.543-54.133-76.924-100.667-67.86Z"
          />
        </svg>`
      : html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 121">
          <path
            d="M102.25 119.4 700 2.954V0H0v35.128c0 5.509.53 11.006 1.583 16.413 9.063 46.543 54.134 76.924 100.667 67.859Z"
          />
        </svg>`;
  }

  private smallSvg(shape: 'top' | 'bottom'): TemplateResult {
    return shape === 'top'
      ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 113">
          <path
            d="M566.951 2.08 0 112.466v2.934h700v-3.672c0-7.166-.689-14.314-2.059-21.348-11.789-60.557-70.436-100.09-130.99-88.3Z"
          />
        </svg>`
      : html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 116">
          <path
            d="M133.049 113.32 700 2.934V0H0v3.672c0 7.165.69 14.314 2.059 21.348 11.79 60.557 70.436 100.09 130.99 88.3Z"
          />
        </svg>`;
  }

  private setBreakpoint(): void {
    switch (true) {
      case this.containerElem.clientWidth <= 414:
        this.componentBreakpoint = 0;
        break;
      case this.containerElem.clientWidth < 640:
        this.componentBreakpoint = 414;
        break;
      default:
        this.componentBreakpoint = 640;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setBreakpoint());

    this.updateComplete.then(() => {
      this.setBreakpoint();
      this.resizeObserver.observe(this.containerElem);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.containerElem);
  }

  private renderTopBrandshape(): TemplateResult {
    return html`
      <div class="relative" part="shape-top">
        ${this.shapes.length === 1
          ? html` <div class="relative">
              ${this.getSvg(this.componentBreakpoint, 'top')}
              <div part="content" class="absolute bottom-0 right-0 flex items-end w-2/5 h-2/3 px-6 py-4">
                <slot></slot>
              </div>
            </div>`
          : this.getSvg(this.componentBreakpoint, 'top')}
        ${this.renderWhitespaceFix('top')}
      </div>
    `;
  }

  private renderMiddleBrandshape(): TemplateResult {
    return html`
      <div
        class=${cx(
          { 0: 'px-6 py-4', 414: 'px-10 py-8', 640: 'px-10 py-8' }[this.componentBreakpoint],
          'w-full block relative'
        )}
      >
        <div
          part="shape-middle"
          class=${cx(
            {
              'neutral-100': 'bg-neutral-100',
              primary: 'bg-primary',
              white: 'bg-white',
              'border-white': 'bg-transparent',
              'border-primary': 'bg-transparent',
              image: 'bg-transparent'
            }[this.variant],
            'w-full block absolute h-full top-0 left-0 z-0'
          )}
        ></div>
        <div class="z-10 relative" part="content"><slot></slot></div>
      </div>
    `;
  }

  private renderBottomBrandshape(): TemplateResult {
    return html`<div class="relative" part="shape-bottom">
      ${this.getSvg(this.componentBreakpoint, 'bottom')}${this.renderWhitespaceFix('bottom')}
    </div>`;
  }

  /**
   * Renders a small line to prevent whitespace between the svg and the div of the middle brandshape.
   */
  private renderWhitespaceFix(position: 'top' | 'bottom'): TemplateResult {
    return html` <div
      class=${cx(
        {
          'neutral-100': 'bg-neutral-100',
          primary: 'bg-primary',
          white: 'bg-white',
          'border-white': 'bg-transparent',
          'border-primary': 'bg-transparent',
          image: 'bg-transparent'
        }[this.variant],
        { top: 'bottom-0', bottom: 'top-0' }[position],
        'block absolute left-0 w-full h-[1px]'
      )}
    ></div>`;
  }

  private renderStylizedVariant(): TemplateResult {
    return html`
      <div part="stylized-container" class="w-full overflow-hidden">
        <slot name="image"></slot>
      </div>
    `;
  }

  private renderShapes(): TemplateResult {
    return html`
      ${this.shapes.includes('top') ? this.renderTopBrandshape() : ''}
      ${this.shapes.includes('middle') ? this.renderMiddleBrandshape() : ''}
      ${this.shapes.includes('bottom') ? this.renderBottomBrandshape() : ''}
    `;
  }

  render() {
    const isStylizedVariant = this.variant.startsWith('border-') || this.variant === 'image';

    return html`
      <div
        class="${cx(
          {
            'neutral-100': 'fill-neutral-100',
            primary: 'fill-primary',
            white: 'fill-white',
            'border-white': 'fill-transparent',
            'border-primary': 'fill-transparent',
            image: 'fill-transparent'
          }[this.variant],
          'relative'
        )}"
        part="base"
      >
        ${isStylizedVariant ? this.renderStylizedVariant() : ''} ${this.renderShapes()}
        <slot></slot>
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
        @apply block;
        container-type: inline-size;
        --angle: 11deg;
        --radius: 60px;
        --tan: tan(var(--angle));
        --adjacent: 100cqw;
        --opposite: calc(var(--tan, 0.1943803091) * var(--adjacent));
        --curve: calc(
          (var(--opposite) - (var(--radius) / 3)) * 0.5
        ); /* Not sure, why the division by 3 works for every screen size – but it works, so do not touch it */
      }

      @media (min-width: 415px) {
        :host {
          --radius: 72px;
        }
      }

      @media (min-width: 640px) {
        :host {
          --radius: 84px;
        }
      }

      :host([variant='image']) [part='stylized-container'],
      :host([variant^='border-']) [part='stylized-container']::before {
        @apply absolute top-0 left-0;
        transform: skewY(calc(var(--angle) * -1));
        height: calc(100% - var(--curve) * 2);
        border-radius: 0 var(--radius);
        margin-top: calc(var(--curve));
      }

      slot[name='image']::slotted(img),
      slot[name='image']::slotted(video) {
        @apply w-full object-cover;
        transform: translateY(calc(var(--curve) * -1)) skewY(var(--angle)) !important;
        height: calc(100% + var(--curve) * 2) !important;
        position: absolute !important;
      }

      /* Stylized border */

      :host([variant='border-primary']) {
        --internal-border-color: rgb(var(--sd-color-primary, 0 53 142));
      }

      :host([variant='border-white']) {
        --internal-border-color: var(--sd-color-white, white);
      }

      :host([variant^='border-']) [part='stylized-container']::before {
        @apply right-0 border-solid border-2;
        content: '';
        border-color: var(--internal-border-color, black);
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-brandshape': SdBrandshape;
  }
}
