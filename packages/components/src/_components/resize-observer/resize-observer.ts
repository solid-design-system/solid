import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import styles from './resize-observer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
 * @documentation https://solid.union-investment.com/[storybook-link]/resize-observer
 * @status stable
 * @since 1.0
 *
 * @slot - One or more elements to watch for resizing.
 *
 * @event {{ entries: ResizeObserverEntry[] }} sd-resize - Emitted when the element is resized.
 */
@customElement('sd-resize-observer')
export default class SdResizeObserver extends SolidElement {
  static styles: CSSResultGroup = styles;

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];

  /** Disables the observer. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      this.emit('sd-resize', { detail: { entries } });
    });

    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }

  private handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }

  private startObserver() {
    const slot = this.shadowRoot!.querySelector('slot');

    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true }) as HTMLElement[];

      // Unwatch previous elements
      this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
      this.observedElements = [];

      // Watch new elements
      elements.forEach(el => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }

  private stopObserver() {
    this.resizeObserver.disconnect();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-resize-observer': SdResizeObserver;
  }
}
