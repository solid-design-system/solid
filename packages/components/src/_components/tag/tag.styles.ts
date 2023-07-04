import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sd-color-primary-50);
    border-color: var(--sd-color-primary-200);
    color: var(--sd-color-primary-800);
  }

  .tag--primary:active > sd-icon-button {
    color: var(--sd-color-primary-600);
  }

  .tag--success {
    background-color: var(--sd-color-success-50);
    border-color: var(--sd-color-success-200);
    color: var(--sd-color-success-800);
  }

  .tag--success:active > sd-icon-button {
    color: var(--sd-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sd-color-neutral-50);
    border-color: var(--sd-color-neutral-200);
    color: var(--sd-color-neutral-800);
  }

  .tag--neutral:active > sd-icon-button {
    color: var(--sd-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sd-color-warning-50);
    border-color: var(--sd-color-warning-200);
    color: var(--sd-color-warning-800);
  }

  .tag--warning:active > sd-icon-button {
    color: var(--sd-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sd-color-danger-50);
    border-color: var(--sd-color-danger-200);
    color: var(--sd-color-danger-800);
  }

  .tag--danger:active > sd-icon-button {
    color: var(--sd-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sd-button-font-size-small);
    height: calc(var(--sd-input-height-small) * 0.8);
    line-height: calc(var(--sd-input-height-small) - var(--sd-input-border-width) * 2);
    border-radius: var(--sd-input-border-radius-small);
    padding: 0 var(--sd-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sd-button-font-size-medium);
    height: calc(var(--sd-input-height-medium) * 0.8);
    line-height: calc(var(--sd-input-height-medium) - var(--sd-input-border-width) * 2);
    border-radius: var(--sd-input-border-radius-medium);
    padding: 0 var(--sd-spacing-small);
  }

  .tag--large {
    font-size: var(--sd-button-font-size-large);
    height: calc(var(--sd-input-height-large) * 0.8);
    line-height: calc(var(--sd-input-height-large) - var(--sd-input-border-width) * 2);
    border-radius: var(--sd-input-border-radius-large);
    padding: 0 var(--sd-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sd-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sd-border-radius-pill);
  }
`;
