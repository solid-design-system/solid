import { execSync, spawnSync } from 'child_process';
import concurrently from 'concurrently';

const PORT = 6999;

function checkPort(port) {
  const output = spawnSync(`lsof -i tcp:${port} | awk '{print $2}' |grep --invert PID`, { shell: true });
  if (output.error) {
    console.error(output.error);
    return;
  }

  return Buffer.from(output.stdout.buffer).toString().split('\n')[0];
}

function build() {
  return execSync('pnpm build', { stdio: 'inherit' });
}

function test() {
  return execSync(`test-storybook --maxWorkers=1 --testTimeout=40000 --url http://127.0.0.1:${PORT}`, {
    stdio: 'inherit'
  });
}

async function previewAndTest() {
  return new Promise((resolve, reject) =>
    concurrently(
      [
        {
          command: 'pnpm preview --silent',
          name: 'Storybook',
          prefixColor: 'magenta'
        },
        {
          command: `wait-on -v -t 5s tcp:127.0.0.1:${PORT} && pnpm test.only`,
          name: 'Testing',
          prefixColor: 'blue'
        }
      ],
      {
        killOthers: ['failure', 'success'],
        successCondition: 'first',
        raw: true
      }
    )
      .result.then(() => {
        resolve(true);
      })
      .catch(error => {
        reject(error.message);
      })
  );
}

const isPortBusy = checkPort(PORT);
if (isPortBusy) {
  console.log(`Preview in ${PORT} is already running. Running tests only...`);
  test();
} else {
  console.log(`Port ${PORT} is available. Building Storybook, previewing and running tests...`);
  build();
  await previewAndTest();
}

// Handle exit signals
function handleCleanup() {
  process.exit();
}

process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);
