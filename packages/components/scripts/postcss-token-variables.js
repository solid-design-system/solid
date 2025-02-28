import postcss from 'postcss';
import getToken from '../../tokens/src/get-token.js';

const processors = {
  duration: value => `${value}ms`
};

function tokens() {
  return root => {
    const rootRule = postcss.rule({ selector: ':root' });

    const theme = ['duration'].map(name => ({ name, tokens: getToken(name) }));

    theme.forEach(({ name, tokens }) => {
      Object.entries(tokens).forEach(([key, value]) => {
        rootRule.append({ prop: `--sd-${name}-${key}`, value: processors[name]?.(value) ?? value });
      });
    });

    root.walkComments(comment => {
      if (comment.text.trim() === 'postcss:tokens') {
        comment.before(rootRule);
        comment.remove();
      }
    });
  };
}

export default Object.assign(tokens, { postcss: true });
