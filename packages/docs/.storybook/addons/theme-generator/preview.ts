import type { Renderer, ProjectAnnotations } from 'storybook/internal/types';
import { PARAM_KEY } from './constants';
// TODO: Uncomment code
// import { withGlobals } from './withGlobals';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [],
  initialGlobals: {
    [PARAM_KEY]: false,
    [PARAM_KEY + '_STATE']: ''
  }
};

export default preview;
