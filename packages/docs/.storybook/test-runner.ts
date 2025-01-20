import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, getViolations } from 'axe-playwright';
import { createHtmlReport } from 'axe-html-reporter';
import assert from 'assert';
import pc from 'picocolors';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  tags: {
    exclude: ['skip-a11y-test']
  },
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const violations = await getViolations(page, '#storybook-root');

    const message =
      violations.length === 0
        ? 'No accessibility violations detected!'
        : `Found ${violations.length} accessibility violations: \n`;

    const horizontalLine = pc.bold('-'.repeat(message.length));

    if (violations.length) {
      createHtmlReport({
        results: { violations },
        options: {
          outputDirPath: 'axe-reports',
          reportFileName: `${context.id}.html`
        }
      });

      const [folder, component, screenshot] = context.title.split('/').map(v => v.toLowerCase());
      const file = `${component.replaceAll(' ', '-').replace('sd-', '')}${screenshot ? '.test' : ''}.stories.ts`;
      const path = `./stories/${folder}/${file}`;

      const report = violations
        .map(violation =>
          violation.nodes
            .map(
              node =>
                pc.bold(`Expected ${context.id} to have no violations:\n`) +
                `${pc.gray(node.html)}\n\n` +
                pc.red(`${violation.help} (${violation.id})\n\n`) +
                `Story: ${pc.blue(path)}\n\n` +
                pc.bold(pc.yellow(node.failureSummary)) +
                '\n\n' +
                horizontalLine
            )
            .join('\n\n')
        )
        .join('\n\n');

      return assert.fail(message + horizontalLine + '\n' + report);
    }
  }
};

export default config;
