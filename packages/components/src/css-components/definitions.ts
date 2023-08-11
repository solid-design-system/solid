type StyleStatus = 'experimental' | 'stable' | 'deprecated'; // or any other status you might have

interface StyleAttribute {
  name: string;
  description: string;
  /**
   * If you don't set options, the attribute will be rendered as a boolean attribute.
   */
  options?: string[];
}

interface Style {
  styleName: string;
  summary: string;
  status: StyleStatus;
  since: string;
  attributes: StyleAttribute[];
}

export const styleDefinitions: Style[] = [
  {
    styleName: 'sd-meta-information',
    summary: 'List of meta information like file size, date or whatever needed.',
    status: 'experimental',
    since: '1.1',
    attributes: [
      {
        name: 'sd-meta-information--size-...',
        options: ['-', 'sm', 'lg'],
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
  },
  {
    styleName: 'sd-headline',
    summary: 'Headlines are vital for displaying content hierarchy and to improve accessibility.',
    status: 'experimental',
    since: '1.1',
    attributes: [
      {
        name: 'sd-headline--size-...',
        options: ['-', '4xl', '3xl', 'xl', 'lg', 'base'],
        description: 'The size. Small can be used as an alternative in tight spaces.'
      },
      {
        name: 'sd-headline--inverted',
        description: 'Inverts the headline.'
      }
    ]
  }
];
