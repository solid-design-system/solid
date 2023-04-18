import '../../solid-components';
import { storybookDefaults, storybookTemplates } from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

const { argTypes, args } = storybookDefaults('sd-button');
const { defaultTemplate, attributesTemplate, attributeToTableTemplate } = storybookTemplates('sd-button');

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
  args: { ...args, 'default-slot': 'Default' },
  argTypes,
};

/**
 * Those attributes are relevant for the stories in terms of design variations.
 * To make story creation faster and as there are lots of them, it is easier to
 * define them here and use it later.
 */

const relevantAttributes = [
  'variant',
  'color',
  'size',
  'disabled',
  'loading',
  'pill',
  'caret'
];

/**
 * Default: This shows the button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return defaultTemplate(args);
  }
};

/**
 * The button in all possible combinations of `variant` and `color` in the default `size`.
 */

export const VariantAndColor = {
  name: 'Variant × Color',
  parameters: { controls: { exclude: ['variant', 'color'] } },
  render: (args: any) => {
    return attributeToTableTemplate(
      {
        args,
        attributeA: 'variant',
        attributeB: 'color',
      }
    );
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
 * Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.
 */

export const Caret = {
  parameters: { controls: { exclude: relevantAttributes } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, caret: true },
        attributes: relevantAttributes.filter((attr) => attr !== 'caret'),
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
 * Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects ideally a single `<sd-icon>` in the default slot.
 */

export const Circle = {
  parameters: { controls: { exclude: [...relevantAttributes, 'circle', 'default'] } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, circle: true, 'default-slot': '<sd-icon library="system" name="star-fill"></sd-icon>' },
        attributes: relevantAttributes.filter((attr) => attr !== 'circle'),
      }
    );
  }
};

/**
 * Use the `pill` attribute to give buttons rounded edges.
 */


export const Pill = {
  parameters: { controls: { exclude: relevantAttributes } },
  render: (args: any) => {
    return attributesTemplate(
      {
        args: { ...args, pill: true },
        attributes: relevantAttributes.filter((attr) => attr !== 'pill'),
      }
    );
  }
};

/**
 * Use the `prefix` and `suffix` slots to add icons.
 * TODO: It might be better to this with renderTableVariationsStory()
 */

export const Slots = {
  parameters: { controls: { exclude: ['size', 'default', 'prefix', 'suffix', 'caret'] } },
  render: (args: any) => {
    const icon = {
      'prefix': '<sd-icon slot="prefix"  library="system" name="star-fill"></sd-icon>',
      'suffix': '<sd-icon slot="suffix"  library="system" name="star-fill"></sd-icon>',
    };

    /**
     * Those slots are relevant for the stories in terms of design variations.
     * To make story creation faster and as there are lots of them, it is easier to
     * define them here and use it later.
     */
    const slots = {
      'prefix-slot': icon['prefix'],
      'suffix-slot': icon['suffix'],
      'slot-slot': '&lt;slot&gt;',
    };

    /**
     * We're setting default args here, so we don't have to repeat them in every
     * story and just overwrite the stuff that has to be changed.
     */
    const defaultOptions = {
      args: { ...args, ...slots },
      attributes: ['size'],
      alternativeTitle: '',
    };

    const output = [];

    // Default
    output.push(html`
    ${attributesTemplate({ ...defaultOptions, alternativeTitle: 'size (default)' })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'prefix-slot': '' } })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'suffix-slot': '' } })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'prefix-slot': '', 'suffix-slot': '' } })}
  `);

    // With caret
    defaultOptions.args.caret = true;

    output.push(html`
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args }, alternativeTitle: 'size (caret=true)' })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'prefix-slot': '' } })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'suffix-slot': '' } })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'prefix-slot': '', 'suffix-slot': '' } })}
  `);

    // With badge in default slot
    defaultOptions.args.caret = false;
    defaultOptions.args.slot = defaultOptions.args.slot + '<sd-badge pill>99</sd-badge>';

    output.push(html`
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args }, alternativeTitle: 'size (slot contains <sd-badge>)' })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'prefix-slot': '' } })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'suffix-slot': '' } })}
    ${attributesTemplate({ ...defaultOptions, args: { ...defaultOptions.args, 'prefix-slot': '', 'suffix-slot': '' } })}
  `);

    return html`${output}`;
  }
};
