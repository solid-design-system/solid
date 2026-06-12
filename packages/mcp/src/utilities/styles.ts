import fs from 'node:fs/promises';
import { join } from 'node:path';
import { stylesPath } from './config.js';

function extractDescription(infoContent: string): string {
  const match = infoContent.match(/`[^`]+`\s*[\u2014\u2013-]+\s*(.+)/);
  if (match) return match[1].trim();
  return '';
}

/**
 * Get a list of all available style utilities in the Solid Design System.
 * @returns Sorted list of style entries (name + description).
 */
export const getAvailableStyles = async (): Promise<{ name: string; description: string }[]> => {
  try {
    const entries = await fs.readdir(stylesPath, { withFileTypes: true });
    const dirs = entries
      .filter(d => d.isDirectory() && d.name.startsWith('sd-'))
      .map(d => d.name)
      .sort();
    return Promise.all(
      dirs.map(async name => {
        const infoMd = await fs.readFile(join(stylesPath, name, 'info.md'), 'utf-8').catch(() => '');
        return { name, description: extractDescription(infoMd) };
      })
    );
  } catch {
    return [];
  }
};

/**
 * Get info for a specific style utility.
 * @param name Style name with or without the "sd-" prefix.
 */
export const getStyleInfo = async (name: string) => {
  const dirName = name.startsWith('sd-') ? name : `sd-${name}`;
  const styleDir = join(stylesPath, dirName);

  const [docs, classesRaw] = await Promise.all([
    fs.readFile(join(styleDir, 'docs.md'), 'utf-8').catch(() => null),
    fs.readFile(join(styleDir, 'classes.txt'), 'utf-8').catch(() => null)
  ]);

  return { docs, classes: classesRaw?.split('\n').filter(Boolean) ?? [] };
};
