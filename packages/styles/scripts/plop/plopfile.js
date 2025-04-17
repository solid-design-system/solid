export default function (plop) {
  plop.setHelper('tagWithoutPrefix', tag => tag.replace(/^sd-/, ''));

  plop.setHelper('tagToTitle', tag => {
    const withoutPrefix = plop.getHelper('tagWithoutPrefix');
    const titleCase = plop.getHelper('titleCase');
    return titleCase(withoutPrefix(tag).replace(/-/g, ' '));
  });

  plop.setGenerator('style', {
    description: 'Generate a new style',
    prompts: [
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name? (e.g. sd-mark)',
        validate: value => {
          // Start with sd- and include only a-z + dashes
          if (!/^sd-[a-z-+]+/.test(value)) {
            return false;
          }

          // No double dashes or ending dash
          if (value.includes('--') || value.endsWith('-')) {
            return false;
          }

          return true;
        }
      },
      // ask if it does belong to prose or not, give both options, following "inquirer" docs
      {
        type: 'confirm',
        name: 'isProse',
        message: 'Does this style belong to sd-prose?',
        default: false
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/modules/{{ tagWithoutPrefix tag }}.css',
        templateFile: 'templates/component/style.hbs'
      },
      {
        type: 'add',
        path: '../../../docs/src/stories/styles/{{ tagWithoutPrefix tag }}.stories.ts',
        templateFile: 'templates/component/stories.hbs'
      },
      {
        type: 'add',
        path: '../../../docs/src/stories/styles/{{ tagWithoutPrefix tag }}.test.stories.ts',
        templateFile: 'templates/component/test.stories.hbs'
      },
      {
        type: 'add',
        path: '../../../docs/src/stories/styles/{{ tagWithoutPrefix tag }}.mdx',
        templateFile: 'templates/component/overview.hbs'
      },
      {
        type: 'modify',
        path: '../../src/solid-styles.css',
        pattern: /\/\* plop:style \*\//,
        template: `{{#if isProse}}/* plop:style */{{ else }}@import url('./modules/{{ tagWithoutPrefix tag }}.css');\n/* plop:style */{{/if}}`
      },
      {
        type: 'modify',
        path: '../../src/modules/prose.css',
        pattern: /\/\* plop:style \*\//,
        // check if isProse or not
        template: `{{#if isProse}}@import url('./{{ tagWithoutPrefix tag }}.css');\n/* plop:style */{{ else }}/* plop:style */{{/if}}`
      }
    ]
  });
}
