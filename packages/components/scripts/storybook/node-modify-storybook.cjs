const fs = require('fs');
const path = require('path');

/**
 * Change the generated document title to "Solid Design System by Union Investment".
 */

const searchDir = 'dist/storybook/sb-manager';
const searchText = 'u22C5 Storybook';
const replaceText = 'u22C5 Solid Design System by Union Investment (Storybook)';

function replaceTextInFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directory, file);

      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        const updatedContent = content.replace(new RegExp(searchText, 'g'), replaceText);

        if (updatedContent !== content) {
          fs.writeFile(filePath, updatedContent, 'utf8', err => {
            if (err) {
              console.error('Error writing file:', err);
            } else {
              console.log(`Replaced text in ${file}`);
            }
          });
        }
      });
    });
  });
}

replaceTextInFiles(searchDir);

/**
 * Remove the generated index.html favicon link to use custom tag from manager-header.html.
 */
try {
  const filePath = '../../dist/storybook/index.html';
  const document = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  console.log('Removing generated favicon link.');
  // find the link tag with type="image/svg+xml" and remove it
  const faviconLink = document.match(/<link rel="icon" type="image\/svg\+xml" href=".*" \/>/)[0];
  const output = document.replace(faviconLink, '');
  fs.writeFileSync(path.resolve(__dirname, filePath), output);
  console.log('Removing favicon link complete.');
} catch (error) {
  console.log('Removing favicon link failed.');
  console.error(error);
  process.exit(1);
}
