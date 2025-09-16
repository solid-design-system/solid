import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from 'storybook/internal/types';
import { useEffect, useGlobals } from 'storybook/preview-api';
import { PANEL_THEME_NAME, PARAM_KEY } from './constants';

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();

  const panelState = globals[PARAM_KEY + '_STATE'];
  const customThemeActive = globals[PARAM_KEY];
  const customTheme = panelState?.output;

  const isInDocs = context.viewMode === 'docs';

  useEffect(() => {
    const selector = isInDocs ? `#anchor--${context.id} .sb-story` : '#storybook-root';
    displayToolState(selector, customThemeActive, customTheme);
  }, [customThemeActive, customTheme]);

  return StoryFn(context);
};

function displayToolState(selector: string, customThemeActive: boolean, customTheme: string) {
  const styleTagId = 'dynamic-css-variables';
  let styleTag = document.getElementById(styleTagId) as HTMLStyleElement;

  // If customThemeActive is false, remove the style tag if it exists
  if (!customThemeActive) {
    document.getElementById('storybook-root')?.classList.remove(PANEL_THEME_NAME);
    if (styleTag) {
      styleTag.remove();
    }
    return;
  }

  // If customThemeActive is true, update or create the style tag
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = customTheme;
  document.getElementById('storybook-root')?.classList.add(PANEL_THEME_NAME);
}
