import { BaseTokenProcessor } from './base.js';

/**
 * Processor for typography tokens
 */
export class TypographyTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return token.type === 'fontSize';
  }

  process(token) {
    const path = this.pathToKebabCase(this.processTokenPath(token).path);
    const name = path.join('-').replace('font-size-', '');
    const value = this.getTokenValue(token);

    return {
      type: 'typography',
      name: `--${name}`,
      value: this.getOverrideFormat({ name, value })
    };
  }
}
