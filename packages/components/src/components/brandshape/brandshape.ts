import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
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
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - Middle content wrapper.
 * @csspart shape-top - Top shape.
 * @csspart shape-middle - Middle shape.
 * @csspart shape-bottom - Bottom shape.
 */

@customElement('sd-brandshape')
export default class SdBrandshape extends SolidElement {
  @query('[part=base]') containerElem: HTMLElement;

  /** The brandshape's theme variant. */
  @property({ type: String }) variant: 'neutral-100' | 'primary' | 'white' = 'primary';

  /** Defines which shapes of the brandshape should be displayed. */
  @property({ type: Array }) shapes: ('top' | 'middle' | 'bottom')[] = ['top', 'middle', 'bottom'];

  @state() private componentBreakpoint: Breakpoints = 0;

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
        <div
          class=${cx(
            {
              'neutral-100': 'bg-neutral-100',
              primary: 'bg-primary',
              white: 'bg-white'
            }[this.variant],
            'block absolute left-0 bottom-0 w-full h-[1px]'
          )}
        ></div>
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
              white: 'bg-white'
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
      ${this.getSvg(this.componentBreakpoint, 'bottom')}
      <div
        class=${cx(
          {
            'neutral-100': 'bg-neutral-100',
            primary: 'bg-primary',
            white: 'bg-white'
          }[this.variant],
          'block absolute left-0 top-0 w-full h-[1px]'
        )}
      ></div>
    </div>`;
  }

  render() {
    return html`<div
      class=${cx(
        {
          'neutral-100': 'fill-neutral-100',
          primary: 'fill-primary',
          white: 'fill-white'
        }[this.variant]
      )}
      part="base"
    >
      ${this.shapes.includes('top') ? this.renderTopBrandshape() : null}
      ${this.shapes.includes('middle') ? this.renderMiddleBrandshape() : null}
      ${this.shapes.includes('bottom') ? this.renderBottomBrandshape() : null}
    </div>`;
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
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-brandshape': SdBrandshape;
  }
}
