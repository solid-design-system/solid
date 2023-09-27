import { customElement } from '../../../src/internal/register-custom-element';
import {property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import SolidElement from '../../internal/solid-element';
import styles from './button-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://solid.union-investment.com/[storybook-link]/button-group
 * @status stable
 * @since 1.0
 *
 * @slot - One or more `<sd-button>` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-button-group')
export default class SdButtonGroup extends SolidElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  @state() disableRole = false;

  /**
   * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   */
  @property() label = '';

  private handleFocus(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('sd-button-group__button--focus');
  }

  private handleBlur(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('sd-button-group__button--focus');
  }

  private handleMouseOver(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('sd-button-group__button--hover');
  }

  private handleMouseOut(event: CustomEvent) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('sd-button-group__button--hover');
  }

  private handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })] as HTMLElement[];

    slottedElements.forEach(el => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);

      if (button !== null) {
        button.classList.add('sd-button-group__button');
        button.classList.toggle('sd-button-group__button--first', index === 0);
        button.classList.toggle('sd-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
        button.classList.toggle('sd-button-group__button--last', index === slottedElements.length - 1);
        button.classList.toggle('sd-button-group__button--radio', button.tagName.toLowerCase() === 'sd-radio-button');
      }
    });
  }

  render() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole ? 'presentation' : 'group'}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
  }
}

function findButton(el: HTMLElement) {
  const selector = 'sd-button, sd-radio-button';

  // The button could be the target element or a child of it (e.g. a dropdown or tooltip anchor)
  return el.closest(selector) ?? el.querySelector(selector);
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-button-group': SdButtonGroup;
  }
}
