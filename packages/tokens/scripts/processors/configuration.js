/**
 * Default configuration for the Tailwind v4 plugin
 */
export const DEFAULT_CONFIG = {
  // Token processing
  rootPropertyName: '_',
  themePattern: 'theme-content',

  // Prefixes
  colorPrefix: 'color',
  spacingPrefix: 'spacing',

  // Theme configuration with sensible defaults
  themeSelectors: {
    light: ':root',
    dark: '[data-theme="dark"]',
    system: '@media (prefers-color-scheme: dark)'
  },

  // Custom variants for interactive states
  customVariants: {
    hover: '&:hover',
    focus: '&:focus',
    active: '&:active',
    disabled: '&:disabled',
    'group-hover': '.group:hover &'
  },

  // Component handling
  componentHandling: {
    enabled: true,
    generateUtilities: true,
    prefix: 'c-'
  },

  // Utility generation
  utilityGeneration: {
    enabled: true,
    prefix: 'u-'
  },

  // Output options
  outputOptions: {
    showComments: true,
    formatCSS: true,
    groupByLayer: true
  },

  // Enhanced token type mappings to handle all custom types
  tokenTypeMapping: {
    // Typography tokens
    fontSize: 'typography',
    fontWeight: 'typography',
    fontFamily: 'typography',
    lineHeight: 'typography',
    letterSpacing: 'typography',

    // Shadow tokens
    shadow: 'shadow',
    boxShadow: 'shadow',

    // Component tokens
    component: 'component',

    // Utility tokens
    utility: 'utility',
    composition: 'composition',

    // Animation tokens
    duration: 'animation',
    cubicBezier: 'animation',
    transition: 'animation',
    keyframes: 'animation',

    // Layout tokens
    number: 'number', // For z-index and numeric values

    // Fallback for any other types
    dimension: 'spacing',
    color: 'color'
  },

  // Legacy support
  themeSelector: 'data',
  generateCustomVariants: false,
  createComponentClasses: true,
  componentLayer: 'components',
  includeImport: true,
  importPath: 'tailwindcss',

  // Legacy token type mappings (for backward compatibility)
  tokenTypeMap: {
    color: 'color',
    dimension: 'spacing',
    utility: 'utility',
    component: 'component'
  }
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
    const config = { ...DEFAULT_CONFIG, ...userConfig };

    // Normalize theme selector for backward compatibility
    if (typeof config.themeSelector === 'string') {
      config.themeSelectorType = config.themeSelector;
      config.themeSelectorProperty = 'theme';
    } else if (typeof config.themeSelector === 'object') {
      config.themeSelectorType = config.themeSelector.type || 'data';
      config.themeSelectorProperty = config.themeSelector.property || 'theme';
    }

    // Merge legacy tokenTypeMap with new tokenTypeMapping for backward compatibility
    if (userConfig.tokenTypeMap && !userConfig.tokenTypeMapping) {
      config.tokenTypeMapping = { ...config.tokenTypeMapping, ...userConfig.tokenTypeMap };
    }

    // Validate required fields
    this.validateConfig(config);

    return config;
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
   * Validate configuration values
   */
  validateConfig(config) {
    const validThemeSelectors = ['class', 'data'];
    if (config.themeSelectorType && !validThemeSelectors.includes(config.themeSelectorType)) {
      throw new Error(
        `Invalid themeSelector type: ${config.themeSelectorType}. Must be one of: ${validThemeSelectors.join(', ')}`
      );
    }

    if (typeof config.rootPropertyName !== 'string') {
      throw new Error('rootPropertyName must be a string');
    }

    if (typeof config.themePattern !== 'string') {
      throw new Error('themePattern must be a string');
    }
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

  /**
   * Create theme selector string
   */
  getThemeSelector(variant) {
    return this.config.themeSelectorType === 'class'
      ? `.${variant}`
      : `[data-${this.config.themeSelectorProperty}="${variant}"]`;
  }
}
