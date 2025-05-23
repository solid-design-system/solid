const sanitizeValue = value => {
  value = value.replaceAll('\b', '');
  return value;
};

module.exports = sanitizeValue;
