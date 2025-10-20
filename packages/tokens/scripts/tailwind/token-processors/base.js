import { getTokenValue, toKebabCase } from './utils.js';

/**
 * Base class for token processors
 */
export class BaseTokenProcessor {
  constructor(options = {}) {
    this.options = options;
  }

  /**
   * Check if this processor can handle the given token
   */
  // eslint-disable-next-line no-unused-vars
  canProcess(token) {
    throw new Error('canProcess must be implemented by subclasses');
  }

  /**
   * Process the token and return the result
   */
  // eslint-disable-next-line no-unused-vars
  process(token, dictionary) {
    throw new Error('process must be implemented by subclasses');
  }

  /**
   * Resets any cache or inbuilt memory
   */
  reset() {
    /* empty */
  }

  /**
   * Normalize token name by removing prefixes and converting to kebab-case
   */
  normalizeTokenName(name) {
    return name.replace(/^sd\./, '').replace(/\./g, '-');
  }

  /**
   * Convert camelCase to kebab-case
   */
  camelToKebab(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }

  /**
   * Get token value with fallback
   */
  getTokenValue(token) {
    return getTokenValue(token);
  }

  /**
   * Cleans the token name by removing and replacing some special characters
   */
  cleanupTokenName(name) {
    return name.replaceAll('*', '').replaceAll('|', '-').replace('', '').replaceAll('%', '');
  }

  /**
   * Process token path and handle theme variants globally
   */
  processTokenPath(token) {
    // Get the original token path (before kebab-case conversion)
    let path = [...token.path];

    path = path.map(this.cleanupTokenName);

    const variant = path[0];

    return {
      path: this.pathToKebabCase(path.slice(1)),
      variant
    };
  }

  /**
   * Convert path to kebab-case for CSS variable names
   */
  pathToKebabCase(path) {
    if (Array.isArray(path)) {
      return path.map(p => toKebabCase(p));
    }

    return toKebabCase(path);
  }

  cssprefix(variable) {
    let name = variable.startsWith('--') ? variable.slice(2) : variable;

    if (name.startsWith('sd-')) {
      name = name.slice(3);
    }

    return `--sd-${name}`;
  }

  cssvar(variable, fallback) {
    if (fallback) {
      return `var(${this.cssprefix(variable)}, ${fallback})`;
    }
    return `var(${this.cssprefix(variable)})`;
  }
}
