/**
 * This plugin automates the process of versioning components by appending
 * version numbers to component names and copying directories to new locations.
 *
 * versionComponents(source, destination): Copies a source directory to a new
 * destination and appends version numbers to component names.
 */

import fs from 'fs';
import path from 'path';

export function versionComponents(source, destination) {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  const currentVersion = packageJson.version.replace(/\./g, '-');

  const componentsPath = './src/components';
  const components = fs.readdirSync(componentsPath).filter(file => {
    return fs.statSync(path.join(componentsPath, file)).isDirectory();
  });

  const distComponentsPath = `./${source}`;
  const distComponentsVersionedPath = `./${destination}`;

  fs.mkdirSync(distComponentsVersionedPath, { recursive: true });

  if (!fs.existsSync(distComponentsPath)) {
    console.warn(`⚠️  The source directory "${distComponentsPath}" does not exist. Skipping copy...`);
    return;
  }

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

  function replaceComponentNames(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
      const filePath = path.join(directory, file);

      if (fs.lstatSync(filePath).isDirectory()) {
        replaceComponentNames(filePath);
      } else {
        let fileContent = fs.readFileSync(filePath, 'utf-8');

        components.forEach(componentName => {
          // Events, CSS Variables and URLs to Storybook should not be versioned
          const regex = new RegExp(`(?<!this.emit\\("|-|--)sd-${componentName}`, 'g');
          fileContent = fileContent.replace(regex, `sd-${currentVersion}-${componentName}`);
        });

        fs.writeFileSync(filePath, fileContent);
      }
    });
  }

  replaceComponentNames(distComponentsVersionedPath);

  console.log(`📦 Versioned components (${packageJson.version}) created in ${destination}`);
}

versionComponents('cdn', 'cdn-versioned');
versionComponents('dist', 'dist-versioned');
