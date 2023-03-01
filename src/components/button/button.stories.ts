import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, renderTableStoryFromAttributes, renderStoryFromAttributes } from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
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
 * Default story
 */

export const Default = (args: any) => {
  return renderDefaultStory('sd-button', args);
};

Default.args = { ...getDefaultArgs('sd-button') };

/**
 * Variant × Color
 */

export const VariantAndColor = (args: any) => {
  return renderTableStoryFromAttributes(
    {
      customElementTag: 'sd-button',
      args,
      attributeA: 'variant',
      attributeB: 'color',
    }
  );
};

VariantAndColor.storyName = 'Variant × Color';
VariantAndColor.args = { ...getDefaultArgs('sd-button'), };
VariantAndColor.parameters = { controls: { exclude: ['variant', 'color'] } };

/**
 * Size × Variant
 */

export const VariantAndSize = (args: any) => {
  return renderTableStoryFromAttributes({
    customElementTag: 'sd-button',
    args,
    attributeA: 'variant',
    attributeB: 'size',
  }
  );
};

VariantAndSize.storyName = 'Variant × Size';
VariantAndSize.args = { ...getDefaultArgs('sd-button'), };
VariantAndSize.parameters = { controls: { exclude: ['variant', 'size'] } };


/**
 * Loading story
 */

export const Loading = (args: any) => {
  const modifiedArgs = { ...args, loading: true };
  return renderStoryFromAttributes(
    {
      customElementTag: 'sd-button',
      args: modifiedArgs,
      attributes: relevantAttributes.filter((attr) => attr !== 'loading'),
    }
  );
};

Loading.args = { ...getDefaultArgs('sd-button'), };
Loading.parameters = { controls: { exclude: relevantAttributes } };


/**
 * Caret story
 */

export const Caret = (args: any) => {
  const modifiedArgs = { ...args, caret: true };
  return renderStoryFromAttributes(
    {
      customElementTag: 'sd-button',
      args: modifiedArgs,
      attributes: relevantAttributes.filter((attr) => attr !== 'caret'),
    }
  );
};

Caret.args = { ...getDefaultArgs('sd-button'), };
Caret.parameters = { controls: { exclude: relevantAttributes } };


/**
 * Circle story
 */

export const Circle = (args: any) => {
  const modifiedArgs = { ...args, circle: true, slot: '💬' };
  return renderStoryFromAttributes(
    {
      customElementTag: 'sd-button',
      args: modifiedArgs,
      attributes: relevantAttributes.filter((attr) => attr !== 'circle'),
    }
  );
};

Circle.args = { ...getDefaultArgs('sd-button'), };
Circle.parameters = { controls: { exclude: [...relevantAttributes, 'circle'] } };


/**
 * Pill story
 */

export const Pill = (args: any) => {
  const modifiedArgs = { ...args, pill: true };
  return renderStoryFromAttributes(
    {
      customElementTag: 'sd-button',
      args: modifiedArgs,
      attributes: relevantAttributes.filter((attr) => attr !== 'pill'),
    }
  );
};

Pill.args = { ...getDefaultArgs('sd-button'), };
Pill.parameters = { controls: { exclude: relevantAttributes } };


/**
 * Slot story
 * TODO: It might be better to this with renderTableVariationsStory()
 */

export const Slots = (args: any) => {
  /**
   * Those slots are relevant for the stories in terms of design variations.
   * To make story creation faster and as there are lots of them, it is easier to
   * define them here and use it later.
   */
  const slots = {
    prefix: '<span slot="prefix">&lt;prefix&gt;</span>',
    suffix: '<span slot="suffix">&lt;suffix&gt;</span>',
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
};

Slots.args = { ...getDefaultArgs('sd-button'), };
Slots.parameters = { controls: { exclude: ['size', 'default', 'prefix', 'suffix', 'caret'] } };

