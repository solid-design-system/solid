import tester from '../utilities/tester';

import rule from './sd-button-icon-label-required';

tester.run('sd-button-icon-label-required', rule, {
  valid: [
    {
      name: 'sd-icon has label',
      code: `<sd-button><sd-icon label="Search"></sd-icon></sd-button>`
    },
    {
      name: 'sd-button without sd-icon',
      code: `<sd-button>Click Me</sd-button>`
    },
    {
      name: 'sd-button with multiple children with label',
      code: `
        <sd-button>
          <sd-icon label="Search"></sd-icon>
          <span>Text</span>
        </sd-button>
      `
    },
    {
      name: 'sd-button with multiple children without label',
      code: `
        <sd-button>
          <sd-icon></sd-icon>
          <span>Text</span>
        </sd-button>
      `
    }
  ],
  invalid: [
    {
      name: 'sd-icon without label',
      code: `<sd-button><sd-icon></sd-icon></sd-button>`,
      output: `<sd-button><sd-icon label=""></sd-icon></sd-button>`,
      errors: [{ messageId: 'missingLabel' }]
    }
  ]
});
