import fs from 'fs';

export default function versionVsCodeDataPlugin() {
  return {
    name: 'version-vscode-data',
    writeBundle: {
      order: 'post',
      handler: async function () {
        const packageJson = require('../package.json');
        const currentVersion = packageJson.version.replace(/\./g, '-');

        const dataFilePathHtml = './dist/vscode.html-custom-data.json';
        const dataHtml = JSON.parse(fs.readFileSync(dataFilePathHtml, 'utf-8'));

        // const dataFilePathWeb = './dist/web-types.json';
        // const dataWeb = JSON.parse(fs.readFileSync(dataFilePathWeb, 'utf-8'));

        const getVersionedName = (name: string) => {
          return name.replace('sd-', `sd-${currentVersion}-`);
        };

        // Copy the tags before iterating over them
        const originalTagsHtml = [...dataHtml.tags];

        // Add versioned names to the tags
        for (const tag of originalTagsHtml) {
          dataHtml.tags.push({
            ...tag,
            name: getVersionedName(tag.name)
          });
        }

        // // Copy the elements before iterating over them
        // const originalElementsWeb = [...dataWeb.contributions.html.elements];

        // // Add versioned names to the elements
        // for (const element of originalElementsWeb) {
        //   dataWeb.contributions.html.elements.push({
        //     ...element,
        //     name: getVersionedName(element.name)
        //   });
        // }

        // Write updated data back to the files
        fs.writeFileSync(dataFilePathHtml, JSON.stringify(dataHtml, null, 2));
        // fs.writeFileSync(dataFilePathWeb, JSON.stringify(dataWeb, null, 2));
      }
    }
  };
}
