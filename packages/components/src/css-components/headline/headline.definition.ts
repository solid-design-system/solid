import type { Style } from '../definitions';

export default {
  styleName: 'sd-headline',
  summary: 'Headlines are vital for displaying content hierarchy and to improve accessibility.',
  status: 'experimental',
  since: '1.1',
  attributes: [
    {
      name: 'sd-headline--size-...',
      options: ['-', '4xl', '3xl', 'xl', 'lg', 'base'],
      description: 'The size. Small can be used as an alternative in tight spaces.'
    },
    {
      name: 'sd-headline--inverted',
      description: 'Inverts the headline.'
    }
  ]
} satisfies Style;
