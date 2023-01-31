import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sd-input-font-family);
    font-weight: var(--sd-input-font-weight);
    line-height: var(--sd-line-height-normal);
    letter-spacing: var(--sd-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sd-transition-fast) color, var(--sd-transition-fast) border, var(--sd-transition-fast) box-shadow,
      var(--sd-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sd-input-background-color);
    border: solid var(--sd-input-border-width) var(--sd-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sd-input-background-color-hover);
    border-color: var(--sd-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sd-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sd-input-background-color-focus);
    border-color: var(--sd-input-border-color-focus);
    color: var(--sd-input-color-focus);
    box-shadow: 0 0 0 var(--sd-focus-ring-width) var(--sd-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sd-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sd-input-background-color-disabled);
    border-color: var(--sd-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sd-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sd-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sd-input-filled-background-color);
    color: var(--sd-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sd-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sd-input-filled-background-color-focus);
    outline: var(--sd-focus-ring);
    outline-offset: var(--sd-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sd-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sd-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sd-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sd-input-border-radius-small);
    font-size: var(--sd-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sd-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sd-input-border-radius-medium);
    font-size: var(--sd-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sd-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sd-input-border-radius-large);
    font-size: var(--sd-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sd-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;
