import { globbySync } from 'globby';

/**
 * This plugin automates the process of versioning components by appending
 * version numbers to component names and copying directories to new locations.
 *
 * versionComponents(source, destination): Copies a source directory to a new
 * destination and appends version numbers to component names.
 */

import { versionComponents } from '@solid-design-system/versioning';

const components = globbySync('./src/**/*.css')
  .map(file => file.split('/').pop().replace('.css', ''))
  .filter(file => file !== 'index');

versionComponents({ source: './cdn', destination: './cdn-versioned', components });
versionComponents({ source: './dist', destination: './dist-versioned', components });
