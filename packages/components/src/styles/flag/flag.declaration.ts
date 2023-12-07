import type { Style } from '../../declaration';

export default {
  styleName: 'sd-flag',
  summary: 'Generates basic styles for flag elements.',
  status: 'experimental',
  since: '1.33.2',
  attributes: [
    {
      name: 'sd-flag--...',
      options: ['neutral-500', 'neutral-300', 'white'],
      description: ''
    }
  ]
} satisfies Style;
