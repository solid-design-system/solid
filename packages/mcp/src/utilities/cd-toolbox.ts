import fs from 'node:fs/promises';
import { join } from 'node:path';
import { cdToolboxPath } from './config.js';

function extractDescription(infoContent: string): string {
  const match = infoContent.match(/`[^`]+`\s*[\u2014\u2013-]+\s*(.+)/);
  if (match) return match[1].trim();
  return '';
}

/**
 * Get a list of all available items in the CD Toolbox package.
 * @returns Sorted list of entries (name + description).
 */
export const getAvailableCdToolboxItems = async (): Promise<{ name: string; description: string }[]> => {
  try {
    const entries = await fs.readdir(cdToolboxPath, { withFileTypes: true });
    const dirs = entries
      .filter(d => d.isDirectory() && d.name !== 'docs')
      .map(d => d.name)
      .sort();
    return Promise.all(
      dirs.map(async name => {
        const infoMd = await fs.readFile(join(cdToolboxPath, name, 'info.md'), 'utf-8').catch(() => '');
        return { name, description: extractDescription(infoMd) };
      })
    );
  } catch {
    return [];
  }
};
