import type { Style } from '../../declaration';

export default {
  styleName: 'sd-table-cell',
  summary: 'A table cell is a single cell inside a table, used to display discrete data elements.',
  status: 'stable',
  since: '1.12',
  attributes: [
    {
      name: 'sd-table-cell--divider',
      description: 'Displays a divider to the right.'
    },
    {
      name: 'sd-table-cell--bg-...',
      options: ['transparent', 'white', 'primary-100', 'neutral-100'],
      description: 'Applies the selected backround-color to table cell.'
    }
  ]
} satisfies Style;
