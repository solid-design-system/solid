import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
/**
 * @summary Teasers group information into flexible containers so users can browse a collection of related items and actions.
 * @documentation https://solid-design-system.fe.union-investment.de/x.x.x/storybook/?path=/docs/components-sd-teaser-media--docs
 *
 * @status stable
 * @since 2.4.0
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

  render() {
    const slots = {
      'teaser-has-default': this.hasSlotController.test('[default]'),
      'teaser-has-media': this.hasSlotController.test('media'),
      'teaser-has-meta': this.hasSlotController.test('meta'),
      'teaser-has-headline': this.hasSlotController.test('headline'),
      'teaser-has-expandable': this.hasSlotController.test('expandable')
    };

    return html`
      <div class="relative flex flex-col group" part="base">
        <div class=${cx('mb-4', !slots['teaser-has-media'] && 'hidden')} part="media">
          <slot name="media"></slot>
        </div>

        <!-- opacity should be replaced with a opacity token from the design system https://github.com/solid-design-system/solid/issues/731 -->
        <div class="absolute flex flex-col justify-end h-full w-full pb-4 ">
          <div
            class=${cx(
              'flex-1',
              this.variant === 'gradient-white' && 'bg-gradient-to-t from-white/[.8] to-60%',
              this.variant === 'gradient-dark' && 'bg-gradient-to-t from-primary-800/[.6] to-60%'
            )}
          ></div>
          <div
            class=${cx(
              {
                white: 'bg-white/[.8] group-hover:bg-white/90',
                'neutral-100': 'bg-neutral-100/[.8] group-hover:bg-neutral-100/90',
                primary: 'bg-primary/[.8] text-white group-hover:bg-primary/90',
                'primary-100': 'bg-primary-100/[.8] group-hover:bg-primary-100/90',
                'gradient-white': 'bg-gradient-to-t from-white/90 to-white/[.8]',
                'gradient-dark': 'bg-gradient-to-t from-primary-800/75 to-primary-800/[.6]  text-white'
              }[this.variant]
            )}
          >
            <div class="flex-col text-left p-4" part="content">
              <div part="meta" class=${cx('gap-2 mb-4', !slots['teaser-has-meta'] && 'hidden')}>
                <slot name="meta"></slot>
              </div>

              <div part="headline" class="text-lg font-bold m-0">
                <slot name="headline"
                  >Always insert one semantically correct heading element here (e. g. &lt;h2&gt;)</slot
                >
              </div>

              <div
                class=${cx(
                  'hidden',
                  slots['teaser-has-expandable'] &&
                    'h-[0px] invisible opacity-0 md:[transition:_height_0.2s_linear,opacity_0.1s_linear_0.1s] md:block md:group-hover:h-auto md:group-hover:my-4 md:group-hover:opacity-[100%] md:group-hover:visible'
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
