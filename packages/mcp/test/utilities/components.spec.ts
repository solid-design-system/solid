import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getAvailableComponents } from '../../src/utilities/components.js';

type ComponentEntry = { name: string; description: string };

describe('when using the components metadata utilities', () => {
  describe('getAvailableComponents', () => {
    it('should return a list of available components', async () => {
      const components = (await getAvailableComponents()) as ComponentEntry[];
      assert.ok(components.length > 0);
      assert.ok(components.some(component => component.name === 'sd-button'));
      assert.ok(components.length > 10);
    });

    it('should return components with the sd- prefix', async () => {
      const components = (await getAvailableComponents()) as ComponentEntry[];
      assert.ok(components.every(component => component.name.startsWith('sd-')));
    });
  });
});
