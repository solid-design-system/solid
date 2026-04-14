import ora from 'ora';
import { buildComponents } from './components.js';
import { buildIcons } from './icons.js';
import { buildStaticFiles } from './static.js';
import { buildTemplates } from './templates.js';
import { buildTokens } from './tokens.js';
import { buildStyles } from './styles.js';

const spinner = ora({
  prefixText: 'MCP:',
  text: 'Generating static metadata...'
});

const build = async () => {
  spinner.start();
  // components must run before templates (templates writes into component dirs)
  await buildComponents();
  await buildStyles();
  await buildTemplates();
  await buildTokens();
  await buildIcons();

  // Should be run last as we will copy files where we see fit and paths must exist
  await buildStaticFiles();
};

build()
  .then(() => {
    spinner.succeed('Static metadata generated successfully.');
    process.exit(0);
  })
  .catch(error => {
    spinner.fail(`Failed to generate static metadata. Error: ${error}`);
    process.exit(1);
  })
  .finally(() => {
    spinner.stop();
  });
