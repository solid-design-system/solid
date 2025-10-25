import { BaseTokenProcessor } from './base.js';

/**
 * Processor for spacing/dimension tokens with proper Tailwind CSS v4 naming
 */
export class SpacingTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    // Define special mapping of prefixes for specific token names
    this.spacingTokens = {
      aspect: 'aspect',
      sizing: 'sizing',
      spacing: 'spacing',
      rounded: 'radius',
      'border-width': 'border-width',
      opacity: 'opacity'
    };
  }

  canProcess(token) {
    return (
      ['dimension'].includes(token.type) ||
      (token.path.includes('utilities') && Object.keys(this.spacingTokens).some(p => token.path[2] === p))
    );
  }

  process(token) {
    const processed = this.processTokenPath(token);
    let value = this.getTokenValue(token);
    if (processed.path.length <= 2) return [];

    const prefix = this.spacingTokens[processed.path[1]] || processed.path[1];
    processed.path = processed.path.slice(2);

    switch (prefix) {
      case 'aspect':
        value = token.original.value;
        break;
      case 'opacity':
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
