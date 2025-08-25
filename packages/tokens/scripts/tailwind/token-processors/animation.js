import { BaseTokenProcessor } from './base.js';

/**
 * Processor for animation-related tokens (duration, cubicBezier)
 */
export class AnimationTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return ['duration', 'animation', 'keyframes'].includes(token.type);
  }

  process(token) {
    const value = token.type === 'transition' ? token.original.value || token.value : this.getTokenValue(token);
    const path = this.pathToKebabCase(this.processTokenPath(token).path);

    switch (token.type) {
      case 'duration':
        return this.processDuration(path, value);

      case 'keyframes':
        return this.processKeyframes(path, value);

      case 'animation':
        return this.processAnimation(path, value);

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

  processKeyframes(path, value) {
    if (path[0] === 'keyframes') {
      path = path.slice(1);
    }

    const name = path.join('-');

    let css = `@keyframes ${name} {\n`;

    for (const [percentage, styles] of Object.entries(value)) {
      css += `  ${percentage} {\n`;

      if (typeof styles === 'object' && styles !== null) {
        for (const [property, styleValue] of Object.entries(styles)) {
          const cssProperty = this.pathToKebabCase(property);
          css += `    ${cssProperty}: ${styleValue};\n`;
        }
      }

      css += `  }\n`;
    }

    css += `}`;

    const r = {
      type: 'keyframes',
      name,
      value: css
    };

    return r;
  }

  processAnimation(path, value) {
    if (path[0] === 'animation') {
      path = path.slice(1);
    }

    return {
      type: 'animation',
      name: `--animate-${path.join('-')}`,
      value: value
    };
  }
}
