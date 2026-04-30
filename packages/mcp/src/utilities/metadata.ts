import fs from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import { componentPath } from './config.js';
import { getAbsolutePath } from './file.js';

/**
 * Filter function type for filtering metadata files.
 */
export type Filter = (fileName: string) => boolean;

/**
 * MetadataFile type representing a structured metadata file.
 */
export interface MetadataFile {
  content: string;
  filename: string;
}

const defaultFilter: Filter = () => true;

/**
 * Get structured metadata for a specific metadata folder.
 * Will NOT crawl recursively, but will return all files in the metadata directory.
 * @param folder - The name of the folder to get metadata for.
 * @param filter - Optional filter function to apply to the filenames.
 *                 If provided, only files that pass the filter will be included in the result.
 */
export const getStructuredMetaData = async (folder: string, filter: Filter = defaultFilter) => {
  const absolutePath = getAbsolutePath(folder);

  // If the directory does not exist, return an empty array
  if (!existsSync(absolutePath)) {
    return [];
  }

  const files = await fs.readdir(absolutePath);
  const metadata = await Promise.all(
    files
      .filter(file => {
        // We only allow entries that are
        // 1. are files
        // 2. pass the filter function
        const stats = statSync(join(absolutePath, file));
        return stats.isFile() && filter(file);
      })
      .map(async file => {
        const filename = basename(file);
        const exists = await fs.stat(`${absolutePath}/${file}`);
        if (!exists.isFile()) {
          return null;
        }

        const content = await fs.readFile(`${absolutePath}/${file}`, 'utf-8');
        return {
          content,
          filename
        };
      })
      // Makes sure we only return valid metadata files
      .filter(Boolean)
  );

  return metadata;
};

/**
 * Get structured metadata for a specific component.
 * Will NOT crawl recursively, but will return all files in the component's metadata directory.
 * @param componentName - The name of the component to get metadata for.
 * @param filter - Optional filter function to apply to the filenames.
 *                 If provided, only files that pass the filter will be included in the result.
 */
export const getStructuredMetaDataForComponent = (componentName: string, filter: Filter = defaultFilter) => {
  const absolutePath = getAbsolutePath(`${componentPath}/${componentName}`);
  return getStructuredMetaData(absolutePath, filter);
};
