import type { Style } from '../../declaration';

export default {
  styleName: 'sd-headline',
  summary: 'Leadtext is used for text that should be highlighted and a focal point of the page.',
  status: 'experimental',
  since: '1.7',
  attributes: [
    {
      name: 'sd-headline--size-...',
      options: ['3xl', 'xl', 'lg', 'base'],
      description: "The headlines's size."
    },
    {
      name: 'sd-headline--inverted',
      description: 'Inverts the headline text.'
    },
    {
      name: 'sd-headline--inline',
      description: 'Maintains inline behavior when interacting with icons or other components.'
    }
  ]
} satisfies Style;
