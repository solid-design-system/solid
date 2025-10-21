import { BaseTokenProcessor } from './base.js';
import pc from 'picocolors';

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

    /* Namepsaces that should be skipped and not processed */
    this.skip = ['ring'];

    /* Stores the history of processed color tokens. */
    this.processedHistory = [];
  }

  canProcess(token) {
    return token.type === 'color' && !token.name.endsWith('-shadow');
  }

  process(token, dictionary, options) {
    const { path, variant } = this.processTokenPath(token);
    const coreColors = this.#getCoreColors(dictionary, variant);
    if (this.skip.includes(path[0])) return [];

    const isUtility = this.#isUtilityToken(path);
    const isCoreColor = this.#isCoreToken(path);
    if (!isUtility && !token.path[2].startsWith('sd-')) return [];

    const fallback = this.#getFallbackColor(token);
    const processed = isUtility
      ? this.#processUtilityToken(token)
      : this.#processComponentToken(token, variant, dictionary);

    const cssvariables = [];

    if (!isCoreColor && variant === options.defaultTheme) {
      const cssvar = processed.cssvar ?? processed.name;

      cssvariables.push({
        type: processed.type,
        name: processed.name,
        value: this.cssvar(cssvar, cssvar.replace('--', '') === fallback ? undefined : this.cssvar(fallback)),
        properties: processed.properties,
        variant: 'default'
      });
    }

    if (isUtility && isCoreColor && variant !== 'default') {
      const variable = {
        type: 'color',
        name: this.cssprefix(fallback),
        value: this.getTokenValue(token),
        variant
      };

      cssvariables.push(variable);
      this.processedHistory.push(variable);
    }

    if (isUtility && !isCoreColor && variant !== 'default') {
      const coreToken = path.slice(1);
      coreToken.splice(1, 1);

      const color = this.getTokenValue(token);
      const coreColor = Object.values(coreColors).find(core => core.path.join('-') === coreToken.join('-'))?.value;

      if (color !== coreColor) {
        const replacement = Object.values(coreColors).find(core => core.value === color);
        const variable = {
          type: 'color',
          name: this.cssprefix(processed.cssvar),
          value: replacement ? this.cssvar(this.cssprefix(replacement.path.join('-').replace('-default', ''))) : color,
          variant
        };

        cssvariables.push(variable);
        this.processedHistory.push(variable);
      }
    }

    return cssvariables;
  }

  reset() {
    this.processedHistory = [];
  }

  #isUtilityToken(token) {
    return token?.[0] === 'utilities';
  }

  #isCoreToken(token) {
    return (
      this.#isUtilityToken(token) &&
      !['icon-fill', 'border', 'background', 'text', 'background-transparent'].includes(token?.[2])
    );
  }

  #getFallbackColor(token) {
    const processed = this.processTokenPath(token);
    const isUtility = this.#isUtilityToken(processed.path);

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

    return this.cleanupTokenName(`${token.path.join('-').replace('-default', '')}`);
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

    const coreToken = this.#getCoreTokenFromColor(token.value, variant, dictionary);

    if (!coreToken) {
      console.error(
        pc.redBright(`Fallback primitive color not found for token: ${pc.red(name)} - ${pc.red(token.value)}`)
      );
    }

    const value = this.cssvar(name, coreToken ? this.cssvar(coreToken) : undefined);

    for (const [property, cssproperty] of Object.entries(this.semantic)) {
      if (name.includes(property)) {
        return { type: 'utility', name, properties: `@utility ${name} {\n  ${cssproperty}: ${value};\n}` };
      }
    }

    return { type: 'utility', name: `--${name}`, properties: `@utility ${name} {\n  background-color: ${value};\n}` };
  }

  #getCoreColors(dictionary, variant) {
    const root = dictionary?.tokens?.[variant]?.utilities;
    if (!root || typeof root !== 'object') return [];

    const results = [];
    const stack = [root];

    while (stack.length) {
      const node = stack.pop();

      if (node && typeof node === 'object' && 'path' in node) {
        results.push({
          path: node.path.slice(2).map(this.cleanupTokenName),
          value: node.value
        });
        continue;
      }

      if (node && typeof node === 'object') {
        for (const value of Object.values(node)) {
          if (value && typeof value === 'object') stack.push(value);
        }
      }
    }

    return results.filter(
      node =>
        node.path[0] === 'color' &&
        !['icon-fill', 'border', 'background', 'text', 'background-transparent', 'gradient'].includes(node.path[1])
    );
  }
}
