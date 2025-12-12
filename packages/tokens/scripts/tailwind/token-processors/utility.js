import { BaseTokenProcessor } from './base.js';
import { toKebabCase } from './utils.js';

/**
 * Processor for utility tokens that generate @utility directives
 */
export class UtilityTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    // Known utilities that are just a single property
    this.specialUtilities = {
      'z-': 'z-index'
    };
  }

  canProcess(token) {
    return (
      token.type === 'utility' ||
      (token.path.includes('utilities') && !['color', 'shadow'].some(group => token.path.includes(group)))
    );
  }

  process(token) {
    const value = this.getTokenValue(token);
    const { path } = this.processTokenPath(token);
    const name = path.join('');

    const special = Object.entries(this.specialUtilities).find(([utility]) => name.startsWith(utility))?.[1];
    if (special) {
      const properties = `${special}: ${value}`;

      return {
        type: 'utility',
        name,
        value: `@utility ${name} {\n  ${properties};\n}`,
        properties: `@utility ${name} {\n  ${properties};\n}`
      };
    }

    if (typeof value !== 'object') {
      return null;
    }

    const properties = Object.entries(value)
      .map(([key, val]) => {
        const cssKey = toKebabCase(key);
        const cssValue = typeof val === 'object' && val !== null && 'value' in val ? val.value : val;
        return `${cssKey}: ${cssValue}`;
      })
      .join(';\n  ');

    return {
      type: 'utility',
      name,
      value: `@utility ${name} {\n  ${properties};\n}`,
      properties: `@utility ${name} {\n  ${properties};\n}`
    };
  }
}
