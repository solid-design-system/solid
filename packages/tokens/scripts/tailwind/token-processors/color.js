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

    /* Namepsaces that should be skipped and not processed */
    this.skip = ['ring'];

    /* Stores the history of processed color tokens. */
    this.processedHistory = [];
  }

  canProcess(token) {
    return token.type === 'color' && token.name !== 'shadow';
  }

  process(token, dictionary, options) {
    const { path, variant } = this.processTokenPath(token);
    if (this.skip.includes(path[0])) return [];

    const isCoreColor = this.#isUtilityToken(path);
    if (!isCoreColor && !token.path[2].startsWith('sd-')) return [];

    const fallback = this.#getFallbackColor(token);
    const processed = isCoreColor
      ? this.#processUtilityToken(token)
      : this.#processSemanticToken(token, dictionary, options);

    const cssvariables = [];

    if (variant === options.defaultTheme) {
      cssvariables.push({
        type: processed.type,
        name: processed.name,
        value: this.cssvar(processed.cssvar ?? processed.name, this.cssvar(fallback)),
        properties: processed.properties,
        variant: 'default'
      });
    }

    if (isCoreColor && variant !== 'default') {
      const variable = {
        type: 'color',
        name: this.cssprefix(fallback),
        value: this.getTokenValue(token),
        variant
      };

      /**
       * In case a core variable was already defined in the current variant, but the value differs,
       * then we should associate the color with the semantic variable instead.
       */
      const shouldOverrideSemanticVariable = !!this.processedHistory.find(
        t => t.name === variable.name && t.variant === variable.variant && t.value !== variable.value
      );

      if (shouldOverrideSemanticVariable) {
        variable.name = this.cssprefix(path.join('-'));
      }

      cssvariables.push(variable);
      this.processedHistory.push(variable);
    }

    return cssvariables;
  }

  reset() {
    this.processedHistory = [];
  }

  #isUtilityToken(token) {
    return token?.[0] === 'utilities';
  }

  #getFallbackColor(token) {
    const processed = this.processTokenPath(token);
    const isCoreColor = this.#isUtilityToken(processed.path);

    const fallback = processed.path.length > 4 ? processed.path.slice(3) : processed.path.slice(2);
    const name = `color-${fallback.join('-').replace('-default', '')}`;
    const color = isCoreColor ? name : `${processed.path[0]}-${name}`;

    if (color === 'color-') {
      console.log(token);
    }
    return color;
  }

  #getCoreTokenFromColor(color, dictionary, options) {
    let found = null;
    Object.values(dictionary).forEach(item => {
      if (found) return;

      Object.values(item).forEach(i => {
        if (found) return;

        if (i.key?.startsWith(`{${options.defaultTheme}.`)) {
          if (i.value !== color) return;
          found = i;
        }
      });
    });

    return this.cleanupTokenName(`color-${found.path.at(-1)}`);
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

  #processSemanticToken(token, dictionary, options) {
    const processed = this.processTokenPath(token);

    const name = processed.path.join('-');
    const value = this.cssvar(name, this.cssvar(this.#getCoreTokenFromColor(token.value, dictionary, options)));

    for (const [property, cssproperty] of Object.entries(this.semantic)) {
      if (name.includes(property)) {
        return { type: 'utility', name, properties: `@utility ${name} {\n  ${cssproperty}: ${value};\n}` };
      }
    }

    return { type: 'utility', name: `--${name}`, properties: `@utility ${name} {\n  background-color: ${value};\n}` };
  }
}
