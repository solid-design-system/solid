import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-flipcard');
const { generateTemplate } = storybookTemplate('sd-flipcard');
const { overrideArgs } = storybookHelpers('sd-flipcard');

export default {
  title: 'Components/sd-flipcard',
  component: 'sd-flipcard',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'front',
      value: `<p slot="front">Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer</p>`
    },
    {
      type: 'slot',
      name: 'back',
      value: `<p slot="back">Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer</p>`
    },
    {
      type: 'slot',
      name: 'mediaFront',
      value: `<img slot='mediaFront' class="object-cover h-full w-full" src='./placeholders/images/generic.jpg' alt='Generic'/>`
    },
    {
      type: 'slot',
      name: 'mediaBack',
      value: `<img slot='mediaBack' class="object-cover h-full w-full" src='./placeholders/images/generic.jpg' alt='Generic'/>`
    }
  ]),

  argTypes,

  parameters: { ...parameters },
  decorators: [withActions] as any
};
/**
 * This shows sd-flipcard in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="width:300px">${generateTemplate({ args })}</div>`;
  }
};

/**
 * The sd-flipcard can be displayed in several ways using the `frontVariant` and `backVariant` attributes. This example shows the usage `frontVariant` attribute.
 */

export const Variants = {
  parameters: { controls: { exclude: ['frontVariant'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'frontVariant'
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; width: 300px">%TEMPLATE%</div>'
        }
      ]
    })
};

/**
 * The sd-flipcard can be displayed in 3:4 or 16:9 aspect ratio.
 */

export const Ratio = {
  parameters: { controls: { exclude: ['ratio'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'ratio'
        }
      },
      args
    }),
  decorators: [
    (story: any) =>
      html`<style>
          td.template {
            width: 50%;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * Use the `front`, `back`, `mediaFront` and `mediaBack` slots to add content to the flipcard.
 */
export const Slots = {
  parameters: {
    controls: { exclude: ['front', 'back', 'mediaFront', 'mediaBack'] }
  },
  render: (args: any) => {
    return html`
      ${['front', 'back', 'mediaFront', 'mediaBack'].map(slot => {
        return generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value: `<div slot='${slot}' class="slot slot--border slot--background w-full h-full"></div>`,
                  title: slot
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 300px">%TEMPLATE%</div>'
            },
            {
              type: 'attribute',
              name: 'frontVariant',
              value: 'gradient-dark-top'
            },
            {
              type: 'attribute',
              name: 'backVariant',
              value: 'gradient-dark-bottom'
            }
          ]
        });
      })}
    `;
  }
};

export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'front',
        'back',
        'frontSlotContainer',
        'backSlotContainer',
        'mediaFront',
        'mediaBack',
        'frontSecondaryGradient',
        'backSecondaryGradient'
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-flipcard::part(...){outline: solid 2px red}',
          values: [
            'base',
            'front',
            'back',
            'frontSlotContainer',
            'backSlotContainer',
            'mediaFront',
            'mediaBack',
            'frontSecondaryGradient',
            'backSecondaryGradient'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-flipcard::part(${part}){outline: solid 2px red; outline-offset: -2px;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; width: 300px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'frontVariant',
          value: 'gradient-dark-top'
        },
        {
          type: 'attribute',
          name: 'darkVariant',
          value: 'gradient-dark-bottom'
        }
      ]
    });
  }
};

/**
 * `sd-flipcard` is fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless" style="width:300px">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-flipcard');

    await waitUntil(() => el?.shadowRoot?.querySelector('.flip-card__side--front'));

    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('.flip-card__side--front')!, '{return}', {
      pointerEventsCheck: 0
    });
  }
};

/**
 * Here is a sample of the `sd-flipcard` with custom content in the `front` and `back` slots.
 */

export const Sample = {
  render: () => {
    return html`
      <sd-flipcard style="width:350px;">
        <div slot="front">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted">
            <sd-icon name="content/picture" library="global-resources"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left sd-paragraph--inverted">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>

          <sd-link size="inherit" href="#" inverted>Link</sd-link>
        </div>

        <div slot="back">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg">
            <sd-icon name="content/picture" library="global-resources"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>

          <sd-link size="inherit" href="#">Link</sd-link>
        </div>
      </sd-flipcard>
    `;
  }
};
