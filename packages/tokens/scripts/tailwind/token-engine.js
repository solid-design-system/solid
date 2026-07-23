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
    this.registerProcessor('shadow', new ShadowTokenProcessor(this.config.getAll()));
    this.registerProcessor('color', new ColorTokenProcessor(this.config.getAll()));
    this.registerProcessor('spacing', new SpacingTokenProcessor(this.config.getAll()));
    this.registerProcessor('animation', new AnimationTokenProcessor(this.config.getAll()));
    this.registerProcessor('typography', new TypographyTokenProcessor(this.config.getAll()));
    this.registerProcessor('utility', new UtilityTokenProcessor(this.config.getAll()));
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
   * Process all tokens using registered processors.
   *
   * Note: Hardcoded variables should be added in here.
   */
  processTokens(dictionary, options) {
    const result = {
      baseVars: [
        '--sizing-varspacing: var(--tw-varspacing);',
        '--spacing-varspacing: var(--tw-varspacing);',
        '--outline-color-primary: rgba(var(--sd-color-border-primary, var(--sd-color-primary)));',
        '--outline-color-error: rgba(var(--sd-color-border-error, var(--sd-color-error)));',
        '--outline-color-white: rgba(var(--sd-color-border-white, var(--sd-color-white)));',
        '--drop-shadow-sm: var(--sd-drop-shadow-sm);',
        '--drop-shadow: var(--sd-drop-shadow);',
        '--shadow-sm: var(--sd-shadow-sm);',
        '--shadow: var(--sd-shadow);'
      ],
      utilities: [],
      spacing: [],
      components: [
        `@utility sd-brandshape--neutral-100-color-icon-fill {
  fill: rgba(var(--sd-brandshape--neutral-100-color-background, rgba(var(--sd-color-neutral-100))));
}`
      ]
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

    // Add default-theme fallbacks to generated stores.
    this.addFallbacks(result, options.defaultTheme);

    return this.sortTokens(result);
  }

  /**
   * Add fallback values from the default theme to generated CSS entries.
   * This keeps Tailwind output resilient when the theme stylesheet is not loaded.
   */
  addFallbacks(result, defaultTheme) {
    const themeEntries = result[defaultTheme];
    if (!themeEntries || !Array.isArray(themeEntries)) return;

    // Build lookup: --sd-var-name -> resolved value
    const themeMap = new Map();
    for (const entry of themeEntries) {
      const match = entry.match(/^(--sd-[^:]+):\s*(.+);$/);
      if (match) {
        themeMap.set(match[1], match[2]);
      }
    }

    // Recursively resolve var() references within the theme map.
    const resolve = (value, depth = 0) => {
      if (depth > 12) return value;
      return value.replace(/var\((--sd-[^,)]+)\)/g, (_, varName) => {
        const resolved = themeMap.get(varName);
        if (!resolved) return `var(${varName})`;
        if (!resolved.includes('var(')) return resolved;
        return resolve(resolved, depth + 1);
      });
    };

    const resolvedMap = new Map();
    for (const [key, value] of themeMap) {
      resolvedMap.set(key, resolve(value));
    }

    const injectFallbacks = value => {
      let output = '';

      for (let index = 0; index < value.length; index += 1) {
        if (value.slice(index, index + 4) !== 'var(') {
          output += value[index];
          continue;
        }

        let depth = 1;
        let cursor = index + 4;
        while (cursor < value.length && depth > 0) {
          if (value[cursor] === '(') depth += 1;
          if (value[cursor] === ')') depth -= 1;
          cursor += 1;
        }

        if (depth !== 0) {
          output += value.slice(index, cursor);
          index = cursor - 1;
          continue;
        }

        const fullVarExpression = value.slice(index, cursor);
        const inner = value.slice(index + 4, cursor - 1);

        // Keep existing explicit fallbacks untouched.
        if (inner.includes(',')) {
          output += fullVarExpression;
          index = cursor - 1;
          continue;
        }

        const varName = inner.trim();
        const fallback = resolvedMap.get(varName);

        if (fallback) {
          output += `var(${varName}, ${fallback})`;
        } else {
          output += fullVarExpression;
        }

        index = cursor - 1;
      }

      return output;
    };

    const stores = ['baseVars', 'spacing', 'utilities', 'components'];

    for (const store of stores) {
      if (!Array.isArray(result[store])) continue;

      result[store] = result[store].map(entry => {
        // Replace top-level var(--sd-X) with var(--sd-X, <fallback>) while leaving
        // existing fallback arguments untouched.
        return injectFallbacks(entry);
      });
    }
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

      case 'component':
        if (processed.properties) {
          this.categorize('components', processed.properties, result);
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
