const fs = require('fs');
const path = require('path');

// Read the version from package.json and convert it to slug format.
const packageJson = require('../package.json');
const currentVersion = packageJson.version.replace(/\./g, '-');

// 1. Check the names of every folder in ./src/components and save them in an array called "components".
const componentsPath = './src/components';
const components = fs.readdirSync(componentsPath).filter((file) => {
  return fs.statSync(path.join(componentsPath, file)).isDirectory();
});

// 2. Copy ./dist/components to ./dist/versioned-components/
const distComponentsPath = './dist/components';
const distComponentsVersionedPath = './dist/versioned-components';
fs.mkdirSync(distComponentsVersionedPath, { recursive: true });

function copyFolderSync(source, target) {
  const files = fs.readdirSync(source);

  files.forEach((file) => {
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

// 3. In ./dist/versioned-components/ go through EVERY file (recursively)loop through the array and
//    replace every occurrence of sd-${component-name} with sd-${currentVersion}-${componentName}.
//    CSS variables will be ignored (e.g. sd-button -> sd-1-0-0-button, but --sd-button-color will stay the same)
function replaceComponentNames(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      replaceComponentNames(filePath);
    } else {
      let fileContent = fs.readFileSync(filePath, 'utf-8');

      components.forEach((componentName) => {
        const regex = new RegExp(`(?!--)sd-${componentName}`, 'g');
        fileContent = fileContent.replace(regex, `sd-${currentVersion}-${componentName}`);
      });

      fs.writeFileSync(filePath, fileContent);
    }
  });
}

replaceComponentNames(distComponentsVersionedPath);
