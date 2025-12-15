import '../icon/icon'; // Ensure this import is present for sd-icon to work
import { css, html } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { HasSlotController } from '../../internal/slot';
import { property, query } from 'lit/decorators.js';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
/**
 * @summary Teasers group information into flexible containers so users can browse a collection of related items and actions.
 * @documentation https://solid-design-system.fe.union-investment.de/docs/?path=/docs/components-sd-teaser-media--docs
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
 *
 * @cssproperty --sd-teaser-media--neutral-100--hover-color-background - The background color for neutral‑100 teaser media in hover state.
 * @cssproperty --sd-teaser-media--neutral-100-color-background - The default background color for neutral‑100 teaser media.
 * @cssproperty --sd-teaser-media--primary-100--hover-color-background - The background color for primary‑100 teaser media in hover state.
 * @cssproperty --sd-teaser-media--primary-100-color-background - The default background color for primary‑100 teaser media.
 */

@customElement('sd-teaser-media')
export default class SdTeaserMedia extends SolidElement {
  /** Variant of the teaser */
  @property({ type: String, reflect: true }) variant:
    | 'white'
    | 'neutral-100'
    | 'primary'
    | 'primary-100'
    | 'gradient-light'
    | 'gradient-dark' = 'white';

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
        <div class="absolute flex flex-col justify-end h-full w-full pb-4">
          <div
            class=${cx(
              'flex-1',
              this.variant === 'gradient-light' && 'bg-gradient-to-t from-white/[.8] to-60%',
              this.variant === 'gradient-dark' && 'bg-gradient-to-t from-primary-800/[.8] to-60%'
            )}
          ></div>
          <div class=${cx('relative', ['primary', 'gradient-dark'].includes(this.variant) && 'text-white')}>
            <div
              class=${cx(
                'absolute inset-0',
                {
                  white: 'bg-white/[.8] group-hover:bg-white/90',
                  'neutral-100':
                    'sd-teaser-media--neutral-100-color-background group-hover:sd-teaser-media--neutral-100--hover-color-background',
                  primary: 'bg-primary/[.8] text-white group-hover:bg-primary/90',
                  'primary-100':
                    'sd-teaser-media--primary-100-color-background group-hover:sd-teaser-media--primary-100--hover-color-background',
                  'gradient-light': 'bg-gradient-to-t from-white/90 to-white/[.8]',
                  'gradient-dark': 'bg-gradient-to-t from-primary-800/90 to-primary-800/[.8]'
                }[this.variant]
              )}
            ></div>
            <div class="relative flex-col text-left p-4" part="content">
              <div class="flex flex-col">
                <div part="headline" class="text-lg font-bold m-0 order-2">
                  <slot name="headline">
                    Always insert one semantically correct heading element here (e. g. &lt;h2&gt;)
                  </slot>
                </div>
                <div part="meta" class=${cx('gap-2 mb-4 order-1', !slots['teaser-has-meta'] && 'hidden')}>
                  <slot name="meta"></slot>
                </div>
              </div>

              <div
                class=${cx(
                  'hidden',
                  slots['teaser-has-expandable'] &&
                    'h-[0px] invisible opacity-0 md:[transition:_height_var(--sd-duration-fast)_linear,opacity_var(--sd-duration-fast)_linear_var(--sd-duration-fast)] md:block md:group-hover:h-auto **md:group-hover:my-2** md:group-hover:opacity-[100%] md:group-hover:visible'
                )}
                part="expandable"
                aria-hidden="true"
              >
                <slot name="expandable"></slot>
              </div>

              ${slots['teaser-has-expandable']
                ? html`
                    <div>
                      <sd-icon
                        class="inline-block group-hover:hidden transition-transform w-6 h-6"
                        library="_internal"
                        name="chevron-down"
                      ></sd-icon>
                      <sd-icon
                        class="hidden group-hover:inline-block transition-transform w-6 h-6"
                        library="_internal"
                        name="chevron-up"
                      ></sd-icon>
                    </div>
                  `
                : null}

              <div part="main" class=${cx(!slots['teaser-has-default'] && 'hidden')}>
                <slot></slot>
              </div>
            </div>
          </div>
        </div>

        <div class=${cx('mb-4 -z-10', !slots['teaser-has-media'] && 'hidden')} part="media">
          <slot name="media"></slot>
        </div>
      </div>
    `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply block;
      }

      ::slotted(*) {
        @apply m-0;
      }

      :host([variant='white']) .background:focus-within {
        @apply bg-white/90;
      }

      :host([variant='neutral-100']) .background:focus-within {
        @apply bg-neutral-100/90;
      }

      :host([variant='primary']) .background:focus-within {
        @apply bg-primary/90;
      }

      :host([variant='primary-100']) .background:focus-within {
        @apply bg-primary-100/90;
      }

      /**
       * Dev-note: In some components, css properties need to be assigned
       * to specific variables so we keep consistency as in Figma.
       * 
       * For more details, see the 'Consistency with Figma' section in the **CONTRIBUTING.md**.
       */
      :host([variant='gradient-light']) .bg-gradient-to-t {
        --sd-color-background-white: var(--sd-informational-gradient--white-color-background, var(--sd-color-white));
      }

      :host([variant='gradient-dark']) .bg-gradient-to-t {
        --sd-color-background-primary-800: var(
          --sd-informational-gradient--primary-800-color-background,
          var(--sd-color-primary-800)
        );
      }
    `
  ];
}
