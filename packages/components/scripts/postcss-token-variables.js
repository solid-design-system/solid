import postcss from 'postcss';
import getToken from '../../tokens/src/get-token.js';

const TOKENS = ['duration'];

const processors = {
  duration: value => `${value}ms`
};

function tokens() {
  return {
    postcssPlugin: 'postcss-token-variables',
    Once(root) {
      const rootRule = postcss.rule({ selector: ':root' });

      const theme = TOKENS.map(name => ({ name, tokens: getToken(name) }));

      theme.forEach(({ name, tokens }) => {
        Object.entries(tokens).forEach(([key, value]) => {
          rootRule.append({ prop: `--sd-${name}-${key}`, value: processors[name]?.(value) ?? value });
        });
      });

      root.walkAtRules(atRule => {
        if (atRule.name === 'solid' && atRule.params.trim() === 'variables') {
          atRule.before(rootRule);
          atRule.remove();
        }
      });
    }
  };
}

export default Object.assign(tokens, { postcss: true });
