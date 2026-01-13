import { BaseTokenProcessor } from './base.js';

export class TypographyTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    this.tokensMap = {
      'font-family': 'font',
      'font-size': null,
      text: 'text'
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
      token.type === 'fontSizes' ||
      token.type === 'fontWeight' ||
      token.path.includes('font-family') ||
      token.path.includes('font-weight') ||
      (token.path.includes('utilities') && token.path.includes('text') && token.type === 'float')
    );
  }

  process(token, dictionary, options) {
    const processed = this.processTokenPath(token);
    let value = this.getTokenValue(token);

    const isFontWeight = token.path.includes('font-weight');
    const isFontSize = token.path.includes('text') && token.type === 'float';

    if (isFontWeight) {
      const themeMap = this.fontWeightMap[processed.variant] || this.fontWeightMap.default;
      if (themeMap[value]) {
        value = themeMap[value];
      }
    }

    if (isFontSize) {
      value = `${value / 16}rem`;
    }

    const isUtility = this.isUtilityToken(processed.path);
    const isComponent = !isUtility && processed.path[0].startsWith('components');

    if (isComponent && isFontWeight) {
      return this.#processComponentToken(token, value, processed.variant, dictionary, options);
    }

    if (!isUtility && !isComponent) {
      return [];
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

    if (processed.variant === options.defaultTheme) {
      cssvariables.push({
        type: 'spacing',
        name: `--${name}`,
        value: this.cssvar(name),
        variant: 'default'
      });
    }

    cssvariables.push({
      type: 'spacing',
      name: this.cssprefix(name),
      value: isFontWeight ? value : token.type === 'string' ? `'${value}'` : value,
      variant: processed.variant
    });

    return cssvariables;
  }

  #processComponentToken(token, value, variant, dictionary, options) {
    const processed = this.processTokenPath(token);

    const name = processed.path
      .slice(1)
      .map(p => p.replaceAll('--', '-'))
      .join('-')
      .replaceAll('-__', '__');

    const cssvariables = [];

    const core = this.#getCoreToken(token, options.defaultTheme, dictionary);

    if (variant === options.defaultTheme) {
      cssvariables.push({
        type: 'component',
        name,
        properties: `@utility ${name} {\n  font-weight: ${this.cssvar(name, core ? this.cssvar(core.join('-')) : value)};\n}`
      });
    }

    cssvariables.push({
      type: 'spacing',
      name: this.cssprefix(name),
      value: core ? this.cssvar(core.join('-')) : value,
      variant
    });

    return cssvariables;
  }

  #getCoreToken(token, variant, dictionary) {
    const fontWeights = this.#getCoreFontWeights(dictionary, variant);
    const value = this.getTokenValue(token);

    const themeMap = this.fontWeightMap[variant] || this.fontWeightMap.default;
    const mappedValue = themeMap[value] || value;

    const core = fontWeights.find(c => {
      const coreValue = this.getTokenValue(c);
      const coreMapped = themeMap[coreValue] || coreValue;
      return coreMapped === mappedValue;
    });

    if (!core) {
      return null;
    }

    return core.path.map(this.cleanupTokenName);
  }

  #getCoreFontWeights(dictionary, variant) {
    return this.getTokens('utilities', dictionary, variant).filter(node => {
      return node.path[0] === 'font-weight';
    });
  }
}
