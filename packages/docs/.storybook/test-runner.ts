import { getStoryContext, type TestRunnerConfig } from '@storybook/test-runner';
import { AxeBuilder } from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
import assert from 'assert';
import pc from 'picocolors';

const SKIP_TESTS = 'skip-a11y';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  tags: {
    exclude: [SKIP_TESTS]
  },
  async postVisit(page, context) {
    const story = await getStoryContext(page, context);

    const ignoredRules = story.tags
      .filter(tag => tag.startsWith(`${SKIP_TESTS}-`))
      .flatMap(tag =>
        tag
          .match(/\[([^\]]+)\]/)?.[1]
          ?.split(',')
          .map(rule => rule.trim())
      )
      .filter(Boolean) as string[];

    const { violations } = await new AxeBuilder({ page })
      .setLegacyMode(true)
      .include('#storybook-root')
      .disableRules(ignoredRules)
      .analyze();

    const message =
      violations.length === 0
        ? 'No accessibility violations detected!'
        : `Found ${violations.length} accessibility violations: \n`;

    const horizontalLine = pc.bold('-'.repeat(message.length));

    if (!violations.length) return;

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
};

export default config;
