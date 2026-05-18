import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { parseCommandLineArgs } from '../../src/utilities/stdio.js';

describe('when using parseCommandLineArgs', () => {
  describe('version handling', () => {
    it('should return version action for --version flag', () => {
      const result = parseCommandLineArgs(['--version']);
      assert.deepStrictEqual(result, { action: 'version' });
    });

    it('should return version action for -v flag', () => {
      const result = parseCommandLineArgs(['-v']);
      assert.deepStrictEqual(result, { action: 'version' });
    });

    it('should prioritize version over help', () => {
      const result = parseCommandLineArgs(['--version', '--help']);
      assert.deepStrictEqual(result, { action: 'version' });
    });
  });

  describe('help handling', () => {
    it('should return help action for --help flag', () => {
      const result = parseCommandLineArgs(['--help']);
      assert.deepStrictEqual(result, { action: 'help' });
    });

    it('should return help action for -h flag', () => {
      const result = parseCommandLineArgs(['-h']);
      assert.deepStrictEqual(result, { action: 'help' });
    });
  });

  describe('no arguments handling', () => {
    it('should return continue action when no arguments are provided', () => {
      const result = parseCommandLineArgs([]);
      assert.deepStrictEqual(result, { action: 'continue' });
    });

    it('should return continue action when unknown arguments are provided', () => {
      const result = parseCommandLineArgs(['--unknown', 'argument']);
      assert.deepStrictEqual(result, { action: 'continue' });
    });

    it('should use process.argv by default when no args provided', () => {
      const originalArgv = process.argv;
      process.argv = ['node', 'script.js', '--version'];
      const result = parseCommandLineArgs();
      assert.deepStrictEqual(result, { action: 'version' });
      process.argv = originalArgv;
    });
  });

  describe('mixed arguments', () => {
    it('should handle mixed short and long flags', () => {
      const result = parseCommandLineArgs(['-v', '--help']);
      assert.deepStrictEqual(result, { action: 'version' });
    });

    it('should handle arguments with other parameters', () => {
      const result = parseCommandLineArgs(['--some-flag', '--version', '--other']);
      assert.deepStrictEqual(result, { action: 'version' });
    });
  });
});
