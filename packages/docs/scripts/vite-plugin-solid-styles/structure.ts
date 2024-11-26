import { basename, dirname, sep } from 'path';
import { globby } from 'globby';
import { parse } from 'comment-parser';
import { readFile } from 'fs/promises';
import type { Block, Spec } from 'comment-parser';
import type { Structure, Tag } from './types.js';

/**
 * Get the directory name of a given file path
 * @param {string} inputPath The path to the input file
 * @returns {string} The directory name
 */
const getDirName = (inputPath: string) => dirname(inputPath).split(sep).at(-1);

/**
 * Check if the result is valid
 * @param result The result to check for
 * @returns True if the result is valid, false otherwise
 */
const allowResult = (result: Partial<Block>) => {
  const { description, tags } = result;
  if (!description || !tags) {
    return false;
  }
  return tags;
};

/**
 * Get a representation of data from the tags
 * @param fileName The filename of the file
 * @param tag The tag to get data from
 * @returns Tag data
 */
const getDataFromTags = (fileName: string, tag: Spec): Tag => ({
  description: tag.description,
  fileName,
  name: tag.name,
  tag: tag.tag,
  type: tag.type
});

/**
 * Get the raw data from dist modules
 * @param {string} root The root directory to search for modules
 * @returns {Promise<object[]>} The raw data from the modules
 */
export const getStructure = async (root: string): Promise<Structure[]> => {
  // Get all files, excluding the generated index.css file
  const moduleFileNames = await globby([`${root}/**/*.css`, `!${root}/index.css`]);

  // The last part of the path to the root directory
  const rootDirBaseName = root.split(sep).at(-1);

  return Promise.all(
    moduleFileNames.map(async fileName => {
      const fileContent = await readFile(fileName, {
        encoding: 'utf-8'
      });

      const dirName = getDirName(fileName)!;

      // Finale name of the found module.
      // May be obtained from the filename or the directory name
      let module;

      // Determine the filename to use as the module name
      if (dirName === rootDirBaseName) {
        // 1. If the file is in the root directory, we use the filename
        module = basename(fileName).split('.').at(0)!;
      } else if (dirName !== rootDirBaseName) {
        // 2. If the file is in a subdirectory, we use the subdirectory name
        module = dirName;
      } else {
        // 3. This should probably never happen
        module = 'unknown';
      }

      // We are only interested in comments that have a description and tags set
      // Also, we strip out the source because we do not need it
      const comments = parse(fileContent)
        .filter(allowResult)
        .map(({ description, tags }) => ({
          description,
          tags: tags.map(tag => getDataFromTags(fileName, tag))
        }));

      return {
        comments,
        module
      };
    })
  );
};
