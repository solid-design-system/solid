import type { Style } from '../solid-styles.declaration';

export default {
  styleName: 'sd-meta',
  summary: 'List of meta information like file size, date or whatever needed.',
  status: 'experimental',
  since: '1.1',
  attributes: [
    {
      name: 'sd-meta--size-...',
      options: ['sm'],
      description: 'The size. Small can be used as an alternative in tight spaces.'
    },
    {
      name: 'sd-meta--inverted',
      description: 'Inverts the meta information.'
    },
    {
      name: 'sd-meta--pipe',
      description: 'Adds a pipe between the meta information and the date.'
    },
    {
      name: 'sd-meta--color-additional',
      description: 'The color of the meta information.'
    }
  ]
} satisfies Style;
