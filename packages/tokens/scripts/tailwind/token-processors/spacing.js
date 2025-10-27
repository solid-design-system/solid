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
      (token.path.includes('utilities') && Object.keys(this.spacingTokens).some(p => token.path[2] === p)) ||
      (token.path.includes('components') && token.type === 'float')
    );
  }

  process(token, dictionary, options) {
    const { path, variant } = this.processTokenPath(token);
    if (path.length <= 2) return [];

    const isUtility = this.#isUtilityToken(path);
    const isComponent = !isUtility && path[0].startsWith('components');
    if (!isUtility && !isComponent) return [];

    const processed = isUtility
      ? this.#processUtilityToken(token)
      : this.#processComponentToken(token, dictionary, options);

    const cssvariables = [];

    if (isUtility) {
      cssvariables.push({
        ...processed,
        name: this.cssprefix(processed.name),
        variant,
        value: processed.value
      });

      if (variant === options.defaultTheme) {
        cssvariables.push({
          type: 'spacing',
          name: `--${processed.name}`,
          value: this.cssvar(processed.name),
          variant: 'default'
        });
      }

      if (processed.name === 'spacing-1' && variant === options.defaultTheme) {
        cssvariables.push({
          type: 'spacing',
          name: '--spacing',
          value: this.cssvar('spacing-1'),
          variant: 'default'
        });
      }
    }

    if (isComponent) {
      if (variant === options.defaultTheme) {
        cssvariables.push(processed);
      }

      const value = this.getTokenValue(token);
      const core = this.#getCoreToken(token, variant, dictionary);

      cssvariables.push({
        type: 'spacing',
        name: this.cssprefix(processed.name),
        value: core ? this.cssvar(core.join('-')) : this.#toRem(value),
        variant
      });
    }

    return cssvariables;
  }

  #isUtilityToken(token) {
    return token?.[0] === 'utilities';
  }

  #processUtilityToken(token) {
    const processed = this.processTokenPath(token);
    let value = this.getTokenValue(token);
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
        value = this.#toRem(value);
        break;
    }

    const name = `${prefix}-${processed.path.join('-')}`;
    return {
      type: 'spacing',
      prefix,
      name,
      value,
      variant: processed.variant
    };
  }

  #processComponentToken(token, dictionary, options) {
    const processed = this.processTokenPath(token);

    const name = processed.path
      .slice(1)
      .map(p => p.replaceAll('--', '-'))
      .join('-')
      .replaceAll('-__', '__');

    const cssproperty = processed.path.at(-1);
    const value = this.getTokenValue(token);

    const core = this.#getCoreToken(token, options.defaultTheme, dictionary);

    return {
      type: 'component',
      name,
      properties: `@utility ${name} {\n ${cssproperty}: ${this.cssvar(name, core ? this.cssvar(core.join('-')) : this.#toRem(value))};\n}\n`
    };
  }

  #getCoreToken(token, variant, dictionary) {
    const spacings = this.#getCoreSpacings(dictionary, variant);
    const value = this.getTokenValue(token);
    const core = spacings.find(c => c.value === value);

    if (!core) {
      return null;
    }

    return core.path.map(this.cleanupTokenName);
  }

  #getCoreSpacings(dictionary, variant) {
    return this.getTokens('utilities', dictionary, variant).filter(node => {
      return node.path[0] === 'spacing';
    });
  }

  #toRem(value) {
    if (value === '0') return value;

    return `${value / 16}rem`;
  }
}
