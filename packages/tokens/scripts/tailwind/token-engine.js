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

  /**
   * Process all tokens using registered processors
   */
  processTokens(dictionary) {
    const result = {
      baseVars: [
        /** TODO: Add to actual variables in figma */
        '--background-color-primary-400: var(--sd-color-primary-400, red);',
        '--font-weight-normal: 400;',
        '--font-weight-bold: 700;'
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
      if (!token || typeof token.type !== 'string' || token.key.startsWith('{core.')) continue;

      // Find the first processor that can handle this token
      const processor = processors.find(p => p.canProcess(token));

      if (!processor) {
        console.warn(`No processor found for token type: ${token.type}`, token.name);
        continue;
      }

      try {
        const processed = processor.process(token, dictionary);
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

    return result;
  }

  /**
   * Categorize processed token into appropriate result buckets
   */
  categorizeProcessedToken(processed, result) {
    switch (processed.type) {
      case 'color': {
        const varString = `${processed.name}: ${processed.value};`;
        const store = processed.variant === 'default' ? 'baseVars' : processed.variant;

        if (!result[store]) result[store] = [];

        result[store].push(varString);
        break;
      }

      case 'spacing': {
        const spacingVarString = `${processed.name}: ${processed.value};`;
        result.spacing.push(spacingVarString);
        break;
      }

      case 'typography': {
        const typographyVarString = `${processed.name}: ${processed.value};`;
        result.baseVars.push(typographyVarString);
        break;
      }

      case 'shadow': {
        const shadowVarString = `${processed.name}: ${processed.value};`;
        result.baseVars.push(shadowVarString);
        break;
      }

      case 'animation': {
        const animationVarString = `${processed.name}: ${processed.value};`;
        result.baseVars.push(animationVarString);
        break;
      }

      case 'keyframes':
        result.baseVars.push(processed.value);
        break;

      case 'utility':
        if (processed.properties) {
          result.utilities.push(processed.properties);
        }
        break;

      default:
        console.warn(`Unknown processed token type: ${processed.type}`);
    }
  }
}
