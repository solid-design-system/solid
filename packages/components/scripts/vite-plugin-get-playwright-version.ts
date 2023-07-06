/**
 * The `extract-playwright-version` plugin is created for Vite, aiming to dynamically extract
 * and expose the version number of Playwright from `pnpm-lock.yaml`. This plugin enables Storybook,
 * which is provided by Vite, to display the current version of Playwright and link to it.
 *
 * This plugin:
 * 1. Resolves the id 'playwright-version' which represents the Playwright version in this context.
 * 2. Loads the data of this id by reading `pnpm-lock.yaml`, then extracting the version number of Playwright.
 */

import { readFileSync } from 'fs';
import path from 'path';

// Path to the file
const filePath = path.resolve(__dirname, '../../../pnpm-lock.yaml');

export default () => {
  return {
    name: 'extract-playwright-version',
    resolveId(id: string) {
      if (id === 'playwright-version') {
        return id; // this means we are handling this id
      }
      return null;
    },
    load(id: string) {
      if (id === 'playwright-version') {
        const pnpmLock = readFileSync(filePath, 'utf8');

        const match = /playwright-core@([^:]+):/.exec(pnpmLock);

        if (!match || !match[1]) {
          throw new Error('playwright-core version not found in pnpm-lock.yaml');
        }

        const version = match[1];
        return `export default "${version}";`;
      }
      return null;
    }
  };
};
