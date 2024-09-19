import type { Style } from '../../declaration';

export default {
  styleName: 'sd-copyright',
  summary: 'Generates basic styles for copyright elements.',
  status: 'stable',
  since: '2.5.0',
  attributes: [
    {
      name: 'sd-copyright--variant-...',
      options: ['vertical'],
      description: 'The copyrights vertical variant.'
    }
  ]
} satisfies Style;
