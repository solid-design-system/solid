import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser');
const { overrideArgs } = storybookHelpers('sd-teaser');
const { generateTemplate } = storybookTemplate('sd-teaser');

export default {
  title: 'Components/sd-teaser',
  component: 'sd-teaser',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Main slot</div>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<div slot="media" class="slot slot--border slot--text h-12">Media slot</div>`
    },
    {
      type: 'slot',
      name: 'meta',
      value: `<div slot="meta" class="slot slot--border slot--text h-12">Meta slot</div>`
    }
  ]),
  argTypes,
  parameters
};

/**
 * This shows sd-teaser in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Teaser in all possible combinations of `variant` and `inset`. Note that in case the variant is `white border-neutral-400`, the inset is always `true`.
 */

export const VariantAndInset = {
  name: 'Variant x Inset',
  parameters: { controls: { exclude: ['variant', 'inset'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'inset' },
        y: { type: 'attribute', name: 'variant' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; height: 250px;">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'orientation',
          value: 'vertical'
        }
      ]
    });
  }
};

/**
 * Teaser in all possible combinations of `inset` and `orientation`.
 */

export const InsetAndOrientation = {
  name: 'Inset x Orientation',
  parameters: { controls: { exclude: ['inset', 'breakpoint', 'variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'breakpoint',
          values: [
            {
              value: '0',
              title: 'breakpoint = 0'
            },
            {
              value: '9999',
              title: 'breakpoint = 9999'
            }
          ]
        },
        y: { type: 'attribute', name: 'inset' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px;">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'neutral-100'
        }
      ]
    });
  }
};

/**
 * Teaser when the `meta` slot is empty in all possible combinations of `inset` and `orientation`.
 */

export const NoMeta = {
  name: 'Empty Meta Slot',
  parameters: { controls: { exclude: ['meta', 'breakpoint', 'inset', 'variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'breakpoint',
          values: [
            {
              value: '0',
              title: 'breakpoint = 0'
            },
            {
              value: '9999',
              title: 'breakpoint = 9999'
            }
          ]
        },
        y: { type: 'attribute', name: 'inset' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'slot',
          name: 'meta',
          value: '<slot name="meta"></slot>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'neutral-100'
        }
      ]
    });
  }
};

/**
 * Teaser with different `media` and `content` distribution values. In case there's a requirement to have a fixed value for the `media`, you can override the `sd-teaser::part(media)` selector by applying a `flex-shrink: 0;` style. Same can be done for the `content` part.
 */

export const DistributionRatio = {
  parameters: {
    controls: { exclude: ['--distribution-media', '--distribution-content', 'variant', 'breakpoint', 'inset'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'media and content distribution',
          values: [
            {
              title: '--distribution-media: 33%, --distribution-content: 66%',
              value: '<div style="--distribution-media: 33%; --distribution-content: 66%;">%TEMPLATE%</div>'
            },
            {
              title: '--distribution-media: 200px, sd-teaser::part(media){flex-shrink: 0;}',
              value:
                '<div style="--distribution-media: 200px;" id="fixed-ratio"><style> #fixed-ratio sd-teaser::part(media){flex-shrink: 0;} </style>%TEMPLATE%</div>'
            }
          ]
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'orientation',
          value: 'horizontal'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white border-neutral-400'
        }
      ]
    });
  }
};

/**
 * Breakpoint where the teaser switches from `vertical` to `horizontal`, `0` is always `horizontal`, `9999` is always `vertical`. When responsive, teaser changes its orientation from `horizontal` to `vertical` at a component's width of 448px.
 */

export const Breakpoint = {
  parameters: { controls: { exclude: ['breakpoint', 'variant', 'inset'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'breakpoint', values: ['0', '448', '9999'] }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white border-neutral-400'
        }
      ]
    });
  }
};

/**
 * Different `headline` sizes. It is also possible to use `sd-link` inside the `<h>` tag in the headline slot.
 */

export const Headline = {
  parameters: { controls: { exclude: ['headline', 'variant', 'inset'] } },
  render: (args: any) => {
    return html`
      ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(tag => {
        return generateTemplate({
          axis: {
            y: {
              type: 'slot',
              name: 'headline',
              values: [
                {
                  value: `<${tag} slot="headline">${tag}</${tag}>`,
                  title: tag
                },
                {
                  value: `<${tag} slot="headline"><sd-link href="#">${tag} + sd-link</sd-link></${tag}>`,
                  title: `${tag} + sd-link`
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 375px;">%TEMPLATE%</div>'
            },
            {
              type: 'attribute',
              name: 'variant',
              value: 'white border-neutral-400'
            }
          ]
        });
      })}
    `;
  }
};

/**
 * Use the 'default', 'media', 'meta' and 'headline' slots to add content to the teaser. Please use h1-h6 tags for the headline slot.
 */

export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'media', 'meta', 'headline', 'variant', 'inset'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'media', 'meta', 'headline'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background h-16"></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background h-16"></div>`,
                  title: slot
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'slot',
              name: 'media',
              value: `<img slot='media' src='./placeholders/collaboration.jpg' alt='Test' style="width:100%; height: 100%;"/>`
            },
            {
              type: 'slot',
              name: 'meta',
              value: `<slot slot='meta'>Teaser's Meta information</slot>`
            },
            {
              type: 'slot',
              name: 'default',
              value: `<slot>Teaser's Main content</slot>`
            },
            {
              type: 'slot',
              name: 'headline',
              value: `<slot slot='headline'>Teaser's Headline</slot>`
            },
            {
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 782px;">%TEMPLATE%</div>'
            },
            {
              type: 'attribute',
              name: 'variant',
              value: 'white border-neutral-400'
            }
          ]
        })
      )}
    `;
  }
};

export const Parts = {
  parameters: { controls: { exclude: ['base', 'media', 'content', 'meta', 'headline', 'main', 'variant', 'inset'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-teaser::part(...){outline: solid 2px red}',
          values: ['base', 'media', 'content', 'meta', 'headline', 'main'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-teaser::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white border-neutral-400'
        }
      ]
    });
  }
};

/**
 * ## Not clickable teaser
 *
 * This is the default state of the teaser. The teaser itself is not clickable, but links can be placed inside.
 * There is no need for any extra steps, the teaser can be used as it is.
 *
 * ```html
 * <sd-teaser>
 *   <sd-button href="#">Link</sd-button>
 * </<sd-teaser>
 * ```
 */

export const SamplesNotClickable = {
  name: 'Samples: Not clickable teaser',
  parameters: {
    controls: {
      disable: true
    },
    backgrounds: {
      default: 'white'
    }
  },
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser variant="primary" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>A SD-button</sd-button>
              <sd-button href="#" target="_blank" variant="primary" inverted>A SD-button</sd-button>
            </div>
          </div>
        </sd-teaser>
        <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>
    `;
  }
};

/**
 * ## Clickable teaser
 *
 * If the teaser itself should be clickable and there are no other links inside, then wrap the teaser with an anchor tag.
 * The button on the bottom of the teaser is not a link, it's just to make the interaction more obvious. According to
 * the HTML spec, it is not allowed to have an anchor tag inside another anchor.
 *
 * ```html
 * <a href="#">
 *    <sd-teaser class="interactive">
 *      <sd-button>More</sd-button>
 *    </<sd-teaser>
 * </a>
 * ```
 *
 * To further highlight the interactive state of the teaser, the opacity of the media part can be reduced on hover.
 *
 * ```css
 * sd-teaser.interactive:hover {
 *   &::part(media) {
 *     transition-property: opacity;
 *     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *     transition-duration: 150ms;
 *     transition-duration: 300ms;
 *     opacity: 0.5;
 *   }
 * }
 * ```
 */

export const SamplesClickable = {
  name: 'Samples: Clickable teaser',
  parameters: {
    controls: {
      disable: true
    },
    backgrounds: {
      default: 'white'
    }
  },
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }

        sd-teaser.interactive:hover {
          &::part(media) {
            transition-property: opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            transition-duration: 300ms;
            opacity: 0.5;
          }
        }
      </style>
      <div class="flex justify-between gap-8">
        <a href="#" target="_blank" class="flex-1">
          <sd-teaser variant="primary" breakpoint="9999" inset class="interactive">
            <div slot="media" class="relative">
              <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
            </div>
            <div slot="meta" class="meta-info">
              <span class="meta-info-item">01.12.2013</span>
              <span class="meta-info-item">| Author name</span>
            </div>
            <h3 slot="headline">Clickable teaser</h3>
            <div class="flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div class="flex-none">
                <sd-button variant="primary" inverted>More</sd-button>
              </div>
            </div>
          </sd-teaser>
        </a>

        <a href="#" target="_blank" class="flex-1">
          <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="interactive">
            <div slot="media" class="relative">
              <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
            </div>
            <div slot="meta" class="meta-info">
              <span class="meta-info-item">01.12.2013</span>
              <span class="meta-info-item">| Author name</span>
            </div>
            <h3 slot="headline">Clickable teaser</h3>
            <div class="flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div class="flex-none">
                <sd-button variant="primary">More</sd-button>
              </div>
            </div>
          </sd-teaser>
        </a>
      </div>
    `;
  }
};

/**
 * ## Clickable teaser with extra links
 *
 * If the teaser itself should be clickable and also provide external links inside, then add a `data-href` attribute
 * to the teaser and a `data-target` attribute. You can then use the following or similar JavaScript to handle the
 * click event.
 *
 * ```html
 * <sd-teaser class="interactive" data-href="#" data-target="_blank" tabindex="0" role="link">
 *   <sd-button href="#">Link</sd-button>
 * </<sd-teaser>
 * ```
 *
 * ```javascript
 * document.addEventListener('DOMContentLoaded', () => {
 *     function handleTeaserClick(e) {
 *         // Exclude all clickable elements inside the teaser
 *         if (e.target !== this && e.target.closest('sd-button, sd-link, a')) {
 *         return;
 *         }
 *
 *         const href = this.getAttribute('data-href');
 *         const target = this.getAttribute('data-target');
 *
 *         if (href) {
 *         const linkTarget = target === '_blank' ? '_blank' : '_self';
 *         window.open(href, linkTarget);
 *         }
 *     }
 *
 *     // Select all sd-teaser elements with a data-href attribute
 *     // and add click event listeners to these elements
 *     document.querySelectorAll('sd-teaser[data-href]').forEach(teaser => {
 *         teaser.addEventListener('click', handleTeaserClick);
 *     });
 * });
 * ```
 * To maintain the accessibility of the teaser, the `tabindex` attribute should be set and the `role` attribute
 * must be set to `link`. Ensure that the tab order is correct and the teaser can be opened with the `Enter` key.
 *
 * To further highlight the interactive state of the teaser, the opacity of the media part can be reduced on hover.
 *
 * ```css
 * sd-teaser.interactive:hover {
 *   &::part(media) {
 *     transition-property: opacity;
 *     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *     transition-duration: 150ms;
 *     transition-duration: 300ms;
 *     opacity: 0.5;
 *   }
 * }
 * ```
 */

export const SamplesClickableAndExtraLinks = {
  name: 'Samples: Clickable teaser with extra links',
  parameters: {
    controls: {
      disable: true
    },
    backgrounds: {
      default: 'white'
    }
  },
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }

        sd-teaser.interactive:hover {
          &::part(media) {
            transition-property: opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            transition-duration: 300ms;
            opacity: 0.5;
          }
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser
          variant="primary"
          breakpoint="9999"
          inset
          class="flex-1 interactive hover:cursor-pointer"
          data-href="#"
          data-target="_blank"
          tabindex="0"
          role="link"
        >
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Clickable teaser with extra links</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="https://www.finanzagenda.de/" target="_blank" class="sd-link">An anchor tag</a>
            <sd-link href="https://www.finanzagenda.de/" target="_blank" class="sd-link" inverted>A SD-link</sd-link>
            <div class="flex-none">
              <sd-button variant="primary" href="https://www.finanzagenda.de/" target="_blank" inverted
                >A SD-button</sd-button
              >
            </div>
          </div>
        </sd-teaser>

        <sd-teaser
          variant="white border-neutral-400"
          breakpoint="9999"
          inset
          class="flex-1 interactive hover:cursor-pointer"
          data-href="#"
          data-target="_blank"
          tabindex="0"
          role="link"
        >
          <div slot="media" class="relative">
            <img class="aspect-video object-cover" src="./placeholders/generic.jpg" alt="A generic placeholder jpg" />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Clickable teaser with extra links</h3>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="https://www.finanzagenda.de/" target="_blank" class="sd-link">An anchor tag</a>
            <sd-link href="https://www.finanzagenda.de/" target="_blank" class="sd-link">A SD-link</sd-link>
            <div class="flex-none">
              <sd-button variant="primary" href="https://www.finanzagenda.de/" target="_blank">A SD-button</sd-button>
            </div>
          </div>
        </sd-teaser>
      </div>

      <script>
        document.addEventListener('DOMContentLoaded', () => {
          function handleTeaserClick(e) {
            // Exclude all clickable elements inside the teaser
            if (e.target !== this && e.target.closest('sd-button, sd-link, a')) {
              return;
            }

            const href = this.getAttribute('data-href');
            const target = this.getAttribute('data-target');

            if (href) {
              const linkTarget = target === '_blank' ? '_blank' : '_self';
              window.open(href, linkTarget);
            }
          }

          // Select all sd-teaser elements with a data-href attribute
          // and add click event listeners to these elements
          document.querySelectorAll('sd-teaser[data-href]').forEach(teaser => {
            teaser.addEventListener('click', handleTeaserClick);
          });
        });
      </script>
    `;
  }
};
