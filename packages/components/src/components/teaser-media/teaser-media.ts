import { css, html } from 'lit';
import { customElement } from '../../../src/internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { PropertyValues } from 'lit';
/**
 * @summary //TODO
 * @documentation https://solid.union-investment.com/[storybook-link]/teaser-media //TODO
 *
 * @status stable
 * @since 1.3 //TODO
 * *
 * @slot - An optional main content slot.
 * @slot media - An optional media slot.
 * @slot meta - An optional meta slot.
 * @slot expandable - An optional meta slot.
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

@customElement('sd-teaser-media')
export default class SdTeaserMedia extends SolidElement {
  @property({ reflect: true })
  variant: 'white' | 'neutral-100' | 'primary' | 'primary-100' | 'gradient-white' | 'gradient-dark' = 'white';

  @query('[part="base"]') teaserMedia: HTMLElement;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'media', 'meta', 'headline', 'expandable');

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
  }

  onHover() {
    if (this.shadowRoot) {
      const hiddenDiv = this.shadowRoot.getElementById('expandable')!;
      hiddenDiv.setAttribute('style', 'height: 50px; visibility: visible; opacity: 1;');
    }
  }

  onHoverEnd() {
    if (this.shadowRoot) {
      const hiddenDiv = this.shadowRoot.getElementById('expandable')!;
      hiddenDiv.setAttribute('style', 'height: 0; visibility: invisible; opacity: 0;');
    }
  }

  render() {
    const slots = {
      'teaser-has-default': this.hasSlotController.test('[default]'),
      'teaser-has-media': this.hasSlotController.test('media'),
      'teaser-has-meta': this.hasSlotController.test('meta'),
      'teaser-has-headline': this.hasSlotController.test('headline'),
      'teaser-has-expandable': this.hasSlotController.test('expandable')
    };

    return html`
      <div
        class=${cx(
          'relative flex flex-col',
          {
            white: '',
            'neutral-100': '',
            primary: '',
            'primary-100': '',
            'gradient-white': '',
            'gradient-dark': ''
          }[this.variant]
        )}
        part="base"
        @mouseenter=${this.onHover}
        @mouseleave=${this.onHoverEnd}
      >
        <div class=${cx('mb-4', !slots['teaser-has-media'] && 'hidden')} part="media">
          <slot name="media"></slot>
        </div>

        <div class="absolute flex flex-col justify-end h-full w-full pb-4">
          <div class="flex-1 bg-gradient-to-t from-[#3730a3]/55"></div>
          <div class="bg-gradient-to-t from-[#3730a3]/75 to-[#3730a3]/55">
            <div class=${cx('flex-col text-left p-4')} part="content">
              <div part="meta" class=${cx('gap-2 mb-4', !slots['teaser-has-meta'] && 'hidden')}>
                <slot name="meta"></slot>
              </div>

              <div
                part="headline"
                class=${cx('text-lg font-bold m-0', this.variant === 'primary' ? 'text-white' : 'text-black')}
              >
                <slot name="headline"
                  >Always insert one semantically correct heading element here (e. g. &lt;h2&gt;)</slot
                >
              </div>

              <div
                id="expandable"
                class="h-[0px] invisible opacity-0 md:[transition:_height_0.2s_linear,opacity_0.2s_linear_0.1s] hidden md:block"
                part="expandable"
              >
                <slot name="expandable"></slot>
              </div>

              <div part="main" class=${cx(!slots['teaser-has-default'] && 'hidden')}>
                <slot></slot>
              </div>
            </div>
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
