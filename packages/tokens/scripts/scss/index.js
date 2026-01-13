const escape = name => name.replace('.', '\\.').replace('/', '\\/');

export const generateScss = ({ theme }) => {
  return theme.map(token => `$${escape(token.name)}: var(--${escape(token.name)});`).join('\n');
};
