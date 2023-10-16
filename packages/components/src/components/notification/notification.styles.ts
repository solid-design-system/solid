import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sd-panel-background-color);
    border: solid var(--sd-panel-border-width) var(--sd-panel-border-color);
    border-top-width: calc(var(--sd-panel-border-width) * 3);
    border-radius: var(--sd-border-radius-medium);
    font-family: var(--sd-font-sans);
    font-size: var(--sd-font-size-small);
    font-weight: var(--sd-font-weight-normal);
    line-height: 1.6;
    color: var(--sd-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sd-font-size-large);
    padding-inline-start: var(--sd-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sd-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sd-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sd-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sd-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sd-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sd-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sd-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sd-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sd-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sd-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sd-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sd-font-size-medium);
    padding-inline-end: var(--sd-spacing-medium);
  }
`;
