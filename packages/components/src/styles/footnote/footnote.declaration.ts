import type { Style } from '../../declaration';

export default {
  styleName: 'sd-footnote',
  summary:
    'A footnote contains additional information/sources related to the content and usually appears at the bottom of a page or below the content it refers to.',
  status: 'stable',
  since: '2.9.0',
  attributes: [
    {
      name: 'sd-footnote--number',
      description: 'This attribute allows content references to be displayed as numbered lists.'
    },
    {
      name: 'sd-footnote--reset',
      description:
        'Resets the number of the footnote and starts counting from 1. This should be used at the beginning of a counting sequence and can be used again when starting a new context.'
    },
    {
      name: 'sd-footnote--inverted',
      description: 'Inverts the footnote text.'
    }
  ]
} satisfies Style;
