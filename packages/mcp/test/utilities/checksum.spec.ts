import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createFolderChecksum, getFolderChecksum, verifyFolderChecksum } from '../../src/utilities/checksum.js';

describe('checksum utilities', () => {
  let testDir: string;

  beforeEach(async () => {
    testDir = join(tmpdir(), `checksum-test-${Date.now()}`);
    await mkdir(testDir, { recursive: true });
  });

  afterEach(async () => {
    try {
      await rm(testDir, { recursive: true });
    } catch {
      // Ignore cleanup errors
    }
  });

  describe('createFolderChecksum', () => {
    it('should create a checksum for folder contents', async () => {
      await writeFile(join(testDir, 'file1.txt'), 'content1');
      await writeFile(join(testDir, 'file2.txt'), 'content2');
      const checksum = await createFolderChecksum(testDir);
      assert.strictEqual(typeof checksum, 'string');
      assert.strictEqual(checksum.length, 32);
    });

    it('should exclude specified patterns', async () => {
      await writeFile(join(testDir, 'file1.txt'), 'content1');
      await writeFile(join(testDir, '.hidden'), 'hidden');
      await writeFile(join(testDir, 'checksum.txt'), 'old-checksum');
      const checksum = await createFolderChecksum(testDir, {
        excludePatterns: ['.*', 'checksum.txt']
      });
      assert.strictEqual(typeof checksum, 'string');
      assert.strictEqual(checksum.length, 32);
    });

    it('should use different algorithms', async () => {
      await writeFile(join(testDir, 'file1.txt'), 'content1');
      const md5Checksum = await createFolderChecksum(testDir, { algorithm: 'md5' });
      const sha256Checksum = await createFolderChecksum(testDir, { algorithm: 'sha256' });
      assert.strictEqual(md5Checksum.length, 32);
      assert.strictEqual(sha256Checksum.length, 64);
      assert.notStrictEqual(md5Checksum, sha256Checksum);
    });
  });

  describe('verifyFolderChecksum', () => {
    it('should verify matching checksums', async () => {
      await writeFile(join(testDir, 'file1.txt'), 'content1');
      await createFolderChecksum(testDir);
      const isValid = await verifyFolderChecksum(testDir);
      assert.strictEqual(isValid, true);
    });

    it('should detect mismatched checksums', async () => {
      await writeFile(join(testDir, 'file1.txt'), 'content1');
      await createFolderChecksum(testDir);
      await writeFile(join(testDir, 'file1.txt'), 'modified-content');
      const isValid = await verifyFolderChecksum(testDir);
      assert.strictEqual(isValid, false);
    });
  });

  describe('getFolderChecksum', () => {
    it('should return checksum without writing file', async () => {
      await writeFile(join(testDir, 'file1.txt'), 'content1');
      const checksum = await getFolderChecksum(testDir);
      assert.strictEqual(typeof checksum, 'string');
      assert.strictEqual(checksum.length, 32);
      const { access } = await import('node:fs/promises');
      let checksumFileExists: boolean;
      try {
        await access(join(testDir, 'checksum.txt'));
        checksumFileExists = true;
      } catch {
        checksumFileExists = false;
      }
      assert.strictEqual(checksumFileExists, false);
    });
  });
});
