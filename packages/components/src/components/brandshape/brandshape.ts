import { css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { TemplateResult } from 'lit-html';

/**
 * @summary The Brandshape highlights a piece of content.
 * @documentation https://solid.union-investment.com/[storybook-brandshape]/brandshape
 * @status
 * @since
 *
 * @slot - The content inside the brandshape.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content-middle - Middle content wrapper.
 * @csspart content-top - Top content wrapper.
 * @csspart shape-top - Top shape SVG path.
 * @csspart shape-bottom - Bottom shape SVG path.
 */
@customElement('sd-brandshape')
export default class SdBrandshape extends SolidElement {
  @query('.container') containerElem: HTMLElement;

  /** The brandshape's theme variant. */
  @property({ type: String }) variant: 'neutral-100' | 'primary' | 'white' = 'primary';

  /** Defines which shapes of the brandshape should be displayed. */
  @property({ type: Array }) shapes: ('top' | 'middle' | 'bottom')[] = ['top', 'middle', 'bottom'];

  @state() private componentBreakpoint: 0 | 560 = 0;

  private resizeObserver: ResizeObserver;

  private get topSvg(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 958 166">
      <path
        part="shape-top"
        class=${this.svgClasses()}
        d="M836.828 1.894.001 164.785V168h958v-66.312c0-6.524-.628-13.033-1.876-19.436-10.74-55.114-64.151-91.092-119.297-80.358Z"
      />
    </svg>`;
  }

  private get bottomSvg(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 958 168">
      <path
        part="shape-bottom"
        class=${this.svgClasses()}
        d="M121.173 166.106 958 3.216V0H0v66.312c0 6.524.628 13.033 1.876 19.436 10.74 55.114 64.151 91.092 119.297 80.358Z"
      />
    </svg>`;
  }

  private svgClasses(): string {
    return cx(
      {
        'neutral-100': 'fill-neutral-100',
        primary: 'fill-primary',
        white: 'fill-white'
      }[this.variant]
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.componentBreakpoint = this.containerElem.clientWidth >= 560 ? 560 : 0;
    });

    this.updateComplete.then(() => {
      this.resizeObserver.observe(this.containerElem);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.containerElem);
  }

  private renderTopBrandshape(): TemplateResult {
    return this.shapes.length === 1
      ? html` <div class="relative">
          ${this.topSvg}
          <div part="content-top" class="absolute bottom-0 right-0 flex items-end w-2/5 h-2/3 px-6 py-4">
            <slot></slot>
          </div>
        </div>`
      : this.topSvg;
  }

  private renderMiddleBrandshape(): TemplateResult {
    return html`
      <div
        part="content-middle"
        class=${cx(
          {
            'neutral-100': 'bg-neutral-100',
            primary: 'bg-primary',
            white: 'bg-white'
          }[this.variant],
          { 0: 'px-6 py-4', 560: 'px-10 py-8' }[this.componentBreakpoint],
          'w-full block'
        )}
      >
        <slot></slot>
      </div>
    `;
  }

  private renderBottomBrandshape(): TemplateResult {
    return this.bottomSvg;
  }

  render() {
    return html`<div class="container" part="base">
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
