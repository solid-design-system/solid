import ora from 'ora';
import pc from 'picocolors';
import { execSync } from 'child_process';
import { cp } from 'fs/promises';

const DEFAULT_THEME = 'light';

const spinner = ora({ hideCursor: false }).start();
const args = process.argv.slice(2);
const theme = args.find(arg => arg.startsWith('--theme'))?.split('=')[1];

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

async function generateTheme() {
  await nextTask('Building tailwind config', () => {
    runTailwindVariablesBuild();
  });

  await nextTask('Copying tailwind config', async () => {
    if (!theme) {
      console.warn(`\nTheme not provided. Using default theme: "${DEFAULT_THEME}"`);
    }

    await cp(`../tokens/dist/themes/${theme || DEFAULT_THEME}.css`, 'tailwind.css');
  });
}

generateTheme();
