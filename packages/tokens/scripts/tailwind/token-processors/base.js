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
   * Process token path and handle theme variants globally
   */
  processTokenPath(token) {
    // Get the original token path (before kebab-case conversion)
    let path = [...token.path];

    path = path.map(p => p.replaceAll('*', '').replaceAll('|', '-'));

    const variant = path[0];

    return {
      path: path.slice(1),
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

  /**
   * Returns the variable value as a var with possibility to override
   */
  getFormattedValue({ prefix, name, value }) {
    const fallback = ['--sd-'];

    if (prefix) {
      fallback.push(`${prefix}-`);
    }

    fallback.push(name);

    const variable = fallback.join('');
    return { variable, value };
  }
}
