import { BaseTokenProcessor } from './base.js';

/**
 * Processor for color tokens with theme support
 */
export class ColorTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    /* Namespaces that should be created as theme variables mapped to the respective css property */
    this.core = {
      'background-transparent': 'background-color-transparent',
      'icon-fill': 'fill',
      background: 'background-color',
      border: 'border-color',
      outline: 'outline-color',
      ring: 'ring-color',
      risk: 'color-risk',
      text: 'text-color'
    };

    /* Namespaces that are not core colors, but should be created as theme variables */
    this.semicore = ['gradient'];

    /* Mapping of the semantic variables to the css property */
    this.semantic = {
      'icon-fill': 'fill',
      background: 'background-color',
      border: 'border-color',
      gradient: 'background-image',
      text: 'color'
    };

    /* Namespaces that were added manually, and are not available in themes */
    this.manual = ['risk'];

    /* Stores the history of processed color tokens. */
    this.processedHistory = [];
  }

  canProcess(token) {
    return token.type === 'color';
  }

  process(token, dictionary, options) {
    const { path, variant } = this.processTokenPath(token);
    const isCoreColor = this.#isCoreToken(path[0]);
    const isSemicoreColor = this.#isSemicoreToken(path[0]);

    const processed = isCoreColor ? this.#processCoreToken(token) : this.#processSemanticToken(token, dictionary);
    const fallback = this.#getFallbackColor(token);

    const cssvariables = [];

    if ((processed.type === 'utility' && variant === options.defaultTheme) || processed.type !== 'utility') {
      cssvariables.push({
        type: processed.type,
        name: processed.name,
        value: this.cssvar(path.join('-'), this.cssvar(fallback)),
        properties: processed.properties,
        variant: 'default'
      });
    }

    if (isCoreColor || isSemicoreColor) {
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

  #isCoreToken(token) {
    return Object.keys(this.core).includes(token);
  }

  #isSemicoreToken(token) {
    return this.semicore.includes(token);
  }

  #getFallbackColor(token) {
    const processed = this.processTokenPath(token);
    const isCoreColor = this.#isCoreToken(processed.path[0]);

    const prefix = isCoreColor ? 'color' : processed.path[0];
    const name = this.manual.includes(processed.path[0]) ? processed.path.join('-') : processed.path.slice(1).join('-');
    return `${prefix}-${name}`;
  }

  #getCoreTokenFromColor(color, dictionary) {
    let found = null;
    Object.values(dictionary).forEach(item => {
      if (found) return;

      Object.values(item).forEach(i => {
        if (found) return;

        if (!i.key?.startsWith('{core.')) {
          if (i.value !== color) return;
          found = i;
        }
      });
    });

    return this.cleanupTokenName(`color-${found.path.at(-1)}`);
  }

  #processCoreToken(token) {
    const processed = this.processTokenPath(token);
    const name = processed.path.join('-');

    for (const [property, cssproperty] of Object.entries(this.core)) {
      if (name.startsWith(property)) {
        return { type: 'color', name: `--${name.replace(property, cssproperty)}` };
      }
    }

    return { type: 'color', name: `--color-${name}` };
  }

  #processSemanticToken(token, dictionary) {
    const processed = this.processTokenPath(token);
    const isSemicoreColor = this.#isSemicoreToken(processed.path[0]);

    const name = processed.path.join('-');
    const value = isSemicoreColor
      ? this.cssvar(name)
      : this.cssvar(name, this.cssvar(this.#getCoreTokenFromColor(token.value, dictionary)));

    for (const [property, cssproperty] of Object.entries(this.semantic)) {
      if (name.includes(property)) {
        return { type: 'utility', name, properties: `@utility ${name} {\n  ${cssproperty}: ${value};\n}` };
      }
    }

    return { type: 'utility', name: `--${name}`, properties: `@utility ${name} {\n  background-color: ${value};\n}` };
  }
}
