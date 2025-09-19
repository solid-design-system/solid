const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../dist/storybook/assets');
const matchedFiles = [];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Failed to read directory:', err);
    process.exit(1);
  }

  files.forEach(file => {
    if (file.endsWith('.js')) {
      if (
        fs.readFileSync(path.join(directoryPath, file), 'utf8').includes(`--animate-spin: spin 1s linear infinite;`)
      ) {
        matchedFiles.push(file);
      }
    }
  });

  if (!matchedFiles.length) {
    console.error('No matching files found.');
    process.exit(1);
  }

  matchedFiles.forEach(matchedFile => {
    const filePath = path.join(directoryPath, matchedFile);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Failed to read file:', err);
        process.exit(1);
      }

      // Map of original animation to replacement
      const replacements = {
        '--animate-spin: spin 1s linear infinite;': '--animate-spin: 1s linear infinite spin;',
        'wave 1.3s infinite, loader-color-current 2.6s infinite;':
          'wave 0s infinite, loader-color-current 0s infinite;',
        'wave 1.3s infinite, loader-color-white 2.6s infinite;': 'wave 0s infinite, loader-color-white 0s infinite;',
        'wave 1.3s infinite, loader-color-primary 2.6s infinite;': 'wave 0s infinite, loader-color-primary 0s infinite;'
      };

      let found = false;
      let result = data;

      Object.entries(replacements).forEach(([anim, replacement]) => {
        if (result.includes(anim)) {
          found = true;
          result = result.replace(new RegExp(anim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
        }
      });

      if (found) {
        fs.writeFile(filePath, result, 'utf8', err => {
          if (err) {
            console.error('Failed to write file:', err);
            process.exit(1);
          }
          console.log(`Successfully updated: ${filePath}`);
        });
      } else {
        console.error('File does not contain any of the required animation strings.');
      }
    });
  });
});
