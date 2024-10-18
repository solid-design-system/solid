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
    if (
      (file.startsWith('solid-element-') && file.endsWith('.js')) ||
      (file.startsWith('solid-components-') && file.endsWith('.js'))
    ) {
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

      // Check if file contains the string to replace
      if (data.includes('.animate-spin{animation:spin 1s linear infinite}')) {
        // Replace and write the new content to file
        const result = data.replace(
          // If other animations are needed, please think about
          // e. g. adding "animation-duration: 0 !important" here
          '.animate-spin{animation:spin 1s linear infinite}',
          '.animate-spin{animation: 1s linear 5.0s infinite spin}'
        );

        fs.writeFile(filePath, result, 'utf8', err => {
          if (err) {
            console.error('Failed to write file:', err);
            process.exit(1);
          }

          console.log(`Successfully updated: ${filePath}`);
        });
      } else {
        console.error('File does not contain the required string.');
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
