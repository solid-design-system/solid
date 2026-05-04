import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import path from 'path';

const distVersioned = path.resolve('./dist-versioned/solid-styles.css');

test('dist-versioned should exist', () => {
  assert.ok(fs.existsSync(distVersioned), 'dist-versioned/solid-styles.css does not exist — run pnpm build first');
});

test('sd-icon element selector should be versioned inside sd-status-badge rules', () => {
  const css = fs.readFileSync(distVersioned, 'utf-8');

  // Unversioned sd-icon must not appear as a descendant selector (only allowed in --docs URLs etc.)
  const unversionedIconSelector = /\.sd-[\w-]+ sd-icon[\s{,]/;
  assert.ok(
    !unversionedIconSelector.test(css),
    'Found unversioned "sd-icon" as a CSS descendant selector in dist-versioned output'
  );

  // Versioned sd-icon must appear (e.g. sd-6-15-1-icon)
  const versionedIconSelector = /sd-\d+-\d+-\d+-icon/;
  assert.ok(
    versionedIconSelector.test(css),
    'Expected to find a versioned "sd-<version>-icon" selector in dist-versioned output'
  );
});
