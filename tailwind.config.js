/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#0f0f0f',
      secondary: '#3d3d3d',
      tertiary: '#272727',
      logo: '#ffffff',
      'btn-blue': '#3ea6ff',
      'white-hover': '#d9d9d9',
      'gray-hover': '#3f3f3f',
      'like-hover': '#584f4b',
      'like-btn': '#2d2c29',
      test: '#ff0000',
      'main-text': '#f1f1f1',
      'sub-text': '#aaaaaa',
      'sub-menu': '#282828',
    },
  },
  plugins: [],
}
