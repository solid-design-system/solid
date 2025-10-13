import { BaseTokenProcessor } from './base.js';

/**
 * Processor for shadow tokens
 */
export class ShadowTokenProcessor extends BaseTokenProcessor {
  constructor(options = {}) {
    super(options);
  }

  canProcess(token) {
    return token.type === 'boxShadow' || token.type === 'shadow' || token.path.includes('shadow');
  }

  process(token, _, options) {
    const { path, variant } = this.processTokenPath(token);
    const name = path.slice(1).join('-');
    const properties = name.includes('-sm') ? '0.5px 0.5px 1.5px' : '0 1px 3px';

    const cssvariables = [];

    if (variant === options.defaultTheme) {
      cssvariables.push(
        {
          type: 'shadow',
          name: `--${name}`,
          value: this.cssvar(this.cssprefix(name)),
          variant: 'default'
        },
        {
          type: 'shadow',
          name: `--drop-${name}`,
          value: this.cssvar(this.cssprefix(`drop-${name}`)),
          variant: 'default'
        }
      );
    }

    cssvariables.push(
      {
        type: 'shadow',
        name: this.cssprefix(name),
        value: `${properties} ${token.attributes.value}`,
        variant
      },
      {
        type: 'shadow',
        name: this.cssprefix(`drop-${name}`),
        value: `${properties} ${token.attributes.value}`,
        variant
      }
    );

    return cssvariables;
  }
}
