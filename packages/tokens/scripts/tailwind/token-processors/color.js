import { BaseTokenProcessor } from './base.js';

/**
 * Processor for color tokens with theme support
 */
export class ColorTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return token.type === 'color';
  }

  process(token) {
    const { path: _path, variant } = this.processTokenPath(token);
    const path = this.pathToKebabCase(_path);
    const { variable, value } = this.getFormattedValue({
      prefix: 'color',
      name: path.join('-'),
      value: this.getTokenValue(token)
    });
    const { type, name, properties } = this.getTokenInfo(path.join('-'), `var(${variable})`, variant);

    // TODO: Replace by check if variant !== default
    if (variant !== 'light') {
      return {
        type: 'color',
        name: variable,
        value,
        variant
      };
    }

    return [
      {
        type,
        name,
        value: `var(${variable})`,
        properties,
        variant: 'default'
      },
      {
        type: 'color',
        name: variable,
        value,
        variant
      }
    ];
  }

  getTokenInfo(token, value) {
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

    return { type: 'color', name: `--color-${token}` };
  }
}
