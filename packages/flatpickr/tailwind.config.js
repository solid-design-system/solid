/** @type {import('tailwindcss').Config} */

const theme = require('../tokens/src/create-theme.cjs');

export default {
  content: ["./src/*.css"],
  theme,
  plugins: [],
}

