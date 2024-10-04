import { deleteAsync } from 'del';
import { exec, spawn } from 'child_process';
import { globby } from 'globby';
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import copy from 'recursive-copy';
import esbuild from 'esbuild';
import fs from 'fs/promises';
import ora from 'ora';
import util from 'util';
import * as path from 'path';
import { readFileSync } from 'fs';
import { replace } from 'esbuild-plugin-replace';
import { litTailwindPlugin } from './esbuild-plugin-lit-tailwind.js';

const { serve } = commandLineArgs([{ name: 'serve', type: Boolean }]);
const outdir = 'dist';
const cdndir = 'cdn';
const sitedir = '_site';
const spinner = ora({ hideCursor: false }).start();
const execPromise = util.promisify(exec);
let childProcess;
let buildResults;

const bundleDirectories = [cdndir, outdir];
let packageData = JSON.parse(readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'));
const shoelaceVersion = JSON.stringify(packageData.version.toString());

//
// Builds the source with esbuild.
//
async function buildTheSource() {
  const alwaysExternal = ['@lit/react', 'react'];

  const cdnConfig = {
    format: 'esm',
    target: 'es2017',
    entryPoints: [
      //
      // NOTE: Entry points must be mapped in package.json > exports, otherwise users won't be able to import them!
      //
      // The whole shebang
      './src/solid-components.ts',
      // TODO The auto-loader
      // './src/shoelace-autoloader.ts',
      // Components
      ...(await globby('./src/components/**/!(*.(stories|test)).ts')),
      // Translations
      ...(await globby('./src/translations/**/*.ts')),
      // Public utilities
      ...(await globby('./src/utilities/**/!(*.(style|test)).ts'))
      // TODO React wrappers
      // ...(await globby('./src/react/**/*.ts'))
    ],
    minify: true,
    outdir: cdndir,
    chunkNames: 'chunks/[name].[hash]',
    define: {
      // Floating UI requires this to be set
      'process.env.NODE_ENV': '"production"'
    },
    bundle: true,
    //
    // We don't bundle certain dependencies in the unbundled build. This ensures we ship bare module specifiers,
    // allowing end users to better optimize when using a bundler. (Only packages that ship ESM can be external.)
    //
    // We never bundle React or @lit/react though!
    //
    external: alwaysExternal,
    splitting: true,
    plugins: [
      litTailwindPlugin(),
      replace({
        __SHOELACE_VERSION__: shoelaceVersion
      })
    ]
  };

  const npmConfig = {
    ...cdnConfig,
    external: undefined,
    minify: false,
    packages: 'external',
    outdir
  };

  const iiefConfig = {
    ...cdnConfig,
    bundle: true,
    format: 'iife',
    splitting: false,
    globalName: 'SolidComponents',
    plugins: [...cdnConfig.plugins]
  };

  return await Promise.all([esbuild.build(cdnConfig), esbuild.build(npmConfig), esbuild.build(iiefConfig)]);
}

//
// Called on SIGINT or SIGTERM to cleanup the build and child processes.
//
function handleCleanup() {
  buildResults.forEach(result => result.dispose());

  if (childProcess) {
    childProcess.kill('SIGINT');
  }

  process.exit();
}

//
// Helper function to draw a spinner while tasks run.
//
async function nextTask(label, action) {
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    console.log(`${chalk.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${chalk.red('✘')} ${err}`);
    if (err.stdout) console.error(chalk.red(err.stdout));
    if (err.stderr) console.error(chalk.red(err.stderr));
    process.exit(1);
  }
}

await nextTask('Cleaning up the previous build', async () => {
  await Promise.all([deleteAsync(sitedir), ...bundleDirectories.map(dir => deleteAsync(dir))]);
  await fs.mkdir(outdir, { recursive: true });
});

await nextTask('Generating component metadata', () => {
  return Promise.all(
    bundleDirectories.map(dir => {
      return execPromise(`node scripts/make-metadata.js --outdir "${dir}"`, { stdio: 'inherit' });
    })
  );
});

// await nextTask('Wrapping components for React', () => {
//   return execPromise(`node scripts/make-react.js --outdir "${outdir}"`, { stdio: 'inherit' });
// });

// await nextTask('Generating themes', () => {
//   return execPromise(`node scripts/make-themes.js --outdir "${outdir}"`, { stdio: 'inherit' });
// });

// await nextTask('Packaging up icons', () => {
//   return execPromise(`node scripts/make-icons.js --outdir "${outdir}"`, { stdio: 'inherit' });
// });

// await nextTask('Running the TypeScript compiler', () => {
//   return execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, { stdio: 'inherit' });
// });

// Copy the above steps to the CDN directory directly so we don't need to twice the work for nothing.
await nextTask(`Themes, Icons, and TS Types to "${cdndir}"`, async () => {
  await deleteAsync(cdndir);
  await copy(outdir, cdndir);
});

await nextTask('Building source files', async () => {
  buildResults = await buildTheSource();
});

// Copy the CDN build to the docs (prod only; we use a virtual directory in dev)
if (!serve) {
  await nextTask(`Copying the build to "${sitedir}"`, async () => {
    await deleteAsync(sitedir);

    // We copy the CDN build because that has everything bundled. Yes this looks weird.
    // But if we do "/cdn" it requires changes all the docs to do /cdn instead of /dist.
    await copy(cdndir, path.join(sitedir, 'dist'));
  });
}

let result;

// Log deferred output
if (result.output.length > 0) {
  console.log('\n' + result.output.join('\n'));
}

// Cleanup on exit
process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);
