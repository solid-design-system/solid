import { css, html, nothing } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query, state } from 'lit/decorators.js';
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
  variant: 'white' | 'white border-neutral-400' | 'neutral-100' | 'primary' | 'primary-100' = 'white';

  /** Breakpoint where the teaser switches from `vertical` to `horizontal`. `0` is always `horizontal`, `9999` is always `vertical`. */
  @property({ reflect: true, type: Number }) breakpoint = 448;

  /** The teaser's inner padding. This is always set in `white border-neutral-400`. */
  @property({ type: Boolean, reflect: true }) inset = false;

  /** When not set, the teaser doesn't serve as a link. */
  @property() href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

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

  onCLick(e: MouseEvent) {
    this.openLink(e);
  }

  onKeydown(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      this.openLink(e);
    }
  }

  openLink(e: MouseEvent | KeyboardEvent) {
    if (this.href) {
      const isAnchorElement = e.target instanceof HTMLAnchorElement;
      const isButtonOrLink =
        e.target instanceof HTMLElement && (e.target.matches('sd-button') || e.target.matches('sd-link'));

      if (!isAnchorElement && !isButtonOrLink) {
        window.open(this.href, this.target || '_self');
      }
    }
  }

  render() {
    const inset = this.variant === 'white border-neutral-400' || this.inset;
    const role = this.href ? 'link' : '';
    const tabindex = this.href ? '0' : '';

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
            'white border-neutral-400': 'bg-white border border-neutral-400',
            'neutral-100': 'bg-neutral-100',
            primary: 'bg-primary text-white',
            'primary-100': 'bg-primary-100'
          }[this.variant],
          this._orientation === 'vertical' && 'flex-col',
          this._orientation === 'horizontal' && 'flex-row gap-8',
          this._orientation === 'horizontal' && inset && 'py-8 px-10',
          this.href && 'cursor-pointer'
        )}
        part="base"
        @click="${this.onCLick}"
        @keydown="${this.onKeydown}"
        role="${role || nothing}"
        tabindex="${tabindex || nothing}"
      >
        <div
          style=${this._orientation === 'horizontal' ? `width: var(--distribution-media, 100%);` : ''}
          class=${cx(
            !inset && this._orientation === 'vertical' && 'mb-4',
            !slots['teaser-has-media'] && 'hidden',
            this.variant === 'white border-neutral-400' && this._orientation === 'vertical' && 'mx-[-1px] mt-[-1px]'
          )}
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
        @apply block;
      }

      ::slotted(*) {
        @apply m-0;
      }

      ::slotted([slot='headline']) {
        @apply font-bold !m-0 !text-lg;
      }
    `
  ];
}
