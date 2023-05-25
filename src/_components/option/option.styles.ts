import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sd-font-sans);
    font-size: var(--sd-font-size-medium);
    font-weight: var(--sd-font-weight-normal);
    line-height: var(--sd-line-height-normal);
    letter-spacing: var(--sd-letter-spacing-normal);
    color: var(--sd-color-neutral-700);
    padding: var(--sd-spacing-x-small) var(--sd-spacing-medium) var(--sd-spacing-x-small) var(--sd-spacing-x-small);
    transition: var(--sd-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sd-color-neutral-100);
    color: var(--sd-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sd-color-primary-600);
    color: var(--sd-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sd-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sd-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sd-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sd-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
