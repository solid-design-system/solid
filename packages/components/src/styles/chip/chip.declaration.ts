import type { Style } from '../../declaration';

export default {
  styleName: 'sd-chip',
  summary: 'Generates basic styles for chip elements.',
  status: 'stable',
  since: '1.30.0',
  attributes: [
    {
      name: 'sd-chip--...',
      options: ['primary-500', 'primary-300', 'white'],
      description: ''
    }
  ]
} satisfies Style;
