/**
 * This script automates the process of versioning components by injecting
 * version numbers to component names and copying directories to new locations.
 */

import fs from 'fs';
import path from 'path';

/**
 *
 * @param {Object} param - The object
 * @param {String} param.source - The source directory to copy
 * @param {String} param.destination - The destination directory to copy to
 * @param {Array} param.components - An array of component names to version
 * @returns
 */

export function versionComponents({ source, destination, components }) {
  const version = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version;

  const distComponentsPath = source;
  const distComponentsVersionedPath = destination;

  fs.mkdirSync(distComponentsVersionedPath, { recursive: true });

  if (!fs.existsSync(distComponentsPath)) {
    console.warn(`⚠️  The source directory "${distComponentsPath}" does not exist. Skipping copy...`);
    return;
  }

  // eslint-disable-next-line no-shadow
  function copyFolderSync(source, target) {
    const files = fs.readdirSync(source);

    files.forEach(file => {
      const sourceFile = path.join(source, file);
      const targetFile = path.join(target, file);

      if (fs.lstatSync(sourceFile).isDirectory()) {
        fs.mkdirSync(targetFile, { recursive: true });
        copyFolderSync(sourceFile, targetFile);
      } else {
        fs.copyFileSync(sourceFile, targetFile);
      }
    });
  }

  copyFolderSync(distComponentsPath, distComponentsVersionedPath);

  function writeFilesWithReplaceComponentNames(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
      const filePath = path.join(directory, file);

      if (fs.lstatSync(filePath).isDirectory()) {
        writeFilesWithReplaceComponentNames(filePath);
      } else {
        let fileContent = fs.readFileSync(filePath, 'utf-8');

        components.forEach(componentName => {
          const replacedContent = replaceComponentName(fileContent, componentName, version);
          fileContent = replacedContent;
        });

        fs.writeFileSync(filePath, fileContent);
      }
    });
  }

  writeFilesWithReplaceComponentNames(distComponentsVersionedPath);
}

export function replaceComponentName(fileContent, componentName, version) {
  const currentVersion = version.replace(/\./g, '-');
  const pattern = new RegExp(`sd-${componentName}`, 'g');

  return fileContent.replace(pattern, (match, offset) => {
    // Extract up to 50 characters before the match.
    // We clamp the start at 0 to avoid negative indices.
    const beforeStartIndex = Math.max(0, offset - 50);

    // The text immediately before the match, used to detect patterns like:
    // - this.emit("sd-…")
    // - assumeInteractionOn arrays
    const textBeforeMatch = fileContent.slice(beforeStartIndex, offset);

    // The text immediately after the match (up to 10 chars).
    // Used to detect Storybook URLs like: sd-button--docs
    const textAfterMatch = fileContent.slice(offset + match.length, offset + match.length + 10);

    // skips css variables
    if (fileContent.slice(Math.max(0, offset - 2), offset) === '--') return match;

    // skips storybook urls
    if (textAfterMatch.startsWith('--docs')) return match;

    // skips event names passed to this.emit
    if (textBeforeMatch.endsWith('this.emit("')) return match;

    // skips event names in assumeInteractionOn arrays
    if (textBeforeMatch.includes('assumeInteractionOn')) return match;

    return `sd-${currentVersion}-${componentName}`;
  });
}
