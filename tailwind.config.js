/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-blue': '#E6F3F7',
        'body-white': '#FAFAFA',
        'footer-tan': '#F5E6D3',
        'footer-oak': '#D4B494',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 