import '../accordion/accordion';
import { css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://solid.union-investment.com/[storybook-link]/accordion-group
 * @status stable
 * @since 1.1
 *
 * @dependency sd-accordion
 *
 * @slot - The default slot where `<sd-accordion>` elements are placed.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-accordion-group')
export default class SdAccordionGroup extends SolidElement {
  @queryAssignedElements({ selector: 'sd-accordion' }) _accordionsInDefaultSlot!: HTMLElement[];

  /** Closes other accordions. */
  @property({ attribute: 'close-others', type: Boolean }) closeOthers = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('sd-show', this.handleAccordionShow);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('sd-show', this.handleAccordionShow);
  }

  private handleAccordionShow = (event: Event) => {
    if (this.closeOthers) {
      this._accordionsInDefaultSlot.forEach(accordionElement => {
        // Break if accordionElement sent the event
        if (accordionElement === event.target) {
          return;
        }
        // Break if accordionElement is outside this group
        if (accordionElement.parentNode !== (event.target as HTMLUnknownElement).parentNode) {
          return;
        }
        accordionElement.removeAttribute('open');
      });
    }
  };

  render() {
    return html`
      <div part="base">
        <slot></slot>
      </div>
    `;
  }

  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        display: block;
      }
      ::slotted(sd-accordion:not(:first-of-type)) {
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
