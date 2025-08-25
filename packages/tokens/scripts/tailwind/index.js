import { PluginConfiguration } from './configuration.js';
import { TailwindCSSGenerator } from './tailwind-generator.js';
import { TokenProcessingEngine } from './token-engine.js';

export class TailwindV4Plugin {
  constructor(userConfig = {}) {
    this.config = new PluginConfiguration(userConfig);
    this.engine = new TokenProcessingEngine(this.config);
    this.generator = new TailwindCSSGenerator(this.config);
  }

  /**
   * Process dictionary and generate CSS output
   */
  format(dictionary) {
    try {
      const processedTokens = this.engine.processTokens(dictionary);
      return this.generator.generate(processedTokens);
    } catch (error) {
      console.error('Error in TailwindV4Plugin.format:', error);
      throw error;
    }
  }
}

/**
 * Create a Tailwind v4 Style Dictionary plugin
 */
export function createTailwindV4Plugin(options = {}) {
  const plugin = new TailwindV4Plugin(options);

  return function ({ dictionary }) {
    return plugin.format(dictionary);
  };
}
