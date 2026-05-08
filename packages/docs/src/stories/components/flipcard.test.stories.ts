import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-flipcard');
const { generateTemplate } = storybookTemplate('sd-flipcard');
const { overrideArgs } = storybookHelpers('sd-flipcard');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-flipcard/Screenshots: sd-flipcard',
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
  parameters: { ...parameters, controls: { disable: true } }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
        {
          type: 'slot',
          name: 'front',
          value: `<p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>`
        },
        {
          type: 'slot',
          name: 'back',
          value: `<p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>`
        }
      ]
    });
  }
};

export const Variants = {
  name: 'Variants',
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
          type: 'slot',
          name: 'back',
          value: `<p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>`
        },
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        }
      ],
      options: {
        templateRenderer: ({ attributes, slots }) => {
          const attrs = Object.entries(attributes)
            .map(([attr, value]) => `${attr}='${value}'`)
            .join(' ');

          const slotted = Object.entries(slots ?? {})
            .map(([, slot]) => slot)
            .join('\n');

          const inverted = ['primary', 'gradient-dark'].includes(attributes['front-variant'] as string);

          return `
            <sd-flipcard ${attrs}>
              ${inverted ? slotted?.replaceAll('class="slot', 'class="slot slot--inverted') : slotted}
            </sd-flipcard>
          `;
        }
      }
    })
};

export const flipDirection = {
  name: 'Flip Direction',
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
          type: 'slot',
          name: 'front',
          value: `<p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>`
        },
        {
          type: 'slot',
          name: 'back',
          value: `<p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>`
        },
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        }
      ]
    })
};

export const Slots = {
  name: 'Slots',
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
                  value: `<div slot='${slot}' class="slot slot--border slot--background slot--inverted min-h-12 w-full h-full"></div>`,
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
              value: 'gradient-dark'
            },
            {
              type: 'attribute',
              name: 'back-variant',
              value: 'gradient-dark'
            },
            {
              type: 'slot',
              name: 'front',
              value: `<p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>`
            },
            {
              type: 'slot',
              name: 'back',
              value: `<p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>`
            }
          ]
        });
      })}
    `;
  }
};

export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: [
        'base',
        'front',
        'back',
        'front-button',
        'back-button',
        'front-interactive-container',
        'back-interactice-container',
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
            'front-button',
            'back-button',
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
          value: 'gradient-dark'
        },
        {
          type: 'attribute',
          name: 'back-variant',
          value: 'gradient-dark'
        },
        {
          type: 'slot',
          name: 'front',
          value: `<p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>`
        },
        {
          type: 'slot',
          name: 'back',
          value: `<p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>`
        }
      ]
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'front',
            value: `<p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>`
          },
          {
            type: 'slot',
            name: 'back',
            value: `<p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>`
          }
        ]
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-flipcard');

    await waitUntil(() => el?.shadowRoot?.querySelector('.flip-card__side--front'));

    el?.shadowRoot?.querySelector<HTMLElement>('.flip-card__side--front')!.focus();
  }
};

export const Sample = {
  name: 'Sample: Custom Content',
  render: () => {
    return html`
      <sd-flipcard activation="click" front-variant="primary" back-variant="primary-100">
        <div class="py-4 px-6" slot="front">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted mb-2">
            <sd-icon name="content/image"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left sd-paragraph--inverted">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>
        </div>

        <div class="py-4 px-6" slot="back">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg mb-2">
            <sd-icon name="content/image"></sd-icon>
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

export const AspectRatio = {
  name: 'Sample: Aspect Ratio',
  render: () => {
    return html`
      <sd-flipcard style="aspect-ratio:16/9;" front-variant="primary" back-variant="primary-100">
        <div class="py-4 px-6" slot="front">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg sd-headline--inverted mb-2">
            <sd-icon name="content/image"></sd-icon>
            Nisi eu excepteur anim esse
          </h4>

          <p class="sd-paragraph text-left sd-paragraph--inverted">
            Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet consectuer
          </p>
        </div>

        <div class="py-4 px-6" slot="back">
          <h4 class="sd-headline sd-headline--inline sd-headline--size-lg mb-2">
            <sd-icon name="content/image"></sd-icon>
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
  flipDirection,
  Slots,
  Parts,
  Mouseless,
  Sample,
  AspectRatio
]);
