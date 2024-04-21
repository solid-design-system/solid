import { css, html, svg } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { property } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SVGTemplateResult } from 'lit';

type MarkerVariant = 'cluster' | 'main' | 'place';

@customElement('sd-map-marker')
export default class SdMapMarker extends SolidElement {
  /** The map-marker's variant. */
  @property({ reflect: true }) variant: MarkerVariant = 'main';

  /** The map-marker's state. */
  @property({ reflect: true }) state: 'default' | 'hover' | 'active' = 'default';

  /** The map-marker's is animated when displayed. */
  @property({ type: Boolean, reflect: true }) animated = false;

  /** @internal */
  readonly marker: { [key in MarkerVariant]: SVGTemplateResult } = {
    cluster: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <circle cx="25" cy="25" opacity="1" r="20" />
      <circle cx="25" cy="25" opacity=".3" r="25" />
    </svg>`,
    main: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75">
      <path
        fill-rule="evenodd"
        d="M51 49A29 29 0 0 0 30 0 29 29 0 0 0 9 49l21 22 21-22ZM40 28a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        clip-rule="evenodd"
      />
    </svg>`,
    place: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 75">
      <path fill-rule="evenodd" d="M51 49A29 29 0 0 0 30 0 29 29 0 0 0 9 49l21 22 21-22Z" clip-rule="evenodd" />
    </svg>`
  };

  render() {
    return html`
      <div
        class=${cx(
          'flex justify-center w-[calc(theme(width.12)*var(--map-marker-scaling,1))]',
          {
            cluster: 'h-[calc(theme(height.12)*var(--map-marker-scaling,1))]',
            main: 'h-[calc(theme(height.16)*var(--map-marker-scaling,1))]',
            place: 'h-[calc(theme(height.16)*var(--map-marker-scaling,1))]'
          }[this.variant]
        )}
      >
        <div
          class=${cx(
            'inline-flex',
            {
              cluster: 'fill-primary transition-all duration-200 ease-in-out hover:scale-110 hover:fill-primary-500',
              main: 'fill-accent *:drop-shadow-md hover:fill-accent-550 active:fill-accent-700', //accent-700 missing in design tokens
              place: 'fill-white hover:fill-primary-100 *:drop-shadow-md'
            }[this.variant]
          )}
        >
          ${this.marker[this.variant]}
        </div>
        <div
          class=${cx(
            'absolute self-center pointer-events-none',
            {
              cluster: 'text-white text-[calc(theme(fontSize.sm)*var(--map-marker-scaling,1))]',
              main: '',
              place: 'text-[calc(theme(fontSize.3xl)*var(--map-marker-scaling,1))]'
            }[this.variant]
          )}
        >
          <!-- <slot> <sd-icon name="content/image" color="primary"></sd-icon> </slot> -->
          <slot>asdf</sd-icon> </slot>
        </div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      :host {
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-map-marker': SdMapMarker;
  }
}
