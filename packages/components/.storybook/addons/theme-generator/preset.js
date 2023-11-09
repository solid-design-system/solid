function previewAnnotations(entry = []) {
  return [...entry, require.resolve('./preview')];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve('./manager')];
}

module.exports = {
  managerEntries,
  previewAnnotations
};
