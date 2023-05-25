import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes } = storybookDefaults('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');
const { generateTemplate } = storybookTemplate('sd-button'); // Replace with your custom element tag

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fPGhgNZv98U4H69Gu2tlWi/Button?type=design&node-id=13-18&t=jDLqFEdY7ZlOJurc-4'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Default' }),
  argTypes
};

/**
 * Default: This shows sd-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The button in all possible combinations of `variant` and `size`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'size' }
      },
      args
    });
  }
};

/**
 * The button in all possible combinations of `variant` `inverted`.
 */

export const Variant = {
  name: 'Variant',
  parameters: { controls: { exclude: ['variant', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};

/**
 * Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.
 */

export const Loading = {
  parameters: { controls: { exclude: ['variant', 'size', 'disabled', 'loading', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'size' },
          { type: 'attribute', name: 'disabled' }
        ],
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      constants: [
        { type: 'attribute', name: 'loading', value: true },
        { type: 'slot', name: 'default', value: 'Loading' }
      ],
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};

/**
 * Use the `inverted` attribute to make a button with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['variant', 'disabled', 'loading'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'disabled' },
          { type: 'attribute', name: 'loading' }
        ]
      },
      constants: { type: 'attribute', name: 'inverted', value: true },
      options: { templateBackground: '#00358E' },
      args
    });
  }
};

/**
 * Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  parameters: { controls: { exclude: ['variant', 'size', 'disabled', 'loading', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'size' },
          { type: 'attribute', name: 'loading' }
        ],
        y: { type: 'attribute', name: 'inverted', values: [false, true] }
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    });
  }
};

/**
 * Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects ideally a single `<span>` in the default slot.
 */

export const Circle = {
  parameters: { controls: { exclude: ['variant', 'size', 'disabled', 'loading', 'circle', 'default'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: [
          { type: 'attribute', name: 'variant' },
          { type: 'attribute', name: 'size' },
          { type: 'attribute', name: 'loading' },
          { type: 'attribute', name: 'disabled' }
        ]
      },
      constants: [
        { type: 'attribute', name: 'circle', value: true },
        { type: 'slot', name: 'default', value: '★' }
      ],
      args
    });
  }
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const Slots = {
  parameters: { controls: { exclude: ['size', 'default', 'icon-left', 'icon-right'] } },
  render: (args: any) => {
    return html`
      ${['sm', 'md', 'lg'].map(size =>
        generateTemplate({
          axis: {
            x: { type: 'slot', name: 'icon-right', values: ['', '<span slot="icon-right">★</span>'] },
            y: { type: 'slot', name: 'icon-left', values: ['', '<span slot="icon-left">★</span>'] }
          },
          constants: [{ type: 'attribute', name: 'size', value: size }],
          args,
          options: { title: `size="${size}"` }
        })
      )}
    `;
  }
};

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const Parts = {
  parameters: { controls: { exclude: ['base', 'label', 'icon-left', 'icon-right'] } },
  render: (args: any) => {
    let i = 0;
    return html`
      ${['base', 'label', 'icon-left', 'icon-right'].map(part => {
        i++;
        return generateTemplate({
          constants: [
            { type: 'slot', name: 'icon-right', value: '<span slot="icon-right">★</span>' },
            { type: 'slot', name: 'icon-left', value: '<span slot="icon-left">★</span>' },
            {
              type: 'cssPart',
              name: 'icon-left',
              value: `table:nth-of-type(${i}) sd-button::part(${part}){outline: solid 2px red}`
            }
          ],
          args,
          options: { title: `sd-button::part(${part}){...}` }
        });
      })}
    `;
  }
};
