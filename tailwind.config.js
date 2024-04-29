/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
