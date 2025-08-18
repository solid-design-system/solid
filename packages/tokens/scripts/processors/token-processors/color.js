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
    // Use global theme processing logic
    const { finalPath, variant, isTheme } = this.processTokenPath(token);

    // Convert final path to kebab-case for CSS variable name
    const path = this.pathToKebabCase(finalPath);
    const name = this.getName(path.join('-'));
    const value = this.getOverrideFormat({ prefix: 'color', name: path.at(-1), value: this.getTokenValue(token) });

    return {
      type: 'color',
      name: `--${name}`,
      value,
      variant,
      isTheme
    };
  }

  getName(token) {
    if (token.startsWith('background')) {
      return token.replace('background', 'background-color');
    }

    if (token.startsWith('text')) {
      return token.replace('text', 'text-color');
    }

    if (token.startsWith('border')) {
      return token.replace('border', 'border-color');
    }

    if (token.startsWith('icon-fill')) {
      return token.replace('icon-fill', 'fill');
    }

    if (token.includes('background')) {
      return `background-color-${token}`;
    }

    if (token.includes('text')) {
      return `text-color-${token}`;
    }

    if (token.includes('border')) {
      return `border-color-${token}`;
    }

    if (token.includes('icon-fill')) {
      return `fill-${token}`;
    }

    return `color-${token}`;
  }
}
