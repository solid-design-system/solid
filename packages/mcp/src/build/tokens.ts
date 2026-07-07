import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { globby } from 'globby';
import ora from 'ora';
import { createPath, tokensPath } from '../utilities/index.js';

/**
 * Minimal list of token metadata files to copy.
 * We keep one canonical token source plus package docs/changelog.
 */
const filesToCopy = ['README.md', 'CHANGELOG.md', 'dist/theme.js', 'dist/themes/tailwind.css'];

const getAvailableThemes = async (moduleDir: string): Promise<string[]> => {
  const candidates = ['dist/themes', 'themes'];

  for (const relPath of candidates) {
    const absPath = path.join(moduleDir, relPath);
    try {
      const entries = await fs.readdir(absPath, { withFileTypes: true });
      const themes = entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
        .sort();

      if (themes.length) return themes;
    } catch {
      // Try next candidate path.
    }
  }

  return [];
};

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

    // Write files sequentially because multiple theme files share the same basename
    // (e.g. `icons.css`), and parallel copy operations can corrupt output.
    for (const file of contents) {
      const sourcePath = path.join(moduleDir, file);
      const destPath = path.join(tokensPath, path.basename(file));
      await fs.copyFile(sourcePath, destPath);
    }

    // Persist an explicit list of available themes without copying every theme CSS file.
    const themes = await getAvailableThemes(moduleDir);
    await fs.writeFile(path.join(tokensPath, 'themes.json'), JSON.stringify({ themes }, null, 2));

    spinner.succeed('Tokens metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate tokens metadata. Error: ${error as string}`);
    throw error; // Re-throw to handle it in the calling function
  }
};
