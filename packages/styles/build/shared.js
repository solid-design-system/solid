/* eslint-disable no-console */
import path from 'path';
import url from 'url';
import ora from 'ora';

const spinner = ora({ hideCursor: false });

/**
 * Get the absolute path of one to many path parts,
 * relative to the `components/scripts` directory
 *
 * @param {String} wantedPath
 * @returns {String} The absolute path to the components/scripts directory
 */
export const getPath = wantedPath =>
  path.join(path.dirname(path.join(url.fileURLToPath(import.meta.url), '..')), wantedPath);

/**
 * Get the directory name of a given file path
 * @param {string} inputPath The path to the input file
 * @returns {string} The directory name
 */
export const getDirName = inputPath => path.dirname(inputPath).split(path.sep).at(-1);

/**
 * Create a job that when run executes the given actions
 * @param {String} label The label to show
 * @param {Function} action The action to run
 * @returns {Function} A function with bound arguments useable in the build pipeline
 */
export const job =
  (label, action) =>
  async (...args) => {
    spinner.text = label;
    spinner.start();

    try {
      await action(...args);
      spinner.succeed();
    } catch (err) {
      spinner.fail(`${label}: ${err.toString()}`);
      process.exit(1);
    }
  };
