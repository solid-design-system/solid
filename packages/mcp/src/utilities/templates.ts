import fs from 'node:fs/promises';
import { templatesPackagePath } from './config.js';

/**
 * Get a list of all available templates in the Solid Design System.
 * @returns Sorted list of template names (e.g. ["button", "forms"]).
 */
export const getAvailableTemplates = async () => {
  try {
    const entries = await fs.readdir(templatesPackagePath, { withFileTypes: true });
    return entries
      .filter(d => d.isDirectory())
      .map(d => d.name)
      .sort();
  } catch {
    return [];
  }
};
