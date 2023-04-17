import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--sd-panel-background-color);
    border: solid var(--sd-panel-border-width) var(--sd-panel-border-color);
    border-radius: var(--sd-border-radius-medium);
    padding: var(--sd-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sd-divider) {
    --spacing: var(--sd-spacing-x-small);
  }
`;
