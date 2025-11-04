import { BaseTokenProcessor } from './base.js';

/**
 * Processor for shadow tokens
 */
export class ShadowTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);

    this.store = {};
  }

  canProcess(token) {
    return token.type === 'boxShadow' || token.type === 'shadow' || token.path.includes('shadow');
  }

  process(token, _, options) {
    const processed = this.processTokenPath(token);

    const isUtility = this.isUtilityToken(processed.path);
    if (!isUtility) return [];

    const [, , size, property] = processed.path;
    if (!this.store[[processed.variant]]) this.store[processed.variant] = {};
    if (!this.store[processed.variant][size]) this.store[processed.variant][size] = {};
    this.store[processed.variant][size][property] = this.getTokenValue(token);

    const properties = this.store[processed.variant][size];
    const canProcess = ['y', 'x', 'spread', 'blur', 'color'].every(k => k in properties);
    if (!canProcess) return [];

    processed.path = processed.path.slice(2);

    const cssvariables = [];

    if (processed.variant === options.defaultTheme) {
      cssvariables.push(
        {
          type: 'shadow',
          name: `--shadow-${size}`,
          value: this.cssvar(this.cssprefix(`shadow-${size}`)),
          variant: 'default'
        },
        {
          type: 'shadow',
          name: `--drop-shadow-${size}`,
          value: this.cssvar(this.cssprefix(`drop-shadow-${size}`)),
          variant: 'default'
        }
      );
    }

    const shadowValue = ['y', 'x', 'spread', 'blur', 'color'].reduce(
      (acc, key) => this.#reduceShadowValue(acc, key, properties[key]),
      ''
    );

    const dropShadowValue = ['y', 'x', 'blur', 'color'].reduce(
      (acc, key) => this.#reduceShadowValue(acc, key, properties[key]),
      ''
    );

    cssvariables.push(
      {
        type: 'shadow',
        name: this.cssprefix(`shadow-${size}`),
        value: shadowValue,
        variant: processed.variant
      },
      {
        type: 'shadow',
        name: this.cssprefix(`drop-shadow-${size}`),
        value: dropShadowValue,
        variant: processed.variant
      }
    );

    cssvariables.forEach(v => {
      v.name = v.name.replace('-default', '');
    });
    return cssvariables;
  }

  #reduceShadowValue(acc, key, value) {
    const append = key === 'color' ? value : `${value}px`;
    return `${acc} ${append}`;
  }
}
