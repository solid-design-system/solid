import type { Style } from '../../declaration';

export default {
  styleName: 'sd-copyright',
  summary: 'Generates basic styles for copyright elements.',
  status: 'stable',
  since: '2.5.0',
  attributes: [
    {
      name: 'sd-copyright--color-...',
      options: ['black'],
      description: 'The copyrights text color.'
    },
    {
      name: 'sd-copyright--no-shadow',
      description: 'Removes the copyrights shadow.'
    },
    {
      name: 'sd-copyright--orientation-...',
      options: ['vertical'],
      description: 'The copyrights orientation.'
    },
    {
      name: 'sd-copyright--placement-...',
      options: ['top'],
      description: 'The copyrights placement.'
    }
  ]
} satisfies Style;
