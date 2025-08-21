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
    const value = token.type === 'transition' ? token.original.value || token.value : this.getTokenValue(token);

    const path = this.pathToKebabCase(this.processTokenPath(token).path);

    switch (token.type) {
      case 'duration':
        return this.processDuration(path, value);

      default:
        return null;
    }
  }

  processDuration(path, value) {
    if (path[0] === 'duration') {
      path = path.slice(1);
    }

    return {
      type: 'animation',
      name: `--transition-duration-${path.join('-')}`,
      value: `var(--sd-duration-${path.join('-')}, ${value}ms)`
    };
  }
}
