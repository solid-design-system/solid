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
    const value = this.getTokenValue(token);

    // Use global theme processing logic
    const { finalPath, variant, isTheme } = this.processTokenPath(token);

    // Convert final path to kebab-case for CSS variable name
    const kebabPath = this.pathToKebabCase(finalPath);

    return {
      type: 'color',
      name: `--${this.getName(kebabPath.join('-'))}`,
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
