import type { TemplateResult } from 'lit';
import type SdOption from '../option/option.js';

/**
 * A type definition for a function that renders an option.
 *
 * @param option - The option to be rendered.
 * @param query - The current query string used for filtering options.
 * @returns - The changed option to render
 */
export type OptionRenderer = (option: SdOption, query?: string) => TemplateResult | string | HTMLElement;

/**
 * The default option renderer, which does not change the option.
 */
export const defaultOptionRenderer: OptionRenderer = (option: SdOption) => option;

/**
 * A function that highlights the query string with a mark element in the option.
 */
export const highlightOptionRenderer: OptionRenderer = (option: SdOption, query: string) => {
  if (!query) {
    return option;
  }

  const clonedOption = option.cloneNode(true) as SdOption;

  clonedOption.selected = option.selected;

  const optionLabel = clonedOption.getTextLabel();
  const queryRegex = new RegExp(query, 'gi');

  const mark = document.createElement('mark');

  const exchangedText = optionLabel.replace(queryRegex, match => {
    mark.textContent = match;
    return mark.outerHTML;
  });

  const indexLabel = clonedOption.innerHTML.indexOf(optionLabel);
  const previousContent = clonedOption.innerHTML.slice(0, indexLabel);
  const followingContent = clonedOption.innerHTML.slice(indexLabel + optionLabel.length);

  clonedOption.innerHTML = previousContent.concat(exchangedText, followingContent);
  return clonedOption;
};
