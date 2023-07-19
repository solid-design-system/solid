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
  @property({ type: String }) variant: 'neutral-100' | 'primary' | 'border-primary' | 'border-accent';

  /** Defines the position  */
  @property({ type: String }) brandshape: 'full' | 'onlyTop';

  @state() componentBreakpoint: 0 | 768 = 0;

  private resizeObserver: ResizeObserver;

  private containerRef: Ref<HTMLInputElement> = createRef();

  connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
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

  private renderFullBrandshape(): TemplateResult {
    return html` <div>top svg</div>
      <div
        class=${cx(
          {
            'neutral-100': 'bg-neutral-100',
            primary: 'bg-primary',
            'border-primary': 'border-primary border-x-2',
            'border-accent': 'border-accent border-x-2'
          }[this.variant],
          { 0: 'px-6 py-4', 768: 'px-10 py-8' }[this.componentBreakpoint]
        )}
      >
        <slot></slot>
      </div>
      <div>bottom svg</div>`;
  }

  private renderOnlyTopBrandshape(): TemplateResult {
    return html` <div>
      top svg
      <slot></slot>
    </div>`;
  }

  render() {
    return html`<div ${ref(this.containerRef)}>
      ${this.brandshape === 'full' ? this.renderFullBrandshape() : this.renderOnlyTopBrandshape()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-brandshape': SdBrandshape;
  }
}
