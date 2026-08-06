import { readFileSync } from 'fs';
import { join } from 'path';
import { globby } from 'globby';
import { tokensPath } from './config.js';
import { getStructuredMetaData } from './metadata.js';

export const getTailwindThemeTokenNames = (): string[] => {
  const tokensIndexPath = join(tokensPath, 'tokens.json');
  try {
    const raw = readFileSync(tokensIndexPath, 'utf-8');
    const parsed = JSON.parse(raw) as { tokens?: string[] };
    return Array.isArray(parsed.tokens) ? parsed.tokens : [];
  } catch {
    return [];
  }
};

export const getAvailableTokenThemes = (): string[] => {
  const themesPath = join(tokensPath, 'themes.json');
  try {
    const raw = readFileSync(themesPath, 'utf-8');
    const parsed = JSON.parse(raw) as { themes?: string[] };
    return Array.isArray(parsed.themes) ? parsed.themes : [];
  } catch {
    return [];
  }
};

export const getTokensMetaData = async (type: 'css' | 'javascript' = 'css') => {
  const fileList: string[] = [];

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
