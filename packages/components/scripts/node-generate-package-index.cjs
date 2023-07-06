const fs = require('fs');
const path = require('path');

// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const srcDir = 'src/components';
const fileName = 'src/solid-components.ts';
const outputFileName = 'src/solid-components.package.ts';

// read the source file content
let fileContent = fs.readFileSync(fileName, 'utf8');

// read the folders in src/components
const folders = fs.readdirSync(srcDir).filter(folder => {
  const stat = fs.lstatSync(path.join(srcDir, folder));
  return stat.isDirectory();
});

// build the new package lines
const packageLines = folders
  .map(folder => {
    const pascalFolder = `Sd${kebabToPascal(folder)}`;
    const kebabFolder = folder;
    return `export { default as ${pascalFolder} } from './components/${kebabFolder}/${kebabFolder}';`;
  })
  .join('\n');

// replace the packages in the file content
fileContent = fileContent.replace(/\/\* PACKAGES:START \*\/[\s\S]*\/\* PACKAGES:END \*\//, packageLines);

// write the new file
fs.writeFileSync(outputFileName, fileContent, 'utf8');
