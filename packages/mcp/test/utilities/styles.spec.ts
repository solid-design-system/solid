import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getAvailableStyles, getStyleInfo } from '../../src/utilities/styles.js';

describe('when using the styles metadata utilities', () => {
  describe('getAvailableStyles', () => {
    it('should return a list of available styles', async () => {
      const styles = await getAvailableStyles();
      assert.ok(styles.length > 0);
      assert.ok(styles.includes('sd-headline'));
      assert.ok(styles.includes('sd-chip'));
    });

    it('should return style names with the sd- prefix', async () => {
      const styles = await getAvailableStyles();
      assert.ok(styles.every(s => s.startsWith('sd-')));
    });
  });

  describe('getStyleInfo', () => {
    it('should return docs and classes for a style (with sd- prefix)', async () => {
      const info = await getStyleInfo('sd-chip');
      assert.ok(info.docs && info.docs.length > 0);
      assert.ok(info.classes.length > 0);
      assert.ok(info.classes.some(c => c.startsWith('sd-chip')));
    });

    it('should accept style name without sd- prefix', async () => {
      const info = await getStyleInfo('chip');
      assert.ok(info.docs && info.docs.length > 0);
    });
  });
});
