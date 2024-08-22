import '../../solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-flipcard');
const { generateTemplate } = storybookTemplate('sd-flipcard');
const { overrideArgs } = storybookHelpers('sd-flipcard');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-flipcard/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-flipcard',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'front',
      value: `<p slot="front" class="slot slot--border slot--text h-12 w-full">Front slot</p>`
    },
    {
      type: 'slot',
      name: 'back',
      value: `<p slot="back" class="slot slot--border slot--text h-12 w-full">Back slot</p>`
    },
    {
      type: 'slot',
      name: 'media-front',
      value: `<img slot='media-front' class="object-cover h-full w-full" src='./placeholders/images/generic.jpg' alt='Generic'/>`
    },
    {
      type: 'slot',
      name: 'media-back',
      value: `<img slot='media-back' class="object-cover h-full w-full" src='./placeholders/images/generic.jpg' alt='Generic'/>`
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
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The sd-flipcard can be displayed in several ways using the `front-variant` and `back-variant` attributes. This example shows the usage `front-variant` attribute.
 */

export const Variants = {
  name: 'Variants',
  parameters: { controls: { exclude: ['front-variant'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        y: {
          type: 'attribute',
          name: 'front-variant'
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        }
      ]
    })
};

/**
 * Use the `activation` attribute to determine the activation type of the flipcard. There are two options: `click-only` and `hover-and-click`.
 */

export const Activation = {
  name: 'Activation',
  parameters: { controls: { exclude: ['activation'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'activation'
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        }
      ]
    })
};

/**
 * Use the `flip-direction` attribute to determine the direction of the flipcard. There are two options: `horizontal` and `vertical`.
 */

export const flipDirection = {
  name: 'Flip Direction',
  parameters: { controls: { exclude: ['flip-direction'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'flip-direction'
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        }
      ]
    })
};

/**
 * Use the `front`, `back`, `front-media` and `back-media` slots to add content to the flipcard.
 */
export const Slots = {
  name: 'Slots',
  parameters: {
    controls: { exclude: ['front', 'back', 'front-media', 'back-media'] }
  },
  render: (args: any) => {
    return html`
      ${['front', 'back', 'front-media', 'back-media'].map(slot => {
        return generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value: `<div slot='${slot}' class="slot slot--border slot--background min-h-12 w-full h-full"></div>`,
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
              value: '<div style="margin-bottom: 40px;">%TEMPLATE%</div>'
            },
            {
              type: 'attribute',
              name: 'front-variant',
              value: 'gradient-dark-top'
            },
            {
              type: 'attribute',
              name: 'back-variant',
              value: 'gradient-dark-bottom'
            }
          ]
        });
      })}
    `;
  }
};

/**
 * Use the `base`, `front`, `back`, `front-slot-container`, `back-slot-container`, `front-media`, `back-media`, `front-secondary-gradient` and `back-secondary-gradient` parts to style the flipcard.
 */
export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: [
        'base',
        'front',
        'back',
        'front-slot-container',
        'back-slot-container',
        'front-media',
        'back-media',
        'front-secondary-gradient',
        'back-secondary-gradient'
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
            'front-slot-container',
            'back-slot-container',
            'front-media',
            'back-media',
            'front-secondary-gradient',
            'back-secondary-gradient'
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
          value: '<div style="margin-bottom: 40px;">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'front-variant',
          value: 'gradient-dark-top'
        },
        {
          type: 'attribute',
          name: 'back-variant',
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
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-flipcard');

    await waitUntil(() => el?.shadowRoot?.querySelector('.flip-card__side--front'));

    el?.shadowRoot?.querySelector<HTMLElement>('.flip-card__side--front')!.focus();
  }
};

/**
 * Here is a sample of the `sd-flipcard` with custom content in the `front` and `back` slots. The activation is set to `click-only` in order allow the user to click on links/buttons inside the flipcard.
 */

export const Sample = {
  name: 'Sample: Custom Content',
  render: () => {
    return html`
      <sd-flipcard activation="click" front-variant="primary" back-variant="primary-100">
        <div class="py-4 px-6" slot="front">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted mb-2">
            <sd-icon name="content/picture" library="global-resources"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left sd-paragraph--inverted">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>
        </div>

        <div class="py-4 px-6" slot="back">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg mb-2">
            <sd-icon name="content/picture" library="global-resources"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left mb-4">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>

          <sd-link size="inherit" href="#" target="_blank">Link</sd-link>
        </div>
      </sd-flipcard>
    `;
  }
};

/**
 * You can set a custom aspect ratio (eg: 16:9) for the `sd-flipcard` using plain CSS.
 */

export const AspectRatio = {
  name: 'Sample: Aspect Ratio',
  render: () => {
    return html`
      <sd-flipcard style="aspect-ratio:16/9;" front-variant="primary" back-variant="primary-100">
        <div class="py-4 px-6" slot="front">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted mb-2">
            <sd-icon name="content/picture" library="global-resources"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left sd-paragraph--inverted">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>
        </div>

        <div class="py-4 px-6" slot="back">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg mb-2">
            <sd-icon name="content/picture" library="global-resources"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left mb-4">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>

          <sd-link size="inherit" href="#" target="_blank">Link</sd-link>
        </div>
      </sd-flipcard>
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Variants,
  Activation,
  flipDirection,
  Slots,
  Parts,
  Mouseless,
  Sample,
  AspectRatio
]);
