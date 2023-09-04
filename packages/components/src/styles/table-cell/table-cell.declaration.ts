import type { Style } from '../../declaration';

export default {
  styleName: 'sd-table-cell',
  summary: 'A ...',
  status: 'experimental',
  since: '1.7',
  attributes: [
    {
      name: 'sd-table-cell--divider',
      description: 'Displays a divider to the right.'
    },
    {
      name: 'sd-table-cell--transparent',
      description: 'Applies transparent backround-color to table cell.'
    },
    {
      name: 'sd-table-cell--white',
      description: 'Applies white backround-color to table cell.'
    },
    {
      name: 'sd-table-cell--primary-100',
      description: 'Applies backround-color primary-100 to table cell.'
    },
    {
      name: 'sd-table-cell--neutral-100',
      description: 'Applies backround-color neutral-100 to table cell.'
    }
  ]
} satisfies Style;
