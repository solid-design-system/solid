const resolveValue = require('./lib/resolve-value.js');
const sanitizeValue = require('./lib/sanitize-value.js');
const tokens = require('./tokens.json');

const getToken = token => {
  const result = {};
  Object.entries(tokens['UI Semantic'][token])
    .map(([name, value]) => ({ name, ...value }))
    .forEach(({ name, value }) => {
      const convertedValue = resolveValue(value, tokens);
      result[sanitizeValue(name)] = convertedValue;
    });
  return result;
};

module.exports = getToken;
