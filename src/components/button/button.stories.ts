import '../../solid-components';
import { storybookDefaults, storybookTemplates, storybookHelpers } from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

const { argTypes } = storybookDefaults('sd-button');
const { defaultTemplate, attributesTemplate, attributeToTableTemplate } = storybookTemplates('sd-button');
const { overrideArgs } = storybookHelpers('sd-button');

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
  args: overrideArgs({ slots: { default: 'Default' } }),
  argTypes,
};

/**
 * Those attributes are relevant for the stories in terms of design variations.
 * To make story creation faster and as there are lots of them, it is easier to
 * define them here and use it later.
 */

const relevantAttributes = [
  'variant',
  'size',
  'disabled',
  'loading'
];

/**
 * Default: This shows sd-button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};

/**
 * The button in all possible combinations of `variant` and `size` in the default `color`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return attributeToTableTemplate(
      {
        args,
        attributeA: 'variant',
        attributeB: 'size',
      }
    );
  }
};

/**
 * Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.
 */

export const Loading = {
  parameters: { controls: { exclude: relevantAttributes } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, loading: true },
        attributes: relevantAttributes.filter((attr) => attr !== 'loading'),
      }
    );
  }
};

/**
 * Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  parameters: { controls: { exclude: relevantAttributes } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, disabled: true },
        attributes: relevantAttributes.filter((attr) => attr !== 'disabled'),
      }
    );
  }
};

/**
 * Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects ideally a single `<span>` in the default slot.
 */

export const Circle = {
  parameters: { controls: { exclude: [...relevantAttributes, 'circle', 'default', 'caret'] } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, circle: true, 'default-slot': '★' },
        attributes: relevantAttributes.filter((attr) => attr !== 'circle' || 'caret'),
      }
    );
  }
};

/**
 * Use the `prefix` and `suffix` slots to add icons.
 * TODO: It might be better to this with renderTableVariationsStory()
 */

export const Slots = {
  parameters: { controls: { exclude: ['size', 'default', 'prefix', 'suffix'] } },
  render: (args: any) => {
    /**
     * Those slots are relevant for the stories in terms of design variations.
     * To make story creation faster and as there are lots of them, it is easier to
     * define them here and use it later.
     */
    const getSlots = (selection: ('prefix' | 'suffix' | 'default')[]) => {
      const slots = {
        'prefix': '<span slot="prefix">★</span>',
        'suffix': '<span slot="suffix">★</span>',
        'default': '&lt;slot&gt;',
      };

      // conditionally add slots if they are in selection
      const selectedSlots = selection.reduce((acc, slot) => {
        acc[slot] = slots[slot];
        return acc;
      }, {});

      return overrideArgs({ slots: selectedSlots });
    };

    /**
     * We're setting default args here, so we don't have to repeat them in every
     * story and just overwrite the stuff that has to be changed.
     */
    const defaultOptions = {
      attributes: ['size'],
      alternativeTitle: '',
    };

    const output = [];

    // Size
    output.push(html`
    ${attributesTemplate({ ...defaultOptions, args: getSlots(['prefix', 'suffix', 'default']), alternativeTitle: 'size (default)' })}
    ${attributesTemplate({ ...defaultOptions, args: getSlots(['suffix', 'default']) })}
    ${attributesTemplate({ ...defaultOptions, args: getSlots(['prefix', 'default']) })}
    ${attributesTemplate({ ...defaultOptions, args: getSlots(['default']) })}
  `);

    return html`${output}`;
  }
};
