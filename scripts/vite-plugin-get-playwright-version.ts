import { readFileSync } from 'fs';
import path from 'path';

// Path to the file
const filePath = path.resolve(__dirname, '../pnpm-lock.yaml');

export default () => {
  return {
    name: 'extract-playwright-version',
    resolveId(id: string) {
      if (id === 'playwright-version') {
        return id; // this means we are handling this id
      }
      return;
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
      return;
    }
  };
};
