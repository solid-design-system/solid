import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Creates HTML (but removes report from console)
    await checkA11y(
      page,
      '#storybook-root',
      {
        detailedReport: true,
        detailedReportOptions: {
          html: true
        }
      },
      false,
      'html',
      {
        outputDirPath: 'axe-reports',
        reportFileName: `${context.id}.html` // .htm instead of .html because of https://github.com/storybookjs/storybook/issues/26767#issuecomment-2514693795
      }
    );
    // Creates report for console
    await checkA11y(page, '#storybook-root');
  }
};

export default config;
