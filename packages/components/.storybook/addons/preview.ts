import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { PARAM_KEY } from './constants';
import { withGlobals } from './theme-generator/withGlobals';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withGlobals],
  globals: {
    [PARAM_KEY]: false,
    [PARAM_KEY + '_STATE']: ''
  }
};

export default preview;
