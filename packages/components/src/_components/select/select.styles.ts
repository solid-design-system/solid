import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sd-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sd-input-font-family);
    font-weight: var(--sd-input-font-weight);
    letter-spacing: var(--sd-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sd-transition-fast) color, var(--sd-transition-fast) border, var(--sd-transition-fast) box-shadow,
      var(--sd-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sd-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sd-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sd-spacing-2x-small);
  }

  .select__tags::slotted(sd-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sd-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sd-input-background-color);
    border: solid var(--sd-input-border-width) var(--sd-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sd-input-background-color-disabled);
    border-color: var(--sd-input-border-color-disabled);
    color: var(--sd-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sd-input-background-color-focus);
    border-color: var(--sd-input-border-color-focus);
    box-shadow: 0 0 0 var(--sd-focus-ring-width) var(--sd-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sd-input-filled-background-color);
    color: var(--sd-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sd-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sd-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sd-input-filled-background-color-focus);
    outline: var(--sd-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sd-input-border-radius-small);
    font-size: var(--sd-input-font-size-small);
    min-height: var(--sd-input-height-small);
    padding-block: 0;
    padding-inline: var(--sd-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sd-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sd-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sd-input-border-radius-medium);
    font-size: var(--sd-input-font-size-medium);
    min-height: var(--sd-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sd-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sd-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sd-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sd-input-border-radius-large);
    font-size: var(--sd-input-font-size-large);
    min-height: var(--sd-input-height-large);
    padding-block: 0;
    padding-inline: var(--sd-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sd-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sd-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sd-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sd-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sd-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sd-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sd-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sd-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sd-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sd-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sd-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sd-font-sans);
    font-size: var(--sd-font-size-medium);
    font-weight: var(--sd-font-weight-normal);
    box-shadow: var(--sd-shadow-large);
    background: var(--sd-panel-background-color);
    border: solid var(--sd-panel-border-width) var(--sd-panel-border-color);
    border-radius: var(--sd-border-radius-medium);
    padding-block: var(--sd-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox::slotted(sd-divider) {
    --spacing: var(--sd-spacing-x-small);
  }

  .select__listbox::slotted(small) {
    font-size: var(--sd-font-size-small);
    font-weight: var(--sd-font-weight-semibold);
    color: var(--sd-color-neutral-500);
    padding-block: var(--sd-spacing-x-small);
    padding-inline: var(--sd-spacing-x-large);
  }
`;
