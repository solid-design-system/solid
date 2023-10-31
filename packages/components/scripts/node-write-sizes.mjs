/**
 * This script updates CHANGELOG.md and package.json with new bundle sizes
 * for each new version of @solid-design-system/components package.
 *
 * The main steps are:
 *
 * 1. Append new bundle sizes to the CHANGELOG.md file for the current version.
 *
 * 2. Update the package.json file with new bundle sizes.
 *
 * This script utilizes getOutputs() and getSizes() from './node-get-sizes.mjs'
 */

import { getOutputs, getSizes } from './node-get-sizes.mjs';
import fs from 'fs';

/**
 * 1. Update CHANGELOG.md with new bundle sizes
 */

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const newVersion = pkg.version;

const additionalContent = `### 📈 Stats\n* ${getOutputs().uncompressed}\n* ${getOutputs().gzip}\n\n`;

fs.readFile('./CHANGELOG.md', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  // Check if the new version header exists
  const newVersionHeader = `# [@solid-design-system/components-v${newVersion}]`;
  const nextVersionHeaderRegex = /# \[@solid-design-system\/components-v\d+\.\d+\.\d+/g;

  let result;

  if (data.startsWith(newVersionHeader)) {
    // If the new version header exists, find the next version header and insert the content before it
    let replaced = false;
    result = data.replace(nextVersionHeaderRegex, (match, offset) => {
      if (offset === 0 || replaced) return match; // Ignore the first match (new version header) and any matches after the first replacement
      replaced = true;
      return additionalContent + match;
    });
  } else {
    // If the new version header doesn't exist, insert the content at the start of the file
    result = additionalContent + data;
  }

  // Write the updated changelog back to CHANGELOG.md
  fs.writeFile('./CHANGELOG.md', result, 'utf8', err => {
    if (err) return console.log(err);
  });
});

console.log('📝 Updated CHANGELOG.md with new bundle sizes.');

/**
 * 2. Update package.json with new bundle sizes
 */

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

packageJson.meta.bundleSizeInKb = getSizes();

fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2) + '\n', 'utf8', err => {
  if (err) return console.log(err);
});

console.log('📝 Updated package.json with new bundle sizes.');
