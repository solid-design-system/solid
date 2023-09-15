import type { Style } from '../../declaration';

export default {
  styleName: 'sd-quote',
  summary:
    'Display provides larger text sizes that are not used as headlines. The different sizes allow for a more versatile styling of text elements. Display text should not be used as substitute for headlines.',
  status: 'experimental',
  since: '1.1',
  attributes: [
    {
      name: 'sd-quote--size-...',
      options: ['3xl', 'xl'],
      description: "The quote's size."
    },
    {
      name: 'sd-quote--inverted',
      description: 'Inverts the quote text.'
    },
    {
      name: 'sd-quote--image',
      description: 'Adds an image to the quote.'
    }
  ]
} satisfies Style;
