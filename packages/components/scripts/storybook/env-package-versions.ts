/* eslint-disable no-param-reassign */
import { readFileSync } from 'fs';
import { join } from 'path';
import type { StorybookConfig } from '@storybook/web-components-vite';

interface PackageVersionsPluginOptions {
  packagePaths: string[];
}

function storybookEnvPackageVersions(options: PackageVersionsPluginOptions): StorybookConfig['env'] {
  return config => {
    const root = process.cwd();
    const versions = options.packagePaths.reduce(
      (acc, packagePath) => {
        try {
          const packageJson = JSON.parse(readFileSync(join(root, packagePath, 'package.json'), 'utf-8')) as {
            name: string;
            version: string;
          };
          acc[packageJson.name] = packageJson.version;
        } catch (error) {
          console.error(`Failed to read package.json from ${packagePath}:`, error);
        }
        return acc;
      },
      {} as Record<string, string>
    );
    return {
      ...config,
      STORYBOOK_PACKAGE_VERSIONS: JSON.stringify(versions)
    };
  };
}

export default storybookEnvPackageVersions;
