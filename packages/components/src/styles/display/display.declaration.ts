import type { Style } from '../../declaration';

export default {
  styleName: 'sd-display',
  summary:
    'Display provides larger text sizes that are not used as headlines. The different sizes allow for a more versatile styling of text elements. Display text should not be used as substitute for headlines.',
  status: 'experimental',
  since: '1.7',
  attributes: [
    {
      name: 'sd-display--size-...',
      options: ['3xl', '4xl'],
      description: "The display's size."
    },
    {
      name: 'sd-display--inverted',
      description: 'Inverts the display text.'
    }
  ]
} satisfies Style;
