import type { Style } from '../../declaration';

export default {
  styleName: 'sd-hidden-links',
  summary: 'Hidden links can be used to show links only for keyboard users.',
  status: 'experimental',
  since: '3.12.0',
  attributes: [
    {
      name: 'sd-hidden-links--multiple',
      description: 'Adapts styling for multiple skip links.'
    },
    {
      name: 'sd-hidden-links--debug',
      description: 'Always show the links for debugging purposes.'
    }
  ]
} satisfies Style;
