/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "475px",
      ...defaultTheme.screens,
      '3xl': "1920px",
    },
    fontSize: {
      xxs: '0.625rem',
      ...defaultTheme.fontSize,
    },
    extend: {
      scale: {
        102: '1.02',
      },
      colors: {
        skin: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          tertiary: 'var(--tertiary)',
          quaternary: 'var(--quaternary)',
          quinary: 'var(--quinary)',
          senary: 'var(--senary)',
          success: 'var(--success)',
          warning: 'var(--warning)',
          failure: 'var(--failure)',
        },
      },
    },
  },
  plugins: [],
};
