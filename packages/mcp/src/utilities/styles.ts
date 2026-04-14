import fs from 'node:fs/promises';
import { join } from 'node:path';
import { stylesPath } from './config.js';

/**
 * Get a list of all available style utilities in the Solid Design System.
 * @returns Sorted list of style names (with sd- prefix, e.g. ["sd-chip", "sd-headline"]).
 */
export const getAvailableStyles = async () => {
  try {
    const entries = await fs.readdir(stylesPath, { withFileTypes: true });
    return entries
      .filter(d => d.isDirectory() && d.name.startsWith('sd-'))
      .map(d => d.name)
      .sort();
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
