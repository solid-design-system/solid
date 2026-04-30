import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { globby } from 'globby';
import ora from 'ora';
import { createPath, tokensPath } from '../utilities/index.js';

/**
 * List of relative paths to files that should be copied to the static metadata directory.
 */
const filesToCopy = ['README.md', 'CHANGELOG.md', 'dist/theme.js', 'dist/themes/**/*.css'];

/**
 * Sets up all wanted data from the tokens package and adds it to the static metadata.
 */
export const buildTokens = async () => {
  const spinner = ora({
    prefixText: 'Tokens:',
    text: 'Generating static metadata...'
  }).start();

  try {
    spinner.text = 'Cleaning up old metadata...';
    rmSync(tokensPath, { recursive: true, force: true });

    spinner.succeed('Old metadata cleaned up.');

    spinner.text = 'Creating new metadata directory...';

    // Create the tokens directory if it doesn't exist
    await createPath(tokensPath);

    spinner.succeed('New metadata directory created.');
    spinner.text = 'Copying files to metadata directory...';

    // Get the module's root directory
    // Use dist/theme.js as the resolve anchor (it's a valid export of the package).
    // dirname gives us dist/, so one '../' reaches the package root.
    const moduleUrl = import.meta.resolve('@solid-design-system/tokens/dist/theme.js');
    const modulePath = fileURLToPath(moduleUrl);
    const moduleDir = path.join(path.dirname(modulePath), '../');

    // Process the files (placeholder for actual logic)
    const contents = await globby(filesToCopy, {
      cwd: moduleDir,
      onlyFiles: true
    });

    // Write the files to the tokens directory into a flat structure
    const copies = contents.map(file => {
      const sourcePath = path.join(moduleDir, file);
      const destPath = path.join(tokensPath, path.basename(file));
      return fs.copyFile(sourcePath, destPath);
    });
    await Promise.all(copies);

    spinner.succeed('Tokens metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate tokens metadata. Error: ${error as string}`);
    throw error; // Re-throw to handle it in the calling function
  }
};
