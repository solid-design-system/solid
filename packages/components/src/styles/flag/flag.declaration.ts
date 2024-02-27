import type { Style } from '../../declaration';

export default {
  styleName: 'sd-flag',
  summary: 'Generates basic styles for flag elements.',
  status: 'stable',
  since: '1.34.0',
  attributes: [
    {
      name: 'sd-flag--...',
      options: ['neutral-500', 'neutral-300', 'white'],
      description: ''
    }
  ]
} satisfies Style;
