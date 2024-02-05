import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { PropertyValues } from 'lit';
/**
 * @summary Teasers group information into flexible containers so users can browse a collection of related items and actions.
 * @documentation https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/components-sd-teaser-media--docs
 *
 * @status stable
 * @since 2.1
 * *
 * @slot - An optional main content slot.
 * @slot media - An optional media slot.
 * @slot meta - An optional meta slot.
 * @slot expandable - An optional expandable slot, <strong>not</strong> shown on small devices.
 * @slot headline - headline slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart media - The container that wraps the media.
 * @csspart content - The container that wraps the content.
 * @csspart meta -  The container that wraps the meta.
 * @csspart headline - The container that wraps the headline.
 * @csspart expandable - The container that wraps the expandable.
 * @csspart main - The container that wraps the main content.
 */

@customElement('sd-teaser-media')
export default class SdTeaserMedia extends SolidElement {
  @property({ reflect: true })
  variant: 'white' | 'neutral-100' | 'primary' | 'primary-100' | 'gradient-white' | 'gradient-dark' = 'white';

  @query('[part="base"]') teaserMedia: HTMLElement;

  private readonly hasSlotController = new HasSlotController(
    this,
    '[default]',
    'media',
    'meta',
    'headline',
    'expandable'
  );

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
      if (this.hasSlotController.test('expandable')) {
        const hiddenDiv = this.shadowRoot.getElementById('expandable')!;
        hiddenDiv.setAttribute(
          'style',
          'height: auto; visibility: visible; opacity: 1; margin-top: 16px; margin-bottom: 16px;'
        );
      }
      if (!this.variant.startsWith('gradient')) {
        const hiddenDiv = this.shadowRoot.getElementById('content-wrapper')!;
        hiddenDiv.setAttribute('style', 'opacity: 90%');
      }
    }
  }

  onHoverEnd() {
    if (this.shadowRoot) {
      if (this.hasSlotController.test('expandable')) {
        const hiddenDiv = this.shadowRoot.getElementById('expandable')!;
        hiddenDiv.setAttribute(
          'style',
          'height: 0; visibility: invisible; opacity: 0; margin-top: 0; margin-bottom: 0;'
        );
      }

      if (!this.variant.startsWith('gradient')) {
        const hiddenDiv = this.shadowRoot.getElementById('content-wrapper')!;
        hiddenDiv.setAttribute('style', 'opacity: 80%');
      }
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
        class="relative flex flex-col max-w-[862px] overflow-hidden"
        part="base"
        @mouseenter=${this.onHover}
        @mouseleave=${this.onHoverEnd}
      >
        <div class=${cx('mb-4', !slots['teaser-has-media'] && 'hidden')} part="media">
          <slot name="media"></slot>
        </div>

        <div class="absolute flex flex-col justify-end h-full w-full pb-4 ">
          <div
            class=${cx(
              'flex-1 opacity-[80%]',
              this.variant === 'gradient-white' && 'bg-gradient-to-t from-white/75 to-55%',
              this.variant === 'gradient-dark' && 'bg-gradient-to-t from-primary-800/75 to-55%'
            )}
          ></div>
          <div
            id="content-wrapper"
            class=${cx(
              'opacity-[80%]',
              {
                white: 'bg-white',
                'neutral-100': 'bg-neutral-100',
                primary: 'bg-primary text-white',
                'primary-100': 'bg-primary-100',
                'gradient-white': 'bg-white/75',
                'gradient-dark': 'bg-primary-800/75 text-white'
              }[this.variant]
            )}
          >
            <div class=${cx('flex-col text-left p-4')} part="content">
              <div part="meta" class=${cx('gap-2 mb-4', !slots['teaser-has-meta'] && 'hidden')}>
                <slot name="meta"></slot>
              </div>

              <div part="headline" class=${cx('text-lg font-bold m-0')}>
                <slot name="headline"
                  >Always insert one semantically correct heading element here (e. g. &lt;h2&gt;)</slot
                >
              </div>

              <div
                id="expandable"
                class=${cx(
                  slots['teaser-has-default'] &&
                    'h-[0px] invisible opacity-0 hidden md:[transition:_height_0.2s_linear,opacity_0.1s_linear_0.1s] md:block',
                  !slots['teaser-has-default'] && 'hidden'
                )}
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
