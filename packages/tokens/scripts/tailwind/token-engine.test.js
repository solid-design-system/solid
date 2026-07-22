import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TokenProcessingEngine } from './token-engine.js';

const createMockConfig = () => ({
  getAll: () => ({ prefix: 'sd' })
});

describe('TokenProcessingEngine.addFallbacks', () => {
  it('injects fallbacks from the default theme into baseVars', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: [
        '--background-color-primary: rgba(var(--sd-color-background-primary));',
        '--spacing-4: var(--sd-spacing-4);'
      ],
      'ui-light': ['--sd-color-background-primary: 0 53 142;', '--sd-spacing-4: 1rem;']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(result.baseVars[0], '--background-color-primary: rgba(var(--sd-color-background-primary, 0 53 142));');
    assert.equal(result.baseVars[1], '--spacing-4: var(--sd-spacing-4, 1rem);');
  });

  it('injects fallbacks into spacing, utilities and components stores', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: [],
      spacing: ['--spacing-4: var(--sd-spacing-4);'],
      utilities: ['@utility focus-outline {\n  outline-color: rgba(var(--sd-color-border-primary));\n}'],
      components: ['@utility demo {\n  color: rgba(var(--sd-color-text-primary));\n}'],
      'ui-light': [
        '--sd-spacing-4: 1rem;',
        '--sd-color-border-primary: 0 53 142;',
        '--sd-color-text-primary: 0 53 142;'
      ]
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(result.spacing[0], '--spacing-4: var(--sd-spacing-4, 1rem);');
    assert.equal(
      result.utilities[0],
      '@utility focus-outline {\n  outline-color: rgba(var(--sd-color-border-primary, 0 53 142));\n}'
    );
    assert.equal(result.components[0], '@utility demo {\n  color: rgba(var(--sd-color-text-primary, 0 53 142));\n}');
  });

  it('recursively resolves nested var() references', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: ['--text-color-primary: rgba(var(--sd-color-text-primary));'],
      'ui-light': ['--sd-color-text-primary: var(--sd-color-primary);', '--sd-color-primary: 0 53 142;']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(result.baseVars[0], '--text-color-primary: rgba(var(--sd-color-text-primary, 0 53 142));');
  });

  it('handles multiple levels of nesting', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: ['--x: var(--sd-a);'],
      'ui-light': ['--sd-a: var(--sd-b);', '--sd-b: var(--sd-c);', '--sd-c: final-value;']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(result.baseVars[0], '--x: var(--sd-a, final-value);');
  });

  it('does not modify vars that already have a fallback', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: ['--outline-color-primary: rgba(var(--sd-color-border-primary, var(--sd-color-primary)));'],
      'ui-light': ['--sd-color-border-primary: 0 53 142;', '--sd-color-primary: 0 53 142;']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(
      result.baseVars[0],
      '--outline-color-primary: rgba(var(--sd-color-border-primary, var(--sd-color-primary)));'
    );
  });

  it('leaves vars unchanged when no theme value exists', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: ['--x: var(--sd-unknown);'],
      'ui-light': ['--sd-other: 1rem;']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(result.baseVars[0], '--x: var(--sd-unknown);');
  });

  it('does nothing when defaultTheme has no entries', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: ['--x: var(--sd-spacing-4);']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.equal(result.baseVars[0], '--x: var(--sd-spacing-4);');
  });

  it('stops resolving at max depth to prevent infinite loops', () => {
    const engine = new TokenProcessingEngine(createMockConfig());
    const result = {
      baseVars: ['--x: var(--sd-a);'],
      'ui-light': ['--sd-a: var(--sd-b);', '--sd-b: var(--sd-a);']
    };

    engine.addFallbacks(result, 'ui-light');

    assert.ok(result.baseVars[0].includes('var(--sd-a,'));
  });
});
