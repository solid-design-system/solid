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
    'sd-button',
    args,
    'variant',
    'color'
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
  return renderTableStoryFromAttributes(
    'sd-button',
    args,
    'variant',
    'size'
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
    'sd-button',
    modifiedArgs,
    relevantAttributes.filter((attr) => attr !== 'loading')
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
    'sd-button',
    modifiedArgs,
    relevantAttributes.filter((attr) => attr !== 'caret')
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
    'sd-button',
    modifiedArgs,
    relevantAttributes.filter((attr) => attr !== 'circle')
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
    'sd-button',
    modifiedArgs,
    relevantAttributes.filter((attr) => attr !== 'pill')
  );
};

// Sets the default args of the story
Pill.args = { ...getDefaultArgs('sd-button'), };
Pill.parameters = { controls: { exclude: relevantAttributes } };
