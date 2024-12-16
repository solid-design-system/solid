import tester from '../utils/tester';

import rule from './sd-button-icon-label';

tester.run('sd-button-icon-label', rule, {
  valid: [
    {
      code: `<sd-button><sd-icon label="Search"></sd-icon></sd-button>`,
      name: 'sd-icon has label'
    },
    {
      code: `<sd-button>Click Me</sd-button>`,
      name: 'sd-button without sd-icon'
    },
    {
      code: `<sd-button><sd-icon label="Search"></sd-icon><span>Text</span></sd-button>`,
      name: 'sd-button with multiple children'
    }
  ],
  invalid: [
    {
      code: `<sd-button><sd-icon></sd-icon></sd-button>`,
      errors: [
        {
          messageId: 'missingLabel',
          line: 1,
          column: 12
        }
      ],
      output: `<sd-button><sd-icon label=""></sd-icon></sd-button>`,
      name: 'sd-icon without label'
    },
    {
      code: `<sd-button><sd-icon aria-hidden="true"></sd-icon></sd-button>`,
      errors: [
        {
          messageId: 'missingLabel',
          line: 1,
          column: 12
        }
      ],
      output: `<sd-button><sd-icon aria-hidden="true" label=""></sd-icon></sd-button>`,
      name: 'sd-icon missing label but has aria-hidden'
    }
  ]
});
