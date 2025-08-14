import { BaseTokenProcessor } from './base.js';

/**
 * Processor for shadow tokens
 */
export class ShadowTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
    this.prefix = options.shadowPrefix || 'shadow';
  }

  canProcess(token) {
    return token.type === 'boxShadow' || token.type === 'shadow';
  }

  process(token) {
    const value = this.getTokenValue(token);

    // Use global theme processing logic
    const { finalPath, variant, isTheme } = this.processTokenPath(token);

    // Convert to kebab-case
    const path = this.pathToKebabCase(finalPath);

    // Handle both single shadow objects and arrays of shadows
    let shadowValue;
    if (Array.isArray(value)) {
      shadowValue = value.map(shadow => this.formatShadow(shadow)).join(', ');
    } else if (typeof value === 'object') {
      shadowValue = this.formatShadow(value);
    } else {
      shadowValue = value;
    }

    return {
      type: 'shadow',
      name: `--${path.join('-')}`,
      value: shadowValue,
      variant,
      isTheme
    };
  }

  /**
   * Format a shadow object into CSS shadow syntax
   */
  formatShadow(shadow) {
    const { offsetX = '0', offsetY = '0', blur = '0', spread = '0', color = 'transparent', inset = false } = shadow;

    const parts = [inset ? 'inset' : '', offsetX, offsetY, blur, spread, color].filter(Boolean);

    return parts.join(' ');
  }
}
