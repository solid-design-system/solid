import type { Style } from '../../declaration';

export default {
  styleName: 'sd-interactive',
  summary: 'Generates basic styles for interactive elements.',
  status: 'experimental',
  since: '1.11',
  attributes: [
    {
      name: 'sd-interactive--disabled',
      description: 'Makes an element look disabled.'
    },
    {
      name: 'sd-interactive--reset',
      description: 'Resets the default browser styles of e. g. a button.'
    }
  ]
} satisfies Style;
