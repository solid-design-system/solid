import { BaseTokenProcessor } from './base.js';

/**
 * Processor for shadow tokens
 */
export class ShadowTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return token.type === 'boxShadow' || token.type === 'shadow';
  }

  process(token) {
    const path = this.pathToKebabCase(this.processTokenPath(token).path);
    const value = this.formatShadow(token.attributes.value);
    const name = path.join('-');

    const formatted = this.getFormattedValue({ name, value });

    return {
      type: 'shadow',
      name: `--${name}`,
      value: `var(${formatted.variable}, ${formatted.value})`
    };
  }

  /**
   * Format a shadow object into CSS shadow syntax
   */
  formatShadow(shadow) {
    const { offsetX = '0', offsetY = '0', blur = '0', spread = '0', color = 'transparent' } = shadow;

    const parts = [offsetX, offsetY, blur, spread, color].filter(Boolean);

    return parts.join(' ');
  }
}
