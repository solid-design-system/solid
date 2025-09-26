import { BaseTokenProcessor } from './base.js';

/**
 * Processor for typography tokens
 */
export class TypographyTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return token.type === 'fontSize' || token.type === 'fontWeight';
  }

  process(token) {
    const processed = this.processTokenPath(token);
    const value = this.getTokenValue(token);

    if (['font-size'].includes(processed.path[0])) {
      processed.path = processed.path.slice(1);
    }

    const name = processed.path.join('-');
    const variable = {
      type: 'spacing',
      name: `--${name}`,
      value: this.cssvar(name),
      variant: 'default'
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

    return [variable, core];
  }
}
