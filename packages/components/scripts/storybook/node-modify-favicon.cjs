const fs = require('fs');
const path = require('path');

/**
 * Remove the generated index.html favicon link to use custom tag from manager-header.html.
 */
try {
  console.log('Removing index.html favicon link.');
  const filePath = '../../dist/storybook/index.html';
  const document = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
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
