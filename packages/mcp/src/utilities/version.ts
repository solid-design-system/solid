import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

type MinimalPackageJson = {
  author?: {
    name?: string;
    email?: string;
    url?: string;
  };
  repository?: {
    type: string;
    url: string;
  };
  homepage?: string;
  description: string;
  name: string;
  version: string;
  license?: string;
  [key: string]: unknown;
};

/**
 * Gets the current package.json information for the MCP server.
 * @returns The parsed package.json content
 */
export const getPackageInfo = () => {
  const filename = fileURLToPath(import.meta.url);
  const directoryName = dirname(filename);
  const packageJsonPath = join(directoryName, '..', '..', 'package.json');
  return JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as MinimalPackageJson;
};

/**
 * Gets the current version of the MCP server.
 * @returns The version string from package.json
 */
export const getVersion = () => {
  const packageJson = getPackageInfo();
  return packageJson.version;
};
