import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://solid.union-investment.com/[storybook-link]/tag
 * @status stable
 * @since 1.0
 *
 * @dependency sd-button
 *
 * @slot - The tag's content.
 *
 * @event sd-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 */
@customElement('sd-tag')
export default class SdTag extends SolidElement {
  private readonly localize = new LocalizeController(this);

  /** The tag's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) filtered = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private handleRemoveClick() {
    this.emit('sd-remove');
  }

  render() {
    return html`
      <span
        part="base"
        class=${cx(
          `inline-flex border rounded-full text-base`,
          /**
           * Anatomy
           * */
          {
            /* sizes, fonts */
            sm: 'px-3 py-[5px]',
            lg: 'px-4 py-2'
          }[this.size],
          !this.selected ? `bg-primary text-white` : `bg-white text-primary`
        )}
      >
        <slot part="content"></slot>
        ${this.filtered
          ? html`
              <sd-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term('remove')}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
                >x</sd-button
              >
            `
          : ''}
      </span>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: inline-block;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tag': SdTag;
  }
}
