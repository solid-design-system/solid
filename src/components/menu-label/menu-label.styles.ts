import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sd-font-sans);
    font-size: var(--sd-font-size-small);
    font-weight: var(--sd-font-weight-semibold);
    line-height: var(--sd-line-height-normal);
    letter-spacing: var(--sd-letter-spacing-normal);
    color: var(--sd-color-neutral-500);
    padding: var(--sd-spacing-2x-small) var(--sd-spacing-x-large);
    user-select: none;
  }
`;
