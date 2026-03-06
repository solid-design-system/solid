import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getStructuredMetaData, getStructuredMetaDataForComponent } from '../../src/utilities/metadata.js';

describe('when using the metadata utilities', () => {
  describe('getStructuredMetaData', () => {
    it('should return the correct metadata for a given asset', async () => {
      const metadata = await getStructuredMetaData('../../test/utilities/testdata');
      assert.strictEqual(metadata.length, 2);
      const filesThatAreRead = metadata.map(file => file!.filename);
      assert.ok(filesThatAreRead.includes('README.md'));
      assert.ok(filesThatAreRead.includes('Othercontent.ts'));
    });
  });

  describe('getStructuredMetaDataForComponent', () => {
    it('should return the correct metadata for a given component without applied filter', async () => {
      const metadata = await getStructuredMetaDataForComponent('sd-button');
      assert.ok(metadata.length > 0);
      const filesThatAreRead = metadata.map(file => file!.filename);
      assert.ok(filesThatAreRead.includes('api.json'));
      assert.ok(filesThatAreRead.includes('docs.md'));
    });

    it('should return the correct metadata for a given component with a custom filter applied', async () => {
      const metadata = await getStructuredMetaDataForComponent('sd-button', filename => filename.endsWith('.json'));
      assert.ok(metadata.length > 0);
      const filesThatAreRead = metadata.map(file => file!.filename);
      assert.ok(filesThatAreRead.includes('api.json'));
      assert.ok(!filesThatAreRead.some(f => f?.endsWith('.md')));
    });
  });
});
