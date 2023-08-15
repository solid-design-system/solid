const fs = require('fs');
const path = require('path');

/**
 * Change the generated index.html document title to "Solid Design System by Union Investment | Version: x.x.x".
 */
try {
  console.log('Rewriting index.html document title.');
  const version = process.argv[2];
  const filePath = '../../dist/storybook/index.html';
  const document = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
  const output = document
    .replace(/<title>.*<\/title>/, `<title>Solid Design System by Union Investment | ${version}</title>`)
    .replace(
      /<meta property="og:title" content="Solid Design System by Union Investment" \/>/,
      `<meta property="og:title" content="Solid Design System by Union Investment | ${version}" />`
    )
    .replace(
      /<meta name="twitter:title" content="Solid Design System by Union Investment" \/>/,
      `<meta name="twitter:title" content="Solid Design System by Union Investment | ${version}" />`
    )
    .replace(
      /<meta itemprop="name" content="Solid Design System by Union Investment" \/>/,
      `<meta itemprop="name" content="Solid Design System by Union Investment | ${version}" />`
    );
  fs.writeFileSync(path.resolve(__dirname, filePath), output);
  console.log(`Title rewrite complete => Solid Design System by Union Investment | ${version}`);
} catch (error) {
  console.log('Title rewrite failed.');
  console.error(error);
  process.exit(1);
}
