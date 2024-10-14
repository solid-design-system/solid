/**
 * Vite expects the import of CEM in Storybook's preview.js to be resolved, even if we don't need it.
 * This plugin creates an empty CEM file if it doesn't exist, so that the import can be resolved, even when "build" was not run before.
 */

import fs from 'fs';
import path from 'path';

// Path to the file
const filePath = path.resolve(__dirname, '../dist/custom-elements.json');

export default function createEmptyCemIfNotExisting() {
  return {
    name: 'create-empty-cem-if-not-existing',
    configResolved() {
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
      }
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '{}');
      }
    }
  };
}
