import { copyFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import { globby } from 'globby';
import { job } from '../shared.js';

export const runCopyModules = job('Copying submodules to dist...', async () => {
  // Get a list of all modules, except the index files in src
  const srcModules = await globby(['./src/**/*.css', '!./src/**/index.css']);

  // Get the destination file names
  const destinationFileNames = srcModules.map(module => module.replace('src', 'dist'));

  // Create the directories for the destination files
  const dirsToCreate = new Set(destinationFileNames.map(destination => dirname(destination)));

  await Promise.all([...dirsToCreate].map(dir => mkdir(dir, { recursive: true })));

  // Copy the files to their new location
  return Promise.all(srcModules.map((src, index) => copyFile(src, destinationFileNames[index])));
});
