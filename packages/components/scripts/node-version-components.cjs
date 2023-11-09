/**
 * This plugin automates the process of versioning components by appending
 * version numbers to component names and copying directories to new locations.
 *
 * The two main functions are:
 *
 * versionComponents(source, destination): Copies a source directory to a new
 * destination and appends version numbers to component names.
 *
 * versionIdeData(): Adjusts IDE data for the versioned components.
 */

const fs = require('fs');
const path = require('path');

function versionComponents(source, destination) {
  const packageJson = require('../package.json');
  const currentVersion = packageJson.version.replace(/\./g, '-');

  const componentsPath = './src/components';
  const components = fs.readdirSync(componentsPath).filter(file => {
    return fs.statSync(path.join(componentsPath, file)).isDirectory();
  });

  const distComponentsPath = `./dist/${source}`;
  const distComponentsVersionedPath = `./dist/${destination}`;

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
          const regex = new RegExp(`(?!--)sd-${componentName}`, 'g');
          fileContent = fileContent.replace(regex, `sd-${currentVersion}-${componentName}`);
        });

        fs.writeFileSync(filePath, fileContent);
      }
    });
  }

  replaceComponentNames(distComponentsVersionedPath);

  console.log(`📦 Versioned components (${packageJson.version}) created in ${destination}`);
}

const versionIdeData = () => {
  const packageJson = require('../package.json');
  const currentVersion = packageJson.version.replace(/\./g, '-');

  const dataFilePathHtml = './dist/vscode.html-custom-data.json';
  const dataHtml = JSON.parse(fs.readFileSync(dataFilePathHtml, 'utf-8'));

  const dataFilePathWeb = './dist/web-types.json';
  const dataWeb = JSON.parse(fs.readFileSync(dataFilePathWeb, 'utf-8'));

  const getVersionedName = name => {
    return name.replace('sd-', `sd-${currentVersion}-`);
  };

  // Copy the tags before iterating over them
  const originalTagsHtml = [...dataHtml.tags];

  // Add versioned names to the tags
  for (const tag of originalTagsHtml) {
    dataHtml.tags.push({
      ...tag,
      name: getVersionedName(tag.name)
    });
  }

  const originalElementsWeb = [
    ...dataWeb.contributions.html.elements.filter(element => element.name?.startsWith('sd-'))
  ];

  // Add versioned names to the elements
  for (const element of originalElementsWeb) {
    dataWeb.contributions.html.elements.push({
      ...element,
      name: getVersionedName(element.name)
    });
  }

  // Write updated data back to the files
  fs.writeFileSync(dataFilePathHtml, JSON.stringify(dataHtml, null, 2));
  console.log(`📦 Versioned HTML data (${packageJson.version}) created in vscode.html-custom-data.json`);
};

versionComponents('components/es', 'versioned-components/es');
versionComponents('package', 'versioned-package');
versionIdeData();
