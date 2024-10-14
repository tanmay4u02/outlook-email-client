/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#E54065',
        'secondary-background': '#F2F2F2',
        border: '#DFD2DC',
        'primary-text': '#636363',
        'selected-button': '#E1E4EA',
      },
    },
  },
  plugins: [],
};
