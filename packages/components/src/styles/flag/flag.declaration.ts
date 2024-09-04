import type { Style } from '../../declaration';

export default {
  styleName: 'sd-flag',
  summary: 'Generates basic styles for flag elements.',
  status: 'stable',
  since: '1.34.0',
  attributes: [
    {
      name: 'sd-flag--...',
      options: ['neutral-300', 'neutral-500', 'white'],
      description: ''
    }
  ]
} satisfies Style;
