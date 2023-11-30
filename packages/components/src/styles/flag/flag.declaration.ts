import type { Style } from '../../declaration';

export default {
  styleName: 'sd-flag',
  summary: 'Generates basic styles for flag elements.',
  status: 'experimental',
  since: '1.0',
  attributes: [
    {
      name: 'sd-flag--neutral-...',
      options: ['200', '300', '500'],
      description: ''
    }
  ]
} satisfies Style;
