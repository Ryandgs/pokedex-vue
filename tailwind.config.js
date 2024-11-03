/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{vue,js}',
    './src/pages/**/*.{vue,js}',
    './src/App.vue'
  ],
  theme: {
    extend: {},
  },
  theme: {
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
}
