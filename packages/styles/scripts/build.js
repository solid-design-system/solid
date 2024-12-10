import { deleteAsync } from 'del';
import { execSync } from 'child_process';
import chalk from 'chalk';
import fs from 'fs/promises';
import ora from 'ora';

const spinner = ora({ hideCursor: false }).start();

const outdir = 'dist';
const cdndir = 'cdn';

const bundleDirectories = [cdndir, outdir, `${outdir}-versioned`, `${cdndir}-versioned`];

function handleCleanup() {
  if (spinner.isSpinning) spinner.stop();
  process.exit();
}

async function nextTask(label, action) {
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    console.log(`${chalk.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${chalk.red('✘')} ${label}`);
    console.error(chalk.red(err.message || err));
    process.exit(1);
  }
}

process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);

// Cleanup task
await nextTask('Cleaning up the previous build', async () => {
  await Promise.all([...bundleDirectories.map(dir => deleteAsync(dir))]);
  await fs.mkdir(outdir, { recursive: true });
});

// PostCSS task
await nextTask('Running PostCSS...', () => {
  bundleDirectories
    .filter(dir => !dir.includes('versioned'))
    .map(dir => execSync(`node scripts/make-styles.js --outdir ${dir}`, { stdio: 'inherit' }));
});

// Version all styles task
await nextTask('Versioning styles', () => {
  execSync('node scripts/make-versioning.js', { stdio: 'inherit' });
});
