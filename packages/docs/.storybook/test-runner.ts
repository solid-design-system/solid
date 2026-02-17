import { getStoryContext, type TestRunnerConfig } from '@storybook/test-runner';
import { createHtmlReport } from 'axe-html-reporter';
import { injectAxe, getViolations, configureAxe } from 'axe-playwright';
import assert from 'assert';
import pc from 'picocolors';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Workaround for https://github.com/dequelabs/axe-core/issues/3426
    await new Promise(resolve => setTimeout(resolve, 200));

    const story = await getStoryContext(page, context);

    const ignoredRules =
      story.parameters?.a11y?.config?.rules
        ?.filter(rule => rule.enabled === false)
        ?.reduce((acc, rule) => {
          acc[rule.id] = { enabled: false };
          return acc;
        }, {}) || {};

    await configureAxe(page, {
      rules: [{ id: 'wcag22aa', enabled: true }]
    });

    const violations = await getViolations(page, '#storybook-root', {
      rules: ignoredRules
    });

    const message =
      violations.length === 0
        ? 'No accessibility violations detected!'
        : `Found ${violations.length} accessibility violations: \n`;

    const horizontalLine = pc.bold('-'.repeat(message.length));

    if (!violations.length) return;

    if (process.env.GENERATE_REPORT === 'true') {
      createHtmlReport({
        results: { violations },
        options: {
          outputDirPath: 'axe-reports',
          reportFileName: `${context.id}.html`
        }
      });
      console.log(pc.dim(`HTML report generated: axe-reports/${context.id}.html`));
    }

    const [folder, component, screenshot] = context.title.split('/').map(v => v.toLowerCase());
    const file = `${component.replaceAll(' ', '-').replace('sd-', '')}${screenshot ? '.test' : ''}.stories.ts`;
    const path = `./stories/${folder}/${file}`;
    const browser = `http://localhost:6999/?path=/story/${context.id}`;

    const report = violations
      .map(violation =>
        violation.nodes
          .map(
            node =>
              pc.bold(`Expected ${context.id} to have no violations:\n`) +
              `${pc.gray(node.html)}\n\n` +
              pc.red(`${violation.help} (${violation.id})\n\n`) +
              `Story: ${pc.blue(path)}\n\n` +
              `Browser: ${pc.blue(browser)}\n\n` +
              pc.bold(pc.yellow(node.failureSummary)) +
              '\n\n' +
              horizontalLine
          )
          .join('\n\n')
      )
      .join('\n\n');

    return assert.fail(`${context.id} ${message} ${horizontalLine}\n${report}`);
  }
};

export default config;
