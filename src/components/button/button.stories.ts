import '../../solid-components';
import { getDefaultArgs, renderDefaultStory, renderTableStoryFromAttributes, renderStoryFromAttributes } from '../../../scripts/storybook/helper';
import { html } from 'lit-html';

export default {
  title: 'Components/sd-button',
  component: 'sd-button',
};

const relevantAttributes = ['variant', 'color', 'size', 'disabled', 'loading', 'pill', 'caret'];

/**
 * Default story
 */

export const Default = (args: any) => {
  return renderDefaultStory('sd-button', args);
};

Default.args = {
  ...getDefaultArgs('sd-button')
};


// /**
//  * Variant story
//  */

// export const Variant = (args: any) => {
//   return renderStoryFromAttributes(
//     'sd-button',
//     args,
//     ['variant']
//   );
// };

// // Sets the default args of the story
// Variant.args = { ...getDefaultArgs('sd-button'), };
// Variant.parameters = { controls: { exclude: relevantAttributes } };

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

// Sets the default args of the story
VariantAndColor.storyName = 'Variant × Color';
VariantAndColor.args = { ...getDefaultArgs('sd-button'), };
VariantAndColor.parameters = {
  controls: { exclude: ['variant', 'color'] }
};

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

// Sets the default args of the story
VariantAndSize.storyName = 'Variant × Size';
VariantAndSize.args = { ...getDefaultArgs('sd-button'), };
VariantAndSize.parameters = {
  controls: { exclude: ['variant', 'size'] }
};


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

// Sets the default args of the story
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

// Sets the default args of the story
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

// Sets the default args of the story
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

// Sets the default args of the story
Pill.args = { ...getDefaultArgs('sd-button'), };
Pill.parameters = { controls: { exclude: relevantAttributes } };


/**
 * Slot story
 */

export const Slots = (args: any) => {
  const slots = {
    prefix: '<span slot="prefix">&lt;prefix&gt;</span>',
    suffix: '<span slot="suffix">&lt;suffix&gt;</span>',
    slot: '&lt;slot&gt;',
  };

  const defaultArgs = {
    customElementTag: 'sd-button',
    args: { ...args, ...slots },
    attributes: ['size'],
    alternativeTitle: '',
  };

  const output = [];

  // default
  output.push(html`
    ${renderStoryFromAttributes({ ...defaultArgs, alternativeTitle: 'size (default)' })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, suffix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '', suffix: '' } })}
  `);

  // with caret
  defaultArgs.args.caret = true;

  output.push(html`
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args }, alternativeTitle: 'size (caret=true)' })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, suffix: '' } })}
    ${renderStoryFromAttributes({ ...defaultArgs, args: { ...defaultArgs.args, prefix: '', suffix: '' } })}
  `);

  //
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

// Sets the default args of the story
Slots.args = { ...getDefaultArgs('sd-button'), };
Slots.parameters = { controls: { exclude: ['size', 'default', 'prefix', 'suffix', 'caret'] } };

