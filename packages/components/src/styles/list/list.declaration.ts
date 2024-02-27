import type { Style } from '../../declaration';

export default {
  styleName: 'sd-list',
  summary: 'Generates basic styles for list elements.',
  status: 'experimental',
  since: '1.33.1',
  attributes: [
    {
      name: 'sd-list--inverted',
      description: 'Inverts the list text.'
    }
  ]
} satisfies Style;
