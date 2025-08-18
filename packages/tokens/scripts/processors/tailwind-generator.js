import { CSSBuilder } from './css-builder.js';

/**
 * Specialized CSS output generator for Tailwind v4
 */
export class TailwindCSSGenerator {
  constructor(config) {
    this.configObj = config;
    this.config = config.getAll ? config.getAll() : config;
    this.css = new CSSBuilder(this.config);
  }

  /**
   * Generate complete CSS output
   */
  generate(processedTokens) {
    const parts = [
      this.generateImport(),
      this.generateSource(),
      this.generateTheme(processedTokens),
      this.generateLayers(processedTokens),
      this.generateUtilities(processedTokens.utilities),
      this.generateExtras()
    ].filter(Boolean);

    return parts.join('\n\n') + '\n';
  }

  /**
   * Generate import statement
   */
  generateImport() {
    return this.config.includeImport ? this.css.import(this.config.importPath) : null;
  }

  /**
   * Generate source statement
   */
  generateSource() {
    return this.config.includeSource ? this.css.source(this.config.sourcePath) : null;
  }

  /**
   * Generate @theme directive
   */
  generateTheme(processedTokens) {
    const themeVars = [...processedTokens.baseVars, ...processedTokens.spacing];

    return this.css.theme(this.css.join(themeVars, '\n'));
  }

  /**
   * Generate @layer directives
   */
  generateLayers(processedTokens) {
    const layers = [];

    // Base layer for theme variants
    if (processedTokens.themeVars.size > 0) {
      const themeRules = Array.from(processedTokens.themeVars.entries()).map(([variant, vars]) => {
        const selector = this.configObj.getThemeSelector
          ? this.configObj.getThemeSelector(variant)
          : this.getThemeSelector(variant);
        return this.css.rule(selector, this.css.join(vars, '\n'));
      });

      layers.push(this.css.layer('base', this.css.join(themeRules, '\n\n')));
    }

    // Components layer
    if (this.config.createComponentClasses && processedTokens.components.length > 0) {
      layers.push(this.css.layer(this.config.componentLayer, this.css.join(processedTokens.components, '\n\n')));
    }

    return layers.length > 0 ? this.css.join(layers, '\n\n') : null;
  }

  /**
   * Generate utility directives
   */
  generateUtilities(utilities) {
    return utilities.length > 0 ? this.css.join(utilities, '\n\n') : null;
  }

  /**
   * Generate extra utilities
   */
  generateExtras() {
    return this.generateUtilities([
      this.css.utility('varspacing-*', this.css.property('--tw-varspacing', '--value(--spacing-*)')),
      this.css.utility(
        'focus-outline',
        this.css.join([
          this.css.property('outline-style', 'solid'),
          this.css.property('outline-offset', '2px'),
          this.css.property('outline-width', '2px'),
          this.css.property('outline-color', 'var(--background-color-primary)')
        ])
      ),
      this.css.utility(
        'focus-outline-inverted',
        this.css.join([
          this.css.property('outline-style', 'solid'),
          this.css.property('outline-offset', '2px'),
          this.css.property('outline-width', '2px'),
          this.css.property('outline-color', 'var(--background-color-white)')
        ])
      )
    ]);
  }
}
