import type { Style } from '../../declaration';

export default {
  styleName: 'sd-meta',
  summary: 'meta information like file size, date or whatever needed.',
  status: 'stable',
  since: '1.7',
  attributes: [
    {
      name: 'sd-meta--size-...',
      options: ['sm'],
      description: 'The size. Small can be used as an alternative in tight spaces.'
    },
    {
      name: 'sd-meta--inverted',
      description: 'Inverts the meta element.'
    },
    {
      name: 'sd-meta--pipe',
      description: 'Adds a pipe right from the meta elemen t.'
    },
    {
      name: 'sd-meta--light',
      description: 'Makes sd-meta light.'
    }
  ]
} satisfies Style;
