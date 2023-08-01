import { globbySync } from 'globby';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { removeViteLogging, vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';

const browsers = [playwrightLauncher({ product: 'chromium' }), playwrightLauncher({ product: 'webkit' })];

if (!process.env.CI) {
  browsers.push(playwrightLauncher({ product: 'firefox' }));
}

export default {
  rootDir: '.',
  files: 'src/components/**/*.test.ts', // "default" group
  concurrentBrowsers: 3,
  nodeResolve: true,
  testFramework: {
    config: {
      timeout: 3000,
      retries: 3
    }
  },
  plugins: [vitePlugin()],
  browsers,
  filterBrowserLogs: removeViteLogging,
  testRunnerHtml: testFramework => {
    // Complete tests always use the `umd` build as this is more consistent
    if (process.env.npm_command === 'test') {
      return `
  <html lang="en-US">
    <head></head>
    <body>
      <script type="module" src="dist/components/umd/solid-components.js"></script>
      <script type="module" src="${testFramework}"></script>
    </body>
  </html>
`;
    }
    return `
   <html lang="en-US">
     <head></head>
     <body>
       <script type="module" src="src/solid-components.ts"></script>
       <script type="module" src="${testFramework}"></script>
     </body>
   </html>
 `;
  },
  // Create a named group for every test file to enable running single tests. If a test file is `split-panel.test.ts`
  // then you can run `npm run test -- --group split-panel` to run only that component's tests.
  groups: globbySync('src/components/**/*.test.ts').map(path => {
    const groupName = path.match(/^.*\/(?<fileName>.*)\.test\.ts/).groups.fileName;
    return {
      name: groupName,
      files: path
    };
  })
};
