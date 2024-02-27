import { css } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://solid.union-investment.com/[storybook-link]/tag
 * @status stable
 * @since 1.10
 *
 * @slot - The tag's content.
 * @slot removable-indicator - The tag's removability indicator.
 *
 * @event sd-blur - Emitted when the tag loses focus.
 * @event sd-focus - Emitted when the tag gains focus.
 * @event sd-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 * @csspart removable-indicator - The tag's removability indicator.
 */
@customElement('sd-tag')
export default class SdTag extends SolidElement {
  @query('a, button') tag: HTMLButtonElement | HTMLLinkElement;

  /** The tag's size. */
  @property({ reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Displays the tag in a selected state. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Displays the tag with a removability indicator. */
  @property({ type: Boolean, reflect: true }) removable = false;

  /** Displays the tag in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  @property() download?: string;

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private handleRemoveClick() {
    this.emit('sd-remove');
  }

  private isLink() {
    return this.href ? true : false;
  }

  /** Simulates a click on the tag. */
  click() {
    this.tag.click();
  }

  /** Sets focus on the tag. */
  focus(options?: FocusOptions) {
    this.tag.focus(options);
  }

  /** Removes focus from the tag. */
  blur() {
    this.tag.blur();
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part='base'
        type=${ifDefined(isLink ? undefined : 'button')}
        href=${ifDefined(isLink ? this.href : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        class=${cx(
          /* basic styles of the wrapper */
          'inline-flex border box-border rounded-full items-center leading-none whitespace-nowrap focus-visible:focus-outline',
          {
            /* sizes, fonts */
            lg: 'h-8 text-base gap-2',
            sm: 'h-6 text-sm gap-1'
          }[this.size],
          {
            /* padding */
            lg: !this.removable ? 'px-4 py-2' : 'pl-4 pr-3 py-2',
            sm: !this.removable ? 'px-3 py-[5px]' : 'pl-3 pr-2 py-2'
          }[this.size],
          /* colors */
          !this.selected
            ? 'border-primary text-primary hover:border-primary-500 hover:bg-neutral-100 hover:text-primary-500  disabled:border-neutral-500 disabled:text-neutral-500'
            : 'bg-primary border-primary text-white hover:bg-primary-500 hover:border-primary-500 disabled:bg-neutral-500 disabled:border-neutral-500',
          this.disabled && !isLink && 'cursor-not-allowed'
        )}
      >
        <slot part='content'></slot>
        ${
          this.removable
            ? html` <slot
                part="removable-indicator"
                name="removable-indicator"
                @click=${this.handleRemoveClick}
                class=${cx(
                  {
                    /* sizes, fonts */
                    lg: 'text-base',
                    sm: 'text-[12px]'
                  }[this.size]
                )}
              >
                <sd-icon library="system" name="close" label="remove"></sd-icon>
              </slot>`
            : ''
        }
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }

  static styles = [
    SolidElement.styles,
    css`
      :host {
        @apply inline-block;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tag': SdTag;
  }
}
