/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

// function rem2px(input, fontSize = 16) {
//   if (input == null) {
//     return input
//   }
//   switch (typeof input) {
//     case 'object':
//       if (Array.isArray(input)) {
//         return input.map((val) => rem2px(val, fontSize))
//       } else {
//         const ret = {}
//         for (const key in input) {
//           ret[key] = rem2px(input[key])
//         }
//         return ret
//       }
//     case 'string':
//       return input.replace(
//         /(\d*\.?\d+)rem$/,
//         (_, val) => parseFloat(val) * fontSize + 'px'
//       )
//     default:
//       return input
//   }
// }
module.exports = {
  darkMode: ['class'],
  content: [
    './entrypoints/**/*.{html,ts,tsx}',
    './components/**/*.{html,ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        base: '16px',
      },
      colors: {},
    },
    plugins: [require('tailwindcss-animate')],
  },
}
