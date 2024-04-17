import type { Style } from '../../declaration';

export default {
  styleName: 'sd-footnotes',
  summary:
    'A footnote contains additional information/sources related to the content and usually appears at the bottom of a page or below the content it refers to.',
  status: 'stable',
  since: '2.9.0',
  attributes: [
    {
      name: 'sd-footnote--continue',
      description:
        'This attribute to continue the footnote numbering from the previous footnote between different lists.'
    }
  ]
} satisfies Style;
