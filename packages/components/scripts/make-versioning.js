/**
 * This plugin automates the process of versioning components by appending
 * version numbers to component names and copying directories to new locations.
 *
 * versionComponents(source, destination): Copies a source directory to a new
 * destination and appends version numbers to component names.
 */

import { versionComponents } from '@solid-design-system/versioning';
import fs from 'fs';
import path from 'path';

const componentsPath = './src/components';

const components = fs.readdirSync(componentsPath).filter(file => {
  return fs.statSync(path.join(componentsPath, file)).isDirectory();
});

versionComponents({ source: './cdn', destination: './cdn-versioned', components });
versionComponents({ source: './dist', destination: './dist-versioned', components });
