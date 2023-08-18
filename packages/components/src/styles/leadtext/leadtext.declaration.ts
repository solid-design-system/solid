import type { Style } from '../solid-styles.declaration';

export default {
  styleName: 'sd-leadtext',
  summary: 'Leadtext is used for text that should be highlighted and a focal point of the page.',
  status: 'experimental',
  since: '1.7',
  attributes: [
    {
      name: 'sd-leadtext--size-...',
      options: ['lg'],
      description: "The leadtext's size."
    },
    {
      name: 'sd-leadtext--inverted',
      description: 'Inverts the leadtext text.'
    }
  ]
} satisfies Style;
