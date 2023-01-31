import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sd-font-sans);
    font-size: var(--sd-font-size-small);
    font-weight: var(--sd-font-weight-semibold);
    border-radius: var(--sd-border-radius-medium);
    color: var(--sd-color-neutral-600);
    padding: var(--sd-spacing-medium) var(--sd-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sd-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sd-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sd-focus-ring);
    outline-offset: calc(-1 * var(--sd-focus-ring-width) - var(--sd-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sd-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sd-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sd-font-size-small);
    margin-inline-start: var(--sd-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sd-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
