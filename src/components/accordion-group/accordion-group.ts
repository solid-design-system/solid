import '../accordion/accordion';
import { css, html } from 'lit';
import { customElement, property, queryAll } from 'lit/decorators.js';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://solid.union-investment.com/[storybook-link]/accordion-group
 * @status experimental
 * @since 2.0
 *
 * @dependency sd-accordion
 *
 * @slot - The default slot where `<sd-accordion>` elements are placed.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-accordion-group')
export default class SdAccordionGroup extends SolidElement {
  @queryAll('sd-accordion') accordions: HTMLElement[];

  /** Closes other accordions. */
  @property({ type: Boolean, reflect: true }) closeOthers = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sd-show', this.handleAccordionShow);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sd-show', this.handleAccordionShow);
  }

  // eslint-disable-next-line
  private handleAccordionShow = (event: any) => {
    if (this.closeOthers) {
      const slotElement = this.shadowRoot?.querySelector('slot');
      const slottedElements = slotElement?.assignedElements() ?? [];
      // eslint-disable-next-line
      const parentElement = event.target?.parentNode;
      slottedElements.forEach(a => {
        // eslint-disable-next-line
        if (a !== event.target && a.parentNode === parentElement) {
          a.removeAttribute('open');
        }
      });
    }
  };

  render() {
    return html`
      <div class="sd-accordion-group">
        <slot closeOthers></slot>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: block;
      }
      :host ::slotted(sd-accordion) {
        margin-top: -1px;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-accordion-group': SdAccordionGroup;
  }
}
