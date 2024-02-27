import '../icon/icon';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from '../../../src/internal/register-custom-element';
import {property, query, state } from 'lit/decorators.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import SolidElement from '../../internal/solid-element';
import styles from './icon-button.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://solid.union-investment.com/[storybook-link]/icon-button
 * @status stable
 * @since 1.0
 *
 * @dependency sd-icon
 *
 * @event sd-blur - Emitted when the icon button loses focus.
 * @event sd-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('sd-icon-button')
export default class SdIconButton extends SolidElement {
  static styles: CSSResultGroup = styles;

  @query('.icon-button') button: HTMLButtonElement | HTMLLinkElement;

  /** @internal */
  @state() hasFocus = false;

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  @property() name?: string;

  /** The name of a registered custom icon library. */
  @property() library?: string;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   */
  @property() src?: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property() download?: string;

  /**
   * A description that gets read by assistive devices. For optimal accessibility, you should always include a label
   * that describes what the icon button does.
   */
  @property() label = '';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the icon button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }

  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        part="base"
        class=${classMap({
      'icon-button': true,
      'icon-button--disabled': !isLink && this.disabled,
      'icon-button--focused': this.hasFocus
    })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : 'button')}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label="${this.label}"
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sd-icon
          class="icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></sd-icon>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-icon-button': SdIconButton;
  }
}
