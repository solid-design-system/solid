/* eslint-disable import/prefer-default-export */

/*
 * 1. Make Tailwind-CSS globally accessible
 *
 * This approach seems to be okay facing the following sentence:
 * "Many modern browsers implement an optimization for <style> tags either cloned from a common
 * node or hat have identical text, to allow them to share a single backing stylesheet.
 * With this optimization the performance of external and internal styles should be similar."
 * (See: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#internal_vs._external_styles)
 */

import { css, unsafeCSS } from 'lit';
import classes from './styles/tailwind.css';

export const tailwind = css`
  ${unsafeCSS(classes)}
`;

/*
 * 2. Import all components and register them
 */

// const modules = import.meta.glob('./components/**/!(color-picker*|animation*|*.stories|*.spec|*.test|*.style).ts');

const modules = import.meta.glob('./components/**/!(*.stories|*.spec|*.test|*.style).ts');

Object.keys(modules).forEach((module) => {
  modules[module]();
});
