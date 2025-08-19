import { BaseTokenProcessor } from './base.js';
import { toKebabCase } from './utils.js';

/**
 * Processor for spacing/dimension tokens with proper Tailwind CSS v4 naming
 */
export class SpacingTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
    this.defaultPrefix = options.spacingPrefix || 'spacing';

    // Define special prefixes for specific token categories
    this.specialPrefixes = {
      aspect: 'aspect',
      sizing: 'sizing',
      rounded: 'radius',
      'border-width': 'border-width',
      opacity: 'opacity'
    };

    this.specialOverrides = {
      spacing: 'spacing',
      sizing: 'spacing',
      opacity: 'opacity',
      radius: 'border-radius'
    };
  }

  canProcess(token) {
    if (!['dimension', 'sizing', 'spacing', ...Object.keys(this.specialPrefixes)].includes(token.type)) {
      return false;
    }

    return true;
  }

  process(token) {
    const value = this.getTokenValue(token);

    let path = this.pathToKebabCase(this.processTokenPath(token).path);

    // Determine the appropriate prefix based on the first path segment
    let prefix = this.defaultPrefix;
    const firstSegment = path[0];

    if (firstSegment && this.specialPrefixes[firstSegment]) {
      prefix = this.specialPrefixes[firstSegment];
      // Remove the first segment since it becomes the prefix
      path = path.slice(1);
    } else {
      // For regular spacing tokens, remove redundant prefix if present
      const prefixKebab = toKebabCase(prefix);
      if (path[0] === prefixKebab) {
        path = path.slice(1);
      }
    }

    // Special handling for aspect ratio tokens - preserve original string value
    let processedValue = value;
    if (prefix === 'aspect') {
      // For aspect ratios, use the original value to preserve ratio format
      processedValue = token.original?.value || token.value || value;
    }

    if (prefix === 'opacity') {
      // Opacity needs to be in percentage so it doesn't break tailwinds color-mix.
      processedValue = `${(processedValue * 100).toFixed(0)}%`;
    }

    const name = path.join('-').replace(',', '.');

    if (this.specialOverrides[prefix]) {
      processedValue = this.getOverrideFormat({ prefix: this.specialOverrides[prefix], name, value: processedValue });
    }

    if (prefix === 'spacing' && name === '1') {
      return {
        type: 'spacing',
        name: `--${prefix}`,
        value: processedValue
      };
    }

    return {
      type: 'spacing',
      name: `--${prefix}-${name}`,
      value: processedValue
    };
  }
}
