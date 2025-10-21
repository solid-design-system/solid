import { AnimationTokenProcessor } from './token-processors/animation.js';
import { ColorTokenProcessor } from './token-processors/color.js';
import { ShadowTokenProcessor } from './token-processors/shadow.js';
import { SpacingTokenProcessor } from './token-processors/spacing.js';
import { TypographyTokenProcessor } from './token-processors/typography.js';
import { UtilityTokenProcessor } from './token-processors/utility.js';

/**
 * Token processing engine that orchestrates all token processors
 */
export class TokenProcessingEngine {
  constructor(config) {
    this.config = config;
    this.processors = new Map();
    this.registerDefaultProcessors();
  }

  /**
   * Register default token processors
   */
  registerDefaultProcessors() {
    this.registerProcessor('color', new ColorTokenProcessor(this.config.getAll()));
    this.registerProcessor('spacing', new SpacingTokenProcessor(this.config.getAll()));
    this.registerProcessor('utility', new UtilityTokenProcessor(this.config.getAll()));
    this.registerProcessor('shadow', new ShadowTokenProcessor(this.config.getAll()));
    this.registerProcessor('animation', new AnimationTokenProcessor(this.config.getAll()));
    this.registerProcessor('typography', new TypographyTokenProcessor(this.config.getAll()));
  }

  /**
   * Register a token processor
   */
  registerProcessor(name, processor) {
    this.processors.set(name, processor);
  }

  /**
   * Get all registered processors
   */
  getProcessors() {
    return Array.from(this.processors.values());
  }

  sortTokens(target) {
    const result = { ...target };

    for (const [key, value] of Object.entries(result)) {
      if (!Array.isArray(value)) {
        result[key] = value;
        continue;
      }

      const comparator = value.every(v => typeof v === 'number') ? (a, b) => a - b : undefined;
      result[key] = value.sort(comparator);
    }

    return result;
  }

  /**
   * Process all tokens using registered processors
   */
  processTokens(dictionary, options) {
    const result = {
      baseVars: [
        '--sizing-varspacing: var(--tw-varspacing);',
        '--spacing-varspacing: var(--tw-varspacing);',
        '--background-color-primary-400: var(--sd-background-color-primary-400, var(--sd-color-primary-400));',
        '--outline-color-primary: var(--sd-border-color-primary, var(--sd-color-primary));',
        '--outline-color-error: var(--sd-border-color-error, var(--sd-color-error));',
        '--text-color-white-constant: var(--sd-text-color-white-constant, var(--sd-color-white-constant));'
      ],
      utilities: [],
      spacing: [],
      compositions: [],
      components: []
    };

    if (!dictionary?.allTokens || !Array.isArray(dictionary.allTokens)) {
      return result;
    }

    const processors = this.getProcessors();

    for (const token of dictionary.allTokens) {
      if (
        !token ||
        typeof token.type !== 'string' ||
        token.key.startsWith('{core.') ||
        token.path.some(t => t.startsWith('_') && !t.startsWith('__'))
      ) {
        continue;
      }

      const processor = processors.find(p => p.canProcess(token));

      if (!processor) {
        console.warn(`No processor found for token type: ${token.type}`, token.name);
        continue;
      }

      try {
        const processed = processor.process(token, dictionary, options);
        if (processed) {
          if (Array.isArray(processed)) {
            processed.forEach(item => this.categorizeProcessedToken(item, result));
          } else {
            this.categorizeProcessedToken(processed, result);
          }
        }
      } catch (error) {
        console.error(`Error processing token ${token.name}:`, error);
      }
    }

    processors.forEach(processor => processor.reset());
    return this.sortTokens(result);
  }

  /**
   * Categorize processed token into appropriate result buckets
   */
  categorizeProcessedToken(processed, result) {
    if (!processed) return;
    const variable = `${processed.name}: ${processed.value};`;
    const store = processed.variant === 'default' ? 'baseVars' : processed.variant || 'baseVars';

    if (!result[store]) result[store] = [];

    switch (processed.type) {
      case 'color':
      case 'spacing':
      case 'typography':
      case 'shadow':
      case 'animation':
        this.categorize(store, variable, result);
        break;

      case 'keyframes':
        this.categorize(store, processed.value, result);
        break;

      case 'utility':
        if (processed.properties) {
          this.categorize('utilities', processed.properties, result);
        }
        break;

      default:
        console.warn(`Unknown processed token type: ${processed.type}`);
    }
  }

  categorize(store, variable, result) {
    if (result[store].includes(variable)) return;
    result[store].push(variable);
  }
}
