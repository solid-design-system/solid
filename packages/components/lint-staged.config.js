export default {
  'src/**/*.{js,ts}': 'eslint --max-warnings 0 --fix',
  '*': 'prettier --write --ignore-unknown'
};
