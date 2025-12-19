import { BaseTokenProcessor } from './base.js';

export class TypographyTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    this.tokensMap = {
      'font-family': 'font',
      'font-size': null
    };

    this.fontWeightMap = {
      default: {
        Regular: '400',
        Semibold: '600',
        Bold: '600',
        Bk: '400'
      },
      VB: {
        Regular: '400',
        Semibold: '600',
        Bold: '700'
      },
      KID: {
        Regular: '400',
        Semibold: '600',
        Bold: '700'
      }
    };
  }

  canProcess(token) {
    return (
      token.type === 'fontSize' ||
      token.type === 'fontWeight' ||
      token.path.includes('font-family') ||
      token.path.includes('font-weight')
    );
  }

  process(token) {
    const processed = this.processTokenPath(token);
    let value = this.getTokenValue(token);

    const isFontWeight = token.path.includes('font-weight');

    if (isFontWeight) {
      const themeMap = this.fontWeightMap[processed.variant] || this.fontWeightMap.default;
      if (themeMap[value]) {
        value = themeMap[value];
      }
    }

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
      value: isFontWeight ? value : token.type === 'string' ? `'${value}'` : value,
      variant: processed.variant
    });

    return cssvariables;
  }
}
