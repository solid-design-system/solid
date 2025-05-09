const sanitizeValue = require('./sanitize-value.js');

const resolveValue = (value, tokens) => {
  // if value starts with "{" it's a reference.
  if (value.startsWith('{')) {
    const path = value.replace('{', '').replace('}', '').split('.');
    const resolvePath = (_path, set) => {
      let resolvedValue = tokens[set];
      _path.forEach(p => {
        resolvedValue = resolvedValue[p];
      });
      return resolvedValue;
    };
    const resolvedValue = resolvePath(path, 'UI Core') || resolvePath(path, 'UI Semantic');
    return resolveValue(resolvedValue.value);
  } else {
    return sanitizeValue(value);
  }
};

module.exports = resolveValue;
