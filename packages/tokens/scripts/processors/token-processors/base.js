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
    let originalPath = [...token.path];

    // Remove common prefixes from original path
    if (originalPath[0] === 'sd') {
      originalPath = originalPath.slice(1);
    }
    if (originalPath[0] === 'color') {
      originalPath = originalPath.slice(1);
    }
    if (originalPath[0] === 'colors') {
      originalPath = originalPath.slice(1);
    }

    // Handle theme tokens specially using original path
    const isTheme = this.isThemeToken(originalPath);
    const variant = isTheme ? this.getThemeVariant(originalPath) : null;

    // For theme tokens, remove the variant suffix for the base name
    let finalPath = originalPath;
    if (isTheme && variant) {
      finalPath = originalPath.slice(0, -1); // Remove the variant part
    } else if (isTheme && this.isRootProperty(originalPath)) {
      finalPath = originalPath.slice(0, -1); // Remove the "_" part
    }

    return {
      finalPath,
      variant,
      isTheme,
      originalPath
    };
  }

  /**
   * Check if a token path represents a theme token
   */
  isThemeToken(path) {
    // Check if the path contains the theme pattern
    // Default pattern is 'theme-content' which means path contains 'theme'
    if (this.themePattern === 'theme-content') {
      return path.includes('theme');
    }

    // For custom patterns, you can extend this logic
    return path.includes('theme');
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
