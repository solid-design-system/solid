//
// This script runs the Custom Elements Manifest analyzer to generate custom-elements.json
//
import { execSync } from 'child_process';
import commandLineArgs from 'command-line-args';
import fs from 'fs';
import path from 'path';


const { outdir } = commandLineArgs({ name: 'outdir', type: String });

// Run the analyzer
console.log('Generating component metadata');
execSync(`cem analyze --litelement --outdir "${outdir}/temp"`, { stdio: 'inherit' });

// Compare files in temp folder with those in outdir folder
// We need this, because the analyzer generates a new custom-elements.json file every time
// even if the contents are the same. This leads to redundant reloads in Storybook.
fs.readdirSync(`${outdir}/temp`).forEach((filename) => {
  const srcPath = path.join(`${outdir}/temp`, filename);
  const destPath = path.join(outdir, filename);

  const copyFile = () => {
    fs.copyFileSync(srcPath, destPath);
    console.log(`🔄 Updated ${destPath.split('/').pop()}`);
  }

  // Only copy file if it's different from the destination file
  const srcStats = fs.statSync(srcPath);
  const destStats = fs.existsSync(destPath) ? fs.statSync(destPath) : null;

  // If the file sizes are different, copy the file
  if (destStats && srcStats.size !== destStats.size) {
    copyFile();
    return;
  }

  // Here we sort the files before comparing them. This is because the analyzer generates the JSONs in a different order every time.
  // For the resulting JSONs I tried deep comparisons, sorting and lots of other stuff (jsonabc, deep-equal, lodash.isEqual, etc.) but sorting the lines alphabetically was the only thing that worked.
  const sortedSrc = execSync(`sort ${srcPath}`, { maxBuffer: 1024 * 1024 * 10 }).toString();
  const sortedDest = execSync(`sort ${destPath}`, { maxBuffer: 1024 * 1024 * 10 }).toString();
  if (sortedSrc === sortedDest) {
    return;
  }

  copyFile();

});

// Remove temp folder
fs.rmSync(`${outdir}/temp`, { recursive: true, force: true });
