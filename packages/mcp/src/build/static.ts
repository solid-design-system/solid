import { existsSync } from 'node:fs';
import { copyFile, readdir, mkdir } from 'node:fs/promises';
import { basename, join } from 'node:path';
import ora from 'ora';
import { cdToolboxPath, componentPath, createPath, getAbsolutePath } from '../utilities/index.js';

/**
 * List of static files that should be copied to the static metadata directory.
 */
const staticFilesToCopy = [
  // Copy the breaking changes guide into the components metadata directory
  [getAbsolutePath('../../../../packages/components/BREAKING_CHANGES.md'), componentPath]
];

/**
 * Sets up all data from the components and framework packages and adds them to the static metadata.
 */
export const buildStaticFiles = async () => {
  const spinner = ora({
    prefixText: 'Static files:',
    text: 'Generating static metadata...'
  }).start();

  try {
    // Create the wanted directories if they don't exist
    const createAllPaths = Promise.all(staticFilesToCopy.map(([, target]) => createPath(target)));
    await createAllPaths;

    // Copy cd-toolbox markdown files
    const cdToolboxSrc = getAbsolutePath('../../src/data/cd-toolbox');
    await mkdir(cdToolboxPath, { recursive: true });
    const cdToolboxFiles = await readdir(cdToolboxSrc);
    await Promise.all(
      cdToolboxFiles.filter(f => f.endsWith('.md')).map(f => copyFile(join(cdToolboxSrc, f), join(cdToolboxPath, f)))
    );

    const staticFiles = staticFilesToCopy
      .filter(file => existsSync(file.at(0)!))
      .map(([staticFile, target]) => {
        const targetFileName = join(target, basename(staticFile));
        return copyFile(staticFile, targetFileName);
      });

    await Promise.all(staticFiles);

    spinner.succeed('Static metadata generated successfully.');

    spinner.succeed('Generation of metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate components metadata. Error: ${error as string}`);
    throw error;
  }
};
