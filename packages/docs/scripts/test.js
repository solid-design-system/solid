import { execSync, spawnSync } from 'child_process';
import concurrently from 'concurrently';
import pc from 'picocolors';

const PORT = 6998;

const ci = process.env.CI;
const generateReport = process.argv.includes('--report');

const workers = ci ? '--maxWorkers=4' : '';
const testCommand = `test-storybook ${workers} --testTimeout=40000 --url http://127.0.0.1:${PORT}`;

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
  return execSync(testCommand, {
    stdio: 'inherit',
    env: { ...process.env, GENERATE_REPORT: generateReport ? 'true' : 'false' }
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
          command: `wait-on -v -t 10s tcp:127.0.0.1:${PORT} && GENERATE_REPORT=${generateReport ? 'true' : 'false'} ${testCommand}`,
          name: 'Testing',
          prefixColor: 'blue'
        }
      ],
      {
        killOthersOn: ['failure', 'success'],
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

function exit() {
  process.exit();
}

process.on('SIGINT', exit);
process.on('SIGTERM', exit);

const isPortBusy = checkPort(PORT);

if (isPortBusy) {
  console.log(pc.bold(pc.cyan(`Preview in ${PORT} is already running. Running tests only...`)));
  test();
} else {
  console.log(pc.bold(pc.cyan(`Port ${PORT} is available. Building Storybook, previewing and running tests...`)));
  build();
  await previewAndTest();
}
