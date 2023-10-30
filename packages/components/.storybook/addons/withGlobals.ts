import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
import { useEffect, useGlobals } from '@storybook/preview-api';
import { PARAM_KEY, PANEL_DEFAULTS } from './constants';
import { calculateColorsAsCss } from './colorCalculations';
import theme from 'tailwind-theme';

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();

  const panelStateStr = globals[PARAM_KEY + '_STATE'];
  const panelState = panelStateStr ? JSON.parse(panelStateStr) : null;

  const customThemeActive = globals[PARAM_KEY];
  let customTheme = calculateColorsAsCss(
    panelState?.colors || PANEL_DEFAULTS.colors,
    theme,
    panelState?.useDefaultLuminanceMap || PANEL_DEFAULTS.useDefaultLuminanceMap
  );

  const isInDocs = context.viewMode === 'docs';

  useEffect(() => {
    const selector = isInDocs ? `#anchor--${context.id} .sb-story` : '#storybook-root';
    displayToolState(selector, customThemeActive, customTheme);
  }, [customThemeActive, customTheme]);

  return StoryFn();
};

function displayToolState(selector: string, customThemeActive: boolean, customTheme: string) {
  const styleTagId = 'dynamic-css-variables';
  let styleTag = document.getElementById(styleTagId) as HTMLStyleElement;

  // If customThemeActive is false, remove the style tag if it exists
  if (!customThemeActive) {
    if (styleTag) {
      styleTag.remove();
    }
    return; // Exit early
  }

  // If customThemeActive is true, update or create the style tag
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = customTheme;
}
