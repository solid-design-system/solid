/**
 * Default configuration for the Tailwind v4 plugin
 */
export const DEFAULT_CONFIG = {
  customVariants: {
    hover: '&:hover:not([disabled])',
    focus: '&:focus:not([disabled])'
  },

  includeImport: true,
  includeSource: true,
  sourcePath: '../../components/src'
};

/**
 * Configuration validator and normalizer
 */
export class PluginConfiguration {
  constructor(userConfig = {}) {
    this.config = this.validateAndNormalize(userConfig);
  }

  /**
   * Validate and normalize user configuration
   */
  validateAndNormalize(userConfig) {
    return { ...DEFAULT_CONFIG, ...userConfig };
  }

  /**
   * Deep merge two objects, with user config taking precedence
   */
  deepMerge(target, source) {
    const result = { ...target };

    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this.deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }

    return result;
  }

  /**
   * Get configuration value
   */
  get(key) {
    return this.config[key];
  }

  /**
   * Get all configuration
   */
  getAll() {
    return { ...this.config };
  }
}
