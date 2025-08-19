import { getTokenValue, toKebabCase } from './utils.js';

/**
 * Base class for token processors
 */
export class BaseTokenProcessor {
  constructor(options = {}) {
    this.options = options;
    this.rootPropertyName = options.rootPropertyName || '_';
    this.themePattern = options.themePattern || 'theme-content';
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

    // Remove common prefixes from original path
    if (path[0] === 'sd') {
      path = path.slice(1);
    }
    if (path[0] === 'color') {
      path = path.slice(1);
    }
    if (path[0] === 'colors') {
      path = path.slice(1);
    }

    return {
      path: path.map(p => p.replaceAll('*', '').replaceAll('|', '-'))
    };
  }

  /**
   * Check if the last part of the path is the root property
   */
  isRootProperty(path) {
    return path[path.length - 1] === this.rootPropertyName;
  }

  /**
   * Get the theme variant from a token path
   */
  getThemeVariant(path) {
    if (!this.isThemeToken(path)) {
      return null;
    }

    const lastPart = path[path.length - 1];

    // If the last part is the root property name (usually '_'), this is the default theme
    if (lastPart === this.rootPropertyName) {
      return null;
    }

    // For theme tokens, if the last part is not the root property,
    // then it's a theme variant (e.g., 'dark', 'light', etc.)
    return lastPart || null;
  }

  /**
   * Convert path to kebab-case for CSS variable names
   */
  pathToKebabCase(path) {
    return path.map(p => toKebabCase(p));
  }

  /**
   * Returns the variable value as a var with possibility to override
   */
  getOverrideFormat({ prefix, name, value }) {
    const fallback = ['--sd-'];

    if (prefix) {
      fallback.push(`${prefix}-`);
    }

    fallback.push(`${name}, ${value}`);
    return `var(${fallback.join('')})`;
  }
}
