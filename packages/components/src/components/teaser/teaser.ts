import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { PropertyValues } from 'lit';

/**
 * @summary Teasers group information into flexible containers so users can browse a collection of related items and actions.
 * @documentation https://solid.union-investment.com/[storybook-link]/teaser
 *
 * @status stable
 * @since 1.3
 * *
 * @slot - An optional main content slot.
 * @slot media - An optional media slot.
 * @slot meta - An optional meta slot.
 * @slot headline - headline slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart media - The container that wraps the media.
 * @csspart content - The container that wraps the content.
 * @csspart meta -  The container that wraps the meta.
 * @csspart headline - The container that wraps the headline.
 * @csspart main - The container that wraps the main content.
 *
 * @cssproperty --distribution-media - The distribution ratio of the media.
 * @cssproperty --distribution-content - The distribution ratio of the content.
 */

@customElement('sd-teaser')
export default class SdTeaser extends SolidElement {
  @property({ reflect: true })
  variant: 'white' | 'white border-neutral-300' | 'neutral-100' | 'primary' | 'primary-100' = 'white';

  /** Breakpoint where the teaser switches from `vertical` to `horizontal`. `0` is always `horizontal`, `9999` is always `vertical`. */
  @property({ reflect: true, type: Number }) breakpoint = 448;

  /** The teaser's inner padding. This is always set in `white border-neutral-300`. */
  @property({ type: Boolean, reflect: true }) inset = false;

  @query('[part="base"]') teaser: HTMLElement;

  @state() private _orientation: 'vertical' | 'horizontal';

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'media', 'meta', 'headline');

  private resizeObserver: ResizeObserver;

  connectedCallback() {
    super.connectedCallback();
    if (this.breakpoint === 0) {
      this._orientation = 'horizontal';
    } else if (this.breakpoint === 9999) {
      this._orientation = 'vertical';
    } else if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => this.updateOrientation());
      this.resizeObserver.observe(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has('breakpoint')) {
      this.updateOrientation();
    }
  }

  updateOrientation() {
    this._orientation = this.offsetWidth >= this.breakpoint ? 'horizontal' : 'vertical';
  }

  render() {
    const inset = this.variant === 'white border-neutral-300' || this.inset;

    const slots = {
      'teaser-has-default': this.hasSlotController.test('[default]'),
      'teaser-has-media': this.hasSlotController.test('media'),
      'teaser-has-meta': this.hasSlotController.test('meta'),
      'teaser-has-headline': this.hasSlotController.test('headline')
    };

    return html`
      <div
        class=${cx(
          'flex',
          {
            white: 'bg-white',
            'white border-neutral-300': 'bg-white border border-neutral-300',
            'neutral-100': 'bg-neutral-100',
            primary: 'bg-primary text-white',
            'primary-100': 'bg-primary-100'
          }[this.variant],
          this._orientation === 'vertical' && 'flex-col',
          this._orientation === 'horizontal' && 'flex-row gap-8',
          this._orientation === 'horizontal' && inset && 'py-8 px-10'
        )}
        part="base"
      >
        <div
          style=${this._orientation === 'horizontal' ? `width: var(--distribution-media, 100%);` : ''}
          class=${cx(!inset && this._orientation === 'vertical' && 'mb-4', !slots['teaser-has-media'] && 'hidden')}
          part="media"
        >
          <slot name="media"></slot>
        </div>

        <div
          style=${this._orientation === 'horizontal'
            ? `width: var(--distribution-content, 100%); ${
                inset ? 'width: var(--distribution-content, calc(100% - 2rem));' : ''
              }`
            : ''}
          class=${cx(
            'flex flex-col text-left',
            this._orientation === 'horizontal' && `flex flex-col`,
            this._orientation === 'vertical' && inset && 'm-4'
          )}
          part="content"
        >
          <div part="meta" class=${cx('gap-2 mb-4', !slots['teaser-has-meta'] && 'hidden')}>
            <slot name="meta"></slot>
          </div>

          <div
            part="headline"
            class=${cx('text-lg font-bold m-0', this.variant === 'primary' ? 'text-white' : 'text-black')}
          >
            <slot name="headline">Always insert one semantically correct heading element here (e. g. &lt;h2&gt;)</slot>
          </div>

          <div part="main" class=${cx(!slots['teaser-has-default'] && 'hidden')}>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  static styles = [
    SolidElement.styles,
    css`
      :host {
        display: block;
      }

      ::slotted(*) {
        margin: 0;
      }

      ::slotted([slot='headline']) {
        font-size: var(--sd-font-size-lg, 1.25rem) !important;
        font-weight: bold;
        margin: 0 !important;
      }
    `
  ];
}
