import { createRef, ref } from 'lit/directives/ref.js';
import { customElement, property, state } from 'lit/decorators.js';
import { debounce } from 'throttle-debounce';
import { html } from 'lit/static-html.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { Ref } from 'lit/directives/ref.js';
import type { TemplateResult } from 'lit-html';

/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://solid.union-investment.com/[storybook-brandshape]/brandshape
 * @status
 * @since
 *
 * @slot - The content of the brandshape.
 *
 */
@customElement('sd-brandshape')
export default class SdBrandshape extends SolidElement {
  /** The brandshape's theme variant. */
  @property({ type: String }) variant: 'neutral-100' | 'primary' | 'white' = 'primary';

  /** Defines the form of the brandshape  */
  @property({ type: String }) form: 'full' | 'top' | 'topCenter' = 'full';

  @state() componentBreakpoint: 0 | 768 = 0;

  private resizeObserver: ResizeObserver;

  private containerRef: Ref<HTMLInputElement> = createRef();

  get topSvg(): TemplateResult {
    return html`<svg viewBox="0 0 958 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class=${this.svgClasses()}
        d="M836.828 1.89416L0.00140381 164.785V166H958.001V164.785L958.001 101.688C958.001 95.1637 957.373 88.655 956.125 82.2516C945.385 27.1376 891.974 -8.84019 836.828 1.89416Z"
      />
    </svg>`;
  }

  get bottomSvg(): TemplateResult {
    return html`<svg viewBox="0 0 958 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class=${this.svgClasses()}
        d="M121.174 164.106L958.001 1.21521V0L0.00158691 0V1.21521L0.00140381 64.3121C0.00140381 70.8363 0.629395 77.345 1.87738 83.7484C12.6174 138.862 66.0284 174.84 121.174 164.106Z"
      />
    </svg>`;
  }

  private svgClasses(): string {
    return cx(
      {
        'neutral-100': 'fill-neutral-200', // replace with neutral-100
        primary: 'fill-primary',
        white: 'fill-white'
      }[this.variant]
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      // TODO: check if debounce is needed
      const debounceFunc = debounce(100, () => {
        this.componentBreakpoint = this.containerRef.value!.clientWidth > 768 ? 768 : 0;
      });

      debounceFunc();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.containerRef.value!);
  }

  firstUpdated(): void {
    this.resizeObserver.observe(this.containerRef.value!);
  }

  private renderTemplate() {
    return {
      full: [this.renderTopBrandshape(), this.renderCenterBrandshape(), this.renderBottomBrandshape()],
      topCenter: [this.renderTopBrandshape(), this.renderCenterBrandshape()],
      top: [this.renderTopBrandshape(true)]
    };
  }

  private renderTopBrandshape(includingSlot?: boolean): TemplateResult {
    return includingSlot
      ? html` <div>
          ${this.topSvg}
          <slot></slot>
        </div>`
      : this.topSvg;
  }

  private renderCenterBrandshape(): TemplateResult {
    return html`
      <div
        class=${cx(
          {
            'neutral-100': 'bg-neutral-100',
            primary: 'bg-primary',
            white: 'bg-white'
          }[this.variant],
          { 0: 'px-6 py-4', 768: 'px-10 py-8' }[this.componentBreakpoint]
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
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-brandshape': SdBrandshape;
  }
}
