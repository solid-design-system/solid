import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, renderTableStoryFromAttributes, renderStoryFromAttributes } from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
  args: getDefaultArgs('sd-button'),
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
  'loading',
  'caret'
];

/**
 * Default: This shows the button in its default state.
 */

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-button', args);
  }
};

/**
 * The button in all possible combinations of `variant` and `size`.
 */

export const VariantAndSize = {
  name: 'Variant × Size',
  parameters: { controls: { exclude: ['variant', 'size'] } },
  render: (args: any) => {
    return renderTableStoryFromAttributes(
      {
        customElementTag: 'sd-button',
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
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-button',
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
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-button',
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
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-button',
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
  parameters: { controls: { exclude: [...relevantAttributes, 'circle'] } },
  render: (args: any) => {
    return renderStoryFromAttributes(
      {
        customElementTag: 'sd-button',
        args: { ...args, circle: true, slot: '<sd-icon library="system" name="star-fill"></sd-icon>' },
        attributes: relevantAttributes.filter((attr) => attr !== 'circle'),
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
      prefix: '<sd-icon slot="prefix"  library="system" name="star-fill"></sd-icon>',
      suffix: '<sd-icon slot="suffix"  library="system" name="star-fill"></sd-icon>',
    };

    /**
     * Those slots are relevant for the stories in terms of design variations.
     * To make story creation faster and as there are lots of them, it is easier to
     * define them here and use it later.
     */
    const slots = {
      prefix: icon['prefix'],
      suffix: icon['suffix'],
      slot: '&lt;slot&gt;',
    };

    /**
     * We're setting default args here, so we don't have to repeat them in every
     * story and just overwrite the stuff that has to be changed.
     */
    const defaultArgs = {
      customElementTag: 'sd-button',
      args: { ...args, ...slots },
      attributes: ['size'],
      alternativeTitle: '',
    };

    const output = [];

    // Default
    output.push(html`
    ${renderStoryFromAttributes({ ...defaultArgs, alternativeTitle: 'size (default)' })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, suffix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '', suffix: '' } })}
  `);

    // With caret
    defaultArgs.args.caret = true;

    output.push(html`
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args }, alternativeTitle: 'size (caret=true)' })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, suffix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '', suffix: '' } })}
  `);

    // With badge in default slot
    defaultArgs.args.caret = false;
    defaultArgs.args.slot = defaultArgs.args.slot + '<sd-badge pill>99</sd-badge>';

    output.push(html`
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args }, alternativeTitle: 'size (slot contains <sd-badge>)' })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, suffix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '', suffix: '' } })}
  `);

    return html`${output}`;
  }
};
