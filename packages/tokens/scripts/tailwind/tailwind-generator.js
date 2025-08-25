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
      this.generateCustomVariants(),
      this.generateTheme(processedTokens),
      this.generateUtilities(processedTokens.utilities),
      this.generateExtras()
    ].filter(Boolean);

    return parts.join('\n\n') + '\n';
  }

  /**
   * Generate import statement
   */
  generateImport() {
    return this.config.includeImport
      ? `
@layer theme, base, components, utilities;

@import 'tailwindcss/theme';
@import 'tailwindcss/utilities';`
      : null;
  }

  /**
   * Generate source statement
   */
  generateSource() {
    return this.config.includeSource ? this.css.source(this.config.sourcePath) : null;
  }

  /**
   * Generate custom variants
   */
  generateCustomVariants() {
    const variants = Object.entries(this.config.customVariants).map(([variant, selector]) =>
      this.css.customVariant(variant, selector)
    );

    return this.css.join(variants, '\n');
  }

  /**
   * Generate @theme directive
   */
  generateTheme(processedTokens) {
    const themeVars = [...processedTokens.baseVars, ...processedTokens.spacing];

    return this.css.theme(this.css.join(themeVars, '\n'));
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
          this.css.property('outline-color', 'var(--outline-color-primary)')
        ])
      ),
      this.css.utility(
        'focus-outline-inverted',
        this.css.join([
          this.css.property('outline-style', 'solid'),
          this.css.property('outline-offset', '2px'),
          this.css.property('outline-width', '2px'),
          this.css.property('outline-color', 'var(--outline-color-white)')
        ])
      )
    ]);
  }
}
