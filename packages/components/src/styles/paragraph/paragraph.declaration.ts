import type { Style } from '../../declaration';

export default {
  styleName: 'sd-paragraph',
  summary:
    'A paragraph is used to display blocks of text. It uses the base font size and can contain bold and/or link styles.',
  status: 'experimental',
  since: '1.7',
  attributes: [
    {
      name: 'sd-paragraph--size-...',
      options: ['sm'],
      description: "The paragraph's size."
    },
    {
      name: 'sd-paragraph--inverted',
      description: 'Inverts the paragraph text.'
    }
  ]
} satisfies Style;
