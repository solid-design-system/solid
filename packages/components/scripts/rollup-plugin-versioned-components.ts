import fs from 'fs';
import path from 'path';

export default function versionedComponents(source: string) {
  return {
    name: 'rollup-plugin-versioned-components',
    async writeBundle(outputOptions: any) {
      if (outputOptions.format !== 'es') {
        return;
      }
      const packageJson = require('../package.json');
      const currentVersion = packageJson.version.replace(/\./g, '-');

      const componentsPath = './src/components';
      const components = fs.readdirSync(componentsPath).filter(file => {
        return fs.statSync(path.join(componentsPath, file)).isDirectory();
      });

      const distComponentsPath = `./dist/${source}`;
      const distComponentsVersionedPath = `./dist/versioned-${source}`;

      // We have to wait until the declaration files for the unversioned
      // package are generated and optimized before we can copy them
      if (source === 'package') {
        while (!fs.existsSync('./dist/package/solid-components.d.ts')) {
          await new Promise(resolve => setTimeout(resolve, 250));
        }
      }

      fs.mkdirSync(distComponentsVersionedPath, { recursive: true });

      function copyFolderSync(source: string, target: string) {
        const files = fs.readdirSync(source);

        files.forEach(file => {
          const sourceFile = path.join(source, file);
          const targetFile = path.join(target, file);

          if (fs.lstatSync(sourceFile).isDirectory()) {
            fs.mkdirSync(targetFile, { recursive: true });
            copyFolderSync(sourceFile, targetFile);
          } else {
            fs.copyFileSync(sourceFile, targetFile);
          }
        });
      }

      copyFolderSync(distComponentsPath, distComponentsVersionedPath);

      function replaceComponentNames(directory: string) {
        const files = fs.readdirSync(directory);

        files.forEach(file => {
          const filePath = path.join(directory, file);

          if (fs.lstatSync(filePath).isDirectory()) {
            replaceComponentNames(filePath);
          } else {
            let fileContent = fs.readFileSync(filePath, 'utf-8');

            components.forEach(componentName => {
              const regex = new RegExp(`(?!--)sd-${componentName}`, 'g');
              fileContent = fileContent.replace(regex, `sd-${currentVersion}-${componentName}`);
            });

            fs.writeFileSync(filePath, fileContent);
          }
        });
      }

      replaceComponentNames(distComponentsVersionedPath);

      console.log(`📦 Versioned components (${packageJson.version}) created`);
    }
  };
}
