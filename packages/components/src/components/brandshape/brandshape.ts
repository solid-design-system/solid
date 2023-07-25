import { createRef, ref } from 'lit/directives/ref.js';
import { css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { debounce } from 'throttle-debounce';
import { html } from 'lit/static-html.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { Ref } from 'lit/directives/ref.js';
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
 * @csspart content-center - Center content wrapper.
 * @csspart content-top - Top content wrapper.
 *
 * @cssproperty --brandshape-opacity - The opacity of the brandshape.
 */
@customElement('sd-brandshape')
export default class SdBrandshape extends SolidElement {
  /** The brandshape's theme variant. */
  @property({ type: String }) variant: 'neutral-100' | 'primary' | 'white' = 'primary';

  /** Defines the form of the brandshape  */
  @property({ type: String }) form: 'full' | 'top' | 'topCenter' | 'centerBottom' = 'full';

  @state() private componentBreakpoint: 0 | 560 = 0;

  private resizeObserver: ResizeObserver;

  private containerRef: Ref<HTMLInputElement> = createRef();

  private get topSvg(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 958 166">
      <path
        class=${this.svgClasses()}
        d="M836.828 1.894.001 164.785V168h958v-66.312c0-6.524-.628-13.033-1.876-19.436-10.74-55.114-64.151-91.092-119.297-80.358Z"
      />
    </svg>`;
  }

  private get bottomSvg(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 958 168">
      <path
        class=${this.svgClasses()}
        d="M121.173 166.106 958 3.216V0H0v66.312c0 6.524.628 13.033 1.876 19.436 10.74 55.114 64.151 91.092 119.297 80.358Z"
      />
    </svg>`;
  }

  private svgClasses(): string {
    return cx(
      {
        'neutral-100': 'fill-neutral-100/[var(--brandshape-opacity)]',
        primary: 'fill-primary/[var(--brandshape-opacity)]',
        white: 'fill-white/[var(--brandshape-opacity)]'
      }[this.variant]
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      debounce(100, () => {
        this.componentBreakpoint = this.containerRef.value!.clientWidth >= 560 ? 560 : 0;
      })();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  firstUpdated(): void {
    this.resizeObserver.observe(this.containerRef.value!);
  }

  private renderTemplate() {
    return {
      full: [this.renderTopBrandshape(), this.renderCenterBrandshape(), this.renderBottomBrandshape()],
      topCenter: [this.renderTopBrandshape(), this.renderCenterBrandshape()],
      centerBottom: [this.renderCenterBrandshape(), this.renderBottomBrandshape()],
      top: [this.renderTopBrandshape(true)]
    };
  }

  private renderTopBrandshape(includeSlot?: boolean): TemplateResult {
    return includeSlot
      ? html` <div class="relative">
          ${this.topSvg}
          <div part="content-top" class="absolute bottom-0 right-0 flex items-end w-2/5 h-2/3 px-6 py-4">
            <slot></slot>
          </div>
        </div>`
      : this.topSvg;
  }

  private renderCenterBrandshape(): TemplateResult {
    return html`
      <div
        part="content-center"
        class=${cx(
          {
            'neutral-100': 'bg-neutral-100/[var(--brandshape-opacity)]',
            primary: 'bg-primary/[var(--brandshape-opacity)]',
            white: 'bg-white/[var(--brandshape-opacity)]'
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
    return html`<div ${ref(this.containerRef)}>${this.renderTemplate()[this.form]}</div>`;
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

        --brandshape-opacity: 1;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-brandshape': SdBrandshape;
  }
}
