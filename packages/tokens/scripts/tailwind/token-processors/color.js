import { BaseTokenProcessor } from './base.js';

/**
 * Processor for color tokens with theme support
 */
export class ColorTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    /* Namespaces that should be created as theme variables */
    this.core = ['background-transparent', 'background', 'border', 'icon-fill', 'outline', 'ring', 'risk', 'text'];

    /* Namespaces that are not core colors, but should be created as theme variables */
    this.semicore = ['gradient'];
  }

  canProcess(token) {
    return token.type === 'color';
  }

  process(token, dictionary) {
    const { path: _path, variant } = this.processTokenPath(token);
    const path = this.pathToKebabCase(_path);
    const isCoreColor = this.core.includes(path[0]);
    const isSemicoreColor = this.semicore.includes(path[0]);

    const { variable, value } = this.getFormattedValue({
      prefix: isCoreColor ? 'color' : `${path[0]}`,
      name: path.slice(1).join('-'),
      value: this.getTokenValue(token)
    });

    const { type, name, properties } = isCoreColor
      ? this.getCoreToken(path.join('-'))
      : this.getSemanticToken(
          path.join('-'),
          isSemicoreColor
            ? `var(--sd-${path.join('-')})`
            : `var(--sd-${path.join('-')}, var(${this.getCoreTokenFromValue(token, dictionary)}))`
        );

    const variables = [
      {
        type,
        name,
        value: `var(--sd-${path.join('-')}, var(${variable}))`,
        properties,
        variant: 'default'
      }
    ];

    if (isCoreColor || isSemicoreColor) {
      variables.push({
        type: 'color',
        name: variable,
        value,
        variant
      });
    }

    return variables;
  }

  getCoreTokenFromValue(token, dictionary) {
    let found = null;
    Object.values(dictionary).forEach(item => {
      if (found) return;

      Object.values(item).forEach(i => {
        if (found) return;

        if (!i.key?.startsWith('{core.')) {
          if (i.value !== token.value) return;
          found = i;
        }
      });
    });

    return this.cleanupTokenName(`--sd-color-${found.path.at(-1)}`);
  }

  getCoreToken(token) {
    if (token.startsWith('background')) {
      return { type: 'color', name: `--${token.replace('background', 'background-color')}` };
    }

    if (token.startsWith('text')) {
      return { type: 'color', name: `--${token.replace('text', 'text-color')}` };
    }

    if (token.startsWith('border')) {
      return { type: 'color', name: `--${token.replace('border', 'border-color')}` };
    }

    if (token.startsWith('icon-fill')) {
      return { type: 'color', name: `--${token.replace('icon-fill', 'fill')}` };
    }

    if (token.startsWith('outline')) {
      return { type: 'color', name: `--${token.replace('outline', 'outline-color')}` };
    }

    if (token.startsWith('ring')) {
      return { type: 'color', name: `--${token.replace('ring', 'ring-color')}` };
    }

    return { type: 'color', name: `--color-${token}` };
  }

  getSemanticToken(token, value) {
    if (token.includes('background')) {
      return { type: 'utility', name: token, properties: `@utility ${token} {\n  background-color: ${value};\n}` };
    }

    if (token.includes('text')) {
      return { type: 'utility', name: token, properties: `@utility ${token} {\n  color: ${value};\n}` };
    }

    if (token.includes('border')) {
      return { type: 'utility', name: token, properties: `@utility ${token} {\n  border-color: ${value};\n}` };
    }

    if (token.includes('icon-fill')) {
      return { type: 'utility', name: token, properties: `@utility ${token} {\n  fill: ${value};\n}` };
    }

    if (token.includes('gradient')) {
      return { type: 'utility', name: token, properties: `@utility ${token} {\n  background-image: ${value};\n}` };
    }

    return { type: 'color', name: `--${token}` };
  }
}
