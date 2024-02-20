import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#00d094',
        secondary: '#009e8a',
        default: {
          DEFAULT: '#333333',
          50: '#f6fafb',
          100: '#EEEEEE',
          200: '#DDDDDD',
          300: '#BDBDBD',
          400: '#999999',
          500: '#666666',
          600: '#424242',
          700: '#333333',
          800: '#1A1A1A',
          900: '#000000',
        },
        orange: '#ff5023',
        error: '#eb1c1c',
      },
    },
    screens: {
      lg: '960px', // => @media (min-width: 960px) { ... }
    },
  },
  plugins: [],
};
export default config;
