/**
 * Configuration validator and normalizer
 */
export class PluginConfiguration {
  constructor(userConfig = {}) {
    this.config = userConfig;
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
