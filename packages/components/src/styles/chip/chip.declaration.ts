import type { Style } from '../../declaration';

export default {
  styleName: 'sd-chip',
  summary: 'Generates basic styles for chip elements.',
  status: 'experimental',
  since: '1.0',
  attributes: [
    {
      name: 'sd-chip--primary-...',
      options: ['200', '300', '500'],
      description: ''
    }
  ]
} satisfies Style;
