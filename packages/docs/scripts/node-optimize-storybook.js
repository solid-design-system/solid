import { promises as fsPromises } from 'fs';
import path from 'path';

/**
 * Change the generated browser title to "Solid Design System by Union Investment".
 */
const searchDir = 'dist/storybook/sb-manager';
const searchText = 'u22C5 Storybook';
const replaceText = 'u22C5 Solid Design System by Union Investment (Storybook)';
async function replaceTextInFiles(directory) {
  console.log('Starting replaceTextInFiles');
  try {
    const files = await fsPromises.readdir(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const content = await fsPromises.readFile(filePath, 'utf8');
      const updatedContent = content.replace(new RegExp(searchText, 'g'), replaceText);
      if (updatedContent !== content) {
        await fsPromises.writeFile(filePath, updatedContent, 'utf8');
        console.log(`✅ Replaced text in ${file}`);
      }
    }
    console.log('✅ Finished replaceTextInFiles');
  } catch (err) {
    console.error('❌ Error in replaceTextInFiles:', err);
  }
}

async function updateIndexHtml() {
  /**
   * Change the generated index.html document title to "Solid Design System by Union Investment" and remove generated favicon link to use custom tag from manager-header.html.
   */
  try {
    console.log('Starting index.html modification');
    const filePath = './dist/storybook/index.html';
    const document = await fsPromises.readFile(filePath, 'utf8');
    const output = document
      .replace(/<title>@storybook\/cli - Storybook<\/title>/, `<title>Solid Design System by Union Investment</title>`)
      .replace(/<link rel="icon" type="image\/svg\+xml" href=".*" \/>/, '');
    await fsPromises.writeFile(filePath, output);
    console.log('✅ index.html document rewrite complete.');
  } catch (error) {
    console.log('❌ Document rewrite failed.');
    console.error(error);
    process.exit(1);
  }
}

async function removeDefaultFavicon() {
  const defaultFavicon = './dist/storybook/favicon.svg';
  try {
    await fsPromises.unlink(defaultFavicon);
    console.log('✅ Default Storybook favicon removed');
  } catch (error) {
    console.log('❌ Default Storybook favicon removal failed.');
    console.error(error);
    process.exit(1);
  }
}

async function optimizeStorybook() {
  await replaceTextInFiles(searchDir);
  await updateIndexHtml();
  await removeDefaultFavicon();

  process.exit(0);
}

optimizeStorybook();
