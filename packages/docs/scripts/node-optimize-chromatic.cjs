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
        fs
          .readFileSync(path.join(directoryPath, file), 'utf8')
          .includes('.animate-spin{animation:spin 1s linear infinite}') === true
      ) {
        matchedFiles.push(file);
      }
    }
  });

  if (matchedFiles.length === 1) {
    const filePath = path.join(directoryPath, matchedFiles[0]);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Failed to read file:', err);
        process.exit(1);
      }

      const animations = [
        '.animate-spin{animation:spin 1s linear infinite}',
        '.animate-loader-current{animation:wave 1.3s infinite,loader-color-current 2.6s infinite}',
        '.animate-loader-white{animation:wave 1.3s infinite,loader-color-white 2.6s infinite}',
        '.animate-loader-primary{animation:wave 1.3s infinite,loader-color-primary 2.6s infinite}'
      ];

      // Map of original animation to replacement
      const replacements = {
        '.animate-spin{animation:spin 1s linear infinite}': '.animate-spin{animation: 1s linear 5.0s infinite spin}',
        '.animate-loader-current{animation:wave 1.3s infinite,loader-color-current 2.6s infinite}':
          '.animate-loader-current{animation:wave 0s infinite,loader-color-current 0s infinite}',
        '.animate-loader-white{animation:wave 1.3s infinite,loader-color-white 2.6s infinite}':
          '.animate-loader-white{animation:wave 0s infinite,loader-color-white 0s infinite}',
        '.animate-loader-primary{animation:wave 1.3s infinite,loader-color-primary 2.6s infinite}':
          '.animate-loader-primary{animation:wave 0s infinite,loader-color-primary 0s infinite}'
      };

      let found = false;
      let result = data;

      animations.forEach(anim => {
        if (result.includes(anim)) {
          found = true;
          result = result.replace(new RegExp(anim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacements[anim]);
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
  } else if (matchedFiles.length > 1) {
    console.error('Multiple matching files found.');
    process.exit(1);
  } else {
    console.error('No matching files found.');
    process.exit(1);
  }
});
