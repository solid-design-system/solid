import { BaseTokenProcessor } from './base.js';

/**
 * Processor for animation-related tokens (duration, cubicBezier)
 */
export class AnimationTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return ['duration'].includes(token.type);
  }

  process(token) {
    // For transition tokens, we need to work with the original value object
    // before Style Dictionary tries to resolve it as a string
    const value = token.type === 'transition' ? token.original.value || token.value : this.getTokenValue(token);

    // Use global theme processing logic
    const { finalPath, variant, isTheme } = this.processTokenPath(token);

    // Convert to kebab-case
    let path = this.pathToKebabCase(finalPath);

    // Remove the "animation" prefix if present (first segment)
    if (path[0] === 'animation') {
      path = path.slice(1);
    }

    // Handle different animation token types
    switch (token.type) {
      case 'duration':
        return this.processDuration(path, value, variant, isTheme);

      default:
        return null;
    }
  }

  processDuration(path, value, variant, isTheme) {
    // Remove redundant "duration" from path
    if (path[0] === 'duration') {
      path = path.slice(1);
    }

    return {
      type: 'animation',
      name: `--transition-duration-${path.join('-')}`,
      value: `var(--sd-duration-${path.join('-')}, ${value}ms)`,
      variant,
      isTheme
    };
  }
}
