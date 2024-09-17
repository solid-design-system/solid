import type { Style } from '../../declaration';

export default {
  styleName: 'sd-chip',
  summary: 'Generates basic styles for chip elements.',
  status: 'stable',
  since: '1.30.0',
  attributes: [
    {
      name: 'sd-chip--...',
      options: ['primary-300', 'primary-500', 'white'],
      description: ''
    }
  ]
} satisfies Style;
