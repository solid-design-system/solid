import type { Style } from '../solid-styles.declaration';

export default {
  styleName: 'sd-meta-information',
  summary: 'List of meta information like file size, date or whatever needed.',
  status: 'experimental',
  since: '1.1',
  attributes: [
    {
      name: 'sd-meta-information--size-...',
      options: ['-', 'sm'],
      description: 'The size. Small can be used as an alternative in tight spaces.'
    },
    {
      name: 'sd-meta-information--inverted',
      description: 'Inverts the meta information.'
    },
    {
      name: 'sd-meta-information--pipe',
      description: 'Adds a pipe between the meta information and the date.'
    },
    {
      name: 'sd-meta-information--color-additional',
      description: 'The color of the meta information.'
    }
  ]
} satisfies Style;
