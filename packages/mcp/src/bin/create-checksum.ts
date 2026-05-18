#!/usr/bin/env node

import ora from 'ora';
import { createFolderChecksum, metaDataPath } from '../utilities/index.js';

async function run() {
  const spinner = ora('Generating checksum for metadata folder...').start();

  try {
    spinner.text = 'Cleaning up old checksum...';

    const checksum = await createFolderChecksum(metaDataPath, {
      algorithm: 'md5',
      excludePatterns: ['.*', 'checksum.txt'],
      outputFile: 'checksum.txt'
    });

    spinner.info(`Checksum generated: ${checksum}`);
    spinner.succeed(`Written to: ${metaDataPath}/checksum.txt`);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    spinner.fail(`Failed to generate checksum: ${error}`);
    process.exit(1);
  }
}

run();
