import { fetchStyleComponents } from './storybook/styles-helper';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';

/**
 * Storybook Custom Elements Manifest Enhancer
 *
 * In the development environment, the `custom-elements.json` loads without issues. However, when deployed in
 * production with Storybook, inconsistencies in loading were observed. This script serves as a mitigation step
 * ensuring the manifest is enriched with `styleComponents` and reliably placed for Storybook.
 */

async function enhanceCustomElementManifest() {
  // Read the existing custom-elements.json file
  async function readCustomElements() {
    const data = await fsPromises.readFile('./dist/custom-elements.json', 'utf-8');
    return JSON.parse(data);
  }

  // Save the modified custom-elements.json to dist/storybook/
  async function saveToStorybook(customElements) {
    const outputPath = './dist/storybook/custom-elements.json';
    const data = JSON.stringify(customElements);
    await fsPromises.writeFile(outputPath, data, 'utf-8');
    console.log(`✅ Styles added to Custom Elements Manifest into ${outputPath}`);
  }

  try {
    const customElements = await readCustomElements();
    const styleComponents = await fetchStyleComponents();

    customElements.modules = [...customElements?.modules, ...styleComponents];
    await saveToStorybook(customElements);
  } catch (error) {
    console.error('Error processing the file:', error);
  }
}

enhanceCustomElementManifest();

/**
 * Change the generated browser title to "Solid Design System by Union Investment".
 */
const searchDir = 'dist/storybook/sb-manager';
const searchText = 'u22C5 Storybook';
const replaceText = 'u22C5 Solid Design System by Union Investment (Storybook)';
function replaceTextInFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('❌ Error reading directory:', err);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(directory, file);
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          console.error('❌ Error reading file:', err);
          return;
        }
        const updatedContent = content.replace(new RegExp(searchText, 'g'), replaceText);
        if (updatedContent !== content) {
          fs.writeFile(filePath, updatedContent, 'utf8', err => {
            if (err) {
              console.error('❌ Error writing file:', err);
            } else {
              console.log(`✅ Replaced text in ${file}`);
            }
          });
        }
      });
    });
  });
}
replaceTextInFiles(searchDir);

/**
 * Change the generated index.html document title to "Solid Design System by Union Investment" and remove generated favicon link to use custom tag from manager-header.html.
 */
try {
  const filePath = './dist/storybook/index.html';
  const document = fs.readFileSync(filePath, 'utf8');
  const output = document
    .replace(/<title>@storybook\/cli - Storybook<\/title>/, `<title>Solid Design System by Union Investment</title>`)
    .replace(/<link rel="icon" type="image\/svg\+xml" href=".*" \/>/, '');
  fs.writeFileSync(filePath, output);
  console.log('✅ index.html document rewrite complete.');
} catch (error) {
  console.log('❌ Document rewrite failed.');
  console.error(error);
  process.exit(1);
}
