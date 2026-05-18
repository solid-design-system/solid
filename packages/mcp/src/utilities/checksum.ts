import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { globby } from 'globby';

/**
 * Options for creating a checksum from folder contents
 */
export interface ChecksumOptions {
  /** Array of patterns to exclude (e.g., ['.*', 'checksum.txt']) */
  excludePatterns?: string[];
  /** Output file path for the checksum (relative to the folder) */
  outputFile?: string;
  /** Hash algorithm to use */
  algorithm?: 'md5' | 'sha1' | 'sha256';
}

/**
 * Creates a checksum from folder contents, replicating the behavior of:
 * find ./folder ! -name '.*' ! -name 'checksum.txt' -type f -print0 | sort -z | xargs -0 cat | md5
 *
 * @param folderPath - Path to the folder to process
 * @param options - Configuration options
 * @returns Promise<string> - The generated checksum
 */
export async function createFolderChecksum(folderPath: string, options: ChecksumOptions = {}): Promise<string> {
  const { excludePatterns = ['.*', 'checksum.txt'], algorithm = 'md5' } = options;

  // Use default 'checksum.txt' if outputFile is not specified, but respect explicit undefined
  const outputFile = 'outputFile' in options ? options.outputFile : 'checksum.txt';

  try {
    // Build glob patterns to exclude specified patterns
    const includePattern = join(folderPath, '**', '*');
    const excludeGlobs = excludePatterns.map(pattern => join(folderPath, '**', pattern));

    // Find all files, excluding specified patterns
    const files = await globby([includePattern], {
      absolute: true,
      ignore: excludeGlobs,
      onlyFiles: true
    });

    // Sort files by their relative paths (to match shell script behavior)
    const sortedFiles = files.sort((a, b) => {
      const relativeA = relative(folderPath, a);
      const relativeB = relative(folderPath, b);
      return relativeA.localeCompare(relativeB);
    });

    // Create hash instance
    const hash = createHash(algorithm);

    // Read and concatenate all file contents (equivalent to xargs -0 cat)
    // Note: Sequential reading to maintain order consistency with shell script
    for (const filePath of sortedFiles) {
      const content = await readFile(filePath);
      hash.update(content);
    }

    // Generate the final checksum
    const checksum = hash.digest('hex');

    // Write checksum to output file if specified
    if (outputFile) {
      const outputPath = join(folderPath, outputFile);
      await writeFile(outputPath, `${checksum}\n`, 'utf8');
    }

    return checksum;
  } catch (error) {
    throw new Error(`Failed to create folder checksum: ${error instanceof Error ? error.message : String(error)}`, {
      cause: error
    });
  }
}

/**
 * Verifies if the current folder contents match the stored checksum
 *
 * @param folderPath - Path to the folder to verify
 * @param options - Configuration options
 * @returns Promise<boolean> - True if checksum matches, false otherwise
 */
export async function verifyFolderChecksum(folderPath: string, options: ChecksumOptions = {}): Promise<boolean> {
  const { outputFile = 'checksum.txt' } = options;

  try {
    // Read stored checksum
    const checksumPath = join(folderPath, outputFile);
    const storedChecksum = (await readFile(checksumPath, 'utf8')).trim();

    // Calculate current checksum (without writing to file)
    const currentChecksum = await createFolderChecksum(folderPath, {
      ...options,
      outputFile: undefined // Don't write to file during verification
    });

    return storedChecksum === currentChecksum;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // If we can't read the checksum file, consider it invalid
    return false;
  }
}

/**
 * Get the current checksum without writing it to a file
 *
 * @param folderPath - Path to the folder to process
 * @param options - Configuration options (outputFile will be ignored)
 * @returns Promise<string> - The generated checksum
 */
export async function getFolderChecksum(
  folderPath: string,
  options: Omit<ChecksumOptions, 'outputFile'> = {}
): Promise<string> {
  return createFolderChecksum(folderPath, {
    ...options,
    outputFile: undefined
  });
}
