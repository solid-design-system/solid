import { BaseTokenProcessor } from './base.js';
import { toKebabCase } from './utils.js';

/**
 * Processor for spacing/dimension tokens with proper Tailwind CSS v4 naming
 */
export class SpacingTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
    this.defaultPrefix = 'spacing';

    // Define special mapping of prefixes for specific token names
    this.specialPrefixes = {
      aspect: 'aspect',
      sizing: 'sizing',
      rounded: 'radius',
      'border-width': 'border-width',
      opacity: 'opacity'
    };
  }

  canProcess(token) {
    if (!['dimension', 'sizing', 'spacing', 'float', ...Object.keys(this.specialPrefixes)].includes(token.type)) {
      return false;
    }

    return true;
  }

  process(token) {
    const processed = this.processTokenPath(token);
    let value = this.getTokenValue(token);
    let prefix = this.defaultPrefix;

    if (processed.path.length === 1) return [];

    const formatedPrefix = processed.path[0]?.split('-').shift();
    console.log(processed.path[0], processed.variant);
    if (processed.path[0] && this.specialPrefixes[formatedPrefix]) {
      prefix = this.specialPrefixes[formatedPrefix];
      processed.path = processed.path.slice(1);
    } else {
      const prefixKebab = toKebabCase(prefix);
      if (processed.path[0] === prefixKebab) {
        processed.path = processed.path.slice(1);
      }
    }

    if (!processed.path.length) return [];

    switch (prefix) {
      case 'aspect':
        // Special handling for aspect ratio tokens - preserve original string value
        value = token.original?.value || token.value || value;
        break;
      case 'opacity':
        // Opacity needs to be in percentage so it doesn't break tailwinds color-mix.
        value = `${value}%`;
        break;
      default:
        value = `${value / 16}rem`;
        break;
    }

    const name = `${prefix}-${processed.path.join('-').replace(',', '\\.').replace('/', '\\/')}`;
    const variable = {
      type: 'spacing',
      name: `--${name}`,
      variant: 'default',
      value: this.cssvar(name)
    };

    const core =
      processed.variant !== 'default'
        ? {
            ...variable,
            name: this.cssprefix(name),
            value,
            variant: processed.variant
          }
        : undefined;

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
