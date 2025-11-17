import { BaseTokenProcessor } from './base.js';

/**
 * Processor for color tokens with theme support
 */
export class ColorTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    /* Namespaces that should be created as theme variables mapped to the respective css property */
    this.utilities = {
      'color-text': 'text-color',
      'color-background': 'background-color',
      'color-icon-fill': 'fill',
      'color-border': 'border-color'
    };

    /* Mapping of the semantic variables to the css property */
    this.semantic = {
      'icon-fill': 'fill',
      background: 'background-color',
      border: 'border-color',
      gradient: 'background-image',
      text: 'color'
    };
  }

  canProcess(token) {
    return token.type === 'color' && !token.name.endsWith('-shadow');
  }

  process(token, dictionary, options) {
    const { path, variant } = this.processTokenPath(token);
    const coreColors = this.#getCoreColors(dictionary, variant);

    const isUtility = this.isUtilityToken(path);
    const isComponent = !isUtility && path[0].startsWith('components');
    if (!isUtility && !isComponent) return [];

    const isCoreColor = this.#isCoreToken(path);
    const fallback = this.#getFallbackColor(token);
    const processed = isUtility
      ? this.#processUtilityToken(token)
      : this.#processComponentToken(token, variant, dictionary);

    const color = this.getTokenValue(token);

    const cssvariables = [];

    if (!isCoreColor && variant === options.defaultTheme) {
      const cssvar = processed.cssvar ?? processed.name;

      cssvariables.push({
        type: processed.type,
        name: processed.name,
        value: `rgba(${this.cssvar(cssvar)})`,
        properties: processed.properties,
        variant: 'default'
      });
    }

    if (isUtility && isCoreColor) {
      const variable = {
        type: 'color',
        name: this.cssprefix(fallback),
        value: this.#toRgb(color),
        variant
      };

      cssvariables.push(variable);
    }

    if (isUtility && !isCoreColor) {
      const coreToken = path.slice(1);
      coreToken.splice(1, 1);

      const replacement = Object.values(coreColors)
        .find(core => core.value === color)
        ?.path.join('-')
        .replace('-default', '');

      const variable = {
        type: 'color',
        name: this.cssprefix(processed.cssvar),
        value: replacement ? this.cssvar(this.cssprefix(replacement)) : color,
        variant
      };

      cssvariables.push(variable);
    }

    if (!isUtility) {
      const coreToken = this.#getCoreTokenFromColor(token.value, variant, dictionary);

      const variable = {
        type: 'color',
        name: this.cssprefix(processed.name),
        value: coreToken ? this.cssvar(coreToken.join('-')) : token.value,
        variant
      };

      cssvariables.push(variable);
    }

    return cssvariables;
  }

  #isCoreToken(token) {
    return (
      this.isUtilityToken(token) &&
      !['icon-fill', 'border', 'background', 'text', 'background-transparent'].includes(token?.[2])
    );
  }

  #getFallbackColor(token) {
    const processed = this.processTokenPath(token);
    const isUtility = this.isUtilityToken(processed.path);

    const fallback = processed.path.length > 4 ? processed.path.slice(3) : processed.path.slice(2);
    const name = `color-${fallback.join('-').replace('-default', '')}`;
    return isUtility ? name : `${processed.path[0]}-${name}`;
  }

  #getCoreTokenFromColor(color, variant, dictionary) {
    const coreColors = this.#getCoreColors(dictionary, variant);
    const token = Object.values(coreColors).find(core => core.value === color);

    if (!token) {
      return null;
    }

    return token.path.map(this.cleanupTokenName);
  }

  #processUtilityToken(token) {
    const processed = this.processTokenPath(token);
    const name = processed.path.slice(1).join('-').replace('-default', '');

    for (const [property, cssproperty] of Object.entries(this.utilities)) {
      if (!name.startsWith(property)) continue;

      return { type: 'color', name: `--${name.replace(property, cssproperty)}`, cssvar: `--${name}` };
    }

    return { type: 'color', name: `--${name}` };
  }

  #processComponentToken(token, variant, dictionary) {
    const processed = this.processTokenPath(token);

    const name = processed.path
      .slice(1)
      .map(p => p.replaceAll('--', '-'))
      .join('-')
      .replaceAll('-__', '__');

    const coreToken = this.#getCoreTokenFromColor(token.value, variant, dictionary)?.join('-');
    const value = `rgba(${this.cssvar(name, coreToken ? `rgba(${this.cssvar(coreToken)})` : token.value)})`;

    for (const [property, cssproperty] of Object.entries(this.semantic)) {
      if (name.includes(property)) {
        return { type: 'component', name, properties: `@utility ${name} {\n  ${cssproperty}: ${value};\n}` };
      }
    }

    return {
      type: 'component',
      name: `--${name}`,
      properties: `@utility ${name} {\n  background-color: ${value};\n}`
    };
  }

  #getCoreColors(dictionary, variant) {
    return this.getTokens('utilities', dictionary, variant).filter(
      utility =>
        utility.path[0] === 'color' &&
        !['icon-fill', 'border', 'background', 'text', 'background-transparent', 'gradient'].includes(utility.path[1])
    );
  }

  #toRgb(color) {
    if (color.startsWith('rgba')) {
      return color.slice(5, -1).replaceAll(',', '');
    }

    let h = color.replace(/^#/, '');
    if (h.length === 3)
      h = h
        .split('')
        .map(c => c + c)
        .join('');
    const num = parseInt(h, 16);
    // eslint-disable-next-line no-bitwise
    const r = (num >> 16) & 255;
    // eslint-disable-next-line no-bitwise
    const g = (num >> 8) & 255;
    // eslint-disable-next-line no-bitwise
    const b = num & 255;
    return [r, g, b].join(' ');
  }
}
