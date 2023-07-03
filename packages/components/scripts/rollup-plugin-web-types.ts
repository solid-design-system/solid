//
// This script generates a web-types.json file from custom-elements.json for use with WebStorm/PHPStorm
//
// Docs: https://github.com/JetBrains/web-types
//
import jsonata from 'jsonata';
import fs from 'fs';
import path from 'path';

export default function webTypesPlugin() {
  return {
    name: 'rollup-plugin-web-types',
    async writeBundle(outputOptions: any) {
      const outputDir = outputOptions.dir.replace('/components', '');
      const webTypesPath = path.join(outputDir, 'web-types.json');
      const metadata = JSON.parse(fs.readFileSync(path.join(outputDir, 'custom-elements.json'), 'utf8'));

      // As rollup runs two times for UMD and ES, we only want to run this once
      if (fs.existsSync(webTypesPath)) {
        return;
      }

      const jsonataExprString = `{
        "$schema": "http://json.schemastore.org/web-types",
        "name": package.name,
        "version": package.version,
        "description-markup": "markdown",
        "framework-config": {
          "enable-when": {
            "node-packages": [
              package.name
            ]
          }
        },
        "contributions": {
          "html": {
            "elements": [
              modules.declarations.{
                "name": tagName,
                "description": description,
                "doc-url": $join(["https://solid.union-investment.com/[storybook-link]/", $substringAfter(tagName, 'sd-')]),
                "js": {
                  "properties": [
                    members.{
                      "name": name,
                      "description": description,
                      "value": {
                        "type": type.text
                      }
                    }
                  ],
                  "events": [
                    events.{
                      "name": name,
                      "description": description
                    }
                  ]
                },
                "attributes": [
                  attributes.{
                    "name": name,
                    "description": description,
                    "value": {
                      "type": type.text
                    }
                  }
                ]
              }
            ]
          }
        }
      }`;

      // Run the conversion
      const expression = jsonata(jsonataExprString);
      const result = await expression.evaluate(metadata);

      /**
       * Version components
       */

      const packageJson = require('../package.json');
      const currentVersion = packageJson.version.replace(/\./g, '-');

      const getVersionedName = (name: string) => {
        return name.replace('sd-', `sd-${currentVersion}-`);
      };

      const originalElementsWeb = [
        ...result.contributions.html.elements.filter((element: any) => element.name?.startsWith('sd-'))
      ];

      // Add versioned names to the elements
      for (const element of originalElementsWeb) {
        result.contributions.html.elements.push({
          ...element,
          name: getVersionedName(element.name)
        });
      }

      console.log('📦 Generating web types');
      fs.writeFileSync(webTypesPath, JSON.stringify(result, null, 2), 'utf8');
    }
  };
}
