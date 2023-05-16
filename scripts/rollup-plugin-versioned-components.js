import fs from 'fs';
import path from 'path';

export default function versionedComponents() {
  return {
    name: 'rollup-plugin-versioned-components',
    async writeBundle(outputOptions) {
      if (outputOptions.format !== 'es') {
        return;
      }
      const packageJson = require('../package.json');
      const currentVersion = packageJson.version.replace(/\./g, '-');

      const componentsPath = './src/components';
      const components = fs.readdirSync(componentsPath).filter(file => {
        return fs.statSync(path.join(componentsPath, file)).isDirectory();
      });

      const distComponentsPath = './dist/components/es';
      const distComponentsVersionedPath = './dist/versioned-components/es';
      fs.mkdirSync(distComponentsVersionedPath, { recursive: true });

      function copyFolderSync(source, target) {
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

      function replaceComponentNames(directory) {
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
