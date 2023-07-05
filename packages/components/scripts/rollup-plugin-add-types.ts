import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

export default function addTypesPlugin() {
  // Define the target directory
  const targetDir = './dist/package';

  // Function to check if a directory is empty
  function isDirectoryEmpty(directory: string) {
    return fs.promises.readdir(directory).then(files => files.length === 0);
  }

  // Function to process each directory
  async function processDirectory(directory: string) {
    const files = await fs.promises.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isDirectory()) {
        // If the file is a directory, process it recursively
        await processDirectory(filePath);

        // If the directory is now empty, remove it
        if (await isDirectoryEmpty(filePath)) {
          await fs.promises.rmdir(filePath);
        }
      } else if (stats.isFile() && file.endsWith('.d.ts')) {
        // If the file is a .d.ts file, check for a corresponding .ts file
        const correspondingJsFile = file.substring(0, file.length - 5) + '.js';
        const correspondingJsFilePath = path.join(directory, correspondingJsFile);

        if (!fs.existsSync(correspondingJsFilePath)) {
          // If no corresponding .js file exists, delete the .d.ts file
          await fs.promises.unlink(filePath);
        }
      }
    }
  }

  return {
    name: 'addTypesPlugin',
    async writeBundle() {
      await new Promise((resolve, reject) => {
        exec('tsc --declaration --emitDeclarationOnly --project tsconfig.prod.json --outDir dist/package', error => {
          if (error) {
            reject(error);
          } else {
            resolve(null);
          }
        });
      });

      // 2. Delete solid-components.d.ts and rename solid-components.lib.d.ts to solid-components.d.ts
      if (fs.existsSync(path.join(targetDir, 'solid-components.d.ts'))) {
        fs.unlinkSync(path.join(targetDir, 'solid-components.d.ts'));
      }

      if (fs.existsSync(path.join(targetDir, 'solid-components.package.d.ts'))) {
        fs.renameSync(
          path.join(targetDir, 'solid-components.package.d.ts'),
          path.join(targetDir, 'solid-components.d.ts')
        );
      }

      // Start processing
      await processDirectory(targetDir);

      console.log(`📦 Types generated`);
      return;
    }
  };
}
