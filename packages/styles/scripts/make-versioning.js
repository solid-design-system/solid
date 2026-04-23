import { globbySync } from 'globby';

/**
 * This plugin automates the process of versioning components by appending
 * version numbers to component names and copying directories to new locations.
 *
 * versionComponents(source, destination): Copies a source directory to a new
 * destination and appends version numbers to component names.
 */

import { versionComponents } from '@solid-design-system/versioning';

let components = globbySync('./src/**/*.css')
  .map(file => file.split('/').pop().replace('.css', ''))
  .filter(file => file !== 'index');

// sd-icon is used as a descendant selector inside styles (e.g. sd-status-badge)
// but has no dedicated CSS file in this package, so it must be added explicitly.
//
// If there are more elements needed in the future, we should make it dynamically
// based on the components package.
components = [...components, 'icon'];

versionComponents({ source: './cdn', destination: './cdn-versioned', components });
versionComponents({ source: './dist', destination: './dist-versioned', components });
