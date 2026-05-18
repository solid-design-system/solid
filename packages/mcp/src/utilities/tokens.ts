import { readFileSync } from 'fs';
import { join } from 'path';
import { globby } from 'globby';
import { tokensPath } from './config.js';
import { getStructuredMetaData } from './metadata.js';

export const getTailwindThemeTokenNames = (): string[] => {
  const tailwindCssPath = join(tokensPath, 'tailwind.css');
  const content = readFileSync(tailwindCssPath, 'utf-8');

  // Extract content inside @theme inline { ... }
  const themeMatch = content.match(/@theme\s+inline\s*\{([\s\S]*?)\n\}/);
  if (!themeMatch) return [];

  const themeBlock = themeMatch[1];
  const propertyNames: string[] = [];
  const propRegex = /^\s*(--[\w\\/.-]+)\s*:/gm;
  let match;
  while ((match = propRegex.exec(themeBlock)) !== null) {
    propertyNames.push(match[1]);
  }
  return propertyNames;
};

export const getTokensMetaData = async (type: 'css' | 'javascript' = 'css') => {
  const fileList = ['README.md', 'CHANGELOG.md'];

  if (type === 'javascript') {
    fileList.push('*.js');
    fileList.push('*.ts');
  } else if (type === 'css') {
    fileList.push('*.css');
  }

  const finalList = await globby(fileList, {
    cwd: tokensPath,
    onlyFiles: true
  });

  return getStructuredMetaData(tokensPath, item => finalList.includes(item));
};
