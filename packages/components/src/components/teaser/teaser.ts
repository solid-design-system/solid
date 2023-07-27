import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';

/**
 * @summary Teasers group information into flexible containers so users can browse a collection of related items and actions.
 * @documentation https://solid.union-investment.com/[storybook-link]/teaser
 *
 * @status stable
 * @since 1.2
 * *
 * @slot - An optional main content slot.
 * @slot media - An optional media slot.
 * @slot meta - An optional meta slot.
 * @slot headline - headline slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart media - The container that wraps the media.
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

  /** The teaser's orientation */
  @property({ reflect: true })
  orientation: 'responsive' | 'vertical' | 'horizontal' = 'responsive';

  /** The teaser's padding */
  @property({ type: Boolean, reflect: true }) inset = false;

  @query('[part="base"]') teaser: HTMLElement;

  @state() private currentOrientation: 'vertical' | 'horizontal';

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'media', 'meta', 'headline');

  private resizeObserver: ResizeObserver;

  connectedCallback() {
    super.connectedCallback();
    if (window.ResizeObserver) {
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

  updateOrientation() {
    if (this.orientation === 'responsive') {
      this.currentOrientation = this.offsetWidth > 448 ? 'horizontal' : 'vertical';
      this.requestUpdate();
    } else {
      this.currentOrientation = this.orientation;
    }
  }

  render() {
    if (this.variant === 'white border-neutral-300') {
      this.inset = true;
    }

    const slots = {
      default: this.hasSlotController.test('[default]'),
      media: this.hasSlotController.test('media'),
      meta: this.hasSlotController.test('meta'),
      headline: this.hasSlotController.test('headline')
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
          (this.orientation === 'vertical' || this.currentOrientation === 'vertical') && 'flex-col',
          (this.orientation === 'horizontal' || this.currentOrientation === 'horizontal') && 'flex-row gap-8',
          (this.orientation === 'horizontal' || this.currentOrientation === 'horizontal') && this.inset && 'py-8 px-10'
        )}
        part="base"
      >
        <div
          style=${this.orientation === 'horizontal' || this.currentOrientation === 'horizontal'
            ? `width: var(--distribution-media, 100%);`
            : ''}
          class=${cx(
            !this.inset && (this.orientation === 'vertical' || this.currentOrientation === 'vertical') && 'mb-4',
            !slots['media'] && 'hidden'
          )}
          part="media"
        >
          <slot name="media"></slot>
        </div>

        <div
          style=${this.orientation === 'horizontal' || this.currentOrientation === 'horizontal'
            ? `width: var(--distribution-content, 100%); ${
                this.inset ? 'width: var(--distribution-content, calc(100% - 2rem));' : ''
              }`
            : ''}
          class=${cx(
            'flex flex-col text-left',
            (this.orientation === 'horizontal' || this.currentOrientation === 'horizontal') && `flex flex-col`,
            (this.orientation === 'vertical' || this.currentOrientation === 'vertical') && this.inset && 'm-4'
          )}
          id="content"
        >
          <div part="meta" class=${cx('gap-2 mb-4', !slots['meta'] && 'hidden')}>
            <slot name="meta"></slot>
          </div>

          <div
            part="headline"
            class=${cx(
              'text-lg font-bold mb-1',
              this.variant === 'primary' ? 'text-white' : 'text-black',
              !slots['headline'] && 'hidden'
            )}
          >
            <slot name="headline"></slot>
          </div>

          <div part="main" class=${cx(!slots['default'] && 'hidden')}>
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
    `
  ];
}
