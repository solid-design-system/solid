import ora from 'ora';
import pc from 'picocolors';
import { execSync } from 'child_process';
import { cp } from 'fs/promises';

const spinner = ora({ hideCursor: false }).start();

/**
 * Helper function to draw a spinner while tasks run.
 */
async function nextTask(label, action) {
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    console.log(`${pc.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${pc.red('✘')} ${err}`);
    if (err.stdout) console.error(pc.red(err.stdout));
    if (err.stderr) console.error(pc.red(err.stderr));
    process.exit(1);
  }
}

const runTailwindVariablesBuild = () => execSync('pnpm --filter=@solid-design-system/tokens run build');

async function buildTailwindConfiguration() {
  await nextTask('Building tailwind config', () => {
    runTailwindVariablesBuild();
  });
}

buildTailwindConfiguration();
