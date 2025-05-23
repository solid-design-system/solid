export default function (plop) {
  plop.setHelper('tagWithoutPrefix', tag => tag.replace(/^sd-/, ''));

  plop.setHelper('tagToTitle', tag => {
    const withoutPrefix = plop.getHelper('tagWithoutPrefix');
    const titleCase = plop.getHelper('titleCase');
    return titleCase(withoutPrefix(tag).replace(/-/g, ' '));
  });

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name? (e.g. sd-button)',
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
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.ts',
        templateFile: 'templates/component/component.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.test.ts',
        templateFile: 'templates/component/tests.hbs'
      },
      {
        type: 'add',
        path: '../../../docs/src/stories/components/{{ tagWithoutPrefix tag }}.stories.ts',
        templateFile: 'templates/component/stories.hbs'
      },
      {
        type: 'add',
        path: '../../../docs/src/stories/components/{{ tagWithoutPrefix tag }}.test.stories.ts',
        templateFile: 'templates/component/test.stories.hbs'
      },
      {
        type: 'add',
        path: '../../../docs/src/stories/components/{{ tagWithoutPrefix tag }}.mdx',
        templateFile: 'templates/component/overview.hbs'
      },
      {
        type: 'modify',
        path: '../../src/solid-components.ts',
        pattern: /\/\* plop:component \*\//,
        template: `export { default as {{ properCase tag }} } from './components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.js';\n/* plop:component */`
      }
    ]
  });
}
