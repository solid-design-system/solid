import fs from 'fs';
import {getOutputs, getSizes} from './node-get-sizes.mjs';

/**
 * 1. Update CHANGELOG.md with new bundle sizes
 */

const additionalContent = `### Size
* ${getOutputs().uncompressed}
* ${getOutputs().gzip}`;

// Read the generated CHANGELOG.md
fs.readFile('./src/docs/General/Changelog.mdx', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  // Append additional content to the start of the changelog
  const result = additionalContent + '\n\n' + data;

  // Write the updated changelog back to CHANGELOG.md
  fs.writeFile('./src/docs/General/Changelog.mdx', result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});

console.log('📝 Updated CHANGELOG.md with new bundle sizes.')

/**
 * 2. Update package.json with new bundle sizes
 */

let packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

packageJson.meta.bundleSizeInKb = getSizes();

fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2) + '\n', 'utf8', (err) => {
  if (err) return console.log(err);
});

console.log('📦 Updated package.json with new bundle sizes.')
