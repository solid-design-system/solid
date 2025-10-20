import { withThemeByClassName as _withThemeByClassName } from '@storybook/addon-themes';

export const withThemeByClassName = ({ parentSelector, ...options }) => {
  const decorator = _withThemeByClassName({
    ...options,
    parentSelector
  });

  return (Story, context) => {
    const result = decorator(Story, context);

    const themeClass = options.themes[context.globals.theme];
    document.querySelectorAll(parentSelector).forEach(el => {
      Object.values(options.themes).forEach(c => el.classList.remove(c));
      el.classList.add(themeClass);
    });

    return result;
  };
};
