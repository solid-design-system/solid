import rule from './required-sd-icon-label';
import tester from '../../utilities/tester';

tester.run('required-sd-icon-label', rule, {
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
    },
    {
      name: 'sd-button with sd-icon without label and text content',
      code: `
        <sd-button>
          <sd-icon></sd-icon>
          Text
        </sd-button>
      `
    }
  ],
  invalid: [
    {
      name: 'sd-icon without label',
      code: `
        <sd-button>
          <sd-icon></sd-icon>
        </sd-button>
      `,
      errors: [{ messageId: 'missingLabel' }]
    },
    {
      name: 'multiple sd-icon without label',
      code: `
        <sd-button>
          <sd-icon></sd-icon>
          <sd-icon></sd-icon>
        </sd-button>
      `,
      errors: [{ messageId: 'missingLabel' }]
    }
  ]
});
