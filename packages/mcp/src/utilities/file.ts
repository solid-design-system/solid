import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

/**
 * Get the absolute path to the wanted file or directory, relative from the current one.
 * @param path - The relative path to the file or directory.
 * @returns The absolute path to the file or directory.
 */
export const getAbsolutePath = (fileName: string = '') => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  return path.isAbsolute(fileName) ? fileName : path.resolve(dirname, fileName);
};

/**
 * Create a new directory.
 * @param dirName - The name of the directory to create, relative to the current file.
 * @returns The absolute path to the created directory.
 */
export const createPath = async (dirName: string) => {
  const absolutePath = getAbsolutePath(dirName);
  try {
    await fs.mkdir(absolutePath, { recursive: true });
  } catch (error) {
    console.error(`Failed to create directory at ${absolutePath}:`, error);
  }
  return absolutePath;
};
