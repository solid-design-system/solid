import { css, html, svg } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property } from 'lit/decorators.js';
import componentStyles from '../../styles/component.styles';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SVGTemplateResult } from 'lit';

/**
 * @summary A marker identifies a location on google map
 * @documentation https://solid.union-investment.com/[storybook-link]/components-sd-map-marker--docs
 *
 * @status stable
 * @since 2.12
 *
 * @slot - The marker's content.
 *
 * @cssproperty --map-marker-scaling - Scale the marker size.
 */
@customElement('sd-map-marker')
export default class SdMapMarker extends SolidElement {
  /** The map-marker's variant. */
  @property({ reflect: true }) variant: 'cluster' | 'main' | 'place' = 'main';

  /** The map-marker's state. */
  @property({ reflect: true }) state: 'default' | 'hover' | 'active' = 'default';

  /** The map-marker's is animated when displayed. */
  @property({ type: Boolean, reflect: true }) animated = false;

  /** @internal */
  readonly marker: { [key in 'cluster' | 'main' | 'place']: SVGTemplateResult } = {
    cluster: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <circle cx="25" cy="25" opacity="1" r="20" />
      <circle cx="25" cy="25" opacity=".3" r="25" />
    </svg>`,
    main: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75"><path d="M51 49A29 29 0 0 0 30 0 29 29 0 0 0 9 49l21 22 21-22Z"/><circle cx="30" cy="28" r="10" fill="#fff"/></svg>`,
    place: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75">
      <path fill-rule="evenodd" d="M51 49A29 29 0 0 0 30 0 29 29 0 0 0 9 49l21 22 21-22Z" clip-rule="evenodd" />
    </svg>`
  };

  render() {
    return html`
      <div part="base" tabindex="0" class="flex justify-center  focus:outline-primary focus:outline-offset-2">
        <div
          part="marker"
          class=${cx(
            'inline-flex',
            this.animated && (this.variant === 'main' || this.variant === 'place') && 'animate-bounce-once',
            this.variant === 'cluster' && this.state === 'hover' && 'scale-110 fill-primary-500',
            this.variant === 'main' && this.state === 'hover' && 'fill-accent-550',
            this.variant === 'main' && this.state === 'active' && 'fill-accent-700',
            this.variant === 'place' && this.state === 'default' && 'fill-white',
            this.variant === 'place' && this.state === 'hover' && 'fill-primary-100',
            this.variant === 'place' && this.state === 'active' && 'fill-primary-200',
            {
              cluster: 'fill-primary transition-all duration-200 ease-in-out hover:scale-110 hover:fill-primary-500',
              main: 'fill-accent *:drop-shadow-md hover:fill-accent-550 active:fill-accent-700',
              place: 'hover:fill-primary-100 *:drop-shadow-md'
            }[this.variant]
          )}
        >
          ${this.marker[this.variant]}
        </div>
        <div
          part="content"
          class=${cx('absolute self-center pointer-events-none', this.variant === 'cluster' && 'text-white')}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }

  /**
   * Inherits Tailwindclasses and includes additional styling.
   */
  static styles = [
    componentStyles,
    SolidElement.styles,
    css`
      :host {
        display: inline-block;
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
        font-size: calc(var(--sd-font-size-3xl, 2rem) * var(--map-marker-scaling, 1));
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-map-marker': SdMapMarker;
  }
}
