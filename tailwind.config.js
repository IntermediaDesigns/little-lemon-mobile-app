/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,js}',
    './components/**/*.{ts,tsx,js}',
    './node_modules/@rnr/**/*.{ts,tsx,js}',
    '***/**/*.{ts,tsx,js}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}