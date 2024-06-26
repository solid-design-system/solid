import type { Style } from '../../declaration';

export default {
  styleName: 'sd-media',
  summary: 'Generates basic styles for media elements.',
  status: 'stable',
  since: '2.5.0',
  attributes: [
    {
      name: 'sd-media--inverted',
      description: 'Inverts the figcaption text.'
    }
  ]
} satisfies Style;
