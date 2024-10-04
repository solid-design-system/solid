import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query } from 'lit/decorators.js';
import componentStyles from 'src/styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary A link component.
 * @documentation https://solid.union-investment.com/[storybook-link]/link
 * @status stable
 * @since 1.0.0
 *
 * @event sd-blur - Emitted when the link loses focus.
 * @event sd-focus - Emitted when the link gains focus.
 *
 * @slot - The default slot.
 * @slot icon-left - The icon to display on the left side of the link.
 * @slot icon-right - The icon to display on the right side of the link.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon-left - The container that wraps the left icon area.
 * @csspart label - The link's label.
 * @csspart icon-right - The container that wraps the right icon area.
 */
@customElement('sd-link')
export default class SdLink extends SolidElement {
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'icon-left', 'icon-right');

  @query('a') button: HTMLButtonElement | HTMLLinkElement;

  /** Control the layout of icon and text within the component and the component's positioning. */
  @property({ type: Boolean, reflect: true }) standalone = false;

  /** The link's size. */
  @property({ reflect: true }) size: 'inherit' | 'lg' | 'sm' = 'inherit';

  /** Inverts the link. */
  @property({ type: Boolean, reflect: true }) inverted = false;

  /** When not set, the link will render as disabled. */
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

  /** Sets focus on the button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }

  render() {
    const slots = {
      label: this.hasSlotController.test('[default]'),
      'icon-left': this.hasSlotController.test('icon-left'),
      'icon-right': this.hasSlotController.test('icon-right')
    };

    return html`<a
      part="base"
      class=${cx(
        'inline',
        this.href ? 'cursor-pointer' : '',
        {
          sm: 'text-sm',
          lg: 'text-base',
          inherit: ''
        }[this.size],
        {
          disabled: !this.inverted ? 'text-neutral-500' : 'text-neutral-600',
          enabled: !this.inverted
            ? ` text-primary hover:text-primary-500 active:text-primary-800 focus-visible:focus-outline`
            : `text-white hover:text-primary-200 active:text-primary-400 focus-visible:focus-outline-inverted`
        }[this.href ? 'enabled' : 'disabled'],
        this.standalone && 'flex items-start'
      )}
      href=${ifDefined(this.href || undefined)}
      target=${ifDefined(this.target || undefined)}
      download=${ifDefined(this.download)}
      rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
      aria-disabled=${!this.href ? 'true' : 'false'}
      tabindex=${!this.href ? '-1' : '0'}
      @blur=${this.handleBlur}
      @focus=${this.handleFocus}
      ><slot
        name="icon-left"
        part="icon-left"
        class=${cx(
          'inline',
          slots['icon-left'] &&
            (!this.standalone
              ? 'mr-[0.25em]' // in inline text the icon should be closer to link text to avoid visual gaps
              : {
                  sm: 'mr-1',
                  lg: 'mr-2',
                  inherit: 'mr-[0.5em]'
                }[this.size])
        )}
      ></slot
      ><span part="label" class="inline underline underline-offset-2"><slot></slot></span
      ><slot
        name="icon-right"
        part="icon-right"
        class=${cx(
          'inline',
          slots['icon-right'] &&
            (!this.standalone
              ? 'ml-[0.25em]' // in inline text the icon should be closer to link text to avoid visual gaps
              : {
                  sm: 'ml-1',
                  lg: 'ml-2',
                  inherit: 'ml-[0.5em]'
                }[this.size])
        )}
      ></slot
    ></a>`;
  }

  /** Inherits Tailwindclasses and includes additional styling. */
  static styles = [
    componentStyles,
    css`
      ::slotted(sd-icon) {
        font-size: 1.25em;
        margin-bottom: -0.25em;
      }

      /* In standalone mode, the icon sizes are fixed when a size is set */
      :host([size='sm'][standalone]) ::slotted(sd-icon) {
        @apply text-base;
      }

      :host([size='lg'][standalone]) ::slotted(sd-icon) {
        @apply text-xl;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-link': SdLink;
  }
}
