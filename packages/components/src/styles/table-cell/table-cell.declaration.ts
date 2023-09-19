import type { Style } from '../../declaration';

export default {
  styleName: 'sd-table-cell',
  summary: 'A table cell is a single cell inside a table, used to display discrete data elements.',
  status: 'stable',
  since: '1.13',
  attributes: [
    {
      name: 'sd-table-cell--divider',
      description: 'Displays a divider to the right.'
    },
    {
      name: 'sd-table-cell--bg-...',
      options: ['white', 'primary-100', 'neutral-100'],
      description:
        'Applies the selected background-color to the table cell. If not selected, a transparent background-color is used per default.'
    }
  ]
} satisfies Style;
