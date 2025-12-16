import { BaseTokenProcessor } from './base.js';

/**
 * Processor for typography tokens
 */
export class TypographyTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    this.tokensMap = {
      'font-family': 'font',
      'font-size': null
    };
  }

  canProcess(token) {
    return token.type === 'fontSize' || token.type === 'fontWeight' || token.path.includes('font-family');
  }

  process(token) {
    const processed = this.processTokenPath(token);
    const value = this.getTokenValue(token);

    if (['utilities', 'components'].includes(processed.path[0])) {
      processed.path = processed.path.slice(1);
    }

    const mapped = this.tokensMap[processed.path[0]];
    if (mapped !== undefined) {
      processed.path[0] = mapped;
      processed.path = processed.path.filter(Boolean);
    }

    const name = processed.path.join('-');

    const cssvariables = [];
    cssvariables.push({
      type: 'spacing',
      name: `--${name}`,
      value: this.cssvar(name),
      variant: 'default'
    });

    cssvariables.push({
      type: 'spacing',
      name: this.cssprefix(name),
      value: token.type === 'string' ? `'${value}'` : value,
      variant: processed.variant
    });

    return cssvariables;
  }
}
