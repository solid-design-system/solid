import type { Style } from '../../declaration';

export default {
  styleName: 'sd-container',
  summary:
    'Container lets users delimit and highlight a piece of content. The user has no interaction with it, it is merely a visual element that influences the flow of the page.',
  status: 'stable',
  since: '1.30.0',
  attributes: [
    {
      name: 'sd-container--variant-...',
      options: ['primary-100', 'primary', 'border-neutral-400', 'white'],
      description: 'Defines the background color and border of sd-container.'
    },
    {
      name: 'sd-container--padding-...',
      options: ['sm'],
      description: 'Defines the padding of sd-container. This makes it adaptable to both small and large screens.'
    },
    {
      name: 'sd-container--triangle-...',
      options: ['top, right, bottom, left'],
      description:
        'Defines an optional triangle cut-out for sd-container. This allows for an indentation resembling an arrow on any side of the container. CSS Property `triangle-background` defines the background color of the cut-out.'
    }
  ]
} satisfies Style;
