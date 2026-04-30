import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getPackageInfo, getVersion } from '../../src/utilities/version.js';

describe('when using the version utilities', () => {
  describe('getPackageInfo', () => {
    it('should return package.json information', () => {
      const packageInfo = getPackageInfo();
      assert.notStrictEqual(packageInfo, undefined);
      assert.strictEqual(packageInfo.name, '@solid-design-system/mcp');
      assert.notStrictEqual(packageInfo.version, undefined);
      assert.strictEqual(packageInfo.description, 'MCP Server for the Solid Design System');
      assert.notStrictEqual(packageInfo.author, undefined);
      assert.strictEqual(packageInfo.author.name, 'Union Investment');
    });

    it('should have required package.json fields', () => {
      const packageInfo = getPackageInfo();
      assert.ok('name' in packageInfo);
      assert.ok('version' in packageInfo);
      assert.ok('description' in packageInfo);
      assert.ok('author' in packageInfo);
      assert.ok('repository' in packageInfo);
      assert.ok('license' in packageInfo);
    });
  });

  describe('getVersion', () => {
    it('should return the current version string', () => {
      const version = getVersion();
      assert.notStrictEqual(version, undefined);
      assert.strictEqual(typeof version, 'string');
      assert.match(version, /^\d+\.\d+\.\d+$/);
    });

    it('should match the version from getPackageInfo', () => {
      const packageInfo = getPackageInfo();
      const version = getVersion();
      assert.strictEqual(version, packageInfo.version);
    });
  });
});
