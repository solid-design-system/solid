import chalk from 'chalk';
import { execSync } from 'child_process';
import commandLineArgs from 'command-line-args';
// import { deleteSync } from 'del';
// import fs from 'fs';
import chokidar from 'chokidar';

const { dev } = commandLineArgs([
  { name: 'dev', type: Boolean }
]);

const outdir = 'dist';

// deleteSync(outdir);
// fs.mkdirSync(outdir, { recursive: true });

(async () => {
  try {
    execSync(`node scripts/make-metadata.js --outdir "${outdir}"`, { stdio: 'inherit' });
    execSync(`node scripts/make-web-types.js --outdir "${outdir}"`, { stdio: 'inherit' });
    execSync(`node scripts/make-themes.js --outdir "${outdir}"`, { stdio: 'inherit' });
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  }


  if (dev) {
    // Rebuild and reload when source files change
    chokidar.watch(['src/**/!(*.test|*.stories).*']).on('change', async filename => {
      console.log(`Source file changed - ${filename}`);
      // Rebuild stylesheets when a theme file changes
      if (/^src\/themes/.test(filename)) {
        execSync(`node scripts/make-themes.js --outdir "${outdir}"`, { stdio: 'inherit' });
      }
      // Skip metadata when styles are changed
      if (/(\.css|\.styles\.ts)$/.test(filename)) {
        return;
      }
      execSync(`node scripts/make-metadata.js --outdir "${outdir}"`, { stdio: 'inherit' });
    });
  }
})();
