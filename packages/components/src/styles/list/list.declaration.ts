import type { Style } from '../../declaration';

export default {
  styleName: 'sd-list',
  summary: 'Generates basic styles for list elements.',
  status: 'stable',
  since: '1.39.0',
  attributes: [
    {
      name: 'sd-list--inverted',
      description: 'Inverts the list text.'
    }
  ]
} satisfies Style;
