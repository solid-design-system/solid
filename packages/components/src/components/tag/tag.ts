import { css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://solid.union-investment.com/[storybook-link]/tag
 * @status stable
 * @since 1.0
 *
 * @slot - The tag's content.
 *
 * @event sd-blur - Emitted when the tag loses focus.
 * @event sd-focus - Emitted when the tag gains focus.
 * @event sd-remove - Emitted when the tag is clicked in the filtered state.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 */
@customElement('sd-tag')
export default class SdTag extends SolidElement {
  @query('a, button') button: HTMLButtonElement | HTMLLinkElement;

  /** The tag's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) filtered = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private handleRemoveClick() {
    this.emit('sl-remove');
  }

  private isLink() {
    return this.href ? true : false;
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;
    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        href=${ifDefined(isLink ? this.href : undefined)}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleRemoveClick}
        class=${cx(
          'inline-flex border rounded-full items-center group',
          {
            /* sizes, fonts */
            lg: 'px-4 py-2 text-base gap-2',
            sm: 'px-3 py-[5px] text-sm gap-2'
          }[this.size],
          this.selected && !this.filtered
            ? `bg-primary text-white 
            hover:bg-primary-500 
            disabled:bg-neutral-500`
            : `bg-white text-primary 
            hover:border-primary-500 hover:bg-neutral-100 hover:text-primary-500
            disabled:border-neutral-500 disabled:text-neutral-500`
        )}
      >
        <slot part="content"></slot>
        <div part="cross" class=${cx(
          'relative flex flex-col justify-center',
          {
            lg: 'h-4 w-4',
            sm: 'h-3 w-3'
          }[this.size],
          !this.filtered && 'hidden'
        )}>
          <div class="absolute w-full h-[1px] bg-primary group-hover:bg-primary-500 group-disabled:bg-neutral-500 -rotate-45"></div>
          <div class="absolute w-full h-[1px] bg-primary group-hover:bg-primary-500 group-disabled:bg-neutral-500 rotate-45"></div>
        </div>
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
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
