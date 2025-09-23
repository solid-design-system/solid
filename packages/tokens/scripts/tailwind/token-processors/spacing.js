import { BaseTokenProcessor } from './base.js';
import { toKebabCase } from './utils.js';

/**
 * Processor for spacing/dimension tokens with proper Tailwind CSS v4 naming
 */
export class SpacingTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
    this.defaultPrefix = 'spacing';

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
    const processed = this.processTokenPath(token);
    let value = this.getTokenValue(token);
    let prefix = this.defaultPrefix;

    if (processed.path[0] && this.specialPrefixes[processed.path[0]]) {
      prefix = this.specialPrefixes[processed.path[0]];
      processed.path = processed.path.slice(1);
    } else {
      const prefixKebab = toKebabCase(prefix);
      if (processed.path[0] === prefixKebab) {
        processed.path = processed.path.slice(1);
      }
    }

    switch (prefix) {
      case 'aspect':
        // Special handling for aspect ratio tokens - preserve original string value
        value = token.original?.value || token.value || value;
        break;
      case 'opacity':
        // Opacity needs to be in percentage so it doesn't break tailwinds color-mix.
        value = `${(value * 100).toFixed(0)}%`;
        break;
    }

    const name = `${prefix}-${processed.path.join('-').replace(',', '\\.').replace('/', '\\/')}`;
    const variable = {
      type: 'spacing',
      name: `--${name}`,
      value: this.cssvar(name),
      variant: 'default'
    };

    const core = {
      ...variable,
      name: this.cssprefix(name),
      value,
      variant: processed.variant
    };

    if (name === 'spacing-1') {
      return [
        variable,
        core,
        { ...variable, name: `--${prefix}`, value: this.cssvar(prefix) },
        { ...core, name: this.cssprefix(prefix) }
      ];
    }

    return [variable, core];
  }
}
