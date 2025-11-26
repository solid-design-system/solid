import '../icon/icon';
import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://solid.union-investment.com/[storybook-link]/tag
 * @status stable
 * @since 1.10
 *
 * @dependency sd-icon
 *
 * @slot - The tag's content.
 * @slot removable-indicator - The tag's removability indicator.
 *
 * @event sd-blur - Emitted when the tag loses focus.
 * @event sd-focus - Emitted when the tag gains focus.
 * @event sd-remove - Emitted when the remove button is activated.
 * @event sd-hide - Emitted when the hide method is triggered.
 * @event sd-after-hide - Emitted after the tag is hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 * @csspart removable-indicator - The tag's removability indicator.
 *
 * @cssproperty --sd-tag--selected--default-color-background - The default background color for selected tags.
 * @cssproperty --sd-tag--selected--default-color-text - The default text color for selected tags.
 */
@customElement('sd-tag')
export default class SdTag extends SolidElement {
  private readonly localize = new LocalizeController(this);

  @query('a, button, div') tag: HTMLButtonElement | HTMLLinkElement | HTMLDivElement;

  /** The tag's size. */
  @property({ type: String, reflect: true }) size: 'lg' | 'sm' = 'lg';

  /** Displays the tag in a selected state. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Defines the tag as toggleable, adding the `aria-pressed` attribute to indicate its selected state */
  @property({ type: Boolean, reflect: true }) toggleable = false;

  /** Displays the tag with a removability indicator. */
  @property({ type: Boolean, reflect: true }) removable = false;

  /** Displays the tag in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property({ type: String, reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  @property({ reflect: true }) download?: string;

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private handleRemove() {
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

  /** Visually hides the tag */
  public async hide() {
    this.emit('sd-hide');

    this.style.opacity = '0';
    await new Promise(resolve => setTimeout(resolve, this.token('--sd-duration-fast', 150)));
    this.hidden = true;

    this.emit('sd-after-hide');
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : this.removable ? literal`div` : literal`button`;

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
        aria-labelledby="content"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-pressed=${ifDefined(this.toggleable ? this.selected : undefined)}
        tabindex=${this.disabled || this.removable ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        class=${cx(
          /* basic styles of the wrapper */
          'inline-flex border box-border sd-tag-border-radius items-center leading-none whitespace-nowrap transition-colors duration-fast ease-in-out focus-visible:focus-outline',
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
            ? cx(
                'border-primary text-primary disabled:border-neutral-500 disabled:text-neutral-500',
                !this.removable
                  ? 'hover:border-primary-500 hover:text-primary-500 hover:sd-tag--default--hover-color-background'
                  : 'has-[button:hover]:border-primary-500 has-[button:hover]:text-primary-500'
              )
            : 'sd-tag--selected-border-width sd-tag--selected--default-color-background sd-tag--selected--default-color-border sd-tag--selected--default-color-text hover:sd-tag--selected--hover-color-background hover:sd-tag--selected--hover-color-border hover:sd-tag--selected--hover-color-text disabled:bg-neutral-500 disabled:border-neutral-500',
          this.disabled && !isLink && 'cursor-not-allowed'
        )}
      >
        <slot id="content" part='content'></slot>
        ${
          this.removable && !isLink
            ? html` <button class="sd-interactive flex items-center" type="button" @click=${this.handleRemove}>
                <slot part="removable-indicator" name="removable-indicator">
                  <sd-icon library="_internal" name="close" label=${this.localize.term('remove')}></sd-icon>
                </slot>
              </button>`
            : ''
        }
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-block transition-opacity duration-fast ease-in-out;
      }

      :host([size='lg'])::part(removable-indicator) {
        @apply text-base;
      }

      :host([size='sm'])::part(removable-indicator) {
        @apply text-[0.75rem];
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-tag': SdTag;
  }
}
