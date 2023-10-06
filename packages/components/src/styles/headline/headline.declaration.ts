import type { Style } from '../../declaration';

export default {
  styleName: 'sd-headline',
  summary:
    'Headlines are vital for displaying content hierarchy and to improve accessibility. A headline can be additionally accompanied by an icon. The icon can be displayed on the left side or inline.',
  status: 'stable',
  since: '1.16',
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
      description:
        'Sets inline behavior. Used exclusively when an sd-icon or other component is present. See usage <a href="#inline">here.</a>'
    }
  ]
} satisfies Style;
