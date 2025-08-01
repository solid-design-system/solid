import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import type { Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const sanitizeThemeValues = (value: any): any => {
  if (value === null || value === undefined) {
    return value;
  }

  if (typeof value === 'string') {
    return value
      .replace(/<alpha-value>/g, '1')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .trim();
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return value.map(item => sanitizeThemeValues(item));
    }

    const sanitizedValues: any = {};

    try {
      for (const [k, v] of Object.entries(value)) {
        sanitizedValues[k] = sanitizeThemeValues(v);
      }
      return sanitizedValues;
    } catch (error) {
      console.warn(error);
      return {};
    }
  }
  return value;
};

const vitePluginExtractTailwindTheme = (): Plugin => {
  return {
    name: 'vite-plugin-extract-tailwind-theme',

    async buildStart() {
      try {
        const docsTailwindConfigurationPath = path.resolve(__dirname, '../tailwind.config.cjs');
        let docsTailwindConfiguration: any = {};

        if (fs.existsSync(docsTailwindConfigurationPath)) {
          try {
            docsTailwindConfiguration = require(docsTailwindConfigurationPath);
          } catch (error) {
            console.error(error);
            docsTailwindConfiguration = {};
          }
        }

        let theme = docsTailwindConfiguration?.theme || {};
        const sanitizedTheme = sanitizeThemeValues(theme);
        const outputPath = path.resolve(__dirname, '../.storybook/solid-tw-config.json');
        const outputDir = path.dirname(outputPath);

        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, JSON.stringify(sanitizedTheme, null, 2), 'utf-8');
        console.log('\x1b[32minfo\x1b[0m => Tailwind theme extracted');
      } catch (error) {
        console.error(error);
      }
    }
  };
};

export default vitePluginExtractTailwindTheme;
