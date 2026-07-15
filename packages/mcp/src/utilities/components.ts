import fs from 'node:fs/promises';
import { join } from 'node:path';
import { componentPath } from './config.js';

function extractDescription(infoContent: string): string {
  const match = infoContent.match(/`<[^>]+>`\s*[\u2014\u2013-]+\s*(.+)/);
  if (match) return match[1].trim();
  return '';
}

/**
 * Get a list of all available components in the Solid Design System.
 * @returns A list of all sd-* tag names with built metadata.
 */
export const getAvailableComponents = async (): Promise<{ name: string; description: string }[]> => {
  const entries = await fs.readdir(componentPath, { withFileTypes: true });
  const dirs = entries
    .filter(d => d.isDirectory() && d.name.startsWith('sd-'))
    .map(d => d.name)
    .sort();
  return Promise.all(
    dirs.map(async name => {
      const infoMd = await fs.readFile(join(componentPath, name, 'info.md'), 'utf-8').catch(() => '');
      return { name, description: extractDescription(infoMd) };
    })
  );
};
