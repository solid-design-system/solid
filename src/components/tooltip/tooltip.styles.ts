import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sd-tooltip-arrow-size);
    --arrow-color: var(--sd-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sd-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sd-tooltip-border-radius);
    background-color: var(--sd-tooltip-background-color);
    font-family: var(--sd-tooltip-font-family);
    font-size: var(--sd-tooltip-font-size);
    font-weight: var(--sd-tooltip-font-weight);
    line-height: var(--sd-tooltip-line-height);
    color: var(--sd-tooltip-color);
    padding: var(--sd-tooltip-padding);
    pointer-events: none;
  }
`;
