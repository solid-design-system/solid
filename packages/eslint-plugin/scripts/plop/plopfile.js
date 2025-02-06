export default function (plop) {
  plop.setGenerator('rule', {
    description: 'Generate a new rule',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Rule name? (e.g. required-sd-icon-label)',
        validate: value => {
          if (!/^[a-z-]+/.test(value)) {
            return 'Only lowercase letters and dashes are allowed.';
          }

          if (value.includes('--')) {
            return 'Double dashes are not allowed.';
          }

          if (value.endsWith('-')) {
            return 'Rule name cannot end with a dash.';
          }

          return true;
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/rules/{{ name }}/{{ name }}.ts',
        templateFile: 'templates/rule.hbs'
      },
      {
        type: 'add',
        path: '../../src/rules/{{ name }}/{{ name }}.spec.ts',
        templateFile: 'templates/tests.hbs'
      }
    ]
  });
}
