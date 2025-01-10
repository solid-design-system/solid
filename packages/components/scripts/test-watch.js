import chokidar from 'chokidar';
import { execSync, spawn } from 'child_process';

let testsProcess = null;

const runBuild = () => {
  console.log('Starting build...');

  try {
    execSync('node scripts/build.js --lite');
  } catch {}

  console.log('Build completed!');
};

const runTests = () => {
  testsProcess = spawn('web-test-runner', ['--group', 'default'], {
    stdio: 'inherit',
    shell: true
  });
};

const watcher = chokidar.watch('src', {
  persistent: true
});

runBuild();
runTests();

watcher.on('change', async path => {
  console.log('File changes detected!');

  if (!path.endsWith('.test.ts')) {
    runBuild();
  }

  if (testsProcess && !testsProcess.killed) {
    testsProcess.kill();
  }

  runTests();
});

console.log('Watching for changes...');
