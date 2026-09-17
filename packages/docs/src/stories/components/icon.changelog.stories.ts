import {
  defaultLibrary as DefaultLibrary,
  multiThemingLibrary as MultiTheming,
  internalLibrary as Internal
} from './icon.changelog.logic';

export default {
  title: 'Components/sd-icon/Changelog',
  component: 'sd-icon',
  tags: ['!dev', '!autodocs', 'skip-playwright'],
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: { disable: true }
  }
};

export { DefaultLibrary, MultiTheming, Internal };
