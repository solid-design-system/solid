import { css } from 'lit';

export default css`
  /** 
   * Hide the default slot, because the filtered options are rendered in the listbox__options
   */
  .combobox__listbox slot:not([name]) {
    display: none;
  }

  /**
   * The filtered options
   */
  .listbox__options syn-option mark {
    background-color: transparent;
    color: var(--syn-color-neutral-950);
    font: var(--syn-body-medium-bold);
  }

  .listbox__options syn-option[aria-selected='true'] mark {
    color: var(--syn-color-neutral-0);
  }

  .combobox:not(.combobox--disabled) .combobox__display-input {
    cursor: text;
  }

  /**
   * Make sure to hide the syn-divider for the first syn-optgroup
   */
  .listbox__options syn-optgroup:first-of-type::part(divider) {
    display: none;
  }
`;
