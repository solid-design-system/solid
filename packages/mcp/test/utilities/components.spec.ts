import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getAvailableComponents } from '../../src/utilities/components.js';

describe('when using the components metadata utilities', () => {
  describe('getAvailableComponents', () => {
    it('should return a list of available components', async () => {
      const components = await getAvailableComponents();
      assert.ok(components.length > 0);
      assert.ok(components.includes('sd-button'));
      assert.ok(components.length > 10);
    });

    it('should return components with the sd- prefix', async () => {
      const components = await getAvailableComponents();
      assert.ok(components.every(c => c.startsWith('sd-')));
    });
  });
});
