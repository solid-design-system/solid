import { withThemeByClassName as _withThemeByClassName } from '@storybook/addon-themes';

export const withThemeByClassName = options => {
  return (Story, context) => {
    const isDocs = !!document.querySelector('.docs-story');
    const parentSelector = isDocs ? '.docs-story' : '.sb-show-main';

    const decorator = _withThemeByClassName({
      ...options,
      parentSelector
    });

    const result = decorator(Story, context);
    const theme = options.themes[context.globals.theme];

    ['.docs-story', '.sb-show-main'].forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        Object.values(options.themes).forEach(c => el.classList.remove(c));
      });
    });

    document.querySelectorAll(parentSelector).forEach(el => {
      el.classList.add(theme);
    });

    return result;
  };
};
