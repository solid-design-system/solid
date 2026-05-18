import fs from 'node:fs/promises';
import { componentPath } from './config.js';

/**
 * Get a list of all available components in the Solid Design System.
 * @returns A list of all sd-* tag names with built metadata.
 */
export const getAvailableComponents = async () => {
  const entries = await fs.readdir(componentPath, { withFileTypes: true });
  return entries
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();
};
