import { css } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary A marker identifies a location on google map
 * @documentation https://solid.union-investment.com/[storybook-link]/components-sd-map-marker--docs
 *
 * @status stable
 * @since 2.12
 *
 * @slot - The marker's content.\
 *
 * @event sd-blur - Emitted when the map marker loses focus.
 * @event sd-focus - Emitted when the map marker is focused.
 *
 * @csspart base - The components' base wrapper.
 * @csspart marker - The markers' svg wrapper.
 * @csspart content - The container that wraps the default slot.
 * @csspart motion-wrapper - The container that wraps the motion animation.
 *
 * @cssproperty --map-marker-scaling - Scale the marker size.
 * @cssproperty --sd-map-marker-cluster--hovered-color-icon-fill - The icon fill color for map marker clusters in hovered state.
 * @cssproperty --sd-map-marker-cluster-color-icon-fill - The default icon fill color for map marker clusters.
 */
@customElement('sd-map-marker')
export default class SdMapMarker extends SolidElement {
  /** The map-marker's variant. */
  @property({ type: String, reflect: true }) variant: 'cluster' | 'main' | 'place' = 'main';

  /** The map-marker's state. */
  @property({ type: String, reflect: true }) state: 'default' | 'hover' | 'active' = 'default';

  /** The map-marker's is animated when displayed. */
  @property({ type: Boolean, reflect: true }) animated = false;

  /** Determines if the map-marker is interactive. */
  @property({ type: Boolean, reflect: true, attribute: 'not-interactive' }) notInteractive = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property({ type: String, reflect: true }) href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property({ type: String, reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';

  /**
   * Only relevant when map-marker is interactive.
   * When set, it will be used to announce the name of the map-marker to screenreaders,
   * otherwise, screenreaders will announce the content inside the default slot.
   */
  @property({ reflect: true }) label: string = '';

  private handleBlur() {
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.emit('sd-focus');
  }

  private isLink() {
    return this.href ? true : false;
  }

  /** @internal */
  readonly marker: { [key in 'cluster' | 'main' | 'place']: string } = {
    cluster: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <circle cx="25" cy="25" opacity="1" r="20" />
      </svg>`,
    main: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75">
        <path d="M51 49A29 29 0 0 0 30 0 29 29 0 0 0 9 49l21 22 21-22Z"/>
      </svg> `,
    place: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75">
        <path fill-rule="evenodd" d="M51 49A29 29 0 0 0 30 0 29 29 0 0 0 9 49l21 22 21-22Z" clip-rule="evenodd" />
      </svg>`
  };

  render() {
    const isLink = this.isLink();
    const tag = this.notInteractive ? literal`div` : isLink ? literal`a` : literal`button`;

    const marker = unsafeSVG(this.marker[this.variant]);
    const mask = `url("data:image/svg+xml;utf8,${encodeURIComponent(this.marker[this.variant]).replace(/#/g, '%23')}")`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class=${cx('relative flex justify-center', !this.notInteractive && 'group focus-visible:focus-outline')}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        role=${ifDefined(this.notInteractive || isLink ? undefined : 'button')}
        aria-label=${ifDefined(!this.notInteractive && this.label ? this.label : undefined)}
        aria-labelledby=${ifDefined(!this.notInteractive && !this.label ? 'content' : undefined)}
      >
        <div
          part="marker"
          class=${cx(
            'relative inline-flex',
            this.animated && (this.variant === 'main' || this.variant === 'place') && 'animate-bounce-once',
            this.variant === 'cluster' &&
              this.state === 'hover' &&
              'scale-110 sd-map-marker-cluster--hovered-color-icon-fill',
            this.variant === 'cluster' &&
              !this.notInteractive &&
              'transition-transform duration-fast ease-in-out hover:scale-110',
            {
              cluster: 'sd-map-marker-cluster-color-icon-fill',
              main: 'fill-accent',
              place: 'fill-white'
            }[this.variant]
          )}
        >
          <div
            id="motion-wrapper"
            part="motion-wrapper"
            class="absolute inset-0 overflow-hidden pointer-events-none"
            style="
              mask-image: ${mask};
              -webkit-mask-image: ${mask};
            ">
            <div class=${cx(
              'absolute inset-0 transition-transform ease-in-out duration-fast translate-y-full group-hover:translate-y-0 group-active:translate-y-0',
              ['hover', 'active'].includes(this.state) && '!translate-y-0'
            )}>
              <div class=${cx(
                'min-w-full min-h-full skew-y-[-11deg]',
                {
                  cluster: '',
                  main: this.state === 'active' ? 'bg-accent-700' : 'bg-accent-550 group-active:bg-accent-700',
                  place: this.state === 'active' ? 'bg-primary-200' : 'bg-primary-100 group-active:bg-primary-200'
                }[this.variant]
              )}></div>
            </div>

            ${this.variant === 'main' ? html`<div id="marker-circle" class="absolute rounded-full bg-white"></div>` : ''}
          </div>

          ${marker}

            ${
              this.variant === 'cluster'
                ? html`<div
                    id="cluster-border"
                    class=${cx(
                      'absolute inset-0 bg-primary opacity-30 rounded-full',
                      this.state === 'hover' && 'bg-primary-500'
                    )}
                  ></div>`
                : ''
            }
        </div>
        <div
          id="content"
          part="content"
          class=${cx('absolute self-center pointer-events-none', this.variant === 'cluster' && 'font-bold text-white')}
        >
          <slot></slot>
        </div>
      </${tag}>
    `;
  }

  /**
   * Inherits global stylesheet including TailwindCSS
   */
  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        display: block;
      }

      #motion-wrapper {
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-position: center;
        -webkit-mask-position: center;
        mask-size: contain;
        -webkit-mask-size: contain;
      }

      :host([variant='cluster']) [part='base'],
      svg {
        width: calc(var(--sd-spacing-12, 3rem) * var(--map-marker-scaling, 1));
      }

      :host([variant='cluster']) [part='base'] {
        height: calc(var(--sd-spacing-12, 3rem) * var(--map-marker-scaling, 1));
      }

      :host(:not([variant='cluster'])) [part='base'] {
        height: calc(var(--sd-spacing-16, 4rem) * var(--map-marker-scaling, 1));
      }

      :host([variant='cluster']) [part='content'] {
        font-size: calc(var(--sd-font-size-sm, 0.875rem) * var(--map-marker-scaling, 1));
      }

      :host([variant='place']) [part='content'] {
        @apply -mt-2;
        font-size: calc(var(--sd-font-size-3xl, 2rem) * var(--map-marker-scaling, 1));
      }

      :host([variant='cluster']) [part='motion-wrapper'] > div > div {
        background-color: rgba(var(--sd-map-marker-cluster--hovered-color-icon-fill));
      }

      :host([variant='main']) [part='marker'],
      :host([variant='place']) [part='marker'] {
        @apply drop-shadow;
      }

      :host([variant='main']) #marker-circle {
        width: calc(var(--sd-spacing-4, 1rem) * var(--map-marker-scaling, 1));
        height: calc(var(--sd-spacing-4, 1rem) * var(--map-marker-scaling, 1));
        left: calc(var(--sd-spacing-4, 1rem) * var(--map-marker-scaling, 1));
        right: calc(var(--sd-spacing-4, 1rem) * var(--map-marker-scaling, 1));
        top: calc(var(--sd-spacing-4, 1rem) * var(--map-marker-scaling, 1));
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-map-marker': SdMapMarker;
  }
}
