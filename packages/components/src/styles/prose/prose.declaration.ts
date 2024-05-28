import type { Style } from '../../declaration';

export default {
  styleName: 'sd-prose',
  summary: 'Prose',
  status: 'stable',
  since: '3.6.0',
  attributes: [
    {
      name: 'sd-prose--inverted',
      description: 'Inverts the content, but not tables.'
    },
    {
      name: 'sd-prose--full-width',
      description: 'Overrides the 80ch max-width and makes the prose full width.'
    }
  ]
} satisfies Style;
