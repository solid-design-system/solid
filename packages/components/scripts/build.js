import { deleteAsync } from 'del';
import { exec } from 'child_process';
import { globby } from 'globby';
import pc from 'picocolors';
import chokidar from 'chokidar';
import copy from 'recursive-copy';
import esbuild from 'esbuild';
import fs from 'fs/promises';
import ora from 'ora';
import util from 'util';
import { litTailwindAndMinifyPlugin } from './esbuild-plugin-lit-tailwind-and-minify.js';

const outdir = 'dist';
const cdndir = 'cdn';
const lite = process.argv.includes('--lite');
const watch = process.argv.includes('--watch');

const spinner = ora({ hideCursor: false }).start();
const execPromise = util.promisify(exec);
let childProcess;
let buildResults;

const bundleDirectories = lite ? [outdir] : [cdndir, `${outdir}-versioned`, `${cdndir}-versioned`, outdir];

//
// Builds the source with esbuild.
//
async function buildTheSource() {
  const alwaysExternal = ['@lit/react', 'react'];

  const cdnConfig = {
    format: 'esm',
    target: 'es2017',
    entryPoints: [
      // The whole shebang
      './src/solid-components.ts',
      // Components
      ...(await globby('./src/components/**/!(*.(stories|test)).ts')),
      // Translations
      ...(await globby('./src/translations/**/*.ts')),
      // Public utilities
      ...(await globby('./src/utilities/**/!(*.(style|test)).ts'))
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
    plugins: [litTailwindAndMinifyPlugin()]
  };

  const npmConfig = {
    ...cdnConfig,
    external: undefined,
    minify: false,
    packages: 'external',
    outdir
  };

  const bundleConfig = {
    ...cdnConfig,
    bundle: true,
    splitting: false,
    entryPoints: ['./src/solid-components.ts'],
    globalName: 'SolidComponents',
    entryNames: '[dir]/[name].bundle'
  };

  const iifeConfig = {
    ...cdnConfig,
    format: 'iife',
    bundle: true,
    splitting: false,
    entryPoints: ['./src/solid-components.ts'],
    globalName: 'SolidComponents',
    entryNames: '[dir]/[name].iife'
  };

  return await Promise.all(
    lite
      ? [esbuild.build(npmConfig)]
      : [esbuild.build(cdnConfig), esbuild.build(npmConfig), esbuild.build(bundleConfig), esbuild.build(iifeConfig)]
  );
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
    console.log(`${pc.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${pc.red('✘')} ${err}`);
    if (err.stdout) console.error(pc.red(err.stdout));
    if (err.stderr) console.error(pc.red(err.stderr));
    process.exit(1);
  }
}

async function runBuild() {
  if (!watch) {
    await nextTask('Cleaning up the previous build', async () => {
      await Promise.all([...bundleDirectories.map(dir => deleteAsync(dir))]);
      await Promise.all([...bundleDirectories.map(dir => fs.mkdir(dir, { recursive: true }))]);
    });
  }

  if (!lite) {
    await nextTask('Generating component metadata', async () => {
      for (const dir of bundleDirectories) {
        await execPromise(`node scripts/make-metadata.js --outdir "${dir}"`, { stdio: 'inherit' });
      }
    });
  }

  await nextTask('Generating Utility CSS', () => {
    const args = lite ? '--lite' : '';
    return execPromise(`node scripts/make-css.js ${args}`, { stdio: 'inherit' });
  });

  if (!lite) {
    await nextTask('Running the TypeScript compiler', () => {
      return execPromise(`tsc --project ./tsconfig.prod.json --outdir "${outdir}"`, { stdio: 'inherit' });
    });

    // Copy the above steps to the CDN directory directly so we don't need to twice the work for nothing.
    await nextTask(`Themes, Icons, and TS Types to "${cdndir}"`, async () => {
      await deleteAsync(cdndir);
      await copy(outdir, cdndir);
    });
  }

  await nextTask('Building source files', async () => {
    buildResults = await buildTheSource();
  });

  await nextTask('Fix broken imports', async () => {
    const distFiles = await globby([`${outdir}/chunks/chunk.*.js`, `${cdndir}/chunks/chunk.*.js`]);
    await Promise.all(
      distFiles.map(async file => {
        const content = await fs.readFile(file, 'utf-8');
        if (content.trim().length === 0) {
          await fs.writeFile(file, '//');
        }
      })
    );
  });

  if (!lite) {
    await nextTask('Versioning components and meta data', async () => {
      await execPromise('node scripts/make-versioning.js', { stdio: 'inherit' });
    });
  }
}

runBuild();

if (watch) {
  const watcher = chokidar.watch('src', {
    persistent: true,
    ignored: path => path.includes('.test.ts')
  });

  watcher.on('change', runBuild);
}

// Cleanup on exit
process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);
